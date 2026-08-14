"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { infrastructureData } from '@/data/infrastructure';
import { CheckCircle2, Store } from 'lucide-react';

export function InfraSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <AnimatedSection className="py-24 bg-slate-50/50" delay={0}>
      <section id="infrastruktur">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="flex flex-col">
              <SectionHeading 
                title={infrastructureData.sectionTitle} 
                subtitle={infrastructureData.sectionSubtitle} 
                align="left" 
              />
              
              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{infrastructureData.torasera.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {infrastructureData.torasera.description}
                </p>
              </div>

              <motion.ul 
                className="space-y-4 mb-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {infrastructureData.torasera.features.map((feature, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{feature.title}</span>
                      <span className="text-slate-500 mx-2">—</span>
                      <span className="text-slate-600">{feature.description}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <div>
                <Button variant="primary" size="lg">
                  {infrastructureData.torasera.ctaLabel}
                </Button>
              </div>
            </div>

            {/* Right Column: Decorative Area */}
            <div className="relative w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-[#C41E3A]/10 to-[#C41E3A]/5 rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-white/50 shadow-inner">
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-white/40 rounded-full blur-2xl"
                animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-20 left-20 w-48 h-48 bg-[#C41E3A]/10 rounded-full blur-2xl"
                animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Main floating icon card */}
              <motion.div 
                className="relative z-10 bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl shadow-[#C41E3A]/10 border border-white"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-[#C41E3A]/20 rounded-full blur-lg"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <Store className="relative w-32 h-32 text-[#C41E3A]" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Smaller floating elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-12 h-2 bg-slate-200 rounded-full mb-2" />
                <div className="w-8 h-2 bg-slate-200 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 right-1/4 bg-white p-4 rounded-full shadow-lg border border-slate-100"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 7, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CheckCircle2 className="w-8 h-8 text-[#0E7C61]" />
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
