import MacWindow from "./MacWindow";
import "./Resume.scss";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="pdfContainer">
        <embed src="./resume.pdf" type="" />
      </div>
    </MacWindow>
  );
};

export default Resume;
