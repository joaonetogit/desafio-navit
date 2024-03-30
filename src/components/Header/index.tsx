import Container from '../Container';
import { ModeToggle } from '../ModeToggle';

export default function Header() {
  return (
    <header className="p-4 border-b-[1px]">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-2xl">Header</h1>
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
