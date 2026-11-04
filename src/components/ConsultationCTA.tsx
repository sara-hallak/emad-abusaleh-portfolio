"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Globe, Lock } from "lucide-react";

// أيقونة واتساب الرسمية
function WhatsAppIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86L0 24l6.335-1.652c1.694.922 3.633 1.448 5.696 1.448 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  );
}

export const ConsultationCTA: React.FC = () => {
  // يمكنك استبدال الرقم برقم الواتساب الخاص بك لاحقاً
  const whatsappUrl = "https://wa.me/?text=" + encodeURIComponent("مرحباً أ. عماد، أود التنسيق لمكالمة استشارية.");

  return (
    <section id="contact" className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* الحاوية البيضاء الرئيسية مع الخط الأزرق على الحافة اليمنى */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-gray-100 border-r-[5px] border-r-primary-blue shadow-lg shadow-blue-950/5 p-6 sm:p-8 lg:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* العمود الأيمن (النصوص والأزرار) */}
            <div className="lg:col-span-7 flex flex-col text-start">
              <span className="text-xs sm:text-sm font-semibold text-primary-blue mb-2 block">
                حجز موعد واستشارة
              </span>

              <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[46px] font-bold text-dark-blue leading-[1.2] mb-3.5">
                هل لديك مشروع ترغب في تحويله إلى خطة عمل؟
              </h2>

              <p className="font-scheherazade text-sm sm:text-base lg:text-[18px] text-gray-600 leading-relaxed font-normal mb-8 max-w-xl">
                سواء كنت تبحث عن استشارة لتصميم حملة كسب تأييد، مراجعة استراتيجية، أو تنظيم برنامج تدريبي لفريقك، يسعدني التحدث معك واستكشاف سبل التعاون.
              </p>

              {/* أزرار العمل المشتركة */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* زر إرسال بريد إلكتروني مباشر */}
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:contact@emadabusaleh.com"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary-blue hover:bg-dark-blue text-white font-semibold text-xs sm:text-sm transition-colors duration-200 shadow-sm shadow-primary-blue/20 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>إرسال بريد إلكتروني مباشر</span>
                </motion.a>

                {/* زر مكالمة استشارية عبر واتساب */}
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary-blue hover:bg-dark-blue text-white font-semibold text-xs sm:text-sm transition-colors duration-200 shadow-sm shadow-primary-blue/20 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>مكالمة استشارية عبر واتساب</span>
                </motion.a>
              </div>
            </div>

            {/* العمود الأيسر (بطاقة معلومات الاستجابة الزرقاء) */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="bg-primary-blue rounded-[20px] p-6 sm:p-7 text-white shadow-md shadow-primary-blue/25"
              >
                <h3 className="font-scheherazade text-xl sm:text-2xl font-bold mb-3 pb-2.5 border-b border-white/20 text-start">
                  معلومات الاستجابة والتواصل
                </h3>

                <div className="space-y-4 pt-1 text-start">
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm mb-1 text-white">
                      <Clock className="w-4 h-4 text-blue-100" />
                      <span>سرعة الرد:</span>
                    </div>
                    <p className="font-scheherazade text-xs sm:text-[13px] text-white/90 leading-relaxed ps-6">
                      يتم الرد على جميع الاستفسارات خلال 24 إلى 48 ساعة كحد أقصى.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm mb-1 text-white">
                      <Globe className="w-4 h-4 text-blue-100" />
                      <span>نطاق العمل:</span>
                    </div>
                    <p className="font-scheherazade text-xs sm:text-[13px] text-white/90 leading-relaxed ps-6">
                      حضوري في الأردن / وعن بُعد لجميع دول المنطقة.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm mb-1 text-white">
                      <Lock className="w-4 h-4 text-blue-100" />
                      <span>سرية البيانات:</span>
                    </div>
                    <p className="font-scheherazade text-xs sm:text-[13px] text-white/90 leading-relaxed ps-6">
                      نلتزم بالسرية المهنية التامة لكافة الوثائق والمعلومات المشتركة.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};