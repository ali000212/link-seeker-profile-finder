
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, Users, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import { Profile } from '@/types/Profile';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
      <CardContent className="p-6">
        {/* Basic Info */}
        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">{profile.name}</h3>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
            <span>{profile.age} years old</span>
            <span>•</span>
            <span>{profile.gender}</span>
          </div>
          
          <p className="text-blue-600 font-medium text-sm mb-2">{profile.title}</p>
          
          <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
            <Building className="w-4 h-4 mr-1" />
            {profile.company}
          </div>
          
          <div className="flex items-center justify-center text-gray-500 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {profile.city}, {profile.country}
          </div>

          <div className="flex items-center justify-center text-gray-500 text-sm">
            <Briefcase className="w-4 h-4 mr-1" />
            {profile.yearsOfExperience} years experience
          </div>
        </div>

        {/* Connections */}
        <div className="flex items-center justify-center mb-4 text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">{profile.connections.toLocaleString()} connections</span>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <p className="text-xs text-gray-600 line-clamp-3">
            {profile.summary}
          </p>
        </div>

        {/* Current Position */}
        <div className="mb-4">
          <div className="flex items-center mb-2 text-gray-700">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Current Position</span>
          </div>
          <p className="text-xs text-gray-600">
            {profile.currentPosition}
          </p>
        </div>

        {/* Career History */}
        {profile.previousPositions.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center mb-2 text-gray-700">
              <Briefcase className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Career History</span>
            </div>
            <div className="space-y-1">
              {profile.previousPositions.slice(0, 2).map((position, index) => (
                <p key={index} className="text-xs text-gray-600 line-clamp-1">
                  {position}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {profile.education.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center mb-2 text-gray-700">
              <GraduationCap className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Education</span>
            </div>
            <div className="space-y-1">
              {profile.education.map((edu, index) => (
                <p key={index} className="text-xs text-gray-600 line-clamp-2">
                  {edu}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {profile.skills.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Skills ({profile.skills.length})</p>
            <div className="flex flex-wrap gap-1">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {skill}
                </Badge>
              ))}
              {profile.skills.length > 4 && (
                <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                  +{profile.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
