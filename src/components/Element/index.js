import Col from '@element/Col';
import Row from '@element/Row';
import Container from '@element/Container';
import Header from '@element/Header';
import Main from '@element/Main';
import Aside from '@element/Aside';
import Footer from '@element/Footer';

const components = [Col, Row, Container, Header, Main, Aside, Footer];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Col,
  Row,
  Container,
  Header,
  Main,
  Footer,
  Aside,
};
export {
  install,
  Col,
  Row,
  Container,
  Header,
  Main,
  Footer,
  Aside,
};
