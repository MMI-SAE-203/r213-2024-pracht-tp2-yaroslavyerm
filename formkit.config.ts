import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.ts'
import { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  config: { rootClasses }
}

export default config

