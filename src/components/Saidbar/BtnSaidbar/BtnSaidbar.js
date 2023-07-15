import "./BtnSaidbar.css";

function BtnSaidbar({ icon, title }) {
  return (
    <button className="btn sidebar-btn w-full">
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
}

export default BtnSaidbar;
