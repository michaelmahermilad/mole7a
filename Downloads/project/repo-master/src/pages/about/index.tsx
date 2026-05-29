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
        <div className="flex flex-col-reverse self-start lg:flex-col lg:contents gap-6">
          <Image style={{
            filter: 'brightness(0.85) contrast(1.1) sepia(0.15)  ', // Added filters
          }} src={pray} alt="About Us" className="w-[50vw] mx-auto  lg:w-full h-auto rounded-lg shadow-lg mix-blend-multiply" />


          <section className="">
            <div className='rounded-xl shadow p-6 space-y-4 border border-dashed h-fit  mb-5 text-[14px]  text-justify  border-gray-300 bg-white/30 opacity-77 backdrop-blur-sm>'>
       <blockquote className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded shadow-sm">
              <p className={`${animate ? 'animate-fadeInUp' : ''}  text-gray-800 font-medium leading-relaxed`}>
                {quote}            </p>
             </blockquote>
              <div className=" text-[14px]   mt-4  text-justify  mx-auto bg-zinc-300" />   <article className="space-y-6 leading-9   text-zinc-800 text-right"> <p> تُعد <span className="font-semibold text-zinc-900"> كنيسة السيدة العذراء بالمليحة </span>{" "} من الكنائس العريقة في منطقة حدائق القبة بالقاهرة، وترجع جذور خدمتها إلى أواخر ثلاثينيات القرن العشرين، حين بدأت اجتماعات روحية منتظمة لأبناء المنطقة الذين تزايد عددهم مع نمو الحي وازدهاره. </p> <p> وفي عام{" "} <span className="font-semibold text-red-900">1939</span> نالت الخدمة بركة المتنيح البابا الأنبا يؤانس التاسع عشر، وبدأت خطوات تأسيس الكنيسة والمدرسة الأولية الملحقة بها لخدمة أبناء المنطقة روحيًا وتعليميًا. </p> <p> وفي مطلع عام{" "} <span className="font-semibold text-red-900">1941</span> أُقيمت أولى الصلوات في مبنى مؤقت خُصص للعبادة، لتصبح الكنيسة مركزًا روحيًا وخدميًا لأهالي المليحة وحدائق القبة. </p> <blockquote className="border-r-2 border-red-900 pr-5 italic text-zinc-700"> مع تزايد أعداد الشعب، تضافرت جهود أبناء الكنيسة ومحبيها لإقامة بيت لله يحمل اسم السيدة العذراء مريم، ليصبح منارة روحية تخدم الأجيال المتعاقبة. </blockquote> <p> وفي{" "} <span className="font-semibold text-red-900"> 23 مارس 1947 </span>{" "} افتُتحت الكنيسة الحالية للصلاة، بعد سنوات من العمل والعطاء والمشاركة الفعالة من أبناء المنطقة ومحبي الكنيسة. </p> <p> وعلى مدار العقود التالية شهدت الكنيسة العديد من التوسعات والتطويرات التي شملت إنشاء المنارة وإضافة أماكن جديدة للصلاة والخدمة، بما يلبي احتياجات الشعب المتزايد ويدعم الأنشطة الروحية والتعليمية والاجتماعية المختلفة. </p> <p> ولا يقتصر دور الكنيسة على إقامة الصلوات والقداسات، بل تمتد رسالتها إلى خدمة الأسرة والطفل والشباب والتعليم الكنسي وخدمة المحتاجين، لتظل شاهدًا حيًا على العمل الروحي والخدمي في منطقة حدائق القبة عبر أكثر من ثمانية عقود. </p> </article>

              <h1 className="  font-bold  text-[#7E1215] text-[15px]  mb-6">الملاك ميخائيل شفيع كنيستنا</h1>
              <p className="  mb-6  ">
                الملاك ميخائيل رئيس الملائكة هو شفيع الكنيسة            و معني اسمه  <strong> "من مثل الله؟"</strong>    .
              </p>


              <p className=" mb-6  ">
              </p>
              <p   className=" mb-6  ">
                لتكن بركة صلواته مع جميع افراد شعب المليحة  . 
              </p>

              <p  className=" mb-6  ">
                يُصوّر الملاك ميخائيل غالبًا وهو يحمل سيفًا أو رمحًا، يرتدي درعًا ذهبيًا، ويقف منتصرًا فوق الشيطان.
              </p>
              <ul className="list-disc pr-6 space-y-3 ">
                <li><strong>قائد جيش السماء :  </strong> حارب الشيطان وطرحه إلى الأرض (رؤيا 12).</li>
                <q className=' ' style={{ textAlign: 'justify', marginBlock: "1rem", display: "block" }} >
                  وحدثت حرب في السماء: ميخائيل وملائكته حاربوا التنين، وحارب التنين وملائكته  ولم يقووا، فلم يوجد مكانهم بعد ذلك في السماء.



                </q>
                <li><strong>  مدافع عن شعب الله : </strong>  ودافع عن جسد موسى. عندما اراد الشيطان ان ياخذه</li>
                <li><strong>يسند الشهداء : </strong> يقويهم في العذاب، ويحمي الكنيسة دائمًا.</li>
              </ul>

            </div>



     



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

