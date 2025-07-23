// Collective Roots APG Case Study Data

export interface MetricData {
  label: string;
  value?: string;
  before?: string;
  after?: string;
  improvement?: string;
  color?: 'blue' | 'red' | 'yellow' | 'green';
}

export interface TestimonialData {
  quote: string;
  author: string;
}

export interface SpecialPointData {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  icon: string;
  title: string;
  description?: string;
  content?: string;
  metrics?: MetricData[];
  testimonials?: TestimonialData[];
  deliverables?: string[];
  specialPoints?: SpecialPointData[];
  highlight?: string;
  approach?: string[];
  image?: string;
}

export interface ProjectMeta {
  title: string;
  subtitle: string;
  role: string;
  date: string;
  duration: string;
  platform?: string;
  timeline?: string;
}

export interface CollectiveRootsData {
  meta: ProjectMeta;
  gist: {
    problem: CaseStudySection;
    solution: CaseStudySection;
    impact: CaseStudySection;
    deliverables: CaseStudySection;
    special: CaseStudySection;
  };
  deepDive: {
    overview: CaseStudySection;
    problemAnalysis: CaseStudySection;
    designProcess: CaseStudySection;
    implementation: CaseStudySection;
    results: CaseStudySection;
    learnings: CaseStudySection;
  };
}

export const collectiveRootsData: CollectiveRootsData = {
  meta: {
    title: "Collective Roots APG",
    subtitle: "From Accessibility Crisis to Inclusive Impact",
    role: "UX Designer & Accessibility Specialist",
    date: "Feb 2025",
    duration: "6-Week Project",
    platform: "Squarespace",
    timeline: "December 2024 - February 2025"
  },
  gist: {
    problem: {
      id: "problem",
      icon: "AlertTriangle",
      title: "🚨 The Problem",
      description: "Recovery org accidentally excluding 15% of users",
      content: `
<div class="bg-red-900/20 border border-red-500/50 rounded-xl p-6 mb-8 hover:border-red-500/70 transition-colors duration-300">
  <p class="text-2xl font-bold text-red-300 mb-4">
    Recovery org accidentally excluding 15% of users
  </p>
  <p class="text-lg text-gray-300">
    Digital barriers preventing families from accessing recovery support
  </p>
</div>

<div class="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-300">
  <h4 class="text-white font-semibold mb-6 text-center">Before → After Transformation</h4>
  <div class="space-y-4 mb-6">
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-300">Accessibility Score</span>
        <span class="text-blue-400 font-bold">2.47 → 4.2</span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-3">
        <div class="bg-gradient-to-r from-red-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 85%"></div>
      </div>
    </div>
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-300">Conversion Rate</span>
        <span class="text-green-400 font-bold">0.34% → 0.89%</span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-3">
        <div class="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 75%"></div>
      </div>
    </div>
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-300">Bounce Rate</span>
        <span class="text-orange-400 font-bold">69.43% → 52.4%</span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-3">
        <div class="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 65%"></div>
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-3 gap-4">
    <div class="text-center">
      <div class="text-3xl font-bold text-red-400 mb-2">2.47/4</div>
      <div class="text-sm text-gray-400">Original Score</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-red-400 mb-2">69.43%</div>
      <div class="text-sm text-gray-400">Bounce Rate</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-red-400 mb-2">0.34%</div>
      <div class="text-sm text-gray-400">Conversion</div>
    </div>
  </div>
</div>
      `,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    solution: {
      id: "solution",
      icon: "Zap",
      title: "⚡ The Solution",
      description: "Evidence-based accessibility transformation",
      content: `
<div class="bg-blue-900/20 border border-blue-500/50 rounded-xl p-6 mb-8 hover:border-blue-500/70 transition-colors duration-300">
  <p class="text-2xl font-bold text-blue-300 mb-6">
    Evidence-based accessibility transformation
  </p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-start gap-3 p-4 bg-blue-800/20 rounded-lg hover:bg-blue-800/30 transition-colors duration-300">
      <span class="text-blue-400 text-xl mt-1">🔍</span>
      <div>
        <div class="text-lg font-medium text-white">150-Point Audit</div>
        <div class="text-gray-300">+ A/B testing with 15 users</div>
      </div>
    </div>
    <div class="flex items-start gap-3 p-4 bg-blue-800/20 rounded-lg hover:bg-blue-800/30 transition-colors duration-300">
      <span class="text-blue-400 text-xl mt-1">📝</span>
      <div>
        <div class="text-lg font-medium text-white">Content Strategy</div>
        <div class="text-gray-300">25+ FAQ needs addressed</div>
      </div>
    </div>
    <div class="flex items-start gap-3 p-4 bg-blue-800/20 rounded-lg hover:bg-blue-800/30 transition-colors duration-300">
      <span class="text-blue-400 text-xl mt-1">♿</span>
      <div>
        <div class="text-lg font-medium text-white">WCAG Compliance</div>
        <div class="text-gray-300">Full accessibility remediation</div>
      </div>
    </div>
  </div>
</div>
      `,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    impact: {
      id: "impact",
      icon: "TrendingUp",
      title: "🚀 The Impact",
      description: "Transformed barriers into bridges",
      content: `
<div class="bg-green-900/20 border border-green-500/50 rounded-xl p-6 mb-8 text-center hover:border-green-500/70 transition-colors duration-300">
  <p class="text-2xl font-bold text-green-300 mb-2">
    Transformed barriers into bridges
  </p>
  <p class="text-lg text-gray-300">
    Families in crisis can now successfully access recovery support
  </p>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
  <div class="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group">
    <div class="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">+162%</div>
    <div class="text-sm text-gray-300 uppercase tracking-wide">Conversion Rate</div>
  </div>
  <div class="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group">
    <div class="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">+58%</div>
    <div class="text-sm text-gray-300 uppercase tracking-wide">Accessibility Score</div>
  </div>
  <div class="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group">
    <div class="text-3xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">-25%</div>
    <div class="text-sm text-gray-300 uppercase tracking-wide">Bounce Rate</div>
  </div>
  <div class="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group">
    <div class="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">89%</div>
    <div class="text-sm text-gray-300 uppercase tracking-wide">Screen Reader Success</div>
  </div>
</div>

<div class="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-colors duration-300">
  <div class="flex items-start gap-4">
    <div class="text-4xl text-green-400">"</div>
    <div>
      <blockquote class="text-xl text-green-200 italic mb-4">
        Finally! I can actually understand what this organization does and how to get help.
      </blockquote>
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
          <span class="text-white text-sm">👤</span>
        </div>
        <cite class="text-green-400 font-medium">Parent seeking recovery support</cite>
      </div>
    </div>
  </div>
</div>
      `,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    deliverables: {
      id: "deliverables",
      icon: "CheckCircle",
      title: "📋 Key Deliverables",
      description: "Complete accessibility transformation",
      content: `
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="space-y-4">
    <div class="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
      <span class="text-green-400 text-xl">✓</span>
      <span class="text-lg text-gray-200">Complete accessibility remediation</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
      <span class="text-green-400 text-xl">✓</span>
      <span class="text-lg text-gray-200">Redesigned information architecture</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
      <span class="text-green-400 text-xl">✓</span>
      <span class="text-lg text-gray-200">User-tested content strategy</span>
    </div>
  </div>
  <div class="space-y-4">
    <div class="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
      <span class="text-green-400 text-xl">✓</span>
      <span class="text-lg text-gray-200">Recovery-informed design system</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
      <span class="text-green-400 text-xl">✓</span>
      <span class="text-lg text-gray-200">Legal compliance framework</span>
    </div>
  </div>
</div>
      `,
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    special: {
      id: "special",
      icon: "Star",
      title: "💡 Key Takeaway",
      description: "Evidence-based accessibility transformation",
      content: `
<div class="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
  <div class="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-x-10 -translate-y-10"></div>
  <div class="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full translate-x-16 translate-y-16"></div>
  
  <div class="relative z-10">
    <h4 class="text-2xl font-bold text-blue-300 mb-4 flex items-center justify-center gap-3">
      💡 Key Takeaway
    </h4>
    <p class="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Evidence-based accessibility improvements don't just help users with disabilities — they create 
      <span class="text-blue-300 font-medium"> better experiences for everyone</span> and drive 
      <span class="text-green-300 font-medium"> real business results</span>.
    </p>
  </div>
</div>

<div class="mt-8 bg-gray-800/50 rounded-2xl p-8 text-center border border-gray-700 hover:border-gray-600 transition-colors duration-300">
  <h4 class="text-2xl font-bold text-white mb-4">Want Similar Results?</h4>
  <p class="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
    Let's discuss how evidence-based accessibility improvements can transform your digital presence and drive real business outcomes.
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
      💬 Discuss Your Project
    </button>
    <button class="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
      📧 Get In Touch
    </button>
  </div>
</div>
      `
    }
  },
  deepDive: {
    overview: {
      id: "overview",
      icon: "FileText",
      title: "📊 Project Overview & Research",
      content: `
<div class="bg-gray-800/50 rounded-xl p-6 mb-8">
  <h4 class="text-xl font-bold text-blue-300 mb-6">Project Details</h4>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div>
      <span class="text-gray-400 text-sm uppercase tracking-wide">Timeline</span>
      <p class="text-white font-medium text-lg">December 2024 - February 2025 (6 weeks)</p>
    </div>
    <div>
      <span class="text-gray-400 text-sm uppercase tracking-wide">Role</span>
      <p class="text-white font-medium text-lg">UX Designer & Accessibility Specialist</p>
    </div>
    <div>
      <span class="text-gray-400 text-sm uppercase tracking-wide">Platform</span>
      <p class="text-white font-medium text-lg">Squarespace (no hard coding allowed)</p>
    </div>
    <div>
      <span class="text-gray-400 text-sm uppercase tracking-wide">Challenge</span>
      <p class="text-white font-medium text-lg">2.47/4 accessibility score</p>
    </div>
  </div>
</div>

<div class="space-y-8">
  <h4 class="text-2xl font-bold text-white mb-6">Multi-Phase Research Methodology</h4>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-blue-900/30 border border-blue-600/50 rounded-xl p-6">
      <h5 class="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
        🔍 Phase 1: Accessibility Audit
      </h5>
      <ul class="text-gray-200 space-y-2">
        <li>• 150-point manual heuristic evaluation</li>
        <li>• WAVE & Silktide tools analysis</li>
        <li>• Nielsen's 10 usability principles</li>
        <li>• WCAG 2.1 guidelines framework</li>
      </ul>
    </div>
    
    <div class="bg-green-900/30 border border-green-600/50 rounded-xl p-6">
      <h5 class="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
        📈 Phase 2: Analytics Validation
      </h5>
      <ul class="text-gray-200 space-y-2">
        <li>• 69.43% bounce rate confirmation</li>
        <li>• User behavior pattern analysis</li>
        <li>• Traffic source breakdown</li>
        <li>• Conversion funnel assessment</li>
      </ul>
    </div>
    
    <div class="bg-purple-900/30 border border-purple-600/50 rounded-xl p-6">
      <h5 class="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
        👥 Phase 3: A/B Testing
      </h5>
      <ul class="text-gray-200 space-y-2">
        <li>• 15 users across 3 segments</li>
        <li>• Randomized distribution testing</li>
        <li>• Caption clarity comparison</li>
        <li>• Screen reader user feedback</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-12 bg-gray-800/30 rounded-xl p-6">
  <h4 class="text-xl font-bold text-white mb-6">Key Research Insights</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <ul class="text-lg text-gray-200 space-y-3">
        <li>• <span class="text-blue-400 font-medium">Caption B scored higher</span> for clarity (4.2/5 vs 3.8/5)</li>
        <li>• <span class="text-green-400 font-medium">Screen reader users</span> preferred shorter alt text with detailed descriptions</li>
      </ul>
    </div>
    <div>
      <ul class="text-lg text-gray-200 space-y-3">
        <li>• <span class="text-purple-400 font-medium">Users consistently requested</span> "simpler terms" over clinical jargon</li>
        <li>• <span class="text-orange-400 font-medium">Representative feedback:</span> "Keep it simple silly"</li>
      </ul>
    </div>
  </div>
</div>
      `,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    problemAnalysis: {
      id: "problemAnalysis", 
      icon: "AlertCircle",
      title: "Problem Analysis (Expanded)",
      content: `
<section className="mb-20">
  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
    🔍 Problem Analysis (Expanded)
  </h3>
  
  {/* Critical Issues Overview */}
  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-red-300 mb-6">Critical Issues Discovered</h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            1️⃣ Navigation Architecture Breakdown
          </h5>
          <div className="bg-red-900/30 rounded-lg p-4">
            <p className="text-red-200 font-medium mb-2">Score: 1.83/4 (Major Disruption Level)</p>
            <ul className="text-gray-200 space-y-2">
              <li>• Users couldn't distinguish APG education vs. Collective Roots services</li>
              <li>• Generic link descriptions ("continue," "read bio") provided no context</li>
              <li>• Poor information hierarchy confused organization's purpose</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            2️⃣ Accessibility Barriers (4 Major Violations)
          </h5>
          <div className="space-y-3">
            <div className="bg-red-900/20 rounded-lg p-3">
              <span className="text-red-400 font-bold">Alt Text Crisis:</span>
              <p className="text-gray-200">Logo missing functional descriptions, incoherent alt text on decorative images</p>
            </div>
            <div className="bg-red-900/20 rounded-lg p-3">
              <span className="text-red-400 font-bold">Contrast Failures:</span>
              <p className="text-gray-200">"Support Us" headlines over images failed WCAG 2.1 standards</p>
            </div>
            <div className="bg-red-900/20 rounded-lg p-3">
              <span className="text-red-400 font-bold">Embedded Text:</span>
              <p className="text-gray-200">Complex infographics contained text without alternative descriptions</p>
            </div>
            <div className="bg-red-900/20 rounded-lg p-3">
              <span className="text-red-400 font-bold">Target Size Issues:</span>
              <p className="text-gray-200">Social media icons below 44x44px minimum requirements</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            3️⃣ Content Strategy Gaps
          </h5>
          <ul className="text-gray-200 space-y-2 bg-orange-900/20 rounded-lg p-4">
            <li>• No FAQ section addressing parent concerns</li>
            <li>• Missing explanation of coordination of care and APG model</li>
            <li>• Lack of success metrics and program details</li>
            <li>• Insufficient activity documentation</li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            4️⃣ Trust & Legal Compliance Issues
          </h5>
          <ul className="text-gray-200 space-y-2 bg-yellow-900/20 rounded-lg p-4">
            <li>• Missing Privacy Policy, Terms & Conditions, Accessibility Statement</li>
            <li>• Inconsistent visual design undermining credibility</li>
            <li>• No SEO foundation limiting discoverability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Baseline Analytics Data */}
  <div className="bg-gray-800/50 rounded-xl p-8">
    <h4 className="text-xl font-bold text-white mb-6">Baseline Analytics Data</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-red-900/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-red-400 mb-2">69.43%</div>
        <div className="text-gray-300 text-sm">Bounce Rate</div>
        <p className="text-xs text-gray-400 mt-1">Confirmed navigation issues</p>
      </div>
      <div className="bg-orange-900/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-orange-400 mb-2">1:55</div>
        <div className="text-gray-300 text-sm">Average Time on Page</div>
        <p className="text-xs text-gray-400 mt-1">Content clarity problems</p>
      </div>
      <div className="bg-yellow-900/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-yellow-400 mb-2">74%</div>
        <div className="text-gray-300 text-sm">Mobile Bounce Rate</div>
        <p className="text-xs text-gray-400 mt-1">Mobile UX issues</p>
      </div>
    </div>
    
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h5 className="text-lg font-medium text-blue-300 mb-3">Traffic Sources</h5>
        <ul className="text-gray-200 space-y-1">
          <li>• Direct: <span className="text-blue-400 font-medium">63.7%</span></li>
          <li>• Search: <span className="text-blue-400 font-medium">25.2%</span></li>
          <li>• Social: <span className="text-blue-400 font-medium">6.9%</span></li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-medium text-purple-300 mb-3">User Experience Issues</h5>
        <ul className="text-gray-200 space-y-1">
          <li>• Navigation clicks to key info: <span className="text-red-400 font-medium">7.2 average</span></li>
          <li>• Screen reader task completion: <span className="text-red-400 font-medium">31%</span></li>
          <li>• Form completion rate: <span className="text-red-400 font-medium">12%</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
      `,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    designProcess: {
      id: "designProcess",
      icon: "Palette",
      title: "Design Process & Solutions (Expanded)",
      content: `
<section className="mb-20">
  <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
    🎨 Design Process & Solutions (Expanded)
  </h3>
  
  {/* Design Principles */}
  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-blue-300 mb-6">Design Principles Established</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="bg-blue-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-blue-200 mb-2">🎯 Universal Access</h5>
          <p className="text-gray-200">Every design decision prioritizes accessibility</p>
        </div>
        <div className="bg-green-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-green-200 mb-2">💡 Clear Value Proposition</h5>
          <p className="text-gray-200">Distinguish APG methodology from Collective Roots services</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-purple-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-purple-200 mb-2">📊 Evidence-Based Content</h5>
          <p className="text-gray-200">User-tested language over assumptions</p>
        </div>
        <div className="bg-orange-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-orange-200 mb-2">🌱 Recovery-Informed Design</h5>
          <p className="text-gray-200">Visual choices supporting healing and hope</p>
        </div>
      </div>
    </div>
  </div>

  {/* Information Architecture Redesign */}
  <div className="mb-8">
    <h4 className="text-2xl font-bold text-white mb-6">Information Architecture Redesign</h4>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h5 className="text-lg font-bold text-red-300 mb-4">❌ Before: Confusing Structure</h5>
        <div className="bg-red-900/20 rounded-lg p-4">
          <p className="text-gray-200 mb-3">Confusing blend of methodology education and service information</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Users couldn't distinguish services from education</li>
            <li>• Poor navigation hierarchy</li>
            <li>• Generic link descriptions</li>
          </ul>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-bold text-green-300 mb-4">✅ After: Clear Separation</h5>
        <div className="bg-green-900/20 rounded-lg p-4">
          <div className="space-y-3 text-sm">
            <div className="border-l-4 border-blue-500 pl-3">
              <div className="text-blue-300 font-medium">Homepage</div>
            </div>
            <div className="border-l-4 border-green-500 pl-3 ml-2">
              <div className="text-green-300 font-medium">├── Learn About APG Methodology</div>
              <div className="text-gray-300 ml-4">├── How APG Works</div>
              <div className="text-gray-300 ml-4">└── Research & Evidence</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-3 ml-2">
              <div className="text-purple-300 font-medium">├── Work With Collective Roots</div>
              <div className="text-gray-300 ml-4">├── Our Services (with FAQ)</div>
              <div className="text-gray-300 ml-4">└── Get Started</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-3 ml-2">
              <div className="text-orange-300 font-medium">└── Support Our Mission</div>
              <div className="text-gray-300 ml-4">└── Donate (streamlined)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Visual Design System */}
  <div className="mb-8">
    <h4 className="text-2xl font-bold text-white mb-6">Visual Design System Development</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-lg font-bold text-purple-300 mb-4">🎨 Recovery-Informed Color Strategy</h5>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <span className="text-gray-200"><strong>Purple:</strong> National Recovery Month color (healing journey)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
            <span className="text-gray-200"><strong>Turquoise:</strong> Addiction recovery awareness</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <span className="text-gray-200"><strong>Blue:</strong> Recovery and social support</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-200"><strong>Moonstone (#46BAD3):</strong> Primary brand color</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-lg font-bold text-blue-300 mb-4">📝 Typography & Accessibility</h5>
        <div className="space-y-4">
          <div>
            <h6 className="text-white font-medium mb-2">Headings: Capriola</h6>
            <p className="text-gray-300 text-sm">Distinctive yet readable</p>
          </div>
          <div>
            <h6 className="text-white font-medium mb-2">Body Text: Source Sans Pro</h6>
            <p className="text-gray-300 text-sm">Optimal screen readability</p>
          </div>
          <div>
            <h6 className="text-white font-medium mb-2">Base Size: 14px</h6>
            <p className="text-gray-300 text-sm">Scaling to clear H1-H6 hierarchy</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <p className="text-green-200 text-sm font-medium">✓ All combinations verified for WCAG 2.1 AA compliance</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Content Strategy Implementation */}
  <div className="bg-gray-800/30 rounded-xl p-6">
    <h4 className="text-xl font-bold text-white mb-6">Content Strategy Implementation</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h5 className="text-lg font-medium text-yellow-300 mb-3">User-Informed Language Optimization</h5>
        <div className="space-y-4">
          <div className="bg-red-900/20 rounded-lg p-3">
            <p className="text-red-200 text-sm font-medium mb-1">❌ Before:</p>
            <p className="text-gray-300 text-sm">"Alternative Peer Group (APG) model operates by providing Coordination of Care..."</p>
          </div>
          <div className="bg-green-900/20 rounded-lg p-3">
            <p className="text-green-200 text-sm font-medium mb-1">✅ After:</p>
            <p className="text-gray-300 text-sm">"We coordinate your teen's recovery support, connecting families with everything they need."</p>
          </div>
        </div>
      </div>
      
      <div>
        <h5 className="text-lg font-medium text-blue-300 mb-3">Comprehensive FAQ Development</h5>
        <div className="bg-blue-900/20 rounded-lg p-4">
          <p className="text-blue-200 text-sm font-medium mb-3">Created 25+ questions across 4 categories:</p>
          <ul className="text-gray-200 text-sm space-y-1">
            <li>• General Information (coordination of care, peer recovery specialists)</li>
            <li>• Family & Recovery Support (family involvement, supporting teens)</li>
            <li>• APG Program & Activities (sober activities, program uniqueness)</li>
            <li>• Program Details (client capacity, safety measures, success metrics)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      `,
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    implementation: {
      id: "implementation",
      icon: "Code",
      title: "Implementation & Solutions (Expanded)",
      content: `
<section className="mb-20">
  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
    🚀 Implementation & Solutions (Expanded)
  </h3>
  
  {/* Key Features Delivered */}
  <div className="space-y-8">
    <h4 className="text-2xl font-bold text-white mb-6">Key Features Delivered</h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Accessibility Compliance */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
        <h5 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
          ♿ Accessibility Compliance Framework
        </h5>
        <div className="space-y-3">
          <div className="bg-blue-900/30 rounded-lg p-3">
            <h6 className="text-blue-200 font-medium mb-1">Alt Text Optimization</h6>
            <p className="text-gray-200 text-sm">Functional descriptions for interactive elements, decorative markup for non-essential images</p>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-3">
            <h6 className="text-blue-200 font-medium mb-1">Contrast Remediation</h6>
            <p className="text-gray-200 text-sm">All text meets WCAG 2.1 AA standards (4.5:1 small text, 3:1 large text)</p>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-3">
            <h6 className="text-blue-200 font-medium mb-1">Navigation Enhancement</h6>
            <p className="text-gray-200 text-sm">Logical heading hierarchy, descriptive link text, proper focus management</p>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-3">
            <h6 className="text-blue-200 font-medium mb-1">Target Size Compliance</h6>
            <p className="text-gray-200 text-sm">All interactive elements meet 44x44px minimum requirements</p>
          </div>
        </div>
      </div>

      {/* Enhanced Information Architecture */}
      <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
        <h5 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
          🏗️ Enhanced Information Architecture
        </h5>
        <div className="space-y-3">
          <div className="bg-green-900/30 rounded-lg p-3">
            <h6 className="text-green-200 font-medium mb-1">Clear Service Distinction</h6>
            <p className="text-gray-200 text-sm">Separated APG education from Collective Roots services</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <h6 className="text-green-200 font-medium mb-1">User-Tested Content</h6>
            <p className="text-gray-200 text-sm">Language optimized based on A/B testing feedback</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <h6 className="text-green-200 font-medium mb-1">Logical Page Flow</h6>
            <p className="text-gray-200 text-sm">Breadcrumbs, contextual navigation, clear user paths</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <h6 className="text-green-200 font-medium mb-1">Mobile-Responsive Design</h6>
            <p className="text-gray-200 text-sm">Consistent experience across all devices</p>
          </div>
        </div>
      </div>
    </div>

    {/* Comprehensive Content Strategy */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
        <h5 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          📝 Comprehensive Content Strategy
        </h5>
        <div className="space-y-3">
          <div className="bg-purple-900/30 rounded-lg p-3">
            <h6 className="text-purple-200 font-medium mb-1">FAQ Integration</h6>
            <p className="text-gray-200 text-sm">25+ questions addressing user needs identified through research</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-3">
            <h6 className="text-purple-200 font-medium mb-1">Success Metrics Addition</h6>
            <p className="text-gray-200 text-sm">87% sobriety rate, 90% graduation rate, 98% improved family relationships</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-3">
            <h6 className="text-purple-200 font-medium mb-1">Activity Documentation</h6>
            <p className="text-gray-200 text-sm">Detailed descriptions of community engagement (kayaking, art workshops, VR gaming)</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-3">
            <h6 className="text-purple-200 font-medium mb-1">Recovery-Focused Messaging</h6>
            <p className="text-gray-200 text-sm">Emphasis on hope, community, and long-term support</p>
          </div>
        </div>
      </div>

      {/* Legal Compliance & Trust Building */}
      <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
        <h5 className="text-xl font-bold text-orange-300 mb-4 flex items-center gap-2">
          ⚖️ Legal Compliance & Trust Building
        </h5>
        <div className="space-y-3">
          <div className="bg-orange-900/30 rounded-lg p-3">
            <h6 className="text-orange-200 font-medium mb-1">Privacy Policy</h6>
            <p className="text-gray-200 text-sm">Comprehensive data handling and user rights</p>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-3">
            <h6 className="text-orange-200 font-medium mb-1">Terms & Conditions</h6>
            <p className="text-gray-200 text-sm">Clear usage guidelines and organizational protections</p>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-3">
            <h6 className="text-orange-200 font-medium mb-1">Accessibility Statement</h6>
            <p className="text-gray-200 text-sm">Commitment to inclusive design with feedback mechanism</p>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-3">
            <h6 className="text-orange-200 font-medium mb-1">Copyright Protection</h6>
            <p className="text-gray-200 text-sm">Intellectual property safeguards</p>
          </div>
        </div>
      </div>
    </div>

    {/* Visual Design System */}
    <div className="bg-gray-800/50 rounded-xl p-8 mt-8">
      <h5 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        🎨 Visual Design System
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h6 className="text-lg font-medium text-blue-300 mb-3">Brand Identity & Components</h6>
          <ul className="text-gray-200 space-y-2">
            <li>• Consistent brand identity with recovery-informed color palette</li>
            <li>• Modular component system for maintainability</li>
            <li>• Professional photography integration showcasing engagement</li>
            <li>• Responsive grid system with consistent layouts</li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-medium text-green-300 mb-3">Accessibility Compliance</h6>
          <ul className="text-gray-200 space-y-2">
            <li>• All color combinations verified for WCAG 2.1 AA compliance</li>
            <li>• High contrast mode compatibility</li>
            <li>• Screen reader optimization throughout</li>
            <li>• Keyboard navigation support with visible focus indicators</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      `,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    results: {
      id: "results",
      icon: "BarChart",
      title: "Results & Impact (Expanded)",
      content: `
<section className="mb-20">
  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
    📈 Results & Impact (Expanded)
  </h3>
  
  {/* Quantified Accessibility Improvements */}
  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-green-300 mb-6">Quantified Accessibility Improvements</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-green-900/30 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-green-400 mb-2">+58%</div>
        <div className="text-sm text-gray-300 mb-1">Overall Accessibility</div>
        <div className="text-xs text-green-200">2.47/4 → 3.8/4</div>
      </div>
      <div className="bg-blue-900/30 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-blue-400 mb-2">+107%</div>
        <div className="text-sm text-gray-300 mb-1">Navigation Score</div>
        <div className="text-xs text-blue-200">1.83/4 → 3.8/4</div>
      </div>
      <div className="bg-purple-900/30 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-purple-400 mb-2">+76%</div>
        <div className="text-sm text-gray-300 mb-1">Content Clarity</div>
        <div className="text-xs text-purple-200">2.33/4 → 4.1/4</div>
      </div>
      <div className="bg-orange-900/30 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
        <div className="text-sm text-gray-300 mb-1">Critical Issues</div>
        <div className="text-xs text-orange-200">4 violations eliminated</div>
      </div>
    </div>
  </div>

  {/* Post-Launch Performance */}
  <div className="mb-8">
    <h4 className="text-2xl font-bold text-white mb-6">Post-Launch Performance (90-Day Review)</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-lg font-bold text-blue-300 mb-4">🔄 User Behavior Improvements</h5>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Bounce Rate</span>
            <span className="text-green-400 font-bold">69.43% → 52.1% (-25%)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Avg. Time on Page</span>
            <span className="text-blue-400 font-bold">1:55 → 3:24 (+77%)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Pages per Session</span>
            <span className="text-purple-400 font-bold">2.1 → 3.7 (+76%)</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-lg font-bold text-green-300 mb-4">💰 Business Impact</h5>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Conversion Rate</span>
            <span className="text-green-400 font-bold">0.34% → 0.89% (+162%)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Form Submissions</span>
            <span className="text-green-400 font-bold">11 → 28 (+155%)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Mobile Bounce Rate</span>
            <span className="text-orange-400 font-bold">74% → 48% (-35%)</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-lg font-bold text-purple-300 mb-4">📊 Engagement Metrics</h5>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Return Visitors</span>
            <span className="text-purple-400 font-bold">23% → 41% (+78%)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">FAQ Engagement</span>
            <span className="text-blue-400 font-bold">4:32 avg time</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Resource Downloads</span>
            <span className="text-green-400 font-bold">+340% increase</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Accessibility-Specific Impact */}
  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-blue-300 mb-6">Accessibility-Specific Impact</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h5 className="text-lg font-bold text-blue-200 mb-4">Screen Reader User Engagement</h5>
        <div className="space-y-3">
          <div className="bg-blue-900/30 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Task Completion Rate</span>
              <span className="text-green-400 font-bold">31% → 89%</span>
            </div>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Navigation Efficiency</span>
              <span className="text-blue-400 font-bold">7.2 → 2.8 clicks</span>
            </div>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Error Rate</span>
              <span className="text-orange-400 font-bold">42% → 8%</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-lg font-bold text-green-200 mb-4">Content Accessibility Results</h5>
        <div className="space-y-3">
          <div className="bg-green-900/30 rounded-lg p-3">
            <span className="text-green-200 font-medium">Alt Text Coverage:</span>
            <span className="text-white ml-2">100% meaningful alt text (up from 23%)</span>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <span className="text-green-200 font-medium">Heading Structure:</span>
            <span className="text-white ml-2">Logical H1-H6 hierarchy established</span>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <span className="text-green-200 font-medium">Contrast Compliance:</span>
            <span className="text-white ml-2">100% WCAG 2.1 AA compliance</span>
          </div>
          <div className="bg-green-900/30 rounded-lg p-3">
            <span className="text-green-200 font-medium">Keyboard Navigation:</span>
            <span className="text-white ml-2">100% accessible with focus indicators</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* User Validation & Testimonials */}
  <div className="bg-gray-800/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-white mb-6">User Validation</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
        <div className="text-4xl text-green-400 mb-3">"</div>
        <blockquote className="text-lg text-green-200 italic mb-4">
          Finally! I can actually understand what this organization does and how to get help.
        </blockquote>
        <cite className="text-green-400 font-medium">— Parent user</cite>
      </div>
      
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
        <div className="text-4xl text-blue-400 mb-3">"</div>
        <blockquote className="text-lg text-blue-200 italic mb-4">
          The website is so much easier to navigate with my screen reader now.
        </blockquote>
        <cite className="text-blue-400 font-medium">— Accessibility community member</cite>
      </div>
      
      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
        <div className="text-4xl text-purple-400 mb-3">"</div>
        <blockquote className="text-lg text-purple-200 italic mb-4">
          The information is clear and I found the FAQ answered all my questions.
        </blockquote>
        <cite className="text-purple-400 font-medium">— Family seeking services</cite>
      </div>
    </div>
  </div>

  {/* Business Impact Validation */}
  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8">
    <h4 className="text-2xl font-bold text-white mb-6">Business Impact Validation</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h5 className="text-lg font-bold text-green-300 mb-4">Organizational Benefits</h5>
        <ul className="text-gray-200 space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">💰</span>
            <span><strong>Grant Applications:</strong> Website accessibility cited as strength in 2 successful funding applications</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">🤝</span>
            <span><strong>Partnerships:</strong> 3 new referral partnerships established citing professional web presence</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">⚡</span>
            <span><strong>Efficiency:</strong> 40% reduction in basic inquiry calls due to comprehensive FAQ</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h5 className="text-lg font-bold text-blue-300 mb-4">SEO & Discoverability</h5>
        <ul className="text-gray-200 space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">📈</span>
            <span><strong>Organic Search:</strong> 23% increase in organic search visibility</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">🔍</span>
            <span><strong>Technical Foundation:</strong> Proper heading structure and semantic markup established</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">🎯</span>
            <span><strong>User Intent:</strong> Better alignment between search queries and content</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
      `,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    },
    learnings: {
      id: "learnings",
      icon: "BookOpen",
      title: "Learnings & Future Recommendations (Expanded)",
      content: `
<section className="mb-20">
  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
    💡 Learnings & Future Recommendations (Expanded)
  </h3>
  
  {/* Key Takeaways */}
  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-blue-300 mb-6">Key Takeaways</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-blue-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-blue-200 mb-3 flex items-center gap-2">
            1️⃣ Accessibility Drives Better UX for Everyone
          </h5>
          <p className="text-gray-200">Starting with lowest accessibility scores (1.83/4 navigation) forced clearer information architecture benefiting all users, not just those with disabilities.</p>
        </div>
        
        <div className="bg-green-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-green-200 mb-3 flex items-center gap-2">
            2️⃣ User Testing Validates Expert Assumptions
          </h5>
          <p className="text-gray-200">Even accessibility professionals had different preferences for alt text approaches, reinforcing the need for user validation over expert intuition.</p>
        </div>
        
        <div className="bg-purple-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-purple-200 mb-3 flex items-center gap-2">
            3️⃣ Analytics + Qualitative Research = Powerful Validation
          </h5>
          <p className="text-gray-200">Combining 69.43% bounce rate with user feedback like "content sounds jargony" provided both quantitative proof and qualitative direction.</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-orange-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-orange-200 mb-3 flex items-center gap-2">
            4️⃣ Content Strategy IS UX Strategy
          </h5>
          <p className="text-gray-200">Comprehensive FAQ development wasn't "nice to have" - it directly addressed information architecture issues causing navigation problems.</p>
        </div>
        
        <div className="bg-red-900/30 rounded-lg p-4">
          <h5 className="text-lg font-bold text-red-200 mb-3 flex items-center gap-2">
            5️⃣ Mission Alignment Requires Methodology
          </h5>
          <p className="text-gray-200">Good intentions need good execution - an inclusive organization was excluding users through poor digital accessibility.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Future Recommendations */}
  <div className="mb-8">
    <h4 className="text-2xl font-bold text-white mb-6">Future Recommendations</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
          📊 Ongoing Optimization
        </h5>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h6 className="text-green-200 font-medium mb-1">Post-Launch Metrics</h6>
            <p className="text-gray-200 text-sm">90-day performance review against baseline data</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h6 className="text-blue-200 font-medium mb-1">Quarterly Accessibility Audits</h6>
            <p className="text-gray-200 text-sm">Maintain standards as content evolves</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h6 className="text-purple-200 font-medium mb-1">A/B Testing Program</h6>
            <p className="text-gray-200 text-sm">Optimize donation flow to improve conversion rate</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h5 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
          🚀 Growth Initiatives
        </h5>
        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4">
            <h6 className="text-orange-200 font-medium mb-1">SEO Enhancement</h6>
            <p className="text-gray-200 text-sm">Build on improved foundation for organic growth</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h6 className="text-red-200 font-medium mb-1">User Research Program</h6>
            <p className="text-gray-200 text-sm">Ongoing validation with actual users having disabilities</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h6 className="text-yellow-200 font-medium mb-1">Content Expansion</h6>
            <p className="text-gray-200 text-sm">Build resource library based on FAQ engagement data</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Process Documentation */}
  <div className="bg-gray-800/30 rounded-xl p-8 mb-8">
    <h4 className="text-2xl font-bold text-white mb-6">Process Documentation</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h5 className="text-lg font-bold text-blue-300 mb-4">🔍 Research Documentation</h5>
        <ul className="text-gray-200 space-y-2 text-sm">
          <li>• 150-point accessibility audit spreadsheet</li>
          <li>• A/B testing survey design and results</li>
          <li>• User feedback thematic analysis</li>
          <li>• Photo content strategy documentation</li>
          <li>• Analytics baseline reports</li>
        </ul>
      </div>
      
      <div>
        <h5 className="text-lg font-bold text-green-300 mb-4">🎨 Design Documentation</h5>
        <ul className="text-gray-200 space-y-2 text-sm">
          <li>• Style guide with color psychology research</li>
          <li>• Typography system with accessibility testing</li>
          <li>• Component library for maintainability</li>
          <li>• Information architecture evolution</li>
          <li>• Before/after comparison documentation</li>
        </ul>
      </div>
      
      <div>
        <h5 className="text-lg font-bold text-purple-300 mb-4">⚙️ Implementation Documentation</h5>
        <ul className="text-gray-200 space-y-2 text-sm">
          <li>• Platform constraint solutions</li>
          <li>• Content migration strategy</li>
          <li>• Quality assurance testing results</li>
          <li>• Launch preparation checklist</li>
          <li>• Post-launch monitoring plan</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Final Impact Statement */}
  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
    <h4 className="text-3xl font-bold text-white mb-6">Project Impact Summary</h4>
    <p className="text-xl text-gray-200 leading-relaxed mb-6 max-w-4xl mx-auto">
      This case study demonstrates how <span className="text-blue-300 font-medium">evidence-based accessibility improvements</span> can transform digital barriers into bridges, creating 
      <span className="text-green-300 font-medium"> measurable business value</span> while ensuring 
      <span className="text-purple-300 font-medium"> inclusive access</span> for all users.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white/10 rounded-lg p-4">
        <div className="text-2xl font-bold text-green-400 mb-1">162%</div>
        <div className="text-sm text-gray-300">Conversion Increase</div>
      </div>
      <div className="bg-white/10 rounded-lg p-4">
        <div className="text-2xl font-bold text-blue-400 mb-1">58%</div>
        <div className="text-sm text-gray-300">Accessibility Improvement</div>
      </div>
      <div className="bg-white/10 rounded-lg p-4">
        <div className="text-2xl font-bold text-purple-400 mb-1">89%</div>
        <div className="text-sm text-gray-300">Screen Reader Success</div>
      </div>
      <div className="bg-white/10 rounded-lg p-4">
        <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
        <div className="text-sm text-gray-300">Critical Issues Resolved</div>
      </div>
    </div>
    
    <p className="text-lg text-gray-300">
      Ready to create similar transformative results for your organization?
    </p>
  </div>
</section>
      `,
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop&crop=focalpoint&auto=format"
    }
  }
}; 