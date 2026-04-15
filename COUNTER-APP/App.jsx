
import { useState } from 'react'
import Niiu from './Cp1'

function App() {
const [num,setnum] = useState(0);
function increase(){
  if(num>19){
    setnum(num);
  }
  else{
    setnum(num+1);
    console.log(setnum);
    setnum(num+1);
    console.log(setnum);
    setnum(num+1);
    console.log(setnum);
    setnum(num+1);
    console.log(setnum);
    setnum(num+1);
    console.log(setnum);
  }
}
function decrease(){
if(num<1){
    setnum(num);
  }
  else{
    setnum(num-1);
  }
}
  return (
    <>
      <Niiu />
      <h2>Your Number is {num}</h2>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
      <Show num={num}></Show>
    </>
  )
}
function Show({num}){
  return(<>Your Number is {num}</>)
}
export default App;


// import { useState } from "react";

// function App() {
//   const [num, setNum] = useState(0);
//   const [animate, setAnimate] = useState(false);

//   function handleChange(value) {
//     setNum(num + value);

//     // trigger animation
//     setAnimate(true);
//     setTimeout(() => setAnimate(false), 200);
//   }

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #667eea, #764ba2)",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <div
//         style={{
//           padding: "40px",
//           borderRadius: "20px",
//           textAlign: "center",
//           background: "rgba(255,255,255,0.1)",
//           backdropFilter: "blur(15px)",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//           color: "white",
//         }}
//       > COUNTER APP 
//         <h2
//           style={{
//             fontSize: "50px",
//             marginBottom: "20px",
//             transform: animate ? "scale(1.3)" : "scale(1)",
//             transition: "0.2s",
//           }}
//         >
//           {num}
//         </h2>

//         <button
//           onClick={() => handleChange(1)}
//           style={btnStyle("#00c6ff")}
//         >
//           +
//         </button>

//         <button
//           onClick={() => handleChange(-1)}
//           style={btnStyle("#ff4b2b")}
//         >
//           -
//         </button>

//         <Show num={num} />
//       </div>
//     </div>
//   );
// }

// function btnStyle(color) {
//   return {
//     padding: "10px 20px",
//     margin: "10px",
//     border: "none",
//     borderRadius: "10px",
//     background: color,
//     color: "white",
//     fontSize: "18px",
//     cursor: "pointer",
//     transition: "0.3s",
//   };
// }

// function Show({num}) {
//   return <p style={{ marginTop: "20px" }}> Your num is {num}👋</p>;
// }

// export default App;

