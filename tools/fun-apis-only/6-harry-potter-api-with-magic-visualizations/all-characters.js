/**
 * Function to retrieve all characters from the Harry Potter API.
 *
 * @returns {Promise<Object>} - The list of all characters from the Harry Potter API.
 */
const executeFunction = async () => {
  const baseUrl = 'https://harry-potter-api-3a23c827ee69.herokuapp.com';
  try {
    // Perform the fetch request
    const response = await fetch(`${baseUrl}/api/characters`, {
      method: 'GET',
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
 * Tool configuration for retrieving all characters from the Harry Potter API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_all_characters',
      description: 'Retrieve all characters from the Harry Potter API.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };