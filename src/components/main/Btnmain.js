import "../main/Btnmain.css";

function BtnmainHigh({ name }) {
  return (
    <div>
      <button className="high">
        <span>{name}</span>
      </button>
    </div>
  );
}
function BtnmainLow({ name }) {
  return (
    <div>
      <button className="low">
        <span>{name}</span>
      </button>
    </div>
  );
}
function BtnmainNormal({ name }) {
  return (
    <div>
      <button className="normal">
        <span>{name}</span>
      </button>
    </div>
  );
}

export { BtnmainHigh, BtnmainLow, BtnmainNormal };
