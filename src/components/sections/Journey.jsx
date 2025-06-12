import journeyData from "/src/data/journeyData";
import MotionWrapper from "/src/components/MotionWrapper";
import { slideInRight } from "/src/utils/motionVariants";

const Journey = ({ limit }) => {
  const data = limit ? journeyData.slice(0, limit) : journeyData;

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto text-zinc-300">
      {/* Vertical line */}
      <div className="relative pl-10">
        <div className="flex flex-col space-y-10">
          <div className="absolute left-35 top-1 h-full w-px bg-gradient-to-t from-transparent to-zinc-600" />
          
          {data.map((entry, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Year */}
              <div className="w-20 text-right text-3xl font-thin text-zinc-300">
                {entry.year}
              </div>

              {/* Events container */}
              <div className="flex-1 space-y-6 relative">
                {entry.events.map((event, idx) => (
                  <MotionWrapper
                  key={idx}
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative pl-6"
                >
                    {/* Dot */}
                    <div className="absolute -left-2 top-1 w-2 h-2 rounded-full bg-zinc-100" />

                    {/* Month */}
                    {event.month && (
                      <div className="text-sm text-zinc-400 mb-1">{event.month}</div>
                    )}

                    {/* Title */}
                    <div className="text-xl text-zinc-300">{event.title}</div>

                    {/* Description */}
                    <div
                      className="text-md text-zinc-400"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
                  </MotionWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
