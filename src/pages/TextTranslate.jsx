import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'hi', name: 'Hindi' },
  // Add more languages as needed
];

const TextTranslate = () => {
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('es');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTranslate = async () => {
    // Replace this with your translation API call
    // Mock translation for demonstration
    const translatedText = `${inputText} (translated to ${outputLanguage})`;
    setOutputText(translatedText);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Text Translate</h2>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-semibold">Input Language</label>
        <select 
          value={inputLanguage} 
          onChange={(e) => setInputLanguage(e.target.value)} 
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-semibold">Output Language</label>
        <select 
          value={outputLanguage} 
          onChange={(e) => setOutputLanguage(e.target.value)} 
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-semibold">Input Text</label>
        <textarea 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          rows="5" 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      <button 
        onClick={handleTranslate} 
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
      >
        Translate
      </button>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-semibold">Output Text</label>
        <textarea 
          value={outputText} 
          readOnly 
          rows="5" 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      <button 
        onClick={() => navigator.clipboard.writeText(outputText)} 
        className="bg-green-500 text-white py-2 px-4 rounded-md"
      >
        Copy Output
      </button>
    </div>
  );
};

export default TextTranslate;
