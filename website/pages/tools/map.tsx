import Crypto from './crypto'
import Json from './json'
import Color from './color'
import Sheet from './fortune-sheet'
interface emap {
  [key: string]: any | Element 
}

export default {
  'crypto': <Crypto />,
  'json': <Json />,
  'color': <Color />,
  'sheet': <Sheet />
} as emap