import { isProduction } from '../../../config/app';

const createStaticAssets = isProduction ? require('./prod') : require('./dev');

export default createStaticAssets;
