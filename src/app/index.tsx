import { ModeToggle } from '@/components/ModeToggle';
import { ThemeProvider } from '@/context/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <ModeToggle />
      </header>
      <h1>Início</h1>
    </ThemeProvider>
  );
}

export default App;
