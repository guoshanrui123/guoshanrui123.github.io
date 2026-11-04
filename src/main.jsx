import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Github, FileText, ArrowUpRight, Workflow, BrainCircuit, Sparkles, Bot, Radar, Cpu, Layers3 } from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: '地平线 HSD 系统架构实习',
    tag: 'System Architecture',
    year: '2026',
    summary:
      '参与智能驾驶 OTA2.0 问题闭环、P0 事故集维护、评测集构建、3DGS 仿真回灌和 K-turn 功能验收对齐。',
    highlights: [
      '客户问题 -> 研发目标 -> 验收标准闭环',
      '3DGS 重建渲染与仿真回灌',
      'P0 事故集 / 客诉必解问题跟进',
      'K-turn HMI、ODD、metric 与验收集设计',
    ],
    icon: Workflow,
  },
  {
    title: '笔灵 - AI 小说海外版 Web 全栈产品',
    tag: 'AI Product',
    year: '2025',
    summary:
      '负责复杂交互 PRD、模型接口规范、竞品调研与高保真原型 SOP，支撑产品出海决策。',
    highlights: ['6 篇高质量 PRD', '17 篇深度调研', 'v0 + Claude + Figma 敏捷原型流'],
    icon: BrainCircuit,
  },
  {
    title: 'AIGC 语音驱动跑团软件',
    tag: '0-1 MVP',
    year: '2024-2025',
    summary:
      '从线下调研、产品定义、团队协作到 MVP 交付，整合 ASR、LLM、RAG 与 TTS 技术链路。',
    highlights: ['6 人跨学科团队', '4 周交付 MVP', '52 人试点反馈 92.3%'],
    icon: Sparkles,
  },
  {
    title: 'ROS2 智能井字棋 UR5e 机械臂',
    tag: 'Robotics',
    year: '2025',
    summary:
      '基于 ROS2 Humble 搭建模块化控制系统，实现视觉感知、逻辑决策和运动规划闭环。',
    highlights: ['OpenCV 姿态估计', 'FSM 闭环控制', '抓取成功率 95%'],
    link: 'https://github.com/wesleydonald/MTRN4231.git',
    icon: Bot,
  },
  {
    title: '智能座舱多模态用户体验评估体系',
    tag: 'User Research',
    year: '2024-2025',
    summary:
      '通过 3 万余条多维数据建模、专家访谈和 30 名用户实测，构建座舱体验评估标准。',
    highlights: ['Python + SPSS', '眼动 / 访谈 / 任务日志', '新一代评审标准'],
    icon: Radar,
  },

];

const experiences = [
  {
    role: '系统架构实习生 / 智能驾驶 HSD',
    org: '地平线 Horizon Robotics',
    time: '2026.04 - 2026.05',
    detail:
      '参与 OTA 问题闭环、评测体系建设、P0 事故集跟进与 K-turn 功能验收，将客户问题转化为研发目标和可量化回归标准。',
  },
  {
    role: '产品经理实习 / AI 互联网产品',
    org: '笔灵海外版 Web',
    time: '2025.06 - 2025',
    detail: '需求定义、竞品研究、AI 原型设计与产研协同，推动从 0 到 1 的需求落地。',
  },
  {
    role: '用户研究 / 智能座舱体验评估',
    org: '现代汽车',
    time: '2024.09 - 2025.01',
    detail: '建立多模态评估体系，将用户研究结果转化为量产阶段体验基准。',
  },
  {
    role: '全生命周期产品管理',
    org: '自主文创产品',
    time: '2022.09 - 2024.06',
    detail: '孵化 18 款产品与 38 个 SKU，覆盖立项、打样、供应链、GTM 与社群运营。',
  },
];

const education = [
  { title: '上海交通大学', subtitle: '硕士 · 工业设计工程', detail: '机械 / 国际工业设计工程 · 智能硬件方向' },
  { title: '中国农业大学', subtitle: '机械 / 工业设计', detail: 'GPA 3.71 / 4.0' },
  { title: '新南威尔士大学', subtitle: '交换学习', detail: '跨学科工程与设计实践' },
];

const projectDetails = [
  { slug: 'horizon-hsd', background: '智能驾驶功能迭代需要将客户反馈、测试问题与研发目标连接到统一的评测和回归标准。项目围绕 HSD OTA2.0 问题闭环与功能验收展开。', work: [
    ['问题闭环', '梳理用户反馈、QA、测试和外场问题，将问题拆解为责任模块、修复排期与回归标准，跟进 P0 事故集和客诉必解问题。'],
    ['评测与仿真', '参与开环 / 闭环评测口径对齐，跟进 3D Gaussian Splatting 重建渲染与仿真回灌，关注车车一致性及传感器标定问题。'],
    ['功能验收', '参与 K-turn 的 ODD、场景分类标签、HMI 告警、metric 与验收集设计，将功能边界转化为可验证的需求。']
  ], tools: '问题跟踪 · 场景分类 · 评测集 · 3DGS · ODD / HMI' },
  { slug: 'biling-ai', background: '面向海外市场的 AI 小说 Web 产品，需要通过竞品研究、需求定义与交互原型，支持产品出海决策及产研协作。', work: [
    ['需求与交互定义', '负责复杂交互 PRD，梳理产品行为与模型接口规范，将需求转化为便于团队协作的产品文档。'],
    ['市场与竞品研究', '开展竞品调研与深度研究，结合海外版 Web 产品目标，为产品决策提供依据。'],
    ['原型协作', '使用 v0、Claude 与 Figma 形成敏捷原型工作流，整理高保真原型 SOP。']
  ], tools: 'PRD · 模型接口规范 · 竞品研究 · v0 · Claude · Figma' },
  { slug: 'aigc-roleplaying', background: '围绕跑团场景探索语音与生成式 AI 的结合，从线下调研和产品定义推进到 MVP 交付及用户试点。', work: [
    ['场景调研与定义', '通过线下调研梳理跑团需求，明确 MVP 的产品方向与实现范围。'],
    ['跨学科协作', '组织 6 人跨学科团队，推进产品定义、技术整合与原型交付，在 4 周内完成 MVP。'],
    ['语音交互链路', '整合 ASR、LLM、RAG 与 TTS，将语音识别、内容生成、知识检索及语音输出串联起来，并收集试点反馈。']
  ], tools: 'ASR · LLM · RAG · TTS · MVP · 用户试点' },
  { slug: 'ros2-tic-tac-toe', background: '以智能井字棋任务为载体，基于 UR5e 机械臂与 ROS2 Humble 实现视觉感知、逻辑决策及运动规划的闭环。', work: [
    ['视觉感知', '使用 OpenCV 进行姿态估计，为机械臂任务提供视觉信息。'],
    ['模块化控制', '基于 ROS2 Humble 搭建模块化控制系统，连接感知、决策和运动规划。'],
    ['闭环执行', '使用有限状态机组织任务执行流程，实现机械臂抓取与任务控制闭环。']
  ], tools: 'ROS2 Humble · UR5e · OpenCV · FSM · 运动规划' },
  { slug: 'cockpit-user-research', background: '智能座舱体验涉及多种交互与感知维度。项目通过数据建模、专家访谈和用户实测，构建多模态用户体验评估体系。', work: [
    ['多维数据建模', '处理 3 万余条多维数据，使用 Python 与 SPSS 支持评估分析。'],
    ['用户与专家研究', '结合专家访谈及 30 名用户实测，通过眼动、访谈和任务日志收集体验证据。'],
    ['评估标准转化', '将用户研究结果整理为座舱体验评估标准，为量产阶段的体验评审提供基准。']
  ], tools: 'Python · SPSS · 眼动 · 专家访谈 · 任务日志' },

];

function ProjectPage({ index }) {
  const project = projects[index];
  const detail = projectDetails[index];
  return <>
    <header className="header"><nav aria-label="主导航"><a className="home-link" href="#top">Homepage</a><div className="header-links"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div></nav></header>
    <main className="container project-page">
      <a className="back-link" href="#projects">← 返回项目列表</a>
      <p className="detail-meta">{project.tag} · {project.year}</p>
      <h1>{project.title}</h1><p className="detail-lead">{project.summary}</p>
      <section><h2>项目背景</h2><p>{detail.background}</p></section>
      <section><h2>工作内容</h2>{detail.work.map(([title, text]) => <div className="work-block" key={title}><h3>{title}</h3><p>{text}</p></div>)}</section>
      <section><h2>成果与产出</h2><ul className="outcome-list">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>方法与工具</h2><p>{detail.tools}</p></section>
      {project.link && <a className="repository-link" href={project.link} target="_blank" rel="noreferrer"><Github size={16}/> 查看项目代码 <ArrowUpRight size={14}/></a>}
      <nav className="project-pagination" aria-label="项目切换">
        {index > 0 ? <a href={`#/projects/${projectDetails[index - 1].slug}`}><small>← 上一个项目</small><span>{projects[index - 1].title}</span></a> : <span/>}
        {index < projects.length - 1 && <a href={`#/projects/${projectDetails[index + 1].slug}`}><small>下一个项目 →</small><span>{projects[index + 1].title}</span></a>}
      </nav>
      <footer><a href="#projects">返回项目列表</a><a href="mailto:rzgshr@126.com">联系我</a></footer>
    </main>
  </>;
}

function Router() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const slug = hash.startsWith('#/projects/') ? hash.slice(11) : null;
  const index = projectDetails.findIndex(item => item.slug === slug);
  useEffect(() => {
    document.title = index >= 0 ? `${projects[index].title} | 郭珊睿` : '郭珊睿 | AI 产品经理作品集';
    if (slug !== null) window.scrollTo({ top: 0, behavior: 'instant' });
    else document.getElementById(hash.slice(1) || 'top')?.scrollIntoView();
  }, [hash, index, slug]);
  if (slug !== null && index < 0) return <main className="container project-page"><h1>未找到该项目</h1><a href="#projects">返回项目列表</a></main>;
  return index >= 0 ? <ProjectPage index={index}/> : <App/>;
}

function App() {
  return <>
    <header className="header" id="top">
      <nav aria-label="主导航">
        <a className="home-link" href="#top">Homepage</a>
        <div className="header-links"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      </nav>
    </header>
    <main className="container">
      <h1>Shanrui Guo <span lang="zh-CN">郭珊睿</span></h1>
      <p className="subtitle">工业设计工程硕士 · 上海交通大学</p>
      <p className="email"><a href="mailto:rzgshr@126.com">rzgshr@126.com</a></p>
      <section className="profile" aria-label="个人简介">
        <div className="avatar" role="img" aria-label="郭珊睿姓名标识"><span>郭珊睿</span><small>Shanrui Guo</small></div>
        <p>我是<strong>上海交通大学工业设计工程硕士</strong>，聚焦 AI 产品、智能驾驶系统架构、智能软硬件一体化与用户研究。希望把技术可能性转化为用户愿意用、研发能验收的产品。</p>
        <p>我的经历覆盖需求定义、竞品分析、用户研究、硬件打样、算法协同与产品落地。曾参与 AI Web 产品、ROS2 机械臂与智能座舱评估体系项目，将用户证据、技术边界和评测指标连接起来。</p>
        <p>在<strong>地平线 HSD 系统架构实习</strong>中，我参与 OTA 问题闭环、评测集构建、3DGS 仿真回灌与 K-turn 功能验收；在笔灵海外版 Web 产品实践中，负责 PRD、模型接口规范、竞品研究与高保真原型。</p>
      </section>
      <div className="social" id="contact">
        <a href="mailto:rzgshr@126.com"><Mail size={15}/> Email</a>
        <a href="https://github.com/guoshanrui123" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>
        <a href="/files/guo-shanrui-cv.pdf" target="_blank" rel="noreferrer"><FileText size={15}/> 简历（CV）</a>
      </div>
      <div className="timelines" id="experience">
        <section><h2>Education <span>教育经历</span></h2><div className="timeline">
          {education.map(item => <article className="timeline-item" key={item.title}><h3>{item.title}</h3><p className="entry-subtitle">{item.subtitle}</p><p className="entry-detail">{item.detail}</p></article>)}
        </div></section>
        <section><h2>Experience <span>实践经历</span></h2><div className="timeline">
          {experiences.map(item => <article className="timeline-item" key={item.org}><p className="date">{item.time}</p><h3>{item.org}</h3><p className="entry-subtitle">{item.role}</p><p className="entry-detail">{item.detail}</p></article>)}
        </div></section>
      </div>
      <section className="projects" id="projects"><h2>Projects <span>项目经历</span></h2><div className="project-list">
        {projects.map((project, index) => { const Icon = project.icon; return <a className="project project-card-link" href={`#/projects/${projectDetails[index].slug}`} key={project.title}>
          <div className="project-thumb" aria-hidden="true"><Icon size={29} strokeWidth={1.3}/></div>
          <div className="project-info"><div className="project-heading"><h3>{project.title}</h3><span className="date">{project.year}</span></div><p className="project-summary">{project.summary}</p><span className="read-project">查看项目 <ArrowUpRight size={13}/></span></div>
        </a>; })}
      </div></section>
      <section className="availability"><h2>Get in touch <span>联系我</span></h2><p>正在寻找 AI / 互联网产品经理实习机会。欢迎交流 AI 产品、智能驾驶系统、智能硬件、用户研究与 0–1 原型验证。</p><a href="mailto:rzgshr@126.com">rzgshr@126.com <ArrowUpRight size={14}/></a></section>
      <footer><span>© {new Date().getFullYear()} 郭珊睿</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  </>;
}
createRoot(document.getElementById('root')).render(<Router />);
