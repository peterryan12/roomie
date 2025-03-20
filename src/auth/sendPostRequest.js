export async function sendPostRequest(url, payload) {
    try {
        console.log("URL:", url);
        console.log("Payload:", JSON.stringify(payload));

        const response = await fetch(url, {  
            method: "POST",  
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),  
        });

        let data = null;

        
        if (response.status === 204) {
            console.log("Successfully posted data!");
            return null;
        }

     
        try {
            data = await response.json();
        } catch (error) {
            console.error("Error parsing JSON:", error);
            throw new Error("Invalid JSON response from server.");
        }

        
        if (!response.ok) {
            console.error("Server error:", data.message);
            throw new Error(data.message || `HTTP error! Status: ${response.status}`);
        }

        console.log("Response Data:", data);
        return data;  

    } catch (error) {
        console.error("Error in post request:", error);
        throw error;
    }
}
