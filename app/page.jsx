import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { GrayTitle, GoldTitle } from "@/components/reusables";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AVATARS } from "@/lib/data";
import { CodeDemo } from "@/components/demo-components-animate-code";
import { LOGOS } from "@/lib/data";
import { SectionLabel, SectionHeading } from "@/components/reusables";
import { BentoCard } from "@/components/BentoCard";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pt-28 sm:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <StarsBackground />
        </div>

        <div className="relative z-10 col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2">
          <Badge variant="gold">Powered by AI — Now in Beta</Badge>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl mt-6">
            <GrayTitle>Ace your next interview</GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed">
            Book 1:1 mock interviews with senior engineers from top companies.
            Get AI-powered feedback, role-specific questions, and the confidence
            to land your dream job.
          </p>

          <div className="flex justify-center gap-2 sm:gap-4 mt-10 flex-wrap">
            <Link href="/onboarding">
              <Button variant="gold" size="hero">
                Get started
              </Button>
            </Link>

            <Link href="/explore">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex">
              {AVATARS.map((avatar, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                    index > 0 ? "-ml-3" : ""
                  }`}
                >
                  <img
                    width={40}
                    height={40}
                    src={avatar.src}
                    alt={`Avatar ${index + 1}`}
                    className="w-10 h-10 object-cover"
                  />
                </div>
              ))}
            </div>
              <p className="text-sm text-stone-500 text-center sm:text-left">
              <strong className="text-stone-400 font-medium">
                400+ engineers
              </strong>{" "}
              cracked interviews via Prept
            </p>
          </div>
        </div>

        {/* RIGHT */}
  
         <div className="col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3">
         <CodeDemo duration={30000} writing />
         </div>
      </section>
         {/* LOGOS */}
      <section className="relative z-10 border-y border-white/10 py-14">
        <p className="text-center text-xs font-medium text-stone-600 tracking-widest uppercase mb-8">
          Interviewees landed roles at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-24 px-6">
          {LOGOS.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={50}
              height={50}
              className="h-6 w-auto opacity-60 grayscale"
            />
          ))}
        </div>
      </section>

        {/* FEATURES */}
      <section className="relative z-10 py-28 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <SectionHeading
            gray="Everything you need,"
            gold="nothing you don't"
          />
        </div>
      </section>
      <BentoCard></BentoCard>

    </div>
  );
}