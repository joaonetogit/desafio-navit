import { Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export default function SearchBar() {
  return (
    <div className="flex space-x-2">
      <Input placeholder="Procurar na LetzPlay..." />
      <Button variant="secondary">
        <Search size={16} />
      </Button>
    </div>
  );
}
