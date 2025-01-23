export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { password } = req.body;
    
    if (password === process.env.SITE_PASSWORD) {
      return res.status(200).json({ token: process.env.AUTH_TOKEN });
    }
  
    return res.status(401).json({ message: 'Invalid password' });
  }