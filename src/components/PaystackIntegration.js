import { React, useState, useEffect } from "react";
import PayStackPop from "@paystack/inline-js";
import { Navigate } from "react-router-dom";

const PaystackIntegration = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(4900);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setAmount("");
      setFirstName("");
      setLastName("");
      
      <Navigate to="/" replace={true} />
    }
  }, [isSuccess]);



  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PayStackPop();
    paystack.newTransaction({
      key: "pk_test_bd3517431063d0337f1069406b86d1e4cc33ca03",
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setIsSuccess(true);
      },
      onCancel() {
        alert("transaction Cancelled.");
      },
    });
  };

  return (
    <>
      <div className="w3-container w3-row">
        <div className="w3-container w3-blue">
          <h3 className="w3-center">Checkout</h3>
        </div>

        <div className="w3-container w3-quarter"></div>
        <div className="w3-container w3-half">
          <div className="w3-container w3-card-4">
            <form id="paymentForm">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  className="w3-input"
                  type="email"
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="amount">Amount</label>
                <input
                  className="w3-input"
                  type="tel"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="first-name">First Name</label>
                <input
                  className="w3-input"
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="last-name">Last Name</label>
                <input
                  className="w3-input"
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="form-submit">
                <button
                  onClick={payWithPaystack}
                  className="w3-btn w3-block w3-blue"
                  type="submit"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaystackIntegration;
