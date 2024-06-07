const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/scan', (req, res) => {
  const { sequence, head } = req.body;

  // Implementa el algoritmo SCAN
  const sortedSequence = sequence.sort((a, b) => a - b);
  const headIndex = sortedSequence.findIndex(track => track > head);
  const left = sortedSequence.slice(0, headIndex).reverse();
  const right = sortedSequence.slice(headIndex);

  const result = [head, ...right, ...left];
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
