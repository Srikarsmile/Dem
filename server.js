const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Our Story page
app.get('/our-story', (req, res) => {
    res.sendFile(path.join(__dirname, 'our-story.html'));
});

// FAQ page
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

// Founder page
app.get('/founder', (req, res) => {
    res.sendFile(path.join(__dirname, 'founder.html'));
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
