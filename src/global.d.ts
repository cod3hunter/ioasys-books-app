export {};

declare global {
  type RootStackParamList = {
    Login: undefined;
    Landing: undefined;
    Book: {id: string};
  };
  type Book = {
    id: string;
    title: string;
    description: string;
    authors: string[];
    pageCount: string;
    category: string;
    imageUrl: string;
    isbn10: string;
    isbn13: string;
    language: string;
    publisher: string;
    published: string;
  };
}
