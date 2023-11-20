import express, { Request, Response } from 'express'
import { User, UserModel } from '../models/user'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils'

//creation d'un router pour les requetes liées aux users
export const userRouter = express.Router()
//route pour recuperer les infos d'un user
userRouter.post(
  '/signin',
  //asyncHandler permet de gerer les erreurs asynchrones
  asyncHandler(async (req: Request, res: Response) => {
    //on cherche l'utilisateur dans la base de donnée grace à son email
    const user = await UserModel.findOne({ email: req.body.email })
    //si l'utilisateur existe et que le mot de passe est bon, on renvoie les infos de l'utilisateur dans la reponse de la requete post signin
    if (user) {
      //compareSync compare le mot de passe rentré par l'utilisateur avec le mot de passe hashé dans la base de donnée
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //ici on renvoie le user dans la reponse de la requete post signin (pour que l'utilisateur soit connecté directement apres son inscription) et on lui donne un token grace à la fonction generateToken
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        })
        return
      }
    }
    //si l'utilisateur n'existe pas ou que le mot de passe est incorrect, on renvoie un message d'erreur
    res.status(401).send({ message: 'Invalid email or password' })
  })
)

userRouter.post(
  '/signup',
  asyncHandler(async (req: Request, res: Response) => {
    // methode create de mongoose qui permet de creer un user dans la base de donnée
    const user = await UserModel.create({
      //passe les données du body dans le model user
      //données que l'utilisateur a rentré dans le formulaire
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      //converti l'objet en User grace au type User dans le model user et le typecast en User grace à "as User" (pour que typescript ne rale pas) et le renvoie dans la reponse de la requete post signup
    } as User)
    // ici on renvoie le user dans la reponse de la requete post signup (pour que l'utilisateur soit connecté directement apres son inscription) et on lui donne un token grace à la fonction generateToken
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    })
  })
)
