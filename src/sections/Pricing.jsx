import React, { useState } from "react";
import Card from "../components/card/Card";
import "./sec.css";
import "./cssFiles/Pricing.css";

const plans = {
  monthly: [
    { plan: "Month", name: "Free", price: "0", features: ["5 documents a month", "Activity timeline"] },
    { plan: "Month", name: "Premium", price: "10", features: ["Unlimited documents", "Unlimited signees", "Activity timeline", "Certificate of completion"] },
    { plan: "Month", name: "Teams", price: "8", minTotal: "24", features: ["Everything from Premium", "Team management", "Transferable contracts"] },
  ],
  yearly: [
    { plan: "Year", name: "Free", price: "0", features: ["5 documents a month", "Activity timeline"] },
    { plan: "Year", name: "Premium", price: "100", features: ["Unlimited documents", "Unlimited signees", "Activity timeline", "Certificate of completion"] },
    { plan: "Year", name: "Teams", price: "80", minTotal: "240", features: ["Everything from Premium", "Team management", "Transferable contracts"] },
  ],
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="pricing" className="section s5">
      <h1>Pick your plan. We make this part easy too.</h1>
      {/* Toggle Button */}
      <div className="toggle-container">
        <button className={billingCycle === "monthly" ? "active" : ""} onClick={() => setBillingCycle("monthly")}>Monthly</button>
        <button className={billingCycle === "yearly" ? "active" : ""} onClick={() => setBillingCycle("yearly")}>Annually</button>
      </div>
      {/* Pricing Cards */}
      <div className="pricing-cards">
        {plans[billingCycle].map((plan, index) => (
          <Card key={index} {...plan}/>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

