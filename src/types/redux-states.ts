export interface DUserState {
  email: string;
  access_token: string;
  refresh_token: string;
  role: string;
}
export interface DUserAction {
  type: string;
  payload?: DUserState | undefined;
}

interface IconProps{
  id:number;
  key:string;
  url:string;
  createdAt:string | Date;
  updatedAt: string | Date;
}

interface TaskProps {
  id: string;
  title: string;
  rewardPoints: number;
  link: string;
  icon:IconProps;
}
type SortDirection = "ASC" | "DESC";
interface MetaProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: [string, SortDirection][];
}

export interface DataState {
  id: string;
  status: string;
  completedAt: string | null;
  paidAt: string | null;
  task: TaskProps;
}
export interface DFollowButtonState {
  data: DataState[];
  meta: MetaProps;
  link: {
    current: string;
  };
}

export interface DFollowButtonAction {
  type: string;
  payload?: DFollowButtonState | undefined;
}

export interface DFollowButtonCompletedState {
  id:string;
  status:string;
  completedAt: string | null;
  paidAt: string | null;
}

export interface DFollowButtonCompletedAction {
  type: string;
  payload?: DFollowButtonCompletedState | undefined;
}
