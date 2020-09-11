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
questionRouter.get('/:id', async (req, res) => {
  try {
    // Obtenemos el id a buscar del request
    const { id } = req.params;
    // Buscamos la pregunta con el id correspondiente
    const question = await Question.findById(id);
    if (question) {
      // Si la pregunta existe, la retornamos al usuario
      res.status(200).send(question);
    } else {
      // En caso de no existir, regresamos un error
      res.status(404).send({
        message: 'Question not found',
      });
    }
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
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

questionRouter.put('/:id', authRequired, async (req, res) => {
  try {
    // Obtenemos el id de la pregunta a editar
    const { id } = req.params;
    // Obtenemos el nuevo contenido de la pregunta
    const { title, description, icon } = req.body;
    // Creamos un nuevo objeto de pregunta
    const newQuestion = { title, description, icon };
    // Hacemos una query para actualizar la información de la pregunta
    const question = await Question.findByIdAndUpdate(
      id,
      { $set: newQuestion },
      { new: true }
    );

    if (question) {
      // Si la pregunta existe, la retornamos al usuario
      res.status(200).send(question);
    } else {
      // En caso de no existir, regresamos un error
      res.status(404).send({
        message: 'Question not found',
      });
    }
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

questionRouter.delete('/:id', authRequired, async (req, res) => {
  try {
    // Obtenemos el id de la pregunta a eliminar
    const { id } = req.params;
    // Eliminamos la pregunta
    await Question.findByIdAndRemove(id);
    // Enviamos una notificación al usuario de que se elimnó
    res.status(200).send(true);
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

export default questionRouter;
