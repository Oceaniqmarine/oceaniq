exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  console.log("form-submit test hit");

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: "Test success" }),
  };
}          <p><strong>Message:</strong> ${message}</p>
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

