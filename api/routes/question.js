import { Router } from 'express';
import authRequired from '../../middlewares/auth-required';
import { Question } from '../../db/models';

const questionRouter = Router();

questionRouter.get('/', async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).send(questions);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET /api/questions/iddklasdjkad
questionRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Question with id: ${id} requested`);
});

questionRouter.post('/', authRequired, async (req, res) => {
  try {
    const { title, description, icon } = req.body;

    const question = new Question({
      title,
      description,
      icon,
      user: req.userId,
    });

    await question.save();

    res.status(201).send(question);
  } catch (err) {
    res.status(500).send(err);
  }
});

questionRouter.put('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  res.send(`Question with id: ${id} updated`);
});

questionRouter.delete('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  res.send(`Question with id: ${id} deleted`);
});

export default questionRouter;
