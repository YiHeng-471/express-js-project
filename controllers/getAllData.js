import { youtubers } from '../testdata.js';

export const getAllData = (req, res) => {
  let filteredData = youtubers;

  // list of all query parameters that user can filter
  const { name, age, genre, is_Single, subscribers, country, joinedYear } = req.query;

  // filtering logic for each query parameter
  if (name) {
    filteredData = filteredData.filter(
      youtuber => youtuber.name.toLowerCase() === name.toLowerCase()
    )
  }

  if (age) {
    const ageNum = Number(age);
    filteredData = !Number.isNaN(ageNum) ? filteredData.filter(youtuber => youtuber.age === ageNum) : [];
  }

  if (genre) {
    filteredData = filteredData.filter(
      youtuber => youtuber.genre.toLowerCase() === genre.toLowerCase()
    )
  }

  if (is_Single) {
    const isSingleBool = is_Single.toLowerCase() === 'true';
    filteredData = filteredData.filter(
      youtubers.is_Single === isSingleBool
    )
  }

  if (subscribers) {
    const subsNum = Number(subscribers);
    filteredData = !Number.isNaN(subsNum) ? filteredData.filter(youtuber => youtuber.subscribers === subsNum) : [];
  }

  if (country) {
    filteredData = filteredData.filter(
      youtuber => youtuber.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (joinedYear) {
    const yearNum = Number(joinedYear);
    if (!Number.isNaN(yearNum)) {
      filteredData = filteredData.filter(youtuber => youtuber.joinedYear === yearNum)
    } else {
      filteredData = [];
    }
  }
  res.json(filteredData);
} 

  /*
  Test cases:
  1. /api?country=USA
    Should return all YouTubers from USA 
  2. /api?genre=Comedy&is_Single=true
    Should return all YouTubers in Comedy genre who are single
  3. /api?age=30&joinedYear=2010
    Should return all YouTubers who are 30 years old and joined in 2010
  4. /api?name=MrBeast&country=Italy
    Should return empty array as MrBeast is not from Italy
  */