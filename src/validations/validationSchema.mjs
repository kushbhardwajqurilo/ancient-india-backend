import z from "zod";

export const emailNotifyShcema = z.object({
    email: z.string().trim().lowercase().max(125).email("Invalid Email Address")
}
)