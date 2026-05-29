import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import pray from './pray.jpg'
 export default function About() {
  const phrases = [
  "وَلْيَمْلَأْكُمْ إِلَهُ الرَّجَاءِ كُلَّ سُرُورٍ وَسَلاَمٍ فِي الإِيمَانِ، لِتَزْدَادُوا فِي الرَّجَاءِ بِقُوَّةِ الرُّوحِ الْقُدُسِ. ",
  "أَيْضًا إِذَا سِرْتُ فِي وَادِي ظِلِّ الْمَوْتِ لاَ أَخَافُ شَرًّا، لأَنَّكَ أَنْتَ مَعِي.",
  "سَلاَمًا أَتْرُكُ لَكُمْ. سَلاَمِي أُعْطِيكُمْ. لَيْسَ كَمَا يُعْطِي الْعَالَمُ أُعْطِيكُمْ أَنَا. ",
  ' عِيشُوا بِالسَّلاَمِ، وَإِلهُ الْمَحَبَّةِ وَالسَّلاَمِ سَيَكُونُ مَعَكُمْ." ',
  "وَسَلاَمُ ٱللهِ ٱلَّذِي يَفُوقُ كُلَّ عَقْلٍ، يَحْفَظُ قُلُوبَكُمْ وَأَفْكَارَكُمْ فِي ٱلْمَسِيحِ يَسُوعَ. "
];
    const [quote, setQuote] = useState(phrases[0]);
  const [animate, setAnimate] = useState(false);
useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * phrases.length);
      setQuote(phrases[random]);

      // Retrigger animation
      setAnimate(false);
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    }, 25000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>

 
      <div dir='rtl' className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 mx-auto p-5 lg:p-6 pb-8 text-right ">
         <div className="flex flex-col-reverse lg:flex-col lg:contents gap-6">
                <Image  style={{
            filter: 'brightness(0.85) contrast(1.1) sepia(0.15)  ', // Added filters
          }} src={pray}  alt="About Us" className="w-[50vw] m-auto  lg:w-full h-auto rounded-lg shadow-lg mix-blend-multiply" />


              <section className="">
              <div className='rounded-xl shadow p-6 space-y-4 border border-dashed h-fit  mb-5    border-gray-300 bg-white/30 opacity-77 backdrop-blur-sm>'>

            
          <h1 className="  font-bold  text-[#7E1215] text-[17px]">الملاك ميخائيل شفيع كنيستنا</h1>
          <p className="   ">
            الملاك ميخائيل هو رئيس الملائكة . قوي وشجاع، ويدافع عن أولاد الله.
            في يوم من الأيام، حاول الشيطان أن يتمرد على الله، لكن الملاك ميخائيل وقف وقال:
            <strong> "من مثل الله؟"</strong> وقاد الملائكة في حرب ضد الشر وانتصر.
          </p>


            <p className="   ">
         </p>
          <p>
            وهو لا يزال حتى اليوم يحمي أولاد الله ويصلي من أجلهم. نستطيع دائمًا أن نطلب شفاعته عندما نخاف أو نحتاج للحماية.
          </p>
  
        <p>
            يُصوّر الملاك ميخائيل غالبًا وهو يحمل سيفًا أو رمحًا، يرتدي درعًا ذهبيًا، ويقف منتصرًا فوق الشيطان.
          </p>
  <ul className="list-disc pr-6 space-y-2">
            <li><strong>قائد جيش السماء :  </strong> حارب الشيطان وطرحه إلى الأرض (رؤيا 12).</li>
              <q className=' ' style={{ textAlign: 'justify' ,marginBlock:"1rem" ,display:"block"}} >  
وحدثت حرب في السماء: ميخائيل وملائكته حاربوا التنين، وحارب التنين وملائكته  ولم يقووا، فلم يوجد مكانهم بعد ذلك في السماء. 



                </q>
            <li><strong>  مدافع عن شعب الله : </strong>  ودافع عن جسد موسى. عندما اراد الشيطان ان ياخذه</li>
             <li><strong>يسند الشهداء : </strong> يقويهم في العذاب، ويحمي الكنيسة دائمًا.</li>
          </ul>
      
  </div>
      
 
       
  <blockquote className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded shadow-sm">
            <p className={`${animate ? 'animate-fadeInUp' : ''}  text-gray-800 font-medium leading-relaxed`}>
  {quote}            </p>
            <span className="block mt-2 text-sm text-yellow-700"> الصفحة لا تزال قيد الانشاء</span>
          </blockquote>
    

          
        </section>
        
           </div>
 
    
</div>

    <div className="max-w-[90%] mx-auto p-4 bg-white shadow-md rounded-lg my-10">
      <iframe
        title="SoundCloud Player"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        
        className="rounded-md"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A249282744&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

      <div className="mt-2 text-xs text-gray-500 truncate font-light">
        <strong>Listen to :</strong>
        ·{" "}
        <a
          href="https://soundcloud.com/george-wasfy-3/knisty-knisty-koogi-tv"
          title="ترنيمة كنيستى كنيستى - قناة كوجى - Knisty Knisty Koogi TV"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          ترنيمة كنيستى كنيستى - قناة كوجى - Knisty Knisty Koogi TV
        </a>
      </div>
    </div>
    </div>
  );
}

 