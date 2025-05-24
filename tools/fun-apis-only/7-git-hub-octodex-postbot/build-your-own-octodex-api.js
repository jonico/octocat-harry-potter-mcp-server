/**
 * Function to fetch Octocats from the Octodex API.
 *
 * @returns {Promise<Object>} - The response containing Octocats data.
 */
const executeFunction = async () => {
  const url = 'https://octodex-rest-api-ccc20c6c9fbf.herokuapp.com';
  try {
    // Construct the URL for the request
    const requestUrl = `${url}/octocats`;

    // Perform the fetch request
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'x-mock-response-name': 'Octocats-JSON'
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
    console.error('Error fetching Octocats:', error);
    return { error: 'An error occurred while fetching Octocats.' };
  }
};

/**
 * Tool configuration for fetching Octocats from the Octodex API.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'fetch_octocats',
      description: 'Fetch Octocats from the Octodex API.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };