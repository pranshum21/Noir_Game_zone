const express = require('express');
const app = express();
const userRoutes = require('./api/routes/userRoutes');  
const gameRoutes = require('./api/routes/gameRoutes'); 
const achievementRoutes = require('./api/routes/achievementRoutes');  
const nftRoutes = require('./api/routes/nftRoutes'); 
const profile = require('./api/routes/profile');
const setting  = require('./api/routes/setting');

var cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',  
    credentials: true
  };



app.use(express.json());
// app.use(cors());
app.use(cors(corsOptions));


app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/nfts', nftRoutes);
app.use('/api/Users',profile);
app.use('/api/Users',setting);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
