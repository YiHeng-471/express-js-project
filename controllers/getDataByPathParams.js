import { youtubers } from '../testdata.js';

export const getDataByPathParams = (req, res) => {
  const { param, value } = req.params;

  const allowedFields = ['name', 'age', 'genre', 'subscribers', 'country'];

  if (!allowedFields.includes(param)) {
    return res.status(400).json({ error: 'Search field not allowed' });
  }

  const filteredData = youtubers.filter(youtuber => 
    youtuber[param].toLowerCase() === value.toLowerCase()
  )

  res.json(filteredData);
}