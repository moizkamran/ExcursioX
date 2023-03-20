import React from 'react';
import PropTypes from 'prop-types';
import "./LoyaltyWidget.css"

function LoyalCustomer({ ytdPercentage, ytdBgColor, ytdIndicatorPercentage, mtdPercentage, mtdBgColor, mtdIndicatorPercentage }) {
  return (
    <div className="loyal-customer-container">
      <div className="loyal-customer-heading">
        <span className="heading-text">Loyal Customer Rate</span>
      </div>
      <div className="loyal-customer-content">
        <div className="loyal-customer-chart-container">
          <div className="loyal-customer-chart loyal-customer-chart-ytd">
            <div className="loyal-customer-chart-data">
              <span className="chart-data-value" style={{ backgroundColor: ytdBgColor }}>{ytdPercentage}</span>
              <div className="chart-data-subtext">
                <span className="subtext-text">YTD</span>
                <div className={`subtext-indicator ${ytdIndicatorPercentage > 0 ? 'subtext-indicator-up' : 'subtext-indicator-down'}`}>
                  <img src={ytdIndicatorPercentage > 0 ? 'images/uparrow.svg' : 'images/downarrow.svg'} alt={ytdIndicatorPercentage > 0 ? 'Up arrow' : 'Down arrow'} />
                  <span className="subtext-indicator-value">{ytdIndicatorPercentage}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="loyal-customer-chart loyal-customer-chart-mtd">
            <div className="loyal-customer-chart-data">
              <span className="chart-data-value" style={{ backgroundColor: mtdBgColor }}>{mtdPercentage}</span>
              <div className="chart-data-subtext">
                <span className="subtext-text">MTD</span>
                <div className={`subtext-indicator ${mtdIndicatorPercentage > 0 ? 'subtext-indicator-up' : 'subtext-indicator-down'}`}>
                  <img src={mtdIndicatorPercentage > 0 ? 'images/uparrow.svg' : 'images/downarrow.svg'} alt={mtdIndicatorPercentage > 0 ? 'Up arrow' : 'Down arrow'} />
                  <span className="subtext-indicator-value">{mtdIndicatorPercentage}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loyal-customer-metrics-container">
          <div className="loyal-customer-metric loyal-customer-metric-previous-year">
            <div className="metric-data">
              <span className="metric-value">15%</span>
              <div className="metric-subtext">
                <span className="subtext-text">Previous Year</span>
              </div>
            </div>
          </div>
          <div className="loyal-customer-metric loyal-customer-metric-previous-month">
            <div className="metric-data">
              <span className="metric-value">14.2%</span>
              <div className="metric-subtext">
                <span className="subtext-text">Previous Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoyalCustomer.propTypes = {
  ytdPercentage: PropTypes.string.isRequired,
  ytdBgColor: PropTypes.string.isRequired,
  ytdIndicatorPercentage: PropTypes.number.isRequired,
  mtdPercentage: PropTypes.string.isRequired,
  mtdBgColor: PropTypes.string.isRequired,
  mtdIndicatorPercentage: PropTypes.number.isRequired,
};

export default LoyalCustomer;