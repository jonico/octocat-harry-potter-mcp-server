/**
 * Function to fetch spells from the Harry Potter API.
 *
 * @returns {Promise<Object>} - The list of spells from the API.
 */
const executeFunction = async () => {
  const baseUrl = 'https://hp-api.onrender.com'; // updated base URL
  const token = process.env.FUN_APIS_ONLY_API_KEY;
  try {
    // Construct the URL for fetching spells
    const url = `${baseUrl}/api/spells`;

    // Perform the fetch request
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Check if the response was successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }

    // Parse and return the response data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching spells:', error);
    return { error: 'An error occurred while fetching spells.' };
  }
};

/**
 * Tool configuration for fetching spells from the Harry Potter API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'fetch_spells',
      description: 'Fetch spells from the Harry Potter API.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };