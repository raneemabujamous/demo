import React, { useEffect, useState } from 'react'
import { Card, CardContent, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { NextPage } from 'next'
interface Props {
  title: string
  discription?: string
  images: Array<string>
}
const CardData: NextPage<Props> = ({ title, discription, images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div>
      <Card sx={{ position: 'relative' }}>
        <IconButton
          sx={{
            position: 'absolute',
            top: 30,
            right: 8,
            zIndex: 1,
            fontSize: '20px',
            color: 'white',
          }}
          color="inherit"
          aria-label="close"
          onClick={() => {}}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            position: 'absolute',
            borderRadius: '0 30px 30px 0',
            top: 30,
            left: 0,
            padding: '10px',
            backgroundColor: 'green',
          }}
        >
          {title}
        </Typography>
        <div
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 600,
            width: 500,
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
            }}
          >
            {discription?.length ? (
              <CardContent>
                <Typography variant="h3" component="p" sx={{ color: 'white' }}>
                  Your text here
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    color: 'white',
                  }}
                >
                  {discription}
                </Typography>
              </CardContent>
            ) : null}
            <div className="scroll-dots">
              {images.map((image: string, index: number) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default CardData
