import './App.css';
import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteReposStore } from './store/favoriteRepos';

function App() {
  const { data, isLoading } = useFetchRepositories('Rencas1207');

  const { favoriteReposIds } = useFavoriteReposStore();

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {!isLoading &&
        typeof data !== undefined &&
        data?.map((repository) => (
          <Card
            key={repository.id}
            repository={repository}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        ))}
    </>
  );
}

export default App;
