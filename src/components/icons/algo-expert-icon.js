// import { ReactComponent as AlgoSvg } from '@/assets/algoexpert.svg';
import AlgoSvg from "../../Assets/algoexpert.svg";
import "./../../App.css";

const AiAlgoExpert = (props) => (
  <img src="/algoexpert.svg" alt="AlgoExpert logo" className="algo-expert-icon-class"
    width={props.width ?? '1em'}
    height={props.height ?? '1em'}
    fill="currentColor"
    {...props}
  />
);
export default AiAlgoExpert
