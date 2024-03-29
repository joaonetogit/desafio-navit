import { ISidebarMenuData } from '@/types/components/SidebarMenuList';

export const SidebarMenuAdminItems: ISidebarMenuData = {
  items: [
    {
      label: 'Página Inicial',
      icon: 'Home',
      to: '/',
    },
    {
      label: 'Meu Perfil',
      icon: 'User',
      to: '/',
    },
    {
      label: 'Notificações',
      icon: 'Bell',
      to: '/',
    },
    {
      label: 'Painel de Jogos',
      icon: 'Calendar',
      to: '/',
    },
    {
      label: 'Pagamentos',
      icon: 'FileText',
      to: '/',
    },
  ],
};

export const SidebarMenuCompetitions: ISidebarMenuData = {
  label: 'Competições',
  items: [
    {
      label: 'Meus Rankings',
      icon: 'ListOrdered',
      to: '/',
    },
    {
      label: 'Meus Torneios',
      icon: 'Trophy',
      to: '/',
    },
    {
      label: 'Encontre Torneios',
      icon: 'Redo',
      to: '/',
    },
  ],
};

export const SidebarMenuPlayMore: ISidebarMenuData = {
  label: 'Jogue mais',
  items: [
    {
      label: 'Minhas Aulas',
      icon: 'GraduationCap',
      to: '/',
    },
    {
      label: 'Agende uma Aula',
      icon: 'GraduationCap',
      to: '/',
    },
    {
      label: 'Agende sua Reposição',
      icon: 'GraduationCap',
      to: '/',
    },
    {
      label: 'Alugue uma Quadra',
      icon: 'Ticket',
      to: '/',
    },
    {
      label: 'Reserve um Horário de Clube',
      icon: 'SquareUserRound',
      to: '/',
    },
  ],
};

export const SidebarMenuPerformance: ISidebarMenuData = {
  label: 'Desempenho',
  items: [
    {
      label: 'Histórico de Jogos',
      icon: 'LayoutGrid',
      to: '/',
    },
    {
      label: 'Estatísticas',
      icon: 'LineChart',
      to: '/',
    },
    {
      label: 'Head to Head',
      icon: 'Scale',
      to: '/',
    },
  ],
};

export const SidebarMenuOthers: ISidebarMenuData = {
  items: [
    {
      label: 'Convidar Amigo',
      icon: 'Gift',
      to: '/',
    },
    {
      label: 'Quero ser Gestor',
      icon: 'CircleUser',
      to: '/',
    },
  ],
};

export const SidebarMenuConfig: ISidebarMenuData = {
  items: [
    {
      label: 'Editar e Configurar',
      icon: 'Settings2',
      to: '/',
    },
  ],
};

export const SidebarMenuExit: ISidebarMenuData = {
  items: [
    {
      label: 'Sair',
      icon: 'LogOut',
      to: '/',
    },
  ],
};

export const renderContentSidebar = [
  {
    hierarchy: 'admin',
    label: 'Admin',
    items: SidebarMenuAdminItems.items,
  },
  {
    hierarchy: 'competitions',
    label: 'Competições',
    items: SidebarMenuCompetitions.items,
  },
  {
    hierarchy: 'playMore',
    label: 'Jogue mais',
    items: SidebarMenuPlayMore.items,
  },
  {
    hierarchy: 'performance',
    label: 'Performance',
    items: SidebarMenuPerformance.items,
  },
  {
    hierarchy: 'others',
    items: SidebarMenuOthers.items,
  },
  {
    hierarchy: 'config',
    items: SidebarMenuConfig.items,
  },
  {
    hierarchy: 'exit',
    items: SidebarMenuExit.items,
  },
];
