import { personalInfo } from "../data";

export default function Info() {
  return (
    <>
      {personalInfo.map(({ id, title, description }) => (
        <li className="info__item" key={id}>
          <span className="info__title">{title}</span>
          <span className="info__description">{description}</span>
        </li>
      ))}
    </>
  );
}
