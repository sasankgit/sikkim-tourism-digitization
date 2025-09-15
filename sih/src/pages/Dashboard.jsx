import React, { useState, useEffect } from 'react';
import {
  Menu,
  MapPin,
  Mountain,
  Calendar,
  Users,
  Star,
  Clock,
  Camera,
  Map,
  Landmark,
  Compass,
  Info,
  ChevronDown
} from 'lucide-react';

const Dashboard = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowContent(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const monasteries = [
    {
      name: "Rumtek Monastery",
      location: "East Sikkim",
      elevation: "1,550m",
      founded: "1740",
      description: "The largest monastery in Sikkim and seat of the Karma Kagyu lineage of Tibetan Buddhism",
      image: "/imagesforme/Rumtek Monastery.png",
      significance: "Golden Stupa",
      visitors: "50,000+ annually",
      speciality: "Houses the most sacred relics and maintains 300+ monks"
    },
    {
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      elevation: "2,085m",
      founded: "1705",
      description: "One of the oldest and most important monasteries in Sikkim, meaning 'Perfect Sublime Lotus'",
      image: "/imagesforme/Pemayangtse Monastery.png",
      significance: "Royal Monastery",
      visitors: "30,000+ annually",
      speciality: "Only pure-blooded Sikkimese allowed as monks originally"
    },
    {
      name: "Enchey Monastery",
      location: "Gangtok",
      elevation: "1,840m",
      founded: "1909",
      description: "Beautiful monastery with panoramic views of Kanchenjunga, the world's third highest peak",
      image: "/imagesforme/Enchey Monastery.jpg",
      significance: "Solitary Temple",
      visitors: "25,000+ annually",
      speciality: "Famous for Cham dance during Losar festival"
    },
    {
      name: "Tashiding Monastery",
      location: "West Sikkim",
      elevation: "1,465m",
      founded: "1717",
      description: "Sacred monastery believed to cleanse sins of pilgrims who visit during Bhumchu festival",
      image: "/imagesforme/Tashiding_Monastery.jpg",
      significance: "Heart of Sikkim",
      visitors: "40,000+ annually",
      speciality: "The sacred Bhumchu water ceremony"
    }
  ];

  const sikkimFacts = [
    { icon: <MapPin className="w-6 h-6" />, label: "Capital", value: "Gangtok" },
    { icon: <Mountain className="w-6 h-6" />, label: "Highest Peak", value: "Kanchenjunga (8,586m)" },
    { icon: <Users className="w-6 h-6" />, label: "Population", value: "610,577" },
    { icon: <Landmark className="w-6 h-6" />, label: "Monasteries", value: "200+" },
    { icon: <Compass className="w-6 h-6" />, label: "Area", value: "7,096 km²" },
    { icon: <Calendar className="w-6 h-6" />, label: "Statehood", value: "1975" }
  ];

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('/imagesforme/Sunrise_over_Kangchenjunga.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen" style={backgroundStyle}>
        

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-screen text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Discover Sikkim
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Land of Mystical Monasteries and Majestic Mountains
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 border border-cyan-400 rounded-full text-white font-medium 
                   bg-gradient-to-r from-cyan-500/20 to-blue-700/20 
                   backdrop-blur-md hover:from-cyan-500/40 hover:to-blue-700/40 
                   transition-all duration-300 shadow-md hover:shadow-cyan-400/40 cursor-pointer">
                   Buddhist Heritage
                 </span>

                 <span className="px-5 py-2 border border-cyan-400 rounded-full text-white font-medium 
                   bg-gradient-to-r from-indigo-500/20 to-purple-700/20 
                   backdrop-blur-md hover:from-indigo-500/40 hover:to-purple-700/40 
                   transition-all duration-300 shadow-md hover:shadow-indigo-400/40 cursor-pointer">
                    Himalayan Kingdom
                 </span>

                 <span className="px-5 py-2 border border-cyan-400 rounded-full text-white font-medium 
                   bg-gradient-to-r from-emerald-500/20 to-teal-700/20 
                   backdrop-blur-md hover:from-emerald-500/40 hover:to-teal-700/40 
                   transition-all duration-300 shadow-md hover:shadow-emerald-400/40 cursor-pointer">
                   Sacred Monasteries
                  </span>
              </div>

            </div>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Sikkim Quick Facts */}
      <div className="max-w-6xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Sikkim at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sikkimFacts.map((fact, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="bg-blue-500 p-3 rounded-full mr-4 text-white">
                  {fact.icon}
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{fact.label}</p>
                  <p className="font-bold text-lg text-gray-900">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-900">Ancient Heritage of Sikkim</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sikkim, once an independent kingdom, has a rich Buddhist heritage dating back to the 8th century. 
              The state was ruled by the Namgyal dynasty for over 300 years until it became part of India in 1975.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The monasteries of Sikkim serve as spiritual centers and repositories of Tibetan Buddhist culture, 
              art, and philosophy. These sacred spaces have preserved ancient texts, thangka paintings, 
              and religious artifacts for centuries.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                800+ Years of Buddhism
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium flex items-center">
                <Landmark className="w-4 h-4 mr-2" />
                Nyingma & Kagyu Traditions
              </span>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/imagesforme/BuddhaStatue.jpg"
                alt="Sikkim Monastery"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Monasteries Section */}
      <div id="monasteries" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Sacred Monasteries of Sikkim
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {monasteries.map((monastery, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{monastery.founded}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{monastery.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{monastery.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {monastery.location}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center">
                      <Mountain className="w-3 h-3 mr-1" />
                      {monastery.elevation}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Founded</p>
                        <p className="font-bold text-lg">{monastery.founded}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Visitors</p>
                        <p className="font-bold text-lg">{monastery.visitors}</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Special:</strong> {monastery.speciality}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map and Districts Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-900 flex items-center">
                <Map className="w-6 h-6 mr-3" />
                Geographic Overview
              </h3>
              <div className="relative bg-gradient-to-br from-blue-400 to-green-400 h-96 rounded-xl overflow-hidden">
                <img 
                  src="/imagesforme/Map.png"
                  alt="Sikkim Landscape"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-3xl font-bold mb-2">Interactive Map</h4>
                    <p className="text-lg">Exploring the Sacred Geography</p>
                    <button className="mt-4 px-6 py-2 bg-white bg-opacity-20 backdrop-blur-sm border border-white rounded-full hover:bg-opacity-30 transition-all">
                      View Full Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Districts of Sikkim</h3>
              <div className="space-y-4">
                {[
                  { name: 'East Sikkim', capital: 'Gangtok', monasteries: 45 },
                  { name: 'West Sikkim', capital: 'Gyalshing', monasteries: 52 },
                  { name: 'North Sikkim', capital: 'Mangan', monasteries: 38 },
                  { name: 'South Sikkim', capital: 'Namchi', monasteries: 41 }
                ].map((district, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                      <h4 className="font-semibold text-gray-900">{district.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">Capital: {district.capital}</p>
                    <p className="text-sm text-gray-600">Monasteries: {district.monasteries}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Did You Know?
                </h4>
                <p className="text-sm text-gray-700">
                  Sikkim is the second smallest state in India but has the highest density of monasteries per square kilometer in the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Heritage Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16 text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Living Buddhist Culture</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Sacred Rituals */}
      <div className="text-center">
        <div className="bg-white bg-opacity-10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img
            src="/imagesforme/Sacred img.png"   
            alt="Sacred Rituals"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">Sacred Rituals</h3>
        <p className="text-gray-300">
          Daily prayers, butter lamp offerings, and traditional ceremonies maintain spiritual connections across generations.
        </p>
      </div>

      {/* Sacred Art */}
      <div className="text-center">
        <div className="bg-white bg-opacity-10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img
            src="/imagesforme/SacredArt.png"   
            alt="Sacred Art"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">Sacred Art</h3>
        <p className="text-gray-300">
          Ancient thangka paintings, intricate mandalas, and sacred sculptures preserve Buddhist artistic traditions.
        </p>
      </div>

      {/* Monastic Life */}
      <div className="text-center">
        <div className="bg-white bg-opacity-10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img
            src="/imagesforme/MoansticLife.png"   
            alt="Monastic Life"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">Monastic Life</h3>
        <p className="text-gray-300">
          Over 4,000 monks and nuns dedicate their lives to preserving Buddhist teachings and serving their communities.
        </p>
      </div>

    </div>
  </div>
</div>


      {/* Festival Calendar */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Sacred Festivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Losar", month: "February", description: "Tibetan New Year with colorful Cham dances" },
            { name: "Bhumchu", month: "February/March", description: "Sacred water ceremony at Tashiding" },
            { name: "Saga Dawa", month: "May/June", description: "Buddha's birth, enlightenment and nirvana" },
            { name: "Drukpa Teshi", month: "August", description: "First teaching of Buddha celebration" },
            { name: "Diwali", month: "October/November", description: "Festival of lights with Buddhist influence" },
            { name: "Lhabab Duchen", month: "November", description: "Buddha's descent from heaven celebration" }
          ].map((festival, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-blue-600 font-semibold">{festival.month}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{festival.name}</h3>
              <p className="text-gray-600">{festival.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Exploring Sikkim</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Discover the mystical beauty and spiritual heritage of Sikkim through its ancient monasteries 
                and breathtaking Himalayan landscapes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <p>• Monastery Tours</p>
                <p>• Cultural Experiences</p>
                <p>• Travel Planning</p>
                <p>• Photography Tours</p>
                <p>• Spiritual Retreats</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Plan Your Journey</h4>
              <p className="text-gray-300 mb-4">
                Experience the tranquility of the Himalayas and immerse yourself in centuries-old Buddhist traditions.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
                Start Planning
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400">© 2024 Exploring Sikkim. Preserving Buddhist Heritage and Himalayan Culture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
