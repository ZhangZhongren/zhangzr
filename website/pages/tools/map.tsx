import Crypto from './crypto'

interface emap {
  [key: string]: any | Element
}

export default {
  'crypto': <Crypto />
} as emap