
import Image from 'next/image';
import Header from './components/header';

export default function Home() {
  return (
 
    


      <div className="homeContainer">
  
        <div className="childContainer">
      
          <h1>
            <span className="text-red-700"><b>Introduction</b></span>
          </h1>
          <div className="content">
            <p>
              Hey, I am 
              <span className="abc">Faiza Shaukat</span>
              <br /> I am a Next JS Developer and a Web Designer.
              <br /> Expert in HTML, CSS.
              <br /> Can work with Javascript and Typescript.
              <br />Student at GIAIC.
            </p>
            <div className="profile-image">
              <Image
                src="/profile1.jpg"
                alt="Profile Picture"
                width={250}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

  );
}

