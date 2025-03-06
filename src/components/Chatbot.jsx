import "./styles/chatbot.css";

import sos from "./images/donate.jpg";

export default function Chatbot() {
  return (
    <>
      <div className="coffee" title="Buy me a coffee">
        <a
          href="https://bmc.link/secondinnings"
          target="blank"
          rel="noreferrer"
        >
          <img
            className="botimg position-fixed bottom-0 end-0 chatbtn fixed-sm-bottom mx-3 my-3 fab fa-bounce"
            src={sos}
            alt="coffee"
            style={{
              height: "5em",
              width: "5rem",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
    </>
  );
}
