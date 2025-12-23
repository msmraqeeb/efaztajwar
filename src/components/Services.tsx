import { ArrowRight, Monitor, Gem, Building2 } from 'lucide-react';
import euroItImage from '../assets/euro_it_branding.jpg';
import euroMarbleImage from '../assets/euro_marble_living_room.jpg';
import regnumImage from '../assets/regnum_toll_architecture.jpg';

const services = [
  {
    icon: Monitor,
    title: 'Euro IT',
    description: 'Innovative IT solutions and digital transformation services for modern enterprises.',
    color: 'from-blue-600 to-cyan-600',
    image: euroItImage,
  },
  {
    icon: Gem,
    title: 'Euro Marble & Granite Ltd.',
    description: 'Premium marble and granite solutions for exquisite interiors and architectural masterpieces.',
    color: 'from-stone-600 to-slate-800',
    image: euroMarbleImage,
  },
  {
    icon: Building2,
    title: 'Regnum Resource Ltd.',
    description: 'Strategic architectural planning and efficient toll management solutions for critical infrastructure.',
    color: 'from-emerald-600 to-teal-800',
    image: regnumImage,
  },

];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">I Manage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ventures and organizations I currently lead and oversee
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="text-white" size={16} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}
