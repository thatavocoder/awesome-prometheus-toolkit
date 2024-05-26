import Header from './components/header/header';
import Footer from './components/footer/footer';
import { getGithubInfo } from './components/header/api';
import { GithubData } from './components/header/classes';
import Content from './components/content/content';

export default async function Home() {
  const githubData: GithubData = await getGithubInfo();

  return (
    <div>
      <Header githubData={githubData} />
      <Content />
      <Footer githubData={githubData} />
    </div>
  );
}
