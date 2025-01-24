export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // **IMPORTANT:** Replace these with your actual credentials
      const validUsername = 'your_username'; 
      const validPassword = process.env.SITE_PASSWORD; 
  
      if (username === validUsername && password === validPassword) {
        // Authentication successful
        res.setHeader('Access-Control-Allow-Origin', '*'); // Add this line here
        res.status(200).json({ success: true });
      } else {
        // Authentication failed
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      // Handle other HTTP methods if needed
      res.status(405).end(); // Method Not Allowed
    }
  }