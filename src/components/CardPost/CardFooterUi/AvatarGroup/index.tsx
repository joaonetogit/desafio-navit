import AvatarUi from '@/components/AvatarUi';

export default function AvatarGroup({ images }: { images: string[] }) {
  return (
    <div className="flex -space-x-3 *:ring *:ring-white">
      {images.map((image) => (
        <AvatarUi image={image} />
      ))}
    </div>
  );
}
