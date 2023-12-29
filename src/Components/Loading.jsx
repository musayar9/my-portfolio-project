import React from 'react'
import { ColorRing } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="color-ring-loading"
      
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#007bff"]}
      />
      
    </div>
  );
}

export default Loading
