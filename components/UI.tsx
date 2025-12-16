import React, { useState } from 'react';
import { 
  Skull, 
  HelpCircle, 
  Eye, 
  Lightbulb, 
  Mic, 
  ChevronRight 
} from 'lucide-react';
import { CardProps, SpoilerProps } from '../types';

// 基础卡片
export const Card: React.FC<CardProps> = ({ children, className = "", title, icon: Icon, borderColor = "border-gray-700" }) => (
  <div className={`bg-gray-800 border ${borderColor} rounded-lg overflow-hidden shadow-xl ${className} transition-all duration-300 hover:shadow-2xl`}>
    {title && (
      <div className="bg-gray-900/50 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
        {Icon && <Icon size={18} className="text-gray-400" />}
        <h3 className="font-bold text-gray-200 text-sm uppercase tracking-wider">{title}</h3>
      </div>
    )}
    <div className="p-4">
      {children}
    </div>
  </div>
);

// KP 描述文本组件 (念白)
export const ReadAloud: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-black/40 border-l-4 border-indigo-500 px-5 py-4 my-4 rounded-r shadow-inner group hover:bg-black/50 transition-colors">
    <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
      <Mic size={14} /> 场景描述
    </div>
    <div className="italic text-gray-300 font-serif leading-relaxed text-lg">
      {children}
    </div>
  </div>
);

// KP 建议组件
export const KpNote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-yellow-900/10 border border-yellow-600/30 p-3 my-4 rounded text-sm text-yellow-100/80 flex gap-3 items-start">
    <Lightbulb size={18} className="text-yellow-500 shrink-0 mt-0.5" />
    <div className="space-y-1">{children}</div>
  </div>
);

// 剧透/KP信息组件
export const Spoiler: React.FC<SpoilerProps> = ({ title, children, type = "info" }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const styles = {
    info: { border: "border-blue-900", bg: "bg-blue-900/20", text: "text-blue-200", icon: HelpCircle },
    danger: { border: "border-red-900", bg: "bg-red-900/20", text: "text-red-200", icon: Skull },
    secret: { border: "border-purple-900", bg: "bg-purple-900/20", text: "text-purple-200", icon: Eye }
  };
  
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`my-4 border-l-4 rounded-r ${style.border} ${style.bg} ${style.text} p-4 transition-all duration-300`}>
      <div 
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 font-bold">
          <Icon size={18} />
          <span>{title}</span>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</div>
      </div>
      
      {isOpen && (
        <div className="mt-3 text-sm opacity-90 leading-relaxed animate-fadeIn border-t border-white/10 pt-3">
          {children}
        </div>
      )}
    </div>
  );
};

// 章节标题组件
export const SectionHeader: React.FC<{ title: string; icon: any }> = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-700/50">
    <div className="bg-gray-800 p-2 rounded-lg text-red-500">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-serif text-gray-100">{title}</h2>
  </div>
);

// 理智检定徽章
export const SanCheck: React.FC<{ loss: string }> = ({ loss }) => (
  <span className="inline-flex items-center gap-1.5 bg-red-950/50 text-red-300 px-2.5 py-1 rounded text-xs font-mono border border-red-800/50 mx-1 shadow-sm whitespace-nowrap hover:bg-red-900/50 transition-colors cursor-help" title="Sanity Check">
    <Skull size={12} />
    <span className="font-bold">SC {loss}</span>
  </span>
);