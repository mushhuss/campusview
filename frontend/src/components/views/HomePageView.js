/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import hunter from '../../img/hunter.jpg';

const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>
      <img src={hunter} alt="Hunter" style={{ width: '200px', marginBottom: '20px' }} />
    </div>
  );    
}

export default HomePageView;