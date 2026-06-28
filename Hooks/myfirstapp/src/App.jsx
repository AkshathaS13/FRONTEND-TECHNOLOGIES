import React, {useEffect, useState} from 'react'
import Greeting from './Greeting';

export default function App() {
  //let name = "Akshatha";
  //UseState hook
  const[name, setName] = useState("Akshatha");
  const[color, setColor] =  useState("Red")
  const[count, setCount] = useState(0);

  //useeffect
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });

  return (
    <div>
      <h1>Good Evening,</h1>
      <Greeting name={name} />
      <button onClick= {() => setName("Anu")}>click for Change</button>
      <h2>My Favrt Color is {color}!</h2>
      <button onClick = {() => setColor("Black")}>Reavel color</button>
      <h2>The count is {count}!</h2>
      <button onClick = {() => setCount(count + 1)}>Count</button>
      <h1>The Time start now {count} !</h1>
    </div>
  );
}
