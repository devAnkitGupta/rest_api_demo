import jwt from 'jsonwebtoken'
import config from 'config'

const privateKey = 'privateKey'
const publicKey = 'publicKey'

export function signJwt(
    object: Object,
    options?: jwt.SignOptions | undefined
) {
    return jwt.sign(object, privateKey as jwt.Secret,);
}

export function verifyJwt(token: string) {
  try {
    const decoded =jwt.verify(token, publicKey as jwt.Secret);
    return {
        valid: true,
        expired: false,
        decoded,
    }
  } catch (e : any) {
    return {
        valid: false,
        expired: e.message === "jwt expired",
        decoded: null,
    }
  }
}