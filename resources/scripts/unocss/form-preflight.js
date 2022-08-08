export const formPreflight = {
  layer: '_forms_css',
  getCSS: ({ theme }) => {
    const encodeSvg = svg => `data:image/svg+xml,${svg
          .replace('<svg', (~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
          .replace(/"/g, '\'')
          .replace(/%/g, '%25')
          .replace(/#/g, '%23')
          .replace(/{/g, '%7B')
          .replace(/}/g, '%7D')
          .replace(/</g, '%3C')
          .replace(/>/g, '%3E')}`

    const gray = theme?.colors?.gray?.[500] ?? '#6b7280'
    const blue = theme?.colors?.blue?.[600] ?? '#2563eb'
    const darkModeGray = theme?.colors?.gray?.[400] ?? '#9ca3af'
    const darkModeBlue = theme?.colors?.blue?.[300] ?? '#93c5fd'
    const borderRadius = { none: 'none' }
    const borderWidth = { DEFAULT: '1px' }
    const baseFontSize = '1rem'
    const baseLineHeight = '1.5rem'

    const spacing = {
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      10: '2.5rem',
    }

    const rules = [
      {
        base: [
          '[type=\'text\']',
          '[type=\'email\']',
          '[type=\'url\']',
          '[type=\'password\']',
          '[type=\'number\']',
          '[type=\'date\']',
          '[type=\'datetime-local\']',
          '[type=\'month\']',
          '[type=\'search\']',
          '[type=\'tel\']',
          '[type=\'time\']',
          '[type=\'week\']',
          '[multiple]',
          'textarea',
          'select',
        ],
        styles: {
          'appearance': 'none',
          'background-color': '#fff',
          'border-color': gray,
          'border-width': borderWidth.DEFAULT,
          'border-radius': borderRadius.none,
          'padding-top': spacing[2],
          'padding-right': spacing[3],
          'padding-bottom': spacing[2],
          'padding-left': spacing[3],
          'font-size': baseFontSize,
          'line-height': baseLineHeight,
          '--un-shadow': '0 0 #0000',
          // '&:focus': {
          //     'outline': '2px solid transparent',
          //     'outline-offset': '2px',
          //     '--un-ring-inset': 'var(--un-empty,/*!*/ /*!*/)',
          //     '--un-ring-offset-width': '0px',
          //     '--un-ring-offset-color': '#fff',
          //     '--un-ring-color': blue,
          //     '--un-ring-offset-shadow': `var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)`,
          //     '--un-ring-shadow': `var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color)`,
          //     'box-shadow': `var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)`,
          //     'border-color': blue,
          // },
        },
      },
      {
        base: [
          '.dark [type=\'text\']',
          '.dark [type=\'email\']',
          '.dark [type=\'url\']',
          '.dark [type=\'password\']',
          '.dark [type=\'number\']',
          '.dark [type=\'date\']',
          '.dark [type=\'datetime-local\']',
          '.dark [type=\'month\']',
          '.dark [type=\'search\']',
          '.dark [type=\'tel\']',
          '.dark [type=\'time\']',
          '.dark [type=\'week\']',
          '.dark [multiple]',
          '.dark textarea',
          '.dark select',
        ],
        styles: {
          'background-color': '#000',
          'border-color': darkModeGray,
          'padding-top': spacing[2],
          'padding-right': spacing[3],
          'padding-bottom': spacing[2],
          'padding-left': spacing[3],
          'font-size': baseFontSize,
          'line-height': baseLineHeight,
          '--un-shadow': '0 0 #fff0',
          // '&:focus': {
          //     'outline': '2px solid transparent',
          //     'outline-offset': '2px',
          //     '--un-ring-inset': 'var(--un-empty,/*!*/ /*!*/)',
          //     '--un-ring-offset-width': '0px',
          //     '--un-ring-offset-color': '#000',
          //     '--un-ring-color': blue,
          //     '--un-ring-offset-shadow': `var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)`,
          //     '--un-ring-shadow': `var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color)`,
          //     'box-shadow': `var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)`,
          //     'border-color': blue,
          // },
        },
      },
      {
        base: [
          '[type=\'text\']:focus',
          '[type=\'email\']:focus',
          '[type=\'url\']:focus',
          '[type=\'password\']:focus',
          '[type=\'number\']:focus',
          '[type=\'date\']:focus',
          '[type=\'datetime-local\']:focus',
          '[type=\'month\']:focus',
          '[type=\'search\']:focus',
          '[type=\'tel\']:focus',
          '[type=\'time\']:focus',
          '[type=\'week\']:focus',
          '[multiple]:focus',
          'textarea:focus',
          'select:focus',
        ],
        styles: {
          'outline': '2px solid transparent',
          'outline-offset': '2px',
          '--un-ring-inset': 'var(--un-empty,/*!*/ /*!*/)',
          '--un-ring-offset-width': '0px',
          '--un-ring-offset-color': '#fff',
          '--un-ring-color': blue,
          '--un-ring-offset-shadow': 'var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)',
          '--un-ring-shadow': 'var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color)',
          'box-shadow': 'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
          'border-color': blue,
        },
      },
      {
        base: [
          '.dark [type=\'text\']:focus',
          '.dark [type=\'email\']:focus',
          '.dark [type=\'url\']:focus',
          '.dark [type=\'password\']:focus',
          '.dark [type=\'number\']:focus',
          '.dark [type=\'date\']:focus',
          '.dark [type=\'datetime-local\']:focus',
          '.dark [type=\'month\']:focus',
          '.dark [type=\'search\']:focus',
          '.dark [type=\'tel\']:focus',
          '.dark [type=\'time\']:focus',
          '.dark [type=\'week\']:focus',
          '.dark [multiple]:focus',
          '.dark textarea:focus',
          '.dark select:focus',
        ],
        styles: {
          '--un-ring-offset-color': '#000',
          '--un-ring-color': darkModeBlue,
          'border-color': darkModeBlue,
        },
      },
      {
        base: ['input::placeholder', 'textarea::placeholder'],
        styles: {
          color: gray,
          opacity: '1',
        },
      },
      {
        base: ['.dark input::placeholder', '.dark textarea::placeholder'],
        styles: {
          color: darkModeGray,
          opacity: '1',
        },
      },
      {
        base: ['::-webkit-datetime-edit-fields-wrapper'],
        styles: {
          padding: '0',
        },
      },
      {
        // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
        // This sucks because users can't change line-height with a utility on date inputs now.
        // Reference: https://github.com/twbs/bootstrap/pull/31993
        base: ['::-webkit-date-and-time-value'],
        styles: {
          'min-height': '1.5em',
        },
      },
      {
        // In Safari on macOS date time inputs are 4px taller than normal inputs
        // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
        // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
        base: [
          '::-webkit-datetime-edit',
          '::-webkit-datetime-edit-year-field',
          '::-webkit-datetime-edit-month-field',
          '::-webkit-datetime-edit-day-field',
          '::-webkit-datetime-edit-hour-field',
          '::-webkit-datetime-edit-minute-field',
          '::-webkit-datetime-edit-second-field',
          '::-webkit-datetime-edit-millisecond-field',
          '::-webkit-datetime-edit-meridiem-field',
        ],
        styles: {
          'padding-top': '0',
          'padding-bottom': '0',
        },
      },
      {
        base: ['select'],
        styles: {
          'background-image': `url("${encodeSvg(
                      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${
                          gray
                      }" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
                  )}")`,
          'background-position': `right ${spacing[2]} center`,
          'background-repeat': 'no-repeat',
          'background-size': '1.5em 1.5em',
          'padding-right': spacing[10],
          'print-color-adjust': 'exact',
        },
      },
      {
        base: ['[multiple]'],
        styles: {
          'background-image': 'initial',
          'background-position': 'initial',
          'background-repeat': 'unset',
          'background-size': 'initial',
          'padding-right': spacing[3],
          'print-color-adjust': 'unset',
        },
      },
      {
        base: ['[type=\'checkbox\']', '[type=\'radio\']'],
        styles: {
          'appearance': 'none',
          'padding': '0',
          'print-color-adjust': 'exact',
          'display': 'inline-block',
          'vertical-align': 'middle',
          'background-origin': 'border-box',
          'user-select': 'none',
          'flex-shrink': '0',
          'height': spacing[4],
          'width': spacing[4],
          'color': blue,
          'background-color': '#fff',
          'border-color': gray,
          'border-width': borderWidth.DEFAULT,
          '--un-shadow': '0 0 #0000',
        },
      },
      {
        base: ['.dark [type=\'checkbox\']', '.dark [type=\'radio\']'],
        styles: {
          'color': darkModeBlue,
          'background-color': '#000',
          'border-color': darkModeGray,
          '--un-shadow': '0 0 #fff0',
        },
      },
      {
        base: ['[type=\'checkbox\']'],
        styles: {
          'border-radius': borderRadius.none,
        },
      },
      {
        base: ['[type=\'radio\']'],
        styles: {
          'border-radius': '100%',
        },
      },
      {
        base: ['[type=\'checkbox\']:focus', '[type=\'radio\']:focus'],
        styles: {
          'outline': '2px solid transparent',
          'outline-offset': '2px',
          '--un-ring-inset': 'var(--un-empty,/*!*/ /*!*/)',
          '--un-ring-offset-width': '2px',
          '--un-ring-offset-color': '#fff',
          '--un-ring-color': blue,
          '--un-ring-offset-shadow': 'var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)',
          '--un-ring-shadow': 'var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color)',
          'box-shadow': 'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
        },
      },
      {
        base: ['.dark [type=\'checkbox\']:focus', '.dark [type=\'radio\']:focus'],
        styles: {
          '--un-ring-offset-color': '#000',
          '--un-ring-color': darkModeBlue,
        },
      },
      {
        base: ['[type=\'checkbox\']:checked', '[type=\'radio\']:checked'],
        styles: {
          'border-color': 'transparent',
          'background-color': 'currentColor',
          'background-size': '100% 100%',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
        },
      },
      {
        base: ['[type=\'checkbox\']:checked'],
        styles: {
          'background-image': `url("${encodeSvg(
                      '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>',
                  )}")`,
        },
      },
      {
        base: ['.dark [type=\'checkbox\']:checked'],
        styles: {
          'background-image': `url("${encodeSvg(
                      '<svg viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>',
                  )}")`,
        },
      },
      {
        base: ['[type=\'radio\']:checked'],
        styles: {
          'background-image': `url("${encodeSvg(
                      '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>',
                  )}")`,
        },
      },
      {
        base: ['.dark [type=\'radio\']:checked'],
        styles: {
          'background-image': `url("${encodeSvg(
                      '<svg viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>',
                  )}")`,
        },
      },
      {
        base: [
          '[type=\'checkbox\']:checked:hover',
          '[type=\'checkbox\']:checked:focus',
          '[type=\'radio\']:checked:hover',
          '[type=\'radio\']:checked:focus',
        ],
        styles: {
          'border-color': 'transparent',
          'background-color': 'currentColor',
        },
      },
      {
        base: ['[type=\'checkbox\']:indeterminate'],
        styles: {
          'background-image': `url("${encodeSvg(
                      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>',
                  )}")`,
          'border-color': 'transparent',
          'background-color': 'currentColor',
          'background-size': '100% 100%',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
        },
      },
      {
        base: ['[type=\'checkbox\']:indeterminate:hover', '[type=\'checkbox\']:indeterminate:focus'],
        styles: {
          'border-color': 'transparent',
          'background-color': 'currentColor',
        },
      },
      {
        base: ['[type=\'file\']'],
        styles: {
          'background': 'unset',
          'border-color': 'inherit',
          'border-width': '0',
          'border-radius': '0',
          'padding': '0',
          'font-size': 'unset',
          'line-height': 'inherit',
        },
      },
      {
        base: ['[type=\'file\']:focus'],
        styles: {
          outline: [
            '1px solid ButtonText',
            '1px auto -webkit-focus-ring-color',
          ],
        },
      },
    ]

    return rules.map(({ base, styles }) => {
      const s = base.join(',')
      const d = Object.entries(styles).map(
        ([k, values]) => (Array.isArray(values) ? values : [values]).map(v => `${k}:${v}`),
      ).flat(1).join(';')
      return `${s}{${d}}`
    }).join('\n')
  },
}
