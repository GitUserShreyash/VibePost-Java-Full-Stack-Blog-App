import { Header } from "./Header";
import { Footer } from "./footer";
import { BlogCard } from "../Components/blog";
import data from "../data/data.json";
import { Sidebar } from "../Components/sidebar";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-800 fixed top-0 left-0 right-0 z-50 text-white p-1 ">
        <Header />
      </header>
      <main className="flex-grow p-0 ml-64 pt-16 flex flex-direction-row ">
        <div><Sidebar /></div>
        <section className="mb-8 flex-grow p-6 ml-0">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          <div className="flex flex-col items-center justify-center gap-5">
            {data.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                author={blog.writer}
                date={blog.datePosted}
                category={blog.communityTopic}
                description={blog.content}
              />
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Home;
