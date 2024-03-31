import Sidebar from '../Sidebar';
import TitleSidebar from '../Sidebar/TitleSidebar';
import SidebarInfoContent from './SidebarInfoContent';

export default function SidebarInfo() {
  return (
    <Sidebar>
      <SidebarInfoContent
        title={<TitleSidebar label="Suas Informações" primary icon="Users" />}
        actionLabel="Editar e Configurar"
        actionTo="/"
      >
        <p>testando children</p>
      </SidebarInfoContent>
    </Sidebar>
  );
}
