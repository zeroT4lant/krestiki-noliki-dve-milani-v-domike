import { useState } from "react";
import "./Square.css"

export default function Square({value, onSquareClick}){

    return <button onClick={onSquareClick} className="square">{value}</button>;
}