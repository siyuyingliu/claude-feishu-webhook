const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5678;

app.use(bodyParser.json());

app.post('/feishu-feedback', (req, res) => {
  const challenge = req.body.challenge;
  if (challenge) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ challenge });
  } else {
    res.status(200).json({ success: true });
  }
});

app.get('/', (req, res) => {
  res.send('Claude × Feishu Webhook is running.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
