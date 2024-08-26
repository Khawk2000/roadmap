import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";

function App() {
  const [time, setTime] = useState("");
  const [timeZone, setTimeZone] = useState("America/Chicago (CDT)");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(moment().format("h:mm:ss a"));
      setTimeout(update, 1000);
    };

    update();
  }, [time]);

  const changeTimeZone = () => {
    console.log(timeZone);
    setModal(true);
  };

  return (
    <div className="time-container">
      <div className="sub-container">
        {!modal && (
          <>
            <div className="timezone-container">
              <h2 className="timezone">{timeZone}</h2>
              <button onClick={changeTimeZone}>
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
            <h1 className="logo">{moment().format("h:mm:ss a")}</h1>
            <h2 className="date">{moment().format("dddd, MMMM Do, YYYY")}</h2>
          </>
        )}
        {modal && <></>}
      </div>
    </div>
  );
}

export default App;
