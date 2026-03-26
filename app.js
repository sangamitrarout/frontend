const backendURL = "https://backend-sangamitra.onrender.com/api/word";

// Add a word
document.getElementById("addWordForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const word = document.getElementById("newWord").value.trim();
  const definition = document.getElementById("newDefinition").value.trim();

  if (!word || !definition) {
    document.getElementById("addResponse").innerText = "Please enter both word and definition.";
    return;
  }

  try {
    const response = await fetch(backendURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word, definition })
    });

    const data = await response.json();
    if (data.error) {
      document.getElementById("addResponse").innerText = data.error;
    } else {
      document.getElementById("addResponse").innerText = `✅ Added: ${data.word}`;
    }
  } catch (error) {
    document.getElementById("addResponse").innerText = "Error adding word.";
    console.error(error);
  }
});

// Search a word
async function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  if (!word) {
    document.getElementById("result").innerText = "Please enter a word.";
    return;
  }

  try {
    const response = await fetch(`${backendURL}/${word}`);
    const data = await response.json();

    if (data.error) {
      document.getElementById("result").innerText = data.error;
    } else {
      document.getElementById("result").innerText = `${data.word}: ${data.definition}`;
    }
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching definition.";
    console.error(error);
  }
}
