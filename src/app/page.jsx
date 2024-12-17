import { bannerOneMock, bannerThreeMock, bannerTwoMock } from '@/components/Banner/data';
import { HomeStyled } from './styles';
import Cards from '@/components/Cards';
import Banner from '@/components/Banner';
import Sellers from '@/components/Sellers';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default async function Home() {
  const [mock1, mock2, mock4] = await Promise.all([
    fetch(`${baseUrl}?type=mock1`).then((res) => res.json()),
    fetch(`${baseUrl}?type=mock2`).then((res) => res.json()),
    fetch(`${baseUrl}?type=mock4`).then((res) => res.json()),
  ]);



  return (
    <HomeStyled>
      <Banner {...bannerOneMock} />
      <Cards cardData={mock1} paragraph="Take a look at some of our pets" header="Whats new?" colCount={4} />
      <Banner {...bannerTwoMock} reversed={true} style="secondary" />
      <Cards
        cardData={mock2}
        paragraph="Hard to choose right products for your pets?"
        header="Our Products"
        colCount={4}
      />
      <Sellers />
      <Banner {...bannerThreeMock} style="secondary" />
      <Cards
        type="secondary"
        cardData={mock4}
        paragraph="Useful pet knowledge"
        header="You already know ?"
        colCount={3}
      />
    </HomeStyled>
  );
}
