import { ArrowRight, Monitor, Gem } from 'lucide-react';
import euroItImage from '../assets/euro_it_branding.jpg';
import euroMarbleImage from '../assets/euro_marble_living_room.jpg';

const services = [
  {
    icon: Monitor,
    title: 'Euro IT',
    description: 'Innovative IT solutions and digital transformation services for modern enterprises.',
    color: 'from-blue-600 to-cyan-600',
    image: euroItImage,
    link: 'https://euroitechnology.com/',
  },
  {
    icon: Gem,
    title: 'Euro Marble & Granite Ltd.',
    description: 'Premium marble and granite solutions for exquisite interiors and architectural masterpieces.',
    color: 'from-stone-600 to-slate-800',
    image: euroMarbleImage,
    link: 'http://euromarblengranite.com/',
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

        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40 block"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>


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
              </a>
            );
          })}
        </div>


      </div>
    </div>
  );
}
