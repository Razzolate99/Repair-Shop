import './Brands.css';

const Brands = () => {
  const brands = [
    'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet',
    'Chrysler', 'Dodge', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti',
    'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda',
    'Mercedes-Benz', 'MINI', 'Mitsubishi', 'Nissan', 'Porsche', 'RAM',
    'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'
  ];

  return (
    <section id="brands" className="brands">
      <div className="brands-container">
        <h2 className="section-title">All Makes and Models</h2>
        <p className="section-subtitle">
          We service all major car brands with expert knowledge and quality parts
        </p>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

