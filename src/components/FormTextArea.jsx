// components/Contact/FormTextarea.jsx
export const FormTextarea = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`input-style pb-14 ${
          error && touched ? 'border-red-500' : ''
        }`}
      />
      {error && touched && <p className="error-txt">{error}</p>}
    </>
  )
}
