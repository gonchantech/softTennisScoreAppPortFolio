import React from "react";
import styles from "./InputField.module.css";

type InputSize = "sm" | "md" | "lg";

interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: InputSize;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  error,
  size = "md",
  required = false,
  className,
  ...props
}) => {
  const sizeClass = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
  }[size];

  const inputClasses = [
    styles.input,
    sizeClass,
    error ? styles.error : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        className={inputClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error && (
        <div id={`${props.id}-error`} className={styles.errorText}>
          {error}
        </div>
      )}
      {helperText && !error && (
        <div className={styles.helperText}>{helperText}</div>
      )}
    </div>
  );
};
