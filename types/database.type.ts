export type FolderTable = {
  id: number | string;
  title: string;
  type: string;
  is_modifiable: boolean;
  noteCount: number;
};

export const ALL_NOTES_FOLDER_ID = "all-notes";
export const UNASSIGNED_NOTES_FOLDER_ID = "unassigned-notes";
export const RECENTLY_DELETED_FOLDER_ID = "recently_deleted";
