import { HiChevronRight } from 'react-icons/hi';

function AboutMe() {
  return (
    <div className="my-14 h-fit">
      <div className="my-10 space-y-10 lg:my-40 xl:mx-10 mx-3">
        <h1
          className="rounded-lg pb-3 border-b border-red-500 bg-gradient-to-r w-fit 
         from-red-500 to-cyan-200 bg-clip-text text-3xl font-semibold tracking-wide text-transparent md:text-5xl"
        >
          About me
        </h1>
        <div className=" tracking-wide flex flex-col lg:items-start lg:space-y-10 space-y-5">
          <div className="space-y-10  text-lg tracking-wide lg:max-w-md 2xl:max-w-2xl">
            <p>
              Hi! My name is Yusuf. Passion?... My interest in development
              started on early childhood when I decided keep my favorite counter
              strike mod alive. Failing relentlessly while cutting editing the
              Amxmodx scripts (pawn language) that look gibberish to me did pay
              off after...
            </p>
            <p>
              Drive?... Nowadays, I'm continuously building awesome projects and
              growing as a developer. I'm a quick learner which its pretty handy
              when it comes to fast environment of web technologies.
            </p>
          </div>
          <div className="space-y-5 font-bold ">
            <h1 className="text-red-500 text-xl">My Toolkit :</h1>
            <div className="flex space-x-3 font-mono text-sm rounded-3xl lg:border-b-2 lg:border-r-2 border-solid border-red-500 pb-8 pr-8">
              <ul className="space-y-5">
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500" />{' '}
                  Javascript (ES6+)
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Typescript
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Next.js & React.js
                </li>{' '}
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Next.js & React.js
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Responsive Layouts
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Semantic HTML
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  CSS
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Next.js & React.js
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Serverless
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Node.js
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  API's
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{' '}
                  Next.js & React.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
