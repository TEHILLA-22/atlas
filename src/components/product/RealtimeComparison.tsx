import { CheckCircle, Minus, Radio } from 'lucide-react';

const comparisonData = [
  {
    category: "Database Integration",
    atlas: { value: "Native PostgreSQL", highlight: true },
    pusher: { value: "Third-party only" },
    ably: { value: "Third-party only" },
    socketio: { value: "Manual setup" }
  },
  {
    category: "Global Latency",
    atlas: { value: "<100ms", subtext: "30+ edge locations" },
    pusher: { value: "100-200ms", subtext: "Limited regions" },
    ably: { value: "50-150ms", subtext: "15 regions" },
    socketio: { value: "Varies", subtext: "Self-managed" }
  },
  {
    category: "Max Connections",
    atlas: { value: "1M+", subtext: "Per project" },
    pusher: { value: "200K", subtext: "Enterprise plan" },
    ably: { value: "500K", subtext: "Enterprise plan" },
    socketio: { value: "Limited by server", subtext: "Self-managed" }
  },
  {
    category: "Pricing Model",
    atlas: { value: "Predictable", subtext: "Per active connection" },
    pusher: { value: "Messages + connections", subtext: "Complex pricing" },
    ably: { value: "Messages + connections", subtext: "Complex pricing" },
    socketio: { value: "Infrastructure cost", subtext: "Self-managed" }
  },
  {
    category: "Security Compliance",
    atlas: { value: "SOC2, GDPR, HIPAA", highlight: true },
    pusher: { value: "SOC2, GDPR" },
    ably: { value: "SOC2, GDPR" },
    socketio: { value: "Self-managed" }
  }
];

export default function RealtimeComparison() {
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left p-6 text-gray-400 font-medium">Feature</th>
              <th className="text-left p-6 text-gray-400 font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <Radio className="w-3 h-3 text-white" />
                  </div>
                  <span>Atlas Realtime</span>
                </div>
              </th>
              <th className="text-left p-6 text-gray-400 font-medium">Pusher</th>
              <th className="text-left p-6 text-gray-400 font-medium">Ably</th>
              <th className="text-left p-6 text-gray-400 font-medium">Socket.io</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className={`border-b border-gray-800 hover:bg-gray-900/50 ${
                index % 2 === 0 ? 'bg-gray-900/10' : ''
              }`}>
                <td className="p-6 font-medium text-white">{row.category}</td>
                
                {/* Atlas */}
                <td className="p-6">
                  <div className={row.atlas.highlight ? 'text-green-400' : 'text-white'}>
                    <div className="font-semibold">{row.atlas.value}</div>
                    {row.atlas.subtext && (
                      <div className="text-sm text-gray-400 mt-1">{row.atlas.subtext}</div>
                    )}
                  </div>
                </td>
                
                {/* Pusher */}
                <td className="p-6">
                  <div className="text-gray-300">
                    <div>{row.pusher.value}</div>
                    {row.pusher.subtext && (
                      <div className="text-sm text-gray-500 mt-1">{row.pusher.subtext}</div>
                    )}
                  </div>
                </td>
                
                {/* Ably */}
                <td className="p-6">
                  <div className="text-gray-300">
                    <div>{row.ably.value}</div>
                    {row.ably.subtext && (
                      <div className="text-sm text-gray-500 mt-1">{row.ably.subtext}</div>
                    )}
                  </div>
                </td>
                
                {/* Socket.io */}
                <td className="p-6">
                  <div className="text-gray-400">
                    <div>{row.socketio.value}</div>
                    {row.socketio.subtext && (
                      <div className="text-sm text-gray-600 mt-1">{row.socketio.subtext}</div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}