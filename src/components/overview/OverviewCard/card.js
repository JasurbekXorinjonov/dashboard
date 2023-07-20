import "../OverviewCard/card.css";

function Card({ text, number }) {
  return (
    <div className="overview-card">
      <p className="text">{text}</p>
      <p className="number">{number}</p>
    </div>
  );
}
function LeftCard({ leftcardtext, leftcardnumber }) {
  return (
    <div className="left-card">
      <p>{leftcardtext}</p>
      <span>{leftcardnumber}</span>
    </div>
  );
}

function FooterCard() {
  return (
    <div className="footer-card ">
      <div className="left-text">
        <div className="flex head-text">
          <h3>Unresolved tickets</h3>
          <p>View details</p>
        </div>
        <h5 className="group-text">
          Group: <span>Support</span>
        </h5>
        <div className="flex ai-center end-text">
          <p>Waiting on Feature Request</p>
          <p>4238</p>
        </div>
        <div className="flex ai-center end-text">
          <p>Awaiting Customer Response</p>
          <p>1005</p>
        </div>
        <div className="flex ai-center end-text">
          <p>Awaiting Developer Fix</p>
          <p>914</p>
        </div>
        <div className="flex ai-center end-text border">
          <p>Pending</p>
          <p>281</p>
        </div>
      </div>
    </div>
  );
}

function FooterCardLeft() {
  return (
    <div className="footer-card-left">
      <div className="flex head-text">
        <h3>Tasks</h3>
        <p>View all</p>
      </div>
      <h5 className="group-text">Today</h5>
      <div className="create-text flex"></div>
      <div className="flex ai-center end-text">
        <p>Create new task</p>
        <img src={require("./inactive.png")} alt="icon" />
      </div>
      <div className="flex ai-center end-text">
        <input type="checkbox" id="check" /> <label htmlFor="check">Finish ticket update</label>
        <button className="btn-footer">Urgent</button>
      </div>
      <div className="flex ai-center end-text">
        <input type="checkbox" id="for" />
        <label htmlFor="for">Create new ticket example</label>
        <button className="btn-footer new">New</button>
      </div>
      <div className="flex ai-center end-text border">
        <input type="checkbox" id="labl" /> <label htmlFor="labl">Finish ticket update</label>
        <button className="btn-footer default">Default</button>
      </div>
    </div>
  );
}
export { Card, LeftCard, FooterCard, FooterCardLeft };
