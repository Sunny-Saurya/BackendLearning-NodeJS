import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.use(express.json());
// app.use({extenteded: true});

// connecting mongodb
mongoose.connect("mongodb://127.0.0.1:27017/universityDB").then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
// creating schemas

const studentSchema = new mongoose.Schema({
    name:String,
    section: String,
    rollNo: Number,
    course: String

})


const Students = mongoose.model("Students", studentSchema)

// for inserting the user

const insertingStudent = async () => {
    const student = new Students({
        name: "Sunny",
        section: "K23NC ",
        rollNo: 1,
        course: "CSE",
    })

    await student.save()
    console.log("Student Added SuccessFully!!");
    console.log(student);
    
}
// insertingStudent()

// finding the student
const findStudent = async () => {
    const data = await Students.find();
    console.log(data);
    
}
findStudent()

const updateStudent = async () => {
        await Students.updateOne(
        {rollNo: 1},
        {$set: {section: "K23NCCCCCCCCCCCCC"}}
    )
    console.log("Student Updated !!");
    
    
}
// updateStudent()

const deleteStudent = async () => {
    await Students.deleteOne({
        rollNo: '1'
    })
    console.log("Student Deleted!!");
    
}
deleteStudent()