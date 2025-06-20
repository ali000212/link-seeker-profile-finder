import { Profile } from '@/types/Profile';

const firstNamesMale = [
  'John', 'James', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Christopher',
  'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua',
  'Kenneth', 'Kevin', 'Brian', 'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan'
];

const firstNamesFemale = [
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
  'Nancy', 'Lisa', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle',
  'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Dorothy', 'Amy', 'Angela', 'Ashley', 'Brenda', 'Emma'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson'
];

const enhancedJobTitles = [
  'Software Engineer', 'Data Scientist', 'Product Manager', 'Marketing Manager', 'Sales Manager',
  'Business Analyst', 'UX Designer', 'DevOps Engineer', 'Financial Analyst', 'HR Manager',
  'Operations Manager', 'Project Manager', 'Software Developer', 'Marketing Specialist', 'Account Manager',
  'Customer Success Manager', 'Data Analyst', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'Chief Technology Officer', 'VP of Engineering', 'Director of Marketing', 'Senior Consultant',
  'Research Scientist', 'Machine Learning Engineer', 'Cybersecurity Analyst', 'Cloud Architect',
  'Investment Banker', 'Management Consultant', 'Strategy Advisor', 'Business Development Manager',
  'Content Creator', 'Social Media Manager', 'Brand Strategist', 'Digital Marketing Specialist',
  'Startup Founder', 'Entrepreneur', 'Venture Capitalist', 'Angel Investor', 'Board Member',
  'Professor', 'Research Director', 'Innovation Manager', 'Transformation Lead', 'Agile Coach'
];

const enhancedCompanies = [
  'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Tesla', 'Netflix', 'Adobe', 'Salesforce', 'Oracle',
  'IBM', 'Intel', 'Cisco', 'SAP', 'VMware', 'Nvidia', 'Uber', 'Airbnb', 'Spotify', 'LinkedIn',
  'Goldman Sachs', 'JPMorgan Chase', 'McKinsey & Company', 'Boston Consulting Group', 'Deloitte',
  'PwC', 'EY', 'KPMG', 'Accenture', 'IBM Consulting', 'Bain & Company', 'Oliver Wyman',
  'Y Combinator', 'Sequoia Capital', 'Andreessen Horowitz', 'Kleiner Perkins', 'General Atlantic',
  'Stripe', 'Square', 'PayPal', 'Coinbase', 'Robinhood', 'Plaid', 'Affirm', 'Klarna',
  'Zoom', 'Slack', 'Notion', 'Figma', 'Canva', 'Miro', 'Asana', 'Monday.com'
];

const diverseSkills = [
  // Technical Skills
  'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'SQL',
  'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn',
  'Data Science', 'Data Analysis', 'Big Data', 'Apache Spark', 'Hadoop', 'NoSQL', 'MongoDB', 'PostgreSQL',
  'Cloud Computing', 'Azure', 'Google Cloud', 'Terraform', 'Jenkins', 'CI/CD', 'DevOps', 'Microservices',
  'Blockchain', 'Cryptocurrency', 'Smart Contracts', 'Solidity', 'Web3', 'NFTs', 'DeFi',
  'Cybersecurity', 'Penetration Testing', 'CISSP', 'Ethical Hacking', 'Network Security',
  
  // Business Skills
  'Project Management', 'Agile', 'Scrum', 'Kanban', 'Lean Management', 'Six Sigma', 'PMP',
  'Strategic Planning', 'Business Strategy', 'Market Research', 'Competitive Analysis', 'SWOT Analysis',
  'Financial Modeling', 'Valuation', 'Investment Analysis', 'Risk Management', 'Portfolio Management',
  'Sales Strategy', 'Customer Acquisition', 'Lead Generation', 'CRM', 'Salesforce', 'HubSpot',
  'Digital Marketing', 'SEO', 'SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing',
  'Brand Management', 'Public Relations', 'Communications', 'Copywriting', 'Creative Writing',
  
  // Leadership & Soft Skills
  'Leadership', 'Team Management', 'Mentoring', 'Coaching', 'Change Management', 'Organizational Development',
  'Negotiation', 'Conflict Resolution', 'Cross-functional Collaboration', 'Stakeholder Management',
  'Public Speaking', 'Presentation Skills', 'Executive Communication', 'Board Reporting',
  
  // Industry Specific
  'Healthcare Technology', 'Fintech', 'EdTech', 'RegTech', 'LegalTech', 'PropTech', 'Biotech',
  'Renewable Energy', 'Sustainability', 'ESG', 'Impact Investing', 'Social Entrepreneurship',
  'E-commerce', 'Marketplace Development', 'Supply Chain', 'Logistics', 'Operations Research'
];

const diverseUniversities = [
  'Stanford University', 'MIT', 'Harvard University', 'UC Berkeley', 'Carnegie Mellon University',
  'Georgia Tech', 'University of Washington', 'Cornell University', 'University of Michigan', 'UCLA',
  'Oxford University', 'Cambridge University', 'Imperial College London', 'London School of Economics',
  'University of Toronto', 'University of British Columbia', 'McGill University', 'Waterloo University',
  'ETH Zurich', 'EPFL', 'Technical University of Munich', 'University of Amsterdam', 'KTH Royal Institute',
  'National University of Singapore', 'Nanyang Technological University', 'University of Tokyo', 'KAIST',
  'Indian Institute of Technology', 'Tsinghua University', 'Peking University', 'University of Melbourne'
];

const degreeTypes = ['BS', 'BA', 'MS', 'MA', 'MBA', 'PhD', 'JD', 'MD', 'Professional Certificate'];
const fieldOfStudy = [
  'Computer Science', 'Software Engineering', 'Data Science', 'Information Technology', 'Cybersecurity',
  'Business Administration', 'Finance', 'Economics', 'Marketing', 'International Business',
  'Mechanical Engineering', 'Electrical Engineering', 'Biomedical Engineering', 'Chemical Engineering',
  'Mathematics', 'Statistics', 'Physics', 'Chemistry', 'Biology', 'Bioengineering',
  'Psychology', 'Sociology', 'Political Science', 'International Relations', 'Philosophy',
  'Communications', 'Journalism', 'English Literature', 'Creative Writing', 'Design',
  'Medicine', 'Law', 'Public Health', 'Environmental Science', 'Architecture'
];

const cities = {
  'United States': ['New York', 'San Francisco', 'Los Angeles', 'Seattle', 'Chicago', 'Boston', 'Austin'],
  'United Kingdom': ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Bristol', 'Cambridge'],
  'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton'],
  'Germany': ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart'],
  'France': ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes']
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateName(searchName: string, gender: 'Male' | 'Female'): string {
  if (searchName.trim()) {
    return searchName;
  }
  
  const firstNames = gender === 'Male' ? firstNamesMale : firstNamesFemale;
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  
  return `${firstName} ${lastName}`;
}

function generateEducationBackground(): string[] {
  const numDegrees = Math.random() < 0.3 ? 1 : Math.random() < 0.7 ? 2 : 3;
  const education: string[] = [];
  
  for (let i = 0; i < numDegrees; i++) {
    const degree = getRandomElement(degreeTypes);
    const field = getRandomElement(fieldOfStudy);
    const university = getRandomElement(diverseUniversities);
    const year = 2024 - Math.floor(Math.random() * 25) - i * 3; // Realistic graduation years
    education.push(`${degree} in ${field} - ${university} (${year})`);
  }
  
  return education;
}

function generateCareerPath(yearsExp: number, currentTitle: string, currentCompany: string): string[] {
  const career: string[] = [`${currentTitle} at ${currentCompany}`];
  const numPrevious = Math.min(yearsExp > 10 ? 4 : yearsExp > 5 ? 3 : yearsExp > 2 ? 2 : 1, 5);
  
  for (let i = 0; i < numPrevious; i++) {
    const company = getRandomElement(enhancedCompanies.filter(c => c !== currentCompany));
    const title = getRandomElement(enhancedJobTitles);
    career.push(`${title} at ${company}`);
  }
  
  return career;
}

function generatePersonalizedSummary(name: string, title: string, yearsExp: number, skills: string[]): string {
  const summaryTemplates = [
    `${name} is a seasoned ${title.toLowerCase()} with ${yearsExp} years of experience specializing in ${skills.slice(0, 3).join(', ')}. Known for driving innovation and delivering exceptional results in fast-paced environments.`,
    `Passionate ${title.toLowerCase()} with ${yearsExp} years of expertise in ${skills.slice(0, 2).join(' and ')}. ${name} has a proven track record of leading high-impact projects and mentoring teams to success.`,
    `${name} brings ${yearsExp} years of deep experience in ${skills[0]} and ${skills[1]}, with a focus on ${skills[2]}. Committed to leveraging technology to solve complex business challenges.`,
    `Dynamic ${title.toLowerCase()} with ${yearsExp} years of experience building scalable solutions. ${name} excels in ${skills.slice(0, 3).join(', ')} and is passionate about emerging technologies.`,
    `Innovative ${title.toLowerCase()} with ${yearsExp} years of experience transforming ideas into reality. ${name} specializes in ${skills.slice(0, 2).join(' and ')} with a strong background in ${skills[2]}.`
  ];
  
  return getRandomElement(summaryTemplates);
}

function generateMatchingProfile(
  searchName: string,
  searchTitle: string,
  searchCountry: string,
  index: number
): Profile {
  const gender = Math.random() > 0.5 ? 'Male' : 'Female';
  const name = generateName(searchName, gender);
  const age = Math.floor(Math.random() * (65 - 22) + 22);
  
  const title = searchTitle || getRandomElement(enhancedJobTitles);
  const country = searchCountry || getRandomElement(Object.keys(cities));
  const cityList = cities[country as keyof typeof cities] || ['Capital City'];
  const city = getRandomElement(cityList);
  
  const company = getRandomElement(enhancedCompanies);
  const yearsOfExperience = Math.min(Math.floor(Math.random() * (age - 22)), age - 22);
  
  const currentPosition = `${title} at ${company}`;
  const experience = generateCareerPath(yearsOfExperience, title, company);
  const previousPositions = experience.slice(1);
  
  const education = generateEducationBackground();
  const skillCount = Math.floor(Math.random() * 8) + 4; // 4-12 skills per person
  const personalSkills = getRandomElements(diverseSkills, skillCount);
  
  const summary = generatePersonalizedSummary(name, title, yearsOfExperience, personalSkills);
  
  return {
    id: `generated-${Date.now()}-${index}`,
    name,
    age,
    gender,
    title,
    company,
    country,
    city,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(' ', '')}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    experience,
    education,
    skills: personalSkills,
    connections: Math.floor(Math.random() * 8000) + 500, // 500-8500 connections
    yearsOfExperience,
    currentPosition,
    previousPositions,
    summary
  };
}

export function generateProfiles(
  searchName: string,
  searchTitle: string,
  searchCountry: string,
  limit: number
): Profile[] {
  const profiles: Profile[] = [];
  
  for (let i = 0; i < limit; i++) {
    profiles.push(generateMatchingProfile(searchName, searchTitle, searchCountry, i));
  }
  
  return profiles;
}
