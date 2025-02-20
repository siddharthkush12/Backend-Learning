import mongoose from "mongoose";

const todoSchema =new mongoose.Schema({
    content:{
        type:String,
        required:true,

    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,        //ref must pass in second line
        ref:"User"
    },
    subTodos:[    //Array of subTodos
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subTodo"
        }
    ]
}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);   //in database Todo is stored as "todos" all lower with "s" at last
