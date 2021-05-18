import React from "react";

export default function Checkbox({
  disabled = false,
  name,
  label,
  checked,
  onChange,
}) {
  const handler = !disabled ? onChange : undefined;

  return (
    <>
    <div className="create">
      <span className="checkbox" onClick={handler}>
        <input
          className="checkbox-input"
          type="checkbox"
          name={name}
          id={`${name}-id`}
          disabled={disabled}
          checked={checked}
          onChange={handler}
          area-labelledby="checkbox-label"
        />
        <span className="checkbox-indicator" />
        <label className="checkbox-label" htmlFor={`${name}-id`}>
          {label}
        </label>
      </span>
    </div>
    </>
  );
}
