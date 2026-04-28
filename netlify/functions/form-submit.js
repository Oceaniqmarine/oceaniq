export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const data = JSON.parse(event.body);
    console.log("📩 TEST submission received:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error("❌ Function crashed:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(error) })
    };
  }
}
