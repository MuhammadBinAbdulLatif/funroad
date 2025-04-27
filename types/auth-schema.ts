import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().nonempty().min(8,{message: 'Password must be 8 characters or long'}),
    username: z.string().min(3, {message: "Username must be alteast three characters"}).max(56, {message: 'Username must be less than 56 characters'}).regex(/^[a-zA-Z0-9_]+$/, {message: 'Username must only contain letters, numbers and underscores'}).refine((val)=> !val.includes('--'), {message: 'Username cannot contain --'}).transform((val)=> val.toLowerCase())
})



export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),

})