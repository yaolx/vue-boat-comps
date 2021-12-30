import Theme from 'vitepress/dist/client/theme-default'
import { Button } from '../../../packages/Button'
import { Foo } from '../../../packages/Foo'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('d-button', Button)
    app.component('d-dialog', Foo)
  }
}
