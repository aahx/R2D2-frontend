import './App.css'
import { useState } from 'react';

import Prospect from './components/prospect/Prospect';
import Company from './components/company/Company';
import GenerateEmail from './components/generateEmail/GenerateEmail';
import OutputEmail from './components/outputEmail/OutputEmail';

function App() {
  // Company Description
  const rapidRoadDescription = `
  RapidRoad helps product teams build product faster. 
  
  We have a platform that allows product teams to talk more, exchange ideas, and listen to more customers.
  
  Automated project tracking: RapidRoad could use machine learning algorithms to automatically track project progress, identify potential bottlenecks and suggest ways to optimize workflows. This could help product teams stay on track and deliver faster results.

  Collaboration tools: 
    RapidRoad could offer built-in collaboration tools, such as shared task lists, real-time messaging, and team calendars. This would make it easier for teams to communicate and work together, even if they are in different locations or time zones.

  Agile methodology support: 
    RapidRoad could be specifically designed to support agile development methodologies, such as Scrum or Kanban. This could include features like sprint planning, backlog management, and burndown charts, which would help teams stay organized and focused on their goals.
  `;

  const [companyInfo, setCompanyInfo] = useState(rapidRoadDescription);
  const [aiGeneratedEmail, setAiGeneratedEmail] = useState("");


  
  return (
    <>
      <div className="grid-container">
        <Company companyInfo={companyInfo} setCompanyInfo={setCompanyInfo}/>
        <Prospect />
        <GenerateEmail setAiGeneratedEmail={setAiGeneratedEmail}/>
        <OutputEmail aiGeneratedEmail={aiGeneratedEmail}/>
      </div>
    </>
  )
}

export default App
