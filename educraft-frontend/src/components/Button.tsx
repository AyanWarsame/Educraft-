import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  icon,
  style = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded ${className}`}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (
        <span className="loader"></span> // You can define spinner CSS or use a spinner component
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
