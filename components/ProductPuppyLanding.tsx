'use client'

import { useState, useEffect, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Dog, Moon, Sun, Globe, MessageSquare, Target, Heart, Brain, Filter, ChevronDown } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { motion, AnimatePresence } from 'framer-motion'

// Sample product data
const products = [
  { id: 1, name: "Laptop", category: "Electronics", description: "High-performance laptop for work and gaming" },
  { id: 2, name: "Smartphone", category: "Electronics", description: "Latest model with advanced camera features" },
  { id: 3, name: "Running Shoes", category: "Sports", description: "Comfortable shoes for long-distance running" },
  { id: 4, name: "Coffee Maker", category: "Home Appliances", description: "Automatic coffee maker with built-in grinder" },
  { id: 5, name: "Yoga Mat", category: "Fitness", description: "Non-slip yoga mat for home workouts" },
  { id: 6, name: "Wireless Headphones", category: "Electronics", description: "Noise-cancelling headphones with long battery life" },
]

export default function ProductPuppyLanding() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const searchSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const scrollToSearch = () => {
    searchSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    setIsSearchVisible(true)
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <div className="transition-colors duration-300">
        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-10">
          <Toggle pressed={isDarkMode} onPressedChange={setIsDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? <Moon className="h-[1.2rem] w-[1.2rem] text-white" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Toggle>
        </div>

        {/* Hero Section */}
        <header className="relative bg-white dark:bg-black text-black dark:text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center mb-6"
            >
              <Dog className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">ProductPuppy</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl mb-8"
            >
              Search{' '}
              <a
                href="https://www.producthunt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
              >
                Product Hunt
              </a>
              {' '}with Context in any language
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 glow-button"
                onClick={scrollToSearch}
              >
                Start Discovering Products
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </header>

        {/* Feature Highlights */}
        <section className="py-16 bg-black dark:bg-black transition-colors duration-300">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white dark:text-white">Why Use ProductPuppy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<Globe />} 
                title="Search in any language" 
                description="Our multilingual support ensures you can find products in your preferred language" 
              />
              <FeatureCard 
                icon={<MessageSquare />} 
                title="Natural Language Search" 
                description="Find products naturally, without memorizing specific keywords" 
              />
              <FeatureCard 
                icon={<Target />} 
                title="Context-Specific Search" 
                description="Find products by specifying your context for more relevant results" 
              />
              <FeatureCard 
                icon={<Filter />} 
                title="Context-Based Discovery" 
                description="Say goodbye to clunky filter and sort functions, your context is the key" 
              />
            </div>
          </div>
        </section>

        {/* Product Search Section */}
        <section ref={searchSectionRef} className="py-16 bg-white dark:bg-black transition-colors duration-300">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Dig Up Your Perfect Product</h2>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:ring-gray-500 dark:text-white"
                  aria-label="Search products"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
              </div>
            </div>
            <AnimatePresence>
              {isSearchVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {filteredProducts.map(product => (
                    <motion.div key={product.id} layout>
                      <Card className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-black dark:text-white">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.category}</p>
                          <p className="text-gray-800 dark:text-gray-200">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {isSearchVisible && filteredProducts.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-700 dark:text-gray-300 mt-4"
              >
                No products found. Try a different search term.
              </motion.p>
            )}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-black text-white py-16 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Pack?</h2>
            <p className="text-xl mb-4">Become a ProductPuppy member and enjoy discovering amazing products!</p>
            <p className="text-lg mb-8 text-gray-300">It's 100% free. No credit card required.</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 glow-button"
            >
              Join the ProductPuppy Pack
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-black text-black dark:text-white py-8 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <p className="mb-2">&copy; 2024 ProductPuppy. All rights reserved. Woof!</p>
            <p className="text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and <Brain className="w-4 h-4 mx-1 text-blue-500" /> in College Park, MD
            </p>
          </div>
        </footer>
      </div>
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
          }
        }
        @keyframes glow-dark {
          0% {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.7);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5);
          }
        }
        .glow-button {
          animation: glow 2s infinite;
          transition: all 0.3s ease;
        }
        .dark .glow-button {
          animation: glow-dark 2s infinite;
        }
        .glow-button:hover {
          animation: none;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7);
        }
        .dark .glow-button:hover {
          animation: none;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="border-gray-700 bg-gray-900 dark:bg-gray-900 h-full">
        <CardContent className="flex flex-col items-center text-center p-6 h-full">
          <div className="text-white mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}