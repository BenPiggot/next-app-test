import bcrypt from 'bcrypt'; 

export const hashPassword = (password: string) => {
  bcrypt.hash(password, 10)  
}

export const comparePassword = (plainTextPassword, hashedPassword ) => {
  bcrypt.compare(plainTextPassword, hashedPassword)
}