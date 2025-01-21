import React from "react"

const DiscordProfileCard = () => {
  return (
    <div className="w-72 bg-black text-white rounded-lg shadow-lg p-1">
      {/* Background */}
      <div className="relative">
        <img
          src="https://cdn.discordapp.com/banners/732842920889286687/a_3b9b916b5e0b1d1480706d68c08c2450.gif?size=480"
          alt="Background"
          className="w-full h-20 object-cover rounded-t-lg"
        />
        {/* Profile Image */}
        <div className="absolute -bottom-8 left-4 flex items-center">
          <img
            src="https://cdn.discordapp.com/avatars/732842920889286687/7a3da245a49f565d5d252935f0eec388.webp?size=128"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-3">
            <h2 className="text-lg font-bold">Zex.</h2>
            <p className="text-xs text-gray-300">dotcchix</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-10">
        {/* Badges */}
        <div className="flex space-x-2 mb-4">
          {/* <span className="bg-gray-700 rounded-full px-2 py-1 text-xs flex items-center">
            🌀
          </span> */}
          <span className="bg-green-600 rounded-full px-2 py-1 text-xs flex items-center">
            🟢
          </span>
          {/* <span className="bg-purple-700 rounded-full px-2 py-1 text-xs flex items-center">
            🌌
          </span> */}
        </div>
        {/* Username */}
        <div className="flex items-center mb-4">
          <span className="text-gray-400 bg-gray-800 px-2 py-1 rounded-full text-xs">
            Void Century
          </span>
        </div>

        {/* About */}
        <p className="text-gray-300 text-sm mb-2">Makani 'olu'olu 🌊</p>
        {/* Link */}
        <a
          href="https://youtu.be/ImeaQLRPRKc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm underline"
        >
          https://youtu.be/ImeaQLRPRKc
        </a>
      </div>
    </div>
  )
}

export default DiscordProfileCard
