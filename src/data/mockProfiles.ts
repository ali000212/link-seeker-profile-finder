
import { Profile } from '@/types/Profile';

const firstNames = [
  'John', 'Mary', 'James', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth',
  'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Christopher', 'Karen',
  'Charles', 'Nancy', 'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Helen', 'Mark', 'Sandra',
  'Donald', 'Donna', 'Steven', 'Carol', 'Paul', 'Ruth', 'Andrew', 'Sharon', 'Joshua', 'Michelle',
  'Kenneth', 'Laura', 'Kevin', 'Sarah', 'Brian', 'Kimberly', 'George', 'Deborah', 'Edward', 'Dorothy',
  'Alexander', 'Amy', 'Benjamin', 'Angela', 'Jack', 'Ashley', 'Henry', 'Brenda', 'Jacob', 'Emma',
  'Logan', 'Olivia', 'Lucas', 'Cynthia', 'Mason', 'Marie', 'Ethan', 'Janet', 'Noah', 'Catherine'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'
];

const jobTitles = [
  'Software Engineer', 'Data Scientist', 'Product Manager', 'Marketing Manager', 'Sales Manager',
  'Business Analyst', 'UX Designer', 'DevOps Engineer', 'Financial Analyst', 'HR Manager',
  'Operations Manager', 'Project Manager', 'Software Developer', 'Marketing Specialist', 'Account Manager',
  'Customer Success Manager', 'Data Analyst', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'Mobile Developer', 'Cloud Engineer', 'Security Engineer', 'Machine Learning Engineer', 'Research Scientist',
  'Product Designer', 'Graphic Designer', 'Content Manager', 'Social Media Manager', 'SEO Specialist',
  'Digital Marketing Manager', 'Brand Manager', 'Strategy Consultant', 'Management Consultant', 'Senior Developer',
  'Lead Developer', 'Engineering Manager', 'Technical Lead', 'Architect', 'Principal Engineer'
];

const companies = [
  'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Tesla', 'Netflix', 'Adobe', 'Salesforce', 'Oracle',
  'IBM', 'Intel', 'Cisco', 'SAP', 'VMware', 'Nvidia', 'Uber', 'Airbnb', 'Spotify', 'Twitter',
  'LinkedIn', 'Slack', 'Zoom', 'Dropbox', 'Shopify', 'Square', 'PayPal', 'eBay', 'Atlassian', 'ServiceNow',
  'Workday', 'Snowflake', 'MongoDB', 'Twilio', 'Stripe', 'Coinbase', 'Robinhood', 'DoorDash', 'Lyft', 'Pinterest',
  'Snap Inc', 'TikTok', 'Discord', 'Reddit', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Red Hat', 'Canonical'
];

const skills = [
  'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'SQL',
  'Machine Learning', 'Data Analysis', 'Project Management', 'Agile', 'Scrum', 'Git', 'Linux', 'MongoDB',
  'PostgreSQL', 'GraphQL', 'REST APIs', 'Microservices', 'DevOps', 'CI/CD', 'Terraform', 'Angular', 'Vue.js',
  'Go', 'Rust', 'C++', 'C#', '.NET', 'Spring Boot', 'Django', 'Flask', 'Express.js', 'Next.js', 'Gatsby'
];

const universities = [
  'Stanford University', 'MIT', 'Harvard University', 'UC Berkeley', 'Carnegie Mellon University',
  'Georgia Tech', 'University of Washington', 'Cornell University', 'University of Michigan', 'UCLA',
  'University of Southern California', 'New York University', 'Columbia University', 'Princeton University',
  'Yale University', 'University of Pennsylvania', 'Duke University', 'Northwestern University', 'University of Chicago',
  'Johns Hopkins University', 'Rice University', 'Vanderbilt University', 'Emory University', 'University of Notre Dame'
];

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Netherlands', 'Sweden',
  'Norway', 'Denmark', 'Switzerland', 'Austria', 'Ireland', 'Italy', 'Spain', 'Japan', 'Singapore',
  'South Korea', 'India', 'Brazil', 'Mexico', 'Argentina', 'Chile', 'Israel', 'United Arab Emirates'
];

const cities = {
  'United States': ['New York', 'San Francisco', 'Los Angeles', 'Seattle', 'Chicago', 'Boston', 'Austin', 'Denver', 'Atlanta', 'Miami'],
  'United Kingdom': ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Bristol', 'Cambridge', 'Oxford', 'Liverpool', 'Leeds', 'Glasgow'],
  'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'],
  'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Darwin', 'Hobart', 'Gold Coast', 'Newcastle'],
  'Germany': ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'],
  'France': ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'],
  'Netherlands': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nijmegen'],
  'Sweden': ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping']
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateRandomProfile(id: string): Profile {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const country = getRandomElement(countries);
  const cityList = cities[country as keyof typeof cities] || ['Capital City'];
  const city = getRandomElement(cityList);
  const title = getRandomElement(jobTitles);
  const company = getRandomElement(companies);
  
  return {
    id,
    name: `${firstName} ${lastName}`,
    title,
    company,
    country,
    city,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    experience: [
      `${title} at ${company}`,
      `${getRandomElement(jobTitles)} at ${getRandomElement(companies)}`,
      `${getRandomElement(jobTitles)} at ${getRandomElement(companies)}`
    ],
    education: [
      `${getRandomElement(['BS', 'MS', 'PhD'])} ${getRandomElement(['Computer Science', 'Engineering', 'Business', 'Mathematics', 'Physics'])} - ${getRandomElement(universities)}`,
      `${getRandomElement(['BS', 'BA'])} ${getRandomElement(['Computer Science', 'Engineering', 'Business', 'Mathematics', 'Physics'])} - ${getRandomElement(universities)}`
    ],
    skills: getRandomElements(skills, Math.floor(Math.random() * 8) + 3),
    connections: Math.floor(Math.random() * 5000) + 500
  };
}

// Generate 1000 mock profiles
export const mockProfiles: Profile[] = Array.from({ length: 1000 }, (_, index) => 
  generateRandomProfile(`profile-${index + 1}`)
);
