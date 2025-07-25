import journeyData from "/src/data/journeyData";
import MotionWrapper from "/src/components/MotionWrapper";
import { slideInRight } from "/src/utils/motionVariants";

const Journey = ({ limit }) => {
  const data = limit ? journeyData.slice(0, limit) : journeyData;

  return (
    <div className="max-w-4xl px-4 py-10 mb-10 mx-auto text-zinc-300">
      {/* Vertical timeline wrapper */}
      <div className="relative">
        <div className="flex flex-col space-y-10">
          {data.map((entry, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Year */}
              <div className="w-auto text-left text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-zinc-300">
                {entry.year}
              </div>

              {/* Events container */}
              <div className="flex-1 space-y-6 relative">
                {entry.events.map((event, idx) => {
                  // Check if it's the last event of the last group
                  const isLastGroup = index === data.length - 1;
                  const isLastEvent = idx === entry.events.length - 1;

                  return (
                    <div key={idx} className="relative">
                      {/* Dot and Vertical line */}
                      <div className="absolute -left-2 top-0 bottom-0">
                        {/* Dot */}
                        <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-zinc-300" />

                        {/* Vertical line extending downward */}
                        <div
                          className={`absolute left-1/2 transform -translate-x-1/2 top-2 -bottom-12 w-px ${
                              isLastGroup && isLastEvent
                              ? "bg-gradient-to-b from-zinc-300 to-transparent"
                              : "bg-zinc-300"
                          }`}
                        ></div>
                      </div>

                      {/* Animating only the event content */}
                      <MotionWrapper
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className="ml-5"
                      >
                        {/* Month */}
                        {event.month && (
                          <div className="text-xs md:text-sm lg:text-sm text-zinc-400 mb-1">
                              {event.month}
                          </div>
                        )}

                        {/* Title */}
                        <div className="text-md md:text-md lg:text-xl text-zinc-300">
                          {event.title}
                        </div>

                        {/* Description */}
                        <div
                          className="text-sm lg:text-base text-zinc-400"
                          dangerouslySetInnerHTML={{ __html: event.description }}
                        />
                      </MotionWrapper>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
