export default function TextArea({ name, onChange, customStyle, ...props }) {
  return (
    <textarea
      className={`${customStyle}`}
      name={name}
      onChange={onChange}
      {...props}
    ></textarea>
  );
}
