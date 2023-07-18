import "../overview/overview.css";
import { Card, FooterCard, FooterCardLeft, LeftCard } from "./OverviewCard/card";

function Overview() {
  return (
    <div className="overview">
      <div className="cards flex">
        <Card text="Unresolved" number="60" />
        <Card text="Overdue" number="16" />
        <Card text="Open" number="43" />
        <Card text="On hold" number="64" />
      </div>
      {/* Cards */}
      <div className="overview-main flex">
        <div className="flex ai-baseline">
          <div className="main-text">
            <p>Today’s trends</p>
            <span>as of 25 May 2019, 09:41 PM</span>
          </div>
          <div className="horizontal"></div>
          <p className="title">Today</p>
          <div className="horizontal"></div>
          <p className="title">Yesterday</p>
        </div>
        <div className="main-left">
          <LeftCard leftcardtext="Resolved" leftcardnumber={499} />
          <LeftCard leftcardtext="Resolved" leftcardnumber={426} />
          <LeftCard leftcardtext="Average first response time" leftcardnumber="33m" />
          <LeftCard leftcardtext="ResolAverage response timeved" leftcardnumber="3h 8m" />
          <LeftCard leftcardtext="Resolution within SLA" leftcardnumber="94%" />
        </div>
      </div>
      <div className="footer flex">
        <FooterCard />
        <FooterCardLeft />
      </div>
    </div>
  );
}

export default Overview;
