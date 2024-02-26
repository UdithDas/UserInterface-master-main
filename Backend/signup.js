const mongoose=require("mongoose")

let sc=mongoose.Schema;
const signupschema = new sc(
{
    username: 'String',
    email: 'String',
    password: 'String'
}
);
var signupmodel =mongoose.model("signup",signupschema)
module.exports=signupmodel;