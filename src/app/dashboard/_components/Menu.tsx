export default function Menu() {
  return (
    <ul className="pt-6 w-full">
      <div className=" pl-20">
        <h3 className="font-bold mb-3">Dashboard</h3>
        <div className="flex flex-col gap-2">
          <li className="cursor-pointer">Words</li>
          <li className="cursor-pointer">Analyze</li>
        </div>
      </div>
    </ul>
  )
}