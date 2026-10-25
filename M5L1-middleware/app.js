   const express = require('express');
   const loggerMiddleware = require('./middleware/loggerMiddleware');

   const app = express();
   const port = 3000;

   app.use(loggerMiddleware);

   app.get('/', (req, res) => {
     res.send('Home page');
   });

   app.get('/about', (req, res) => {
     res.send('About page');
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });