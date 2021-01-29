import React, { Component, Fragment } from "react";
import PageHead from "src/components/page-head";
import BrisLogos from "src/components/logo-bris";
import Hero from "src/components/hero";
import Content from "src/components/content";

class ConductPage extends Component {
  render() {
    return (
      <Fragment>
        <PageHead title={"Code of Conduct"} />

        <Content>
          <h1>Code of Conduct</h1>

          <p>
            We strive to make ReactBris a safe and welcoming environment for
            everyone. Our events are a reflection of the diversity found within
            the Brisbane tech community; it’s this diversity that makes the
            community so awesome.
          </p>
          <p>
            To maintain this warm and friendly environment, we ask that all
            attendees and community members comply with our Code of Conduct.
          </p>
          <h2>The Code</h2>
          <ol>
            <li>
              Harassment of any kind is not tolerated, either in-person at our
              events or on the various ReactBris social media pages. This
              includes:
            </li>
            <ol>
              <li>
                Discrimination based on (but not limited to) age, sex, gender,
                race, disability, physical characteristics, religious or
                political beliefs
              </li>
              <li>
                Inappropriate or unwelcome physical contact, including unwanted
                sexual attention
              </li>
              <li>Disruptive or aggressive behaviour</li>
            </ol>
            <li>
              Attendees are asked to drink responsibly at any ReactBris event
              where there is alcohol available.
            </li>
            <li>
              Some ReactBris events may have an official photographer taking
              photos. If you are attending and don’t want to be included in any
              photos, please let the photographer know in-person.
            </li>
          </ol>
          <h2>Reporting a violation</h2>
          <p>
            If you are being harassed, see others being harassed, or just have
            some questions or feedback regarding the Code of Conduct, don’t
            hesitate to reach out to an organiser at any time. You can usually
            speak to an organiser in-person at an event, but you can also reach
            us online:
          </p>
          <ul>
            <li>
              <strong>Thomas McCarthy</strong> -{" "}
              <a href="mailto:organisers@reactbris.org?subject=@Tom: <Subject>">
                organisers@reactbris.org
              </a>{" "}
              - <a href="https://twitter.com/iamtommcc">@iamtommcc</a>
            </li>
            <li>
              <strong>Lochlan Bunn</strong> -{" "}
              <a href="mailto:organisers@reactbris.org?subject=@Tom: <Subject>">
                organisers@reactbris.org
              </a>{" "}
              -<a href="https://twitter.com/loklaan">@loklaan</a>
            </li>
          </ul>
          <p>
            Reported violations are taken extremely seriously, and are followed
            up immediately once a report is received.
          </p>
          <h2>Enforcement</h2>
          <p>
            Attendees who are asked by an organiser to stop any harassing or
            disruptive behaviour are expected to comply immediately.
          </p>
          <p>
            Serious or reported violations may result in attendees being asked
            to leave, and these attendees may be barred from attending future
            events.
          </p>
          <p>
            Posts on the ReactBris Meetup page or ReactBris Github which violate
            the Code of Conduct may be deleted.
          </p>

          <small>Last updated 7 April 2019</small>
        </Content>
      </Fragment>
    );
  }
}

export default ConductPage;
