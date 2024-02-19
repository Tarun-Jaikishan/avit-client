import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="px-10 py-8">
      <div className="text-2xl">
        <span className="text-blue-700 font-bold">AVIT</span> WATERMARK
      </div>

      <div>
        <Button name={"Login"} />
        <Button name={"SignUp"} />
      </div>
    </nav>
  );
}
