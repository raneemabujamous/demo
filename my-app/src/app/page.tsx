'use client'

import React, { useEffect, useState } from 'react'
import CardData from '@/component/card'
export default function Home() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://pixabay.com/api/?key=36864600-b9bf71e3d2a866591a1b3180b&q=car',
      )
      const jsonData = await response.json()
      console.log(jsonData, 'jsonData')
      setData(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <main>
      <div className="centered-container">
        <CardData
          title={'CATEGORY TITLE'}
          discription={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fermentum urna.'
          }
          images={[
            'https://images.unsplash.com/photo-1601929862217-f1bf94503333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80',
            'https://img.freepik.com/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg',
            'https://e1.pxfuel.com/desktop-wallpaper/421/551/desktop-wallpaper-best-car-iphone-x-today-iphone-mercedes-benz-thumbnail.jpg',
          ]}
        />
      </div>
    </main>
  )
}
