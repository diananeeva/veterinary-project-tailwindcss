import postPics from "/images/posts.png";
import postPics2 from "/images/posts1.png";
import postPic3 from "/images/ourjob3.png";

function RecentPosts() {
  return (
    <>
      <section className="min-h-screen lg:px-[142px]">
        <div className="text-center max-w-screen-sm mx-auto py-10">
          <h1 className="text-5xl font-bold pt-4 text-text-blue">
            Recent Posts
          </h1>
          <p className="text-text-blue pt-4 font-normal text-xl">
            Stay updated with our latest insights and industry trends. We
            regularly share expert articles, tips, and updates to keep you
            informed and ahead in the field.
          </p>
        </div>
        <div className="custom-grid ">
          {[ 
            { img: postPic3, h1: "As a Veterinarian and lover of animals", small: "Description of post 1", p: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", but: "Read More +" },
            { img: postPics, h1: "As a Veterinarian and lover of animals", small: "Description of post 2", p: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", but: "Read More +" },
            { img: postPics2, h1: "As a Veterinarian and lover of animals", small: "Description of post 3", p: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", but: "Read More +" }
          ].map((news, index) => (
            <div key={index} className="text-center md:text-left">
              <img src={news.img} className="mx-auto h-80" alt={`Post ${index}`} />
              <h1 className="text-text-blue font-semibold text-xl pt-4">{news.h1}</h1>
              <p className="text-custom-blue pt-1 font-medium">{news.small}</p>
              <p className="text-text-blue font-light pt-4 leading-tight">{news.p}</p>
              <button className="text-custom-blue font-semibold pt-4">{news.but}</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default RecentPosts;
