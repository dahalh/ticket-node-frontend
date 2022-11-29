import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Computer Repairs</span>
        </h1>
      </header>
      <main className="public__main">
        {/* <p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p> */}
        <address className="public__addr">
          Computer Repair Shop
          <br />
          123 Main Street
          <br />
          Sydney, 2000, NSW
          <br />
          <a href="tel:+15555555555">(04) 123-456-789</a>
        </address>
        <br />
        <p>Owner: John Doe</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
