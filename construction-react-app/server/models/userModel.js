import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

userSchema.pre('save', async function (next) {
    if(!this.isModified, ('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); 
});
// returns true if passwords match
userSchema.methods.matchPasswords = async function(enteredPass) {
    return await bcrypt.compare(enteredPass, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;