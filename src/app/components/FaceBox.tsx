import { Face } from "@/types/Face"

const formatPercentage = (percentage: number) => {
  return `${percentage * 100}%`
}

export const FaceBox = ({ id, xmax, xmin, ymax, ymin }: Face) => {
  const handleClick = () => {
    console.log(id)
  }
  return (
    <div
      style={{
        position: "absolute",
        top: formatPercentage(ymin),
        left: formatPercentage(xmin),
        width: formatPercentage(xmax - xmin),
        height: formatPercentage(ymax - ymin),
      }}
      className="border-2 border-white"
      onClick={handleClick}
    ></div>
  )
}
