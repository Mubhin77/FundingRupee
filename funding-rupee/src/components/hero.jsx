import React, { useState, useEffect } from 'react';
import { Heart, Users } from 'lucide-react';
import { Link } from "react-router-dom";

// Import your images
import happyChildren from '../images/happychilldren.jpeg';
import helpingHands from '../images/helpinghands.jpeg';
import volunteers from '../images/volunteers.jpg';

const Hero = () => {
  const images = [happyChildren, helpingHands, volunteers];

  const tags = [
    { count: '10,000+', label: 'Lives Impacted' },
    { count: '2,000+', label: 'Campaigns Funded' },
    { count: '5,000+', label: 'Contributors' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change both image and tag every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 lg:py-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-green-600">Nepal's Platform for Change,</span>
              <br />
              <span className="text-gray-800">Powered by You.</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Crowdfunding Nepal's Hopes, One Rupee Closer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            
            <Link
              to="/fundraisers"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              Donate Now
              <Heart className="ml-2 w-5 h-5" />
            </Link>

          
            <Link
              to="/about"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
          </div>

          {/* Right Image & Tag */}
          <div className="relative">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
              <img
                src={images[currentIndex]}
                alt="Hero"
                className="w-full h-96 object-cover transition-opacity duration-700"
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl transition-all duration-500">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {tags[currentIndex].count}
                  </p>
                  <p className="text-gray-600">{tags[currentIndex].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
