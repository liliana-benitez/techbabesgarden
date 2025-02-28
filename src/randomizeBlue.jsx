import React, { useState } from "react"

const RandomizeBlue = () => {
  const days = 365 // Number of days
  const shades = ["#e3f8fd", "#b5dce6", "#7edaf2", "#6ca7b6", "#3e6974"]
  // USE SHADES BELOW FOR DARK MODE
  // const shades = ["#000000", "#b5dce6", "#7edaf2", "#6ca7b6", "#3e6974"]

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
        className="mb-4 px-4 py-2 bg-blue-400 text-white font-bold rounded-md hover:bg-pink-600 transition"
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

export default RandomizeBlue
