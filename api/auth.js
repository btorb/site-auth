export default function handler(req, res) {
  console.log('Received password:', req.body.password);
  console.log('Stored password:', process.env.SITE_PASSWORD);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { password } = req.body;
  const correctPassword = process.env.SITE_PASSWORD;

  if (password === correctPassword) {
    return res.status(200).json({ token: process.env.AUTH_TOKEN });
  }

  return res.status(401).json({ message: 'Invalid password' });
}