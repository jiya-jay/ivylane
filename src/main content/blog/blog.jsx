import BlogOne from '../../assets/featured images/BlogOne.png'
import BlogTwo from '../../assets/featured images/BlogTwo.png'
import BlogThree from '../../assets/featured images/BlogThree.png'
import BlogFour from '../../assets/featured images/BlogFour.png'

const blogs = [
  { 
    title: 'Top 5 Low-Maintenance Plants for Busy Homes', 
    description: 'Discover the easiest plants to care for, perfect for busy lifestyles. Keep your home green without the stress!', 
    date: new Date().toLocaleDateString(), 
    category: 'Trending Tips & Tricks', 
    img: BlogOne
  },
//   { 
//     title: 'How to Purify Your Home Air with Indoor Plants', 
//     description: 'Learn which indoor plants naturally cleanse the air, making your space healthier and fresher every day.', 
//     date: new Date().toLocaleDateString(), 
//     category: 'Plant Care', 
//     img: BlogTwo
//   },
  { 
    title: 'Decorating Your Space: Stylish Ways to Display Plants', 
    description: 'Get creative ideas for arranging plants in your home, turning any corner into a beautiful, vibrant green spot.', 
    date: new Date().toLocaleDateString(), 
    category: 'Home Decor Inspiration', 
    img: BlogThree
  },
  { 
    title: 'Beginner’s Guide: How to Keep Your Indoor Plants Alive', 
    description: 'Simple, practical steps for new plant parents to avoid common mistakes and help their plants thrive.', 
    date: new Date().toLocaleDateString(), 
    category: 'Beginner Guides', 
    img: BlogFour 
  },
]


function Blog() {
    return (
        <>
            <div className="px-[8rem] mb-[8rem]">
                <div className="flex justify-between items-center ">
                    <div>
                        <h3 className='text-white text-[4rem] font-bold text-start'>Recent Blogs</h3>
                        <p className="text-white text-[1.4rem] mb-[6rem] w-[40rem]">Discover expert advice, care tips, and inspiring ideas to make your indoor and outdoor spaces greener and healthier.</p>
                    </div>
                    <button className="text-white bg-white/10 border border-white/30 shadow-md ">Read All Articles</button>
                </div>
                <div className="grid grid-cols-3 gap-16">
                    {blogs.map((blog, index) => (
                        <div className="blog group bg-[#4b743fab]  rounded-lg px-6 py-4 shadow-lg border border-white/20 transform hover:translate-y-[-6px] hover:scale-110 transition-all duration-[500ms] ease-in-out" key={index}>
                            <img src={blog.img} alt="blog image" className="w-full h-[18rem] rounded-lg border" />
                            <div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex justify-center items-center gap-2 text-white">
                                        <i className="bi bi-calendar-range"></i>
                                        <p>{blog.date}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2 text-white">
                                        <i className="bi bi-tags"></i>
                                        <p>{blog.category}</p>
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-3xl mt-5">{blog.title}</h3>
                                <p className="text-white mt-3 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore quas libero assumenda voluptas dicta accusantium praesentium cupiditate aspernatur maiores, iusto sunt natus quae culpa reprehenderit. Lorem ips ....</p>
                                <a href="/" className='underline text-white transform hover:text-[#A0E08D] transition-color duration-[300ms] w-full'>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog