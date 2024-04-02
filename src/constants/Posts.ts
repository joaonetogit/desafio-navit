import { IPost } from '@/types/post';

export const PostsExample: IPost[] = [
  {
    post: {
      postIcon: '/user.png',
      userImage: '/logo-navit.jpeg',
      userName: '@Jorge',
      title: 'SF - Torneio de tênis',
      date: new Date('01-01-2024'),
      imagePost: '/posts/image-post-1.jpeg',
    },
  },
  {
    post: {
      postIcon: '/user.png',
      userImage: '/logo-navit.jpeg',
      userName: '@Jorge',
      title:
        'SF The Weekend Cup Fevereiro/Março 24 - Categoria Bronza (6° Classe)',
      date: new Date('01-01-2024'),
      imagePost: '/posts/image-post-2.jpeg',
    },
  },
  {
    post: {
      postIcon: '/user.png',
      userImage: '/logo-navit.jpeg',
      userName: '@Jorge',
      title: 'SF - Torneio UPE de tênis de mesa',
      date: new Date('01-01-2024'),
      imagePost: '/posts/image-post-3.jpeg',
    },
  },
];
