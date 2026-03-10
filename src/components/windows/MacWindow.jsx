import "./MacWindow.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({
  children,
  width = "40vw",
  height = "60vh",
  windowName,
  setWindowState,
}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() => {
                setWindowState((state) => ({ ...state, [windowName]: false }));
              }}
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>vaibhavdeval - zsh</p>
          </div>
        </div>
        <div className="mainContent">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
