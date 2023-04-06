function createElement(tag, attributes, innerHTML) {
    const element = document.createElement(tag);
    if (attributes) {
      for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
  }
  
  const img = createElement('img', { src: 'https://live.staticflickr.com/65535/52789339936_cc6450c0a2_w.jpg' });
  document.body.appendChild(img);