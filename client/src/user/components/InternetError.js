import React, { useEffect } from "react";
import { useAlert } from "react-alert";
const InternetError = () => {
  const alert = useAlert();
  let count = 0;

  useEffect(() => {
    return () => {
      count++;
      if (count % 2 !== 0) alert.error("NETWORK DISCONNECTED  !");
      else alert.success("NETWORK CONNECTED  !");
      alert.removeAll()
    };
  }, [useAlert()]);

  return (
    <center>
      <svg
        style={{ margin: "10px" }}
        className="img-fluid"
        height="350px"
        fill="none"
        viewBox="0 0 304 211"
      >
        <path
          d="M13 60.6h244.1c7.1 0 12.9 5.8 12.9 12.9v123.9c0 7.1-5.8 12.9-12.9 12.9H13c-7.1 0-12.9-5.8-12.9-12.9V73.6c0-7.2 5.8-13 12.9-13z"
          fill="#F0F0F0"
        ></path>
        <path d="M260 60.7h-6.7V200h6.7V60.7z" fill="#fff"></path>
        <path
          d="M260 111v11.8s-2.7 2.3-4.7 4v68.5h-2V111h6.7z"
          fill="#9B9B9B"
        ></path>
        <path d="M260 61.7v138.2h-6.7V62.7" stroke="#4B4350"></path>
        <path d="M20.5 60.7h-6.7V200h6.7V60.7z" fill="#fff"></path>
        <path d="M15.8 60.7h-2V200h2V60.7z" fill="#9B9B9B"></path>
        <path d="M20.6 61.7v138.2h-6.8V63.5" stroke="#4B4350"></path>
        <path
          d="M81.9 132s-8.6 5.6-2.5 16.2l2.5-16.2zm160.4-27.1c1.6-.5 3.2-1 4.8-1.7 1.1-.6.7-2.1 1.5-3.1s3.2-1.1 3.2-1.1-2.2 3.4-3.5 5c-1.2 1.5-1.4 7.6 6.1 16.8l-1.5 1.9-10.6-17.8z"
          fill="#E8A64A"
        ></path>
        <path
          d="M302.3 21.1c0-.2-.1-.5-.2-.7-.6-.3-1.2-.4-1.8-.1-1.8 1.8-5.4 18.7-7.7 19.8-1.2.5-2.4 1-3.6 1.4-2.9 1-5.8 2-8.7 3.1.6-1 .9-2.2.9-3.5-.1-1-1-1.8-2-1.7-.1 0-.3 0-.4.1-.8 2.2-2.2 3.1-2.7 5.6-.2.7-.3 1.5-.4 2.3.3.8 1.1 1.2 1.8 1.6 2.7 1.6 4.8 4 5.8 6.9h.1c-5.9 8.8-12.9 16.9-20.7 24.1-3.3 3.1-6.8 5.9-9.4 9.5-3.7 5.1-5.7 11.7-10.9 15.4 2.4 6.5 6 12.5 10.6 17.8 1.1-1.6 2.4-3.1 4-4.4 9.6-6.5 17-15.8 22.7-25.8s9.5-21.1 13.6-31.8c2.8-5.7 7.7-10.8 7.4-17.1-.3-2.5 1.7-20 1.6-22.5z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="M283.5 56s1.6.5 3.3-2.8c0 0-3.3 2.8-2.3 3.8s-17.8 22.2-22 26c-9 8-13 16-15 20-1.2 2.5 1.2 7.5 5.1 10.5 2.4 1.8 5.3 2.8 8.2 1.9l-5.2 4-2.3 2.1-9.7-16.6.3-1.3 5.6-7.6 4-7 16-16 8-9 6-8z"
          fill="#E5E5E5"
        ></path>
        <path
          d="M288.5 57s8 0 12-13c0 0 .8 4.5-6.6 15.3l-10 24.7-7.9 14.2-11.4 13.8-5.8 4.9s-7.5-.7-8.9-2.8-2.2-7.1-2.2-7.1 4.8 8 16.8-5 20-26 24-37c0 0 4-8 0-8zm12-19-20.3 6.5-.8 2.1s4.3-.6 6.5 2.9c0 0-7.5 8.5 2.5 7.5 0 0-2.9-3-2-6 .9-3.2 5.8-6.4 14-9v-4h.1z"
          fill="#E5E5E5"
        ></path>
        <path
          d="M302.3 21.1c0-.2-.1-.5-.2-.7-.6-.3-1.2-.4-1.8-.1-1.8 1.8-5.4 18.7-7.7 19.8-1.2.5-2.4 1-3.6 1.4-2.9 1-5.8 2-8.7 3.1.6-1 .9-2.2.9-3.5-.1-1-1-1.8-2-1.7-.1 0-.3 0-.4.1-.8 2.2-2.2 3.1-2.7 5.6-.2.7-.3 1.5-.4 2.3.3.8 1.1 1.2 1.8 1.6 2.7 1.6 4.8 4 5.8 6.9h.1c-5.9 8.8-12.9 16.9-20.7 24.1-3.3 3.1-6.8 5.9-9.4 9.5-3.7 5.1-5.7 11.7-10.9 15.4 2.4 6.5 6 12.5 10.6 17.8 1.1-1.6 2.4-3.1 4-4.4 9.6-6.5 17-15.8 22.7-25.8s9.5-21.1 13.6-31.8c2.8-5.7 7.7-10.8 7.4-17.1-.3-2.5 1.7-20 1.6-22.5z"
          stroke="#4B4350"
        ></path>
        <path
          d="m302.2 10.3-.8 1.8-10.2 7-4.9 25.6-2 4.3 1.1.5 12.2-8.4 5.9-30.4-1.3-.4z"
          fill="#302B33"
        ></path>
        <path
          d="M302.2 10.3 290 18.6 284.1 49l12.2-8.4 5.9-30.3z"
          fill="#4B4350"
        ></path>
        <path
          d="m301.3 12.1-11 7.6-5.3 27.5 11-7.6 5.3-27.5z"
          fill="#fff"
        ></path>
        <path
          d="M290.4 37.9c-.1-.1-.3-.2-.3-.4-.1-.2 0-.5 0-.7l.3-.9c.1-.3.3-.6.5-.9s.4-.6.7-.8c.2-.2.5-.5.8-.7.2-.1.5-.2.7-.3.2 0 .4 0 .5.1s.3.2.3.4c.1.3.1.5 0 .8s-.1.6-.3.9c-.1.3-.3.6-.5.9s-.4.6-.7.8c-.2.2-.5.4-.8.6-.2.2-.5.3-.7.3h-.2c-.1 0-.2-.1-.3-.1zm2.1-15.7 3.6-2.3-2.5 11.5-2.1 1.5 1-10.7z"
          fill="#E7364D"
        ></path>
        <path
          d="M302.5 29.3c-.2-.3-.5-.5-.8-.6-1.5-.9-3.9-1.9-5.6-2.7-.1-.1-.3-.1-.4-.1s-.2.1-.3.2c-.5.7-.5 1.6-.1 2.3.5.7 1.2 1.2 2 1.5s1.6.5 2.3.9c0 .2-.1.4-.1.6-1.1-.5-2.2-.9-3.2-1.4-.1-.1-.3-.1-.4-.1s-.2.1-.3.2c-.5.6-.6 1.5-.1 2.2.5.6 1.2 1.1 1.9 1.4.8.3 1.5.5 2.3.9 0 .2-.1.4-.1.6-.3 0-.7 0-1 .2l-1.5.4-1.8.5c-.3.1-.5.2-.7.4-.3.4-.4.9-.1 1.3.2.4.6.7 1.1.8.4.1.9 0 1.3-.1l2.8-.5h.1c.3 1.6.4 3.8.7 4.4.4-1.7 1.4-6.6 1.7-8.3.1-.4.1-.8-.1-1.1.2-.9.3-1.7.4-2.3.2-.8.1-1.2 0-1.6z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="M188.6 93.6c-1.3-.4-2.6-1-3.9-.6-1.2.4-2 1.4-2.1 2.6s.5 2.4 1.6 3 2.3.7 3.4.1c1.5-.8 2.6-2.4 4.2-2.4.6.1 1.2.1 1.8 0 .6-.3 1-.9.9-1.6s-.3-1.3-.7-1.8c-.1-.3-.4-.4-.6-.6-.6-.2-1.2 1.1-1.8 1.3-.8.3-1.9.3-2.8 0z"
          fill="#fff"
        ></path>
        <path d="M20.2 136.3v-11.8H9.5l1.5 11.8" stroke="#4B4350"></path>
        <path
          d="M13.5 133.7h4.1s.3 2.4 2.6 2.4v-14.8h-6.7v12.4z"
          fill="#D6DDE5"
        ></path>
        <path
          d="M81.9 132c-7-2.8-14.4-4.4-21.9-4.9-11.1-.8-25.7-2.2-36.8-3.1h-.1l-2.4-2.7c-.4-.5-.8-.9-1.4-1.2-1.2-.5-2.6-.4-3.8 0l-3.7 1c-.1 0-.2.1-.3.1-.3.2-.2.7.1 1 .6.7 1.6 1.1 2.6 1s1.9-.4 2.8-.8c.1 1.9.8 3.7 2.1 5.1.2.2.4.4.5.7s.1.5 0 .8c-.2 1.2-.4 2.4-.5 3.6s.3 2.5 1.2 3.4c1 .1 2.1-.1 3-.5 17.2 4.3 21 9 32.1 11.3 8 1.6 16.1 2 24.2 1.3-1.2-5.4-.3-11.1 2.3-16.1z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="M19 133.5s2 2 4 0l1-3s0 2 2 3 18 5 24 7 28.4 7.4 30.2-4.3c0 0-2.2 7.3-.2 12.3 0 0-17 0-25-2s-21.2-7.6-21.2-7.6L23 135.5s-4 2-4-2z"
          fill="#E5E5E5"
        ></path>
        <path
          d="M81.9 132c-7-2.8-14.4-4.4-21.9-4.9-11.1-.8-25.7-2.2-36.8-3.1h-.1l-2.4-2.7c-.4-.5-.8-.9-1.4-1.2-1.2-.5-2.6-.4-3.8 0l-3.7 1c-.1 0-.2.1-.3.1-.3.2-.2.7.1 1 .6.7 1.6 1.1 2.6 1s1.9-.4 2.8-.8c.1 1.9.8 3.7 2.1 5.1.2.2.4.4.5.7s.1.5 0 .8c-.2 1.2-.4 2.4-.5 3.6s.3 2.5 1.2 3.4c1 .1 2.1-.1 3-.5 17.2 4.3 21 9 32.1 11.3 8 1.6 16.1 2 24.2 1.3-1.2-5.4-.3-11.1 2.3-16.1z"
          stroke="#4B4350"
        ></path>
        <path
          d="M8.5 124.4c-.5.1-1 .4-1.5.8-.4.4-.6.9-.4 1.4.3.5.8.8 1.4.8s1.2-.1 1.7-.3l1.8-.6c.3-.1.7-.2 1-.4.5-.3.7-.9.7-1.4-.1-2.1-3.4-.7-4.7-.3zm2.1 5.8c-.6.1-1.1.3-1.5.7-.4.3-.6.9-.5 1.4.2.5.8.9 1.3.9.6 0 1.2 0 1.7-.2l1.9-.5c.4-.1.7-.2 1-.4.5-.3.8-.8.8-1.4 0-2.1-3.4-.8-4.7-.5zm-.2 3.7c-.4.1-.8.3-1.1.6s-.5.8-.4 1.2.5.7 1 .8c.4 0 .9 0 1.3-.2l1.4-.4c.3-.1.5-.2.8-.3.4-.3.6-.7.6-1.2-.2-1.9-2.7-.8-3.6-.5z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="M7.7 128.3c-.1.4 0 .9.3 1.2.1.2.3.4.5.5s.4.1.5.1c2.4.1 4.7-.5 6.7-1.9.2-.1.4-.3.5-.5s0-.5-.1-.7c-.1-.3-.2-.5-.3-.8-.1-.1-.1-.2-.2-.3-.2-.1-.3-.1-.5-.1-1.4.2-2.8.4-4.2.8-1.1.3-3 .6-3.2 1.7z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="m273.6 8.9 10.5 7.9-12.6-1.9 2.1-6zm13.7 4L279.7 3l5.8-3 1.8 12.9zm5.3-1.9.7-8.5 4.9 1.6-5.6 6.9zm-8.5 10.7-7.7 2.2 2 4.2 5.7-6.4zM177.6 210.5c8.7-18.7 20.3-41.4 22.3-44.2 11.4-16.2 32.8-28.3 48.9-39.9.9 0 1.9 0 2.8-.1l-.3-1.7 2-.4c-.1-.6.5-1.7.2-2.2-3-5-8.2-12.5-10.3-17.9-.6-.1-1.2 0-1.6.3l-.8-1.1c-.6 1.1-1.6 1.8-2.8 2-.1.5-.1 1 .2 1.4-1 .1-1.7 1-1.7 1.9-4.6 3.5-15.3 6.5-23.6 10.5-5.1 1.1-13.4-1.5-26.2 9.1-1.5 1.2-22.9.6-30.6-4.4-3.9-2.6-10.4-6.2-16-6.5-9.5-.4-15.8 6.2-18.1 6.8l-24.8 6.6c-2.6.7-5.8 1.3-7.8-.7l-1 1.3-1.1-1.7c-.6.3-1 .8-1.3 1.4.3-.7-.5-1.5-1.2-1.4-.8.2-1.3 1-1.2 1.8l-1.2-1.3c-4.9 7-5.2 16.2-.9 23.6.6-.2 1.1-.7 1.2-1.4.5.3.7.9.6 1.4.5-.3.9-.8 1.1-1.4.1.3.4.6.7.7.7.3 1.5 0 1.8-.7.4.9 1.6 1.1 2.6 1.2 10.3.7 21.5 1.8 31-2.3 0 0-21.8 58.9-21.9 59.3"
          fill="#E7364D"
        ></path>
        <path
          d="M85.5 143s24 6 38-4l-3 12s-13 6-30 2h-7l-2.5-.1s-2.6-3.9-2.5-9.9.8-6.1.8-6.1.2 5.1 6.2 6.1z"
          fill="#B21D3D"
        ></path>
        <path
          d="M123.5 210h54.1l20.5-40.6s3.3-11.5 39.8-35.4l10.6-7.9h3v-1l2-1-.2-2.5-7-11.4s7.2 13.9-27.8 23.9c-24.6 7-18 21-42 36-10.9 6.8-29.8 11.9-18 3 8-6 11-10 8-10-8.1 0-73 54-55 12l-12.9 35.5 24.9-.6z"
          fill="#CC234F"
        ></path>
        <path
          d="M179 207.5c8.7-18.7 18.9-38.4 20.9-41.2 11.4-16.2 32.8-28.3 48.9-39.9.9 0 1.9 0 2.8-.1l-.3-1.7 2-.4c-.1-.6.5-1.7.2-2.2-3-5-8.2-12.5-10.3-17.9-.6-.1-1.2 0-1.6.3l-.8-1.1c-.6 1.1-1.6 1.8-2.8 2-.1.5-.1 1 .2 1.4-1 .1-1.7 1-1.7 1.9-4.6 3.5-15.3 6.5-23.6 10.5-5.1 1.1-13.4-1.5-26.2 9.1-1.5 1.2-22.9.6-30.6-4.4-3.9-2.6-10.4-6.2-16-6.5-9.5-.4-15.8 6.2-18.1 6.8l-24.8 6.6c-2.6.7-5.8 1.3-7.8-.7l-1 1.3-1.1-1.7c-.6.3-1 .8-1.3 1.4.3-.7-.5-1.5-1.2-1.4-.8.2-1.3 1-1.2 1.8l-1.2-1.3c-4.9 7-5.2 16.2-.9 23.6.6-.2 1.1-.7 1.2-1.4.5.3.7.9.6 1.4.5-.3.9-.8 1.1-1.4.1.3.4.6.7.7.7.3 1.5 0 1.8-.7.4.9 1.6 1.1 2.6 1.2 10.3.7 21.5 1.8 31-2.3 0 0-21.4 57.9-21.5 58.3"
          stroke="#4B4350"
        ></path>
        <g fill="#4C4451" opacity="0.3">
          <path d="m185.2 176.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.8 4.2-5-8.5-4.8 2.3c-.5 1.3-1.2 3.4-2.2 5.9l4.6-2.2 5 8.5.8-.4 8-3.8 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 1 1.7c1-2 1.9-3.8 2.8-5.4l-1.4-2.4-8.9 4.3zm-74.4-29.8-8.9 4.2-5-8.5-8.9 4.2-5-8.5-4.3 2c-.2 1.6-.2 3.3-.1 4.9l1.9-.9 5 8.5 8.9-4.2 3.5 5.9c2.2.1 4.5.2 6.7.1l3.7-1.8.9 1.5c1.8-.2 3.7-.5 5.5-.9l-3.9-6.5z"></path>
          <path d="m181 187.9-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.1 3.9-.2.1-.5.2-.1-.2-4.9-8.3-5 2.4c-.7 1.9-1.4 3.8-2.2 5.9l4.8-2.3 5 8.5.5-.2.1-.1.5-.2.2-.1 7.4-3.5 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2.1.1c.9-1.9 1.9-3.7 2.7-5.5l-.4-.7-8.8 4.2zm43-58.2-8.9 4.2-5-8.5-8.8 4.2-4.5-7.7c-3 1.3-6.3 3.2-10 6.3-.3.3-1.5.4-3.3.5l1.6 2.7 8.9-4.2 5 8.5.8-.4 8.1-3.9 5 8.5 8.9-4.2 4 6.7c4-2.9 8.2-5.7 12.2-8.4l-8.7 4.1-5.3-8.4zm-45.9-1h.2l-.1-.1-.1.1z"></path>
          <path d="m211 145.6-5-8.5-8.1 3.9-.2.1-.5.2-.1-.1-4.9-8.3-8.9 4.2-4.9-8.4h-.2l-8.8 4.2-3.3-5.6c-1.8-.4-3.5-.8-5.1-1.3l-5.5 2.6-4.6-7.9c-.2-.1-.5-.3-.7-.4l-8.5 4-4.1-6.9c-6.4.6-11 4.2-13.8 5.9l1.6 2.8.5-.2.1-.1.5-.2.2-.1 7.4-3.5 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5.5-.2.1-.1.5-.2.2-.1 7.4-3.5 5 8.5 8.9-4.2.4.7c1.4-1.1 2.7-2.1 4.1-3.2l-2.1-3.6-8.7 3.8z"></path>
          <path d="M150 120.3c.3.1.5.2.7.4l-.3-.6-.4.2zm101.4-1.8-.2.1-3.3-5.7c-.6-.9-1.1-1.9-1.7-2.8l-8.9 4.2-2.6-4.5c-1.3.8-2.9 1.5-4.6 2.3l4.8 8.2 8.9-4.2 5 8.5 4.8-2.3c0-.1 0-.3-.1-.4-.6-1-1.3-2.2-2.1-3.4zm-5.1-8.4c.5.9 1.1 1.9 1.7 2.8l-1.7-2.8zm-20.7 3.8c-1.5.6-3.1 1.2-4.8 1.9l.2.3 4.6-2.2z"></path>
          <path d="m233.2 126-5-8.5-8.9 4.2-2.6-4.3c-1.3.6-2.6 1.1-3.8 1.7-.3.1-.7.1-1.1.2l5 8.5 8.9-4.2 5 8.5 8.9-4.2 2 3.5c1.4-1 2.9-2 4.2-2.9l-3.8-6.6-8.8 4.1z"></path>
          <path d="m203.6 123.3.2-.1.5-.2.2-.1 7.4-3.5c-2.7.3-6.1 0-10.5 1.1l1.8 3.1.4-.3zm-1.6 25.4-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.8 4.2-5-8.5-8.9 4.2-4-6.9-9.8 2.6h-.1l-5.2 1.4 2.7 4.7 8.9-4.2 5 8.5 8.9-4.2 5 8.5.8-.4 8-3.8 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 4 6.8c1.4-1.7 3-3.3 4.6-4.9l-1.2.6-4.9-8.6z"></path>
          <path d="m189 164.7-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.1 3.9-.2.1-.5.2-.1-.2-4.9-8.3-8.9 4.2-5-8.5-8.9 4.2-5-8.5-8.9 4.2-2.6-4.4-.7.9-1.1-1.7c-.6.3-1 .8-1.3 1.4.3-.7-.5-1.5-1.2-1.4-.8.2-1.3 1-1.2 1.8l-1.2-1.3c-.9 1.4-1.7 2.8-2.3 4.3l4.2-2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5.5-.2.1-.1.5-.2.2-.1 7.4-3.5 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 5 8.5 8.9-4.2 2.2 3.8c1.1-2 1.9-3.4 2.3-4 .2-.3.5-.7.7-1l-2.8-4.8-8.8 4z"></path>
        </g>
        <path
          d="M190.5 95.8c-1.1.8-1.5 2.4-2.8 3-.5.2-2.9.6-3-.5.2 1.2 0 2.4-.4 3.5-.5 1.1-1.9 1.8-3 1.4-.6 2.7-4.5 3.9-6.4 2-1.9 2.9-5.6 3.8-8.6 2.2-.1.1-.2.3-.4.4-1.5 1.5-3.8 1.5-5.3 0-3.2 2.4-7.8 2.1-10.6-.9-.1 0-.1 0-.2.1-1.5.3-3-.7-3.3-2.2-1.6.5-3.4-.2-4.1-1.8-.2.1-.4.2-.7.2-2 .5-4-.8-4.4-2.7h-.7c-2.3-.1-4.1-2.1-4-4.4-.2-.1-.5-.1-.7-.2-2.5-1-3.8-3.8-2.8-6.3-2.7-.4-4.1-4.2-2.3-6.3-.2-.1-.5-.3-.7-.4-1.8-1.4-2.2-4-.8-5.8-2.2-1.3-3-4.2-1.8-6.5-2.2-1-2.3-4.6-.3-5.8-.9-.4-1.6-1.2-1.8-2.1-.3-1.6.7-3.1 2.3-3.4 0 0 0-.1-.1-.1-1.1-2.4-.1-5.3 2.4-6.5-.2-.3-.3-.6-.4-.9-.4-1.6.6-3.2 2.1-3.6-.9-2.6 1.6-5.6 4.3-5.3-.4-2.5 2.6-4.9 5-4 .7-2.6 4.4-3.7 6.4-1.9.5-2.8 4.3-4.2 6.5-2.4.3-2.5 4-3.7 5.7-1.9 1.2-2.5 5.4-2.8 7-.5 1.8-1.8 4.7-1.9 6.6-.2.3.4.7.7 1.1.9.7.2 1.4-.1 2.1-.2 1.6-.2 3.1 1 3.3 2.7 2.3-1.7 6.1-.3 6.8 2.5h.8c2.1.2 3.7 2.1 3.5 4.2h.6c2.1.1 3.8 1.9 3.7 4 1.5.5 3.2 1 4.2 2.3s.9 3.5-.6 4.1c.8.4 1.4 1 1.8 1.8.8 1.8 0 3.8-1.8 4.6 2.6 1.4 3 5.8.6 7.6 2.1.5 2.9 3.8 1.2 5.2 2.3 1.2 2.1 5.2-.3 6.2 2 1.7 1.6 5.5-.8 6.8.2.2.4.5.5.8.9 1.8.1 4-1.7 4.9 1.7 2.9-1.8 4-3.7 5.4z"
          fill="#4B4350"
        ></path>
        <path
          d="M188.8 108.2c-.6 1.8-1.3 17.1.2 18.3 4 3-2.1 9.8-13.3 10.3-12.3.5-21.9-8.9-18.3-10.5 1.9-1 3.2-3.6 3.8-5s-1.6-21.2-2.2-23.8c9-.7 20.7 10.4 29.8 10.7z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="m160 101.5 1.7 18.1s-1.1 3.8-1.9 4.8l-3.1 2.7 1.3 2.8 6.2 4.4 8.4 2.3 7.9-.5 6.3-2.6 3.2-3.7-.2-2.3-1.3-1.8-.4-3.1s.8 7-5.2 8-18-1-17-3 2-2 1-8-2.5-10.8-2.5-10.8l-3.6-3.1-.8-4.2z"
          fill="#E5E5E5"
        ></path>
        <path
          d="M188.8 108.2c-.6 1.8-1.3 17.1.2 18.3 4 3-2.1 9.8-13.3 10.3-12.3.5-21.9-8.9-18.3-10.5 1.9-1 3.2-3.6 3.8-5s-1.6-21.2-2.2-23.8c9-.7 20.7 10.4 29.8 10.7z"
          stroke="#4B4350"
        ></path>
        <path
          d="M160.5 102s4.6 5.1 4 6c8 18 24 11.5 24 11.5-.6-2.9.2-11.2.2-11.2-12-2-28.2-6.3-28.2-6.3z"
          fill="#4B4350"
        ></path>
        <path
          d="M154.3 102.3c-1.9.3-3.9-.4-5.2-1.7-1.6.5-3.3.3-4.7-.6-1.3-.7-2.4-2-2.8-3.5-2.5.2-4.7-1.6-5-4.1-.6-.1-1.2-.3-1.7-.6-2-1.2-2.6-3.7-1.4-5.7-.5-.1-.9-.3-1.3-.6-2.1-1.5-2.7-4.4-1.2-6.5-.4-.2-.7-.4-1-.6-2-1.6-2.4-4.5-.9-6.5-1.2-.8-1.9-2-2-3.5 0-1.2.5-2.3 1.3-3.1-.2-.1-.4-.3-.6-.5-.8-.8-1.2-2-1.1-3.1.2-1.5 1-2.8 2.3-3.6-1-1.1-1.4-2.7-1-4.1.4-1.5 1.6-2.7 3.2-3.1-.2-1 0-2.1.6-3 1.2-1.9 3.8-2.4 5.7-1.2l.2.2c.1.1.4.3.5.3s.3-.3.4-.4l.3-.3c1.3-1.3 3.3-1.4 5.7-.1.1-.7.3-1.4.7-2 .5-.9 1.4-1.5 2.3-1.8-.1-.7-.1-1.5.2-2.2.8-2.3 3.3-3.4 5.5-2.6.4-.9 1.1-1.7 2-2.1 2-.9 4.4 0 5.4 2 2.3-1.2 5.1-.8 6.9 1 .2-.2.5-.4.7-.5 2.4-1.4 5.4-.7 6.9 1.7.5-.4 1.1-.7 1.7-.8 2.4-.6 4.7.9 5.3 3.3.7-.1 1.4 0 2.1.3.2.1.3.1.5.2 1.8 1 2.4 3.3 1.3 5-.2.5-.6.9-1 1.2 1 .9 1.6 2.1 1.6 3.5.7 0 1.4.1 2 .3 2.7 1 4.1 4.1 3.1 6.9.4.3.8.6 1.1 1 1.4 1.8 1 4.3-.8 5.7.9.9 1.5 2.1 1.6 3.3.3 1.8-.4 3.6-1.7 4.8-.3.3-.9.2-1.1-.1s-.2-.9.1-1.1c.3-.3.5-.5.7-.9 1.1-1.9.4-4.3-1.5-5.3-.2-.1-.4-.3-.4-.5-.1-.4.1-.9.6-1 .7-.2 1.3-.8 1.6-1.5.5-1.3-.2-2.7-1.5-3.2-.2-.1-.4-.3-.5-.5s-.1-.5.1-.7c.5-.8.6-1.7.4-2.6-.4-2-2.4-3.3-4.4-2.8h-.3c-.4-.1-.7-.5-.6-1 .2-1.5-.5-2.9-1.9-3.5-.2-.1-.4-.3-.5-.6-.1-.4.2-.9.6-1 .6-.2 1.1-.6 1.4-1.1.1-.1.1-.2.2-.3.4-1.1-.1-2.3-1.2-2.7-.6-.3-1.2-.3-1.8-.1-.3.1-.5.1-.8-.1-.2-.2-.4-.4-.4-.7 0-.9-.5-1.8-1.2-2.3-1.3-.9-3-.6-3.9.7-.1.2-.3.3-.5.3-.4.1-.9-.1-1-.6-.2-.7-.6-1.4-1.2-1.8-1.5-1.1-3.6-.8-4.8.7-.2.2-.4.3-.7.3s-.5-.2-.6-.4l-.2-.2c-1.5-1.8-4.2-2-5.9-.5-.1.1-.3.2-.4.2-.4.1-.9-.2-.9-.7-.1-1.1-1-2-2.1-2.2-1.3-.2-2.6.7-2.8 2.1 0 .1-.1.2-.1.3-.2.4-.7.5-1.1.2-.8-.5-1.8-.6-2.7-.2-1.4.6-2 2.2-1.3 3.6.1.2.1.5-.1.8-.1.2-.4.4-.7.4-.8 0-1.6.5-2 1.2-.5.7-.6 1.5-.3 2.3.1.3.1.5-.1.8-.3.4-.8.5-1.1.2-1.1-.7-3.7-2.3-5.1-1-.1.1-.1.2-.2.2-.3.5-.9.8-1.5 1-.6 0-1.2-.2-1.6-.6l-.2-.1c-.7-.5-1.6-.5-2.4-.2-1.2.6-1.8 2-1.2 3.3.1.1.1.2.1.3 0 .4-.4.8-.8.8-1 0-1.9.5-2.4 1.4-.8 1.3-.4 3 1 3.8.3.2.4.4.4.7s-.2.6-.5.7c-1.2.5-2.2 1.6-2.4 2.9-.1.7.2 1.3.6 1.8.3.4.8.6 1.2.6.4-.1.8.2.9.7.1.4-.2.9-.7.9-.9.3-1.5 1-1.7 1.8-.3 1.4.5 2.7 1.9 3.1.2 0 .3.2.5.3.3.4.2.9-.2 1.1-.7.5-1.1 1.3-1.2 2.2-.1 1.7 1.1 3.1 2.8 3.3.2 0 .5.1.6.3.3.4.2.9-.2 1.1-.8.6-1.2 1.6-1.2 2.6.1 1.7 1.6 3 3.3 2.9.3 0 .5.1.7.3.3.4.2.9-.2 1.1-.7.5-1.1 1.5-1 2.4.2 1.4 1.4 2.4 2.9 2.2h.3c.4.1.7.5.6 1 0 .3 0 .7.1 1 .4 1.5 2.1 2.4 3.6 2 .1 0 .2-.1.3-.1.4 0 .8.3.9.8 0 .3.1.6.2.9.9 2.3 3.4 3.4 5.7 2.5.3-.2.7-.1 1 .2.5.6 1.1 1 1.8 1.3 2.3.9 4.9-.2 5.8-2.5.1-.2.3-.4.5-.5s.5 0 .7.1c.8.5 1.9.5 2.7 0 .5-.4.9-.9 1-1.6-2.2.7-4.4 1-6.7 1-2 0-3.5-.6-4.1-1.8-2.3.3-4.6-1-5.5-3.2-2.6-.6-4.6-2.7-4.9-5.4v-.3c0-.3-.1-.5-.1-.7-.1-.2-.3-.5-.5-.7l-.1-.1c-1.4-1.5-1.9-3.1-1.6-4.5 0-.2.1-.4.2-.6s.1-.4.2-.6c0-.4-.4-.8-.9-1.2-.2-.2-.3-.3-.4-.5-1-1-1.5-2.5-1.2-3.9.3-1.2 1.1-2.1 2.2-2.6-.4-1.3-.5-2.7-.2-4.1.4-1.5 1.5-2.8 3-3.2-.3-3.8 2.3-7.2 6-7.9-.3-1.6.1-3.2 1-4.6.7-1 1.9-1.5 3.1-1.6.6 0 1.2.1 1.7.4.8-1.4 2.1-2.5 3.7-3 1.7-.6 3.6-.1 4.8 1.3 1.4-1 3.1-1.5 4.8-1.4 1.8.2 3.4 1.3 4.1 3 .3-.1.6-.2.9-.2 2.8-.5 5.5 1.4 6 4.3.6-.1 1.3-.1 1.9.1 2.5.6 3.9 3.2 3.3 5.6 0 .1-.1.2-.1.3-.1.2-.1.5-.1.8.1.1.1.2.2.2l.1.1c.4.5.8 1 1 1.6 1 2.6-.3 5.6-3 6.6-.4.1-.9-.1-1-.5s.1-.9.5-1c.3-.1.6-.3.9-.6 1.5-1.2 1.7-3.5.4-4.9l-.1-.1c-.8-.6-1.1-1.7-.6-2.6l.1-.3c.2-.6.1-1.3-.1-1.9-.6-1.5-2.4-2.3-3.9-1.6-.3.1-.5.1-.8-.1-.2-.2-.4-.4-.3-.7 0-.7-.2-1.4-.5-2-1.1-1.7-3.3-2.2-5-1.1-.1.1-.3.1-.4.1-.4 0-.8-.3-.9-.8-.1-1.5-1.6-2.5-2.9-2.6-1.6 0-3.2.6-4.3 1.7-.2.2-.5.2-.7.2-.3-.1-.5-.3-.6-.5-.4-1.2-2.1-1.7-3.3-1.3-1.4.6-2.6 1.7-3.3 3.1 0 .1-.1.2-.2.2-.3.3-.8.3-1.1-.1-.3-.3-.8-.5-1.2-.5-.7 0-1.4.4-1.8 1-.9 1.2-.8 2.9-.6 4.2 0 .2 0 .5-.2.7s-.4.3-.6.3c-.3 0-.5.1-.8.1-3.1.7-5.1 3.7-4.4 6.8v.3c-.1.4-.5.8-.9.7-1.1-.2-2.1.9-2.4 2-.2 1.4-.1 2.8.4 4.1v.3c0 .4-.4.8-.9.7-.8.1-1.5.6-1.6 1.4-.1.9.2 1.8.8 2.5l.4.4c.8.6 1.2 1.4 1.3 2.3 0 .4-.1.9-.3 1.2-.1.1-.1.3-.1.4-.3 1.2.6 2.4 1.2 3l.1.1c.7.6 1.1 1.5 1.1 2.4v.3c.3 2.1 1.9 3.8 4 4.1.3 0 .6.3.7.6.6 1.8 2.5 2.9 4.4 2.4h.1c.4-.1.9.2 1 .6.2.9 1.7 1.3 2.9 1.3 2.5 0 4.9-.4 7.2-1.3h.1c.4-.1.9.2 1 .6.2.8.1 1.6-.1 2.3-.8 2.1-3.1 3.2-5.2 2.4-.9 1.5-2.3 2.5-4 2.9l-.5.4zm4.2-11.1c-.4.1-.8.1-1.2 0-2-.2-3.7-1.6-4.2-3.5-1.8-.3-3.5-.8-4.7-2.2-.8-1.1-1.1-2.5-.6-3.7.1-.3.2-.5.4-.7-.8-.4-1.4-.9-1.9-1.6-1.5-2.2-1-5.3 1.2-6.8-.5-1.3-.3-2.8.4-4.1.6-1.2 1.6-2.1 2.9-2.5-.1-.3-.1-.7-.1-1 0-2.2 1.7-4 3.9-4 .1-.9.5-1.8 1.2-2.5 1.6-1.5 4.1-1.5 5.7.1.3-.4.6-.7 1-.9 1.9-1.3 4.4-.8 5.7 1.1.5-.4 1.1-.7 1.7-.8 2.1-.4 4.1 1 4.5 3.1 1-.1 2.1.2 2.8.9 1.4 1.3 1.5 3.5.2 5-.3.3-.8.3-1.1 0s-.3-.8 0-1.1c.5-.6.6-1.4.3-2.1-.5-.9-1.6-1.3-2.6-.9-.3.1-.6.1-.8-.1s-.4-.5-.3-.8c.1-.9-.3-1.7-1-2.2-1-.7-2.4-.4-3.1.7-.2.3-.5.4-.8.4s-.6-.3-.7-.6c-.2-.8-.9-1.4-1.7-1.6-1.3-.4-2.7.3-3.1 1.7-.1.3-.4.6-.7.6s-.7-.2-.8-.5c-.4-1-1.5-1.6-2.6-1.5-1.3.2-2.3 1.4-2.1 2.7v.3c-.1.4-.5.7-1 .6-.6-.1-1.2 0-1.8.3-1.1.7-1.5 2.1-.8 3.2.1.1.1.3.1.4 0 .4-.3.8-.8.8-.4 0-.7.2-1.1.3-1.7.8-2.5 2.9-1.6 4.7 0 0 0 .1.1.1.2.4 0 .9-.4 1.1-1 .5-1.7 1.5-1.8 2.7-.1 1.8 1.2 3.4 3 3.6.4 0 .7.3.7.7.1.4-.2.9-.7.9-.4.1-.7.4-.8.8-.3.7-.1 1.5.3 2.1.9 1.1 2.5 1.4 4.3 1.7.4.1.6.3.7.7.2 1.2 1.1 2.3 2.3 2.6 1.6.4 3.3-.6 3.7-2.2.1-.4.6-.7 1-.6s.7.6.6 1c-.7 1.9-2.1 3.3-3.8 3.6z"
          fill="#39323D"
        ></path>
        <path
          d="M181.5 57.2c-2.2 7.8-18.9 12.2-30 13 2.9 2.4 4.1 8.3 4.1 12 0 3.8 4.4 9.2-2.5 8.9-.4-2.1-3-3.3-5-2.6s-3.2 2.9-3.3 5.1c0 2.2.7 4.3 1.9 6 1.2 1.9 4.3 3.1 6.5 3.8s3.5.6 4.5-1.4c5.8 7.4 14 12.3 23.2 14 3.3.6 6.9.7 9.7-1.2 2.1-1.4 3.4-3.6 4.3-5.9 3.3-7.9 3.3-17.1 1.5-25.5-1.4-7.1-12.8-27.7-14.9-26.2z"
          fill="#fff"
          stroke="#4B4350"
        ></path>
        <path
          d="M196.2 83.6S186 63.5 183.1 61.7c0 0-4.9 7.7-21 9.6l-5.7.4s.4 7.5-.5 11.8c0 0 2.9 6.7 1.5 7.9-1.4 1.1 7.3 21.6 30.9 23.8 0 0 1.2 0 3.3-1 0 0-4.1 3.7-12.6 1.4s-14.9-6.5-17.3-9.3l-3.6-4.2s-3.7-3.7-5.3-10.8c0 0 3.5.4 3.9-.9.7-2.1-1.7-9.6-1.8-12-.3-4.9-3.3-7.5-2.5-7.7s5.5-1.2 5.5-1.2l11-2.4s6.8-3.4 8.2-4.3c3.6-2.5 3.9-6.3 5.4-5.3 2.9 1.8 9.2 15.3 9.2 15.3l4.9 9.2-.4 1.6z"
          fill="#E5E5E5"
        ></path>
        <path
          d="M181.5 57.2c-2.2 7.8-18.9 12.2-30 13 2.9 2.4 4.1 8.3 4.1 12 0 3.8 4.4 9.2-2.5 8.9-.4-2.1-3-3.3-5-2.6s-3.2 2.9-3.3 5.1c0 2.2.7 4.3 1.9 6 1.2 1.9 4.3 3.1 6.5 3.8s3.5.6 4.5-1.4c5.8 7.4 14 12.3 23.2 14 3.3.6 6.9.7 9.7-1.2 2.1-1.4 3.4-3.6 4.3-5.9 3.3-7.9 3.3-17.1 1.5-25.5-1.4-7.1-12.8-27.7-14.9-26.2z"
          stroke="#4B4350"
        ></path>
        <path
          d="M147.8 98.8c.1-1.5-.4-3.2-.4-4.8 0-.4.1-.8.2-1.2 0 0 0-.1.1-.1.6-.7 1.7-.8 2.4-.2.7.7 1 1.6.8 2.6-1.1-.1-2.1.7-2.4 1.7-.2 1.1.3 2.2 1.2 2.8s2 .8 3.1.5c.3-.1.5-.1.8 0 .4.2.6.7 1 .7.3-.1.4-.4.4-.6-.1-.3-.3-.5-.5-.6-.4-.3-.9-.6-1.4-.7-.2 0-.5-.2-.6-.3-.2-.3-.2-.7 0-1 .1-.3.4-.6.5-.9.2-.7.1-1.4-.1-2.1-.4-1.4-1-3-2.3-3.8s-3-.5-4.1.7c-1.7 1.9-.5 5.7 1.3 7.3z"
          fill="#E5E5E5"
        ></path>
        <path
          d="M184.9 91.5c-.2.4-.3.9-.3 1.4s.3.9.8 1.1c.4.1.8 0 1.1-.2l3.2-1.5c1.9-.9 4-2 4.7-4.1.2-.6.2-1.2 0-1.7-.7-1.5-4.2-2-5.7-2.3 0 0-.7.4-3.7-4.6"
          stroke="#4B4350"
        ></path>
        <path
          d="M185.3 73.3c-.8.5-1.7-3.7 1.1-6.3 2.8-2.7 3.5.9 3.2 1.8s-3 3.7-4.3 4.5zm-18.1 4.8c-.6-.7.1-3.6 2.5-3.8s9.2 2 8.3 3.2c-.9 1.1-10.8.6-10.8.6zm9.84 10.039c.701-.155.989-1.549.642-3.112-.346-1.564-1.195-2.706-1.896-2.551-.701.155-.988 1.548-.642 3.112s1.195 2.706 1.896 2.551z"
          fill="#39323D"
        ></path>
        <path
          d="M177.12 83.335c.668-.737.944-1.574.616-1.871-.327-.297-1.134.06-1.801.797-.668.736-.944 1.574-.616 1.87.327.297 1.134-.06 1.801-.796zm12.13-6.408c.667-.737.943-1.574.616-1.871-.328-.297-1.134.06-1.802.797-.668.736-.943 1.574-.616 1.87.328.297 1.134-.06 1.802-.796z"
          fill="#39323D"
        ></path>
        <path
          d="M189.34 81.623c.701-.155.988-1.549.642-3.112s-1.195-2.706-1.896-2.551c-.701.155-.988 1.549-.642 3.112.346 1.564 1.195 2.706 1.896 2.551z"
          fill="#39323D"
        ></path>
        <path
          d="M189.1 98.9c-1.2-.2-2.4-.6-3.5-.2-1 .4-1.6 1.4-1.6 2.5s.7 2 1.6 2.5c1 .4 2.1.4 3-.2 1.2-.8 2-2.3 3.5-2.5.5 0 1.1 0 1.6-.2.5-.3.8-.9.7-1.5s-.4-1.1-.7-1.5c-.1-.2-.4-.4-.6-.4-.6-.1-.9 1-1.4 1.3-.9.4-1.8.4-2.6.2z"
          fill="#4B4350"
        ></path>
        <path
          d="m90.1 197.4-2.3 4.5h.2v8h3.3v-8h11.9v8h3.4v-8h11.9v8h3.4v-8h11.9v8h3.4v-8h11.5c.6-1.5 1.3-3.1 1.9-4.5H90.1z"
          fill="#000"
          opacity="0.1"
        ></path>
        <path
          d="M17.2 199.9h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211h3.4v-11.1zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211H63v-11.1zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211h3.4v-11.1zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211h3.4v-11.1zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211h3.4v-11.1zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4v10h3.4v-10zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211h3.4v-11.1zm15.2 0h-3.4V211h3.4v-11.1zm15.3 0h-3.4V211h3.4v-11.1zm15.2 0h-3.4V211h3.4v-11.1z"
          fill="#fff"
        ></path>
        <path
          d="M17.2 199.9h-3.4v5h3.4v-5zm15.3 0h-3.4v5h3.4v-5zm15.2 0h-3.4v5h3.4v-5zm198.3 0h-3.4v5h3.4v-5zm-183 0h-3.4v5H63v-5zm15.2 0h-3.4v5h3.4v-5zm15.3 0h-3.4v5h3.4v-5zm15.2 0h-3.4v5h3.4v-5zm15.3 0h-3.4v5h3.4v-5zm15.2 0h-3.4v5h3.4v-5zm15.3 0h-3.4v5h3.4v-5zm15.2 0h-3.4v5h3.4v-5zm15.3 0h-3.4v5h3.4v-5zm15.2 0h-3.4v5h3.4v-5zm15.3 0h-3.4v5h3.4v-5zm15.2 0h-3.4v5h3.4v-5zm30.5 0h-3.4v5h3.4v-5z"
          fill="#9B9B9B"
        ></path>
        <path d="M273.5 195.5H0v4h273.5v-4z" fill="#fff"></path>
        <path
          d="M268.5 199.9H2.2m-1-4.5h268.3M13.8 210v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210m11.9 0v-10.1h3.3V210m11.9 0v-10.1h3.4V210"
          stroke="#4B4350"
        ></path>
      </svg>
      <h3 style={{ color: "#ff274e", fontFamily: "" }}>
        Please check your internet connection !
      </h3>
    </center>
  );
};

export default InternetError;