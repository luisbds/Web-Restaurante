import * as Yup from 'yup'
import Prato from '../models/Prato'

class pratoController{
  async store(req, res) {
    //validar os campos
    const esquema = Yup.object().shape({
      name: Yup.string().required(), // campo name é do tipo string e é obrigatorio
      categoria: Yup.string().required()
    })
    if(!(await esquema.isValid(req.body))){
      return res.status(400).json({mensagem: "Campos invalidos"})

    }

    const pratoExists = await User.findOne({where: {email: req.body.email }})

    if(pratoExists){
      return res.status(400).json({mensagem: "Prato já existe"})
    }

    const { id, name, categoria } = await Prato.create(
      req.body
    );

    return res.json({ id, name, categoria });
  }

  async update(req, res) {
    const esquema = Yup.object().shape({
      name: Yup.string(),
      categoria: Yup.string(),
    })

    if(!(await esquema.isValid(req.body))){
      return res.status(400).json({mensagem: "Campos invalidos"})
    }

    const { name, categoria } = req.body;
    const prato = await Prato.findByPk(req.prato_id) //buscar o prato no banco de dados pelo id

    return res.json({ id, name, categoria });
  }
}

export default new pratoController();