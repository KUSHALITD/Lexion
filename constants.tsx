
import { Question, CategoryId } from './types';

export const CATEGORIES: Record<CategoryId, { label: string; description: string }> = {
  hygiene: {
    label: 'Hygiene Factors',
    description: "Reflects the fundamental quality of your website's content, considering language, formatting, and the technical soundness of interactive elements like forms, hyperlinks, metadata, etc."
  },
  relevance: {
    label: 'Content Relevance',
    description: "Examines how recently and effectively your content has been updated to match your evolving business, highlighting the importance of current and accurate information about your products or services."
  },
  sales: {
    label: 'Content as a Sales Tool',
    description: "Gauges your website's efficiency as a sales asset, measuring how well it generates inquiries, reflects your brand, aids your marketing efforts, and compares to competitors in client conversations."
  },
  differentiator: {
    label: 'Content as a Differentiator',
    description: "Evaluates whether your content positions you as a thought leader in the industry, the level of engagement from leadership on platforms like LinkedIn, and the utilization of customer data."
  },
  powerhouse: {
    label: 'Content Powerhouse',
    description: "Considers the extent to which you harness your internal expertise to create valuable thought leadership content, such as whitepapers, case studies, and training materials from success stories."
  },
};

export const QUESTIONS: Question[] = [
  // Hygiene
  {
    id: 'h1',
    category: 'hygiene',
    text: 'How do you assess the language and grammar of your website content?',
    answers: [
      { text: 'We use professional editing services or tools for all content', points: 4 },
      { text: 'We review content internally for errors but don’t use professional services', points: 3 },
      { text: 'We occasionally check for obvious errors', points: 2 },
      { text: 'We have never checked for language and grammar', points: 1 },
    ],
  },
  {
    id: 'h2',
    category: 'hygiene',
    text: 'How is the content formatting on your website?',
    answers: [
      { text: "It's consistently formatted, making it easy to read", points: 4 },
      { text: "It's somewhat consistent but could use improvement", points: 3 },
      { text: 'Formatting is not a priority, so it varies', points: 2 },
      { text: 'The content is poorly formatted or not formatted at all', points: 1 },
    ],
  },
  {
    id: 'h3',
    category: 'hygiene',
    text: 'How is the quality of images and multimedia used on your website?',
    answers: [
      { text: 'We use high-quality, professional images and multimedia', points: 4 },
      { text: 'We use a mix of professional and amateur images', points: 3 },
      { text: 'The quality of images and multimedia is not a priority', points: 2 },
      { text: 'I am not sure about the images and multimedia used', points: 1 },
    ],
  },
  {
    id: 'h4',
    category: 'hygiene',
    text: 'How frequently do you check if the forms and links are working?',
    answers: [
      { text: 'Regularly, to ensure they are always functioning', points: 4 },
      { text: 'Occasionally, but not on a regular schedule', points: 3 },
      { text: 'Rarely, only when issues are reported', points: 2 },
      { text: 'Never, we don’t monitor these things', points: 1 },
    ],
  },
  {
    id: 'h5',
    category: 'hygiene',
    text: 'Is your website content optimized for accessible for all kinds of users?',
    answers: [
      { text: 'Yes, accessibility is a priority in our content strategy', points: 4 },
      { text: 'Somewhat, but there are areas that need improvement', points: 3 },
      { text: 'Not really, we haven’t focused much on accessibility', points: 2 },
      { text: 'No, we have not considered accessibility in our content', points: 1 },
    ],
  },
  // Relevance
  {
    id: 'r1',
    category: 'relevance',
    text: 'Does your website accurately reflect your current offerings and services?',
    answers: [
      { text: 'Yes, perfectly', points: 4 },
      { text: 'Mostly, with a few exceptions', points: 3 },
      { text: "It's somewhat outdated", points: 2 },
      { text: "No, it’s completely outdated", points: 1 },
    ],
  },
  {
    id: 'r2',
    category: 'relevance',
    text: 'When was the last time you updated the content on your website?',
    answers: [
      { text: 'In the last month', points: 4 },
      { text: '1-6 months ago', points: 3 },
      { text: '6-12 months ago', points: 2 },
      { text: 'Not updated since going live', points: 1 },
    ],
  },
  {
    id: 'r3',
    category: 'relevance',
    text: 'What prompted your most recent content update?',
    answers: [
      { text: 'Introduction of new products/ services or important company updates', points: 4 },
      { text: 'Customer/ partner feedback or inquiries highlighted inaccuracies', points: 3 },
      { text: 'We were preparing for a key client visit or exhibition', points: 2 },
      { text: 'Don’t remember, our reviews are not scheduled', points: 1 },
    ],
  },
  {
    id: 'r4',
    category: 'relevance',
    text: 'How often do you add new content (like blogs, case studies, news updates) to your website?',
    answers: [
      { text: 'Weekly', points: 4 },
      { text: 'Monthly', points: 3 },
      { text: 'Quarterly', points: 2 },
      { text: 'Rarely or never', points: 1 },
    ],
  },
  {
    id: 'r5',
    category: 'relevance',
    text: 'Do you regularly review and update your most visited pages for accuracy and relevance?',
    answers: [
      { text: 'Yes, consistently', points: 4 },
      { text: 'Occasionally', points: 3 },
      { text: 'Rarely', points: 2 },
      { text: 'Never', points: 1 },
    ],
  },
  // Sales
  {
    id: 's1',
    category: 'sales',
    text: 'How often do you receive inquiries or feedback directly through your website?',
    answers: [
      { text: 'Regularly', points: 4 },
      { text: 'Occasionally', points: 3 },
      { text: 'Rarely', points: 2 },
      { text: 'Never, we don’t have that functionality', points: 1 },
    ],
  },
  {
    id: 's2',
    category: 'sales',
    text: 'Is your website leveraged in conversations and pitches with clients or partners?',
    answers: [
      { text: 'Yes, frequently', points: 4 },
      { text: 'Sometimes', points: 3 },
      { text: 'Rarely', points: 2 },
      { text: 'Never', points: 1 },
    ],
  },
  {
    id: 's3',
    category: 'sales',
    text: 'Do you think your website accurately represents your company’s identity and offerings?',
    answers: [
      { text: 'Absolutely', points: 4 },
      { text: 'To some extent', points: 3 },
      { text: 'Not really', points: 2 },
      { text: "Doesn't matter", points: 1 },
    ],
  },
  {
    id: 's4',
    category: 'sales',
    text: "Have you ever compared your website's content and design to your competitors'?",
    answers: [
      { text: 'Yes, and we feel ours is comparable or better', points: 4 },
      { text: 'Yes, but we see areas for improvement', points: 3 },
      { text: 'No, but it might be beneficial', points: 2 },
      { text: 'No, we don’t see the value in comparing', points: 1 },
    ],
  },
  {
    id: 's5',
    category: 'sales',
    text: 'Do you believe a great website can offer a competitive advantage in your industry?',
    answers: [
      { text: 'Yes, it certainly does', points: 4 },
      { text: 'Potentially, but not always', points: 3 },
      { text: 'Never thought about it', points: 2 },
      { text: 'No, not at all', points: 1 },
    ],
  },
  // Differentiator
  {
    id: 'd1',
    category: 'differentiator',
    text: 'Do you have unused customer data from events, struggling to create engaging content?',
    answers: [
      { text: 'No, use data effectively or don’t collect much', points: 4 },
      { text: "Occasionally collect data, haven't focused on engagement", points: 3 },
      { text: 'Have data, need better engagement strategies', points: 2 },
      { text: 'Yes, struggling with content creation', points: 1 },
    ],
  },
  {
    id: 'd2',
    category: 'differentiator',
    text: 'Do you believe that publishing thought leadership content could enhance your company\'s positioning?',
    answers: [
      { text: 'Yes, strongly believe it', points: 4 },
      { text: 'Possibly, but not sure how', points: 3 },
      { text: 'Unlikely to make a difference', points: 2 },
      { text: 'No, don’t believe it would help', points: 1 },
    ],
  },
  {
    id: 'd3',
    category: 'differentiator',
    text: 'Are you aware of competitors who stand out because of their high-quality content?',
    answers: [
      { text: 'Yes, and it clearly gives them an edge', points: 4 },
      { text: 'Yes, but not sure if it impacts their success', points: 3 },
      { text: 'Have noticed some, but it doesn’t seem significant', points: 2 },
      { text: 'No, not aware of any', points: 1 },
    ],
  },
  {
    id: 'd4',
    category: 'differentiator',
    text: 'Could sharing quality content on LinkedIn boost your brand and attract clients or talent?',
    answers: [
      { text: 'Strongly agree', points: 4 },
      { text: 'Agree', points: 3 },
      { text: 'Disagree', points: 2 },
      { text: 'Strongly disagree', points: 1 },
    ],
  },
  {
    id: 'd5',
    category: 'differentiator',
    text: 'Are your company\'s leaders active on LinkedIn?',
    answers: [
      { text: 'Yes, regularly active', points: 4 },
      { text: 'Occasionally active', points: 3 },
      { text: 'Rarely active', points: 2 },
      { text: 'Not active at all', points: 1 },
    ],
  },
  // Powerhouse
  {
    id: 'p1',
    category: 'powerhouse',
    text: 'Do you convert your technical expertise into whitepapers for clients?',
    answers: [
      { text: "Yes, there's significant potential, and we see great value in it", points: 4 },
      { text: "Probably, but we haven't fully explored this yet", points: 3 },
      { text: "There's little potential or interest from our audience", points: 2 },
      { text: "No, this doesn't align with our audience's needs or interests", points: 1 },
    ],
  },
  {
    id: 'p2',
    category: 'powerhouse',
    text: 'Do create case studies about successful projects?',
    answers: [
      { text: 'Yes, we consistently use project successes to create compelling case studies', points: 4 },
      { text: 'Occasionally, when we believe a project has notable outcomes', points: 3 },
      { text: "Rarely, it's not a common practice for us", points: 2 },
      { text: "Never, we haven't considered or seen the value in doing so", points: 1 },
    ],
  },
  {
    id: 'p3',
    category: 'powerhouse',
    text: 'Can success stories be repurposed as training materials for your team?',
    answers: [
      { text: 'Absolutely, we regularly use success stories for internal training and learning', points: 4 },
      { text: "It's possible, though we haven't utilized them to their full potential yet", points: 3 },
      { text: "It's unlikely; our training materials are sourced differently", points: 2 },
      { text: 'Not at all, we do not see this as a viable option', points: 1 },
    ],
  },
];
