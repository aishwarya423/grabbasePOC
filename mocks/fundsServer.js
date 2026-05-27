const express = require("express");

const app = express();
const PORT = 3001;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Funds service is healthy",
    timestamp: new Date(),
  });
});

// Mock funds route
app.get("/funds", (req, res) => {
  res.json({
    customerId: "CUST1001",
    totalFunds: 150000,
    currency: "INR",
    funds: [
      {
        fundId: "FND101",
        fundName: "Equity Growth Fund",
        amount: 50000,
        status: "ACTIVE",
      },
      {
        fundId: "FND102",
        fundName: "Balanced Advantage Fund",
        amount: 100000,
        status: "ACTIVE",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Funds app running on port ${PORT}`);
});