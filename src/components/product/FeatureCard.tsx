import { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  useCase?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  features, 
  color,
  useCase 
}: FeatureCardProps) {
  return (
    <div className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                   hover:border-purple-500/50 transition-all duration-300">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} 
                    flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-4">
        <div className="text-sm text-gray-300 font-medium mb-2">Features:</div>
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {useCase && (
        <div className="pt-4 border-t border-gray-800">
          <div className="text-sm text-gray-300 font-medium">Use case:</div>
          <div className="text-sm text-gray-400">{useCase}</div>
        </div>
      )}
    </div>
  );
}