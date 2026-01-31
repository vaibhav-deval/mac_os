import MacWindow from "./MacWindow";
import "./Resume.scss";

const Resume = () => {
  return (
    <MacWindow>
      <div className="pdfContainer">
        <embed src="./resume.pdf" type="" />
      </div>
    </MacWindow>
  );
};

export default Resume;
