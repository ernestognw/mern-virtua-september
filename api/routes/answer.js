import { Router } from 'express';

const answerRouter = Router();

answerRouter.get('/', (req, res) => {
  res.status(200).send('answer Working');
});

export default answerRouter;
