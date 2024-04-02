import ButtonsActionItem from './ButtonsActionItem';

export default function ButtonsAction() {
  return (
    <>
      <ButtonsActionItem
        icon="ThumbsUp"
        onClick={() => alert('Click on Like')}
      />
      <ButtonsActionItem
        icon="ThumbsDown"
        onClick={() => alert('Click on Dislike')}
      />
      <ButtonsActionItem
        icon="Share2"
        onClick={() => alert('Click on Share')}
      />
    </>
  );
}
