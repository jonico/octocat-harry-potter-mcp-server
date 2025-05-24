/**
 * Function to get all Hogwarts students from the Harry Potter API.
 *
 * @returns {Promise<Object>} - The list of Hogwarts students.
 */
const executeFunction = async () => {
  const baseUrl = 'https://harry-potter-api-3a23c827ee69.herokuapp.com';
  const token = process.env.FUN_APIS_ONLY_API_KEY;
  try {
    // Construct the URL for the request
    const url = `${baseUrl}/api/characters/students`;

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
    console.error('Error fetching Hogwarts students:', error);
    return { error: 'An error occurred while fetching Hogwarts students.' };
  }
};

/**
 * Tool configuration for fetching Hogwarts students from the Harry Potter API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_hogwarts_students',
      description: 'Fetch all Hogwarts students from the Harry Potter API.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };