import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# Start Marking Down');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  // TODO: add styled for other html elements that markdown creates
  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
