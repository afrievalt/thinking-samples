module.exports = {
  description: 'create a slice',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'slice name?'
    }
  ],
  actions: [
    {
      type: 'add',
      // todo: update path
      path: './.js',
      templateFile: 'plop-templates/slice.js.hbs'
    }
  ]
}