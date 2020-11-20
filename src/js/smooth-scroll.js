///Smooth Scrolling/

function toScroll(height) {
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  });
}

export { toScroll };
