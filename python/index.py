from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '24534152',
    'database': 'feira'
}

conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

@app.route('/')
def index():
    cursor.execute("SELECT * FROM frutas")
    frutas = cursor.fetchall()
    return render_template('index.html', frutas=frutas)

@app.route('/adicionar_fruta')
def adicionar_fruta():
    return render_template('pages/adc_fruta.html')

@app.route('/editar_fruta/<int:id>')
def editar_fruta(id):
    cursor.execute("SELECT nome FROM frutas WHERE id = %s", (id,))
    fruta = cursor.fetchone()
    return render_template('pages/editar_fruta.html', id=id, nome_fruta=fruta[0])

@app.route('/salvar_edicao/<int:id>', methods=['POST'])
def salvar_edicao(id):
    nome_fruta = request.form['nomeFruta']
    cursor.execute("UPDATE frutas SET nome = %s WHERE id = %s", (nome_fruta, id))
    conn.commit()
    return redirect(url_for('index'))

@app.route('/salvar_fruta', methods=['POST'])
def salvar_fruta():
    nome_fruta = request.form['nomeFruta']
    cursor.execute("INSERT INTO frutas (nome) VALUES (%s)", (nome_fruta,))
    conn.commit()
    return redirect(url_for('index'))

@app.route('/deletar_fruta/<int:id>')
def deletar_fruta(id):
    cursor.execute("DELETE FROM frutas WHERE id = %s", (id,))
    conn.commit()
    return redirect(url_for('index'))



if __name__ == '__main__':
    app.run(debug=True)
