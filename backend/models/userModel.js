const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// creating a static method for signup in the user model and also the function shd be a normal function not an arrow function
userSchema.statics.signup = async function(email, password){
    if (!email || !password){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Enter a valid email")
    }
    if (!validator.isStrongPassword(password)){
        throw Error("password not strong enough")
    }
    // we use the this keywork instead of the user model since the user model is not yet created at this stage
    const exists = await this.findOne({email});
    if (exists){
        throw Error("Email already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password:hash})

    return user;
}

// creating a static method for signup in the user model and also the function shd be a normal function not an arrow function
userSchema.statics.login = async function(email,password){
    if (!email || !password){
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({email});
    if (!user){
        throw Error("Incorrect email")
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Incorrect password")
    }
    return user;
}

module.exports = mongoose.model("User",userSchema);