import * as express from 'express';

const app = express();

// random comment!
app.listen(3000, () => {
  console.log('Server is hearing on localhost:3000');
});
