import {Router} from 'express';
import {promises as fs} from 'fs';
import {Imessage} from '../types';

const routerMessage = Router();
const path = './messages';

routerMessage.post('/', async (req, res) => {
    try {
        const date = new Date().toISOString();
        const newMessage: Imessage = {
            message: req.body.message,
            date,
        };
        await fs.writeFile(`${path}/${date}.txt`, JSON.stringify(newMessage, null, 2));
        res.send(newMessage);
    } catch (e) {
        console.error('Error writing message');
        res.status(500).send(e);
    }
});
export default routerMessage;
