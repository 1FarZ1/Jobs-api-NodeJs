require('dotenv').config();
const express = require('express');
const { connectDb } = require('./db/mongoDb');

const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rate_limiter = require('express-rate-limit');
const authMiddleware = require('./middlewares/auth');


const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./view'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(
    rate_limiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100
    }));



app.get("/", (req, res) => {
    res.send("jobs api")
});


app.use("/api/v1/jobs", authMiddleware, jobsRouter);
app.use("/api/v1/auth", authRouter);







app.use((req, res) => {
    res.status(404).send("Page not found");
}
);






let main = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log('Server is running on http://localhost:' + port);
        }
        );
    } catch (error) {
        console.log(error);
    }
}

main();


