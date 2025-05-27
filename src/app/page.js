import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "./utils/requests";

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  // In Next.js 15, searchParams is a Promise that needs to be awaited
  const params = await searchParams;
  const genre = params?.genre || '';
  
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }`,
      { next: { revalidate: 60 } } // Cache for 60 seconds
    ).then((res) => res.json());

    return (
      <div>
        <Header />
        <Nav />
        <Results results={request.results || []} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        <Header />
        <Nav />
        <div className="px-5 my-10 text-center">
          <h2 className="text-2xl">Error loading content</h2>
          <p>Please try again later</p>
        </div>
      </div>
    );
  }
}


