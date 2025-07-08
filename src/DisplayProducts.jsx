import { useGetProductsQuery } from './graphql/generated.ts';

export function DisplayProducts() {
  const { loading, error, data } = useGetProductsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.site.products.edges.map(({ node }) => (
    <div key={node.name}>
      <h3>{node.name}</h3>
    </div>
  ));
}