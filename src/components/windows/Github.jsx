import MacWindow from "./MacWindow";
import gitJson from "../../assets/github.json";
import "./Github.scss";

const gitCards = (data,idx) => (
  <div className="card" key={idx}>
    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className="description">{data.description}</p>
    <div className="tags">
      {data.tags.map((tag,idx) => (
        <p className="tag" key={idx}>{tag}</p>
      ))}
    </div>
    <div className="links">
      {data.repoLink && (
        <a target="_blank" className="link" href={data.repoLink}></a>
      )}
      {data.demoLink && (
        <a target="_blank" className="link" href={data.demoLink}></a>
      )}
    </div>
  </div>
);

const Github = () => {
  return (
    <MacWindow>
      <div className="cards">{gitJson.map((data,idx) => gitCards(data,idx))}</div>
    </MacWindow>
  );
};

export default Github;
