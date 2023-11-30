import depression from "@/public/images/depression.png";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Kenali Gejala</h2>
            <p className="text-xl text-gray-600">
              Dalam upaya meningkatkan kesadaran akan kesehatan mental,
              mengenali gejala-gejala penyakit tertentu bisa menjadi langkah
              awal penting. Berikut adalah beberapa penyakit mental yang umum
              dan ciri-cirinya
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={"/images/depression.png"}
                alt=""
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Depresi
              </h4>
              <p className="text-gray-600 text-center">
                Depresi adalah gangguan mood yang ditandai dengan rasa sedih
                yang mendalam.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={"/images/bipolar.png"}
                alt=""
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Bipolar
              </h4>
              <p className="text-gray-600 text-center">
                Gangguan ini ditandai dengan perubahan suasana hati yang
                ekstrem, dari sangat bahagia hingga sangat sedih.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={"/images/worried.png"}
                alt=""
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Gangguan Kecemasan
              </h4>
              <p className="text-gray-600 text-center">
                Gangguan ini ditandai dengan rasa cemas atau takut yang
                berlebihan dan berkepanjangan.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={"/images/adhd.png"}
                alt=""
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Post-Traumatic Stress Disorder
              </h4>
              <p className="text-gray-600 text-center">
                PTSD adalah gangguan yang dapat terjadi setelah seseorang
                mengalami trauma. Gejala bisa termasuk flashbacks dari trauma,
                mimpi buruk sampai reaksi fisik  ketika diingatkan
                tentang trauma
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={"/images/puzzles.png"}
                alt=""
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                OCD
              </h4>
              <p className="text-gray-600 text-center">
                Obsessive Compulsive Disorder ditandai dengan pikiran obsesif
                dan perilaku kompulsif. Gejalaya seperti memeriksa sesuatu
                berulang dan kebutuhan untuk melakukan sesuatu secara sempurna.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={"/images/delusion.png"}
                alt=""
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Psikosis
              </h4>
              <p className="text-gray-600 text-center">
                Psikosis adalah gangguan mental yang ditandai dengan kehilangan
                kontak dengan kenyataan. Gejala bisa termasuk delusi,
                halusinasi, bicara yang tidak jelas, dan perilaku yang tidak
                biasa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
