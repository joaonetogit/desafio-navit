import Header from '@/components/Header';
import Main from '@/components/Main';
import Posts from '@/components/Posts';
import SidebarInfo from '@/components/SidebarInfo';
import SidebarMenu from '@/components/SidebarMenu';

function App() {
  return (
    <>
      <Header />
      <Main>
        <SidebarMenu />
        <Posts />
        <SidebarInfo />
      </Main>
    </>
  );
}

export default App;
