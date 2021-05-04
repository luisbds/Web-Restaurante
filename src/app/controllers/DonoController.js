import * as Yup from 'yup'
import Dono from '../models/Dono'

class donoController{
  async store(req, res) {
    //validar os campos
    const esquema = Yup.object().shape({
      name: Yup.string().required(), // campo name é do tipo string e é obrigatorio
      email: Yup.string().email().required(),
    })
    if(!(await esquema.isValid(req.body))){
      return res.status(400).json({mensagem: "Campos invalidos"})

    }

    const donoExists = await User.findOne({where: {email: req.body.email }})

    if(donoExists){
      return res.status(400).json({mensagem: "Dono já existe"})
    }

    const { id, name, email } = await Dono.create(
      req.body
    );

    return res.json({ id, name, email });
  }

}

  export default new donoController();