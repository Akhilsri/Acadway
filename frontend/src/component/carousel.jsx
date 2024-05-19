// NoticeBoard.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const notices = [
  {
    id: 1,
    title: 'Notice 1',
    content: 'This is the first notice content.',
  },
  {
    id: 2,
    title: 'Notice 2',
    content: 'This is the second notice content.',
  },
  {
    id: 3,
    title: 'Notice 3',
    content: 'This is the third notice content.',
  },
  {
    id: 4,
    title: 'Notice 4',
    content: 'This is the fourth notice content.',
  },
  {
    id: 5,
    title: 'Notice 5',
    content: 'This is the fifth notice content.',
  },
];

const NoticeBoard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className="slider">
    <Slider {...settings}>
      {notices.map((notice) => (
        <div key={notice.id}>
          <h3>{notice.title}</h3>
          <p>{notice.content}</p>
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default NoticeBoard;
