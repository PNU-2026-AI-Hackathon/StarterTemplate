import { Router } from 'express';
import { users } from '../data/mockData';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    token: 'demo-token-123',
  });
});

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email, and password are required' });
  }

  const exists = users.some((item) => item.email === email);

  if (exists) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const newUser = { id: `u${users.length + 1}`, name, email, password };
  users.push(newUser);

  return res.status(201).json({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    token: 'demo-token-123',
  });
});

export default router;
