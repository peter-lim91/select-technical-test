import { Face } from "@/types/Face"
import { useState } from "react"

const formatPercentage = (percentage: number) => {
  return `${percentage * 100}%`
}

export const FaceBox = ({ id, xmax, xmin, ymax, ymin }: Face) => {
  const [showOptions, setShowOptions] = useState(false)
  const handleClick = () => {
    setShowOptions((b) => !b)
  }

  return (
    <div
      style={{
        position: "absolute",
        top: formatPercentage(ymin),
        left: formatPercentage(xmin),
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: formatPercentage(xmax - xmin),
          height: formatPercentage(ymax - ymin),
        }}
        className="border-2 border-white"
        onClick={handleClick}
      />
      {showOptions && (
        <>
          <div>
            <div>Dummy Item #1</div>
            <div>Dummy Item #2</div>
            <div>Dummy Item #2</div>
          </div>
        </>
      )}
    </div>
  )
}
