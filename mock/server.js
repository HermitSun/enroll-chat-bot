const Koa = require('koa');
const cors = require('koa2-cors');
const router = require('./answer');

const app = new Koa();

app.use(cors());
app.use(router.routes());

app.listen(3242);
console.log('Mock server is listening on port 3242.');
