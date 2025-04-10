export class Proxy {
    public id: number;
    public filename: string;
    public subfolder: string;
    public atlasMediaId: string;
    public ar: string;
    public fps: string;
    public bitc: string;
    public audioConfig: string;
    public duration: string;
    public extension: string;
    public arrivalDate: string;
    public deletionDate: string;
  
    constructor(
      id: number,
      filename: string,
      subfolder: string,
      atlasMediaId: string,
      ar: string,
      fps: string,
      bitc: string,
      audioConfig: string,
      duration: string,
      extension: string,
      arrivalDate: string,
      deletionDate: string
    ) {
      this.id = id;
      this.filename = filename;
      this.subfolder = subfolder;
      this.atlasMediaId = atlasMediaId;
      this.ar = ar;
      this.fps = fps;
      this.bitc = bitc;
      this.audioConfig = audioConfig;
      this.duration = duration;
      this.extension = extension;
      this.arrivalDate = arrivalDate;
      this.deletionDate = deletionDate;
    }
  }
  