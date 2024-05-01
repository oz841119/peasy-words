import Menu from "./Menu";

export default function Side() {
  return (
    <div className="w-72 flex flex-col items-center">
      <h1 className="h-24 flex items-center">
        <span className="font-bold text-lg">Peasy Words</span>
      </h1>
      <Menu />
    </div>
  )
}