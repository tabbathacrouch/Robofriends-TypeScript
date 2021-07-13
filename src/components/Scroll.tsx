import * as React from 'react';

type Props = {
  children?: JSX.Element
}

const Scroll = (props: Props) => {
  return (
    <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;