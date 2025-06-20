
export interface Profile {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  title: string;
  company: string;
  country: string;
  city: string;
  avatar: string;
  experience: string[];
  education: string[];
  skills: string[];
  connections: number;
  yearsOfExperience: number;
  currentPosition: string;
  previousPositions: string[];
  summary: string;
}
