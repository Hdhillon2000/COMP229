const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "c15b3f50c7b15fb0aea1a7886841e11e84542184cffd8928e5f47af2cd4f5fffffd3419a906a68b59ffd295d90b46f93be170b46ac1e2aaa6f5e80ee0ebff4cd", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://harkarandhillon54_db_user:NzgE6lmpPykR8Tat@cluster0.vksat65.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/MYPORTFOLIO' 
    }
    export default config
   
   