/**
 * Function to display text on the LED name badge.
 *
 * @param {Object} args - Arguments for displaying text.
 * @param {string} args.text - The text to display on the LED name badge, including any predefined icons.
 * @returns {Promise<Object>} - The result of the display text operation.
 */
const executeFunction = async ({ text }) => {
  const url = 'http://localhost:5001/display-text';
  const headers = {
    'Content-Type': 'application/json'
  };

  // Prepare the request body
  const body = JSON.stringify({ text });

  try {
    // Perform the fetch request
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
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
    console.error('Error displaying text on LED name badge:', error);
    return { error: 'An error occurred while displaying text on the LED name badge.' };
  }
};

/**
 * Tool configuration for displaying text on the LED name badge.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'display_text',
      description: 'Display text on the LED name badge.',
      parameters: {
        type: 'object',
        properties: {
          text: {
            type: 'string',
            description: 'The text to display on the LED name badge, including any predefined icons.'
          }
        },
        required: ['text']
      }
    }
  }
};

export { apiTool };