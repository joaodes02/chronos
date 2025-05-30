import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export default function MainForm() {
  return (
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
  );
}
