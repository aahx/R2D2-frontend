import './App.css'
import { useState } from 'react';

import Prospect from './components/prospect/prospect';
import Company from './components/company/Company';
import GenerateEmail from './components/generateEmail/GenerateEmail';
import OutputEmail from './components/outputEmail/OutputEmail';

function App() {
  const [aiGeneratedEmail, setAiGeneratedEmail] = useState("");

  console.log(aiGeneratedEmail);
  
  return (
    <>
      <div className="grid-container">
        <Company />
        <Prospect />
        <GenerateEmail setAiGeneratedEmail={setAiGeneratedEmail}/>
        <OutputEmail aiGeneratedEmail={aiGeneratedEmail}/>
      </div>
    </>
  )
}

export default App
