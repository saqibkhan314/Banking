import dotenv from 'dotenv';



dotenv.config();

if(!process.env.PORT) throw new Error('Port is not defined in the env file');
if(!process.env.MONGO_URI) throw new Error('Mongo uri is not defined in the env file');
if(!process.env.JWT_SECRET) throw new Error('JWT secret is not defined in the env file');
if(!process.env.GOOGLE_CLIENT_ID) throw new Error('Google client id is not defined in the env file');
if(!process.env.GOOGLE_CLIENT_SECRET) throw new Error('Google client secret is not defined in the env file');
if(!process.env.GOOGLE_REFRESH_TOKEN) throw new Error('Google refresh token is not defined in the env file');
if(!process.env.GOOGLE_USER) throw new Error('Google user is not defined in the env file');


const config ={
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER: process.env.GOOGLE_USER
}

export default config;