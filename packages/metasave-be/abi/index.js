import fs from 'fs';

const MetaSave = JSON.parse(fs.readFileSync(new URL('./MetaSave.json', import.meta.url)));
const ZKProof = JSON.parse(fs.readFileSync(new URL('./ZKProof.json', import.meta.url)));

export const abi = {
    MetaSave: MetaSave.abi,
    ZKProof: ZKProof.abi
};