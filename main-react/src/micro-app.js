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
  }
]

export default microApps;