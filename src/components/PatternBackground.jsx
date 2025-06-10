import React from 'react';

const PatternBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    style={{ opacity: 0.13 }}
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="bars" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="8" height="40" fill="#8b6642" />
        <rect x="16" y="0" width="8" height="24" fill="#8b6642" />
        <rect x="32" y="0" width="8" height="32" fill="#8b6642" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#bars)" />
  </svg>
);

export default PatternBackground; 