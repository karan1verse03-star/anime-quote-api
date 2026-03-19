export default async function handler(req, res) {
  try {
    const response = await fetch("https://animechan.xyz/api/random");
    const data = await response.json();

    const quote = data.quote;
    const character = data.character;

    res.setHeader("Content-Type", "image/svg+xml");

    res.status(200).send(`
      <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0d1117" rx="15"/>

        <text x="50%" y="80" text-anchor="middle" fill="#fff" font-size="16">
          "${quote}"
        </text>

        <text x="50%" y="140" text-anchor="middle" fill="#aaa" font-size="14">
          — ${character}
        </text>
      </svg>
    `);
  } catch (err) {
    res.status(500).send("Error fetching quote");
  }
}
