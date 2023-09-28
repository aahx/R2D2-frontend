import './App.css'
import { useState } from 'react';

import Prospect from './components/prospect/Prospect';
import Company from './components/company/Company';
import GenerateEmail from './components/generateEmail/GenerateEmail';
import OutputEmail from './components/outputEmail/OutputEmail';

function App() {
  // Default "Your" Company Description
  const DEFAULT_COMPANY_DESCRIPT = `  RapidRoad helps product teams build product faster. 
  
  We have a platform that allows product teams to talk more, exchange ideas, and listen to more customers.
  
  Automated project tracking: RapidRoad could use machine learning algorithms to automatically track project progress, identify potential bottlenecks and suggest ways to optimize workflows. This could help product teams stay on track and deliver faster results.

  Collaboration tools: 
    RapidRoad could offer built-in collaboration tools, such as shared task lists, real-time messaging, and team calendars. This would make it easier for teams to communicate and work together, even if they are in different locations or time zones.

  Agile methodology support: 
    RapidRoad could be specifically designed to support agile development methodologies, such as Scrum or Kanban. This could include features like sprint planning, backlog management, and burndown charts, which would help teams stay organized and focused on their goals.
  `;

  // Default Prospect Company Description
  const DEFAULT_PROSPECT_DESCRIPT = `  GitLab is the first single application for the entire DevOps lifecycle. Only GitLab enables Concurrent DevOps, unlocking organizations from the constraints of today’s toolchain. GitLab provides unmatched visibility, radical new levels of efficiency and comprehensive governance to significantly compress the time between planning a change and monitoring its effect. This makes the software lifecycle 200% faster, radically improving the speed of business.

  GitLab and Concurrent DevOps collapses cycle times by driving higher efficiency across all stages of the software development lifecycle. For the first time, Product, Development, QA, Security, and Operations teams can work concurrently in a single application. There’s no need to integrate and synchronize tools, or waste time waiting for handoffs. Everyone contributes to a single conversation, instead of managing multiple threads across disparate tools. And only GitLab gives teams complete visibility across the lifecycle with a single, trusted source of data to simplify troubleshooting and drive accountability. All activity is governed by consistent controls, making security and compliance first-class citizens instead of an afterthought.
  
  Built on Open Source, GitLab leverages the community contributions of thousands of developers and millions of users to continuously deliver new DevOps innovations. More than 100,000 organizations from startups to global enterprise organizations, including Ticketmaster, Jaguar Land Rover, NASDAQ, Dish Network and Comcast trust GitLab to deliver great software at new speeds.`;

  // Props
  const [companyInfo, setCompanyInfo] = useState(DEFAULT_COMPANY_DESCRIPT);
  const [prospectInfo, setProspectInfo] = useState(DEFAULT_PROSPECT_DESCRIPT);
  const [aiGeneratedEmail, setAiGeneratedEmail] = useState("");

  return (
    <>
      <div className="grid-container">
        <Company 
          companyInfo={companyInfo} 
          setCompanyInfo={setCompanyInfo} 
          />
        <Prospect 
          prospectInfo={prospectInfo} 
          setProspectInfo={setProspectInfo}
          />
        <GenerateEmail 
          companyInfo={companyInfo}
          prospectInfo={prospectInfo} 
          setAiGeneratedEmail={setAiGeneratedEmail} 
          />
        <OutputEmail 
          aiGeneratedEmail={aiGeneratedEmail} 
          />
      </div>
    </>
  )
}

export default App
