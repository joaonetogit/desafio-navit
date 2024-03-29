import { ISidebarMenuList } from '@/types/components/SidebarMenuList';

export const SidebarMenuAdmin: ISidebarMenuList[] = [
  {
    items: [
      {
        label: 'Página Inicial',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Meu Perfil',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Notificações',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Painel de Jogos',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Pagamentos',
        icon: 'dashboard',
        to: '/',
      },
    ],
  },
];

export const SidebarMenuCompetitions: ISidebarMenuList[] = [
  {
    label: 'Competições',
    items: [
      {
        label: 'Meus Rankings',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Meus Torneios',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Encontre Torneios',
        icon: 'dashboard',
        to: '/',
      },
    ],
  },
];

export const SidebarMenuPlayMore: ISidebarMenuList[] = [
  {
    label: 'Jogue mais',
    items: [
      {
        label: 'Minhas Aulas',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Agende uma Aula',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Agende sua Reposição',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Alugue uma Quadra',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Reserve um Horário de Clube',
        icon: 'dashboard',
        to: '/',
      },
    ],
  },
];

export const SidebarMenuPerformance: ISidebarMenuList[] = [
  {
    label: 'Desempenho',
    items: [
      {
        label: 'Histórico de Jogos',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Estatísticas',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Head to Head',
        icon: 'dashboard',
        to: '/',
      },
    ],
  },
];

export const SidebarMenuOthers: ISidebarMenuList[] = [
  {
    items: [
      {
        label: 'Convidar Amigo',
        icon: 'dashboard',
        to: '/',
      },
      {
        label: 'Quero ser Gestor',
        icon: 'dashboard',
        to: '/',
      },
    ],
  },
];

export const SidebarMenuConfig: ISidebarMenuList[] = [
  {
    items: [
      {
        label: 'Editar e Configurar',
        icon: 'dashboard',
        to: '/',
      },
    ],
  },
];
