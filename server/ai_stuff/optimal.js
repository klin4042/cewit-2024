async function detectStarMethod(text) {
    try {
      const response = await axios.post(apiUrl, {
        prompt: `Identify the STAR elements in the following text:\n\n${text}\n\nSituation:`,
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 0.5,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      const completion = response.data.choices[0].text.trim();
      const starDetected = /Task:.*Action:.*Result:/i.test(completion);
  
      return starDetected;
    } catch (error) {
      console.error('Error making API request:', error.message);
      return false;
    }
  }
  
  // Example usage:
  const inputText = `
    Situation: Faced with a tight deadline for a project.
    Task: Deliver a high-quality product by the end of the week.
    Action: Organized a team meeting, delegated tasks, and worked overtime.
    Result: Successfully completed the project on time with positive feedback from the client.
  `;
  
  detectStarMethod(inputText)
    .then((result) => {
      if (result) {
        console.log('STAR method detected in the input text.');
      } else {
        console.log('STAR method not detected in the input text.');
      }
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  