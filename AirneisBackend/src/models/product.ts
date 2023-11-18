import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

// Définition du modèle de produit avec des options de schéma pour les timestamps
@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id!: string // Identifiant unique du produit

  @prop({ required: true }) // Nom du produit
  public name!: string

  @prop({ required: true, unique: true }) // Slug du produit
  public slug!: string

  @prop({ required: true }) // Image du produit
  public image!: string

  @prop({ required: true }) // Catégorie du produit
  public category!: string

  @prop({ required: true }) // Description du produit
  public description!: string

  @prop({ required: true }) // Marque du produit
  public brand!: string

  @prop({ required: true, default: 0 }) // Prix du produit
  public price!: number

  @prop({ required: true, default: 0 }) // Stock du produit
  public countInStock!: number
}

// Exportation du modèle de produit
export const ProductModel = getModelForClass(Product)
