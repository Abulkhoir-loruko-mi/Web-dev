// 1. Import Express and CORS
const express = require('express');
const cors = require('cors'); // CORS allows our frontend to talk to our backend securely

const app = express();
const PORT = 3000;

// 2. Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Tell the server to accept JSON data

// 3. Create the POST route to catch form submissions
app.post('/api/contact', (req, res) => {
    // req.body contains the data sent from your frontend form
    const userMessage = req.body;
    
    console.log("--- NEW MESSAGE RECEIVED ---");
    console.log(`Name: ${userMessage.name}`);
    console.log(`Email: ${userMessage.email}`);
    console.log(`Message: ${userMessage.message}`);
    console.log("----------------------------");

    // In a production app, this is exactly where you would use a package 
    // like 'Nodemailer' to forward this data to your personal email address.

    // Send a success response back to the frontend
    res.json({ status: "Success", reply: "Message received loud and clear!" });
});

// 4. Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
