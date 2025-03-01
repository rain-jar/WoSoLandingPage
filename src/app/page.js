"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import styled from "styled-components";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReactPlayer from "react-player";


const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url={`https://stream.mux.com/SN1jGnIte3Q6JAPHji4xa4dB5qwt4t602qO01xnm2Yjcw.m3u8`}
      playing
      controls
      width="100%"
      height="100%"
    />
  );
};


const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    setSubmitted(true);
  };

  return (
    <Container>
      <Header>
        <Logo src="/woso-logo.png" alt="WoSo Fantasy Logo" />
        <Title className={playfair.className}>WoSo Fantasy</Title>
      </Header>
      <Main>
        <Heading>Fantasy Women's Soccer is here!</Heading>
        <Tagline>Because winning starts with a W</Tagline>
        <CarouselContainer>
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 35000 }}>
          <SwiperSlide>
            <VideoWrapper>
              <video controls autoPlay muted playsInline width="100%" height="100%">
                <source src="/app-preview-desktop.mp4" type="video/mp4" />
              </video>
            </VideoWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <VideoWrapper>
              <video controls autoPlay muted playsInline width="100%" height="100%">
                <source src="/app-preview-android.webm" type="video/webm" />
              </video>
            </VideoWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <VideoWrapper>
              <video controls autoPlay muted playsInline width="100%" height="100%">
                <source src="/app-preview-ios.mp4" type="video/mp4" />
              </video>
            </VideoWrapper>
          </SwiperSlide>
        </Swiper>
        </CarouselContainer>
        <Subtitle>2025 Fantasy Season launches on March 7th!</Subtitle>
        <EmailContainer>
          {submitted ? (
            <SuccessMessage>Excited to have you in the WoSo Fantasy world!</SuccessMessage>
          ) : (
            <>
              <EmailInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SubmitButton onClick={handleSubmit}>Keep Me Posted</SubmitButton>
            </>
          )}
        </EmailContainer>
      </Main>
    </Container>
  );
};

export default LandingPage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e1e, #3a3a3a);
  color: white;
`;

const Header = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px; /* Increase height */
  width: auto; /* Maintain aspect ratio */
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: ${playfair.style.fontFamily};

`;

const Main = styled.div`
  text-align: center;
  width: 100%;
  max-width: 700px;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Tagline = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  height: auto;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 5px 5px 10px #62FCDA,
                inset -5px -5px 10px #62FCDA;
    pointer-events: none; /* Ensures it doesn’t block interactions */
    z-index: 10;
  }

  .swiper-slide:nth-child(1) { /* First slide (16:9) */
    aspect-ratio: 16 / 9;
    max-height: 350px; /* Adjust height as needed */
    width: 100%; /* Prevent bleeding */
  }

  .swiper-slide:nth-child(2),
  .swiper-slide:nth-child(3) { /* Second & Third slides (9:16) */
    aspect-ratio: 9 / 16;
    max-height: 400px; /* Adjust height as needed */
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 103%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: contain;
  display: block;
  margin: auto;
  `;

const Subtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  padding: 10px;
  width: 80%;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-bottom: 10px;
    //box-shadow: 0px 1px 5px #62FCDA; /* Soft shadow */
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    box-shadow: 0px 4px 10px #62FCDA; /* Stronger shadow on focus */
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #62FCDA;
    box-shadow: 0px 4px 10px #62FCDA; /* Stronger shadow on focus */
  }
`;

const SuccessMessage = styled.p`
  font-size: 16px;
  color: #4aff4a;
`;
