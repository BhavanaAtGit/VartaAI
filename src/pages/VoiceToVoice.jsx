import React from 'react';

const VoiceToVoice = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Voice to Voice Translation</h2>
      <p className="text-lg text-center mb-4">
        This page will provide voice-to-voice translation functionality. You can record your voice and it will be translated to another language.
      </p>
      {/* Add voice recording and translation functionality here */}
      <div className="text-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Start Voice Translation
        </button>
      </div>
    </div>
  );
};

export default VoiceToVoice;
