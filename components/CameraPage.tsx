
import React from 'react';

const CameraPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
        <i className="fa-solid fa-camera-retro text-4xl text-orange-500"></i>
      </div>
      <h2 className="text-xl font-bold">開啟相機識別食材</h2>
      <p className="text-gray-500 max-w-[250px]">
        對準食材拍照，我們將自動為您辨識並生成專屬食譜。
      </p>
      <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg mt-4">
        打開相機
      </button>
    </div>
  );
};

export default CameraPage;
