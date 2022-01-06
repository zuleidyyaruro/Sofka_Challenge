const db = require('./utils/database');
const app = require('./app');

db.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(4000, () => {
            console.log(`app running on port 4000`)
        });
    })
    .catch(error => console.log(error));