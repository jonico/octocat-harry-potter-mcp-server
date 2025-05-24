/**
 * Function to retrieve all Hogwarts staff characters from the Harry Potter API.
 *
 * @returns {Promise<Object>} - The list of Hogwarts staff characters.
 */
const executeFunction = async () => {
  const baseUrl = 'https://harry-potter-api-3a23c827ee69.herokuapp.com';
  try {
    // Construct the URL for the request
    const url = `${baseUrl}/api/characters/staff`;

    // Perform the fetch request
    const response = await fetch(url, {
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
    console.error('Error retrieving Hogwarts staff:', error);
    return { error: 'An error occurred while retrieving Hogwarts staff.' };
  }
};

/**
 * Tool configuration for retrieving Hogwarts staff characters from the Harry Potter API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_hogwarts_staff',
      description: 'Retrieve all Hogwarts staff characters.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };