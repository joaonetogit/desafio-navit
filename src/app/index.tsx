import Header from '@/components/Header';
import Posts from '@/components/Posts';
import SidebarInfo from '@/components/SidebarInfo';
import SidebarMenu from '@/components/SidebarMenu';

function App() {
  return (
    <>
      <Header />
      <main className='flex gap-5 bg-neutral-100 dark:bg-inherit'>
        <SidebarMenu />
        <Posts />
        <SidebarInfo />
      </main>
    </>
  );
}

export default App;
