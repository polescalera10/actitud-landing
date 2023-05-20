export interface IBiblioteca {
  title: string;
  link: string;
  id: string;
}

export interface IPost {
  content: {
    html: string;
  };
  title: string;
  excerpt: string;
  slug: string;
  id: string;
  createdAt: string;
  coverImage: {
    url: string;
  };
}
