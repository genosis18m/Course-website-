const { Schema, default: mongoose } = require('mongoose');
const { ObjectId } = require('mongoose');

async function readyDatabase(){
    await mongoose.connect("mongodb+srv://genosis:mohit@cluster0.n5eor63.mongodb.net/course-seller-app");
    console.log("connected to database!");
};
readyDatabase()
const userSchema = new Schema({
    email: {type: String, unique: true},
    firstName: String,
    lastName: String,
    password: String
})

const adminSchema = new Schema({
    email: {type: String, unique: true},
    firstName: String,
    lastName: String,
    password: String
})

const courseSchema = new Schema({
    title: String,
    discription: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
})

const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId,
})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
}