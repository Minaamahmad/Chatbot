
async function chat() {
  const textreff = document.querySelector("#query");
  const text = textreff.value;
  console.log(text);
  const res = document.querySelector("#response");
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
    
    res.innerHTML = aiReply;
  } catch (error) {
    console.error("API Error:", error);
    res.innerHTML = "Error getting response.";
  }
}
