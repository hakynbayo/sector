// data/options.js
const options = [
    "Construction materials",
    "Electronics and Optics",
    "Food and Beverage",
    // ... (Add other options as needed)
  ];

  function initializeSubOptions() {
    const subOptions = new Map();
  
    subOptions.set("Manufacturing", ["Construction materials", "Electronics and Optics", "Food and Beverage"]);
    subOptions.set("Food and Beverage", ["Bakery & confectionery products", "Beverages", "Fish & fish products", "Meat & meat products", "Milk & dairy products", "Other", "Sweets & snack food"]);
    subOptions.set("Furniture", ["Bathroom/sauna", "Bedroom", "Children room", "Kitchen", "Living room", "Office", "Other (Furniture)", "Outdoor", "Project furniture"]);
    subOptions.set("Machinery", ["Machinery components", "Machinery equipment/tools", "Manufacture of machinery", "Maritime", "Metal structures", "Other", "Repair and maintenance service"]);
    subOptions.set("Maritime", ["Aluminium and steel workboats", "Boat/Yacht building", "Ship repair and conversion"]);
    subOptions.set("Metalworking", ["Construction of metal structures", "Houses and buildings", "Metal products", "Metal works"]);
    subOptions.set("Metal works", ["CNC-machining", "Forgings, Fasteners", "Gas, Plasma, Laser cutting", "MIG, TIG, Aluminum welding"]);
    subOptions.set("Plastic and Rubber", ["Packaging", "Plastic goods", "Plastic processing technology", "Plastic Profile"]);
    subOptions.set("Plastic processing technology", ["Blowing", "Moulding", "Plastics welding and processing"]);
    subOptions.set("Printing", ["Advertising", "Book/Periodicals printing", "Labelling and packaging printing"]);
    subOptions.set("Textile and Clothing", ["Clothing", "Textile"]);
    subOptions.set("Wood", ["Other (Wood)", "Wooden building materials", "Wooden houses"]);
    subOptions.set("Other", ["Creative industries", "Energy technology", "Environment"]);
    subOptions.set("Service", ["Business services", "Engineering", "Information Technology and Telecommunications", "Tourism", "Translation services", "Transport and Logistics"]);
    subOptions.set("Information Technology and Telecommunications", ["Data processing, Web portals, E-marketing", "Programming, Consultancy", "Software, Hardware", "Telecommunications"]);
    subOptions.set("Transportation and Logistics", ["Air", "Road", "Water"]);
  
    return subOptions;
  }
  
  module.exports = options;
  