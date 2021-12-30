import Theme from 'vitepress/dist/client/theme-default'
import { Button } from '../../../packages/Button'
import { Dialog } from '../../../packages/Dialog'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('m-button', Button)
    app.component('m-dialog', Dialog)
  }
}
