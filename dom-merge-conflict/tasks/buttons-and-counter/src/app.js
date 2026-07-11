import { Main } from "./main";
import { Header } from "./header";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");
  const header = Header();
  const main = Main();
  body.appendChild(header);
  body.appendChild(main);

  const button = body.querySelector("#increment");
  const decrementButton = body.querySelector("#decrement");

  const counter = body.querySelector("#counter");
  
  button.addEventListener("click", () => {
    increment(counter);
  });

  decrementButton.addEventListener("click", () => {
    let current = counter.textContent;
    counter.textContent = Number(current) - 1;
  });

  return body;
}
