import { resolve } from 'path'
export const CWD = process.cwd()

export const CLI_PACKAGE_JSON = resolve(__dirname, '../../package.json')

export const GENERATORS_DIR = resolve(__dirname, '../../template/generators')
export const SITE_OUTPUT_PATH = resolve(CWD, 'site')

export const PUBLIC_DIR_INDEXES = ['index.vue', 'index.tsx', 'index.ts', 'index.jsx', 'index.js']
export const VITE_RESOLVE_EXTENSIONS = ['.vue', '.tsx', '.ts', '.jsx', '.js', '.less', '.css']
export const SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']
export const SRC_DIR = resolve(CWD, 'src')

export const JEST_CONFIG = resolve(__dirname, '../config/jest.config.js')
export const JEST_MEDIA_MOCK = resolve(__dirname, '../config/jest.media.mock.js')
export const JEST_STYLE_MOCK = resolve(__dirname, '../config/jest.style.mock.js')
export const TESTS_DIR_NAME = '__tests__'
export const DOCS_DIR_NAME = 'docs'
export const EXAMPLE_DIR_NAME = 'example'
export const VARLET_CONFIG = resolve(CWD, 'varlet.config.js')
export const SITE_CONFIG = resolve(CWD, '.varlet/site.config.json')

// site
export const SITE = resolve(__dirname, '../../site')
export const SITE_PUBLIC_PATH = resolve(CWD, 'public')
export const SITE_DIR = resolve(CWD, '.varlet/site')
export const SITE_PC_DIR = resolve(CWD, '.varlet/site/pc')
export const SITE_PC_ROUTES = resolve(CWD, '.varlet/pc.routes.ts')
export const SITE_MOBILE_ROUTES = resolve(CWD, '.varlet/mobile.routes.ts')


export const ES_DIR = resolve(CWD, 'es')
export const LIB_DIR = resolve(CWD, 'lib')
export const UMD_DIR = resolve(CWD, 'umd')
export const TYPES_DIR = resolve(CWD, 'types')
export const ROOT_DOCS_DIR = resolve(CWD, 'docs')
export const ROOT_PAGES_DIR = resolve(CWD, 'pages')