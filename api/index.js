export default async function handler(req, res) {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
      }
  
      const { password } = req.body || {};
      
      if (!password) {
        return res.status(400).json({ message: 'Password required' });
      }
  
      if (password === process.env.SITE_PASSWORD) {
        return res.status(200).json({ token: process.env.AUTH_TOKEN });
      }
  
      return res.status(401).json({ message: 'Invalid password' });
    } catch (error) {
      console.error('Auth error:', error);
      return res.status(500).json({ message: error.message });
    }
  }