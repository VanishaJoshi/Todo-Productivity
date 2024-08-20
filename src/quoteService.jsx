// src/services/quoteService.js

import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness'; // Adjust category as needed
const API_KEY = 'GfnagqLGVvah2WOw5epnkw==u3VuPCS2umPgNEU2';

export const getMotivationalQuote = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      }
    });

    return response.data[0]; // Assuming the API returns an array of quotes and you need the first one
  } catch (error) {
    console.error('Error fetching the quote:', error);
    throw error;
  }
};
