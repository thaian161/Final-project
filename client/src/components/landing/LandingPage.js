import './LandingPage.css';
import HumanCat from '../../lotties/HumanCat';
import ChatBubble from '../../lotties/ChatBubble';
import PurpleCat from '../../lotties/PurpleCat';
import Animals from '../../lotties/Animals';
import SpaceDog from '../../lotties/SpaceDog';

export default function LandingPage() {
  return (
    <body>
      <section className="home" id="home">
        <div className="homeContent">
          <h3> Dirty Paws </h3>
          <p>Ready to get Dirty?</p>
          <p>
            Ready to get Dirty? Ready to get Dirty? Ready to get Dirty? Ready to
            get Dirty? Ready to get Dirty?
          </p>
          <a href="/#">
            <button className="land-btn">explore more</button>
          </a>
          <div>
            <ChatBubble />
          </div>
        </div>

        <div className="landing-animation-container">
          <div>
            <HumanCat/>
          </div>

          
        </div>
      </section>
    </body>
  );
}
