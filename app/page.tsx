'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const dmSans = DM_Sans({ subsets: ['latin'] });

const calculateTimeLeft = () => {
  const difference = +new Date('2025-07-12') - +new Date();
  let timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const AnimatedNumber = ({ value }: { value: number }) => (
  <AnimatePresence mode='wait'>
    <motion.span
      key={value}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='inline-block font-bold text-6xl'
    >
      {value.toString().padStart(2, '0')}
    </motion.span>
  </AnimatePresence>
);

const CommitmentSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className='mt-12 mb-12 w-full max-w-3xl text-center'
  >
    <h2 className='text-3xl font-bold mb-4 text-[#F0E3D2]'>
      Nuestro compromiso
    </h2>
    <p className='text-secondary text-lg'>
      En Liens, nos comprometemos a ser el puente entre el arte del café y tu
      búsqueda de tranquilidad. Cada taza que servimos es una invitación a
      pausar, disfrutar y redescubrir la belleza de los pequeños momentos. Aquí,
      la calidad se encuentra en cada sorbo y en cada rincón, creando un espacio
      donde el tiempo se detiene, permitiéndote relajarte, soñar despierto y
      reconectarte contigo mismo. Bienvenido a un lugar donde cada visita es más
      que una experiencia; es un viaje hacia la calma y el disfrute de la vida,
      taza a taza.
    </p>
  </motion.div>
);

const ValuesSection = () => {
  return (
    <div className='mt-12 w-full max-w-4xl'>
      <h2 className='text-3xl font-bold mb-8 text-center text-[#F0E3D2]'>
        Nuestros valores
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className='bg-primary p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-xl font-bold mb-2 text-[#F0E3D2]'>Calidad</h3>
          <p className='text-[#F0E3D2] opacity-90'>
            La excelencia es nuestra norma. Cada detalle está pensado para
            invitarte a disfrutar del aquí y ahora.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-secondary p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-xl font-bold mb-2 text-[#F0E3D2]'>
            Comunidad y emprendedurismo
          </h3>
          <p className='text-[#F0E3D2] opacity-90'>
            Apoyamos a los emprendedores y fomentamos el espíritu emprendedor
            dentro de una comunidad vibrante y diversa.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-tertiary p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-xl font-bold mb-2 text-[#F0E3D2]'>Pasión</h3>
          <p className='text-[#F0E3D2] opacity-90'>
            Nos mueve una pasión inigualable por el café y las personas, creando
            un espacio donde el tiempo parece detenerse.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-quaternary p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-xl font-bold mb-2 text-[#F0E3D2]'>Innovación</h3>
          <p className='text-[#F0E3D2] opacity-90'>
            Estamos siempre en la búsqueda de innovar, para ofrecerte no solo un
            café, sino un momento de paz en tu día a día.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='bg-quinary p-6 rounded-lg shadow-lg'
        >
          <h3 className='text-xl font-bold mb-2 text-[#F0E3D2]'>Compromiso</h3>
          <p className='text-[#F0E3D2] opacity-90'>
            Nos comprometemos con brindar una experiencia humana y cálida,
            creando un ambiente donde todos se sienten bienvenidos y valorados.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function LogoCountdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] p-4 md:p-16 ${dmSans.className}`}
    >
      <div className='mb-8 w-full max-w-xs'>
        <div className='w-3/4 mx-auto'>
          <Image
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-blanco%20(4)-KfYcVksMoIxDcFbHBzQRRvjCgcVN2s.svg'
            alt='Logo'
            width={696}
            height={263}
            layout='responsive'
          />
        </div>
      </div>
      <div className='text-[#F0E3D2] text-center'>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className='flex flex-row sm:flex-col items-center justify-between sm:justify-center'
            >
              <div className='mb-2 order-2 sm:order-1'>
                <AnimatedNumber value={value} />
              </div>
              <div className='text-xl font-bold mr-4 sm:mr-0 order-1 sm:order-2'>
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CommitmentSection />
      <ValuesSection />
    </div>
  );
}
