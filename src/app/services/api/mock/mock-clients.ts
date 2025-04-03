import { Client } from "../../../models/client";

// Generate an array of 100 mock clients with random values
const MOCK_CLIENTS: Client[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
  archiveSource: Math.random() > 0.5,
  mp4DeletionOffset: Math.floor(Math.random() * 100),
  mpgDeletionOffset: Math.floor(Math.random() * 100),
  mpgxDeletionOffset: Math.floor(Math.random() * 100),
  mp4xDeletionOffset: Math.floor(Math.random() * 100),
  sourceDeletionOffset: Math.floor(Math.random() * 100),
  wavDeletionOffset: Math.floor(Math.random() * 100),
  docDeletionOffset: Math.floor(Math.random() * 100),
  ifAtlasProductionClient: Math.random() > 0.5,
  contact: `client${i + 1}@example.com`
}));export default MOCK_CLIENTS;

