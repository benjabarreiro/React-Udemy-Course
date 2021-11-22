import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  /* const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []); */
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

/* export async function getServerSideProps(context) { // it runs for every req. you use this if you need access to req or res or you have data that changes multiple times every second
  const {req, res} = context;

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
} */

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://gandalf:thegrey@cluster0.g6ufp.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }; //you always need to return an object
}

export default HomePage;
