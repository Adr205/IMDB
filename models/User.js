// # 1
var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

// # 2
var UserSchema = Schema ({
    userName: {
        type: String,
        unique:  true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    key: {
        type: Number,
        default: 0,
        required: true
    }
},{timestamps: true});

UserSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password,10)
}

UserSchema.methods.validatePassword = function(userpassword){
    return bcrypt.compare(userpassword,this.password)
}


// # 3
module.exports = mongoose.model('users', UserSchema);
