import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import ChatBotPreview from '@/components/ChatBotPreview'
import CaseStudies from '@/components/CaseStudies'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ChatBotBanner from '@/components/ChatBotBanner'
import FloatingChatButton from '@/components/FloatingChatButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary">
      <ChatBotBanner />
      <Header />
      <Hero />
      <FeaturedProjects />
      <div id="chat-with-ai">
        <ChatBotPreview />
      </div>
      <CaseStudies />
      <About />
      <Contact />
      <FloatingChatButton />
    </main>
  )
} 