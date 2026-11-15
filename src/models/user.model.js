import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required for creating an account" ],
    },
    email: {
        type: String,
        required: [ true, "Email is required"],
        unique: [true, "Email already exists" ],
        trim: true, // remove whitespace
        lowercase: true, // convert to lowercase
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email address" ],

    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
        minlength: [ 6, "Password must be at least 6 characters long" ],
        select: false, // whenever we will be querying the password will not be coming until and unless we explicitly ask for it
    }
},{
    timestamps: true, // createdAt and updatedAt will be automatically added to the document
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return;
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return;
})

userSchema.methods.comparePassword = async function (password)  {

    console.log("Password from user:", password);
    console.log("Password from DB:", this.password);
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;