
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Loader2 } from 'lucide-react';
import { countries } from '@/data/countries';

interface SearchFormProps {
  onSearch: (name: string, title: string, country: string) => void;
  isLoading: boolean;
}

export const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(name, title, country);
  };

  return (
    <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="e.g., John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">
                Job Title
              </label>
              <Input
                id="title"
                type="text"
                placeholder="e.g., Software Engineer"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium text-gray-700">
                Country
              </label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((countryName) => (
                    <SelectItem key={countryName} value={countryName}>
                      {countryName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Search Profiles
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
