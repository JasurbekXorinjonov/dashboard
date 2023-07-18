import "./BtnSaidbar.css";
// import Main from "../../main/main";
// const mainNone = document.querySelector(".main-container");

function BtnSaidbar({ icon, title }) {
  return (
    // <a href="#" id="link">
    <button className="btn sidebar-btn w-full">
      <span>{icon}</span>
      <span>{title}</span>
    </button>
    // </a>
  );
}
// document.addEventListener("click", func);
// function func() {
//   document.getElementsByClassName("btn").style.display = <Main />;
// }

export default BtnSaidbar;
