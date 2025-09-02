import React from 'react';

export interface CardProps {
  variant?: 'default' | 'mission' | 'course' | 'testimonial' | 'session';
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  author?: string;
  role?: string;
  rating?: number;
  date?: string;
  duration?: string;
  tags?: string[];
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

const Cards: React.FC<CardProps> = ({
  variant = 'default',
  title,
  description,
  imageUrl,
  imageAlt,
  author,
  role,
  rating,
  date,
  duration,
  tags = [],
  actionText,
  onAction,
  className = ''
}) => {
  // Base card classes
  const baseClasses = "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg";
  
  // Variant-specific classes
  const variantClasses = {
    default: "border border-gray-200",
    mission: "border-2 border-blue-100 bg-blue-50",
    course: "border border-gray-200",
    testimonial: "border border-purple-100 bg-purple-50",
    session: "border-2 border-green-100 bg-green-50"
  };

  // Determine which variant class to use
  const variantClass = variantClasses[variant] || variantClasses.default;

  return (
    <div className={`${baseClasses} ${variantClass} ${className}`}>
      {/* Image section - only show if imageUrl is provided */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt || title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Rating for testimonials */}
          {variant === 'testimonial' && rating !== undefined && (
            <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-md">
              <span className="text-yellow-500 font-semibold">{rating}/5</span>
            </div>
          )}
        </div>
      )}

      {/* Content section */}
      <div className="p-6">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Meta information for courses and sessions */}
        {(variant === 'course' || variant === 'session') && (
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            {date && <span>{date}</span>}
            {duration && <span>• {duration}</span>}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Author information for testimonials */}
        {variant === 'testimonial' && author && (
          <div className="mt-4">
            <p className="font-semibold text-gray-800">{author}</p>
            {role && <p className="text-sm text-gray-500">{role}</p>}
          </div>
        )}

        {/* Action button */}
        {actionText && onAction && (
          <button
            onClick={onAction}
            className={`mt-4 px-8 ml-20 py-2  text-white rounded-xl hover:bg-blue-900 transition-colors ${className}`}
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;