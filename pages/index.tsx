import { GetStaticProps, NextPage } from "next";
import Layout from "@/app/components/common/Layout";
import { IPlace } from "@/app/types/place";
import HeadingSection from "@/app/components/elements/Home/SearchSection/HeadingSection";
import Filters from "@/app/components/elements/Filters/Filters";
import { API_URL } from "@/app/constans";
import PopularPlaces from "@/components/elements/Home/PopularPlaces/PopularPlaces";



interface IHome {
  places: IPlace[]
}

const Home: NextPage<IHome> = ({ places }) => {
  console.log(places)
  return (
    <Layout>
      <HeadingSection />
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Filters />
        <PopularPlaces places={places} />
      </div>

    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const result = await fetch(`${API_URL}/places`)
  const places = await result.json()

  console.log(places)

  return {
    props: {
      places
    }
  }
}

export default Home