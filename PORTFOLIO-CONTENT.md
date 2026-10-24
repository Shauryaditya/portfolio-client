# Updating the work showcase

The homepage work section is in `src/components/WorkExperience.tsx`, with styles in `src/components/work-experience.css`. Update account names, URLs, preview images and colours in `src/data/portfolio.ts`.

The confirmed contribution is **content strategy and publishing**. The supplied brand previews illustrate the accounts; they do not credit Priyanka with photography, design, copywriting or every individual post. Account counts describe the portfolio scope, not performance.

Pinterest has its own feature in the Minds Journal chapter because the portfolio owner identified it as an important part of Priyanka's contribution. The board names in `pinterestBoards` come from the screenshot shared in the conversation. They describe visible themes on the account, not boards or pins she personally created. Keep the current profile link as the source of live content; do not present the screenshot's follower count as growth caused by her work.

The Pinterest profile card is a responsive recreation of a second screenshot shared in the conversation. That attachment was not available as a local file, so the card uses its visible title, handle, description and historical 5.6m follower / 21 following snapshot. If the exact image is later saved under `public/`, the card can be replaced with that image. The snapshot numbers should not be updated without a dated source.

## Adding a brand preview

Put an approved image in `public/`, then add `image`, `imageAlt` and `previewNote` to its entry in `currentBrands`. Without an image, the account displays a typographic brand card and a link to its live profile. Existing previews open at full size when clicked. These images are curated snapshots, not live Instagram embeds.

## Turning an account into a case study

For one specific campaign, collect:

- The campaign name and dates she worked on it.
- The intended audience and objective.
- Her content strategy: topics, formats, cadence and the reasoning behind them.
- Three to five post URLs published during her involvement.
- Her exact publishing responsibilities and any collaborators to credit.
- A verified result, with reporting dates and a source, if available.

Use the structure **Context → My role → Strategy → Published examples → Results or learnings**. A clear explanation of her choices is useful even without numerical results. Do not treat a channel's current follower count as growth she generated.

## Sources and scope

- The user supplied all 16 social URLs and identified The Minds Journal as the previous employer and Palsons Derma as the current employer.
- The user confirmed content strategy and posting as her responsibilities.
- The user identified Pinterest as a particularly important part of her work and supplied a profile screenshot showing board themes.
- https://themindsjournal.com/ supplied the publication's broad content context.
- https://palsonsderma.com/ supplied skincare and hair care context.
- Instagram could not be directly fetched during implementation. Supplied local previews were used; the original social URLs were preserved. In particular, the Q-Sera screenshot shows an older/different handle, while the button uses the URL supplied by the user.

The inactive `CaseStudies.tsx` component still contains unrelated template examples. It is not rendered by the homepage; replace its example content before enabling it.
