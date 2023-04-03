import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,) { }
  id: any;
  products = [
    {
      id: "carrybags",
      name: "CARRY BAGS",
      nameDescription: "COMPOSTABLE CARRY BAGS",
      images: [
        "../../../assets/images/blog/big-images/c1.jpeg",
        "../../../assets/images/blog/big-images/c2.jpeg",
        "../../../assets/images/blog/big-images/c3.jpeg",
        "../../../assets/images/blog/big-images/c4.jpeg",
      ],
      details: [
        {
          key: "SEAL",
          value: "U-Cut/ W-Cut"
        },
        {
          key: "COLOR",
          value: "Requirement Basis"
        },
        {
          key: "CAPACITY",
          value: "As per size"
        },
        {
          key: "SIZE",
          value: '8" to 40" '
        },
        {
          key: "THICKNESS",
          value: "Starts at 14 microns"
        },
        {
          key: "PRINTING",
          value: "Customizable"
        },
        {
          key: "PATTERN",
          value: "Customizable"
        },
        {
          key: "MATERIAL",
          value: "Corn Starch, PLA, PBAT"
        }
      ],
      about: {
        info: "Eco-branch carry bags , tshirt bags are high quality compostable and biodegradable bags. Eco branch is leading manufacturer and exporter of compostable carry bags in India . At Ecobranch we manufacture our brand with 100% compostable raw material. Our compostable carry bags are a budget and eco-friendly alternative to conventional polythene carry bags for industrial and domestic use.",
        packaging: "Cartoon box packaging is available but can be customised as per the requirement",
        delivery: "25-30 days after the order is confirmed"
      },
      description: {
        info: "Our carry bags are aviable in 100% customizable basis - size, colour, print & thickness.",
        points: {
          description: "Being 100% customizable our carry bags can be used in various industries like :",
          options: [
            "Retail",
            "HORECA",
            "Healthcare",
            "Institutional Cafeterias",
            "Municipal Corporation",
            "Residential and Office Spaces",
            "Event Management"
          ]
        }
      },
      facts: [
        "Adherence to regional law and compliance certifications",
        "High strength rendering them leakproof",
        "Tear resistance and protection against leakage",
        "High penetration barrier against bacteria, viruses, spores, and mould Odour prevention",
        "Suitable for safe waste disposal",
        "Anti-static property",
        "Product inputs free of GMO material"
      ]
    },
    {
      id: "garbagebags",
      name: "GARBAGE BAGS",
      nameDescription: "COMPOSTABLE GARBAGE BAGS",
      images: [
        "../../../assets/images/blog/big-images/gb.jpeg",
        "../../../assets/images/blog/big-images/g1.jpeg",
        "../../../assets/images/blog/big-images/g2.jpeg",
        "../../../assets/images/blog/big-images/g4.jpeg",
      ],
      details: [
        {
          key: "SEAL",
          value: "Star Seal/Flat Seal"
        },
        {
          key: "COLOR",
          value: "Requirement Basis"
        },
        {
          key: "CAPACITY",
          value: "Requirement Basis"
        },
        {
          key: "SIZE",
          value: "Starts at 7 inches"
        },
        {
          key: "THICKNESS",
          value: "Starts at 17 microns"
        },
        {
          key: "PRINTING",
          value: "Customizable"
        },
        {
          key: "PATTERN",
          value: "Customizable"
        },
        {
          key: "MATERIAL",
          value: "Corn Starch, PLA, PBAT"
        }
      ],
      about: {
        info: "The Ecobranch is leading exporter, maufacturer, supplier, producer, trader, distributor of compostable garbage bags from india.We provide best quality products all over the world. Eco-branch’s compostable garbage bags, trash bags are made for all household and industrial purposes with compostable material which degrade is 12-18 months in compostable conditions. They are suitable for used across household as well as other industries.",
        packaging: "Cartoon box packaging is available but can be customised as per the requirement",
        delivery: "25-30 days after the order is confirmed"
      },
      description: {
        info: "Our garbage bags are aviable in 100% customizable basis - size, colour, print & thickness.",
        points: {
          description: "Being 100% customizable our carry bags can be used in various industries like :",
          options: [
            "Retail",
            "HORECA",
            "Healthcare",
            "Institutional Cafeterias",
            "Municipal Corporation",
            "Residential and Office Spaces",
            "Event Management"
          ]
        }
      },
      facts: [
        "Adherence to regional law and compliance certifications",
        "High strength rendering them leakproof",
        "Tear resistance and protection against leakage",
        "High penetration barrier against bacteria, viruses, spores, and mould Odour prevention",
        "Suitable for safe waste disposal",
        "Anti-static property",
        "Product inputs free of GMO material"
      ]
    },
    {
      id: "poopbags",
      name: "POOP BAGS",
      nameDescription: "COMPOSTABLE POOP BAGS",
      images: [
        "../../../assets/images/blog/big-images/poop.jpeg",
        "../../../assets/images/blog/big-images/poop1.jpeg",
        "../../../assets/images/blog/big-images/poop2.jpeg",
        "../../../assets/images/blog/big-images/poop3.jpeg",
      ],
      details: [
        {
          key: "SEAL",
          value: "Star Seal/Flat Seal"
        },
        {
          key: "COLOR",
          value: "Requirement Basis"
        },
        {
          key: "CAPACITY",
          value: "Requirement Basis"
        },
        {
          key: "SIZE",
          value: "Starts at 7 inches"
        },
        {
          key: "THICKNESS",
          value: "Starts at 15 microns"
        },
        {
          key: "PRINTING",
          value: "Customizable"
        },
        {
          key: "PATTERN",
          value: "Roll Form"
        },
        {
          key: "MATERIAL",
          value: "Corn Starch, PLA, PBAT"
        }
      ],
      about: {
        info: "The Ecobranch is leading exporter, maufacturer, supplier, producer, trader, distributor of compostable garbage bags from india.We provide best quality products all over the world. Eco-branch’s compostable garbage bags, trash bags are made for all household and industrial purposes with compostable material which degrade is 12-18 months in compostable conditions. They are suitable for used across household as well as other industries.",
        packaging: "Cartoon box packaging is available but can be customised as per the requirement",
        delivery: "25-30 days after the order is confirmed"
      },
      description: {
        info: "Our poop bags are aviable in 100% customizable basis - size, colour, print & thickness.",
        points: {
          description: "Being 100% customizable our carry bags can be used in various industries like :",
          options: [
            "Retail",
            "Residents",
            "Office Spaces",
            "Institutional Cafeterias",
            "Municipal Corporation",
          ]
        }
      },
      facts: [
        "Adherence to regional law and compliance certifications",
        "Puncture resistant",
        "Available in roll form",
        "Leakage proof",
        "Airtight containment",
        "Available in a wide selection of designs",
        "Easy tear-off design"
      ]
    }
  ]
  product: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      console.log(routeParams['id']);
      this.product = this.products.find(x => x.id === routeParams['id']);
      console.log(this.product);
    })

  }

}
