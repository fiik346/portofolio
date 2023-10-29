import { useEffect, useState } from "preact/hooks";
export default function BlogArea() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    let api_url = `https://wqksirvqsbkygyszndfh.supabase.co/rest/v1/blogs?select=*,author(*)&draft=eq.false&order=publishedAt.desc&author=eq.a587dbdf-4abd-46a8-910f-5f8a288f6511&limit=6&apikey=${import.meta.env.PUBLIC_API_KEY}`
    let res = await fetch(api_url)
    if (res.ok) {
      let result = await res.json()
      setData(result);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <section>
      <h2 class="text-2xl font-bold text-slate-700">Blog</h2>
      {loading ? "Loading..." : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((item: any, i: any) => (
            <div
              key={i}
              className="border flex flex-wrap hover:shadow-lg duration-300 ease-in-out"
            >
              <div className="w-full">
                <div className="w-full aspect-[40/21] relative">
                  <a href={`https://www.nurhidayat.web.id/blog/${item.slug}`}>
                    <img
                      src={item.cover?.baseUrl || "/noimage.png"}
                      alt={item.title}
                      className="object-contain"
                    />
                  </a>
                </div>
                <div className="w-full h-auto p-6">
                  <h3 className="text-lg font-semibold">
                    <a
                      href={`https://www.nurhidayat.web.id/blog/${item.slug}`}
                      className="text-slate-700 hover:text-slate-800 duration-150"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-slate-500 line-clamp-5">
                    {item.excerpt || item.description}
                  </p>
                </div>
              </div>
              <div className="w-full mt-auto text-sm px-6 py-4 border-t flex items-center gap-4">
                <div>
                  <img
                    src={item.author.avatar?.baseUrl}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt={item.author.name}
                  />
                </div>
                <div className="text-slate-500">
                  <div>{item.author.name}</div>
                  <div>{item.readTime.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
