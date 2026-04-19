export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const data = JSON.parse(event.body);

    const name = data.name || "No name";
    const email = data.email || "No email";
    const message = data.message || "No message";

    console.log("📩 New OCEANIQ submission:", {
      name,
      email,
      message
    });

    // 🚀 SEND EMAIL
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "<oceaniqsystems@proton.me>",
        to: ["oceaniqsystems@proton.me"],
        subject: "New OCEANIQ Lead",
        html: `
          <h2>New OCEANIQ Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error("❌ Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
}
