import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import { getAllActivitiesData } from '../utils/activities';
import { tableCreator } from '../utils/tableHydrator'
import { generateImageCover } from '../utils/generateCover'

let data = await getAllActivitiesData();
let originalList = data.body;
let displayedList = originalList;

export async function getStaticProps() {
  return {
    props: {
      displayedList,
    },
  };
}

function isRace(activity) {
  return (activity.work_type === 11 || activity.work_type === 1)
}

function filterListByRace() {
  console.log(originalList)
  displayedList = originalList.filter((activity) => isRace(activity))
  console.log("Filtering races")
}

function showMainList() {
  displayedList = originalList;
  console.log("Original list")
}

export default function Home({ displayedList }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <button onClick={filterListByRace}>Races</button>
        <button onClick={showMainList}>Main</button>
        <div className={utilStyles.gridContainer}>
          {displayedList.map((activity) => (
            <Link href={`/activities/${activity._id}`} key={activity.id}>
              <div className={utilStyles.listItem}>
                <div className={`card ${utilStyles.grayBck}`}>
                  {generateImageCover(activity.sport_type)}
                  <div className="card-body">
                    <h5 className={`card-title text-center`}>{activity.name}</h5>
                    <div className="card-text">
                      {tableCreator(activity)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}