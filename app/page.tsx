import Header from './components/header/header';
import SearchInput from './components/search/search-input';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-6 md:px-20 lg:px-40 xl:px-60 pt-32 flex flex-col gap-4">
        <p className="text-xl font-medium font-inter text-slate-600">
          Browse Library
        </p>
        <SearchInput />
      </main>
    </div>
  );
}
