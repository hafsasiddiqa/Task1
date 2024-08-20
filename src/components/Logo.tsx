import React from 'react'
import Image from 'next/image'
import Logos from "../assets/Logos.jpeg"

export default function Logo() {
  return (
    <Image
    src={Logos}
    alt="logo"
    className=""
   width={150}
   height={150}
    />
  )
}
