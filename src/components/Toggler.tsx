import { Toggle } from "./Toggle";

export function Toggler({ name }) {
   var toggleClass = name.replace(' ', '-').toLowerCase();
  return(
    <div className={toggleClass}>
        <Toggle />
        <span className="brush">{name}</span>
    </div>
  );
}