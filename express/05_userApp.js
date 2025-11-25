import express from 'express'
const app = express();

import router from './05_userRouter.js';
app.use(router);
app.listen(3000);