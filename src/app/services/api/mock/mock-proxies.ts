import { Proxy } from "../../../models/proxy";
import { formatDate } from "@angular/common";

const MOCK_PROXIES: Proxy[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    filename: `filename_${i + 1}`,
    subfolder: `subfolder_${i + 1}`,
    atlasMediaId: 'test',
    ar: '16:9',
    fps: '25',
    bitc: 'BITC_on_Source',
    audioConfig: 'StereoFrom1-2',
    duration: '00:01:00',
    extension: '.mp4',
    arrivalDate:formatDate(Date.now(), 'yyyy-MM-dd HH:MM', 'en-US'),
    deletionDate: formatDate(Date.now(), 'yyyy-MM-dd HH:MM', 'en-US')
})); export default MOCK_PROXIES;