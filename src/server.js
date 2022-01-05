const db = require('./utils/database');
const app = require('./app');

db.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(process.env.PORT, () => {
            console.log(`app running on port ${process.env.PORT}`)
        });
    })
    .catch(error => console.log(error));