import { IListInfoUser } from '@/types/components/ListInfoUser';
import ListInfoUserRow from './ListInfoUserRow';

export default function ListInfoUser({ user }: IListInfoUser) {
  return (
    <div className="space-y-3">
      <ListInfoUserRow title="Gênero" value={user.gender} />
      <ListInfoUserRow title="Altura" value={user.size} />
      <ListInfoUserRow title="Forehand" value={user.foreHand} />
      <ListInfoUserRow title="Backhand" value={user.backHand} />
      <ListInfoUserRow title="Jogou" value={user.lastPlay} format="lastPlay" />
      <ListInfoUserRow title="Entrou" value={user.joined} format="joined" />
    </div>
  );
}
