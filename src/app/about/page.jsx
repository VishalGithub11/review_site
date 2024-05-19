import Head from 'next/head';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us - Your Brand</title>
        <meta name="description" content="Learn more about Your Brand and what we do." />
      </Head>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Your Brand is a leading provider of innovative solutions for [describe what your brand does].
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nunc in est vehicula maximus.
            Donec efficitur magna at libero placerat, a malesuada magna aliquet. Integer eget erat vitae orci
            lacinia varius. Nam mattis tortor et felis lacinia, vel mattis eros sodales. Duis nec ex urna.
            Aenean faucibus vitae turpis sit amet bibendum. Donec non nisi eget felis commodo ullamcorper sed at justo.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            We strive to [describe your brand's mission and values]. Curabitur tincidunt consectetur sapien,
            eget laoreet enim. Vivamus tincidunt, felis vel ultrices mattis, libero nisi tincidunt leo,
            nec volutpat justo nulla sit amet velit. Suspendisse nec nisi lacinia, molestie neque ac,
            tempus quam. Donec aliquam erat id nisi luctus, non condimentum lorem ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
