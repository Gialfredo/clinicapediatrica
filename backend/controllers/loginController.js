const bcrypt = require('bcrypt');
const User = require('../models/User'); // Importa el modelo de usuario


const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
};



const loginUser = async (req, res) => {
    const { username, password } = req.body;

    console.log("Datos recibidos: ", req.body);

    try {
        // Buscar el usuario en la base de datos
        const user = await User.findOne({ username });
        console.log(user);

        if (!user) {
            return res.status(400).json({ message: 'USUARIO NO ENCONTRADO' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrectaa' });
        }

        res.json({ message: 'LOGIN EXITOSO' });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: 'ERROR EN EL SERVIDOR', error });
    }
};

module.exports = { registerUser, loginUser };
