const microApps = [
  {
    name: 'sub-react',
    entry: '//localhost:9001/',
    activeRule: '/sub-react',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-react'
    }
  },
  {
    name: 'sub-vue',
    entry: '//localhost:9002/',
    activeRule: '/sub-vue',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-vue'
    }
  },
  {
    name: 'sub-vue3',
    entry: '//localhost:9003/',
    activeRule: '/sub-vue3',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-vue3'
    }
  },
  {
    name: 'sub-nuxt',
    entry: '//localhost:9004/',
    activeRule: '/sub-nuxt',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-nuxt'
    }
  }
]

export default microApps;