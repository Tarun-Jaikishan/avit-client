export default function TextArea({
  name,
  onChange,
  value,
  customStyle,
  ...props
}) {
  return (
    <textarea
      className={`${customStyle} outline-none border-2 h-[9.7rem] p-2 rounded-xl w-[25rem]`}
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    ></textarea>
  );
}
