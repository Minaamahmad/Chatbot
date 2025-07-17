
async function chat() {
  const textreff = document.querySelector("#query");
  const text = textreff.value;
  const res = document.querySelector("#response");
   const userDiv = document.createElement("div");
  userDiv.classList.add("user-div");
  userDiv.textContent = text;
  res.appendChild(userDiv);
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text:text
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": "AIzaSyCBfi0UJp3zYnS5L2ZYIE5yxWb8wIHuuHw",
        },
      }
    );
    const aiReply =
      response.data.candidates[0].content.parts[0].text || "No reply";
    const botDiv = document.createElement("div");
    botDiv.classList.add("bot-div");
    botDiv.textContent = aiReply;
    res.appendChild(botDiv);


  } catch (error) {
    console.error("API Error:", error);
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-div");
    errorDiv.textContent = "Error getting response.";
    res.appendChild(errorDiv);
  }
}