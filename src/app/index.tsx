import Header from '@/components/Header';
import Posts from '@/components/Posts';
import SidebarInfo from '@/components/SidebarInfo';
import SidebarMenu from '@/components/SidebarMenu';

function App() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full flex justify-center gap-5 bg-neutral-100 dark:bg-inherit">
        <SidebarMenu />
        <Posts />
        <SidebarInfo />
      </main>
    </div>
  );
}

export default App;
