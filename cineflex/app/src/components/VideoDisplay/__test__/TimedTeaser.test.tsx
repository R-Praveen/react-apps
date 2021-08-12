import React from "react";

import { render, fireEvent, act } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import { CONSTANTS } from "../../../constants/constants";
import { withAdTimer } from "../../../hocs/WithAdTimer/WithAdTimer";
import VideoDisplay from "../VideoDisplay";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

const { TIMED_TEASER, TEASER_POSTERS } = CONSTANTS;

const TeaserWithAdTimer = withAdTimer(VideoDisplay, {
  adDuration: TIMED_TEASER.AD_DURATION,
  adBanners: TIMED_TEASER.AD_BANNERS,
  interval: TIMED_TEASER.INTERVAL,
  forVideo: true,
  messages: { adStart: TIMED_TEASER.AD_START, adStop: TIMED_TEASER.AD_STOP },
});

const TimedTeaser = () => (
  <TeaserWithAdTimer
    videoSrc={"https://www.w3schools.com/tags/movie.mp4"}
    type={"video/mp4"}
    poster={TEASER_POSTERS["The Long Ride"]}
    description={"The Long Ride"}
  />
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TimedTeaser />, div);
});

it("functions correctly", () => {
  // VIDEO LENGTH USED FOR TESTING : 12 seconds

  const { getByTestId, queryByTestId } = render(<TimedTeaser />);

  const video = getByTestId(/video/i) as HTMLVideoElement;

  fireEvent.play(video);

  const adTimer = getByTestId(/adTimer/i) as HTMLDivElement;

  const checkFunctionality = () => {
    // Fast-forward 5.6 seconds
    act(() => {
      jest.advanceTimersByTime(5600);
    });

    // Check if timer text changed to advertisement text after 5 seconds
    expect(adTimer.textContent).toBe("Video resumes in 00:02");

    // Check if the adBanner is displayed
    expect(getByTestId(/adBanner/i)).toBeInTheDocument();

    // Check if the video is paused during advertisement.
    expect(video.paused).toBeTruthy();

    // Fast-forward 2.6 seconds
    act(() => {
      jest.advanceTimersByTime(2600);
    });

    // Check if the adBanner is removed
    expect(queryByTestId(/adBanner/i)).toBeNull();

    // Check if timer text changed to video resumption text after 5 seconds
    expect(adTimer.textContent).toBe("Advertisement in 00:05");

    // Check if the video is started playing again.
    expect(video.played).toBeTruthy();
  };

  // For the first time.
  checkFunctionality();

  // For the second time.
  checkFunctionality();
});
