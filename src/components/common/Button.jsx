export default function Button({ name, onClick, customStyle }) {
  return (
    <button className={`${customStyle}`} type="button" onClick={onClick}>
      {name}
    </button>
  );
}
