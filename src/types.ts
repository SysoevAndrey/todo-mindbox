export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export type TFilter = 'all' | 'active' | 'completed';
