import { useEffect, useLayoutEffect, useState } from 'react';

const Home = function () {
  const [scrollHeight, setScrollHeight] = useState();
  const videoSrc =
    'https://www.polestar.com/dato-assets/11286/1661778014-pure-design2-0-video-website-card_2022_polestar-2_think_other_na_16x9.mp4';

  useLayoutEffect(function () {
    const trackWindowScrollHeight = function () {
      let scrollHeight = window.scrollY;

      setScrollHeight(scrollHeight);
    };

    window.addEventListener('scroll', trackWindowScrollHeight);
  }, []);

  useEffect(function () {
    const targetElement = document.querySelectorAll('.fade-up-target');

    const options = {
      threshold: 0.6,
    };

    const triggerFadeUpAnimation = function (targetElement) {
      targetElement[0].target.classList.add('animate');
    };

    const observer = new IntersectionObserver(triggerFadeUpAnimation, options);

    targetElement.forEach(function (target) {
      observer.observe(target);
    });
  }, []);

  useEffect(function () {
    const videoElement = document.querySelectorAll('.apear-target');

    const options = {
      threshold: 0.1,
    };

    const triggerAppearAnimation = function (targetElement) {
      targetElement[0].target.classList.add('animate');
    };

    const observer = new IntersectionObserver(triggerAppearAnimation, options);

    videoElement.forEach(function (target) {
      observer.observe(target);
    });
  }, []);

  return (
    <div className={'container max-w-screen bg-black flex flex-col items-center overflow-x-hidden'}>
      <Section>
        <h1
          id="1"
          className="text-7xl z-10 pb-10 text-black fade-up-target"
        >
          Introducing New Polestar
        </h1>
        <video
          src={videoSrc}
          className="min-w-full min-h-full absolute object-cover apear-target"
          muted
          autoPlay
        />
      </Section>
      <Section>
        <h1
          id="2"
          className="text-8xl z-10 pb-10 text-white fade-up-target"
        >
          First Section
        </h1>
      </Section>
      <Section>
        <h1
          id="3"
          className="text-8xl z-10 pb-10 text-white fade-up-target"
        >
          Second Section
        </h1>
      </Section>
    </div>
  );
};

const Section = function ({ children, ...props }) {
  return (
    <div
      className="min-w-full min-h-screen bg-black flex flex-col items-center justify-center will-change-transform"
      {...props}
    >
      {children}
    </div>
  );
};

export default Home;

// transition: opacity .75s linear,transform .75s cubic-bezier(0.26,0.67,0.48,0.91);
// will-change
