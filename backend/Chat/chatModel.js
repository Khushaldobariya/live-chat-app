import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
participent:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",

}]
,
message:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message",
    default:[]
}],

}, {
    timestamps: true,    // moved inside the schema object
    versionKey: false })

    const Chat = mongoose.model("Chat", chatSchema)

    export default Chat;