import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [withBackgrounds],

  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: '#FAFAFA' },
        { name: 'dark', value: '#021B4D' },
        { name: 'light', value: '#E2EFFD' }
      ]
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
