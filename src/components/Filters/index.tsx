import type { FC } from 'react';
import { Radio } from 'antd';
import type { IFiltersProps } from './Filters.typings';

export const Filters: FC<IFiltersProps> = (props) => {
  const { onFilterChange } = props;

  return (
    <div>
      <Radio.Group block defaultValue="all">
        <Radio.Button value="all" onClick={() => onFilterChange('all')}>
          All
        </Radio.Button>
        <Radio.Button value="active" onClick={() => onFilterChange('active')}>
          Active
        </Radio.Button>
        <Radio.Button
          value="completed"
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};
