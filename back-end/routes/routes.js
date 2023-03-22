

const Contact = require('../models/contact')


const express = require("express");
const router = new express.Router();


router.post('/submit', async (req, res, next) => {
  try {
    const { name, email, message } = req.body
    Contact.submit({name, email, message})
  } catch (e) {
    
  }
  return res.send('test route')
})


// router.post("/register", async function (req, res, next) {
//     try {
//         const validator = jsonschema.validate(req.body, newUserSchema);
//         if (!validator.valid) {
//             const errs = validator.errors.map(e => e.stack);
//             throw new BadRequestError(errs);
//         }
//         const newUser = await User.register({ ...req.body, privilegeLevel: 'basic' });
//         console.log(newUser)
//         const token = createToken(newUser);
//         return res.status(201).json({ token });
//     } catch (err) {
//         return next(err);
//     }
// });

module.exports = router;