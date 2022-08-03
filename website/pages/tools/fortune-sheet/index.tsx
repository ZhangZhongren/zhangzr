import { Workbook } from '@fortune-sheet/react'
import "@fortune-sheet/react/dist/index.css"
import style from './index.module.scss'

const Sheet = () => {

  const changeSheet = (data: any) => {
    console.log(data)
  }
  return <div className={ style.layout }>
    <Workbook onChange={changeSheet} data={[{ name: "Sheet1" }, { name: "Sheet2" }]} />
  </div>
}

export default Sheet