import { Button } from "./Button-styled";

export const ButtonEl = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <Button
      style={{

        backgroundColor: selected && "rgba(245,146,86,1)",
        color: selected && "#fff",
      }}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
