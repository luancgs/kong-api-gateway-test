import express from 'express';

const app: express.Application = express();

const port: number = 3000;

app.get('/', (_req, _res) => {
  _res.send(`TypeScript With Expresss: Endpoint ${process.env.ENDPOINT_VERSION}`);
});

app.listen(port, () => {
  console.log(`Internal Port: ${port}`);
});
