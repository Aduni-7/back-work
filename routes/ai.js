const express = require('express');
const router = express.Router();

router.post('/ai', async (req, res) => {
  const { type, text } = req.body;
  if (!text) return res.status(400).json({ response: 'Text is required.' });

  // Basic mock response (replace with OpenAI API or logic)
  if (type === 'paraphrase') {
    return res.json({ response: `Paraphrased version of: ${text}` });
  } else if (type === 'advice') {
    return res.json({ response: `Advice based on: ${text}` });
  } else {
    return res.json({ response: `Unknown type: ${type}` });
  }
});

module.exports = router;
