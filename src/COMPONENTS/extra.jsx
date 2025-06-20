// components/RegisterForm.js

import React from 'react';

const RegisterForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
      <p className="mb-5">Already have an account? <a href="/login" className="text-blue-500">Log in instead!</a></p>

      <form>
        <div className="mb-4">
          <label className="block mb-1">Social title:</label>
          <div className="flex items-center">
            <label className="mr-5">
              <input type="radio" name="title" value="Mr." className="mr-2" /> Mr.
            </label>
            <label>
              <input type="radio" name="title" value="Mrs." className="mr-2" /> Mrs.
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="first-name" className="block mb-1">First name:</label>
          <input type="text" id="first-name" className="w-full border border-gray-300 p-2 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="last-name" className="block mb-1">Last name:</label>
          <input type="text" id="last-name" className="w-full border border-gray-300 p-2 rounded" />
          <p className="text-gray-500 text-xs">Only letters and the dot (.) character, followed by a space, are allowed.</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded" />
          <button type="button" className="text-blue-500">SHOW</button>
        </div>

        <div className="mb-4">
          <label htmlFor="birthdate" className="block mb-1">Birthdate:</label>
          <input type="date" id="birthdate" className="w-full border border-gray-300 p-2 rounded" />
          <p className="text-gray-500 text-xs">(E.g.: 05/31/1970)</p>
        </div>

        <div className="mb-4">
          <input type="checkbox" id="offers" className="mr-2" />
          <label htmlFor="offers" className="text-sm">Receive offers from our partners</label>
        </div>

        <div className="mb-4">
          <input type="checkbox" id="newsletter" className="mr-2" />
          <label htmlFor="newsletter" className="text-sm">Sign up for our newsletter</label>
        </div>

        <div className="mb-4">
          <input type="checkbox" id="privacy" className="mr-2" />
          <label htmlFor="privacy" className="text-sm">Customer data privacy</label>
        </div>

        <div className="mb-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">I agree to the terms and conditions and the privacy policy</label>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">SAVE</button>
      </form>
    </div>
  );
};

export default RegisterForm;
