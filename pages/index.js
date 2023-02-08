import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

import { getAllActivitiesData } from '../utils/activities';

export async function getStaticProps() {
  const response = await getAllActivitiesData();
  const dataActivities = response.body;
  return {
    props: {
      dataActivities,
    },
  };
}

export default function Home({ dataActivities }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.gridContainer}>
          {dataActivities.map(({ id, name }) => (
            <div className={utilStyles.listItem} key={id}>
              <div className={`card ${utilStyles.grayBck}`}>
                <Image className={utilStyles.image}
                  priority
                  src="/images/bike.jpg"
                  height={144}
                  width={144}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}