import Layout from '../../components/layout';

import Head from 'next/head';

import { getActivityById, getAllActivitiesIds } from '../../utils/activities';


export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const response = await getActivityById(params.id);

    const activityData = response.body
    console.log(activityData)
    return {
        props: {
            activityData,
        },
    };
}

export async function getStaticPaths() {
    const paths = await getAllActivitiesIds();
    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ activityData }) {
    return (
        <Layout>
            <Head>
                <title>{activityData.name}</title>
            </Head>
          {activityData.name}
        </Layout>
    );
}

