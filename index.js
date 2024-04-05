// JsonWebTokenError: jwt malformed error in Node.js

import jwt from 'jsonwebtoken';

const secret = 'my_secret';

const token = jwt.sign({foo: 'bar'}, secret);
console.log(token);

const decoded = jwt.verify(token, secret);
console.log(decoded.foo);
