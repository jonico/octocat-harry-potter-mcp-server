/**
 * Function to retrieve characters from a specific Hogwarts house.
 *
 * @param {Object} args - Arguments for the character retrieval.
 * @param {string} args.house - The name of the Hogwarts house to retrieve characters from.
 * @returns {Promise<Object>} - The list of characters in the specified house.
 */
const executeFunction = async ({ house }) => {
  const baseUrl = 'https://harry-potter-api-3a23c827ee69.herokuapp.com';
  const token = process.env.FUN_APIS_ONLY_API_KEY;
  try {
    // Construct the URL for the request
    const url = `${baseUrl}/api/characters/house/${house}`;

    // Set up headers for the request
    const headers = {
      'Content-Type': 'application/json'
    };

    // Perform the fetch request
    const response = await fetch(url, {
      method: 'GET',
      headers
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
    console.error('Error retrieving characters:', error);
    return { error: 'An error occurred while retrieving characters.' };
  }
};

/**
 * Tool configuration for retrieving characters from a specific Hogwarts house.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_characters_in_house',
      description: 'Retrieve characters from a specific Hogwarts house.',
      parameters: {
        type: 'object',
        properties: {
          house: {
            type: 'string',
            description: 'The name of the Hogwarts house to retrieve characters from.'
          }
        },
        required: ['house']
      }
    }
  }
};

export { apiTool };