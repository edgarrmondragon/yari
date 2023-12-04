import { AI_HELP } from "../../telemetry/constants";
import Container from "../../ui/atoms/container";
import { AuthContainer } from "../../ui/molecules/auth-container";
import contextImage from "../../../public/assets/ai-help/context.svg";
import historyImage from "../../../public/assets/ai-help/history.svg";
import turboImage from "../../../public/assets/ai-help/turbo.svg";

import "./teaser.scss";

export function AIHelpTeaser() {
  return (
    <div className="ai-help-teaser">
      <Container extraClasses="ai-help-teaser-top">
        <div>
          <h1>
            Utilise AI Help to <em>boost</em> your productivity
          </h1>
          <p>Receive MDN-sourced answers complete with consulted links</p>
          <Login placement="top" />
        </div>
        <figure>
          <img
            src="/assets/plus-docs/ai-help/ask-question.png"
            alt="Screenshot of AI Help"
          />
        </figure>
      </Container>
      <div className="ai-help-teaser-features">
        <Container>
          <h2>New Additions</h2>
          <div className="ai-help-new-additions">
            <figure>
              <img src={historyImage} alt="" />
              <figcaption>
                <h3>History</h3>
                <p>Save your history to revisit your chats at anytime</p>
              </figcaption>
            </figure>
            <figure>
              <img src={contextImage} alt="" />
              <figcaption>
                <h3>Enhanced Context</h3>
                <p>Ask queries about browser compatibility data</p>
              </figcaption>
            </figure>
            <figure>
              <img src={turboImage} alt="" />
              <figcaption>
                <h3>Turbo-Powered</h3>
                <p>Now based on GPT-4 Turbo for peak performance</p>
              </figcaption>
            </figure>
          </div>
        </Container>
      </div>
      <Container extraClasses="ai-help-teaser-bottom">
        <h2>Boost Your Productivity with AI-Assisted Help on MDN</h2>
        <ul className="highlights">
          <li>
            <em>Direct Access to Information</em>: We provide the verified links
            checked by AI for your answers, enabling you to dive directly into
            them at your preferred pace for a comprehensive understanding.
          </li>
          <li>
            <em>Summarised Insights</em>: We provide quick, concise summary of
            your questions, making it easy to grasp key points without extensive
            reading.
          </li>
          <li>
            <em>Interactive Learning</em>: We've integrated this with our
            Playground feature, allowing you to directly experiment with the
            code provided, verify solutions, and enhance your understanding
            through practical application.
          </li>
        </ul>
        <Login placement="bottom" />
      </Container>
    </div>
  );
}

function Login({ placement }: { placement: "top" | "bottom" }) {
  return (
    <AuthContainer
      logInGleanContext={`${AI_HELP}: banner-login ${placement}`}
      signUpGleanContext={`${AI_HELP}: banner-signup ${placement}`}
    />
  );
}
