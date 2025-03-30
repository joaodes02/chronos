// import Heading from "./components/Heading";
import { Container } from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { Input } from "./components/Input";
import "./styles/theme.css";
import "./styles/global.css";
import CountDown from "./components/CountDown";

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
          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 </p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
