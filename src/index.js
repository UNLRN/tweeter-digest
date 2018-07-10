import { render } from 'react-dom';
import h from 'react-hyperscript';

const App = () => {
  return (
    h('div', [
      h('a', {
        href: '/login/twitter',
      }, 'Login'),
    ])
  );
};

render(h(App), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
