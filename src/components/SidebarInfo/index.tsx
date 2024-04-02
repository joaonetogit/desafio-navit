import { UserExample } from '@/constants/User';
import ChartLastTime from '../ChartLastTime';
import Sidebar from '../Sidebar';
import TitleSidebar from '../Sidebar/TitleSidebar';
import ListFriends from './ListFriends';
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

      <SidebarInfoContent
        title={<TitleSidebar label="Seus últimos 20 jogos em" />}
      >
        <ListInfoUser user={UserExample.user} />
      </SidebarInfoContent>

      <SidebarInfoContent
        title={<TitleSidebar label="Seus resultados dos últimos 20 jogos" />}
      >
        <ListInfoUser user={UserExample.user} />
      </SidebarInfoContent>

      <SidebarInfoContent
        title={<TitleSidebar label="Seus jogos nos últimos 12 meses" />}
      >
        <ChartLastTime />
      </SidebarInfoContent>

      <SidebarInfoContent title={<TitleSidebar label="Amigos" icon="Users" />}>
        <ListFriends friends={UserExample.user.friends} />
      </SidebarInfoContent>
    </Sidebar>
  );
}
