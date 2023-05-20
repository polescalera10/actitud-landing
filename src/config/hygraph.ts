import { GraphQLClient } from "graphql-request";

const hygraphUrl: string = process.env.HYGRAPH_URL || "";

export const graphConnect = new GraphQLClient(hygraphUrl);
