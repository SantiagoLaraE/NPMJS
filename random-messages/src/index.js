const messages = [
    'Lorem',       'ipsum',      'dolor',
    'sit',         'amet,',      'consectetur',
    'adipiscing',  'elit.',      'Curabitur',
    'pretium,',    'sem',        'et',
    'dictum',      'fermentum,', 'dui',
    'ex',          'varius',     'mi,',
    'sit',         'amet',       'lobortis',
    'elit',        'purus',      'vitae',
    'sem.',        'Fusce',      'blandit',
    'tortor',      'quis',       'nunc',
    'ullamcorper', 'bibendum'
  ]


  const randomMsg = () => {
      const message = messages[Math.floor(Math.random() * messages.length)]
      console.log(message);
  }

module.exports = {randomMsg};