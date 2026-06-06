"use client"
import { SiteNav } from "@/components/site-nav"
import { useEffect, useRef, useState, FormEvent } from "react"
import { Bot, User, Send, BarChart3, Target, Lightbulb, ShieldAlert } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const QUICK_ACTIONS = [
  {
    id: "stats",
    icon: BarChart3,
    title: "Overall Statistics",
    description: "Summarize trends and averages across all my recent predictions.",
    prompt: "Please provide a comprehensive statistical summary of my recent predictions. What is my average GWP, and what trends do you see in circularity?"
  },
  {
    id: "specific",
    icon: Target,
    title: "Deep Dive Analysis",
    description: "Analyze the anomalies in a specific recent prediction.",
    prompt: "Looking at my recent prediction data, identify the metal/route with the highest carbon footprint. Break down exactly why its GWP is so high and what factors contributed to it."
  },
  {
    id: "recommendations",
    icon: Lightbulb,
    title: "Optimization Plan",
    description: "Get actionable steps to lower GWP and increase circularity.",
    prompt: "Based on my prediction history, give me 3 specific, actionable recommendations to optimize my production routes, improve end-of-life recovery, and lower my overall carbon footprint."
  }
]

// Define a type for our messages to keep TypeScript happy
type Message = {
  id: string;
  role: string;
  content: string;
}

export default function ChatbotPage() {
  // 1. Native State Management (Zero Dependency on AI SDK)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 2. Auto-scroll to the newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // 3. Custom Streaming Pipeline
  const append = async (newMessage: { role: string, content: string }) => {
    const userMessage = { id: Date.now().toString(), role: newMessage.role, content: newMessage.content }
    const updatedMessages = [...messages, userMessage]
    
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!response.body) throw new Error('No response body')

      // Prepare empty assistant message to hold the incoming stream
      const assistantMessageId = (Date.now() + 1).toString()
      setMessages(prev => [...prev, { id: assistantMessageId, role: 'assistant', content: '' }])

      // Native Text Decoder for Real-Time Streaming
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        
        assistantText += decoder.decode(value, { stream: true })
        
        // Update the UI in real-time frame by frame
        setMessages(prev => {
          const newMsgList = [...prev]
          newMsgList[newMsgList.length - 1].content = assistantText
          return newMsgList
        })
      }
    } catch (error) {
      console.error("Streaming error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // 4. Form Submission Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    const text = input
    setInput("") // Clear input field immediately
    append({ role: 'user', content: text })
  }

  // 5. Quick Action Handler
  const handleQuickAction = (promptText: string) => {
    append({ role: 'user', content: promptText })
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background pt-10 pb-20">
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <Bot className="h-3 w-3 text-copper" />
              LCA Expert System
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight">
              MetalCycle Assistant
            </h1>
            <p className="mt-2 text-muted-foreground">
              Context-aware insights securely linked to your prediction database.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive font-medium shadow-sm">
            <ShieldAlert className="h-4 w-4" />
            Strictly limited to Metallurgy & LCA
          </div>
        </div>

        {/* Chat Interface */}
        <GlowingCard className="flex h-[600px] flex-col justify-between p-0 overflow-hidden border-border/50">
          <div className="flex-1 overflow-y-auto p-6 no-scrollbar space-y-6">
            
            {/* 🌟 MENU DRIVEN EMPTY STATE 🌟 */}
            {messages.length === 0 && (
              <div className="space-y-6 h-full flex flex-col">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copper/10 text-copper ring-1 ring-copper/20">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-card border border-border/50 p-4 text-sm text-foreground shadow-sm">
                    <p className="font-semibold text-base mb-1">System Online.</p>
                    <p className="text-muted-foreground">
                      I have successfully synchronized with your latest prediction data. How would you like to proceed? Select a module below or type a custom query.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action.prompt)}
                      className="flex flex-col items-start text-left p-5 rounded-2xl border border-border/50 bg-card/40 hover:bg-copper/5 hover:border-copper/30 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-background border border-border group-hover:border-copper/30 group-hover:text-copper transition-colors mb-4 shadow-sm">
                        <action.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-sm mb-1 text-foreground">{action.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {action.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Chat Messages */}
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${
                  m.role === 'user' 
                    ? 'bg-muted text-foreground ring-border/50' 
                    : 'bg-copper/10 text-copper ring-copper/20'
                }`}>
                  {m.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                </div>
                <div className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-muted border border-border/50 text-foreground rounded-tr-sm' 
                    : 'bg-card border border-border/50 text-foreground rounded-tl-sm'
                }`}>
                  <div className="whitespace-pre-wrap leading-relaxed prose prose-sm dark:prose-invert max-w-none">
                    {m.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copper/10 text-copper ring-1 ring-copper/20">
                  <Bot className="h-5 w-5 animate-pulse" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-card border border-border/50 p-5 shadow-sm flex items-center gap-1.5 w-fit">
                  <div className="h-1.5 w-1.5 bg-copper rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="h-1.5 w-1.5 bg-copper rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="h-1.5 w-1.5 bg-copper rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            
            {/* Invisible target for auto-scroll */}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Form */}
          <div className="p-4 bg-card/40 border-t border-border/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Or ask a specific question about your LCA data..."
                className="flex-1 bg-background border-border/50 h-12 focus-visible:ring-copper rounded-xl shadow-inner"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="h-12 w-12 shrink-0 bg-copper hover:bg-copper/90 text-copper-foreground rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all" 
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-5 w-5 ml-0.5" />
              </Button>
            </form>
          </div>
        </GlowingCard>
      </main>
    </div>
  )
}