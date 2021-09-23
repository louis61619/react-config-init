module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["react-app", "react-app/jest", "prettier"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
  }
}