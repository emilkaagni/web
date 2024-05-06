const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/task-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/users', contactRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/book-appointment', appointmentRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
