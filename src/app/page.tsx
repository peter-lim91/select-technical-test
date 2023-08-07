"use client"

import { SelectImageCarousel } from "./components/SelectImageCarousel"

export default function Home() {
  return (
    <main className=" min-h-screen p-8">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <SelectImageCarousel />
      </div>
    </main>
  )
}
