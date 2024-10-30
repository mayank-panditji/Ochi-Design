import React from 'react';

const Insight = () => {
  return (
    <div className="flex flex-col min-h-screen items-center py-10 bg-[#202324]">
      <h1 className="text-4xl font-serif mb-5">Insights Video</h1>
      <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <video 
          className="w-full h-auto"
          controls
          poster="/img/video-poster.jpg" 
        >
       <source src="Main.mp4" type="video/mp4" />
          Your browser does not support the video tag.

        </video>
      </div>
      <p className="mt-5 text-center text-gray-700 max-w-2xl">
        Watch our latest insights video to learn more about our strategic approach and how we can help your business succeed.
      </p>
    </div>
  );
};

export default Insight;
