const express = require('express');
const app = express();
const userRoutes = require('./api/routes/userRoutes');  
const gameRoutes = require('./api/routes/gameRoutes'); 
const achievementRoutes = require('./api/routes/achievementRoutes');  
const nftRoutes = require('./api/routes/nftRoutes'); 
const profile = require('./api/routes/profile');
const setting  = require('./api/routes/setting');
const bodyParser = require('body-parser');
const scoreRouter = require('./api/routes/score');


const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Middleware setup
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// CORS configuration
const allowedOrigins = ['http://localhost:3000', 'https://zorro-psycho.github.io', 'https://zorro-psycho.github.io/snake'];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Route setup
app.use('/api', scoreRouter);


app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/nfts', nftRoutes);
app.use('/api/Users', profile);
app.use('/api/Users', setting);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

