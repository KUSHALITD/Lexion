
export type CategoryId = 'hygiene' | 'relevance' | 'sales' | 'differentiator' | 'powerhouse';

export interface Answer {
  text: string;
  points: number;
}

export interface Question {
  id: string;
  text: string;
  category: CategoryId;
  answers: Answer[];
}

export interface UserInfo {
  name: string;
  fullName: string;
  companyName: string;
  email: string;
}

export interface QuizState {
  userInfo: UserInfo | null;
  answers: Record<string, number>;
  currentQuestionIndex: number;
  isComplete: boolean;
}

export interface ScoreBreakdown {
  category: CategoryId;
  label: string;
  description: string;
  score: number;
  maxScore: number;
  percentage: number;
  status: 'Needs Improvement' | 'Proficient' | 'Master';
}
