import { bannerOneMock, bannerThreeMock, bannerTwoMock } from '@/components/Banner/data';
import { HomeStyled } from './styles';
import Cards from '@/components/Cards';
import Banner from '@/components/Banner';
import Sellers from '@/components/Sellers';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {
  let mock1 = [];
  let mock2 = [];
  let mock4 = [];

  try {
    const responses = await Promise.all([
      fetch(`${baseUrl}?type=mock1`).then((res) => res.json()),
      fetch(`${baseUrl}?type=mock2`).then((res) => res.json()),
      fetch(`${baseUrl}?type=mock4`).then((res) => res.json()),
    ]);
    [mock1, mock2, mock4] = responses;
  } catch (err) {
    console.error('Error fetching data:', err);
  }

  return (
    <HomeStyled>
      <Banner {...bannerOneMock} />
      <Cards cardData={mock1} paragraph="Take a look at some of our pets" header="What's new?" colCount={4} />
      <Banner {...bannerTwoMock} reversed={true} style="secondary" />
      <Cards
        cardData={mock2}
        paragraph="Hard to choose the right products for your pets?"
        header="Our Products"
        colCount={4}
      />
      <Sellers />
      <Banner {...bannerThreeMock} style="secondary" />
      <Cards
        type="secondary"
        cardData={mock4}
        paragraph="Useful pet knowledge"
        header="Did you already know?"
        colCount={3}
      />
    </HomeStyled>
  );
}
