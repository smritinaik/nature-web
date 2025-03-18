import Hero from "./components/hero";

export default function Home() {
  return (
    
    <>
    <Hero/>
    <div className="w-full  text-white p-6 space-y-4">
          <div className="flex flex-col gap-15 max-w-4xl mx-auto mc-10">
            <h3 className='text-center mt-20 md:mt-0 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'>Parallax Web Design</h3>
          </div>
          <p className="text-black text-gray-300 font-bold leading-relaxed tracking-wide">
            This project is a modern Next.js web page featuring a parallax scrolling effect using Framer Motion&apos;s useScroll hook.   <br /><br />
            Styled with Tailwind CSS  it ensures a sleek, responsive design.   <br /><br />
            The page includes a dynamic content section showcasing web development services with well-structured typography.   <br /><br />
            Next.js enhances performance with server-side rendering while Framer Motion enables smooth animations.   <br /><br />
            This project effectively demonstrates how to build an engaging high-performance web experience with modern technologies like Next.js, Tailwind CSS, and Framer Motion.
          </p>

        </div>
    </>
  );
}
