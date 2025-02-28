import React, { useState } from "react"

const PinkHeatmap = () => {
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

  return (
    <div className="grid grid-cols-53 gap-1 p-4 bg-white rounded-md">
      {contributions.map((count, index) => (
        <div
          key={index}
          className="w-4 h-4 rounded-sm cursor-pointer"
          style={{ backgroundColor: shades[count] }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}

export default PinkHeatmap
