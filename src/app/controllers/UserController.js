import * as Yup from 'yup'
import User from '../models/User'

class userController{
  async store(req, res) {
    //validar os campos
    const esquema = Yup.object().shape({
      name: Yup.string().required(), // campo name é do tipo string e é obrigatorio
      email: Yup.string().email().required(),
    })
    if(!(await esquema.isValid(req.body))){
      return res.status(400).json({mensagem: "Campos invalidos"})

    }

    const userExists = await User.findOne({where: {email: req.body.email }})

    if(userExists){
      return res.status(400).json({mensagem: "Usuario já existe"})
    }

    const { id, name, email } = await User.create(
      req.body
    );

    return res.json({ id, name, email });
  }
}

export default new userController();