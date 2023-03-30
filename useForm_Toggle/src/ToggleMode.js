import React, { useState } from 'react';

function ToggleMode() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'Disable' : 'Enable'} Toggle Mode
      </button>
      {isToggled && (
        <div>
          <h1>Toggle Mode is enabled!</h1>
          <p>You can now toggle some content on and off.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleMode;

