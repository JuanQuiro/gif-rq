export interface GifAllT {
  private: boolean;
  snippetMeta: SnippetMeta;
  record: string;
  createdAt: Date;
}

export interface SnippetMeta {
  name: string;
}
