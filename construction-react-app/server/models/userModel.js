import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    }
},
{
    timestamps: true
});

// returns true if passwords match
userSchema.methods.matchPassword = async function(enteredPass) {
    return await bcrypt.compare(enteredPass, this.password);
}

// userSchema.pre('save', async function (next) {
//     if(!this.isModified, ('password')){
//         next();
//     }

//     const salt = await bcrypt.genSalt(10);
//     // bcrypt.hash(this.password, salt, hash); 
//     hashed = await bcrypt.hash(this.password, salt); 
//     // this.password = hash

//     console.log(hashed)
//     next();
//     // console.log(this.password )
// });

userSchema.pre('save', function(next) {

    const user = this;
    
    if (!user.isModified('password')) {
        return next();
    }
    
    bcrypt.genSalt(10, (err, salt) => {
    
        if (err) {
            return next(err);
        }
        
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});


const User = mongoose.model('User', userSchema);

export default User;