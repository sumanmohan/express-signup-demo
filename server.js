const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: 'Signed up', email });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
}

module.exports = app;
