import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="px-10 py-8 flex items-center justify-between shadow-lg">
      <div className="text-2xl">
        <span className="text-blue-700 font-bold">AVIT</span> WATERMARK
      </div>

      <div className="flex gap-5 items-center">
        <Button name={"Login"} />
        <Button
          name={"SignUp"}
          customStyle={"bg-blue-700 text-white hover:!bg-blue-800"}
        />
      </div>
    </nav>
  );
}
