// eslint-disable-next-line import/extensions
import Container from './src/Container';

Container.install = (Vue) => {
  Vue.component(Container.name, Container);
};
export default Container;
