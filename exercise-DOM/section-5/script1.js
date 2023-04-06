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
  
  const title = createElement('h3', null, 'Welcome To My Website!');
  document.body.appendChild(title);