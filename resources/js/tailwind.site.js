import plugin from 'tailwindcss/plugin'

export default {
    plugins: [
        plugin(function({ addBase, theme }) {
            addBase({
              ':root': {
                  // Fluid typography from 1 rem to 1.2 rem with fallback to 20px.
                  fontSize: '20px',
                  letterSpacing: '-0.4px',
                  lineHeight: '1.125',
                  fontWeight: '400',

                  // Safari resize fix.
                  minHeight: '0vw',
              },
              // Default color transition on links unless user prefers reduced motion.
              '@media (prefers-reduced-motion: no-preference)': {
                'a': {
                  transition: 'color .3s ease-in-out',
                },
              },
              'html': {
                  color: theme('colors.neutral.DEFAULT'),
                  //--------------------------------------------------------------------------
                  // Set sans, serif or mono stack with optional custom font as default.
                  //--------------------------------------------------------------------------
                  // fontFamily: theme('fontFamily.mono'),
                  fontFamily: theme('fontFamily.sans'),
                  // fontFamily: theme('fontFamily.serif'),
              },
              'mark': {
                backgroundColor: theme('colors.primary.DEFAULT'),
                color: theme('colors.white')
              },
            })
          }),

          // Custom components for this particular site.
          plugin(function({ addComponents, theme }) {
              const components = {
                // Overwrites .fluid-container defined in tailwind.config.peak.js
                '.fluid-container': {
                    width: '100%',
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // Use safe-area-inset together with default padding for Apple devices with a notch.
                    paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.16')})`,
                    paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.16')})`,
                },
                // Overwrites .outer-grid defined in tailwind.config.peak.js
                '.outer-grid': {
                    paddingTop: 0,
                    paddingBottom: '240px',
                    rowGap: 0,
                },
              }
              addComponents(components)
          }),

          // Custom utilities for this particular site.
          plugin(function({ addUtilities, theme, variants }) {
            const newUtilities = {
            }
            addUtilities(newUtilities)
          }),
          // Custom variants for this particular site.
          plugin(function ({ addVariant }) {
              addVariant('mobile-only', "@media screen and (max-width: theme('screens.sm'))");
              // instead of hard-coded 640px use sm breakpoint value from config. Or anything
              addVariant('tablet-only', "@media screen and (min-width: theme('screens.sm')) and (max-width: theme('screens.lg'))");
              addVariant('mbtb-only', "@media screen and (max-width: theme('screens.lg'))");
          }),
    ],
}
