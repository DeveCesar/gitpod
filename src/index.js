const app = require('./app');
require('./database');
const morgan = require('morgan');

app.use(morgan('dev'));
app.listen(4000);
console.log('Server en port 4000');