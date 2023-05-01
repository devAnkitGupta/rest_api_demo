import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../models/user.models";

export async function createUser(input: UserInput) {
    try {
        const user = await UserModel.create(input)
        return omit(user.toJSON(), "password");
    } catch (e: any) {
       throw new Error(e);
    }
}