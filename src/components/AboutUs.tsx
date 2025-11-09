import arrowIcon from "figma:asset/7c3108f2138f8d514b9a7de2dd9d14aee333f275.png";
import { useState } from "react";

export function AboutUs() {
  const [activeTab, setActiveTab] = useState("endurance-miles");

  const tabContent = {
    "endurance-miles": {
      title: "Endurance Miles",
      content: (
        <div
          className="space-y-6 text-gray-700"
          style={{ fontSize: "14px", lineHeight: "1.8" }}
        >
          <div>
            <h3
              className="mb-3"
              style={{ fontSize: "18px", color: "#00000", fontWeight: "700" }}
            >
              About Endurance Miles
            </h3>
            <p>
              Endurance Bikes and Spares Kenya is a trusted
              distributor of Bajaj motorcycles and genuine spare
              parts, providing durable, high-performance
              solutions for riders and transport businesses
              across East Africa. We are committed to delivering
              quality products and exceptional service to our
              customers.
            </p>
          </div>

          <div>
            <h3
              className="mb-3"
              style={{ fontSize: "18px", color: "#00000", fontWeight: "700" }}
            >
              Our Mission
            </h3>
            <p>
              To deliver reliable, affordable, and high-quality
              motorcycles and spare parts that empower
              individuals and businesses to achieve their
              transportation goals with confidence and
              efficiency. We strive to provide exceptional
              customer service and technical support to ensure
              our clients get the most out of their investment.
            </p>
          </div>

          <div>
            <h3
              className="mb-3"
              style={{ fontSize: "18px", color: "#00000", fontWeight: "700" }}
            >
              Our Vision
            </h3>
            <p>
              To be the leading provider of Bajaj motorcycles
              and genuine parts in East Africa, recognized for
              exceptional service, quality products, and
              customer satisfaction. We envision a future where
              every rider has access to reliable, durable
              motorcycles that are built to last and backed by
              superior after-sales support.
            </p>
          </div>
        </div>
      ),
    },
    "bajaj-auto": {
      title: "Bajaj Auto",
      content: (
        <div
          className="space-y-4 text-gray-700"
          style={{ fontSize: "14px", lineHeight: "1.8" }}
        >
          <p>
            The Bajaj Group is amongst the top 10 business
            houses in India. Its footprint stretches over a wide
            range of industries, spanning automobiles (two
            wheelers manufacturer and three wheelers
            manufacturer), home appliances, lighting, iron and
            steel, insurance, travel and finance. The group's
            flagship company, Bajaj Auto, is ranked as the
            world's fourth largest three and two wheeler
            manufacturer and the Bajaj brand is well-known
            across several countries in Latin America, Africa,
            Middle East, South and South East Asia.
          </p>
          <p>
            Founded in 1926, at the height of India's movement
            for independence from the British, the group has an
            illustrious history. The integrity, dedication,
            resourcefulness and determination to succeed which
            are characteristic of the group today, are often
            traced back to its birth during those days of
            relentless devotion to a common cause. Jamnalal
            Bajaj, founder of the group, was a close confidant
            and disciple of Mahatma Gandhi. This close
            relationship and his deep involvement in the
            independence movement did not leave Jamnalal Bajaj
            with much time to spend on his newly launched
            business venture. We are celebrating 125th Birth
            anniversary of Shri. Jamnalal Bajaj on 4th of
            November 2014.
          </p>
          <p>
            His son, Kamalnayan Bajaj, then 27, took over the
            reins of business in 1942. He too was close to
            Gandhiji and it was only after Independence in 1947,
            that he was able to give his full attention to the
            business. Kamalnayan Bajaj not only consolidated the
            group, but also diversified into various
            manufacturing activities.
          </p>
          <p>
            The present Chairman of the group, Rahul Bajaj, took
            charge of the business in 1965. Under his
            leadership, the turnover of the Bajaj Auto the
            flagship company has gone up from INR. 7.2 million
            to INR. 120 billion. Its product portfolio has
            expanded and the brand has found a global market. He
            is one of India's most distinguished business
            leaders, bike manufacturers in india and
            internationally respected for his business acumen
            and entrepreneurial spirit.
          </p>
          <p>
            In 2005, Rahul Bajaj's son Rajiv Bajaj stepped into
            the shoes of Managing Director of Bajaj Auto and
            steered the organization to becoming a global
            automobile behemoth. He introduced the Pulsar range
            of bikes, that revolutionised the two wheeler market
            in India. The legacy of our Auto Rickshaws have been
            soaring heights and display unparalleled market
            dominance across any automobile segment. In 2007,
            Bajaj Auto acquired a 14% stake in KTM that has
            since grown to 48%. This partnership catalysed Bajaj
            Auto's endeavour to democratise motorcycle racing in
            India. Bajaj Auto today exclusively manufactures
            Duke range of KTM bikes and exports them worldwide.
            In FY2018, KTM was the fastest growing motorcycle
            brand in the country.
          </p>
          <p>
            Bajaj Auto has also led the pioneering introduction
            of India's first ever Quadricycle – Qute. Bajaj Auto
            exports to 70+ countries and a significant share of
            revenues come from Exports. This stands as a
            testament to the new brand image - The World's
            Favourite Indian.
          </p>
        </div>
      ),
    },
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="w-[80%] mx-auto">
        <div className="flex gap-12">
          {/* Vertical Tabs */}
          <div className="w-64 flex-shrink-0">
            {/* Endurance Miles Tab */}
            <button
              onClick={() => setActiveTab("endurance-miles")}
              className={`w-full text-left px-6 py-4 transition-colors flex items-center justify-between ${
                activeTab === "endurance-miles"
                  ? "text-[#0238A5]"
                  : "text-gray-700"
              }`}
            >
              <span
                className="text-[16px] lg:text-[20px]"
                style={{ fontWeight: "700" }}
              >
                Endurance Miles
              </span>
              {activeTab === "endurance-miles" && (
                <img
                  src={arrowIcon}
                  alt="Active"
                  className="w-5 h-5"
                />
              )}
            </button>

            {/* Separator Line */}
            <div className="px-6 my-2">
              <div className="h-px bg-gray-300"></div>
            </div>

            {/* Bajaj Auto Tab */}
            <button
              onClick={() => setActiveTab("bajaj-auto")}
              className={`w-full text-left px-6 py-4 transition-colors flex items-center justify-between ${
                activeTab === "bajaj-auto"
                  ? "text-[#0238A5]"
                  : "text-gray-700"
              }`}
            >
              <span
                className="text-[16px] lg:text-[20px]"
                style={{ fontWeight: "700" }}
              >
                Bajaj Auto
              </span>
              {activeTab === "bajaj-auto" && (
                <img
                  src={arrowIcon}
                  alt="Active"
                  className="w-5 h-5"
                />
              )}
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {
              tabContent[activeTab as keyof typeof tabContent]
                ?.content
            }
          </div>
        </div>
      </div>
    </div>
  );
}