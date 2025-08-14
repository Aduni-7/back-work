// utils/getAccessToken.js

const axios = require('axios');

async function getAccessToken() {
  // Replace these with your real credentials and token URL:
  const clientId = process.env.PAYMENT_CLIENT_ID;
  const clientSecret = process.env.PAYMENT_CLIENT_SECRET;
  const tokenUrl = process.env.PAYMENT_TOKEN_URL; 

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await axios.post(
      tokenUrl,
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (err) {
    console.error('Error fetching access token:', err.response?.data || err.message);
    throw new Error('Unable to get access token');
  }
}

module.exports = getAccessToken;
