import React, { useState } from 'react';
import './CheckBox.css'; // Impor file CSS yang berisi gaya komponen

function CheckBox() {
  const [isSpouseChecked, setIsSpouseChecked] = useState(false);
  const [isChildChecked, setIsChildChecked] = useState(false);

  const handleSpouseToggle = () => {
    setIsSpouseChecked(!isSpouseChecked);
  };

  const handleChildToggle = () => {
    setIsChildChecked(!isChildChecked);
  };

  return (
    <div className="checkbox">
      <div className="checkbox__item">
        <input
          type="checkbox"
          className="checkbox__input"
          id="spouseCheckbox"
          checked={isSpouseChecked}
          onChange={handleSpouseToggle}
        />
        <label htmlFor="spouseCheckbox" className={`checkbox__label ${isSpouseChecked ? 'checked' : ''}`}>
          <span className="checkbox__text">Membawa Suami/Istri</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input
          type="checkbox"
          className="checkbox__input"
          id="childCheckbox"
          checked={isChildChecked}
          onChange={handleChildToggle}
        />
        <label htmlFor="childCheckbox" className={`checkbox__label ${isChildChecked ? 'checked' : ''}`}>
          <span className="checkbox__text">Membawa Anak</span>
        </label>
      </div>
    </div>
  );
}

export default CheckBox;
