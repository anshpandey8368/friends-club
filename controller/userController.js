const UserSchema = require('../model/User');
const path = require('path');
const bcrypt = require('bcrypt');

exports.postData = async(req,res) => {
   try{
    const { email , Fullname , Username , Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10); // Hash the password
    const newUser = new UserSchema({ email , Fullname , Username , Password: hashedPassword });
    await newUser.save();
    res.sendFile(path.join(__dirname , '..' , 'views' , 'index.html'));
   }
   catch(error){
    console.error('error' , error)
    res.status(500).send('An error occurred while processing your request.');
   }
}

exports.findOut = async(req,res) => {
   try{
      const{ email } = req.body;
      const existingUser = await UserSchema.findOne({ email });
      if (existingUser) {
         return res.status(400).json({
             success: true,
             message: "User already exists"
         });
     }
     res.sendFile(path.join(__dirname , '..' , 'views' , 'homePage.html'));

  } catch (error) {
     console.error('Error Saving User', error);
     res.status(500).json({ success: false, message: "Error in signup" });
  }
}


