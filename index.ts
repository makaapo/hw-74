import express from 'express';
import routerMessage from "./Routers/messages";

const app = express();
const port = 8000;

app.use(express.json());
app.use('/messages', routerMessage);

const run = () => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}!`);
    });
};

run();
