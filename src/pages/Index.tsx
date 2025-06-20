
import { useState } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { ProfileGrid } from '@/components/ProfileGrid';
import { mockProfiles } from '@/data/mockProfiles';
import { Profile } from '@/types/Profile';

const Index = () => {
  const [searchResults, setSearchResults] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (name: string, title: string, country: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const filteredProfiles = mockProfiles.filter(profile => {
      const nameMatch = !name || profile.name.toLowerCase().includes(name.toLowerCase());
      const titleMatch = !title || profile.title.toLowerCase().includes(title.toLowerCase());
      const countryMatch = !country || profile.country.toLowerCase() === country.toLowerCase();
      
      return nameMatch && titleMatch && countryMatch;
    }).slice(0, 50); // Limit to 50 results
    
    setSearchResults(filteredProfiles);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LinkedIn Profile Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find professional profiles by name, title, and location. Search through thousands of LinkedIn profiles instantly.
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
