import { resolve } from 'path'
export const CWD = process.cwd()

export const CLI_PACKAGE_JSON = resolve(__dirname, '../../package.json')

export const GENERATORS_DIR = resolve(__dirname, '../../template/generators')
export const SITE_OUTPUT_PATH = resolve(CWD, 'site')