import React, { useState } from 'react';
import { Property } from '../types';
import { BedIcon, BathIcon, GarageIcon, HeartIcon } from './icons/PropertyIcons';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition-shadow duration-300 shadow-sm hover:shadow">
      <div className="relative">
        <img src={property.images[currentImageIndex]} alt={property.name} className="w-full h-56 object-cover" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow">{property.status}</span>
          <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow">{property.daysAgo} Days Ago</span>
        </div>

        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 p-2 rounded-full text-white hover:text-red-500 hover:bg-white/20 transition-all" 
          aria-label="Add to favorites"
        >
          <HeartIcon isFilled={isFavorited} />
        </button>

        {property.images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
            {property.images.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => setCurrentImageIndex(index)}
                    className={`block h-2 w-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                    aria-label={`Go to image ${index + 1}`}
                />
            ))}
            </div>
        )}

        {property.isPremium && (
          <span className="absolute bottom-4 right-4 bg-[#ff8d2a] text-white text-sm font-semibold px-4 py-1.5 rounded-md shadow">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">{property.propertyType}</p>
        </div>

        <h3 className="font-bold text-xl text-gray-900 truncate mb-4">{property.name}</h3>
        
        <div className="flex items-start mb-4">
            <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">Bedrooms</span>
                <div className="flex items-center gap-1 mt-1">
                    <span className="font-bold text-gray-800 text-base">{property.beds}</span>
                    <BedIcon />
                </div>
            </div>

            <span className="text-gray-300 text-2xl font-light mx-4">|</span>

            <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">Bathrooms</span>
                <div className="flex items-center gap-1 mt-1">
                    <span className="font-bold text-gray-800 text-base">{property.baths}</span>
                    <BathIcon />
                </div>
            </div>

            <span className="text-gray-300 text-2xl font-light mx-4">|</span>

            <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">Garage</span>
                <div className="flex items-center gap-1 mt-1">
                    <span className="font-bold text-gray-800 text-base">{property.garage}</span>
                    <GarageIcon />
                </div>
            </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div>
          <p className="text-2xl font-bold text-gray-900">
            GH₵{property.priceGHS.toLocaleString('en-US')}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            USD {property.priceUSD.toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;