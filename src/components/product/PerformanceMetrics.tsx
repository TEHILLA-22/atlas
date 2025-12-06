// src/components/product/PerformanceMetrics.tsx
interface MetricProps {
  label: string;
  value: string;
  percentage: number;
  color?: string;
}

export default function PerformanceMetrics({ 
  metrics,
  title 
}: { 
  metrics: MetricProps[];
  title: string;
}) {
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <div className="text-white font-medium">{metric.label}</div>
              <div className={`font-bold ${metric.color || 'text-green-400'}`}>
                {metric.value}
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${metric.color?.includes('indigo') ? 'from-indigo-500 to-blue-500' : 'from-green-500 to-emerald-500'} h-full rounded-full`}
                style={{ width: `${metric.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}