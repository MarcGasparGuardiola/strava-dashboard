import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


import { getAllActivitiesData } from '../utils/activities';
import { tableCreator } from '../utils/tableHydrator'
import {generateImageCover} from '../utils/generateCover'

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
          {dataActivities.map((activity) => (
            <div className={utilStyles.listItem} key={activity.id}>
              <div className={`card ${utilStyles.grayBck}`}>
                { generateImageCover(activity.sport_type) }
                <div className="card-body">
                  <h5 className={`card-title text-center`}>{activity.name}</h5>
                  <p className="card-text">
                    { tableCreator(activity) }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}