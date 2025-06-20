
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

const jobTitles = [
  'Software Engineer', 'Data Scientist', 'Product Manager', 'Marketing Manager', 'Sales Manager',
  'Business Analyst', 'UX Designer', 'DevOps Engineer', 'Financial Analyst', 'HR Manager',
  'Operations Manager', 'Project Manager', 'Software Developer', 'Marketing Specialist', 'Account Manager',
  'Customer Success Manager', 'Data Analyst', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'
];

const companies = [
  'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Tesla', 'Netflix', 'Adobe', 'Salesforce', 'Oracle',
  'IBM', 'Intel', 'Cisco', 'SAP', 'VMware', 'Nvidia', 'Uber', 'Airbnb', 'Spotify', 'LinkedIn'
];

const skills = [
  'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'SQL',
  'Machine Learning', 'Data Analysis', 'Project Management', 'Agile', 'Scrum', 'Git', 'Linux', 'MongoDB'
];

const universities = [
  'Stanford University', 'MIT', 'Harvard University', 'UC Berkeley', 'Carnegie Mellon University',
  'Georgia Tech', 'University of Washington', 'Cornell University', 'University of Michigan', 'UCLA'
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

function generateMatchingProfile(
  searchName: string,
  searchTitle: string,
  searchCountry: string,
  index: number
): Profile {
  const gender = Math.random() > 0.5 ? 'Male' : 'Female';
  const name = generateName(searchName, gender);
  const age = Math.floor(Math.random() * (65 - 22) + 22); // Age between 22-65
  
  const title = searchTitle || getRandomElement(jobTitles);
  const country = searchCountry || getRandomElement(Object.keys(cities));
  const cityList = cities[country as keyof typeof cities] || ['Capital City'];
  const city = getRandomElement(cityList);
  
  const company = getRandomElement(companies);
  const yearsOfExperience = Math.floor(Math.random() * (age - 22));
  
  const currentPosition = `${title} at ${company}`;
  const previousCompanies = getRandomElements(companies.filter(c => c !== company), 2);
  const previousPositions = previousCompanies.map(comp => 
    `${getRandomElement(jobTitles)} at ${comp}`
  );
  
  const education = [
    `${getRandomElement(['BS', 'MS', 'PhD'])} ${getRandomElement(['Computer Science', 'Engineering', 'Business'])} - ${getRandomElement(universities)}`
  ];
  
  const summary = `Experienced ${title.toLowerCase()} with ${yearsOfExperience} years of experience in the industry. Passionate about technology and innovation.`;
  
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
    experience: [currentPosition, ...previousPositions],
    education,
    skills: getRandomElements(skills, Math.floor(Math.random() * 6) + 3),
    connections: Math.floor(Math.random() * 5000) + 500,
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
