import React from 'react'
import { ButtonStyle } from './style'

function index({
    children,
    className,
    border,
    padding

}:{
    children: React.ReactNode
    className?: string,
    border?: boolean,
    padding?: string
}) {
  return (
    <ButtonStyle border={border} padding={padding} className={className}>
        {children}
    </ButtonStyle>
  )
}

export default index