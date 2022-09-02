import ALink from '@components/ALink'
import { useEffect, useState } from 'react'
// import rough from 'roughjs';
declare const rough: any 
const Rough = () => {
  const [height, setHeight] = useState(400)
  const [widht, setWidht] = useState(330)
  useEffect(() => {
    setHeight(window.innerHeight - 150)
    setWidht(window.innerWidth - 400)
    const dom = document.getElementById('myCanvas') as HTMLCanvasElement
    if (dom) {
      setTimeout(() => {
        let rc = rough.canvas(dom);
        rc.circle(50, 50, 80, { fill: 'red' }); // fill with red hachure
        rc.rectangle(120, 15, 80, 80, { fill: 'red' });
        rc.circle(50, 150, 80, {
          fill: "rgb(10,150,10)",
          fillWeight: 3 // thicker lines for hachure
        });
        rc.rectangle(220, 15, 80, 80, {
          fill: 'red',
          hachureAngle: 60, // angle of hachure,
          hachureGap: 8
        });
        rc.rectangle(120, 105, 80, 80, {
          fill: 'rgba(255,0,200,0.2)',
          fillStyle: 'solid' // solid fill
        });
      })
    }
  }, [])
  return <div>
    <ALink url="https://github.com/rough-stuff/rough" desc="几何图形" text="rough.js" />
    <canvas height={height } width={widht } id='myCanvas' style={{ border: '1px solid #999', backgroundColor: '#fff' }}></canvas>
  </div>
}

export default Rough