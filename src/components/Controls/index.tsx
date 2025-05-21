import type { FC, PropsWithChildren } from 'react';
import './Controls.scss';

export const Controls: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <div className="controls">{children}</div>;
};
