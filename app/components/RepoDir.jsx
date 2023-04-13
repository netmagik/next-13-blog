import Link from "next/link";
import { list } from "postcss";

async function fetchRepoContents(name) {
  // delay by 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/netmagik/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();

  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  const data = dirs.map((each) => (
    <p key={each.name}>
      <Link href={`/code/repos/${name}/${each.path}`}>{each.name}</Link>
    </p>
  ));

  return (
    <>
      <h3>Directories</h3>
      {data}
    </>
  );
};
export default RepoDirs;
