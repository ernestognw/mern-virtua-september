import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.status(200).send('auth Working');
});

export default authRouter;
