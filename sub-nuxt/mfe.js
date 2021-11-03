import Vue from 'vue'

export default function(render) {
  if (!window.__POWERED_BY_QIANKUN__) {
    render()
  }
}

const Log = (msg) => {
  console.log(
    `%c sub-nuxt %c ${msg} %c`,
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  );
}

export function bootstrap() {
  Log('bootstrap');
}

export async function mount(render, props) {
  Log('mount');
  await render()
  Log('render');
}

export async function update() {
  Log('update');
}

export function mounted(instance, props) {
  Log('mounted');
  if (props.sdk) {
    Vue.prototype.$sdk = props.sdk
  }
}

export function beforeUnmount(instance) {
  Log('beforeUnmount');
}
export function unmount() {
  Log('unmount');
}
