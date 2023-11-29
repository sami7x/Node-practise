//importing mongoose model
const mongoose = require ("mongoose");

const connectDB = async()=>
{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_SRING);
        console.log(
            "Database Connected",
            connect.connection.host,
            connect.connection.name
        );

    }
    catch(error)
    {
        console.error(error);
        process.exit(1); // to keep server running during error too
    }
}

module.exports= connectDB;