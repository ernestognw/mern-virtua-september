import jwt from 'jsonwebtoken';
import { secret } from '../config';

const authRequired = (req, res, next) => {
  const { authorization } = req.headers;
  // 'Bearer kalsdkaklsdfaklsdfmasdm'
  const token = authorization.split(' ')[1];

  jwt.verify(token, secret, (err, payload) => {
    if (err) {
      return res.status(401).json({
        message: 'Unauthorized',
        error: err,
      });
    }

    req.userId = payload.userId;

    next();
  });
};

export default authRequired;
