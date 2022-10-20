import express from 'express';
import config from './config';
import usuarios from './routes/products.routes'
import recetas from './routes/products.routes'
const app = express();
app.set('port', config.port);
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(usuarios)
app.use(recetas)
export default app;