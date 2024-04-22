class UserRepository {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async findById(id) {
        return await this.UserModel.findById(id);
    }

    async findByEmail(email) {
        console.log('Consultando usuário por email:', email); 
        return await this.UserModel.findOne({ email });
    }

    async create(userData) {
        return await this.UserModel.create(userData);
    }

    async update(id, userData) {
        return await this.UserModel.findByIdAndUpdate(id, userData, { new: true });
    }

    async delete(id) {
        await this.UserModel.findByIdAndDelete(id);
    }
}

module.exports = UserRepository;