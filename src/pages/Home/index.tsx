import { Container } from "react-bootstrap";
import Menu from "../../components/Menu";
import { instance } from "../../server/instance";
import { useQuery } from "@tanstack/react-query";
import Products from "../../components/Products";

const GETProductsHome = async () => {
  const response = await instance.get("/products?offset=10&limit=10");
  return response.data;
};

const Home = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ProductsHome"],
    queryFn: GETProductsHome,
  });
  console.log(data);

  return (
    <>
      <Menu />
      <Container>
        <h1 className="py-5">Mais Vendidos</h1>

        <section>
          <div className="row">
            {data?.map((products: ProductProps) => (
              <div className="col-md-3">
                <Products data={products} key={products.id} />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
