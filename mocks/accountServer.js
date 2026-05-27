const express = require("express");

const app = express();
const PORT = 3000;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Server is healthy",
    timestamp: new Date(),
  });
});

// Mock account route
app.get("/account", (req, res) => {
  res.json({
    accountId: "ACC123456",
    name: "Aishwarya",
    accountType: "Savings",
    balance: 25000,
    currency: "INR",
    status: "ACTIVE",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});