import { Schema, model, Document } from 'mongoose'

// extendemos o document do mongoose para nossa interface não sobre escrever o type padrao do mongoose
interface IUser extends Document {
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string // adicionando metodo na nossa interface
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

// incrementando método no nosso schema

UserSchema.methods.fullName = function () :string {
  return this.firstName + ' ' + this.lastName
}
// o model pode receber por padrão uma interface, desde que, essa interface extenda o "Document"
export default model<IUser>('User', UserSchema)
