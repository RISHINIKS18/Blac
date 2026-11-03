import React from 'react';
import { motion } from 'motion/react';
import { CLIENTS_DATA } from '../data/firmData';
import { ClientLogo } from './ClientLogo';
import { Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ClientsSection: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const marqueeClients = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section
      id="clients"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF6EC] via-[#F5EEDC]/60 to-[#FAF6EC] border-t border-b border-[#E5D7BC] relative overflow-hidden"
    >
      {/* Subtle ambient gold glow in the background */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF60]/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-[#9A7228]"
            />
            <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#9A7228]" />
              Institutional Mandates
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-[#9A7228]"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2E3A] tracking-tight leading-tight mb-4">
            Our Clients
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed">
            Representing Indian and Multinational Companies, Public Sector Undertakings, Financial Institutions, and Conglomerates in high-stakes legal challenges.
          </p>
        </motion.div>

        {/* Animated Client Logos Grid */}
        <motion.div
          id="clients-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {CLIENTS_DATA.map((client) => (
            <motion.div
              key={client.id}
              id={`client-${client.id}`}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.025,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FFFFFF] border border-[#E5D7BC] rounded-sm p-5 sm:p-6 flex items-center justify-center transition-all duration-300 hover:border-[#0C3844] hover:shadow-xl hover:shadow-[#0C3844]/5 group relative overflow-hidden h-28 sm:h-32 cursor-default"
              title={client.name}
            >
              {/* Dynamic top gold reveal shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#9A7228] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Light ambient hover sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EC]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Logo Presentation Container */}
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <ClientLogo clientId={client.id} className="justify-center" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Infinite Marquee Ticker */}
        <div className="mt-12 pt-8 border-t border-[#E5D7BC]/70 relative">
          <div className="flex items-center gap-2 mb-3 justify-center text-[10px] font-mono uppercase tracking-[0.2em] text-[#9A7228] font-semibold">
            <span>Decades of Courtroom Trust</span>
            <span>•</span>
            <span>Pan-India Mandates</span>
          </div>

          {/* Marquee Track with gradient fade masks on edges */}
          <div className="relative overflow-hidden py-3">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAF6EC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FAF6EC] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex whitespace-nowrap gap-8 items-center"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 28,
                  ease: 'linear',
                },
              }}
            >
              {marqueeClients.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="inline-flex items-center gap-3 text-xs sm:text-sm font-serif font-bold text-[#0D2E3A]/75 hover:text-[#0C3844] transition-colors"
                >
                  <span>{client.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A7228]/50" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
