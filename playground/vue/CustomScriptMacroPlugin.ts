import type { Plugin } from 'vite'

export const vueCustomScriptMacroPlugin: Plugin = {
  name: 'vue-custom-cript-macro',
  enforce: 'pre',
  async transform(code, id) {
    return {
      code: code.replace(`const count = $ref(foo)`, `const count = ref(foo)`),
      map: { mappings: '' },
    }
  },
}
