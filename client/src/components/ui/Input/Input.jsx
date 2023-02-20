import React from 'react';
import './Input.css';

export default function Input() {
  return (
    <div>
      <input
        id="text"
        type="text"
        maxLength="6"
        pattern="[0-9]{0,6}"
        placeholder="######"
        size="4"
      />
    </div>
  );
}
