const UserRepository = require('../repositories/UserRepository');
const User = require('../models/User');

const userRepository = new UserRepository(User);


exports.login = async (req, res) => {
    try {
        console.log(req.body)
        const user = req.body;
        const { email, password } = user
        console.log('Email e senha recebidos:', email, password); 


        if (!user) {
            console.log('Usuário não encontrado no banco de dados');
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        
        console.log('Senha do usuário no banco de dados:', user.password);
        if (user.password !== password) {
            console.log('Senha incorreta');
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        console.log('Autenticação bem-sucedida');
        res.redirect("http://127.0.0.1:5000/")
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: error.message });
    }
};



exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

exports.getSingleUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createUser = async (req, res) => {
    try {
        console.log('Dados recebidos no corpo da solicitação:', req.body);

        const newUser = new User(req.body);
        await newUser.save();

        console.log('Novo usuário salvo no banco de dados:', newUser);

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar novo usuário:', error);
        res.status(400).json({message: error.message});
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};