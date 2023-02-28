import React from "react";
import { Pokemon } from "../../models/Pokemon";

type Props = {
  name: string;
  level: number;
  health: number;
  damage: number;
  img: string;
  onRemove: Function;
};

export default function PokemonBox(props: Props) {
  return (
    <div>
      <img src={props.img} />
      <h4>{props.name}</h4>
      <p>Level: {props.level}</p>
      <p>Health: {props.health}</p>
      <p>Damage: {props.damage}</p>
      <button onClick={() => props.onRemove(props.name)}>Delete</button>
    </div>
  );
}
