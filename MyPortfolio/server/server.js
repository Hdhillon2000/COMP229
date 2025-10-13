require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Routes
const contactRoutes = require('./routes/contacts.routes');
const projectRoutes = require('./routes/projects.routes');
const qualificationRoutes = require('./routes/qualifications.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/', userRoutes);
app.use('/', authRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database!');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Database connection error:', err.message);
  process.exit(1); 
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio backend!' });
});
