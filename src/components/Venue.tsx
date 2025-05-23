import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Venue = () => {
  return (
    <section
      id="venue"
      className="py-20 bg-gradient-to-b from-indigo-900/90 to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Store Location
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl shadow-purple-500/5">
            <div className="aspect-video relative overflow-hidden">
              <iframe
                src="https://maps.app.goo.gl/qJTwjKXZd79BWQMdA?g_st=aw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store location map"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white">Vijay Sri Complex</p>
                    <p className="text-gray-400">#6/P, 3rd Floor, Kalimandir</p>
                    <p className="text-gray-400">
                      Bandlaguda Jagir, Gandipet Mandal
                    </p>
                    <p className="text-gray-400">
                      Ranga Reddy District, Telangana 500086
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-pink-500 flex-shrink-0" />
                  <p className="text-white">+91 99590 59632</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-pink-500 flex-shrink-0" />
                  <a
                    href="mailto:bingencelebrations@gmail.com"
                    className="text-white hover:text-pink-500 transition-colors"
                  >
                    bingencelebrations@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};