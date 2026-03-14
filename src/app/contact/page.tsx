"use client";

import { MailIcon, LinkedinIcon, GithubIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";
import { socialLinks } from "@/data/contact";

export default function Contact() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail': return <MailIcon className="w-8 h-8 text-pink-300" />;  // Removed mr-4, increased size
      case 'linkedin': return <LinkedinIcon className="w-8 h-8 text-pink-300" />;  // Removed mr-4, increased size
      case 'github': return <GithubIcon className="w-8 h-8 text-pink-300" />;  // Removed mr-4, increased size
      default: return null;
    }
  };

  const getCorrectUrl = (link: typeof socialLinks[0]) => {
    if (link.icon === 'mail') {
      return `mailto:${link.url}`;
    }
    if (link.icon === 'linkedin' && !link.url.startsWith('http')) {
      return `https://${link.url}`;
    }
    return link.url;
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden" data-name="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header with Sparkles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="lofi-text relative">
              Connect With Me
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-pink-300 animate-pulse" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={getCorrectUrl(link)}
              target={link.icon === 'mail' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="glassmorphism p-6 rounded-xl lofi-card group relative overflow-hidden hover:translate-y-[-5px] transition-all duration-300"
            >
              {/* Decorative elements */}
              <Sparkles className="absolute -top-3 -right-3 w-5 h-5 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              {/* Icon - Centered */}
              <div className="relative z-10 flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full glassmorphism flex items-center justify-center lofi-glow group-hover:scale-110 transition-transform">
                  {getIcon(link.icon)}
                </div>
              </div>

              {/* Content - Centered */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-400 break-all">
                  {link.icon === 'mail' ? link.url : link.url.replace('https://', '')}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-purple-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          ))}
        </div>

        {/* Availability Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 glassmorphism rounded-full">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300">Available for opportunities and collaborations</span>
            <Sparkles className="w-4 h-4 text-pink-300" />
          </div>
        </div>
      </div>
    </section>
  );
}