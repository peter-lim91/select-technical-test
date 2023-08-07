import { Image as ImageType } from "@/types/Image"
import { useQuery } from "react-query"

export const useImageListQuery = () => {
  const imageListQuery = useQuery<ImageType[]>({
    queryKey: ["image", "list"],
    queryFn: async () => {
      const response = await fetch("https://cully-api.vercel.app/api/images")
      const { data } = await response.json()
      return data
    },
  })
  return imageListQuery
}
