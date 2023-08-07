"use client"

import { useState } from "react"
import { SelectImageSingle } from "./SelectImageSingle"
import { LoadingIcon } from "./LoadingIcon"
import { useImageListQuery } from "@/hooks/useImageListQuery"
import ArrowRight from "@/assets/icons/ArrowRight"
import ArrowLeft from "@/assets/icons/ArrowLeft"

export const SelectImageCarousel = () => {
  const imageListQuery = useImageListQuery()
  // should record the id rather than an index which could potentially change
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  if (imageListQuery.isLoading || imageListQuery.isError) return <LoadingIcon />
  if (!imageListQuery.data) return <LoadingIcon />

  const handleClickPrevious = () => {
    if (currentImageIndex === 0) return
    setCurrentImageIndex(currentImageIndex - 1)
  }

  const handleClickNext = () => {
    if (currentImageIndex >= imageListQuery.data.length - 1) return
    setCurrentImageIndex(currentImageIndex + 1)
  }

  const { id, filename, url } = imageListQuery.data[currentImageIndex]

  return (
    <div>
      <div key={id} className="relative">
        <SelectImageSingle id={id} filename={filename} url={url} />
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex flex-row justify-between p-2 m-2 bg-white text-black">
            <button onClick={handleClickPrevious}>
              <ArrowLeft />
            </button>
            <div>{filename}</div>
            <button onClick={handleClickNext}>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
