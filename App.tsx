
import React, { useState, useCallback, useMemo } from 'react';
import { UserInfo, QuizState, ScoreBreakdown, CategoryId } from './types';
import { QUESTIONS, CATEGORIES } from './constants';
import LandingPage from './components/LandingPage';
import LeadForm from './components/LeadForm';
import Questionnaire from './components/Questionnaire';
import ResultsPage from './components/ResultsPage';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'leadForm' | 'quiz' | 'results'>('landing');
  const [quizState, setQuizState] = useState<QuizState>({
    userInfo: null,
    answers: {},
    currentQuestionIndex: 0,
    isComplete: false,
  });

  const handleStart = () => setView('leadForm');

  const handleLeadSubmit = (userInfo: UserInfo) => {
    setQuizState(prev => ({ ...prev, userInfo }));
    setView('quiz');
  };

  const handleAnswerSelect = (questionId: string, points: number) => {
    setQuizState(prev => {
      const newAnswers = { ...prev.answers, [questionId]: points };
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex >= QUESTIONS.length) {
        return { ...prev, answers: newAnswers, isComplete: true };
      }
      
      return { ...prev, answers: newAnswers, currentQuestionIndex: nextIndex };
    });
  };

  const handleQuizComplete = useCallback(() => {
    setView('results');
  }, []);

  const scoreBreakdown = useMemo(() => {
    const results: ScoreBreakdown[] = Object.keys(CATEGORIES).map(catId => {
      const categoryId = catId as CategoryId;
      const categoryQuestions = QUESTIONS.filter(q => q.category === categoryId);
      const maxScore = categoryQuestions.length * 4;
      const actualScore = categoryQuestions.reduce((sum, q) => sum + (quizState.answers[q.id] || 0), 0);
      const percentage = Math.round((actualScore / maxScore) * 100);
      
      let status: ScoreBreakdown['status'] = 'Needs Improvement';
      if (percentage >= 80) status = 'Master';
      else if (percentage >= 50) status = 'Proficient';

      return {
        category: categoryId,
        label: CATEGORIES[categoryId].label,
        description: CATEGORIES[categoryId].description,
        score: actualScore,
        maxScore,
        percentage,
        status,
      };
    });
    return results;
  }, [quizState.answers]);

  const overallScore = useMemo(() => {
    if (scoreBreakdown.length === 0) return 0;
    const totalPercent = scoreBreakdown.reduce((sum, b) => sum + b.percentage, 0);
    return Math.round(totalPercent / scoreBreakdown.length);
  }, [scoreBreakdown]);

  return (
    <div className="min-h-screen bg-gray-50">
      {view === 'landing' && <LandingPage onStart={handleStart} />}
      {view === 'leadForm' && <LeadForm onSubmit={handleLeadSubmit} />}
      {view === 'quiz' && (
        <Questionnaire 
          currentQuestionIndex={quizState.currentQuestionIndex}
          totalQuestions={QUESTIONS.length}
          question={QUESTIONS[quizState.currentQuestionIndex]}
          onAnswer={handleAnswerSelect}
          onComplete={handleQuizComplete}
          isComplete={quizState.isComplete}
        />
      )}
      {view === 'results' && (
        <ResultsPage 
          userInfo={quizState.userInfo!}
          breakdown={scoreBreakdown}
          overallScore={overallScore}
        />
      )}
    </div>
  );
};

export default App;
