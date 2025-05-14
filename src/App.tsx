// import Heading from "./components/Heading";
import { Container } from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { DefaultInput } from "./components/DefaultInput";
import "./styles/theme.css";
import "./styles/global.css";
import CountDown from "./components/CountDown";
import Cycles from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

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
            <DefaultInput
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
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
            <DefaultButton icon={<StopCircleIcon />} color="red" />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
