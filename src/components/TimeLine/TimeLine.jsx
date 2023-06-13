import React from 'react';
import './TimeLine.css';

const Timeline = () => {
  return (
    <div className="timeline">
          <div class="progress-checkout-container">
            <div class="progress-step-container">
              <div class="step-check"></div>
              <span class="step-title">Pengajuan Sewa</span>
            </div>
            <div class="progress-step-container">
              <div class="step-check"></div>
              <span class="step-title">Pemilik Menyetujui</span>
            </div>
            <div class="progress-step-container">
              <div class="step-check"></div>
              <span class="step-title">Bayar Sewa Pertama</span>
            </div>
            <div class="progress-step-container">
              <div class="step-check"></div>
              <span class="step-title">Check-In</span>
            </div>
          </div>
          </div>
  );
};

export default Timeline;
