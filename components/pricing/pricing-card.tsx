'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PriceCounter } from './price-counter';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export function PricingCard({ title, price, features, isPopular, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-6 rounded-xl backdrop-blur-sm border ${
        isPopular ? 'bg-purple-900/20 border-purple-500/50' : 'bg-gray-800/50 border-gray-700/50'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">$</span>
        <span className="text-3xl font-bold text-white">
          <PriceCounter value={price} />
        </span>
        <span className="text-gray-300">/mo</span>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-white">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${
          isPopular
            ? 'bg-purple-500 hover:bg-purple-600 text-white'
            : 'bg-purple-400/50 hover:bg-background'
        }`}
      >
        Join Waitlist
      </Button>
    </motion.div>
  );
}