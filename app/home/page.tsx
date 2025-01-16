import Card from "@/components/card";
import Link from "next/link";
import { getImages, getSearchProduct } from "@/lib/data";
import Search from "@/components/search";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const images = await getSearchProduct(query);
  // const images = await getImages();

  return (
    <div className="max-w-screen-lg mx-auto py-14">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold">All News</h1>
        <Link
          href="/create"
          className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Input News
        </Link>
      </div>
      <div className="flex items-center justify-between gap-1 mb-5 mt-10">
        <Search />
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {images.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
