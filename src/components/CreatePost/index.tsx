import Icon from '../Icon';
import { Button } from '../ui/Button';
import { Textarea } from '../ui/TextArea';

export default function CreatePost() {
  return (
    <div className="w-full space-y-4 bg-white dark:bg-inherit p-4 rounded-sm border border-border">
      <div className="flex items-center gap-2">
        <Icon name="MessagesSquare" />
        <h1>Criar uma publicação</h1>
      </div>
      <Textarea
        placeholder="Fale algo sobre seu treino, última partida, último jogo..."
        className="min-h-24"
      />
      <div className="flex justify-between">
        <Button
          className="w-full max-w-fit space-x-2 hover:bg-opacity-80"
          variant="secondary"
        >
          <Icon name="Camera" />
          <span>Selecionar foto</span>
        </Button>
        <Button className="dark:text-gray-50 bg-amber-600 hover:bg-amber-700 transition-all dark:hover:text-white">
          Publicar
        </Button>
      </div>
    </div>
  );
}
