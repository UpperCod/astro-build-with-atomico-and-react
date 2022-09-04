import React, { useState, useEffect } from "react";

export default function Header({ initState = 0 }: { initState: number }) {
  const [state, setState] = useState(initState);
  useEffect(() => {
    setInterval(() => {
      setState((state) => state + 1);
    }, 1000);
  }, []);
  return (
    <header>
      <h1>React! {state}</h1>
    </header>
  );
}
