import "./dock.scss";
const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon github">
        <img src="/dock_icon/github.svg" alt="" />
      </div>
      <div className="icon pdf">
        <img src="/dock_icon/pdf.svg" alt="" />
      </div>
      <div className="icon note">
        <img src="/dock_icon/note.svg" alt="" />
      </div>
      <div className="icon calender">
        <img src="/dock_icon/calender.svg" alt="" />
      </div>
      <div className="icon spotify">
        <img src="/dock_icon/spotify.svg" alt="" />
      </div>
      <div className="icon mail">
        <img src="/dock_icon/mail.svg" alt="" />
      </div>
      <div className="icon cli">
        <img src="/dock_icon/cli.svg" alt="" />
      </div>
      <div className="icon link">
        <img src="/dock_icon/link.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
