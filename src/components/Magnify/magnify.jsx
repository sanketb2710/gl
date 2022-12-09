import React, { useState } from 'react';
import img2 from 'assets/images/img2.png';
import { useRef, useLayoutEffect } from 'react';
import './magnify.css';

const Magnify = ({ img }) => {
  const containerRef = useRef();
  const zoomRef = useRef();
  const lensRef = useRef();
  const [mouse, setMouse] = useState();
  const clens = document.createElement('div');
  console.log(clens, 'clens');
  //     document
  //   .getElementById('img-container')
  //   .addEventListener('mouseover', function () {
  //     imageZoom('featured');
  //   });

  // console.log(imgContainerRef.current, 'imgContainerRef');
  // console.log(lensRef.current, 'imgContainerRef');

  const lensSize = 200;

  function magnify(id, len, zoom) {
    const el = id.current;
    const lens = len.current;
    const copy = el.cloneNode(true);
    // const lens = document.createElement('div');
    //  const lens=React.createElement(
    //   'div',
    //   [props],
    //   [...children]
    // )

    // lens.setAttribute('id', 'lens');
    lens.style.width = lensSize + 'px';
    lens.style.height = lensSize + 'px';

    el.appendChild(lens);
    el.getBoundingClientRect();
    copy.style.zoom = zoom;
    lens.appendChild(copy);
    copy.style.width = el.offsetWidth * zoom + 'px';
    copy.style.heigth = el.offsetHeight * zoom + 'px';
    copy.style.position = 'absolute';

    el.addEventListener('mousemove', ev => {
      ev.preventDefault();
      ev.stopPropagation();
      const pos = getCursorPos(ev);
      lens.style.left = -(lensSize / 2) + pos.x + 'px';
      lens.style.top = -(lensSize / 2) + pos.y + 'px';
      copy.style.left =
        -(pos.x - el.offsetLeft) + (lensSize / zoom) * 0.5 + 'px';
      copy.style.top = -(pos.y - el.offsetTop) + (lensSize / zoom) * 0.5 + 'px';
    });

    // el.addEventListener('mouseleave', ev => {
    //   ev.preventDefault();
    //   ev.stopPropagation();
    //   lens.style.display = 'none';
    // });

    // return () => {
    //   second
    // };
  }

  useLayoutEffect(() => {
    magnify(zoomRef, lensRef, 4);
  }, [mouse]);

  function getCursorPos(e) {
    var x = window.Event
      ? e.pageX
      : e.clientX +
        (document.documentElement.scrollLeft
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft);
    var y = window.Event
      ? e.pageY
      : e.clientY +
        (document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop);
    return { x: x, y: y };
  }

  const mouseLeave = () => {
    setMouse(false);
  };
  const mouseOver = () => {
    setMouse(true);
  };

  console.log(mouse, 'mouse');
  return (
    <div
      className="container"
      ref={containerRef}
      onMouseOut={mouseLeave}
      onMouseOver={mouseOver}
    >
      <div id="lens" ref={lensRef}></div>
      <div id="zoom" ref={zoomRef}>
        <img src={img} />
        {/* <img
          src="https://i.pinimg.com/originals/6b/6b/69/6b6b69d024e696f8d928532edeeb676d.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Magnify;
