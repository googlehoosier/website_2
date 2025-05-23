import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { venuesData } from '../data/artistsData';
import { CreditCard, Building } from 'lucide-react';

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const venueId = parseInt(searchParams.get('venue') || '1');
  const venue = venuesData.find(v => v.id === venueId);

  if (!venue) return <div>Venue not found</div>;

  const basePrice = parseInt(venue.price.replace(/[^\d]/g, ''));
  const decorationFee = parseInt(venue.decorationFee.replace(/[^\d]/g, ''));
  const advanceAmount = Math.round((basePrice + decorationFee) * 0.3);
  const balanceAmount = basePrice + decorationFee - advanceAmount;

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Building className="h-8 w-8 text-pink-500" />
            <h1 className="text-3xl font-bold text-white">Complete Your Booking</h1>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Booking Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Venue</span>
                <span className="text-white font-medium">{venue.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Base Price</span>
                <span className="text-white font-medium">₹{basePrice}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Decoration Fee</span>
                <span className="text-white font-medium">₹{decorationFee}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Advance Amount (30%)</span>
                <span className="text-white font-medium">₹{advanceAmount}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Balance Amount</span>
                <span className="text-white font-medium">₹{balanceAmount}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>
            <div className="space-y-4">
              <label className="block">
                <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 cursor-pointer hover:border-pink-500 transition-colors">
                  <input type="radio" name="payment" className="text-pink-500" defaultChecked />
                  <CreditCard className="h-5 w-5 text-pink-500" />
                  <span className="text-white">Credit / Debit Card</span>
                </div>
              </label>

              <div className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition-colors duration-300 font-bold mt-6">
                Pay ₹{advanceAmount}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;