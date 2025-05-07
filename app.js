
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'database',
  database: 'appdb',
  password: 'postgres',
  port: 5432,
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Registro
app.post('/api/registro', async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    await pool.query(
      'INSERT INTO clientes (nombre, email, password) VALUES ($1, $2, $3)',
      [nombre, email, password]
    );
    res.status(201).json({ success: true, message: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM clientes WHERE email = $1 AND password = $2',
      [email, password]
    );
    
    if (result.rows.length > 0) {
      res.json({ success: true, usuario: result.rows[0] });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Listar clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, nombre, email FROM clientes');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Listar productos
app.get('/api/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Buscar productos
app.get('/api/productos/buscar', async (req, res) => {
  const { termino } = req.query;
  try {
    const result = await pool.query(
      'SELECT * FROM productos WHERE nombre ILIKE $1',
      [`%${termino}%`]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend ejecutándose en puerto ${port}`);
});
EOF

