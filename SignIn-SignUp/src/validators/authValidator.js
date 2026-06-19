const {z} = require('zod');
const registrationSchema = z.object({
    username: z.string().min(3, "Username must be 3 characters"),
    email: z.email("Invalid Email"),
    password : z.string().min(6,"Password must be 6 characters")
})

module.exports = {registrationSchema}