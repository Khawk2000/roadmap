import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment-timezone";

function App() {
  const date = moment().format("dddd, MMMM Do, YYYY");
  const [time, setTime] = useState("");
  const [timeZone, setTimeZone] = useState("America/Chicago");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(moment().tz(`${timeZone}`).format("h:mm:ss a"));
      setTimeout(update, 1000);
    };

    update();
  }, [time, timeZone]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setTimeZone(e.target.value);
  };

  return (
    <>
      <h1>Time App</h1>
      <h3>Find out what time it is anywhere in the world</h3>
      <div className="time-container">
        <div className="sub-container">
          <div className="timezone-container">
            <h2 className="timezone">{timeZone}</h2>
            <button onClick={toggleModal}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
          <h1 className="logo">{time}</h1>
          <h2 className="date">{date}</h2>
        </div>
        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <h2>Change Timezone</h2>
                <div className="timezone-selection">
                  <select
                    name=""
                    id=""
                    className="tz-select"
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" selected disabled>
                      Choose Timezone...
                    </option>
                    <option value="America/Danmarkshavn">
                      Greenwich Mean Time (GMT)
                    </option>
                    <option value="Europe/London">Europe/London (CET)</option>
                    <option value="Europe/Paris">Europe/Paris (CEST)</option>
                    <option value="Europe/Athens">Europe/Athens (EEST)</option>
                    <option value="Asia/Baku">Asia/Baku (+04)</option>
                    <option value="Asia/Aqtau">Asia/Aqtau (+05)</option>
                    <option value="Asia/Bishkek">Asia/Bishkek (+06)</option>
                    <option value="Asia/Hovd">Asia/Hovd (+07)</option>
                    <option value="Asia/Manila">Asia/Manila (PST)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                    <option value="Austrailia/Darwin">
                      Austrailia/Darwin (ACST)
                    </option>
                    <option value="Austrailia/Sydney">
                      Austrailia/Sydney (AEST)
                    </option>
                    <option value="Pacific/Midway">Pacific/Midway (SST)</option>
                    <option value="Pacific/Honolulu">
                      Pacific/Honolulu (HST)
                    </option>
                    <option value="Pacific/Gambier">
                      Pacific/Gambier (-09)
                    </option>
                    <option value="Pacific/Pitcairn">
                      Pacific/Pitcairn (-08)
                    </option>
                    <option value="America/Los_Angeles">
                      America/Los_Angeles (PDT/PST)
                    </option>
                    <option value="America/Boise">
                      America/Boise (MDT/MST)
                    </option>
                    <option value="America/Chicago">
                      America/Chicago (CDT/CST)
                    </option>
                    <option value="America/New_York">
                      America/New_York (EDT/EST)
                    </option>
                    <option value="Atlantic/Bermuda">
                      Atlantic/Bermuda (ADT/AST)
                    </option>
                  </select>
                  <button className="apply-tz" onClick={toggleModal}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
