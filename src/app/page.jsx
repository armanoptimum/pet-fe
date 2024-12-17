'use client';
import { bannerOneMock, bannerThreeMock, bannerTwoMock } from '@/components/Banner/data';
import { HomeStyled } from './styles';
import Cards from '@/components/Cards';
import Banner from '@/components/Banner';
import { mockDogs, mockDogsSecondary, mockProduct } from '@/components/Cards/data';
import Sellers from '@/components/Sellers';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <HomeStyled>
      <Navbar />
      <Banner {...bannerOneMock} />
      <Cards cardData={mockDogs} paragraph="Take a look at some of our pets" header="Whats new?" />
      <Banner {...bannerTwoMock} reversed={true} style="secondary" />
      <Cards cardData={mockProduct} paragraph="Hard to choose right products for your pets?" header="Our Products" />
      <Sellers />
      <Banner {...bannerThreeMock} style="secondary" />
      <Cards
        type="secondary"
        cardData={mockDogsSecondary}
        paragraph="Useful pet knowledge"
        header="You already know ?"
      />
      <Footer />
    </HomeStyled>
  );
}
