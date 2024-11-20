/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let entity = ["The tiger", "My sea lion", "His cheetah", "My lion"];
  let reason = ["stomped", "pissed", "escaped", "broke"];
  let objectTampered = [
    "my homework",
    "my friend's house",
    "the neighbour's garden",
    "the king's courtyard"
  ];
  let excuse = [
    "before the class",
    "in the bathroom",
    "when I was at the gym",
    "during my lunch",
    "while I was playing SMTVV"
  ];
  let randomEntity = Math.floor(Math.random() * entity.length);
  let randomObjectTampered = Math.floor(Math.random() * objectTampered.length);
  let randomReason = Math.floor(Math.random() * reason.length);
  let randomExcuse = Math.floor(Math.random() * excuse.length);

  document.querySelector("#theExcuse").innerHTML =
    entity[randomEntity] +
    " " +
    reason[randomReason] +
    " " +
    objectTampered[randomObjectTampered] +
    " " +
    excuse[randomExcuse];
};
