import { client } from "@/sanity/lib/client";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{title, description}`);
  return res;
};
interface i {
  title: string;
  description: string;
}
export default async function Home() {
  const data: i[] = await getProductData();
  console.log(data);

  return (
    <>
      <div className="max-w-[1440px] h-auto m-auto mt-2 bg-white flex items-center px-4">
        <div>
          <h1 className="logo text-black font-bold text-[1.4rem]">Paradize</h1>
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <div className="text-black text-[2rem] ml-16 font-bold">
            <h1> {item.title} </h1>
            <details> {item.description}</details>
          </div>
        );
      })}
    </>
  );
}
