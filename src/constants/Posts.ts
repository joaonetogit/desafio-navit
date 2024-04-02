import { IPost } from '@/types/post';

export const PostsExample: IPost[] = [
  {
    post: {
      postIcon: '/user.png',
      userImage: '/logo-navit.jpeg',
      userName: '@Jorge',
      title: 'SF - Torneio de tênis',
      date: new Date('01-02-2024'),
      imagePost: '/posts/image-post-1.jpeg',
      likes: ['/person/fake-person-0.jpeg', '/person/fake-person-1.jpeg'],
    },
  },
  {
    post: {
      postIcon: '/user.png',
      userImage: '/logo-navit.jpeg',
      userName: '@Nara',
      title:
      'SF The Weekend Cup Fevereiro/Março 24 - Categoria Bronza (6° Classe)',
      date: new Date('01-21-2024'),
      imagePost: '/posts/image-post-2.jpeg',
      likes: [
        '/person/fake-person-3.jpeg',
        '/person/fake-person-2.jpeg',
        '/person/fake-person-4.jpeg',
      ],
    },
  },
  {
    post: {
      postIcon: '/user.png',
      userImage: '/logo-navit.jpeg',
      userName: '@UPE',
      title: 'SF - Torneio UPE de tênis de mesa',
      date: new Date('03-11-2024'),
      imagePost: '/posts/image-post-3.jpeg',
      likes: ['/person/fake-person-5.jpeg', '/person/fake-person-6.jpeg'],
    },
  },
];
