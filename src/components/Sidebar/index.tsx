import User from '../User';
import LogoNavit from '/public/logo-navit.jpeg';

export default function Sidebar() {
  return (
    <aside className="w-full max-w-md bg-transparent border-0 border-r-[1px] border-red-100">
      <div className="flex items-center p-4">
        <User name="Navit Digital" username="@NavitDigital" image={LogoNavit} />
      </div>
    </aside>
  );
}
