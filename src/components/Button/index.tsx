import React from 'react'
import { ButtonStyle } from './style'

function index({
    children,
    fs,
    className,
    border,
    padding

}:{
    children: React.ReactNode
    className?: string,
    border?: boolean,
    padding?: string,
    fs?:string
}) {
  return (
    <ButtonStyle border={border} fs={fs} padding={padding} className={className}>
        {children}
    </ButtonStyle>
  )
}

export default index