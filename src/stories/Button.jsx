import "./button.css";

/*
color:
  background
  border
  color
size
*/
export const Button = ({ variant, size, content }) => {
  const buttonClasses = ["button", `button-${size}`, `button-${variant}`].join(
    " "
  );

  return (
    <button type="button" className={buttonClasses}>
      {content}
    </button>
  );
};
