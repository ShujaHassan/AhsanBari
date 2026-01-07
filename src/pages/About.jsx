import React from 'react';
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section className="bg-black min-h-screen py-32 px-6 text-center">
  <div className="max-w-6xl mx-auto">
    <SectionTitle
      title="About Ahsan Bari"
      subtitle="Composer, Producer, Educator & Cultural Curator"
    />

    <p className="text-gray-300 leading-relaxed text-lg">
      Ahsan Bari is a multidisciplinary artist, music director, and cultural curator working across music, theatre, film, and interdisciplinary performance. Trained in North Indian classical music and Qawwali, his practice is rooted in raga and tala systems while engaging Western classical harmony, jazz, and contemporary forms. He is an alumnus of Pakistan’s National Academy of Performing Arts (NAPA).<br></br>
He is the founder of Sounds of Kolachi, a pioneering South Asian ensemble known for its collaborative and experimental approach, and has worked across both academic and commercial platforms, including Coke Studio and Pepsi Battle of the Bands. <br></br>Ahsan currently serves as Head of the Music Department and Director of Special Programs at the Arts Council of Pakistan Karachi, where he leads curriculum development, ensemble initiatives, and large-scale cultural programming.
With over 15 years of curatorial and performance experience, his work has been presented internationally at venues such as the John F. Kennedy Center, Savannah Music Festival, Bharat Rang Mahotsav, Joe’s Pub, and leading academic institutions. Informed by philosophy and spirituality, Ahsan’s work focuses on building sustainable music ecosystems and fostering meaningful artistic exchange across cultures.
    </p>
  </div>
</section>
  );
}

