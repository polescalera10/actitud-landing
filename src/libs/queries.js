import { gql } from "graphql-request";

export const getBibliotecasQuery = gql`
  query Assets {
    bibliotecas {
      title
      link
      id
    }
  }
`;

export const getPostbySlug = (slug) => gql`
query Assets {
  post(where: {slug: "${slug}"}) {
    content {
      html
    }
    coverImage {
      url
    }
    title
  }
}
`;

export const getPostsQuery = gql`
  query Assets {
    posts {
      createdAt
      excerpt
      id
      title
      slug
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;

export const getHomePosts = gql`
  query Assets {
    posts(first: 3) {
      createdAt
      excerpt
      id
      title
      slug
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;
