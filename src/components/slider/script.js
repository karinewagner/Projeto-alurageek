const SCROLL_VELOCITY = 2;

const forward = (parentElement, child, index, velocity = SCROLL_VELOCITY) => {
  const parent = document.querySelectorAll(parentElement)[index];
  const items = parent.querySelectorAll(child);
  const gapSize = items[0].getBoundingClientRect();

  const scroll = {
    fixed: parent.scrollLeft,
    change: parent.scrollLeft
  };
  
  const gap = items[1].getBoundingClientRect().left - gapSize.left - gapSize.width;
  
  const animate = () => {
    if (scroll.change <= gapSize.width + scroll.fixed + gap) {
      scroll.change += velocity;
      parent.scroll(scroll.change, 0);
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const backward = (parentElement, child, index, velocity = SCROLL_VELOCITY) => {
  const parent = document.querySelectorAll(parentElement)[index];
  const items = parent.querySelectorAll(child);
  const gapSize = items[0].getBoundingClientRect();

  const scroll = {
    leftBar: parent.scrollLeft,
    size: gapSize.width,
    gap: -(items[1].getBoundingClientRect().left - gapSize.left - gapSize.width)
  };

  const animate = () => {
    if (scroll.leftBar > 0 && scroll.size > scroll.gap) {
      scroll.leftBar -= velocity;
      scroll.size -= velocity;
      parent.scroll(scroll.leftBar, 0);
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export const slider = () => {
  const cards = document.querySelectorAll('.cards');
  const contentCards = document.querySelectorAll('.content_card');

  document.querySelectorAll('.avancar').forEach((el, index) => {
    el.addEventListener('click', () => forward(cards, contentCards, index));
  });

  document.querySelectorAll('.voltar').forEach((el, index) => {
    el.addEventListener('click', () => backward(cards, contentCards, index));
  });
};
