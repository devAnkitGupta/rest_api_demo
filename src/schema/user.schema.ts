import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is Required",
        }),
        password: string({
            required_error: "Password is Required",
        }).min(6, "Password too short - 6 minimum"),
        passwordConfirmation: string({
            required_error: "Confirmation Required",
        }),
        email: string({
            required_error: "Email is required"
        }).email("Not a valid email"),
    }).refine((data) => data.password === data.passwordConfirmation,{
        message: "Password do not match",
        path: ["passwordConfirmation"],
    }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;