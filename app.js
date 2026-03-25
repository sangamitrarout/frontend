async function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  if (!word) {
    document.getElementById("result").innerText = "Please enter a word.";
    return;
  }

  try {
    // Call your backend route with the word
    const response = await fetch(`https://backend-sangamitra.onrender.com/dictionary/${word}`);

    if (!response.ok) {
      document.getElementById("result").innerText = "Word not found.";
      return;
    }

    const data = await response.json();

    // Check if backend returned an error
    if (data.error) {
      document.getElementById("result").innerText = data.error;
      return;
    }

    // Extract definition from dictionary API structure
    const definition = data[0].meanings[0].definitions[0].definition;

    document.getElementById("result").innerText = `${word}: ${definition}`;
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching definition.";
    console.error(error);
  }
}
