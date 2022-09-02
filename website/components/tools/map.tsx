import Crypto from '../../pages/tools/crypto'
import Json from '../../pages/tools/json'
import Color from '../../pages/tools/color'
import Sheet from '../../pages/tools/fortune-sheet'
import Bytemd from '../../pages/tools/bytemd'
import Rough from '../../pages/tools/rough'
interface emap {
  [key: string]: any | Element 
}

export default {
  'crypto': <Crypto />,
  'json': <Json />,
  'color': <Color />,
  'sheet': <Sheet />,
  'Bytemd': <Bytemd />,
  'Rough': <Rough />
} as emap