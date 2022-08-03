import Crypto from './crypto'
import Json from './json'
import Color from './color'
interface emap {
  [key: string]: any | Element 
}

export default {
  'crypto': <Crypto />,
  'json': <Json />,
  'color': <Color />
} as emap