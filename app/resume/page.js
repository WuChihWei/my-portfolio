import Image from 'next/image';

// 添加页面元数据
export const metadata = {
  title: 'Jordan Wu | Resume | AI Product Designer | Business Strategist',
  description: 'View the professional resume of Jordan Wu, an AI Product Designer with expertise in UI/UX design, business strategy, and digital product development.',
  keywords: 'Jordan Wu Resume, AI Product Designer CV, Business Strategy, UX/UI Designer Resume, Product Development Portfolio',
};

export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center m-20">
      <div className="w-[210mm] h-[297mm] bg-white shadow-2xl overflow-hidden relative">
        <Image
          src="/JordanWu_CV.jpg"
          alt="Resume Photo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
}
