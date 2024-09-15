export const getStaticPaths = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }
    const data = await res.json();

    // Create paths
    const paths = data.map((ninja) => {
      return {
        params: { id: ninja.id.toString() },
      };
    });

    return {
      paths, // Plural 'paths'
      fallback: false, // Correct typo from 'fullback' to 'fallback'
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id; // Get 'id' from context

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch user ${id}, status: ${res.status}`);
    }
    const data = await res.json();

    return {
      props: { ninja: data },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: { ninja: null }, // Return null if there's an error
    };
  }
};

const Details = ({ ninja }) => {
  if (!ninja) {
    return <p>Failed to load ninja details. Please try again later.</p>; // Handle null ninja
  }

  return (
    <>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address?.city}</p> {/* Optional chaining for safety */}
    </>
  );
};

export default Details;
