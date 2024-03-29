import { ModeToggle } from "../ModeToggle";

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b-[1px]">
      <h1 className="text-2xl">Header</h1>
      <ModeToggle />
    </header>
  )
}
