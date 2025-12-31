import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Regular Maintenance',
      description: 'Oil changes & tune-ups to keep your vehicle running smoothly',
      icon: '🔧'
    },
    {
      title: 'Brake & Suspension',
      description: 'Complete brake and suspension service for safety and comfort',
      icon: '🛞'
    },
    {
      title: 'Exhaust & Gaskets',
      description: 'Expert exhaust system and gasket repairs',
      icon: '💨'
    },
    {
      title: 'Diagnostics & Inspections',
      description: 'Comprehensive diagnostics for leaks, electrical issues, and more',
      icon: '🔍'
    },
    {
      title: 'Engine/Transmission Swaps',
      description: 'Professional engine and transmission replacement services',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Services Offered</h2>
        <p className="section-subtitle">
          I have access to a vast network of parts and discounted pricing, 
          these benefits are passed to my clients.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

