import React from 'react';
import { 
  Eye, 
  AlertTriangle, 
  Search, 
  Dna, 
  FileText, 
  MapPin, 
  Skull, 
  Flame, 
  Clock, 
  User, 
  Briefcase, 
  Key, 
  Users, 
  Unlock, 
  Lightbulb, 
  Footprints, 
  Volume2, 
  Swords, 
  Train, 
  ArrowRight 
} from 'lucide-react';
import { Card, KpNote, ReadAloud, SanCheck, Spoiler } from '../components/UI';
import { CarData } from '../types';

export const getCarsData = (goToEnding: () => void): Record<number, CarData> => ({
    7: {
      title: "7号车厢",
      subtitle: "绝望的源头",
      type: "danger",
      description: "充满血腥味的禁区，连接着未知的恐怖。",
      content: (
        <div className="space-y-6 animate-fadeIn">
           <KpNote>
             这里是模组的“空气墙”。所有恐怖描述都是为了将玩家逼回前方。
             <br/>
             若玩家执意不退，或尝试用手电筒照射深处，将直面克苏鲁神话的恐怖。
          </KpNote>

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="1. 靠近门扉 (灵感检定)" icon={Eye} borderColor="border-red-900/50">
              <ReadAloud>
                当你想要前往7号车厢时，一股浓烈的、令人作呕的血腥臭味扑面而来。这种味道如同实质般粘稠，你的生存本能在疯狂警报。
              </ReadAloud>
              <div className="text-sm text-gray-400 mt-3 space-y-2 bg-black/20 p-3 rounded">
                <p><strong className="text-green-400">成功</strong>: 感觉到强烈的不详预感，觉得绝对不该继续前进。 <SanCheck loss="0/1" /></p>
                <p><strong className="text-gray-500">失败</strong>: 只是觉得味道很恶心，没有什么特殊的预感。</p>
              </div>
            </Card>

            <Card title="2. 打开门 (若执意)" icon={AlertTriangle} borderColor="border-red-900">
              <ReadAloud>
                门缓缓滑开……映入眼帘的是被撕裂的人类肢体，像是被顽童破坏的玩偶一样散落一地。鲜血涂满了地板和座椅，宛如屠宰场。
              </ReadAloud>
              <p className="text-sm text-gray-300 mt-3">
                目击尸块：<SanCheck loss="1/1d4" /> <span className="text-xs text-gray-500">(若灵感已SC过则为 0/1)</span>
                <br/>
                <span className="text-indigo-400 font-bold">[医学]</span>: 死亡时间并没有很久，血液还很新鲜。
              </p>
            </Card>
          </div>
          
          <Card title="3. 深处观察 (侦查)" icon={Search} className="bg-red-950/10 border-red-900/30">
            <ReadAloud>
              在车厢深处的黑暗中，原本的车体结构已经消失了。取而代之的，是一个巨大的、仿佛还在蠕动的“口腔”。它正在缓慢地、咀嚼般地吞噬着车厢的地板和墙壁，并且正在向你们这边逼近。
            </ReadAloud>
            <div className="mt-3 p-3 bg-red-900/20 border border-red-900/30 rounded text-center">
              <span className="block text-red-200 font-bold mb-1">目击巨大的吞噬者 (奈亚化身)</span>
              <SanCheck loss="1/1d6" />
              <p className="text-xs text-red-300/60 mt-2">KP提示：这比电车还要巨大的存在，根本无法对抗。</p>
            </div>
          </Card>
        </div>
      )
    },
    6: {
      title: "6号车厢",
      subtitle: "起始地点",
      type: "start",
      description: "调查员们醒来的地方。一切的开始。",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid md:grid-cols-3 gap-4">
             <div className="md:col-span-2">
                <ReadAloud>
                  你们猛然惊醒。身体还残留着加班后的酸痛或酒会的宿醉。<br/>
                  环顾四周，这是你们熟悉的电车车厢，但有些不对劲……太安静了。除了你们几个人，车厢里空无一人。窗外也看不到任何城市的灯光，只有无尽的漆黑隧道。
                </ReadAloud>
             </div>
             <Card title="开场检定" icon={Dna} className="h-full">
                <p className="text-sm text-gray-400 mb-2">全员进行 <strong>[幸运]</strong> 检定：</p>
                <ul className="text-sm space-y-1">
                  <li className="text-green-400">✓ 成功：保留随身物品</li>
                  <li className="text-red-400">✗ 失败：只剩衣物眼镜</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 border-t border-gray-700 pt-2">
                  *没收所有枪械 (不可携带上车)<br/>*电子产品有干扰/无信号
                </p>
             </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="线索：门上的便签" icon={FileText}>
              <div className="flex flex-col h-full justify-between">
                <div className="bg-black/30 p-3 rounded border-l-2 border-gray-500 mb-3">
                   <span className="text-xs text-gray-500 block mb-1 uppercase">正面</span>
                   <p className="italic text-gray-200 font-serif">「只管前进吧 已经没有退路了」</p>
                </div>
                <Spoiler title="查看背面 (需侦查/主动翻看)" type="info">
                  <p className="font-bold text-white text-lg text-center">「第三个箱子里有藏着钥匙」</p>
                  <p className="text-xs text-indigo-400 mt-2 text-center">*提示：“箱子”暗指“3号车厢”。<br/>若主动撕下查看则不需骰点。</p>
                </Spoiler>
              </div>
            </Card>

            <Card title="环境检查" icon={Search} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Search size={64} />
              </div>
              <div className="space-y-4">
                 
                 {/* 灵感检定模块 */}
                 <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                       <span className="font-bold text-indigo-400 flex items-center gap-2"><Dna size={16}/> 时间感异常</span>
                       <span className="text-xs bg-indigo-900 text-indigo-200 px-2 py-0.5 rounded">灵感 &gt; 50</span>
                    </div>
                    <p className="text-sm text-gray-300 italic">
                       "你感到一阵强烈的违和感。按照时间推算，明明早就应该到达终点站了。这辆电车，到底在往哪里开？"
                    </p>
                 </div>

                 {/* 灵感+地图模块 */}
                 <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                       <span className="font-bold text-blue-400 flex items-center gap-2"><MapPin size={16}/> 地图异样</span>
                       <span className="text-xs bg-blue-900 text-blue-200 px-2 py-0.5 rounded">灵感 + 观看地图</span>
                    </div>
                    <p className="text-sm text-gray-300">
                       你注意到门旁贴着的路线图有些不对劲...
                       <br/>
                       <span className="text-white font-bold">7号车厢以后的部分被人蓄意涂黑了。</span>
                       <span className="text-xs text-gray-500 block mt-1">(若灵感失败：只觉得后面看不清楚)</span>
                    </p>
                 </div>

              </div>
            </Card>
          </div>
        </div>
      )
    },
    5: {
      title: "5号车厢",
      subtitle: "情报收集 & 危机",
      type: "normal",
      description: "核心情报获取，以及来自后方的紧迫威胁。",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <ReadAloud>
            这节车厢看起来很普通，空荡荡的座椅在白炽灯下显得有些惨白。但在某个座位上，似乎被人遗落了一份报纸。
          </ReadAloud>

          <Card title="核心线索：今日报纸" icon={FileText} borderColor="border-yellow-600/50" className="bg-yellow-900/5">
            <div className="flex flex-col md:flex-row gap-6">
               <div className="flex-1 space-y-2">
                  <h4 className="font-bold text-yellow-500 flex items-center gap-2">
                     <Search size={16} /> 内容 (侦查)
                  </h4>
                  <p className="text-sm text-gray-300 bg-black/20 p-3 rounded">
                    侦查成功的话可以找到报纸<br/>
                    内容:《昨晚xx线电车的末班车遭遇了大规模的恐怖事件》。<br/>
                    报道称幸存者全部精神极度异常，已被送往精神病院。警方称案件疑点重重。
                  </p>
               </div>
               <div className="flex-1 space-y-2 border-l border-gray-700 pl-6 md:border-l-0 md:pl-0 md:border-t md:pt-4">
                  <h4 className="font-bold text-red-400 flex items-center gap-2">
                     <AlertTriangle size={16} /> 异常点 (图书馆/侦查)
                  </h4>
                  <p className="text-sm text-gray-300">
                    如果对报纸进行翻看(图书馆/侦查)，你注意到报纸的日期……竟然是<strong>明天</strong>。
                    <br/>报纸上报道的“昨晚”，正是你们现在经历的“今晚”。
                  </p>
                  <div className="mt-2">
                    <SanCheck loss="0/1" />
                  </div>
               </div>
            </div>
            <KpNote>
              这是暗示“梦境/异空间”的重要线索，也解释了为何会有“Crazy End”的结局。如果PL开始纠结逻辑，就用后方逼近的吞噬声来催促他们前进。
            </KpNote>
          </Card>

          {/* 新增：大嘴危机与行动限制 */}
          <div className="grid md:grid-cols-2 gap-4">
             <Card title="危机感：知晓大嘴的存在" icon={Skull} borderColor="border-purple-900/50">
               <div className="flex flex-col h-full justify-between">
                 <div>
                    <p className="text-sm text-gray-300 mb-3">
                       如果调查员已知晓后方有某种巨大的存在（如去过7号车厢或听过描述），在此处进行 <strong className="text-purple-400">[灵感]</strong> 检定。
                    </p>
                    <div className="space-y-2 text-sm">
                       <div className="bg-black/20 p-2 rounded border-l-2 border-purple-500">
                          <span className="block font-bold text-purple-300">成功</span>
                          <span className="text-gray-400">你惊恐地察觉到，身后的6号车厢已经快有一半的部分消失了...</span>
                          <div className="mt-1"><SanCheck loss="0/1" /></div>
                       </div>
                       <div className="bg-black/20 p-2 rounded border-l-2 border-gray-500">
                          <span className="block font-bold text-gray-300">失败</span>
                          <span className="text-gray-500">并没有特别什么感觉，只是觉得压抑。</span>
                       </div>
                    </div>
                 </div>
               </div>
             </Card>

             <Card title="行动限制 & 回头惩罚" icon={Clock} borderColor="border-red-900/50" className="bg-red-950/10">
               <div className="flex flex-col h-full justify-between">
                 <div>
                    <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><Flame size={16}/> 场景叙述 (KP必读)</h4>
                    <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                       KP应使用场景描述来施加紧迫感，而不是单纯报行动次数。<br/>
                       <strong>建议：</strong>每节车厢给予玩家 3-4 个行动机会。
                    </p>
                    <div className="bg-black/30 p-3 rounded text-sm italic text-red-200 border border-red-900/30 mb-3">
                       "你们发现第五节车厢已然不见了大半，残缺的车厢不断地在摇晃，周围则是让人绝望的黑暗...当然，在你们眼前更为巨大的，是那在后面穷追不舍的仿佛能吞噬一切的大嘴！"
                    </div>
                 </div>
                 
                 <Spoiler title="特殊规则：断电/回头/超时" type="danger">
                    <ul className="text-xs text-gray-300 space-y-2">
                       <li>
                          <strong className="text-red-400">吞噬阶段 (断电)：</strong>
                          <br/>当大嘴吞噬了1/5的车厢时，车厢会突然断电，陷入黑暗。
                       </li>
                       <li>
                          <strong className="text-red-400">行动超时/目击消失：</strong>
                          <br/>伴随着门扉发出的“叭哩叭哩”声响，立足点从后向前消失。虽然可以奔跑逃离，但目击此非日常现象 <SanCheck loss="1/1d3"/>
                       </li>
                       <li>
                          <strong className="text-yellow-500">开手电筒看后方：</strong>
                          <br/>照亮大嘴内部的可怖场景 <SanCheck loss="1/1d3"/>。且无法分辨大嘴进度。
                       </li>
                    </ul>
                 </Spoiler>
               </div>
             </Card>
          </div>
        </div>
      )
    },
    4: {
      title: "4号车厢",
      subtitle: "遭遇 NPC",
      type: "normal",
      description: "发现幸存者，获取关键道具线索。",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <ReadAloud>
            在这节车厢的地板上，躺着一个穿着制服的人。他身上有明显的血迹，看起来受了重伤，已经失去了意识。
          </ReadAloud>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* NPC Card */}
            <div className="flex-1 bg-gray-700/30 border border-gray-600 rounded-lg p-4 flex gap-4 items-start">
               <div className="bg-gray-600 p-3 rounded-full shrink-0">
                 <User size={32} className="text-white"/>
               </div>
               <div className="w-full">
                 <h3 className="text-lg font-bold text-white flex justify-between items-center">
                   乘务员: 京山 人吉
                   <span className="text-xs font-normal bg-indigo-900/50 text-indigo-200 px-2 py-1 rounded border border-indigo-500/30">关键NPC</span>
                 </h3>
                 <p className="text-sm text-gray-400 mb-2">30岁 | 状态: 重伤/休克 (并非昏迷，可唤醒)</p>
                 <div className="grid grid-cols-2 gap-2 text-xs bg-black/20 p-2 rounded mb-2">
                    <div>STR: 55 (对抗有利)</div>
                    <div>DEX: 自动失败</div>
                 </div>
                 <p className="text-xs text-gray-400 italic">
                   没有恶意的神秘角色。想停下电车。
                 </p>
               </div>
            </div>

            {/* Action Card */}
            <div className="flex-1 bg-indigo-900/10 border border-indigo-500/30 rounded-lg p-4 flex flex-col justify-center">
               <h4 className="font-bold text-indigo-400 mb-2 flex items-center gap-2">
                 <Briefcase size={16}/> 行动：唤醒
               </h4>
               <p className="text-sm text-gray-300 mb-2">
                 使用 <strong>[急救]</strong> 成功后，可以让乘务员意识苏醒过来。
               </p>
               <p className="text-xs text-gray-500 italic">
                 *在7版规则下，设为重伤休克而非昏迷更为合理，便于剧情推进。
               </p>
            </div>
          </div>

          <Spoiler title="对话互动 (重要情报)" type="info">
            <div className="space-y-4 text-sm text-gray-300">
              <div className="bg-black/20 p-3 rounded">
                <strong className="text-indigo-400 block mb-1">Q: 为什么遭此重创？</strong>
                <p className="text-gray-400 mb-2 text-xs border-l-2 border-red-500/50 pl-2 py-1 bg-red-950/10">
                  <span className="text-red-400 font-bold">动作：</span> 他颤抖着拉起裤腿，展示腿部那处深可见骨的撕裂伤。伤口边缘呈现出不规则的锯齿状，显然是被某种生物硬生生咬下的。
                </p>
                <p className="italic">"看起来像是人的怪物，突然间袭击了我们，他们向着乘客一个一个咬去，有如野兽在捕食一般。那场面简直像是人间地狱，到处都是惨叫。我当时在逃跑时候也被咬到了，万幸的是我跑了出来"</p>
                <div className="mt-1 text-right">
                   <span className="text-xs text-gray-400 mr-2">听到人吃人 + 目睹咬痕</span>
                   <SanCheck loss="0/1d2"/>
                </div>
              </div>
              <div className="bg-black/20 p-3 rounded">
                <strong className="text-indigo-400 block mb-1">Q: 怪物的特征？(追问/话术)</strong>
                <p className="text-gray-400 mb-2 text-xs border-l-2 border-indigo-500/50 pl-2 py-1 bg-indigo-950/10">
                  <span className="text-indigo-400 font-bold">神态：</span> 他抱着头，瞳孔因为回忆起当时的恐怖场景而剧烈收缩。他的声音压得很低，仿佛那怪物就在附近，甚至连呼吸都变得急促起来。
                </p>
                <p className="italic">"我记得他们对于声音似乎很敏感，我当时被咬伤的时候，疼的把手边的一个东西甩到了墙壁上，吸引了他们的注意力"</p>
                <p className="text-xs text-green-400 mt-1 font-bold">*获得了应对循声者(Clicker)的关键情报：投掷诱饵</p>
              </div>
              <div className="bg-black/20 p-3 rounded border-l-2 border-indigo-500">
                <strong className="text-indigo-400 block mb-1">NPC 请求与道具：</strong>
                <p className="text-gray-400 mb-2 text-xs bg-indigo-950/10 pl-2 py-1">
                  <span className="text-indigo-400 font-bold">动作：</span> 他紧紧抓住你的衣袖，指关节因为用力而发白，眼中充满了对求生的渴望，近乎哀求地看着你。
                </p>
                <p className="italic">"快点想办法把电车停下来逃跑吧，拜托你们帮帮我！"</p>
                <div className="mt-2 p-2 bg-indigo-900/30 rounded flex items-center gap-2 text-indigo-300">
                   <Key size={14}/>
                   <span>他持有：<strong>驾驶室房间钥匙</strong> 和 <strong>电车控制面板钥匙</strong></span>
                </div>
              </div>
              <div className="bg-black/20 p-3 rounded">
                <strong className="text-indigo-400 block mb-1">Q: 钥匙在哪？</strong>
                <p className="text-gray-400 mb-2 text-xs border-l-2 border-indigo-500/50 pl-2 py-1 bg-indigo-950/10">
                  <span className="text-indigo-400 font-bold">动作：</span> 他下意识地摸向腰间，随后露出了懊恼和惊恐的神色，眼神慌乱地四处游移。
                </p>
                <p className="italic">"原本放在随身的黑色包包里，逃跑的途中背带被切断，没有时间回去捡... 大概是掉在 <strong>3号车厢的前门附近</strong>。"</p>
              </div>
              <div className="border border-red-500/30 bg-red-900/10 p-3 rounded">
                <strong className="text-red-400 block mb-1 flex items-center gap-2"><AlertTriangle size={14}/> 误导 (KP注意)</strong>
                <p>
                  乘务员不知道后面有“大嘴”，立场是坚定的“停车逃跑”。<br/>
                  *若让他相信/目睹了后方有大嘴存在，他的立场会动摇，完全交给调查员判断。<br/>
                  否则他会在最后尝试拉刹车(导致Bad End)。
                </p>
              </div>
            </div>
          </Spoiler>

          <Card title="抉择与确认" icon={Users} borderColor="border-gray-600">
            <div className="space-y-4 text-sm">
               <div className="bg-gray-800/50 p-2 rounded flex justify-between items-center border border-gray-700">
                  <span className="text-gray-300">向3号车厢确认安全</span>
                  <div className="text-xs text-gray-400 text-right">
                     透过门上玻璃使用 <strong className="text-indigo-400">[侦查]</strong> 或靠门 <strong className="text-indigo-400">[聆听]</strong><br/>
                     <span className="text-green-400">成功：确认3号车厢内没有怪物</span>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700">
                  <div>
                      <span className="font-bold text-green-400 block mb-1">带他走</span>
                      <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
                        <li>寻找钥匙自动成功。</li>
                        <li><strong>背负判定</strong>：STR&lt;70 需检定 [力量]。</li>
                        <li>CON&lt;70 需每5分钟/每节车厢检定 [体质]。</li>
                      </ul>
                  </div>
                  <div>
                      <span className="font-bold text-red-400 block mb-1">留下他</span>
                      <p className="text-gray-400 text-xs">
                        乘务员会被后方的怪物吞噬。<br/>
                        听到他面对恐怖存在时的哀嚎：
                      </p>
                      <div className="mt-1"><SanCheck loss="0/1d3" /></div>
                  </div>
               </div>
            </div>
          </Card>
        </div>
      )
    },
    3: {
      title: "3号车厢",
      subtitle: "搜寻与窥视",
      type: "normal",
      description: "杂乱的车厢，寻找钥匙与丢失的物品。",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <ReadAloud>
            车厢内，到处都是散落的行李，要在这边寻找东西感觉有点困难，而且满车厢杂乱的行李显得有些碍手碍脚。
          </ReadAloud>
          
          <Card title="⚠️ 环境危机：杂乱行李" icon={AlertTriangle} borderColor="border-yellow-600/50" className="bg-yellow-900/5">
             <div className="text-sm text-gray-300 space-y-2">
                <p>行李既是资源（可能找到手机/手电筒），也是障碍。</p>
                <ul className="list-disc list-inside text-gray-400">
                   <li><strong>绊倒风险</strong>：若不清理通道，奔跑有几率绊倒。</li>
                   <li><strong>声响风险</strong>：行走/奔跑若不注意脚下，会踩到东西发出声响（吸引后方怪物）。</li>
                </ul>
             </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="寻找钥匙 (黑包)" icon={Unlock} borderColor="border-indigo-500/50">
               <ul className="text-sm text-gray-300 space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                     <span>NPC 同行</span>
                     <div className="text-right">
                       <span className="text-green-400 font-bold bg-green-900/20 px-2 py-1 rounded block mb-1">自动成功</span>
                       <span className="text-xs text-gray-500 block">"我来负责拿钥匙吧" (可用话术/魅惑拿过来)</span>
                     </div>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                     <span>问过位置</span>
                     <span className="text-blue-400 font-bold bg-blue-900/20 px-2 py-1 rounded">侦查 +10%</span>
                  </li>
                  <li className="flex justify-between items-center">
                     <span>没问位置</span>
                     <span className="text-red-400 font-bold bg-red-900/20 px-2 py-1 rounded">侦查 -10%</span>
                  </li>
               </ul>
            </Card>

            <Card title="找回丢失物品" icon={Briefcase} borderColor="border-green-500/50">
               <div className="text-center h-full flex flex-col justify-center">
                 <p className="text-sm text-gray-300 mb-2 font-bold">
                   丢失物品补偿场景
                 </p>
                 <p className="text-xs text-gray-400 mb-2">
                   开场幸运失败的PL可在此尝试找回。
                 </p>
                 <div className="bg-black/30 p-3 rounded font-mono text-lg border border-gray-600 mb-2">
                   1d100 ≤ <span className="text-yellow-400">幸运 - 1d20</span>
                 </div>
                 <p className="text-xs text-gray-500">KP先暗投1d20决定减值。</p>
               </div>
            </Card>
          </div>

          <Card title="窥视前方 (2号车厢)" icon={Eye} className="bg-black/20">
             <div className="space-y-4">
                <ReadAloud>
                   你看向2号车厢，里面一片漆黑，什么都看不到。只能听到那种令人毛骨悚然的“咔咔”声。
                </ReadAloud>
                <div className="grid md:grid-cols-2 gap-4 border-t border-gray-700 pt-4">
                  <div>
                     <strong className="text-indigo-400 flex items-center gap-2 mb-2">
                       <Search size={16}/> 尝试侦查
                     </strong>
                     <ul className="text-sm text-gray-400 space-y-1">
                        <li>手电筒：<span className="text-green-400">+10%</span></li>
                        <li>手机灯：<span className="text-green-400">+5%</span></li>
                     </ul>
                  </div>
                  <div className="bg-black/30 p-2 rounded">
                     <p className="text-sm text-gray-300 mb-1"><strong className="text-green-400">成功:</strong> 感觉在黑暗中好像有人影在行走，并且掌握了数量。</p>
                     <p className="text-sm text-gray-300"><strong className="text-red-400">失败:</strong> 觉得很黑，搞不清楚有多少人 (KP暗骰1d3决定数量)。</p>
                  </div>
                </div>
             </div>
          </Card>
        </div>
      )
    },
    2: {
      title: "2号车厢",
      subtitle: "潜行挑战",
      type: "danger",
      description: "怪物徘徊的死地。",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <ReadAloud>
            这节车厢里没有光，空气中弥漫着真菌孢子味。<br/>
            可以清晰地听到“咔咔”的牙齿碰撞声，以及那可怖的、绝对不是来自人类的喘息声。
          </ReadAloud>

          {/* Environmental Logic Card */}
          <Card title="环境情报：光与暗" icon={Lightbulb} className="bg-indigo-900/10 border-indigo-500/30">
             <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                   <h4 className="font-bold text-gray-300 mb-2 flex items-center gap-2"><Eye size={16}/> 光源的作用</h4>
                   <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li><strong>安全:</strong> 怪物无视力，光照不会吸引它们。</li>
                      <li><strong>情报:</strong> 借助光源可发现怪物没有眼睛 (上半部头颅像炸开的真菌)。</li>
                   </ul>
                </div>
                <div>
                   <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2"><Footprints size={16}/> 黑暗的代价</h4>
                   <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li><strong>难行:</strong> 无光源极易踩到尸体/杂物发出声音。</li>
                      <li><strong>听音:</strong> 可听到明显的怪物喘息声 (SAN危机)。</li>
                   </ul>
                </div>
             </div>
          </Card>

          {/* Monster Card */}
          <Card className="border-red-600 bg-red-950/20">
             <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-900/50 p-3 rounded-full animate-pulse">
                   <Skull size={32} className="text-red-500"/>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-red-400">遭遇：循声者 (Clicker)</h3>
                   <p className="text-xs text-red-300 mt-1">
                      位置：车厢中端。调查员在它冲上来前有少许时间关门。
                   </p>
                </div>
             </div>
             
             <div className="space-y-3 text-sm">
                <div className="bg-black/20 p-3 rounded grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-400 block mb-1">目击怪物 (超现实)</span>
                      <SanCheck loss="1/1d6" />
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-1">未见7号车惨状追加</span>
                      <SanCheck loss="+1/1d4" />
                      <span className="text-xs text-gray-500 block">(因目睹尸体/血腥)</span>
                    </div>
                </div>
                <div className="bg-black/20 p-3 rounded flex justify-between items-center">
                    <span className="text-gray-400">听音辨位 (聆听喘息声)</span>
                    <SanCheck loss="0/1" />
                </div>
             </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="方法 A: 潜行通过" icon={Footprints} borderColor="border-blue-500/50">
              <div className="text-center py-2">
                <p className="text-lg font-bold text-blue-400 mb-2">
                  [潜行] <span className="text-sm text-gray-500">或</span> [幸运/2]
                </p>
                <div className="text-xs text-left bg-gray-900/50 p-3 rounded space-y-2">
                  <p className="flex justify-between border-b border-gray-700 pb-1"><span className="text-green-400">+20%</span> <span>手电筒 (照明避障)</span></p>
                  <p className="flex justify-between border-b border-gray-700 pb-1"><span className="text-green-400">+10%</span> <span>手机灯 (照明避障)</span></p>
                  <p className="flex justify-between"><span className="text-red-400">-15%</span> <span>完全黑暗 (易踩物)</span></p>
                </div>
                <div className="mt-3 text-xs text-left">
                   <p><strong className="text-green-400">成功:</strong> 谨慎通过，到达先头车厢门前。</p>
                   <p className="mt-1"><strong className="text-red-400">失败:</strong> 踩到尸体发出"噗噗"声，被发现。</p>
                </div>
              </div>
            </Card>

            <Card title="方法 B: 投掷/声东击西" icon={Volume2} borderColor="border-yellow-500/50">
              <div className="flex flex-col h-full justify-center space-y-3">
                 <div className="bg-green-900/10 border border-green-500/30 p-2 rounded text-xs text-green-300">
                    <strong>制造声响 (墙壁/远处):</strong> 自动成功吸引注意。
                 </div>
                 <div className="text-xs text-gray-400">
                    <p className="mb-1"><strong>投掷判定:</strong></p>
                    <ul className="list-disc list-inside">
                       <li>距离 &gt; 半个车厢: <strong>自动成功</strong></li>
                       <li>距离短: <strong>[DEX]</strong> 或 <strong>[投掷*2]</strong></li>
                    </ul>
                 </div>
                 <p className="text-xs text-gray-500 italic">
                   *怪物会被更大声音吸引。声响停止后会寻找下一个声源。
                 </p>
              </div>
            </Card>
          </div>

          <Spoiler title="特殊策略与残忍抉择 (KP Reference)" type="danger">
             <div className="space-y-4 text-sm text-gray-300">
                <div>
                   <strong className="text-indigo-400 block mb-1">策略：引出并关门</strong>
                   <p>刻意制造持续声响吸引Clicker出来，全员退回3号车厢并关门，比潜行更安全。如果门处理毛糙(噪音)有补救可能。</p>
                </div>
                
                <div className="bg-yellow-900/10 p-2 rounded border border-yellow-600/20">
                   <strong className="text-yellow-500 block mb-1">A. 善良诱饵 (背负NPC)</strong>
                   <p className="text-xs">背起NPC并捂嘴，用手机铃声吸引，迅速冲过。风险：NPC因恐惧尖叫。</p>
                </div>

                <div className="bg-red-900/10 p-2 rounded border border-red-600/20">
                   <strong className="text-red-500 block mb-1">B. 邪恶诱饵 (残忍)</strong>
                   <p className="text-xs mb-1">利用无法移动的NPC疼痛惨叫吸引怪物，趁机通过。</p>
                   <div className="flex gap-2">
                      <SanCheck loss="1/1d8" /> <span className="text-xs opacity-70">(残忍行为)</span>
                   </div>
                   <div className="flex gap-2 mt-1">
                      <SanCheck loss="1/1d3" /> <span className="text-xs opacity-70">(透过玻璃目睹)</span>
                   </div>
                </div>

                <div className="bg-gray-700/30 p-2 rounded">
                   <strong className="text-gray-300 block mb-1">C. 自我牺牲</strong>
                   <p className="text-xs">调查员主动断后。因有心理准备不足以发疯，进入 <span className="text-yellow-500 font-bold">结局 B</span>。</p>
                </div>
             </div>
          </Spoiler>

          <Spoiler title="战斗/对抗流程 (若失败)" type="danger">
             <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-red-400 font-bold border-b border-red-900/30 pb-1">
                   <Swords size={16}/> 最后的挣扎
                </div>
                
                <div className="space-y-2 text-gray-400 text-xs">
                   <p><strong>1. [敏捷 DEX] 对抗:</strong> 失败则被抓。</p>
                   <p className="pl-2">- NPC自动失败 (若PL幸运通过可抢救钥匙)。</p>
                   
                   <p><strong>2. [力量 STR] 对抗:</strong> 若被抓。</p>
                   <p className="pl-2">- 成功: 挣脱控制。</p>
                   <p className="pl-2">- 失败: 被咬死 (结局C)。</p>
                   <p className="pl-2 text-red-500">- 若2只以上: 自动失败。</p>
                </div>

                <div className="bg-red-950/30 p-2 rounded border border-red-900/50 mt-2">
                   <strong className="text-red-400 block mb-1">强制战斗惩罚</strong>
                   <p className="text-xs text-gray-400">
                      环境恶劣，技能值建议 <strong>减半 (1/2)</strong>。<br/>
                      有光源可补正 +20%/+10%。<br/>
                      <span className="italic opacity-70">
                        *鬼畜派KP可选：对技能做 -80% 的极端补正。若PL执意战斗胜利，可召唤奈亚化身导致绝望 (Ending C)。
                      </span>
                   </p>
                </div>
             </div>
          </Spoiler>
          
        </div>
      )
    },
    1: {
      title: "1号车厢",
      subtitle: "终焉的抉择",
      type: "goal",
      description: "最终抉择之地。",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <ReadAloud>
            你们冲进了驾驶室，反锁了身后的门。循声者的嘶吼被隔绝在门外。<br/>
            透过前挡风玻璃，你们看到的依然是无尽的、令人绝望的黑暗隧道。<br/>
            控制台上有两个拉杆：左杆在下方，右杆在中间。
          </ReadAloud>
          
          <Card className="bg-gradient-to-br from-gray-800 to-indigo-900/40 border-indigo-500/30">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-600/30 pb-3">
              <Train size={24} className="text-indigo-400"/>
              <h3 className="text-xl font-serif text-white">驾驶室控制台</h3>
            </div>
            
            <div className="flex justify-around items-stretch mb-6 gap-4">
               <div className="flex-1 bg-black/40 p-4 rounded-lg border border-gray-600 flex flex-col items-center">
                 <div className="w-4 h-20 bg-gray-700 rounded-full relative mb-3">
                    <div className="absolute bottom-1 left-0.5 right-0.5 h-8 bg-red-600 rounded shadow-lg"></div>
                 </div>
                 <span className="text-gray-300 font-bold">左杆 (刹车)</span>
                 <span className="text-xs text-gray-500 mt-1">控制启停</span>
               </div>
               
               <div className="flex-1 bg-black/40 p-4 rounded-lg border border-gray-600 flex flex-col items-center">
                 <div className="w-4 h-20 bg-gray-700 rounded-full relative mb-3">
                    <div className="absolute top-1/2 left-0.5 right-0.5 h-8 bg-green-500 rounded shadow-lg transform -translate-y-1/2"></div>
                 </div>
                 <span className="text-gray-300 font-bold">右杆 (油门)</span>
                 <div className="flex flex-col text-center mt-1 text-xs font-mono">
                    <span className="text-red-400">↑ 上推：减速</span>
                    <span className="text-green-400">↓ 下拉：加速</span>
                 </div>
               </div>
            </div>

            <Spoiler title="最后的阻挠 (NPC京山)" type="danger">
               <div className="space-y-2">
                <ReadAloud>
                  乘务员京山看到了控制台，他的眼睛亮了起来，喊道：“快！把电车停下来！停下来就安全了！”
                </ReadAloud>
                <KpNote>
                  乘务员会尝试去拉刹车或上推油门减速。PL需要阻止他。<br/>
                  对抗：<strong>[力量]</strong> (京山受伤 PL+20%) 或 <strong>[话术/魅惑]</strong>。<br/>
                  *若没能阻止他，或者被他说服，电车将减速 → Bad End。
                </KpNote>
              </div>
            </Spoiler>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
             <button 
               onClick={goToEnding}
               className="bg-green-700 hover:bg-green-600 text-white p-5 rounded-lg shadow-lg transition-all text-left group border border-green-500 overflow-hidden relative"
             >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <ArrowRight size={48} />
               </div>
               <h4 className="font-bold flex items-center justify-between text-lg">
                 全速前进 (右杆下拉)
               </h4>
               <p className="text-sm text-green-200 mt-2 font-serif italic opacity-80">
                 "只管前进吧..."
               </p>
             </button>

             <button 
               onClick={goToEnding}
               className="bg-red-900/80 hover:bg-red-800 text-white p-5 rounded-lg shadow-lg transition-all text-left group border border-red-700 overflow-hidden relative"
             >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <AlertTriangle size={48} />
               </div>
               <h4 className="font-bold flex items-center justify-between text-lg">
                 停下/减速 (上推/刹车)
               </h4>
               <p className="text-sm text-red-200 mt-2 font-serif italic opacity-80">
                 "太危险了，必须停车！"
               </p>
             </button>
          </div>
        </div>
      )
    }
  });