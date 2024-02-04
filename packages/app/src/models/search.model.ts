// TODO: Replace any with your Recipe type
export interface SearchParameters {
  elements: any,
  keys: string[],
}

export interface ITextEditorChildren {
  text: string;
  type: string;
};

export interface ITextEditorBlock{
  type: string;
  level?: number;
  children: ITextEditorChildren[];
  format?: string;
};

export interface IStrapiRecipe{
  id: number;
  recipe_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: null | string;
  recipes_description: string;
  recipe_instructions: ITextEditorBlock[];
};

