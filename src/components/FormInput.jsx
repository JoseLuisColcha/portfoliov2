export const FormInput = ({
  type = 'text',
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
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`input-style ${error && touched ? 'border-red-500' : ''}`}
      />
      {error && touched && <p className="error-txt">{error}</p>}
    </>
  )
}
