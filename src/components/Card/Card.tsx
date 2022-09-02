import { FC } from "react";

type PropsType = {
  icon: string;
  text: string;
};

export const Card: FC<PropsType> = ({ icon, text }) => (
  <div>
    <img src={icon} alt={text} />
    <p>{text}</p>
  </div>
);
