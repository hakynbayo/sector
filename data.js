// data/options.js


  function initializeSubOptions() {
    const options = new Map();
  
    options.set("Manufacturing", ["Construction materials", "Electronics and Optics", "Food and Beverage"]);
    options.set("Food and Beverage", ["Bakery & confectionery products", "Beverages", "Fish & fish products", "Meat & meat products", "Milk & dairy products", "Other", "Sweets & snack food"]);
    options.set("Furniture", ["Bathroom/sauna", "Bedroom", "Children room", "Kitchen", "Living room", "Office", "Other (Furniture)", "Outdoor", "Project furniture"]);
    options.set("Machinery", ["Machinery components", "Machinery equipment/tools", "Manufacture of machinery", "Maritime", "Metal structures", "Other", "Repair and maintenance service"]);
    options.set("Maritime", ["Aluminium and steel workboats", "Boat/Yacht building", "Ship repair and conversion"]);
    options.set("Metalworking", ["Construction of metal structures", "Houses and buildings", "Metal products", "Metal works"]);
    options.set("Metal works", ["CNC-machining", "Forgings, Fasteners", "Gas, Plasma, Laser cutting", "MIG, TIG, Aluminum welding"]);
    options.set("Plastic and Rubber", ["Packaging", "Plastic goods", "Plastic processing technology", "Plastic Profile"]);
    options.set("Plastic processing technology", ["Blowing", "Moulding", "Plastics welding and processing"]);
    options.set("Printing", ["Advertising", "Book/Periodicals printing", "Labelling and packaging printing"]);
    options.set("Textile and Clothing", ["Clothing", "Textile"]);
    options.set("Wood", ["Other (Wood)", "Wooden building materials", "Wooden houses"]);
    options.set("Other", ["Creative industries", "Energy technology", "Environment"]);
    options.set("Service", ["Business services", "Engineering", "Information Technology and Telecommunications", "Tourism", "Translation services", "Transport and Logistics"]);
    options.set("Information Technology and Telecommunications", ["Data processing, Web portals, E-marketing", "Programming, Consultancy", "Software, Hardware", "Telecommunications"]);
    options.set("Transportation and Logistics", ["Air", "Road", "Water"]);
  
    return options;
  }
  
  module.exports = options;
  