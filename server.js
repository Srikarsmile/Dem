const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(process.cwd())));
app.use('/css', express.static(path.join(process.cwd(), 'css')));
app.use('/js', express.static(path.join(process.cwd(), 'js')));
app.use('/images', express.static(path.join(process.cwd(), 'images')));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'about.html'));
});

// Our Story page
app.get('/our-story', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'our-story.html'));
});

// FAQ page
app.get('/faq', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'faq.html'));
});

// Founder page
app.get('/founder', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'founder.html'));
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'contact.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
