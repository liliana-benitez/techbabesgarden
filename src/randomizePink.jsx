import React, { useState } from "react"

const RandomizePink = () => {
  const days = 365 // Number of days
  const shades = ["#fff0f6", "#ffccd5", "#ff99ac", "#ff6680", "#ff3366"]
  const [contributions, setContributions] = useState(Array(days).fill(0))

  const handleClick = (index) => {
    setContributions((prev) => {
      const newContributions = [...prev]
      newContributions[index] = Math.min(
        newContributions[index] + 1,
        shades.length - 1
      )
      return newContributions
    })
  }

  const randomizeColors = () => {
    setContributions(
      Array.from({ length: days }, () =>
        Math.floor(Math.random() * (shades.length - 1))
      )
    )
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-md">
      <button
        onClick={randomizeColors}
        className="mb-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition"
      >
        Randomize Colors
      </button>
      <div className="grid grid-cols-53 gap-1">
        {contributions.map((count, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-sm cursor-pointer"
            style={{ backgroundColor: shades[count] }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default RandomizePink
