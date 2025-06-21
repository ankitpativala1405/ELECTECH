// pages/login.js
import Image from "next/image";
import headphoneImg from "../public/headphones.jpg"; // replace with your own image

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-[280px] border-r p-6 space-y-10">
        <h2 className="text-lg font-semibold">Home</h2>
        <ul className="space-y-2 text-gray-700 font-medium">
          {["Accessories", "Phones", "Smart Devices", "Laptop & Computers", "Chargers & Cables"].map((item) => (
            <li key={item} className="flex justify-between items-center border-b pb-1">
              {item}
              <span className="text-xl font-bold">+</span>
            </li>
          ))}
        </ul>
        {/* Promotion */}
        <div className="bg-[#e6c5a2] rounded-md text-center p-3">
          <p className="text-white font-semibold mb-2">Latest Wireless Headphones</p>
          <div className="w-full h-40 relative rounded overflow-hidden">
            <Image src={headphoneImg} alt="Headphones" fill objectFit="cover" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-xl border rounded p-10 relative">
          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-4 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="relative">
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded px-4 py-2 pr-20"
                placeholder="Enter password"
              />
              <button type="button" className="absolute top-8 right-0 bg-blue-600 text-white px-4 py-1 rounded">
                SHOW
              </button>
            </div>
            <div className="text-center text-sm text-gray-600">Forgot your password?</div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold">
              SIGN IN
            </button>
            <hr className="my-4" />
            <div className="text-center text-sm">
              No account? <a href="#" className="text-blue-600">Create one here</a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
