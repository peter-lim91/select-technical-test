import { Face } from "@/types/Face"
import { useQuery } from "react-query"

export const useImageDataQuery = (id: string) => {
  const imageDataQuery = useQuery<Face[]>({
    queryKey: ["image", "face", id],
    queryFn: async () => {
      const response = await fetch(
        `http://cully-api.vercel.app/api/images/${id}/faces`
      )
      const { data } = await response.json()
      return data
    },
  })
  return imageDataQuery
}
