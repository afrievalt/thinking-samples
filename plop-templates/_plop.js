module.exports = {
  description: 'create a plop template',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'plop name?'
    },
    {
      type: 'list',
      name: 'type',
      message: 'What kind of template?',
      choices: ['file', 'folder']
    }
  ],

  actions: userInput => {
    const { type } = userInput || {}
    const data = {
      promptName: '{{name}}',
      promptNameCamel: '{{camelCase name}}'

    }
    const typeResults = (type === 'file')
      ? [
          {
            type: 'add',
            path: 'plop-templates/_{{name}}.js',
            data,
            templateFile: 'plop-templates/plop-generator_file.hbs'
          },
          {
            type: 'add',
            path: 'plop-templates/{{name}}.js.hbs',
            template: '// todo, copy the plop template you wish to create and replace w/ templates'
          }
        ]
      : [ // type !== 'file
          {
            type: 'add',
            path: 'plop-templates/_{{name}}.js',
            templateFile: 'plop-templates/plop-generator_folder.hbs',
            data
          },
          {
            type: 'add',
            path: 'plop-templates/{{camelCase name}}-templates/replace.txt',
            template: '// todo, replace this files with .hbs files, note you can use handlebar inside file names'
          }

        ]

    return [
      ...typeResults,
      {
      // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'plopfile.js',
        // Pattern tells plop where in the file to inject the template
        pattern: 'const _plop = require(\'./plop-templates/_plop\')',
        template: 'const _{{name}} = require(\'./plop-templates/_{{name}}\')'
      },
      {
      // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'plopfile.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '// controller generator',
        template: "plop.setGenerator('{{name}}', _{{name}})"
      }
    ]
  }
}
