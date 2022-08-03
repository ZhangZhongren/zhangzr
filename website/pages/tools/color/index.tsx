import { Input, Button, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react'
import { hexToRGB, RGBToHex } from '@utils/color'
import Clipboard from 'clipboard';

const Color = () => {
  useEffect(() => {
    new Clipboard('.copy')
  })
  const [rgb, setRgb] = useState('')
  const [hex, setHex] = useState('')
  const changHex = (e: any) => {
    setHex(e.target.value)
    setRgb(hexToRGB(e.target.value))
  }
  const changeRgb = (e: any) => {
    const value = e.target.value
    if (/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.test(value)) {
      const [ r, g, b ] = value.match(/\d+/g)
      setHex( '#' + RGBToHex(Number(r), Number(g), Number(b)))
    }
  }
  return <>
    <div className='columns-3 justify-between'>
      <div style={{ width: '400px' }} >
        <Input onChange={changHex} addonBefore="#" placeholder="000000" />
      </div>
      <div>
      <Input.Group compact>
        <Input value={rgb} id="rgbvalue" readOnly style={{ width: 'calc(100% - 100px)' }} placeholder="000000" />
          <Tooltip title="copy value">
            <Button className='copy' data-clipboard-target="#rgbvalue" icon={<CopyOutlined />} />
          </Tooltip>
        </Input.Group>
      </div>
    </div>

    <div className='columns-3 justify-between mt-5'>
      <div style={{ width: '400px' }} >
        <Input onChange={changeRgb} addonBefore="rgb" placeholder="rgb(10, 20, 30)" />
      </div>
      <div>
      <Input.Group compact>
        <Input value={hex} id="hexvalue" readOnly style={{ width: 'calc(100% - 100px)' }} placeholder="000000" />
          <Tooltip title="copy value">
            <Button className='copy' data-clipboard-target="#hexvalue" icon={<CopyOutlined />} />
          </Tooltip>
        </Input.Group>
      </div>
    </div>
  </>
}

export default Color