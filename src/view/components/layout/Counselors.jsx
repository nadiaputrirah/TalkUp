import React from "react";
import CounselorImg from "../../../assets/images/counselors/counselor.png"; // sementara  pakai gambar dummy dulu

const counselors = [
  {
    id: 1,
    img: CounselorImg,
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    img: CounselorImg,
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    img: CounselorImg,
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    img: CounselorImg,
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
];

// CounselorCard
const CounselorCard = ({ img, name, desc }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[260px] mx-auto 
                    transition-transform duration-300 hover:scale-105 hover:shadow-xl p-6 rounded-2xl">
      <img
        src={img}
        alt={name}
        className="w-[220px] h-[220px] object-cover rounded-full mb-4 
                   transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};


const Counselors = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Bagian Judul - rata kiri */}
        <div className="mb-12 text-left">
          <h4 className="text-primary font-semibold mb-2">
            Kenalan dengan Guru BK Kami
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            Temui Guru BK yang Siap Menemani <br /> dan Membimbing Kamu
          </h2>
        </div>

        {/* Bagian Grid Counselor */}
        <div className="grid gap-10 md:grid-cols-4">
          {counselors.map((counselor) => (
            <CounselorCard
              key={counselor.id}
              img={counselor.img}
              name={counselor.name}
              desc={counselor.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counselors;
