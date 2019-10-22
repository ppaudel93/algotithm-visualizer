class Header {
  constructor(attrs) {

  }

  static headerItems = [
    {
      label: 'Home',
      value: 'home',
      icon: 'home',
      slot: 'start',
      to: '/'
    },
    {
      label: 'Algorithms',
      value: 'algorithms',
      icon: 'code-tags',
      slot: 'start',
      to: '/algorithms'
    },
    {
      label: 'Components',
      value: 'components',
      icon: 'view-carousel',
      slot: 'start',
      to: '/components'
    },
    {
      label: 'What is this?',
      value: 'description',
      icon: 'card-text',
      slot: 'start',
      to: '/whatisthis'
    },
    {
      label: 'About Me',
      value: 'aboutme',
      icon: 'account',
      slot: 'end',
      to: '/aboutme'
    }
  ]
}

export default Header
