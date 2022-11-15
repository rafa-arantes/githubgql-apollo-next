import { FieldMergeFunction, TypePolicy } from "@apollo/client";

export const Issue: TypePolicy = {
  fields: {
    comments: {
      merge(existing, incoming): FieldMergeFunction {
        const nodes = existing ? existing.nodes : [];
        return { ...incoming, nodes: [...nodes, ...incoming?.nodes] };
      },
      read(existing) {
        return existing;
      },
    },
  },
};

export const Query: TypePolicy = {
  fields: {
    search: {
      merge(existing, incoming): FieldMergeFunction {
        const edges = existing ? existing.edges : [];
        return { ...incoming, edges: [...edges, ...incoming?.edges] };
      },
      read(existing) {
        return existing;
      },
    },
  },
};
