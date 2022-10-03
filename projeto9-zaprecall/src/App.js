import { useState } from "react";
import Bemvindo from "./Bemvindo";
import Questoes from "./Questoes";


export default function App() {
  const [visible, setVisible] = useState(true);
  return <>{visible ? <Bemvindo setVisible={setVisible} /> : <Questoes />}</>;
}
