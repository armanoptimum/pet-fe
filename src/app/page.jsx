import { bannerOneMock, bannerThreeMock, bannerTwoMock } from '@/components/Banner/data';
import { HomeStyled } from './styles';
import Cards from '@/components/Cards';
import Banner from '@/components/Banner';
import Sellers from '@/components/Sellers';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchPageData = async (type) => {
  const res = await fetch(`${baseUrl}/api?type=${type}`);
  if (!res.ok) throw new Error(`Failed to fetch data for page ${page}`);
  const { data, total } = await res.json(); 
  return { data, total };
};

export default async function Home() {
  let mock1 = { data: [], total: 0 };
  let mock2 = { data: [], total: 0 };
  let mock4 = { data: [], total: 0 };

  try {
    const responses = await Promise.all([
      fetchPageData('mock1'),
      fetchPageData('mock2'),
      fetchPageData('mock4')
             
    ]);
    [mock1, mock2, mock4] = responses;
  } catch (err) {
    console.error('Error fetching data:', err);
  }

  return (
    <HomeStyled>
      <Banner {...bannerOneMock} />
      <Cards cardData={mock1.data} paragraph="Take a look at some of our pets" header="What's new?" colCountMax={4} />
      <Banner {...bannerTwoMock} reversed={true} style="secondary" />
      <Cards
        cardData={mock2.data}
        paragraph="Hard to choose the right products for your pets?"
        header="Our Products"
        colCountMax={4}
      />
      <Sellers />
      <Banner {...bannerThreeMock} style="secondary" />
      <Cards
        type="secondary"
        cardData={mock4.data}
        paragraph="Useful pet knowledge"
        header="Did you already know?"
        colCountMax={3}
        colCountMin={1}
      />
    </HomeStyled>
  );
}
