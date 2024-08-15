// app/page.js

export default function Home() {
  return (
    <div className='home-container'>
      {/* <Navbar /> */}
      <div className="home-content">
        <div className="home-content-text">
          <h1 className="heading-main">Introduction for web</h1>
          <h3 className="text-muted">
            You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that you can be sure to get everything.
          </h3>
          <a href="#" className="link-project">Link to project</a>
        </div>
        <div className="image-placeholder"></div>
      </div>
      <div className="home-carousel">
        <ul>
          <li className="active">Introduction</li>
          <li>User Story + Main Feature</li>
          <li>Market Research</li>
          <li>Branding</li>
          <li>Wireframe + Sketch</li>
          <li>UI Guideline</li>
          <li>Tech</li>
          <li>User Testing</li>
        </ul>
      </div>
    </div>
  );
}