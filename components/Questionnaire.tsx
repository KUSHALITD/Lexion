
import React, { useEffect } from 'react';
import Header from './Header';
import { Question } from '../types';
import { CATEGORIES } from '../constants';

interface QuestionnaireProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  question: Question;
  onAnswer: (questionId: string, points: number) => void;
  onComplete: () => void;
  isComplete: boolean;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({
  currentQuestionIndex,
  totalQuestions,
  question,
  onAnswer,
  onComplete,
  isComplete,
}) => {
  useEffect(() => {
    if (isComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="w-full h-1.5 bg-gray-50">
        <div 
          className="h-full bg-[#9B3039] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(155,48,57,0.5)]" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 lg:py-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#9B3039]/5 text-[#9B3039] text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-[#9B3039]/10">
              {CATEGORIES[question.category].label}
            </span>
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="text-gray-300 font-black tabular-nums text-xs tracking-widest">
              {String(currentQuestionIndex + 1).padStart(2, '0')} / {String(totalQuestions).padStart(2, '0')}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight">
            {question.text}
          </h2>
        </div>

        <div className="grid gap-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswer(question.id, answer.points)}
              className="w-full text-left p-8 rounded-[2rem] border-2 border-gray-50 bg-white hover:border-[#9B3039] hover:shadow-[0_20px_40px_-10px_rgba(155,48,57,0.1)] transition-all group flex items-center justify-between"
            >
              <span className="text-xl text-gray-600 group-hover:text-gray-900 font-bold leading-snug">
                {answer.text}
              </span>
              <div className="ml-6 w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-[#9B3039] group-hover:text-white transition-colors shrink-0">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                 </svg>
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">
             Step {currentQuestionIndex + 1} of {totalQuestions}: Assessing {CATEGORIES[question.category].label}
           </p>
        </div>
      </main>
    </div>
  );
};

export default Questionnaire;
