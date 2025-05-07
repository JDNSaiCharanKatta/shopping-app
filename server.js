const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const productRoutes = require('./routes/products');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

