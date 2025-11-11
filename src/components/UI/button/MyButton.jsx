import "./MyButton.css";

export default function MyButton({ children, variant, ...props }) {
  const cls = ["btn"];
  if (variant === "brand") cls.push("btn--brand");
  if (variant === "danger") cls.push("btn--danger");

  return (
    <button className={cls.join(" ")} {...props}>
      {children}
    </button>
  );
}
