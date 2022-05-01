import { get } from "lodash";
import { URLBASE } from "../../globalConf";

export const ELEMENTS = {
    button: '[class="button"]',
    buttonAlert: '[class="button alert"]',
    buttonSuccess: '[class="button success"]',
    labelEdit: 'edit',
    labelDelete: 'delete',
    idPrefix: 'Iuvaret',
    totalRegisters: 10,
    buttonEditGrid: 'tbody tr a:contains(edit)',
    buttonDeleteGrid:'tbody tr a:contains(delete)',
    urlEditGrid: URLBASE + '#edit',
    urlDeleteGrid: URLBASE + '#delete'
}