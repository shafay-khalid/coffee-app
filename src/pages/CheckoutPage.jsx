import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderSummaryItem from "../components/UI/OrderSummaryItem";

export default function CheckoutPage() {
  const params = useParams();
  const [storeTax, setStoreTax] = useState();

  useEffect(() => {
  setStoreTax(params.id/15)
    
  }, []);

  const items = JSON.parse(localStorage.getItem("newItems"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiry) newErrors.expiry = "Expiry date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";
    return newErrors;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("success"); // ✅ redirect on success
    }
  };

  return (
    <div className="checkout-page min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6 py-35">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left: Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ZIP
                </label>
                <input
                  type="text"
                  name="zip"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="10001"
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip}</p>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 text-gray-800">
              Payment Details
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="4111 1111 1111 1111"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="12/25"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.expiry}
                  onChange={handleChange}
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm">{errors.expiry}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="password"
                  name="cvv"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm">{errors.cvv}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gray-100 p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>
          <div className="space-y-4">
            {items.map((item, idx) => {
              return <OrderSummaryItem key={idx} item={item} />;
            })}
            <div className="border-t pt-4 flex justify-between text-gray-900 font-semibold">
              <span>Tax</span>
              <span>${Number(storeTax).toFixed(2)}</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-gray-900 font-semibold">
              <span>Delivery Charges</span>
              <span>${15}</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-gray-900 font-semibold">
              <span>Total</span>
              <span>${(Number(params.id)+(storeTax+15)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
