import * as React from 'react'

export interface IImageProps {
  src: string
  width: string
  height: string
}

export default function Image(props: IImageProps) {
  return (
    <img
      width={props.width}
      height={props.height}
      src={props.src}
      alt=''
      // className={` object-cover`}
      // className={`w-[${props.width}] h-[${props.height}] object-cover`}
    />
  )
}
