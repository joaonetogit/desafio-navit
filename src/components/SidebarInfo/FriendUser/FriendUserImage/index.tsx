export default function FriendUserImageText({ name }: { name: string }) {
  const words = name.split(' ');
  const firstLetters = words.map((palavra: string) =>
    palavra.charAt(0).toUpperCase(),
  );

  return (
    <div className="w-full flex-1 p-2 flex items-center justify-center text-2xl font-semibold bg-blue-500 rounded-t-sm text-white">
      {firstLetters}
    </div>
  );
}
