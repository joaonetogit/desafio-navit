import { UserExample } from '@/constants/User';
import Sidebar from '../Sidebar';
import TitleSidebar from '../Sidebar/TitleSidebar';
import ListInfoUser from './ListInfoUser';
import SidebarInfoContent from './SidebarInfoContent';

export default function SidebarInfo() {
  return (
    <Sidebar>
      <SidebarInfoContent
        title={<TitleSidebar label="Suas Informações" primary />}
        actionLabel="Editar e Configurar"
        actionTo="/"
      >
        <ListInfoUser user={UserExample.user} />
      </SidebarInfoContent>
    </Sidebar>
  );
}
