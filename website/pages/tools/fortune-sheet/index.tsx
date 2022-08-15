import { Workbook } from '@fortune-sheet/react'
import "@fortune-sheet/react/dist/index.css"
import style from './index.module.scss'
import { useEffect } from 'react'

const Sheet = () => {

  const changeSheet = (data: any) => {
    console.log(data)
  }
  const stop = (e: any) => {
    e.stopPropagation()
  }

  useEffect(() => {
    document.addEventListener('touchmove',function(event){
      event.preventDefault();
  },false);
  }, [])
  return <div id='layer' className={ style.layout } onTouchMove={ stop } >
    <Workbook onChange={changeSheet} data={[{ name: "Sheet1" }, { name: "Sheet2" }]} />
  </div>
}

export default Sheet