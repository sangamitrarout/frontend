async function searchWord() {
  const word = document.getElementById("wordInput").value;
  if (!word) {
    document.getElementById("result").innerText = "Please enter a word.";
    return;
  }

  // Example using free dictionary API
  const response = await fetch(https://api.dictionaryapi.dev/api/v2/entries/en/${word});
  
  if (!response.ok) {
    document.getElementById("result").innerText = "Word not found.";
    return;
  }

  const data = await response.json();
  const definition = data[0].meanings[0].definitions[0].definition;

  document.getElementById("result").innerText = ${word}: ${definition};
}
