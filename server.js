import app from './src/app.js';
import connectDB from './src/config/db.js';
import config from './src/config/config.js';
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);


connectDB();

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});