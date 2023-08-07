import { Image as ImageType } from "@/types/Image"
import { FaceBox } from "./FaceBox"
import { useImageDataQuery } from "@/hooks/useImageData"

export const SelectImageSingle = ({ id, filename, url }: ImageType) => {
  const imageDataQuery = useImageDataQuery(id)
  const faces = imageDataQuery.data
  if (imageDataQuery.isLoading) return "Loading"
  if (imageDataQuery.isError) return "Error"
  if (!faces) return "No Faces Found"

  return (
    <div className="w-full relative">
      <img src={url} alt={filename}></img>
      {faces.map(({ id, xmax, xmin, ymax, ymin }) => {
        return (
          <FaceBox
            key={id}
            id={id}
            xmax={xmax}
            xmin={xmin}
            ymax={ymax}
            ymin={ymin}
          />
        )
      })}
    </div>
  )
}
