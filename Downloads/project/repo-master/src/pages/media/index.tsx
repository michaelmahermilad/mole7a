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

    }, 2000);
  }, []);

  return (
    <div>
 
      
     


 

  
  <div className="container mx-auto px-10 py-6 text-right mt-5">
    

        <div className="w-full text-center mx-auto mb-8">
  <h2 className="text-[15px]  font-bold text-red-900   mb-4">
    تابعوا خدماتنا الروحية عبر فيسبوك
  </h2>
 
</div>

{loaded?(
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

):(

    <div className="w-full text-center mx-auto mb-8">
  <h2 className="text-[15px]  font-bold text-red-900   mb-200">
    جاري تحميل الفيديوهات 
  </h2> 
  </div>
)
    

}
   

                         
      
      </div>



    </div>
  )
}

export default index

function setloaded(arg0: boolean) {
         throw new Error('Function not implemented.');
     }
