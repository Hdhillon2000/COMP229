
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', require('./routes/contacts.routes'));
app.use('/api/projects', require('./routes/projects.routes'));
app.use('/api/qualifications', require('./routes/qualifications.routes'));
//app.use('/api/user', require('./routes/user.routes'));



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
  res.json({ message: 'Welcome to User application.' });
});
