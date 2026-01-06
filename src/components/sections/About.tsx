import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket, Users, Award, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Optimized image parallax effect
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            y: -30,
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          });
        }

        // Optimized stats counter animation
        if (statsRef.current) {
          const statNumbers = statsRef.current.querySelectorAll('.stat-number');
          statNumbers.forEach((stat) => {
            const finalValue = parseInt(stat.textContent || '0');
            gsap.fromTo(stat,
              { textContent: 0 },
              {
                textContent: finalValue,
                duration: 1.5,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                  trigger: stat,
                  start: "top 80%",
                }
              }
            );
          });
        }

        // Optimized values cards animation
        if (valuesRef.current) {
          const cards = valuesRef.current.querySelectorAll('.value-card');
          gsap.fromTo(cards,
            {
              y: 50,
              opacity: 0,
              scale: 0.95
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: valuesRef.current,
                start: "top 80%",
              }
            }
          );
        }
      });

      return () => ctx.revert();
    }
  }, [inView]);

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:shadow-blue-500/25',
    },
    {
      icon: Palette,
      title: 'Design First',
      description: 'Believing that great user experience starts with thoughtful, intentional design.',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:shadow-purple-500/25',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly learning and adopting new technologies to solve complex problems.',
      color: 'from-orange-500 to-red-500',
      hoverColor: 'hover:shadow-orange-500/25',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with teams to deliver exceptional results through communication.',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:shadow-green-500/25',
    },
  ];

  const stats = [
    { number: 15, label: 'Projects Completed', icon: Award },
    { number: 30, label: 'Technologies', icon: Zap },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden">
      {/* Optimized background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m a pre-final year B.Tech student at Vishwakarma Institute of Technology, Pune. Passionate about building modern web technologies and products. My interests include full-stack development and AI, with hands-on experience in Node.js, React.js, Django, and modern UI frameworks like Bootstrap and Tailwind CSS. I enjoy learning new technologies and creating impactful, user-focused applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Optimized Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://t4.ftcdn.net/jpg/06/04/95/85/240_F_604958599_bEE32nBfEirtiYRCs4AS7EVoaBs9pAKr.jpg"
                alt="Alex at work"
                className="w-full h-80 sm:h-96 object-cover -mt-12"
                loading="lazy"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-purple-900/30 to-transparent"></div>

              {/* Optimized animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Optimized Floating Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.slice(0, 2).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon size={16} className="text-blue-500 mr-1" />
                        <div className="text-xl sm:text-2xl font-bold text-blue-600 stat-number">{stat.number}</div>
                        <span className="text-xl sm:text-2xl font-bold text-blue-600">+</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Optimized decorative elements */}
            <div className="absolute -top-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
          </motion.div>

          {/* Optimized Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                Starting as a curious student who loved building things, I've evolved into a full-stack
                developer who thrives on creating seamless digital experiences. My journey has taken me
                through various technologies, from frontend frameworks to backend architectures.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                When I’m not coding, I stay engaged with the tech ecosystem by exploring modern UI/UX design trends, contributing to open-source projects, and sharing insights with the developer community. As a full-stack web developer and Java programmer, I enjoy building scalable, efficient applications that bridge clean design with solid backend logic.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Optimized Values Section */}
        <motion.div
          ref={valuesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
            What{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Drives Me
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`value-card group text-center p-6 sm:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl ${value.hoverColor} transition-all duration-300 border border-white/20 relative overflow-hidden`}
                >
                  {/* Optimized background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                    {value.description}
                  </p>

                  {/* Optimized hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
