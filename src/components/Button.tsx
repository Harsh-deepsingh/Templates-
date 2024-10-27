const Button = ({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className=" mb-2 me-2 w-full rounded-md bg-theme-secondary  px-5 py-2.5 text-center text-sm font-medium  hover:bg-theme-secondary/75 focus:outline-none"
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";
export default Button;