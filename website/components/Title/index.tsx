import React from "react"
import style from './index.module.scss'
interface Props {
  title: string
  theme?: any
}
const Title = (props: Props) => {
  const { title, theme = 'dark' } = props

  return <h2 className={`${style.h2} ${style[theme]}`}>
    { title }
  </h2>
}

export default Title