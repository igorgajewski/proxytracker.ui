export class Proxy {
    public id: number;
    public name: string;
    public archiveSource: boolean;
    public mp4DeletionOffset: number;
    public mpgDeletionOffset: number;
    public mpgxDeletionOffset: number;
    public mp4xDeletionOffset: number;
    public sourceDeletionOffset: number;
    public wavDeletionOffset: number;
    public docDeletionOffset: number;
    public ifAtlasProductionClient: boolean;
    public contact: string;
  
    constructor(
      id: number,
      name: string,
      archiveSource: boolean,
      mp4DeletionOffset: number,
      mpgDeletionOffset: number,
      mpgxDeletionOffset: number,
      mp4xDeletionOffset: number,
      sourceDeletionOffset: number,
      wavDeletionOffset: number,
      docDeletionOffset: number,
      ifAtlasProductionClient: boolean,
      contact: string
    ) {
      this.id = id;
      this.name = name;
      this.archiveSource = archiveSource;
      this.mp4DeletionOffset = mp4DeletionOffset;
      this.mpgDeletionOffset = mpgDeletionOffset;
      this.mpgxDeletionOffset = mpgxDeletionOffset;
      this.mp4xDeletionOffset = mp4xDeletionOffset;
      this.sourceDeletionOffset = sourceDeletionOffset;
      this.wavDeletionOffset = wavDeletionOffset;
      this.docDeletionOffset = docDeletionOffset;
      this.ifAtlasProductionClient = ifAtlasProductionClient;
      this.contact = contact;
    }
  }
  