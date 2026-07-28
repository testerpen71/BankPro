import { useState } from "react";
import "./App.css";

function App() {
const [balance, setBalance] = useState(5000);
const [amount, setAmount] = useState("");
const [uploadedFile, setUploadedFile] = useState(null);

const transactions = [
{ id: 1, type: "Deposit", amount: 1500 },
{ id: 2, type: "Withdrawal", amount: 500 },
{ id: 3, type: "Deposit", amount: 2500 },
];

const deposit = () => {
const value = Number(amount);

if (value > 0) {
setBalance(balance + value);
setAmount("");
}
};

const withdraw = () => {
const value = Number(amount);

if (value > 0 && value <= balance) {
setBalance(balance - value);
setAmount("");
} else {
alert("Insufficient Funds");
}
};

const handleFileUpload = (event) => {
const file = event.target.files[0];

if (file && file.type === "application/pdf") {
setUploadedFile(file.name);
} else {
alert("Please upload a PDF file");
}
};

return (
<div className="app-container">
<div className="sidebar">
<h2>🏦 BankPro</h2>

<ul>
<li>Dashboard</li>
<li>Accounts</li>
<li>Payments</li>
<li>Statements</li>
<li>Support</li>
</ul>
</div>

<div className="main-content">
<h1>Welcome Back</h1>

<div className="summary-cards">
<div className="card">
<h3>Current Balance</h3>
<p>R {balance.toLocaleString()}</p>
</div>

<div className="card">
<h3>Savings</h3>
<p>R 12,500</p>
</div>

<div className="card">
<h3>Credit Available</h3>
<p>R 25,000</p>
</div>
</div>

<div className="actions">
<h2>Quick Banking</h2>

<input
type="number"
placeholder="Enter Amount"
value={amount}
onChange={(e) => setAmount(e.target.value)}
/>

<div className="button-group">
<button className="deposit-btn" onClick={deposit}>
Deposit
</button>

<button className="withdraw-btn" onClick={withdraw}>
Withdraw
</button>
</div>
</div>

<div className="upload-section">
<h2>Upload Receipt / Invoice</h2>

<div className="upload-box">
<input
type="file"
accept=".pdf"
onChange={handleFileUpload}
/>
</div>

{uploadedFile && (
<p className="file-name">
Uploaded: {uploadedFile}
</p>
)}
</div>

<div className="transactions">
<h2>Recent Transactions</h2>

{transactions.map((transaction) => (
<div className="transaction" key={transaction.id}>
<span>{transaction.type}</span>
<strong>R {transaction.amount}</strong>
</div>
))}
</div>
</div>
</div>
);
}

export default App;