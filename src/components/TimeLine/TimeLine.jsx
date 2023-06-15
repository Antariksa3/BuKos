import React from 'react';
import './TimeLine.css';

const Timeline = () => {
  return (
    <div className="timeline">
          <div className="progress-checkout-container">
            <div className="progress-step-container">
              <div className="step-check"></div>
              <span className="step-title">Pengajuan Sewa</span>
            </div>
            <div className="progress-step-container">
              <div className="step-check"></div>
              <span className="step-title">Pemilik Menyetujui</span>
            </div>
            <div className="progress-step-container">
              <div className="step-check"></div>
              <span className="step-title">Bayar Sewa Pertama</span>
            </div>
            <div className="progress-step-container">
              <div className="step-check"></div>
              <span className="step-title">Check-In</span>
            </div>
          </div>
          </div>
  );
};

export default Timeline;
