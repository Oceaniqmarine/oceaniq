const resendResponse = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "OCEANIQ <onboarding@resend.dev>",
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

if (!resendResponse.ok) {
  const resendError = await resendResponse.text();
  console.error("Resend error:", resendError);
}
