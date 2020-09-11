import { Router } from 'express';
import { Answer, Question } from '../../db/models';

const answerRouter = Router();

answerRouter.get('/', async(req, res) => {
    try {
        const answers = await Answer.find();

        res.status(200).send(answers);
    } catch (err) {
        res.status(500).send(err);
    }
});

answerRouter.get('/:id', async(req, res) => {
    try {
        // Obtenemos el id a buscar el request
        const { id } = req.params;
        // Buscamos la pregunta con el id correspondiente
        const answer = await Answer.findById(id);
        if (answer) {
            // Si la pregunta existe, la retornamos al usuario
            res.status(200).send(answer);
        } else {
            // En caso de no existir, regresamos un error
            res.status(404).send({
                message: 'Answer not found',
            });
        }
    } catch (err) {
        // Cachamos cualquier potencial error
        res.status(500).send(err);
    }
});

answerRouter.post('/', async(req, res) => {
    try {
        const { description, questionId } = req.body;

        const answer = new Answer({
            description,
            user: req.userId,
        });

        const question = await Question.findById(id);

        if (question) {
            await answer.save();
            question.answers.push(answer.id);
            await question.save();
            res.status(201).send(answer);
        } else {
            res.status(404).json({
                message: 'Host question not found',
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

answerRouter.put('/:id', async(req, res) => {
    try {
        // Obtenemos el id de la pregunta a editar
        const { id } = req.params;
        // Obtenemos el nuevo contenido de la pregunta
        const { description } = req.body;
        // Creamos un nuevo objeto de pregunta
        const newAnswer = { description };
        // Hacemos una query para actualizar la información de la pregunta
        const answer = await Answer.findByIdAndUpdate(
            id, { $set: newAnswer }, { new: true }
        );

        if (answer) {
            // Si la pregunta existe, la retornamos al usuario
            res.status(200).send(answer);
        } else {
            // En caso de no existir, regresamos un error
            res.status(404).send({
                message: 'Answer not found',
            });
        }
    } catch (err) {
        // Cachamos cualquier potencial error
        res.status(500).send(err);
    }
});

answerRouter.delete('/:id', async(req, res) => {
    try {
        // Obtenemos el id de la pregunta a eliminar
        const { id } = req.params;
        // Eliminamos la pregunta
        await Answer.findByIdAndRemove(id);
        // Enviamos una notificación al usuario de que se elimnó
        res.status(200).send(true);
    } catch (err) {
        // Cachamos cualquier potencial error
        res.status(500).send(err);
    }
});

export default answerRouter;