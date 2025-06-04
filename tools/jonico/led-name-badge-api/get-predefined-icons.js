/**
 * Function to get predefined icons from the LED Name Badge API.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of predefined icons.
 */
const executeFunction = async () => {
  const url = 'http://localhost:5001/predefined-icons';
  
  try {
    // Perform the fetch request
    const response = await fetch(url, {
      method: 'GET'
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
    console.error('Error fetching predefined icons:', error);
    return { error: 'An error occurred while fetching predefined icons.' };
  }
};

/**
 * Tool configuration for getting predefined icons from the LED Name Badge API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_predefined_icons',
      description: 'Get predefined icons from the LED Name Badge API.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };