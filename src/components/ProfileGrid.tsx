
import { ProfileCard } from './ProfileCard';
import { Profile } from '@/types/Profile';
import { Loader2 } from 'lucide-react';

interface ProfileGridProps {
  profiles: Profile[];
  isLoading: boolean;
}

export const ProfileGrid = ({ profiles, isLoading }: ProfileGridProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Searching LinkedIn profiles...</p>
        </div>
      </div>
    );
  }

  if (profiles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-500 mb-4">
          <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No profiles found</h3>
        <p className="text-gray-500">Try adjusting your search criteria to find more results.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Found {profiles.length} profile{profiles.length !== 1 ? 's' : ''}
        </h2>
        <p className="text-gray-600">Showing up to 50 results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};
