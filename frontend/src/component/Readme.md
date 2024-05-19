import React, { useState } from 'react';

function CheckboxContainer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleContainerClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleContainerClick}>
      <input type="checkbox" checked={isChecked} onChange={() => {}} />
      <label>Akhil Srivastava</label>
    </div>
  );
}

export default CheckboxContainer;