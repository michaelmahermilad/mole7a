import Image from 'next/image'
import React, { useEffect } from 'react'
  
 function index() {
 
 
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F951761357210074%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1768221320818787%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100068620561703%2Fvideos%2F1915526612395469%2F&show_text=false&width=267&t=0",

     "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F955960070226045%2F&show_text=false&width=267&t=0"  ,

     "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1507572124427730%2F&show_text=false&width=267&t=0"  ,

     "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1236537121557947%2F&show_text=false&width=267&t=0"  
   ];
const [loaded, setLoaded] = React.useState(false);

   useEffect(() => {
    setTimeout(() => {

setLoaded(true);

    }, 2500);
  }, []);

  return (
    <div>
 
      
     


 

  
  <div className="container mx-auto px-10 py-6 text-right lg:mt-5">
    

        <div className="w-full text-center mx-auto mb-8">
  <h2 className="text-[15px]  font-bold text-red-900   lg:mb-4">
    تابعوا خدماتنا الروحية عبر فيسبوك
  </h2>
 
</div>

{loaded?(<div className="w-full text-center mx-auto mb-8">
    <div className="   flex flex-wrap lg:gap-x-20  mx-auto   justify-center mt-13  mb-10 ">
      { videos.map((src, index) => (
        <div
          key={index}
          className=" w-full  max-w-[330px]       "
        >
          <iframe
            src={src}
            className="m-auto   h-[500px] rounded-lg"
            width="250" height="400"  style={{overflow:'hidden'}}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title={`Facebook Video ${index + 1}`}
          />
        </div>
      ))}


    </div>
      <a
  href="https://www.facebook.com/people/%D9%83%D9%86%D9%8A%D8%B3%D8%A9-%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A9-%D8%A7%D9%84%D8%B9%D8%B0%D8%B1%D8%A7%D8%A1-%D9%85%D8%B1%D9%8A%D9%85-%D8%A7%D9%84%D9%85%D9%84%D9%8A%D8%AD%D8%A9/100068620561703/?sk=reels_tab"
  target="_blank"
  rel="noopener noreferrer"
  className="   inline-block px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800"
>
  .. مشاهدة المزيد
</a></div>
):(

    <div className="w-full text-center mx-auto mb-8">
  <h2 className="text-[14px]  font-bold text-red-900   mb-200">
    جاري تحميل الفيديوهات 

    <div className="loader mx-auto mt-10"></div>

    
  </h2> 
  </div>
)
    

}
   t

                         
      
      </div>



    </div>
  )
}

export default index

 
