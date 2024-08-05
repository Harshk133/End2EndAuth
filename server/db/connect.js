// this file is used to connect to mongodb!

import mongoose from "mongoose";
import chalk from "chalk";

const connect2DB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
        console.log(chalk.bgCyanBright.bold.underline(` 🎉 Connected to Database Successfully!`));
    } catch (error) {
        console.log(chalk.bgRedBright.bold("MONGODB ERROR: ", error));
    }
}

export { connect2DB }