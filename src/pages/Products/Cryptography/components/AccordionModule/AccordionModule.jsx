const AccordionModule = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="module">
      <h3 
        className={`module_title ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </h3>
      
      {isOpen && (
        <div className="module_content">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionModule;