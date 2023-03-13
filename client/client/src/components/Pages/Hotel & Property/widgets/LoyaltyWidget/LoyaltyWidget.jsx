import React from 'react';
import PropTypes from 'prop-types';
import "./LoyaltyWidget.css"

function LoyalCustomer({ ytdPercentage, ytdBgColor, ytdIndicatorPercentage, mtdPercentage, mtdBgColor, mtdIndicatorPercentage }) {
  return (
<div>
            <div style="margin-bottom: 5px;">
                <span style="font-size: 22px; font-weight: normal;">Loyal Customer Rate</span>
            </div>

            <div style="display: flex;">
                <div>
                    <div style="background-color: #FF8A00; width: 150px; height: 150px; display: flex; flex-direction: column; justify-content: center; border-top-left-radius: 17.5px; border-bottom-left-radius: 17.5px;">
                            <div  style="margin-left: auto; margin-right: auto;">
                                <div style="margin-bottom: 5px;">
                                    <div><span style="font-size: 35px; font-weight: bold;">25.2%</span></div>
                                    <div style="display: flex;">
                                        <div><span style="padding-right: 5px;font-weight: normal;">YTD</span></div>
                                        <div style="margin-top: auto; margin-bottom: auto; display: flex; justify-content: center; width: 42px; height: 12px; background-color: #5FA02B; color: #FFFFFF; border-radius: 7px; font-size: 8px;">
                                            <div style=" margin-top: auto; margin-bottom: auto; padding-right: 1.15px;"><img src="images/uparrow.svg"/></div>
                                            <div style=" margin-top: auto; margin-bottom: auto;">10.2%</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div><span style="font-size: 35px; font-weight: bold;">12.5%</span></div>
                                    <div style="display: flex;">
                                        <div><span style="padding-right: 5px;font-weight: normal;">MTD</span></div>
                                        <div style="margin-top: auto; margin-bottom: auto; display: flex; justify-content: center; width: 42px; height: 12px; background-color: #FF0000; color: #FFFFFF; border-radius: 7px; font-size: 8px;">
                                            <div style=" margin-top: auto; margin-bottom: auto; padding-right: 1.15px;"><img src="images/downarrow.svg"/></div>
                                            <div style=" margin-top: auto; margin-bottom: auto;">1.7%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div style="background-color: #5C1640; width: 150px; height: 150px; display: flex; flex-direction: column; justify-content: center; color: #FFFFFF; border-top-right-radius: 17.5px; border-bottom-right-radius: 17.5px;">
                    <div style="margin-left: auto; margin-right: auto;">
                        <div>
                            <div><span style="font-size: 35px; font-weight: bold;">15%</span></div>
                            <div style="display: flex;">
                                <div><span style="font-weight: normal;">Previous Year</span></div>
                            </div>
                        </div>
                        <div>
                            <div><span style="font-size: 35px; font-weight: bold;">14.2%</span></div>
                            <div style="display: flex;">
                                <div><span style="font-weight: normal;">Previous Month</span></div>
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


    function LoyalCustomer({}) {
      return (<div class="loyal-customer-rate">
  <div class="loyal-customer-rate-title">Loyal Customer Rate</div>
  <div class="loyal-customer-rate-container">
    <div class="loyal-customer-rate-box loyal-customer-rate-box-ytd">
      <div class="loyal-customer-rate-box-content">
        <div class="loyal-customer-rate-box-value">25.2%</div>
        <div class="loyal-customer-rate-box-label">YTD</div>
        <div class="loyal-customer-rate-box-indicator loyal-customer-rate-box-indicator-up">10.2%</div>
      </div>
    </div>
    <div class="loyal-customer-rate-box loyal-customer-rate-box-mtd">
      <div class="loyal-customer-rate-box-content">
        <div class="loyal-customer-rate-box-value">12.5%</div>
        <div class="loyal-customer-rate-box-label">MTD</div>
        <div class="loyal-customer-rate-box-indicator loyal-customer-rate-box-indicator-down">1.7%</div>
      </div>
    </div>
    <div class="loyal-customer-rate-box loyal-customer-rate-box-previous-year">
      <div class="loyal-customer-rate-box-content">
        <div class="loyal-customer-rate-box-value">15%</div>
        <div class="loyal-customer-rate-box-label">Previous Year</div>
      </div>
    </div>
    <div class="loyal-customer-rate-box loyal-customer-rate-box-previous-month">
      <div class="loyal-customer-rate-box-content">
        <div class="loyal-customer-rate-box-value">14.2%</div>
        <div class="loyal-customer-rate-box-label">Previous Month</div>
      </div>
    </div>
  </div>
</div>);
    }
  export default LoyalCustomer;