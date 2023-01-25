import express from 'express';
import * as dotenv from 'dotenv';
import dayjs from 'dayjs';

import db from './db';

import { protect } from './modules/auth';
import userRoutes from './routes/user'
import { createNewUser, signIn } from './handlers/user';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS Z')}] ${req.method} - ${req.url} - ${req.ip}`);
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'hello' })
})

app.use('/api', protect, [
    userRoutes,
])

app.post('/signUp', createNewUser);
app.post('/signIn', signIn);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})