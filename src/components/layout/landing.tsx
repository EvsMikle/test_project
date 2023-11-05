import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "./header";

import styled from "styled-components";

const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="home" id="home">
        <div className="cover_home">
          <Header />
        </div>
        <LandingBigText className="big_home_text">
          Phoniex Security Service
        </LandingBigText>
        <LandingSmallText className="small_home_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </LandingSmallText>
        <ButtonStart>
          <p className="button_text">Get Started</p>
        </ButtonStart>
      </div>
      {/* <div className="our_services" id="services">
        <img
          src={"/assets/img/security.png"}
          alt="this is the services png"
          className="png_services"
        />
        <ServiceContainer>
          <ServiceHeader>Our Services</ServiceHeader>
          <ServiceFirstText>
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </ServiceFirstText>
          <ServiceSecondText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </ServiceSecondText>
          <ServiceStartButton>
            <ServiceStartBorder>
              <ServiceStarterText>Get Started</ServiceStarterText>
            </ServiceStartBorder>
          </ServiceStartButton>
        </ServiceContainer>
      </div>
      <div className="why">
        <WhyHeader>Why you should choose us</WhyHeader>
        <WhyContainer className="img_flex">
          <div>
            <img
              src={"/assets/img/why_1.png"}
              alt="This is the why img1."
              className="why_img"
            />
            <div className="why_img_head">Effective</div>
            <div className="why_img_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </div>
          </div>
          <div>
            <img
              src={"/assets/img/why_2.png"}
              alt="This is the why img2."
              className="why_img"
            />
            <div className="why_img_head">Professional</div>
            <div className="why_img_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </div>
          </div>
          <div>
            <img
              src={"/assets/img/why_3.png"}
              alt="This is the why img3."
              className="why_img"
            />
            <div className="why_img_head">Diverse</div>
            <div className="why_img_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </div>
          </div>
        </WhyContainer>
      </div>
      <div className="about" id="about">
        <div className="about_container">
          <div className="text_container">
            <div className="text_container_header">About Us</div>
            <div className="text_container_text1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="text_container_text2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <img
            src={"/assets/img/about.png"}
            alt="This is the about png."
            className="png_about"
          />
        </div>
      </div>
      <div className="clients">
        <div className="clients_header">What clients say</div>
        <div className="client1">
          <img
            src={"/assets/img/client1.png"}
            alt="This is the client1 png."
            className="png_client1"
          />
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
          </div>
        </div>
        <div className="client2">
          <img
            src={"/assets/img/client2.png"}
            alt="This is the client2 png."
            className="png_client2"
          />
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
          </div>
        </div>
        <div className="client3">
          <img
            src={"/assets/img/client3.png"}
            alt="This is the client3 png."
            className="png_client3"
          />
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
          </div>
          <div className="client_say">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="contact_container">
          <div className="contact_text_header">Contact Us</div>
          <div className="contact_text_container">
            <div className="contact_group1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="31"
                viewBox="0 0 42 31"
                fill="none"
              >
                <path
                  d="M41.6667 3.78453C41.6667 1.70304 39.7917 0 37.5 0H4.16667C1.875 0 0 1.70304 0 3.78453V26.4917C0 28.5732 1.875 30.2763 4.16667 30.2763H37.5C39.7917 30.2763 41.6667 28.5732 41.6667 26.4917V3.78453ZM37.5 3.78453L20.8333 13.2459L4.16667 3.78453H37.5ZM37.5 26.4917H4.16667V7.56907L20.8333 17.0304L37.5 7.56907V26.4917Z"
                  fill="white"
                />
              </svg>
              <div className="text1">Chat with Us</div>
              <div className="text2">email address will be placed here</div>
            </div>
            <div className="contact_group2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="37"
                viewBox="0 0 40 37"
                fill="none"
              >
                <path
                  d="M24.0544 2.53015C24.1087 2.34571 24.2025 2.1728 24.3304 2.0213C24.4584 1.8698 24.6179 1.74268 24.7999 1.64719C24.9819 1.55171 25.1829 1.48974 25.3913 1.46482C25.5997 1.4399 25.8114 1.45252 26.0145 1.50196C28.9806 2.20488 31.6869 3.61328 33.8545 5.58209C36.0221 7.5509 37.5728 10.009 38.3467 12.7031C38.4011 12.8875 38.415 13.0798 38.3876 13.2691C38.3601 13.4584 38.2919 13.6409 38.1868 13.8062C38.0816 13.9716 37.9417 14.1165 37.7749 14.2326C37.6081 14.3488 37.4177 14.434 37.2147 14.4833C37.0795 14.5156 36.9404 14.5321 36.8006 14.5324C36.4481 14.5324 36.1054 14.4266 35.8258 14.2315C35.5462 14.0363 35.3454 13.7628 35.2546 13.4533C34.6234 11.254 33.3579 9.24738 31.5885 7.64027C29.8191 6.03315 27.6098 4.88371 25.1884 4.31041C24.9852 4.26127 24.7946 4.17623 24.6276 4.06013C24.4606 3.94404 24.3204 3.79917 24.2151 3.63382C24.1098 3.46848 24.0414 3.28589 24.0138 3.09651C23.9862 2.90713 24 2.71468 24.0544 2.53015ZM23.5884 10.1235C26.3465 10.792 28.1185 12.4015 28.8545 14.9066C28.9453 15.2161 29.1461 15.4896 29.4257 15.6847C29.7052 15.8799 30.048 15.9857 30.4005 15.9857C30.5403 15.9853 30.6794 15.9689 30.8145 15.9366C31.0176 15.8873 31.208 15.8021 31.3748 15.6859C31.5416 15.5697 31.6815 15.4248 31.7867 15.2595C31.8918 15.0942 31.96 14.9117 31.9875 14.7224C32.0149 14.5331 32.001 14.3408 31.9466 14.1564C30.9225 10.6758 28.2465 8.24515 24.4144 7.31506C24.2114 7.26579 23.9997 7.25334 23.7914 7.27839C23.583 7.30345 23.3822 7.36553 23.2003 7.46109C23.0184 7.55665 22.8589 7.68382 22.7311 7.83534C22.6033 7.98686 22.5096 8.15975 22.4554 8.34416C22.4012 8.52856 22.3874 8.72087 22.415 8.91009C22.4426 9.09931 22.511 9.28174 22.6162 9.44697C22.7214 9.6122 22.8614 9.75699 23.0282 9.87307C23.195 9.98915 23.3854 10.0743 23.5884 10.1235ZM39.9767 27.4447C39.6201 29.9063 38.2891 32.1657 36.2324 33.8011C34.1758 35.4365 31.534 36.336 28.8005 36.3315C12.9202 36.3315 1.80976e-05 24.5963 1.80976e-05 10.1726C-0.00488195 7.6898 0.985409 5.29032 2.78593 3.42227C4.58646 1.55422 7.07408 0.345343 9.78419 0.0214315C10.4695 -0.0545731 11.1635 0.0727719 11.7626 0.384457C12.3617 0.696142 12.8337 1.17545 13.1082 1.75083L17.3323 10.3161V10.3379C17.5425 10.7783 17.6293 11.2592 17.585 11.7375C17.5406 12.2159 17.3666 12.6768 17.0783 13.0791C17.0423 13.1282 17.0043 13.1736 16.9643 13.219L12.8002 17.7023C14.2983 20.4672 17.4823 23.3338 20.5664 24.698L25.4345 20.9359C25.4823 20.8994 25.5323 20.8654 25.5845 20.8342C26.0271 20.566 26.5363 20.4024 27.066 20.358C27.5958 20.3135 28.1294 20.3898 28.6185 20.5798L28.6445 20.5907L38.0667 24.4256C38.7013 24.674 39.2303 25.1024 39.5746 25.6466C39.9188 26.1908 40.0599 26.8216 39.9767 27.4447ZM36.8006 27.0814H36.7786L27.3785 23.2575L22.5084 27.0197C22.4612 27.056 22.4118 27.09 22.3604 27.1214C21.8999 27.4004 21.3676 27.5662 20.8155 27.6025C20.2633 27.6388 19.7103 27.5444 19.2103 27.3285C15.4643 25.6845 11.7302 22.3183 9.91819 18.9522C9.67824 18.5014 9.57057 18.002 9.60561 17.5023C9.64065 17.0026 9.81722 16.5196 10.1182 16.1001C10.1521 16.0509 10.1902 16.0041 10.2322 15.9602L14.4003 11.4714L10.2002 2.93343C10.1994 2.92618 10.1994 2.91888 10.2002 2.91163C8.26067 3.14143 6.47988 4.00552 5.19133 5.34208C3.90278 6.67864 3.19483 8.39601 3.20007 10.1726C3.20748 16.3374 5.90705 22.2478 10.7065 26.6071C15.5059 30.9663 22.0131 33.4182 28.8005 33.425C30.7553 33.4311 32.6455 32.7903 34.1179 31.6225C35.5903 30.4546 36.544 28.8397 36.8006 27.0796V27.0814Z"
                  fill="white"
                />
              </svg>
              <div className="text3">Phone</div>
              <div className="text4">phonenumber will be placed here</div>
            </div>
            <div className="contact_group3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="38"
                viewBox="0 0 34 38"
                fill="none"
              >
                <path
                  d="M16.6667 18.9227C17.8125 18.9227 18.7937 18.5518 19.6104 17.81C20.4271 17.0683 20.8347 16.1776 20.8333 15.1381C20.8333 14.0974 20.425 13.2061 19.6083 12.4644C18.7917 11.7226 17.8111 11.3523 16.6667 11.3536C15.5208 11.3536 14.5396 11.7245 13.7229 12.4663C12.9062 13.208 12.4986 14.0987 12.5 15.1381C12.5 16.1789 12.9083 17.0701 13.725 17.8119C14.5417 18.5537 15.5222 18.9239 16.6667 18.9227ZM16.6667 32.8308C20.9028 29.2986 24.0451 26.0893 26.0937 23.203C28.1424 20.3166 29.1667 17.7545 29.1667 15.5166C29.1667 12.079 27.9597 9.26454 25.5458 7.0733C23.1319 4.88205 20.1722 3.7858 16.6667 3.78454C13.1597 3.78454 10.1993 4.88079 7.78542 7.0733C5.37153 9.2658 4.16528 12.0802 4.16667 15.5166C4.16667 17.7558 5.19097 20.3185 7.23958 23.2049C9.28819 26.0912 12.4306 29.2999 16.6667 32.8308ZM16.6667 37.8454C11.0764 33.5247 6.90139 29.5118 4.14167 25.8067C1.38194 22.1017 0.00138889 18.6716 0 15.5166C0 10.7859 1.67569 7.01716 5.02708 4.2103C8.37847 1.40343 12.2583 0 16.6667 0C21.0764 0 24.9569 1.40343 28.3083 4.2103C31.6597 7.01716 33.3347 10.7859 33.3333 15.5166C33.3333 18.6704 31.9528 22.1004 29.1917 25.8067C26.4306 29.5131 22.2556 33.5259 16.6667 37.8454Z"
                  fill="white"
                />
              </svg>
              <div className="text5">Office</div>
              <div className="text6">location will be placed here</div>
            </div>
          </div>
          <div className="group_container">
            <Box
              component="form"
              sx={{ display: "grid", width: "100%", gap: 6 }}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Subject"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rows={6}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="cover_footer">
          <img
            src={"/assets/img/footer_png.png"}
            alt="This is the footer png."
            className="footer_png"
          />
        </div>
        <div className="footer_navbar">
          <div>Home</div>
          <div>Our Services</div>
          <div>About Us</div>
          <div>Clients say</div>
          <div>Contact Us</div>
        </div>
        <div className="footer_text_container">
          <div className="footer_group1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="31"
              viewBox="0 0 42 31"
              fill="none"
            >
              <path
                d="M41.6667 3.78453C41.6667 1.70304 39.7917 0 37.5 0H4.16667C1.875 0 0 1.70304 0 3.78453V26.4917C0 28.5732 1.875 30.2763 4.16667 30.2763H37.5C39.7917 30.2763 41.6667 28.5732 41.6667 26.4917V3.78453ZM37.5 3.78453L20.8333 13.2459L4.16667 3.78453H37.5ZM37.5 26.4917H4.16667V7.56907L20.8333 17.0304L37.5 7.56907V26.4917Z"
                fill="white"
              />
            </svg>
            <div className="footer_text1">Chat with Us</div>
            <div className="footer_text2">email address will be placed here</div>
          </div>
          <div className="footer_group2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="37"
              viewBox="0 0 40 37"
              fill="none"
            >
              <path
                d="M24.0544 2.53015C24.1087 2.34571 24.2025 2.1728 24.3304 2.0213C24.4584 1.8698 24.6179 1.74268 24.7999 1.64719C24.9819 1.55171 25.1829 1.48974 25.3913 1.46482C25.5997 1.4399 25.8114 1.45252 26.0145 1.50196C28.9806 2.20488 31.6869 3.61328 33.8545 5.58209C36.0221 7.5509 37.5728 10.009 38.3467 12.7031C38.4011 12.8875 38.415 13.0798 38.3876 13.2691C38.3601 13.4584 38.2919 13.6409 38.1868 13.8062C38.0816 13.9716 37.9417 14.1165 37.7749 14.2326C37.6081 14.3488 37.4177 14.434 37.2147 14.4833C37.0795 14.5156 36.9404 14.5321 36.8006 14.5324C36.4481 14.5324 36.1054 14.4266 35.8258 14.2315C35.5462 14.0363 35.3454 13.7628 35.2546 13.4533C34.6234 11.254 33.3579 9.24738 31.5885 7.64027C29.8191 6.03315 27.6098 4.88371 25.1884 4.31041C24.9852 4.26127 24.7946 4.17623 24.6276 4.06013C24.4606 3.94404 24.3204 3.79917 24.2151 3.63382C24.1098 3.46848 24.0414 3.28589 24.0138 3.09651C23.9862 2.90713 24 2.71468 24.0544 2.53015ZM23.5884 10.1235C26.3465 10.792 28.1185 12.4015 28.8545 14.9066C28.9453 15.2161 29.1461 15.4896 29.4257 15.6847C29.7052 15.8799 30.048 15.9857 30.4005 15.9857C30.5403 15.9853 30.6794 15.9689 30.8145 15.9366C31.0176 15.8873 31.208 15.8021 31.3748 15.6859C31.5416 15.5697 31.6815 15.4248 31.7867 15.2595C31.8918 15.0942 31.96 14.9117 31.9875 14.7224C32.0149 14.5331 32.001 14.3408 31.9466 14.1564C30.9225 10.6758 28.2465 8.24515 24.4144 7.31506C24.2114 7.26579 23.9997 7.25334 23.7914 7.27839C23.583 7.30345 23.3822 7.36553 23.2003 7.46109C23.0184 7.55665 22.8589 7.68382 22.7311 7.83534C22.6033 7.98686 22.5096 8.15975 22.4554 8.34416C22.4012 8.52856 22.3874 8.72087 22.415 8.91009C22.4426 9.09931 22.511 9.28174 22.6162 9.44697C22.7214 9.6122 22.8614 9.75699 23.0282 9.87307C23.195 9.98915 23.3854 10.0743 23.5884 10.1235ZM39.9767 27.4447C39.6201 29.9063 38.2891 32.1657 36.2324 33.8011C34.1758 35.4365 31.534 36.336 28.8005 36.3315C12.9202 36.3315 1.80976e-05 24.5963 1.80976e-05 10.1726C-0.00488195 7.6898 0.985409 5.29032 2.78593 3.42227C4.58646 1.55422 7.07408 0.345343 9.78419 0.0214315C10.4695 -0.0545731 11.1635 0.0727719 11.7626 0.384457C12.3617 0.696142 12.8337 1.17545 13.1082 1.75083L17.3323 10.3161V10.3379C17.5425 10.7783 17.6293 11.2592 17.585 11.7375C17.5406 12.2159 17.3666 12.6768 17.0783 13.0791C17.0423 13.1282 17.0043 13.1736 16.9643 13.219L12.8002 17.7023C14.2983 20.4672 17.4823 23.3338 20.5664 24.698L25.4345 20.9359C25.4823 20.8994 25.5323 20.8654 25.5845 20.8342C26.0271 20.566 26.5363 20.4024 27.066 20.358C27.5958 20.3135 28.1294 20.3898 28.6185 20.5798L28.6445 20.5907L38.0667 24.4256C38.7013 24.674 39.2303 25.1024 39.5746 25.6466C39.9188 26.1908 40.0599 26.8216 39.9767 27.4447ZM36.8006 27.0814H36.7786L27.3785 23.2575L22.5084 27.0197C22.4612 27.056 22.4118 27.09 22.3604 27.1214C21.8999 27.4004 21.3676 27.5662 20.8155 27.6025C20.2633 27.6388 19.7103 27.5444 19.2103 27.3285C15.4643 25.6845 11.7302 22.3183 9.91819 18.9522C9.67824 18.5014 9.57057 18.002 9.60561 17.5023C9.64065 17.0026 9.81722 16.5196 10.1182 16.1001C10.1521 16.0509 10.1902 16.0041 10.2322 15.9602L14.4003 11.4714L10.2002 2.93343C10.1994 2.92618 10.1994 2.91888 10.2002 2.91163C8.26067 3.14143 6.47988 4.00552 5.19133 5.34208C3.90278 6.67864 3.19483 8.39601 3.20007 10.1726C3.20748 16.3374 5.90705 22.2478 10.7065 26.6071C15.5059 30.9663 22.0131 33.4182 28.8005 33.425C30.7553 33.4311 32.6455 32.7903 34.1179 31.6225C35.5903 30.4546 36.544 28.8397 36.8006 27.0796V27.0814Z"
                fill="white"
              />
            </svg>
            <div className="footer_text3">Phone</div>
            <div className="footer_text4">phonenumber will be placed here</div>
          </div>
          <div className="footer_group3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="38"
              viewBox="0 0 34 38"
              fill="none"
            >
              <path
                d="M16.6667 18.9227C17.8125 18.9227 18.7937 18.5518 19.6104 17.81C20.4271 17.0683 20.8347 16.1776 20.8333 15.1381C20.8333 14.0974 20.425 13.2061 19.6083 12.4644C18.7917 11.7226 17.8111 11.3523 16.6667 11.3536C15.5208 11.3536 14.5396 11.7245 13.7229 12.4663C12.9062 13.208 12.4986 14.0987 12.5 15.1381C12.5 16.1789 12.9083 17.0701 13.725 17.8119C14.5417 18.5537 15.5222 18.9239 16.6667 18.9227ZM16.6667 32.8308C20.9028 29.2986 24.0451 26.0893 26.0937 23.203C28.1424 20.3166 29.1667 17.7545 29.1667 15.5166C29.1667 12.079 27.9597 9.26454 25.5458 7.0733C23.1319 4.88205 20.1722 3.7858 16.6667 3.78454C13.1597 3.78454 10.1993 4.88079 7.78542 7.0733C5.37153 9.2658 4.16528 12.0802 4.16667 15.5166C4.16667 17.7558 5.19097 20.3185 7.23958 23.2049C9.28819 26.0912 12.4306 29.2999 16.6667 32.8308ZM16.6667 37.8454C11.0764 33.5247 6.90139 29.5118 4.14167 25.8067C1.38194 22.1017 0.00138889 18.6716 0 15.5166C0 10.7859 1.67569 7.01716 5.02708 4.2103C8.37847 1.40343 12.2583 0 16.6667 0C21.0764 0 24.9569 1.40343 28.3083 4.2103C31.6597 7.01716 33.3347 10.7859 33.3333 15.5166C33.3333 18.6704 31.9528 22.1004 29.1917 25.8067C26.4306 29.5131 22.2556 33.5259 16.6667 37.8454Z"
                fill="white"
              />
            </svg>
            <div className="footer_text5">Office</div>
            <div className="footer_text6">location will be placed here</div>
          </div>
        </div>
        <div className="footer_decoration">
          <div className="line"></div>
          <div className="text7">All rights @ 2023</div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;

const LandingBigText = styled.h1`
  position: absolute;
  top: 200px;
  left: 119px;
  color: #fff;
  text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-size: 52px;
  font-weight: 700;
  width: 800px;
  @media screen and (max-width: 1200px) {
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 600;
    width: 600px;
    position: absolute;
    top: 220px;
    left: 119px;
  }
  @media screen and (max-width: 1000px) {
    position: absolute;
    top: 232px;
    left: 119px;
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 240px;
    left: 119px;
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 600;
    width: 350px;
  }
  @media screen and (max-width: 470px) {
    position: absolute;
    top: 252px;
    left: 119px;
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    width: 300px;
  }
  @media screen and (max-width: 430px) {
    position: absolute;
    top: 252px;
    left: 88px;
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    width: 300px;
  }
  @media screen and (max-width: 380px) {
    position: absolute;
    top: 272px;
    left: 88px;
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 550;
    width: 240px;
  }
  @media screen and (max-width: 340px) {
    position: absolute;
    top: 280px;
    left: 66px;
    color: #fff;
    text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 550;
    width: 200px;
  }
`;

const LandingSmallText = styled.p`
  position: absolute;
  top: 300px;
  left: 119px;
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  width: 600px;
  @media screen and (max-width: 1200px) {
    color: #fff;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px;
    width: 500px;
  }
  @media screen and (max-width: 1000px) {
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px;
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    color: #fff;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px;
    width: 300px;
  }
  @media screen and (max-width: 470px) {
    color: #fff;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 200;
    line-height: 36px;
    width: 250px;
  }
  @media screen and (max-width: 430px) {
    color: #fff;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 200;
    line-height: 36px;
    width: 250px;
    position: absolute;
    top: 300px;
    left: 88px;
  }
  @media screen and (max-width: 380px) {
    color: #fff;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 150;
    line-height: 36px;
    width: 200px;
    position: absolute;
    top: 320px;
    left: 88px;
  }
  @media screen and (max-width: 340px) {
    color: #fff;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 150;
    line-height: 36px;
    width: 200px;
    position: absolute;
    top: 328px;
    left: 66px;
  }
`;

const ButtonStart = styled.div`
  width: 220px;
  height: 95px;
  background: url("/assets/img/landing_start.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 465px;
  left: 119px;
  @media screen and (max-width: 1200px) {
    width: 180px;
    height: 80px;
    position: absolute;
    top: 460px;
    left: 119px;
  }
  @media screen and (max-width: 1000px) {
    width: 160px;
    height: 70px;
    position: absolute;
    top: 456px;
    left: 119px;
  }
  @media screen and (max-width: 600px) {
    width: 130px;
    height: 55px;
    position: absolute;
    top: 452px;
    left: 119px;
  }
  @media screen and (max-width: 470px) {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 440px;
    left: 119px;
  }
  @media screen and (max-width: 430px) {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 440px;
    left: 88px;
  }
  @media screen and (max-width: 380px) {
    width: 80px;
    height: 35px;
    position: absolute;
    top: 460px;
    left: 88px;
  }
  @media screen and (max-width: 340px) {
    position: absolute;
    top: 468px;
    left: 66px;
  }
`;

const ServiceContainer = styled.div`
  width: 640px;
  height: 380px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
  position: relative;
  top: -270px;
  left: 220px;
`;

const ServiceHeader = styled.h1`
  color: white;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  word-wrap: break-word;
`;

const ServiceFirstText = styled.p`
  color: #c6c6c6;
  font-size: 20px;
  font-family: Poppins;
  word-wrap: break-word;
  width: 640px;
`;

const ServiceSecondText = styled.p`
  color: #c6c6c6;
  font-size: 20px;
  font-family: Poppins;
  word-wrap: break-word;
`;

const ServiceStartButton = styled.div`
  position: relative;
  top: 30px;
  width: 100%;
  height: 100px;
`;

const ServiceStartBorder = styled.div`
  width: 239px;
  height: 55px;
  border: 1px white solid;
`;

const ServiceStarterText = styled.div`
  width: 119px;
  position: absolute;
  left: 88px;
  top: 20px;
  color: white;
  font-size: 20;
  font-family: Montserrat;
  word-wrap: break-word;
`;

const WhyContainer = styled.div`
  margin-top: 80px;
  margin-left: 140px;
  width: 1300px;
  height: 600px;
  display: flex;
`;

const WhyHeader = styled.div`
  color: white;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
`;
