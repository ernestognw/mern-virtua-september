import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcryptjs';
import { User } from '../../db/models';
import { secret } from '../../config';

const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !compareSync(password, user.password)) {
    return res.status(401).json({
      message: 'Login failed',
      error: "Email and password don't match",
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    secret,
    {
      expiresIn: 60 * 60 * 24, // Seconds * Minutes * Hours
    }
  );

  res.status(200).json({
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token,
  });
});

authRouter.post('/signup', async (req, res) => {
  try {
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const password = req.body.password;

    const { firstName, lastName, email, password } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashSync(password),
    });

    await user.save();

    const token = jwt.sign(
      {
        userId: user.id,
      },
      secret,
      {
        expiresIn: 60 * 60 * 24, // Seconds * Minutes * Hours
      }
    );

    res.status(200).json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default authRouter;
