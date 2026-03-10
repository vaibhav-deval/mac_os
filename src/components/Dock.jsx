import "./dock.scss";
const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, github: !state.github }));
        }}
        className="icon github"
      >
        <img src="/dock_icon/github.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, resume: !state.resume }));
        }}
        className="icon pdf"
      >
        <img src="/dock_icon/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, note: !state.note }));
        }}
        className="icon note"
      >
        <img src="/dock_icon/note.svg" alt="" />
      </div>
      <div
        onClick={() => {
          (window.open("https://calendar.google.com/"), "_blank");
        }}
        className="icon calender"
      >
        <img src="/dock_icon/calender.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, spotify: !state.spotify }));
        }}
        className="icon spotify"
      >
        <img src="/dock_icon/spotify.svg" alt="" />
      </div>
      <div
        onClick={() => {
          (window.open("mailto:vaibhavdeval004@gmail.com"), "_blank");
        }}
        className="icon mail"
      >
        <img src="/dock_icon/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: !state.cli }));
        }}
        className="icon cli"
      >
        <img src="/dock_icon/cli.svg" alt="" />
      </div>
      <div
        onClick={() => {
          (window.open("https://www.linkedin.com/in/vaibhavdeval004"),
            "_blank");
        }}
        className="icon link"
      >
        <img src="/dock_icon/link.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
