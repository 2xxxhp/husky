import * as fs from 'fs'
import * as path from 'path'
import * as pupa from 'pupa'
import * as slash from 'slash'

// Used to identify scripts created by Husky
export const huskyIdentifier = '# husky'

export default function(
  userDir: string,
  requireRunNodePath: string = require.resolve('.bin/run-node') // For testing
) {
  const runNodePath = slash(path.relative(userDir, requireRunNodePath))

  const { version } = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8')
  )

  const template = fs.readFileSync(
    path.join(__dirname, '../../templates/hook.sh'),
    'utf-8'
  )

  return pupa(template, { huskyIdentifier, runNodePath, version })
}
