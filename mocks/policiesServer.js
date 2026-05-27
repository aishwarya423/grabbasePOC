const express = require("express");

const app = express();
const PORT = 3002;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Policies service is healthy",
    timestamp: new Date(),
  });
});

// Mock policies route
app.get("/policies", (req, res) => {
  res.json({
    customerId: "CUST1001",
    policies: [
      {
        policyId: "POL1001",
        policyType: "Health Insurance",
        premium: 12000,
        status: "ACTIVE",
      },
      {
        policyId: "POL1002",
        policyType: "Life Insurance",
        premium: 25000,
        status: "ACTIVE",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Policies app running on port ${PORT}`);
});