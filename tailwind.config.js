const FONT_WEIGHT_REGULAR = '400';
const FONT_WEIGHT_MEDIUM = '500';
const FONT_WEIGHT_BOLD = '700';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      pretendard: ['var(--font-pretendardFont)'],
      seoul: ['var(--font-seoulHangangFont)'],
    },
    screens: {
      // pc
      lg: { max: '1249px' },
      // tablet
      md: { max: '1024px' },
      // mobile
      sm: { max: '768px' },
    },
    fontSize: {
      d1: [
        '56px',
        {
          lineHeight: '78px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      d1m: [
        '56px',
        {
          lineHeight: '78px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      d1b: [
        '56px',
        {
          lineHeight: '78px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      d2: [
        '40px',
        {
          lineHeight: '56px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      d2m: [
        '40px',
        {
          lineHeight: '56px ',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      d2b: [
        '40px',
        {
          lineHeight: '56px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      d3: [
        '32px',
        {
          lineHeight: '48px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      d3m: [
        '32px',
        {
          lineHeight: '48px ',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      d3b: [
        '32px',
        {
          lineHeight: '48px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      h1: [
        '28px',
        {
          lineHeight: '40px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      h1m: [
        '28px',
        {
          lineHeight: '40px ',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      h1b: [
        '28px',
        {
          lineHeight: '40px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      h2: [
        '24px',
        {
          lineHeight: '34px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      h2m: [
        '24px',
        {
          lineHeight: '34px ',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      h2b: [
        '24px',
        {
          lineHeight: '34px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      h3: [
        '20px',
        {
          lineHeight: '28px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      h3m: [
        '20px',
        {
          lineHeight: '28px ',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      h3b: [
        '20px',
        {
          lineHeight: '28px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      h4: [
        '16px',
        {
          lineHeight: '26px ',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      h4m: [
        '16px',
        {
          lineHeight: '26px ',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      h4b: [
        '16px',
        {
          lineHeight: '26px ',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b1: [
        '24px',
        {
          lineHeight: '38px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b1m: [
        '24px',
        {
          lineHeight: '38px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b1b: [
        '24px',
        {
          lineHeight: '38px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b2: [
        '20px',
        {
          lineHeight: '32px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b2m: [
        '20px',
        {
          lineHeight: '32px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b2b: [
        '20px',
        {
          lineHeight: '32px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b3: [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b3m: [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b3b: [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b4: [
        '16px',
        {
          lineHeight: '26px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b4m: [
        '16px',
        {
          lineHeight: '26px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b4b: [
        '16px',
        {
          lineHeight: '26px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b5: [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b5m: [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b5b: [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b6: [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b6m: [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b6b: [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      b7: [
        '10px',
        {
          lineHeight: '16px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      b7m: [
        '10px',
        {
          lineHeight: '16px',
          fontWeight: FONT_WEIGHT_MEDIUM,
        },
      ],
      b7b: [
        '10px',
        {
          lineHeight: '16px',
          fontWeight: FONT_WEIGHT_BOLD,
        },
      ],
      button1: [
        '17px',
        {
          lineHeight: '20px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      button2: [
        '15px',
        {
          lineHeight: '18px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      button3: [
        '13px',
        {
          lineHeight: '16px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      button4: [
        '12px',
        {
          lineHeight: '14px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      label1: [
        '15px',
        {
          lineHeight: '16px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      label2: [
        '13px',
        {
          lineHeight: '14px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      label3: [
        '11px',
        {
          lineHeight: '12px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      Paragraph1: [
        '17px',
        {
          lineHeight: '28px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      Paragraph2: [
        '15px',
        {
          lineHeight: '24px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
      Paragraph3: [
        '14px',
        {
          lineHeight: '24px',
          fontWeight: FONT_WEIGHT_REGULAR,
        },
      ],
    },
    boxShadow: {
      shadow1: '2px 2px 8px rgba(34, 37, 41, 0.08)',
      shadow2: '2px 2px 16px rgba(34, 37, 41, 0.12)',
      shadow3: '2px 2px 32px rgba(34, 37, 41, 0.12)',
      shadow4: '0px 0px 60px rgba(34, 37, 41, 0.06)',
    },
    colors: {
      transparent: 'transparent',
      primary1: '#002F24',
      primary2: '#0A392E',
      primary3: '#18584C',
      primary4: '#206B5E',
      primary5: '#2D8777',
      primary6: '#42A78F',
      primary7: '#7BCEBB',
      primary8: '#A3E5D5',
      primary9: '#D1F4EC',
      primary10: '#E7FDF8',
      secondary1: '#CE0D52',
      secondary2: '#EA2069',
      secondary3: '#FF2F7A',
      secondary4: '#FF608F',
      secondary5: '#FF80A5',
      secondary6: '#FF9BB8',
      secondary7: '#C3CFF4',
      secondary8: '#FFD1DF',
      secondary9: '#FFEDF2',
      secondarySub1: '#D4827F',
      secondarySub2: '#3E3A39',
      secondarySub3: '#FA7124',
      secondarySub4: '#FFFCF7',
      secondarySub5: '#DF818F',
      gray1: '#000000',
      gray2: '#1F1F1F',
      gray3: '#383838',
      gray4: '#555555',
      gray5: '#616161',
      gray6: '#737373',
      gray7: '#949494',
      gray8: '#BEBEBE',
      gray9: '#CECECE',
      gray10: '#E8E8E8',
      gray11: '#F4F4F4',
      gray12: '#F9F9F9',
      gray13: '#FFFFFF',
      red1: '#85101E',
      red2: '#B73342',
      red3: '#D44652',
      red4: '#EB6570',
      red5: '#F68A94',
      red6: '#EABEC2',
      red7: '#F8E2E4',
      orange1: '#C43100',
      orange2: '#D6551C',
      orange3: '#E35F42',
      orange4: '#F5765D',
      orange5: '#FA9E7F',
      orange6: '#F3CBBD',
      orange7: '#FAE3DC',
      yellow1: '#EA8B1B',
      yellow2: '#F7921B',
      yellow3: '#FFAF36',
      yellow4: '#FFC53D',
      yellow5: '#FFDD80',
      yellow6: '#FFEFB8',
      yellow7: '#FFFBE5',
      green1: '#16592D',
      green2: '#1D6F3F',
      green3: '#2A9C5B',
      green4: '#4BB875',
      green5: '#85C79B',
      green6: '#BEE3CC',
      green7: '#D9F2E3',
      sky1: '#084F6B',
      sky2: '#175F7B',
      sky3: '#268CAD',
      sky4: '#3FAFC9',
      sky5: '#7FC6D6',
      sky6: '#CAE7EF',
      sky7: '#E4F2F5',
      teal1: '#3CAADC',
      teal2: '#5AC8FA',
      teal3: '#83D6FB',
      teal4: '#B5E6FD',
      teal5: '#CDEFFE',
      teal6: '#E6F7FE',
      blue1: '#32457A',
      blue2: '#2D4796',
      blue3: '#4E73CC',
      blue4: '#658EE1',
      blue5: '#9FB6EC',
      blue6: '#BECAE8',
      blue7: '#E1E6F3',
      purple1: '#47346B',
      purple2: '#563A8D',
      purple3: '#7956B0',
      purple4: '#9473D6',
      purple5: '#B59FE8',
      purple6: '#D1CAEB',
      purple7: '#E8E3F6',
      pink1: '#8A0E46',
      pink2: '#AD2260',
      pink3: '#C74A82',
      pink4: '#E569A0',
      pink5: '#ED91BC',
      pink6: '#EBCCDE',
      pink7: '#F9E8F1',
    },
    keyframes: {},
    animation: {},
  },
};
