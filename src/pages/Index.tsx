
import { useState } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { ProfileGrid } from '@/components/ProfileGrid';
import { generateProfiles } from '@/utils/profileGenerator';
import { Profile } from '@/types/Profile';

const Index = () => {
  const [searchResults, setSearchResults] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (name: string, title: string, country: string, limit: number) => {
    setIsLoading(true);
    
    console.log('Generating profiles with params:', { name, title, country, limit });
    
    // Simulate search time: 1 second per person
    const searchTime = limit * 1000;
    await new Promise(resolve => setTimeout(resolve, searchTime));
    
    const generatedProfiles = generateProfiles(name, title, country, limit);
    console.log('Generated profiles:', generatedProfiles.length);
    
    setSearchResults(generatedProfiles);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LinkedIn Profile Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate realistic LinkedIn profiles by name, title, country and limit. Create up to 50 profiles instantly with comprehensive professional data.
          </p>
        </div>

        {/* Search Form */}
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />

        {/* Results */}
        <ProfileGrid profiles={searchResults} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Index;
