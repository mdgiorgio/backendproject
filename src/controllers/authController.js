const bcrypt = require('bcrypt')
//const httpStatus = require('../helpers/httpStatus')

const authController = (People) => {
    const logIn = async (req, res) => {
        const { body } = req
        
        const user = await People.findOne({
            username: body.username
        })

        if(user == null ||
            !(await bcrypt.compare(body.password, user.password))
        )   {
            return res.status(401).send('Invalid credentials')
        }

        return res.status(200).send('Logged In')
    }

    const register = async (req, res) => {
        try {
            const { body } = req
    
            const encryptedPassword = await bcrypt.hash(body.password, 10)
    
            const encryptedData = {
                ...body,
                password: encryptedPassword
            }
    
            const people = await new People(encryptedData)
    
            await people.save()
    
            res.status(201).json(people)
        } catch (err) {
            res.status(500).send(err.name)
        }
      }

    return { logIn, register }
}
 
module.exports = authController