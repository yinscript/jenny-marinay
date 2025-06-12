import { useState } from 'react';
import mailData from '/src/data/mailData';
import { socialLinks } from '/src/data/socialLinks';
import { iconMap } from '/src/data/socialLinks';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('social');
  const [hoveredMailId, setHoveredMailId] = useState(null);
  const [openedMail, setOpenedMail] = useState(null);

  const openMail = (mail) => setOpenedMail(mail);
  const closeMail = () => setOpenedMail(null);

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h2 className="text-3xl text-zinc-300 font mb-5">Let's connect</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-zinc-700">
        {['social', 'mail'].map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-zinc-50 text-zinc-300'
                : 'text-zinc-300'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'social' ? 'Social Links' : 'Airmails'}
          </button>
        ))}
      </div>

      {/* Tab Content: Social Links */}
      {activeTab === 'social' && (
        <div
          className="pt-4 px-4 bg-no-repeat bg-center bg-cover border border-zinc-700 max-w-full md:max-w-4xl mx-auto"
          style={{
            backgroundImage: 'url(/src/assets/Contact/monterey.jpg)',
          }}
        >
          {/* Top Bar with Dots + Tabs */}
          {/* Obsessed with MacOS terminal tab UI >_<  */}
          <div className="flex items-center bg-zinc-800 px-3 pt-2 rounded-t-lg border border-zinc-700 relative">
            {/* Mac-style Dots */}
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
        
            {/* Tabs */}
            <div className="flex gap-1 flex-wrap items-center">
              {socialLinks
                .filter(({ coloredIcon }) => coloredIcon)
                .map(({ url, coloredIcon, name }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center gap-2 px-4 py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded-t-md border border-zinc-600 border-b-0 transition-all duration-200 transform hover:scale-[1.05] hover:-translate-y-[1px]"
                  >
                    <img src={iconMap[coloredIcon]} alt={name} className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm text-zinc-200">{name}</span>
                  </a>
                ))}
            </div>
          </div>
    
          {/* Will modify this into an image in the future :)) */}
          <div className="bg-zinc-900 border border-zinc-700 border-t-0 text-zinc-400 text-sm px-4 py-6">
            I'm open to new opportunities, collaborations, or simply expanding my network. :D
          </div>
        </div>
      )}

      {/* Tab Content: Mail Stack */}
      {activeTab === 'mail' && (
        <div className="flex flex-col items-center justify-center mt-10 px-4">
          <div className="relative w-full max-w-[700px] aspect-[7/4]">
            {mailData.map((mail, index) => {
              const isHovered = hoveredMailId === mail.id;
              return (
                <div
                  key={mail.id}
                  className={`absolute w-full h-full cursor-pointer transition-transform duration-300 ease-in-out
                    bg-contain bg-center bg-no-repeat shadow-xl rounded-md
                    flex flex-col items-start justify-start p-4 ${
                      isHovered ? 'z-50 scale-105' : 'scale-100'
                    }`}
                  style={{
                    zIndex: isHovered ? 50 : index,
                    top: `${index * 30}px`,
                    transform: `rotate(${(index - 1) * 3}deg)`,
                    backgroundImage: `url('/src/assets/Airmails/plainMail.png')`,
                  }}
                  onClick={() => openMail(mail)}
                  onMouseEnter={() => setHoveredMailId(mail.id)}
                  onMouseLeave={() => setHoveredMailId(null)}
                >
                  <div className="absolute top-10 left-10 text-zinc-700 text-xs sm:text-sm font-sans">
                    <span className="block">{mail.date}</span>
                    <span className="block">{mail.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal: Airmail content preview, sneaky <_< */}
      {openedMail && (
        <div
          className="fixed inset-0 bg-zinc-900/80 flex items-center justify-center z-50"
          onClick={closeMail}
        >
          <div
            className="max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={openedMail.preview}
              alt="Opened Mail"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
