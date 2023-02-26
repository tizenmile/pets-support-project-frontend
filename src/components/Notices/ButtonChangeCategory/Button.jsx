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
        backgroundColor: selected && "rgba(255, 113, 47, 1)",
      }}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
