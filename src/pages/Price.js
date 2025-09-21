import React, { useState } from 'react';
import Offer from '../components/Offer';
import './Price.css';
import { plan } from '../assests/Deatils';
import Navbar from '../components/Navbar';

function Price() {
  const [pricingMode, setPricingMode] = useState('monthly');

  const prices = {
    free: 0,
    monthly: 79,
    yearly: 810,
  };

  return (
    <div>
      <Offer />
      <Navbar/>
      <div className="container-fluid all">
        <h2 className="mt-3">Our Pricings</h2>

        <div className="sub">
          <button
            className={`month ${pricingMode === 'monthly' ? 'active' : ''}`}
            onClick={() => setPricingMode('monthly')}
          >
            Monthly
          </button>
          <button
            className={`year ${pricingMode === 'yearly' ? 'active' : ''}`}
            onClick={() => setPricingMode('yearly')}
          >
            Yearly
          </button>
        </div>

        <div className="sub-deatils">
          <div className="price">
            <h5 className="text-center">Free Plan</h5>
            <h5 className="text-center">Price - $ {prices.free}</h5>
            {plan.map((app, index) => (
              <React.Fragment key={index}>
                <p className="fea">
                  <strong>{app.avai || 'No'}</strong> - {app.title}
                </p>
              </React.Fragment>
            ))}
            <button className="get">Get Started</button>
          </div>

          <div className="price">
            <h5 className="text-center">
              {pricingMode === 'monthly' ? 'Monthly Plan' : 'Yearly Plan'}
            </h5>
            <h5 className="text-center">
              Price - $ {pricingMode === 'monthly' ? prices.monthly : prices.yearly}
            </h5>
            {plan.map((app, index) => (
              <React.Fragment key={index}>
                <p className="fea">
                  <strong>Yes</strong> - {app.title}
                </p>
              </React.Fragment>
            ))}
            <button className="get">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
