import React from 'react'
import { ColorRing } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={["#64748b", "#475569", "#334155", "#1e293b", "#007bff"]}
      />
    </div>
  );
}

export default Loading
