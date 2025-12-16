import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Users, 
  Clock, 
  AlertTriangle, 
  Eye, 
  Train, 
  FileText,
  Dna,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Info,
  Skull
} from 'lucide-react';
import { Card, KpNote, ReadAloud, SectionHeader, Spoiler } from './components/UI';
import { getCarsData } from './data/scenario';
import { TabConfig, TabId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('story'); 
  const [selectedCar, setSelectedCar] = useState<number>(6); // Default start car

  const goToEnding = () => {
    setActiveTab('ending');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Memoize cars data to prevent re-creation on every render
  const carsData = useMemo(() => getCarsData(goToEnding), []);

  const tabs: TabConfig[] = [
    { id: 'story', label: '模组概要 & 导入', icon: BookOpen },
    { id: 'cars', label: '电车模拟', icon: Train },
    { id: 'ending', label: '结局一览', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans selection:bg-red-900 selection:text-white pb-20">
      
      {/* Hero Header */}
      <header className="relative bg-black border-b border-red-900/30 overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 transition-transform duration-1000 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full text-red-400 text-xs tracking-widest uppercase mb-2">
                  CoC 7th Edition Scenario
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wider text-shadow-lg mb-2">
                  常暗之箱
                </h1>
                <p className="text-lg text-gray-400 italic font-light">
                  "只管前进吧，已经没有退路了"
                </p>
             </div>
             <div className="flex flex-col gap-2 text-sm text-right">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm border border-gray-700">
                    <Users size={20} className="text-indigo-400 mb-1"/>
                    <span className="text-gray-300">2-3人 (2人最佳)</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm border border-gray-700">
                    <Clock size={20} className="text-indigo-400 mb-1"/>
                    <span className="text-gray-300">~1小时</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2 space-y-0.5">
                  <p>原作者: 86式 | 翻译: CJ (lordcj)</p>
                  <p>七版完善: zuo死菌</p>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 whitespace-nowrap border-b-2 transition-all flex-1 text-sm md:text-base font-medium ${
                  activeTab === tab.id 
                    ? 'border-red-500 text-white bg-gray-800' 
                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* TAB: STORY */}
        {activeTab === 'story' && (
          <div className="animate-fadeIn space-y-8">
            <section>
              <SectionHeader title="模组介绍" icon={Info} />
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card title="基本信息" icon={BookOpen}>
                   <ul className="text-sm text-gray-300 space-y-2">
                     <li><strong>难易度:</strong> 1-1.5 (适合新手/老手调剂)</li>
                     <li><strong>推荐技能:</strong> 侦查、急救、话术、潜行</li>
                     <li><strong>核心机制:</strong> 强制卷轴 (后方空间崩塌)</li>
                     <li><strong>规则版本:</strong> CoC 7th Edition</li>
                   </ul>
                </Card>
                <Card title="KP 注意事项" icon={AlertTriangle} borderColor="border-yellow-600/30">
                   <p className="text-sm text-gray-300">
                     本模组适合有一点跑团经验的玩家。KP可以自由设定探索次数/时间限制。
                     <br/>如果玩家拖沓，请务必描述“后方传来了巨大的咀嚼声”或“门被吞噬”来催促。
                     <br/><span className="text-indigo-400">建议：每节车厢给予 3-4 个行动机会。</span>
                   </p>
                </Card>
              </div>
              <Card title="导入检查清单" icon={Briefcase}>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                   <ul className="list-disc list-inside space-y-2">
                      <li><strong>所持物品</strong>：进行幸运检定。成功保留，失败则只剩衣物眼镜。</li>
                      <li><strong>枪械</strong>：不存在携带枪械上电车的可能 (没收)。</li>
                   </ul>
                   <ul className="list-disc list-inside space-y-2">
                      <li><strong>手机</strong>：可以使用，但信号受到干扰 (无服务)。</li>
                      <li><strong>时间感</strong>：模糊不清。</li>
                   </ul>
                </div>
              </Card>
            </section>

            <section>
              <SectionHeader title="导入故事" icon={BookOpen} />
              <ReadAloud>
                2013年的某天，调查员们搭乘本日的末班电车。无论是因为加班还是酒会，你们都拖着疲惫的身躯，在车厢里陷入了深沉的睡眠。
                <br/><br/>
                不知道过了多久……你们猛然惊醒。车厢里除了你们没有其他乘客。电车还在疾驰，但窗外没有任何街灯，宛如在无尽的漆黑隧道中。
              </ReadAloud>
              
              <div className="my-6">
                <Card title="分支：灵感检定" icon={Dna} borderColor="border-indigo-500/30">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-400 mb-2">
                      如果调查员的 <strong className="text-indigo-400">灵感 &gt; 50</strong>：
                    </p>
                    <ReadAloud>
                      你感到一阵强烈的违和感。按照时间推算，明明早就应该到达终点站了。这辆电车，到底在往哪里开？
                    </ReadAloud>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <SectionHeader title="KP 情报 (模组真相)" icon={Eye} />
              <Spoiler title="点击查看：幕后黑手与真相" type="secret">
                <div className="space-y-4">
                  <p>
                    <strong className="text-purple-400">真相：</strong> 这并非单纯的梦境，而是一个由<strong>奈亚拉托提普的化身</strong>（表现为吞噬一切的“大嘴”）所创造的异空间。
                  </p>
                  <p>
                    <strong className="text-purple-400">黑手设定：</strong> 一位皮肤黝黑、笑容爽朗的男子在TGS2013上看到了《The Last of Us (最后生还者)》，觉得里面的Clicker很有趣，于是创造了这个空间来观察凡人的反应。
                  </p>
                  <p>
                    <strong className="text-purple-400">彩蛋：</strong> KP可选择让这位黑人男子在导入时与PC同车，随后消失。
                  </p>
                </div>
              </Spoiler>
            </section>
          </div>
        )}

        {/* TAB: CARS (Interactive Simulation) */}
        {activeTab === 'cars' && (
          <div className="animate-fadeIn space-y-8">
            
            <KpNote>
              引导顺序： <strong className="text-indigo-400">6号车厢 (醒来) → 7号车厢 (确认后路断绝) → 5号车厢 ...</strong>
            </KpNote>

            {/* Train Visualizer */}
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between mb-4 text-xs text-gray-500 uppercase tracking-widest px-2 font-bold">
                 <span className="flex items-center gap-1 text-red-500"><Skull size={12}/> 后方 (大嘴吞噬)</span>
                 <span className="flex items-center gap-1 text-green-500">行进方向 <ChevronRight size={12}/></span>
              </div>
              
              <div className="flex gap-3 min-w-[600px] justify-between pb-2">
                {[7, 6, 5, 4, 3, 2, 1].map((carNum) => {
                  const isSelected = selectedCar === carNum;
                  const currentCarData = carsData[carNum];
                  
                  let baseClasses = "relative flex-1 h-24 rounded-lg border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 group cursor-pointer";
                  let colorClasses = "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:border-gray-500"; 
                  
                  if (carNum === 7) colorClasses = "bg-red-900/20 border-red-900/50 text-red-500 hover:bg-red-900/40"; 
                  if (carNum === 6) colorClasses = "bg-indigo-900/20 border-indigo-900/50 text-indigo-400 hover:bg-indigo-900/40"; 
                  if (carNum === 1) colorClasses = "bg-green-900/20 border-green-900/50 text-green-400 hover:bg-green-900/40"; 
                  
                  if (isSelected) {
                    colorClasses = "bg-gray-200 text-gray-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 z-10";
                  }

                  return (
                    <button
                      key={carNum}
                      onClick={() => setSelectedCar(carNum)}
                      className={`${baseClasses} ${colorClasses}`}
                    >
                      {/* Connection Line */}
                      {carNum !== 1 && (
                        <div className="absolute -right-4 top-1/2 w-4 h-1 bg-gray-800 -z-10 transform -translate-y-1/2"></div>
                      )}
                      
                      <span className="text-2xl font-bold font-serif">{carNum}</span>
                      <span className="text-xs uppercase opacity-70 tracking-wider">Car</span>
                      
                      {/* Status Indicator Dot */}
                      {isSelected && <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-red-500"></div>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Car Details */}
            {carsData[selectedCar] && (
              <div className="animate-fadeIn min-h-[400px]">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
                  <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0
                      ${carsData[selectedCar].type === 'danger' ? 'bg-red-600' : 
                        carsData[selectedCar].type === 'start' ? 'bg-indigo-600' :
                        carsData[selectedCar].type === 'goal' ? 'bg-green-600' : 'bg-gray-700'}
                  `}>
                      <span className="text-2xl font-bold font-serif">{selectedCar}</span>
                  </div>
                  <div>
                      <h2 className="text-3xl font-bold text-white font-serif">{carsData[selectedCar].title}</h2>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        {carsData[selectedCar].subtitle && <span className="bg-gray-800 px-2 py-0.5 rounded text-xs uppercase tracking-wider text-gray-300">{carsData[selectedCar].subtitle}</span>}
                        {carsData[selectedCar].description}
                      </p>
                  </div>
                </div>

                {carsData[selectedCar].content}
              </div>
            )}

          </div>
        )}

        {/* TAB: ENDING */}
        {activeTab === 'ending' && (
          <div className="animate-fadeIn space-y-8">
             <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
               <Train size={48} className="mx-auto text-gray-600 mb-4" />
               <h2 className="text-2xl font-serif text-white mb-2">命运的终点</h2>
               <p className="text-gray-400 text-sm">根据调查员在1号车厢驾驶室的操作，决定最终结局。</p>
             </div>

             <div className="space-y-6">
               <div className="border-l-4 border-green-500 bg-gray-800/50 p-6 rounded-r-lg shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 text-green-500"><ArrowRight size={100}/></div>
                 <h3 className="text-2xl font-serif text-green-400 mb-2 flex items-center gap-2">
                   结局 A: True End
                   <span className="text-xs bg-green-900/50 text-green-200 px-2 py-1 rounded border border-green-500/30 font-sans">全速前进</span>
                 </h3>
                 <p className="text-sm text-gray-400 mb-4 font-mono border-b border-gray-700 pb-2">
                   条件：将右侧拉杆下拉（加速）到底
                 </p>
                 <ReadAloud>
                   电车加速到了极致，你们的视野突然被感觉要刺瞎双眼的白光所覆盖<br/>
                   你们睁开了双眼，你们发现自己正处在6号车厢。这时外面喇叭正在播报“尊敬的旅客，您好，本次电车的终点站xx已到站...欢迎下次乘车，谢谢！”<br/>
                   一个站务人员看到你们走了过来问道“你们看起来脸色很不好，没事吧?”<br/>
                   没错这毫无疑问的就是现实世界...你们不约而同的做了一个可怕的噩梦吧。<br/>
                   你们感慨今天的奇遇，然后离开了电车，各自返回自己家。相信那些恐怖的记忆应该会慢慢被淡忘，想必之后也不会再回忆起来了吧。
                 </ReadAloud>
                 <div className="bg-green-900/20 border border-green-900/50 p-3 rounded mt-3">
                   <h4 className="text-green-500 text-xs font-bold uppercase mb-1">SAN值 回复</h4>
                   <ul className="text-xs text-gray-300 grid grid-cols-2 gap-2">
                     <li>生还者: <strong>+1d6+2</strong></li>
                     <li>全员生还: <strong>+1d3</strong></li>
                     <li>乘务员生还: <strong>+1d4</strong></li>
                   </ul>
                 </div>
               </div>

               <div className="border-l-4 border-yellow-600 bg-gray-800/50 p-6 rounded-r-lg shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 text-yellow-500"><AlertTriangle size={100}/></div>
                 <h3 className="text-2xl font-serif text-yellow-500 mb-2 flex items-center gap-2">
                   结局 B: Bad End
                   <span className="text-xs bg-yellow-900/50 text-yellow-200 px-2 py-1 rounded border border-yellow-500/30 font-sans">停车/减速</span>
                 </h3>
                 <p className="text-sm text-gray-400 mb-4 font-mono border-b border-gray-700 pb-2">
                   条件：停车或减速
                 </p>
                 <ReadAloud>
                   你们满怀希望的将把操作杆拉了下来，在列车停下来的瞬间，你们所处的环境突然变得伸手不见五指。你们听到“嘎吱嘎吱”的咀嚼声慢慢的接近了，脚下流过粘稠血水夹杂着人类的残骸，那股令人恶心的铁锈的味道直冲脑门，当你意识到那"嘎吱嘎吱"的咀嚼音已经到了自己的身边，你感受到自己的身体和意识伴随着黑暗正在逐渐消失...<br/>
                   然后你在电车的座位上醒来了...不清楚刚才发生的事情到底是梦境还是现实，自己的身体被"咔嚓咔嚓"啃食掉的声音在脑海中挥之不去，你甚至开始担心继续睡觉的话，说不定会继续梦到自己的身体被吃掉这种可怖的事情。如果一直这样子不见好转的话，往后大概就要抱着这种恐惧度日了吧...此时一位调查员的所持物品中多了一个背带被切断的黑色包。
                 </ReadAloud>
                 <div className="bg-yellow-900/20 border border-yellow-900/50 p-3 rounded mt-3">
                   <h4 className="text-yellow-500 text-xs font-bold uppercase mb-1">结算</h4>
                   <ul className="text-xs text-gray-300 grid grid-cols-2 gap-2">
                     <li>全员 SAN 减少: <strong>1d4/1d10</strong></li>
                     <li>技能成长: 克苏鲁神话 <strong>+3%</strong> (目睹奈亚化身)</li>
                   </ul>
                 </div>
               </div>

               <div className="border-l-4 border-red-900 bg-gray-800/50 p-6 rounded-r-lg shadow-lg relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                 <div className="absolute top-0 right-0 p-4 opacity-5 text-red-500"><Skull size={100}/></div>
                 <h3 className="text-2xl font-serif text-red-700 mb-2 flex items-center gap-2">
                   结局 C: Crazy End
                   <span className="text-xs bg-red-900/50 text-red-200 px-2 py-1 rounded border border-red-500/30 font-sans">全灭/发疯</span>
                 </h3>
                 <p className="text-sm text-gray-400 mb-4 font-mono border-b border-gray-700 pb-2">
                   条件：死亡、被大嘴吞噬、或被Clicker围攻
                 </p>
                 <ReadAloud>
                   “今天他们依旧跟往常一样啊”……<br/>
                   “每天都需要镇定剂和输液，我不知道他们还能撑到什么时候了...这年头，怎么坐个地铁都能把人坐疯了，还一疯疯了x个…”<br/>
                   由于在电车上的睡梦中，以主观视角体会了让人想想都毛骨悚然的恐怖事件，你们就这么陷入了极度的疯狂中，醒来后都在歇斯底里的逃避些什么，被送往了精神病院。
                 </ReadAloud>
                 <div className="mt-3 text-red-500 font-bold text-sm bg-red-950/30 p-2 rounded text-center border border-red-900/50">
                   SAN 归零，全员成为可悲的疯人 (Lost)
                 </div>
               </div>
             </div>
          </div>
        )}

      </main>

      <footer className="mt-12 py-8 bg-black text-center text-gray-600 text-sm border-t border-gray-900">
        <p>克苏鲁神话TRPG模组：《常暗之箱》</p>
        <p className="mt-1 text-xs text-gray-700">原作者: 86式 | 翻译: CJ | 完善: zuo死菌</p>
      </footer>
    </div>
  );
}