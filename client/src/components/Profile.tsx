import { Button } from "./common/Button";
import VectorIcon from "../assets/Vector.svg";
import clsx from "clsx";

interface ProfileProps {
  name: string;
  lastName: string;
  picture: string;
  role?: string;
  fontSize?: "sm" | "md";
  imageSize?: "sm" | "md";
  bgColor?: "default" | "transparent";
  marginRight?: "none" | "4";
  onClick?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  name,
  lastName,
  picture,
  role,
  fontSize = "md",
  imageSize = "md",
  bgColor = "default",
  marginRight = "none",
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-evenly gap-4 rounded-full px-3 py-2 ",
        {
          "dark:bg-darkBlue-600": bgColor === "default",
          "": bgColor === "transparent",
        },
      )}
    >
      <div
        className={clsx("min-w-max overflow-hidden rounded-full", {
          "h-10 w-10": imageSize === "sm",
          "h-12 w-12": imageSize === "md",
        })}
      >
        <img className="block h-full" src={picture} />
      </div>
      <div>
        <div className="flex flex-col">
          <div
            className={clsx("flex gap-1 font-medium dark:text-blue-100", {
              "text-sm": fontSize === "sm",
              "text-base": fontSize === "md",
            })}
          >
            <span>{name}</span>
            <span>{lastName}</span>
          </div>
          {role && <span className="text-xs dark:text-gray-600">{role}</span>}
        </div>
      </div>
      <div className="ml-auto flex h-full items-center">
        <Button
          className={clsx("min-h-max", {
            "mr-4": marginRight === "4",
          })}
          onClick={onClick}
        >
          <img className="block " src={VectorIcon}></img>
        </Button>
      </div>
    </div>
  );
};