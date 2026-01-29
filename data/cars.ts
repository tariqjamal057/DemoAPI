export const carFilters = {
  filters: [
    {
      key: "deals",
      label: "Deals",
      type: "checkbox",
      options: [
        { label: "Great Deal", value: "great_deal" },
        { label: "Good Deal", value: "good_deal" },
        { label: "Fair Deal", value: "fair_deal" },
      ],
    },
    {
      key: "price_payment",
      label: "Price & Payment",
      type: "range",
      options: {
        price: {
          min: 50000,
          max: 5000000,
          step: 50000,
        },
        monthly_payment: {
          min: 3000,
          max: 100000,
          step: 1000,
        },
      },
    },
    {
      key: "make_model",
      label: "Make & Model",
      type: "checkbox",
      options: [
        { label: "Swift", value: "swift" },
        { label: "Baleno", value: "baleno" },
        { label: "Brezza", value: "brezza" },
        { label: "i10", value: "i10" },
        { label: "i20", value: "i20" },
        { label: "Creta", value: "creta" },
        { label: "Ertiga", value: "ertiga" },
        { label: "Verna", value: "verna" },
        { label: "Nexon", value: "nexon" },
        { label: "Harrier", value: "harrier" },
        { label: "Safari", value: "safari" },
        { label: "Tiago", value: "tiago" },
      ],
    },
    {
      key: "body_type",
      label: "Body Type",
      type: "checkbox",
      options: [
        { label: "Hatchback", value: "hatchback" },
        { label: "Sedan", value: "sedan" },
        { label: "SUV", value: "suv" },
        { label: "MUV", value: "muv" },
        { label: "Coupe", value: "coupe" },
      ],
    },
    {
      key: "year",
      label: "Year",
      type: "range",
      options: {
        min: 2005,
        max: 2025,
      },
    },
    {
      key: "mileage",
      label: "Mileage (km)",
      type: "range",
      options: {
        min: 0,
        max: 200000,
        step: 5000,
      },
    },
    {
      key: "fuel_type",
      label: "Fuel Type",
      type: "checkbox",
      options: [
        { label: "Petrol", value: "petrol" },
        { label: "Diesel", value: "diesel" },
        { label: "CNG", value: "cng" },
        { label: "Electric", value: "electric" },
        { label: "Hybrid", value: "hybrid" },
      ],
    },
    {
      key: "features",
      label: "Features",
      type: "checkbox",
      options: [
        { label: "Sunroof", value: "sunroof" },
        { label: "Touchscreen", value: "touchscreen" },
        { label: "Reverse Camera", value: "reverse_camera" },
        { label: "Cruise Control", value: "cruise_control" },
        { label: "ABS", value: "abs" },
      ],
    },
    {
      key: "exterior_colour",
      label: "Exterior Colour",
      type: "checkbox",
      options: [
        { label: "White", value: "white" },
        { label: "Black", value: "black" },
        { label: "Silver", value: "silver" },
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
      ],
    },
    {
      key: "seats",
      label: "Seats",
      type: "radio",
      options: [
        { label: "4 Seater", value: 4 },
        { label: "5 Seater", value: 5 },
        { label: "6 Seater", value: 6 },
        { label: "7 Seater", value: 7 },
      ],
    },
    {
      key: "drivetrain",
      label: "Drivetrain",
      type: "checkbox",
      options: [
        { label: "FWD", value: "fwd" },
        { label: "RWD", value: "rwd" },
        { label: "AWD", value: "awd" },
      ],
    },
    {
      key: "transmission",
      label: "Transmissions",
      type: "checkbox",
      options: [
        { label: "Manual", value: "manual" },
        { label: "Automatic", value: "automatic" },
        { label: "AMT", value: "amt" },
        { label: "CVT", value: "cvt" },
      ],
    },
    {
      key: "cylinders",
      label: "Cylinders",
      type: "checkbox",
      options: [
        { label: "3 Cylinder", value: 3 },
        { label: "4 Cylinder", value: 4 },
        { label: "6 Cylinder", value: 6 },
        { label: "8 Cylinder", value: 8 },
      ],
    },
  ],
};

export const carsList = [
  {
    "id": 1,
    "brand": "Toyota",
    "model": "RAV4",
    "variant": "XLE AWD",
    "year": 2023,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 34900,
    "kilometersDriven": 18000,
    "owners": 1,
    "color": "White",
    "location": "Toronto, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 2,
    "brand": "Honda",
    "model": "CR-V",
    "variant": "EX-L AWD",
    "year": 2022,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 33200,
    "kilometersDriven": 24000,
    "owners": 1,
    "color": "Black",
    "location": "Mississauga, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 3,
    "brand": "Tesla",
    "model": "Model Y",
    "variant": "Long Range AWD",
    "year": 2023,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "Electric SUV",
    "priceCAD": 58900,
    "kilometersDriven": 12000,
    "owners": 1,
    "color": "Grey",
    "location": "Vancouver, BC",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 4,
    "brand": "Ford",
    "model": "F-150",
    "variant": "XLT 4x4",
    "year": 2022,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "4WD",
    "bodyType": "Pickup Truck",
    "priceCAD": 46800,
    "kilometersDriven": 31000,
    "owners": 1,
    "color": "Blue",
    "location": "Calgary, AB",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 5,
    "brand": "BMW",
    "model": "X3",
    "variant": "xDrive30i",
    "year": 2021,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "Luxury SUV",
    "priceCAD": 41900,
    "kilometersDriven": 42000,
    "owners": 1,
    "color": "Black",
    "location": "Richmond Hill, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 6,
    "brand": "Audi",
    "model": "Q5",
    "variant": "Progressiv quattro",
    "year": 2022,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "Luxury SUV",
    "priceCAD": 45200,
    "kilometersDriven": 28000,
    "owners": 1,
    "color": "White",
    "location": "Markham, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 7,
    "brand": "Hyundai",
    "model": "Tucson",
    "variant": "Preferred AWD",
    "year": 2023,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 32500,
    "kilometersDriven": 14000,
    "owners": 1,
    "color": "Silver",
    "location": "Brampton, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 8,
    "brand": "Mazda",
    "model": "CX-5",
    "variant": "GT AWD",
    "year": 2021,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 28900,
    "kilometersDriven": 36000,
    "owners": 1,
    "color": "Red",
    "location": "Surrey, BC",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 9,
    "brand": "Subaru",
    "model": "Outback",
    "variant": "Touring AWD",
    "year": 2022,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "driveType": "AWD",
    "bodyType": "Wagon",
    "priceCAD": 33900,
    "kilometersDriven": 26000,
    "owners": 1,
    "color": "Green",
    "location": "Ottawa, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 10,
    "brand": "Mercedes-Benz",
    "model": "GLC 300",
    "variant": "4MATIC",
    "year": 2021,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "Luxury SUV",
    "priceCAD": 44500,
    "kilometersDriven": 39000,
    "owners": 1,
    "color": "Black",
    "location": "North York, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },

  {
    "id": 11,
    "brand": "Toyota",
    "model": "Camry",
    "variant": "SE Hybrid",
    "year": 2022,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "driveType": "FWD",
    "bodyType": "Sedan",
    "priceCAD": 31800,
    "kilometersDriven": 23000,
    "owners": 1,
    "color": "Silver",
    "location": "Hamilton, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 12,
    "brand": "Honda",
    "model": "Civic",
    "variant": "Touring",
    "year": 2023,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "FWD",
    "bodyType": "Sedan",
    "priceCAD": 27900,
    "kilometersDriven": 9000,
    "owners": 1,
    "color": "Blue",
    "location": "Scarborough, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 13,
    "brand": "Chevrolet",
    "model": "Equinox",
    "variant": "LT AWD",
    "year": 2021,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 25900,
    "kilometersDriven": 41000,
    "owners": 1,
    "color": "White",
    "location": "Edmonton, AB",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 14,
    "brand": "Volkswagen",
    "model": "Tiguan",
    "variant": "Comfortline AWD",
    "year": 2022,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 33500,
    "kilometersDriven": 22000,
    "owners": 1,
    "color": "Grey",
    "location": "Kitchener, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 15,
    "brand": "Tesla",
    "model": "Model 3",
    "variant": "Standard Range Plus",
    "year": 2022,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "driveType": "RWD",
    "bodyType": "Electric Sedan",
    "priceCAD": 46900,
    "kilometersDriven": 19000,
    "owners": 1,
    "color": "White",
    "location": "Burnaby, BC",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 16,
    "brand": "Kia",
    "model": "Sportage",
    "variant": "EX AWD",
    "year": 2023,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 33800,
    "kilometersDriven": 11000,
    "owners": 1,
    "color": "Black",
    "location": "Vaughan, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 17,
    "brand": "Nissan",
    "model": "Rogue",
    "variant": "SV AWD",
    "year": 2022,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 30900,
    "kilometersDriven": 27000,
    "owners": 1,
    "color": "Grey",
    "location": "London, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 18,
    "brand": "Jeep",
    "model": "Grand Cherokee",
    "variant": "Limited 4x4",
    "year": 2021,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "4WD",
    "bodyType": "SUV",
    "priceCAD": 42500,
    "kilometersDriven": 46000,
    "owners": 1,
    "color": "Black",
    "location": "Winnipeg, MB",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 19,
    "brand": "Volvo",
    "model": "XC60",
    "variant": "Momentum AWD",
    "year": 2022,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "Luxury SUV",
    "priceCAD": 48900,
    "kilometersDriven": 21000,
    "owners": 1,
    "color": "Silver",
    "location": "Montreal, QC",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  },
  {
    "id": 20,
    "brand": "GMC",
    "model": "Terrain",
    "variant": "SLT AWD",
    "year": 2021,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "driveType": "AWD",
    "bodyType": "SUV",
    "priceCAD": 29800,
    "kilometersDriven": 38000,
    "owners": 1,
    "color": "White",
    "location": "Burlington, ON",
    "status": "Available",
    "images": {
      "cover": "/icons/landingpage/car.png",
      "gallery": ["", "", "", ""]
    }
  }
]

