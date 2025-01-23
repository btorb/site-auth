export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { password } = req.body;
    
    if (password === process.env.SITE_PASSWORD) {
      return res.status(200).json({ token: process.env.AUTH_TOKEN });
    }
  
    return res.status(401).json({ message: 'Invalid password' });
  }