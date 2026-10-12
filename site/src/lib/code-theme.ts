// A Shiki theme in the site's palette, for code on ink. Every color is at
// least 6:1 against the background, well past AA for text.
export default {
  name: 'slab',
  type: 'dark',
  colors: {
    'editor.background': '#1c1c1c',
    'editor.foreground': '#f2f2ef',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { fontStyle: 'italic', foreground: '#9a9a93' },
    },
    {
      scope: [
        'entity.name.tag',
        'keyword',
        'storage',
        'storage.type',
        'keyword.control',
        'support.type.property-name.css',
      ],
      settings: { foreground: '#f08a6e' },
    },
    {
      scope: [
        'string',
        'string.quoted',
        'punctuation.definition.string',
        'constant.other.symbol',
      ],
      settings: { foreground: '#e8c27a' },
    },
    {
      scope: [
        'entity.other.attribute-name',
        'variable.parameter',
        'support.function',
        'entity.name.function',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
      ],
      settings: { foreground: '#a8c7b8' },
    },
    {
      scope: ['punctuation', 'meta.brace', 'keyword.operator'],
      settings: { foreground: '#c9c9c2' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'support.constant'],
      settings: { foreground: '#e8c27a' },
    },
  ],
};
