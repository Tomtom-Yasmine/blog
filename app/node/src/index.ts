import express from 'express';
import * as dotenv from 'dotenv';
import db from './db';
import dayjs from 'dayjs';
// import { protect } from './modules/auth'

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

// app.use('/api', protect, [
//     userRoutes,
//     todoListRoutes
// ])

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})