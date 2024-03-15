import mongoose from "mongoose";

const connectionStr = 'mongodb+srv://healer:healer@cluster0.k3r8jie.mongodb.net/'

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(connectionStr);
        console.log("Connected to db successfully.");
    } catch (error) {
        console.log("Problem in db connection.");
        console.log(error);
    }
}

export default ConnectToMongo;
