import express from 'express';
import { router } from './routes/apiRouter.js';

const port = 8000;
const app = express();

app.use('/api', router);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
})

app.listen(port, () => console.log(`Server connected on port ${port}`));