import { Repository } from '../hooks/types';
import { useFavoriteReposStore } from '../store/favoriteRepos';

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    isFavorite
      ? removeFavoriteRepo(repository.id)
      : addFavoriteRepo(repository.id);
  };

  return (
    <div key={repository.keys_url}>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Dislike' : 'Like'}
      </button>
    </div>
  );
};

export default Card;
