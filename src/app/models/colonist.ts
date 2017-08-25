import { Job } from './job';

export interface NewColonist {
  name: string;
  age: string;
  job_id: string;
}

export interface Colonist {
  id: number;
  name: string;
  job: Job;
  age: number;
}
