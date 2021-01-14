import React from 'react';

import getBackgroundStyles from '../utils/getBackgroundStyles';
import '../css/Image.css';

type Props = {
  imageUrl: string;
  backgroundPosition?: 'top' | 'right' | 'bottom' | 'left' | 'center';
  title: string;
  subTitle?: string;
};

const Image = (props: Props) => {
  const {
    imageUrl,
    backgroundPosition = 'center',
    title,
    subTitle,
  } = props;

  const style = {
    ...getBackgroundStyles(imageUrl),
    backgroundPosition,
  };

  return (
    <section className="image" style={style}>
      <article>
        <h1>{title}</h1>
        {subTitle ? <p>{subTitle}</p> : null}
      </article>
    </section>
  );
};

export default Image;
