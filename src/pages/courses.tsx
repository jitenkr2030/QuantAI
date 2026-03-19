import { ArrowRight, Play, BookOpen, Award, Clock, Users, Star, Lock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Trading Basics",
    description: "Learn the fundamentals of crypto trading",
    price: 999,
    originalPrice: 1999,
    lessons: 12,
    duration: "4 hours",
    level: "Beginner",
    icon: BookOpen,
    color: "blue",
    features: ["Market fundamentals", "Order types", "Risk management basics", "Trading psychology"]
  },
  {
    id: 2,
    title: "Technical Analysis",
    description: "Master chart patterns and indicators",
    price: 2499,
    originalPrice: 4999,
    lessons: 24,
    duration: "8 hours",
    level: "Intermediate",
    icon: Award,
    color: "purple",
    features: ["Candlestick patterns", "Support & resistance", "Indicators (RSI, MACD)", "Price action trading"]
  },
  {
    id: 3,
    title: "AI Trading Mastery",
    description: "Build and use AI-powered trading strategies",
    price: 4999,
    originalPrice: 9999,
    lessons: 18,
    duration: "6 hours",
    level: "Advanced",
    icon: Star,
    color: "amber",
    features: ["AI signal interpretation", "Automated strategies", "Portfolio optimization", "QuantAI Pro training"]
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold">QuantAI</a>
          <a href="/dashboard" className="text-sm text-zinc-400 hover:text-white">Dashboard</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Education & Courses</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Learn trading from basics to advanced AI-powered strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div key={course.id} className="bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition">
                <div className={`h-2 bg-${course.color}-500`} />
                <div className="p-6">
                  <Icon className={`w-12 h-12 text-${course.color}-500 mb-4`} />
                  <span className="text-xs bg-zinc-800 px-2 py-1 rounded">{course.level}</span>
                  <h3 className="text-xl font-semibold mt-3 mb-2">{course.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                    <span className="flex items-center gap-1"><Play className="w-4 h-4" /> {course.lessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((f, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">₹{course.price}</span>
                      <span className="text-sm text-zinc-500 line-through ml-2">₹{course.originalPrice}</span>
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-medium">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">QuantAI Pro Bundle</h2>
          <p className="text-zinc-400 mb-2">Get all 3 courses + lifetime QuantAI Pro access</p>
          <p className="text-3xl font-bold mb-4">₹6,999 <span className="text-lg text-zinc-500 line-through">₹14,997</span></p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 px-8 py-3 rounded-lg font-semibold">
            Get the Bundle
          </button>
        </div>
      </main>
    </div>
  );
}