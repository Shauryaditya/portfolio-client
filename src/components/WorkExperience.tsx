"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Camera, Check, Globe2, Layers3, Send } from "lucide-react";
import { currentBrands, mindsChannels, pinterestBoards } from "@/data/portfolio";
import "./work-experience.css";

function ExternalLink({ href, children, className = "" }: {
  href: string; children: ReactNode; className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}<ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function WorkExperience() {
  const [selectedId, setSelectedId] = useState(currentBrands[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["6%", "-26%"]);
  const brand = currentBrands.find((item) => item.id === selectedId) ?? currentBrands[0];
  const featuredBrands = currentBrands.filter((item) => item.image);

  return (
    <section ref={sectionRef} id="work" className="work-showcase" aria-labelledby="work-heading">
      <div className="work-motion-backdrop" aria-hidden="true">
        <motion.span style={reduceMotion ? undefined : { x: marqueeX }}>selected work / selected work / selected work</motion.span>
      </div>
      <div className="work-shell">
        <motion.header className="work-intro" initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <div>
            <p className="work-eyebrow"><span /> Selected work / Priyanka</p>
            <h2 id="work-heading">Behind the <em>feed.</em></h2>
          </div>
          <div className="work-intro-copy">
            <p>Different brands. Different audiences.<br />A considered approach to every post.</p>
            <p className="work-muted">Content strategy and publishing across skincare, hair care and digital media.</p>
            <a href="#current-work" className="work-text-link">Explore the accounts <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </motion.header>
        <div className="work-scope" aria-label="Portfolio scope">
          <span><strong>02</strong> companies</span>
          <span><strong>08</strong> current brand accounts</span>
          <span><strong>08</strong> previous social channels</span>
          <span className="work-scope-role">Content strategy <span aria-hidden="true">+</span> Publishing</span>
        </div>

        <motion.article id="current-work" className="work-chapter work-current" aria-labelledby="current-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 72, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}>
          <div className="work-chapter-top">
            <p className="work-eyebrow">01 / Current company</p>
            <span className="work-status"><span /> Present</span>
          </div>
          <div className="work-chapter-heading">
            <div><h3 id="current-heading">Palsons Derma</h3><p>One portfolio. Many brand voices.</p></div>
            <ExternalLink href="https://palsonsderma.com/" className="work-company-link"><Globe2 size={16} aria-hidden="true" /> Company website</ExternalLink>
          </div>
          <div className="work-role-line">
            <span>My role</span><strong>Content strategy & publishing</strong>
            <p>Planning what each account shares and taking that content live.</p>
          </div>
          <div className="work-brand-browser">
            <div className="work-brand-menu">
              <p className="work-eyebrow">Explore the brand accounts <span>08</span></p>
              <div className="work-brand-buttons" role="group" aria-label="Choose a brand to preview">
                {currentBrands.map((item, index) => (
                  <button key={item.id} type="button" aria-pressed={selectedId === item.id}
                    aria-controls="brand-preview" onClick={() => setSelectedId(item.id)} className="work-brand-button">
                    <span className="work-brand-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.name}<small>{item.category}</small></span>
                    {selectedId === item.id ? <Check size={17} aria-hidden="true" /> : <ArrowUpRight size={17} aria-hidden="true" />}
                  </button>
                ))}
              </div>
              <p className="work-menu-note">Select a brand to explore its presence.</p>
            </div>
            <AnimatePresence mode="wait" initial={false}>
            <motion.div key={brand.id} id="brand-preview" className="work-preview" role="region" aria-label={`${brand.name} account preview`}
              initial={reduceMotion ? false : { opacity: 0, y: 16, rotateY: -4 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              style={{ "--brand-ink": brand.color, "--brand-paper": brand.background } as CSSProperties}>
              <div className="work-preview-bar" aria-live="polite" aria-atomic="true">
                <span><Camera size={17} aria-hidden="true" /> @{brand.handle}</span>
                <span className="work-preview-kind">{brand.image ? "Portfolio preview" : "Brand channel"}</span>
              </div>
              {brand.image ? (
                <a key={brand.image} href={brand.image} target="_blank" rel="noopener noreferrer" className="work-preview-image"
                  aria-label={`View full ${brand.name} portfolio preview (opens in a new tab)`}>
                  <Image src={brand.image} alt={brand.imageAlt ?? `${brand.name} portfolio preview`} fill
                    sizes="(min-width: 1200px) 660px, (min-width: 800px) 55vw, 90vw" className="object-contain" />
                  <span className="work-image-zoom">View full preview <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
              ) : (
                <div className="work-brand-cover">
                  <span className="work-cover-category">{brand.category} / Instagram</span>
                  <span className="work-cover-orbit" aria-hidden="true" />
                  <h4>{brand.name}</h4><p>Content strategy.<br />Consistent publishing.</p>
                  <ExternalLink href={brand.url} className="work-cover-link">Explore the live account</ExternalLink>
                </div>
              )}
              <div className="work-preview-footer">
                <p>{brand.previewNote ?? "Explore this brand’s content on its Instagram account."}</p>
                <ExternalLink href={brand.url} className="work-solid-link">View Instagram</ExternalLink>
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        </motion.article>

        <div className="work-spotlights" aria-labelledby="spotlights-heading">
          <div className="work-spotlights-heading">
            <p className="work-eyebrow">A closer look / Palsons Derma</p>
            <h3 id="spotlights-heading">A different feed for <em>every story.</em></h3>
            <p>Four snapshots from the wider portfolio. Explore each account to see its current content.</p>
          </div>
          <div className="work-spotlight-grid">
            {featuredBrands.map((item, index) => (
              <motion.article key={item.id} className="work-spotlight-card"
                initial={reduceMotion ? false : { opacity: 0, y: 90, rotate: index % 2 ? 3 : -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -10, rotate: index % 2 ? 1 : -1 }}>
                <div className="work-spotlight-top"><span>{String(index + 1).padStart(2, "0")} / {item.category}</span><span>@{item.handle}</span></div>
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="work-spotlight-image"
                  aria-label={`View full ${item.name} preview (opens in a new tab)`}>
                  <Image src={item.image!} alt={item.imageAlt ?? `${item.name} portfolio preview`} fill
                    sizes="(min-width: 800px) 48vw, 90vw" className="object-contain" />
                  <span className="work-image-zoom">View full preview <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="work-spotlight-bottom">
                  <div><h4>{item.name}</h4><p>{item.previewNote}</p></div>
                  <ExternalLink href={item.url} className="work-spotlight-link">Visit account</ExternalLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.article className="work-chapter work-previous" aria-labelledby="previous-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 80, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.75, ease: "easeOut" }}>
          <div className="work-chapter-top">
            <p className="work-eyebrow">02 / Previous company</p>
            <span className="work-archive-label">Digital publishing & community</span>
          </div>
          <div className="work-minds-layout">
            <div className="work-minds-copy">
              <h3 id="previous-heading">The Minds<br /><em>Journal.</em></h3>
              <p className="work-minds-lead">Content that starts a conversation.</p>
              <p className="work-muted">A digital publication exploring mental health, relationships and self-development. A social presence spanning eight platforms, each with its own way of connecting with readers.</p>
              <div className="work-minds-role">
                <span className="work-eyebrow">My role</span><h4>Content strategy & publishing</h4>
                <p>Planning content and publishing across the publication’s social channels.</p>
              </div>
              <ExternalLink href="https://themindsjournal.com/" className="work-text-link">Explore the publication</ExternalLink>
              <div className="work-channel-list">
                <p className="work-eyebrow">Explore all eight channels</p>
                <div>{mindsChannels.map((channel) => (
                  <ExternalLink key={channel.name} href={channel.url} className="work-channel">
                    <span className="work-channel-mark" aria-hidden="true">{channel.mark}</span>{channel.name}
                  </ExternalLink>
                ))}</div>
              </div>
            </div>
            <figure className="work-minds-visual">
              <div className="work-minds-visual-heading"><span>THE MINDS JOURNAL</span><span>Social edit / 01</span></div>
              <a href="/mindjournal_insta.webp" target="_blank" rel="noopener noreferrer"
                className="work-minds-image" aria-label="View full Minds Journal content preview (opens in a new tab)">
                <Image src="/mindjournal_insta.webp" alt="Curated Minds Journal content featuring quotes, relationships and conversation prompts"
                  width={1024} height={1536} sizes="(min-width: 1100px) 530px, (min-width: 800px) 48vw, 90vw" />
                <span className="work-image-zoom">View full preview <ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
              <figcaption>Quotes, relatable stories & conversation starters.</figcaption>
            </figure>
          </div>
        </motion.article>

        <section id="pinterest" className="work-pinterest" aria-labelledby="pinterest-heading">
          <motion.div className="work-pinterest-intro" initial={reduceMotion ? false : { opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <p className="work-eyebrow"><span className="work-pinterest-mark" aria-hidden="true">P</span> The Minds Journal / Pinterest</p>
            <h3 id="pinterest-heading">A major part of <em>my work.</em></h3>
            <p className="work-pinterest-lead">Pinterest was a significant focus of my work at The Minds Journal. I contributed to the content strategy and publishing behind a presence that covers life lessons, psychology, relationships and spirituality.</p>
            <ExternalLink href="https://in.pinterest.com/themindsjournal/" className="work-pinterest-link">Explore the Pinterest profile</ExternalLink>
          </motion.div>
          <div className="work-pinterest-boards" aria-label="Examples of public Pinterest board themes">
            <div className="work-pinterest-board-label"><span>Across the boards</span><span>Selected themes from the profile</span></div>
            <div className="work-pinterest-board-grid">
              {pinterestBoards.map((board, index) => (
                <motion.div key={board.name} className={"work-pinterest-board work-pinterest-" + board.tone}
                  initial={reduceMotion ? false : { opacity: 0, y: 50, rotate: index % 2 ? 3 : -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.2 }}
                  whileHover={reduceMotion ? undefined : { y: -9, rotate: index % 2 ? 2 : -2 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}>
                  <span className="work-pinterest-board-number">0{index + 1} / {board.type}</span>
                  <strong>{board.name}</strong>
                  <span className="work-pinterest-board-decoration" aria-hidden="true">✳</span>
                </motion.div>
              ))}
            </div>
            <p className="work-pinterest-caption">Selected board themes. Explore the live Pinterest profile for current boards and pins.</p>
          </div>
          <motion.figure className="work-pinterest-proof" initial={reduceMotion ? false : { opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <div className="work-pinterest-profile">
              <div className="work-pinterest-profile-header">
                <div className="work-pinterest-avatar" aria-hidden="true"><span>✿</span><strong>MIND<br />JOURNAL</strong></div>
                <div><strong>The Minds Journal</strong><span>themindsjournal</span></div>
              </div>
              <p className="work-pinterest-profile-count">5.6m followers · 21 following <span>in this snapshot</span></p>
              <p className="work-pinterest-profile-description">Your guide to better mental health and relationships: psychology, self-development, quotes, parenting, horoscope, zodiac signs and spirituality.</p>
              <a className="work-pinterest-profile-website" href="https://themindsjournal.com/" target="_blank" rel="noopener noreferrer">themindsjournal.com <ArrowUpRight size={14} aria-hidden="true" /></a>
              <ExternalLink href="https://in.pinterest.com/themindsjournal/" className="work-pinterest-follow">View Pinterest</ExternalLink>
            </div>
            <figcaption>
              <span className="work-eyebrow">Pinterest profile / snapshot</span>
              <strong>A closer look at the account.</strong>
              <p>The profile brings readers to boards on relationships, self-development, astrology, wellbeing and more. Explore the live page for current boards and pins.</p>
            </figcaption>
          </motion.figure>
        </section>

        <div className="work-minds-extra">
          <motion.div className="work-minds-extra-copy" initial={reduceMotion ? false : { opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <p className="work-eyebrow">From the feed / The Minds Journal</p>
            <h3>Small posts.<br /><em>Big conversations.</em></h3>
            <p>The mix moves from short quotes to relationship prompts and reflections on everyday life. This selected Instagram snapshot shows the range of topics that readers encounter across the publication.</p>
            <ExternalLink href={mindsChannels[0].url} className="work-text-link">Explore Instagram</ExternalLink>
          </motion.div>
          <motion.div className="work-minds-extra-stack" initial={reduceMotion ? false : { opacity: 0, x: 55 }}
            aria-label="Two Minds Journal portfolio previews"
            whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <motion.div className="work-minds-extra-stack-inner" initial="rest" whileHover={reduceMotion ? undefined : "hover"}>
            <motion.a href="/mindjournal_insta.webp" target="_blank" rel="noopener noreferrer"
              className="work-minds-extra-image work-minds-extra-back" aria-label="View full Minds Journal content grid (opens in a new tab)"
              variants={{ rest: { rotate: -10, x: -32, y: 18 }, hover: { rotate: -17, x: -92, y: -8 } }}>
              <Image src="/mindjournal_insta.webp" alt="A nine-post selection of Minds Journal quotes and conversation prompts"
                width={1024} height={1536} sizes="(min-width: 800px) 24vw, 50vw" />
            </motion.a>
            <motion.a href="/minds-journal-ig.jpg" target="_blank" rel="noopener noreferrer"
              className="work-minds-extra-image work-minds-extra-front" aria-label="View full Minds Journal Instagram preview (opens in a new tab)"
              variants={{ rest: { rotate: 7, x: 32, y: 15 }, hover: { rotate: 15, x: 82, y: -18 } }}>
              <Image src="/minds-journal-ig.jpg" alt="The Minds Journal Instagram profile and quote grid in a phone mockup"
                width={819} height={1024} sizes="(min-width: 800px) 24vw, 50vw" />
              <span className="work-image-zoom">View full preview <ArrowUpRight size={15} aria-hidden="true" /></span>
            </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <div className="work-contribution" aria-labelledby="contribution-heading">
          <div><p className="work-eyebrow">Behind the work</p><h3 id="contribution-heading">My part in the process.</h3></div>
          <div className="work-contribution-item"><Layers3 aria-hidden="true" /><h4>Content strategy</h4><p>Planning what to share for each brand and its audience.</p></div>
          <div className="work-contribution-item"><Send aria-hidden="true" /><h4>Publishing</h4><p>Taking planned content live across the brand’s social channels.</p></div>
        </div>
        <p className="work-credit">Selected brand content shown for context. My contribution: content strategy and publishing. Previews are curated snapshots; live accounts may have changed.</p>
      </div>
    </section>
  );
}
