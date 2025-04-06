// import Heading from "./components/Heading";
import { Container } from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { Input } from "./components/Input";
import "./styles/theme.css";
import "./styles/global.css";
import CountDown from "./components/CountDown";
import Cycles from "./components/Cycles";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              labelText="task"
              id="Input"
              type="text"
              placeholder="Digite algo..."
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <Cycles />
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
