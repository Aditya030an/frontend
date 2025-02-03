import React from 'react'

const Contect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">First Name</label>
            <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required placeholder="John" />
          </div>
          <div>
            <label className="block text-gray-600">Last Name</label>
            <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required placeholder="Doe" />
          </div>
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required placeholder="example@mail.com" />
        </div>
        <div>
          <label className="block text-gray-600">Message</label>
          <textarea  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none" rows="4" required placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Contect