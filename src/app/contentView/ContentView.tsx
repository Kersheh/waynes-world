import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
import styles from './ContentView.module.scss';

const ContentView = () => {
  const { activeView } = useSelector((state: RootState) => state.app);

  return (
    <div className={styles.contentView}>
      <h1>{activeView}</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id
        tristique arcu, sed fermentum nunc. Sed ultrices mi et turpis lacinia
        elementum. Sed imperdiet tortor arcu. Quisque porta nibh et luctus
        gravida. Mauris mollis, quam non sodales tincidunt, nulla magna
        tincidunt massa, id interdum lectus nulla ac felis. Nunc venenatis dui
        nec interdum rhoncus. Vivamus lectus diam, tincidunt a porttitor in,
        posuere et arcu. Donec consequat justo eu porta ornare. Phasellus
        venenatis lobortis dignissim. Mauris eget eleifend nisl. Sed pharetra
        elit diam, eget condimentum enim tempus vel. Nam sagittis sagittis arcu,
        vel facilisis nibh mollis eu. In egestas ante dolor, vel consectetur mi
        tristique in. Sed et erat auctor enim venenatis ultricies. Cras vitae
        ipsum rutrum, rhoncus eros commodo, placerat felis. Fusce neque sapien,
        gravida ac lacinia quis, pharetra nec quam.
      </p>
    </div>
  );
};

export default ContentView;
