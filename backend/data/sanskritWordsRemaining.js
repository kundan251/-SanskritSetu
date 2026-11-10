const sanskritWordsRemaining = [
  {
    sanskritWord: "आकाश",
    transliteration: "Akasha",
    englishMeaning: "Space or Sky",
    hindiMeaning: "आसमान या अंतरिक्ष",
    category: "Nature",
    description: "आकाश पंचमहाभूतों में एक तत्व है।"
  },
  {
    sanskritWord: "वायु",
    transliteration: "Vayu",
    englishMeaning: "Air or Wind",
    hindiMeaning: "हवा",
    category: "Nature",
    description: "वायु प्रकृति का एक महत्वपूर्ण तत्व है।"
  },
  {
    sanskritWord: "अग्नि",
    transliteration: "Agni",
    englishMeaning: "Fire",
    hindiMeaning: "आग",
    category: "Nature",
    description: "अग्नि पंचमहाभूतों में एक तत्व है।"
  },

  {
    sanskritWord: "पृथ्वी",
    transliteration: "Prithvi",
    englishMeaning: "Earth",
    hindiMeaning: "धरती",
    category: "Nature",
    description: "पृथ्वी पंचमहाभूतों में एक महत्वपूर्ण तत्व है।"
  },
  {
    sanskritWord: "जल",
    transliteration: "Jala",
    englishMeaning: "Water",
    hindiMeaning: "पानी",
    category: "Nature",
    description: "जल जीवन के लिए आवश्यक प्राकृतिक तत्व है।"
  },
  {
    sanskritWord: "तेजस्",
    transliteration: "Tejas",
    englishMeaning: "Radiance or Energy",
    hindiMeaning: "तेज या ऊर्जा",
    category: "Nature",
    description: "तेजस् प्रकाश और ऊर्जा से संबंधित संस्कृत शब्द है।"
  },
  {
    sanskritWord: "वन",
    transliteration: "Vana",
    englishMeaning: "Forest",
    hindiMeaning: "जंगल",
    category: "Nature",
    description: "वन पेड़-पौधों और जीवों का प्राकृतिक आवास है।"
  },
  {
    sanskritWord: "पर्वत",
    transliteration: "Parvata",
    englishMeaning: "Mountain",
    hindiMeaning: "पहाड़",
    category: "Nature",
    description: "पर्वत पृथ्वी की ऊँची प्राकृतिक भू-आकृति है।"
  },
  {
    sanskritWord: "नदी",
    transliteration: "Nadi",
    englishMeaning: "River",
    hindiMeaning: "दरिया",
    category: "Nature",
    description: "नदी प्राकृतिक रूप से बहने वाला जलस्रोत है।"
  },
  {
    sanskritWord: "समुद्र",
    transliteration: "Samudra",
    englishMeaning: "Ocean",
    hindiMeaning: "महासागर",
    category: "Nature",
    description: "समुद्र खारे जल का विशाल विस्तार है।"
  },
  {
    sanskritWord: "सूर्य",
    transliteration: "Surya",
    englishMeaning: "Sun",
    hindiMeaning: "सूरज",
    category: "Astronomy",
    description: "सूर्य सौरमंडल का केंद्रीय तारा है।"
  },
  {
    sanskritWord: "चन्द्र",
    transliteration: "Chandra",
    englishMeaning: "Moon",
    hindiMeaning: "चाँद",
    category: "Astronomy",
    description: "चन्द्र पृथ्वी का प्राकृतिक उपग्रह है।"
  },
  {
    sanskritWord: "नक्षत्र",
    transliteration: "Nakshatra",
    englishMeaning: "Lunar Mansion",
    hindiMeaning: "नक्षत्र",
    category: "Astronomy",
    description: "नक्षत्र भारतीय ज्योतिष और खगोल परंपरा में प्रयुक्त शब्द है।"
  },

  {
    sanskritWord: "पृथ्वी",
    transliteration: "Prithvi",
    englishMeaning: "Earth",
    hindiMeaning: "धरती",
    category: "Nature",
    description: "पृथ्वी जीवन का आधार है।"
  },
  {
    sanskritWord: "जल",
    transliteration: "Jala",
    englishMeaning: "Water",
    hindiMeaning: "पानी",
    category: "Nature",
    description: "जल जीवन के लिए आवश्यक प्राकृतिक तत्व है।"
  },
  {
    sanskritWord: "वन",
    transliteration: "Vana",
    englishMeaning: "Forest",
    hindiMeaning: "जंगल",
    category: "Nature",
    description: "वन अनेक जीवों और वनस्पतियों का प्राकृतिक आवास है।"
  },
  {
    sanskritWord: "पर्वत",
    transliteration: "Parvata",
    englishMeaning: "Mountain",
    hindiMeaning: "पहाड़",
    category: "Nature",
    description: "पर्वत पृथ्वी की ऊँची प्राकृतिक भू-आकृति है।"
  },
  {
    sanskritWord: "नदी",
    transliteration: "Nadi",
    englishMeaning: "River",
    hindiMeaning: "नदी",
    category: "Nature",
    description: "नदी प्राकृतिक रूप से बहने वाला जलस्रोत है।"
  },
  {
    sanskritWord: "समुद्र",
    transliteration: "Samudra",
    englishMeaning: "Ocean",
    hindiMeaning: "सागर",
    category: "Nature",
    description: "समुद्र खारे जल का विशाल विस्तार है।"
  },
  {
    sanskritWord: "मेघ",
    transliteration: "Megha",
    englishMeaning: "Cloud",
    hindiMeaning: "बादल",
    category: "Nature",
    description: "मेघ आकाश में जलवाष्प के संघनन से बनते हैं।"
  },
  {
    sanskritWord: "वर्षा",
    transliteration: "Varsha",
    englishMeaning: "Rain",
    hindiMeaning: "बारिश",
    category: "Nature",
    description: "वर्षा जलचक्र की एक महत्वपूर्ण प्रक्रिया है।"
  },
  {
    sanskritWord: "पवन",
    transliteration: "Pavana",
    englishMeaning: "Wind",
    hindiMeaning: "हवा",
    category: "Nature",
    description: "पवन वायु का गतिशील रूप है।"
  },
  {
    sanskritWord: "आकाश",
    transliteration: "Akasha",
    englishMeaning: "Sky",
    hindiMeaning: "आसमान",
    category: "Nature",
    description: "आकाश पृथ्वी के ऊपर दिखाई देने वाला विस्तृत क्षेत्र है।"
  },

  // Plants
  {
    sanskritWord: "वृक्ष",
    transliteration: "Vriksha",
    englishMeaning: "Tree",
    hindiMeaning: "पेड़",
    category: "Plants",
    description: "वृक्ष एक बहुवर्षीय काष्ठीय पौधा है।"
  },
  {
    sanskritWord: "पुष्प",
    transliteration: "Pushpa",
    englishMeaning: "Flower",
    hindiMeaning: "फूल",
    category: "Plants",
    description: "पुष्प पौधे का प्रजनन अंग है।"
  },
  {
    sanskritWord: "फल",
    transliteration: "Phala",
    englishMeaning: "Fruit",
    hindiMeaning: "फल",
    category: "Plants",
    description: "फल सामान्यतः पौधे के पुष्प से विकसित होता है।"
  },
  {
    sanskritWord: "पत्र",
    transliteration: "Patra",
    englishMeaning: "Leaf",
    hindiMeaning: "पत्ता",
    category: "Plants",
    description: "पत्र पौधे में प्रकाश संश्लेषण का प्रमुख अंग है।"
  },
  {
    sanskritWord: "मूल",
    transliteration: "Mula",
    englishMeaning: "Root",
    hindiMeaning: "जड़",
    category: "Plants",
    description: "मूल पौधे को मिट्टी में स्थिर रखता है।"
  },
  {
    sanskritWord: "बीज",
    transliteration: "Bija",
    englishMeaning: "Seed",
    hindiMeaning: "बीज",
    category: "Plants",
    description: "बीज से नया पौधा विकसित हो सकता है।"
  },
  {
    sanskritWord: "लता",
    transliteration: "Lata",
    englishMeaning: "Creeper",
    hindiMeaning: "बेल",
    category: "Plants",
    description: "लता एक ऐसा पौधा है जो सहारे से बढ़ सकता है।"
  },
  {
    sanskritWord: "तृण",
    transliteration: "Trina",
    englishMeaning: "Grass",
    hindiMeaning: "घास",
    category: "Plants",
    description: "तृण छोटे घास जैसे पौधों के लिए प्रयुक्त शब्द है।"
  },
  {
    sanskritWord: "औषधि",
    transliteration: "Aushadhi",
    englishMeaning: "Medicinal Plant",
    hindiMeaning: "औषधीय पौधा",
    category: "Plants",
    description: "औषधि का उपयोग उपचार में किया जाता है।"
  },
  {
    sanskritWord: "कन्द",
    transliteration: "Kanda",
    englishMeaning: "Tuber",
    hindiMeaning: "कंद",
    category: "Plants",
    description: "कन्द पौधे का भूमिगत भोजन-संग्रह करने वाला भाग है।"
  },

  // Animals
  {
    sanskritWord: "गज",
    transliteration: "Gaja",
    englishMeaning: "Elephant",
    hindiMeaning: "हाथी",
    category: "Animals",
    description: "गज एक विशाल स्थलीय स्तनधारी जीव है।"
  },
  {
    sanskritWord: "अश्व",
    transliteration: "Ashva",
    englishMeaning: "Horse",
    hindiMeaning: "घोड़ा",
    category: "Animals",
    description: "अश्व एक पालतू चौपाया पशु है।"
  },
  {
    sanskritWord: "सिंह",
    transliteration: "Simha",
    englishMeaning: "Lion",
    hindiMeaning: "शेर",
    category: "Animals",
    description: "सिंह एक मांसाहारी वन्य पशु है।"
  },
  {
    sanskritWord: "व्याघ्र",
    transliteration: "Vyaghra",
    englishMeaning: "Tiger",
    hindiMeaning: "बाघ",
    category: "Animals",
    description: "व्याघ्र एक शक्तिशाली मांसाहारी वन्य जीव है।"
  },
  {
    sanskritWord: "मृग",
    transliteration: "Mriga",
    englishMeaning: "Deer",
    hindiMeaning: "हिरण",
    category: "Animals",
    description: "मृग एक शाकाहारी वन्य पशु है।"
  },
  {
    sanskritWord: "वानर",
    transliteration: "Vanara",
    englishMeaning: "Monkey",
    hindiMeaning: "बंदर",
    category: "Animals",
    description: "वानर एक वृक्षों पर रहने वाला प्राइमेट जीव है।"
  },
  {
    sanskritWord: "गो",
    transliteration: "Go",
    englishMeaning: "Cow",
    hindiMeaning: "गाय",
    category: "Animals",
    description: "गो भारतीय परंपरा में महत्वपूर्ण पालतू पशु है।"
  },
  {
    sanskritWord: "श्वान",
    transliteration: "Shvana",
    englishMeaning: "Dog",
    hindiMeaning: "कुत्ता",
    category: "Animals",
    description: "श्वान एक पालतू स्तनधारी पशु है।"
  },
  {
    sanskritWord: "मार्जार",
    transliteration: "Marjara",
    englishMeaning: "Cat",
    hindiMeaning: "बिल्ली",
    category: "Animals",
    description: "मार्जार एक छोटा पालतू मांसाहारी स्तनधारी है।"
  },
  {
    sanskritWord: "मयूर",
    transliteration: "Mayura",
    englishMeaning: "Peacock",
    hindiMeaning: "मोर",
    category: "Animals",
    description: "मयूर अपने रंगीन पंखों के लिए प्रसिद्ध पक्षी है।"
  },

  // Human Body
  {
    sanskritWord: "शिरस्",
    transliteration: "Shiras",
    englishMeaning: "Head",
    hindiMeaning: "सिर",
    category: "Human Body",
    description: "शिरस् मानव शरीर का ऊपरी भाग है।"
  },
  {
    sanskritWord: "नेत्र",
    transliteration: "Netra",
    englishMeaning: "Eye",
    hindiMeaning: "आँख",
    category: "Human Body",
    description: "नेत्र देखने का प्रमुख ज्ञानेन्द्रिय अंग है।"
  },
  {
    sanskritWord: "कर्ण",
    transliteration: "Karna",
    englishMeaning: "Ear",
    hindiMeaning: "कान",
    category: "Human Body",
    description: "कर्ण सुनने में सहायता करता है।"
  },
  {
    sanskritWord: "नासिका",
    transliteration: "Nasika",
    englishMeaning: "Nose",
    hindiMeaning: "नाक",
    category: "Human Body",
    description: "नासिका श्वसन और गंध पहचानने में सहायक है।"
  },
  {
    sanskritWord: "मुख",
    transliteration: "Mukha",
    englishMeaning: "Mouth",
    hindiMeaning: "मुँह",
    category: "Human Body",
    description: "मुख भोजन ग्रहण करने और बोलने में सहायक है।"
  },
  {
    sanskritWord: "दन्त",
    transliteration: "Danta",
    englishMeaning: "Tooth",
    hindiMeaning: "दाँत",
    category: "Human Body",
    description: "दन्त भोजन चबाने में सहायता करते हैं।"
  },
  {
    sanskritWord: "जिह्वा",
    transliteration: "Jihva",
    englishMeaning: "Tongue",
    hindiMeaning: "जीभ",
    category: "Human Body",
    description: "जिह्वा स्वाद पहचानने और बोलने में सहायता करती है।"
  },
  {
    sanskritWord: "हस्त",
    transliteration: "Hasta",
    englishMeaning: "Hand",
    hindiMeaning: "हाथ",
    category: "Human Body",
    description: "हस्त वस्तुओं को पकड़ने और कार्य करने में सहायक है।"
  },
  {
    sanskritWord: "पाद",
    transliteration: "Pada",
    englishMeaning: "Foot",
    hindiMeaning: "पैर",
    category: "Human Body",
    description: "पाद चलने और शरीर का भार सँभालने में सहायक है।"
  },
  {
    sanskritWord: "हृदय",
    transliteration: "Hridaya",
    englishMeaning: "Heart",
    hindiMeaning: "दिल",
    category: "Human Body",
    description: "हृदय रक्त का संचार करने वाला प्रमुख अंग है।"
  },

  // Knowledge and Education
  {
    sanskritWord: "विद्या",
    transliteration: "Vidya",
    englishMeaning: "Knowledge",
    hindiMeaning: "ज्ञान",
    category: "Education",
    description: "विद्या सीखने और समझने से प्राप्त ज्ञान है।"
  },
  {
    sanskritWord: "शिक्षा",
    transliteration: "Shiksha",
    englishMeaning: "Education",
    hindiMeaning: "पढ़ाई",
    category: "Education",
    description: "शिक्षा ज्ञान और कौशल प्राप्त करने की प्रक्रिया है।"
  },
  {
    sanskritWord: "अध्यापक",
    transliteration: "Adhyapaka",
    englishMeaning: "Teacher",
    hindiMeaning: "शिक्षक",
    category: "Education",
    description: "अध्यापक विद्यार्थियों को शिक्षा प्रदान करता है।"
  },
  {
    sanskritWord: "शिष्य",
    transliteration: "Shishya",
    englishMeaning: "Student or Disciple",
    hindiMeaning: "विद्यार्थी",
    category: "Education",
    description: "शिष्य गुरु से ज्ञान प्राप्त करता है।"
  },
  {
    sanskritWord: "पुस्तक",
    transliteration: "Pustaka",
    englishMeaning: "Book",
    hindiMeaning: "किताब",
    category: "Education",
    description: "पुस्तक ज्ञान और जानकारी का लिखित संग्रह है।"
  },
  {
    sanskritWord: "पाठ",
    transliteration: "Patha",
    englishMeaning: "Lesson",
    hindiMeaning: "पाठ",
    category: "Education",
    description: "पाठ अध्ययन की एक इकाई है।"
  },
  {
    sanskritWord: "लेखन",
    transliteration: "Lekhana",
    englishMeaning: "Writing",
    hindiMeaning: "लिखना",
    category: "Education",
    description: "लेखन विचारों को लिखित रूप में व्यक्त करने की प्रक्रिया है।"
  },
  {
    sanskritWord: "वाचन",
    transliteration: "Vachana",
    englishMeaning: "Reading or Recitation",
    hindiMeaning: "पढ़ना या वाचन",
    category: "Education",
    description: "वाचन लिखित सामग्री को पढ़ने या सुनाने की क्रिया है।"
  },
  {
    sanskritWord: "परीक्षा",
    transliteration: "Pariksha",
    englishMeaning: "Examination",
    hindiMeaning: "इम्तिहान",
    category: "Education",
    description: "परीक्षा ज्ञान और योग्यता का मूल्यांकन करती है।"
  },
  {
    sanskritWord: "प्रश्न",
    transliteration: "Prashna",
    englishMeaning: "Question",
    hindiMeaning: "सवाल",
    category: "Education",
    description: "प्रश्न किसी जानकारी को जानने के लिए पूछा जाता है।"
  },

  // Mathematics
  {
    sanskritWord: "गणित",
    transliteration: "Ganita",
    englishMeaning: "Mathematics",
    hindiMeaning: "गणित",
    category: "Mathematics",
    description: "गणित संख्या, आकार और संरचनाओं का अध्ययन है।"
  },
  {
    sanskritWord: "संख्या",
    transliteration: "Sankhya",
    englishMeaning: "Number",
    hindiMeaning: "अंक या संख्या",
    category: "Mathematics",
    description: "संख्या गणना और मापन में प्रयुक्त होती है।"
  },
  {
    sanskritWord: "योग",
    transliteration: "Yoga",
    englishMeaning: "Addition",
    hindiMeaning: "जोड़",
    category: "Mathematics",
    description: "गणित में योग दो या अधिक संख्याओं को जोड़ने की क्रिया है।"
  },
  {
    sanskritWord: "वियोग",
    transliteration: "Viyoga",
    englishMeaning: "Subtraction",
    hindiMeaning: "घटाव",
    category: "Mathematics",
    description: "वियोग में एक संख्या को दूसरी संख्या से घटाया जाता है।"
  },
  {
    sanskritWord: "गुणन",
    transliteration: "Gunana",
    englishMeaning: "Multiplication",
    hindiMeaning: "गुणा",
    category: "Mathematics",
    description: "गुणन समान संख्याओं के बार-बार योग का संक्षिप्त रूप है।"
  },
  {
    sanskritWord: "भाग",
    transliteration: "Bhaga",
    englishMeaning: "Division",
    hindiMeaning: "भाग",
    category: "Mathematics",
    description: "भाग किसी संख्या को बराबर हिस्सों में बाँटने की क्रिया है।"
  },
  {
    sanskritWord: "भिन्न",
    transliteration: "Bhinna",
    englishMeaning: "Fraction",
    hindiMeaning: "भिन्न",
    category: "Mathematics",
    description: "भिन्न किसी पूर्ण का एक हिस्सा दर्शाती है।"
  },
  {
    sanskritWord: "वर्ग",
    transliteration: "Varga",
    englishMeaning: "Square",
    hindiMeaning: "वर्ग",
    category: "Mathematics",
    description: "किसी संख्या का वर्ग उसे स्वयं से गुणा करने पर मिलता है।"
  },
  {
    sanskritWord: "घन",
    transliteration: "Ghana",
    englishMeaning: "Cube",
    hindiMeaning: "घन",
    category: "Mathematics",
    description: "किसी संख्या का घन उसे तीन बार गुणा करने से प्राप्त होता है।"
  },
  {
    sanskritWord: "शून्य",
    transliteration: "Shunya",
    englishMeaning: "Zero",
    hindiMeaning: "शून्य",
    category: "Mathematics",
    description: "शून्य भारतीय गणित की महत्वपूर्ण अवधारणा है।"
  },

  // Society and Culture
  {
    sanskritWord: "समाज",
    transliteration: "Samaja",
    englishMeaning: "Society",
    hindiMeaning: "समाज",
    category: "Culture",
    description: "समाज लोगों के संगठित समूह को कहते हैं।"
  },
  {
    sanskritWord: "संस्कृति",
    transliteration: "Sanskriti",
    englishMeaning: "Culture",
    hindiMeaning: "संस्कृति",
    category: "Culture",
    description: "संस्कृति किसी समुदाय की परंपराओं और जीवनशैली का रूप है।"
  },
  {
    sanskritWord: "परम्परा",
    transliteration: "Parampara",
    englishMeaning: "Tradition",
    hindiMeaning: "रीति-रिवाज",
    category: "Culture",
    description: "परम्परा पीढ़ी-दर-पीढ़ी चलने वाली प्रथा है।"
  },
  {
    sanskritWord: "उत्सव",
    transliteration: "Utsava",
    englishMeaning: "Festival",
    hindiMeaning: "त्योहार",
    category: "Culture",
    description: "उत्सव आनंद और सामूहिक उत्साह का अवसर है।"
  },
  {
    sanskritWord: "कला",
    transliteration: "Kala",
    englishMeaning: "Art",
    hindiMeaning: "कला",
    category: "Culture",
    description: "कला रचनात्मक अभिव्यक्ति का माध्यम है।"
  },
  {
    sanskritWord: "संगीत",
    transliteration: "Sangita",
    englishMeaning: "Music",
    hindiMeaning: "संगीत",
    category: "Culture",
    description: "संगीत स्वर और लय का संयोजन है।"
  },
  {
    sanskritWord: "नृत्य",
    transliteration: "Nritya",
    englishMeaning: "Dance",
    hindiMeaning: "नाच",
    category: "Culture",
    description: "नृत्य शरीर की लयबद्ध गति द्वारा अभिव्यक्ति है।"
  },
  {
    sanskritWord: "नाट्य",
    transliteration: "Natya",
    englishMeaning: "Drama",
    hindiMeaning: "नाटक",
    category: "Culture",
    description: "नाट्य अभिनय और संवाद के माध्यम से कथा प्रस्तुत करता है।"
  },
  {
    sanskritWord: "चित्र",
    transliteration: "Chitra",
    englishMeaning: "Painting or Picture",
    hindiMeaning: "तस्वीर",
    category: "Culture",
    description: "चित्र दृश्य कला का एक रूप है।"
  },
  {
    sanskritWord: "शिल्प",
    transliteration: "Shilpa",
    englishMeaning: "Craft",
    hindiMeaning: "कारीगरी",
    category: "Culture",
    description: "शिल्प हाथों और उपकरणों से बनाई गई कलात्मक वस्तु है।"
  },

  // Time
  {
    sanskritWord: "काल",
    transliteration: "Kala",
    englishMeaning: "Time",
    hindiMeaning: "समय",
    category: "Time",
    description: "काल घटनाओं के क्रम और अवधि को दर्शाता है।"
  },
  {
    sanskritWord: "दिन",
    transliteration: "Dina",
    englishMeaning: "Day",
    hindiMeaning: "दिन",
    category: "Time",
    description: "दिन समय की एक सामान्य इकाई है।"
  },
  {
    sanskritWord: "रात्रि",
    transliteration: "Ratri",
    englishMeaning: "Night",
    hindiMeaning: "रात",
    category: "Time",
    description: "रात्रि दिन का अंधकारमय भाग है।"
  },
  {
    sanskritWord: "सप्ताह",
    transliteration: "Saptaha",
    englishMeaning: "Week",
    hindiMeaning: "सप्ताह",
    category: "Time",
    description: "सप्ताह सात दिनों की अवधि है।"
  },
  {
    sanskritWord: "दिवस",
    transliteration: "Divasa",
    englishMeaning: "Day",
    hindiMeaning: "दिन",
    category: "Time",
    description: "दिवस चौबीस घंटे की अवधि या दिन को दर्शाता है।"
  },
  {
    sanskritWord: "प्रभात",
    transliteration: "Prabhata",
    englishMeaning: "Dawn",
    hindiMeaning: "भोर",
    category: "Time",
    description: "प्रभात सूर्योदय के आसपास का समय है।"
  },
  {
    sanskritWord: "सायं",
    transliteration: "Sayam",
    englishMeaning: "Evening",
    hindiMeaning: "शाम",
    category: "Time",
    description: "सायं दिन के अंतिम भाग को कहते हैं।"
  },
  {
    sanskritWord: "मास",
    transliteration: "Masa",
    englishMeaning: "Month",
    hindiMeaning: "महीना",
    category: "Time",
    description: "मास समय की एक कैलेंडर इकाई है।"
  },
  {
    sanskritWord: "वर्ष",
    transliteration: "Varsha",
    englishMeaning: "Year",
    hindiMeaning: "साल",
    category: "Time",
    description: "वर्ष पृथ्वी की सूर्य के चारों ओर एक परिक्रमा की अवधि है।"
  },
  {
    sanskritWord: "ऋतु",
    transliteration: "Ritu",
    englishMeaning: "Season",
    hindiMeaning: "मौसम",
    category: "Time",
    description: "ऋतु वर्ष का एक विशिष्ट मौसमी भाग है।"
  },

    // Philosophy and Spirituality
  {
    sanskritWord: "मोक्ष",
    transliteration: "Moksha",
    englishMeaning: "Liberation",
    hindiMeaning: "मुक्ति",
    category: "Philosophy",
    description: "मोक्ष जन्म और मृत्यु के चक्र से मुक्ति की अवधारणा है।"
  },
  {
    sanskritWord: "निर्वाण",
    transliteration: "Nirvana",
    englishMeaning: "Liberation or Extinction of Suffering",
    hindiMeaning: "दुःखों से मुक्ति",
    category: "Philosophy",
    description: "निर्वाण भारतीय दार्शनिक परंपराओं में मुक्ति की अवस्था को दर्शाता है।"
  },
  {
    sanskritWord: "ध्यानयोग",
    transliteration: "Dhyana Yoga",
    englishMeaning: "Yoga of Meditation",
    hindiMeaning: "ध्यान का योग",
    category: "Philosophy",
    description: "ध्यानयोग मन को एकाग्र करने का आध्यात्मिक अभ्यास है।"
  },
  {
    sanskritWord: "वैराग्य",
    transliteration: "Vairagya",
    englishMeaning: "Detachment",
    hindiMeaning: "अनासक्ति",
    category: "Philosophy",
    description: "वैराग्य सांसारिक आसक्ति से दूर रहने की भावना है।"
  },
  {
    sanskritWord: "विवेक",
    transliteration: "Viveka",
    englishMeaning: "Discrimination or Discernment",
    hindiMeaning: "सही और गलत की पहचान",
    category: "Philosophy",
    description: "विवेक उचित और अनुचित के बीच अंतर समझने की क्षमता है।"
  },
  {
    sanskritWord: "श्रद्धा",
    transliteration: "Shraddha",
    englishMeaning: "Faith",
    hindiMeaning: "आस्था",
    category: "Philosophy",
    description: "श्रद्धा किसी विचार या सिद्धांत के प्रति विश्वास है।"
  },
  {
    sanskritWord: "समाधि",
    transliteration: "Samadhi",
    englishMeaning: "Deep Meditative Absorption",
    hindiMeaning: "गहन ध्यान की अवस्था",
    category: "Philosophy",
    description: "समाधि योग में गहन एकाग्रता की अवस्था है।"
  },
  {
    sanskritWord: "संकल्प",
    transliteration: "Sankalpa",
    englishMeaning: "Resolution",
    hindiMeaning: "दृढ़ निश्चय",
    category: "Philosophy",
    description: "संकल्प किसी उद्देश्य को पूरा करने का दृढ़ निश्चय है।"
  },
  {
    sanskritWord: "चित्त",
    transliteration: "Chitta",
    englishMeaning: "Mind or Consciousness",
    hindiMeaning: "मन",
    category: "Philosophy",
    description: "चित्त भारतीय दर्शन में मानसिक चेतना से संबंधित अवधारणा है।"
  },
  {
    sanskritWord: "बुद्धि",
    transliteration: "Buddhi",
    englishMeaning: "Intellect",
    hindiMeaning: "बुद्धि",
    category: "Philosophy",
    description: "बुद्धि निर्णय और विवेक करने की मानसिक शक्ति है।"
  },

  // Yoga
  {
    sanskritWord: "आसन",
    transliteration: "Asana",
    englishMeaning: "Posture",
    hindiMeaning: "योग की मुद्रा",
    category: "Yoga",
    description: "आसन योग में शरीर की विशेष स्थिति को कहते हैं।"
  },
  {
    sanskritWord: "प्राणायाम",
    transliteration: "Pranayama",
    englishMeaning: "Breath Regulation",
    hindiMeaning: "श्वास नियंत्रण",
    category: "Yoga",
    description: "प्राणायाम श्वास को नियंत्रित करने का योगाभ्यास है।"
  },
  {
    sanskritWord: "यम",
    transliteration: "Yama",
    englishMeaning: "Ethical Restraint",
    hindiMeaning: "नैतिक संयम",
    category: "Yoga",
    description: "यम पतंजलि योगसूत्र के अष्टांग योग का पहला अंग है।"
  },
  {
    sanskritWord: "नियम",
    transliteration: "Niyama",
    englishMeaning: "Personal Discipline",
    hindiMeaning: "व्यक्तिगत अनुशासन",
    category: "Yoga",
    description: "नियम अष्टांग योग का दूसरा अंग है।"
  },
  {
    sanskritWord: "प्रत्याहार",
    transliteration: "Pratyahara",
    englishMeaning: "Withdrawal of Senses",
    hindiMeaning: "इंद्रियों को भीतर करना",
    category: "Yoga",
    description: "प्रत्याहार इंद्रियों को बाहरी विषयों से हटाने का अभ्यास है।"
  },
  {
    sanskritWord: "धारणा",
    transliteration: "Dharana",
    englishMeaning: "Concentration",
    hindiMeaning: "एकाग्रता",
    category: "Yoga",
    description: "धारणा मन को एक स्थान या विषय पर केंद्रित करना है।"
  },
  {
    sanskritWord: "शवासन",
    transliteration: "Shavasana",
    englishMeaning: "Corpse Pose",
    hindiMeaning: "विश्राम की मुद्रा",
    category: "Yoga",
    description: "शवासन में शरीर को स्थिर रखकर विश्राम किया जाता है।"
  },
  {
    sanskritWord: "वज्रासन",
    transliteration: "Vajrasana",
    englishMeaning: "Thunderbolt Pose",
    hindiMeaning: "वज्र मुद्रा",
    category: "Yoga",
    description: "वज्रासन बैठकर किया जाने वाला योगासन है।"
  },
  {
    sanskritWord: "पद्मासन",
    transliteration: "Padmasana",
    englishMeaning: "Lotus Pose",
    hindiMeaning: "कमल मुद्रा",
    category: "Yoga",
    description: "पद्मासन ध्यान के लिए प्रयुक्त बैठने की मुद्रा है।"
  },
  {
    sanskritWord: "सूर्यनमस्कार",
    transliteration: "Surya Namaskara",
    englishMeaning: "Sun Salutation",
    hindiMeaning: "सूर्य को नमस्कार",
    category: "Yoga",
    description: "सूर्यनमस्कार कई योग मुद्राओं का क्रम है।"
  },

  // Ayurveda
  {
    sanskritWord: "दोष",
    transliteration: "Dosha",
    englishMeaning: "Biological Humour",
    hindiMeaning: "शारीरिक दोष",
    category: "Ayurveda",
    description: "आयुर्वेद में वात, पित्त और कफ को तीन दोष कहा जाता है।"
  },
  {
    sanskritWord: "वात",
    transliteration: "Vata",
    englishMeaning: "Vata Dosha",
    hindiMeaning: "वात दोष",
    category: "Ayurveda",
    description: "वात आयुर्वेद के तीन प्रमुख दोषों में से एक है।"
  },
  {
    sanskritWord: "पित्त",
    transliteration: "Pitta",
    englishMeaning: "Pitta Dosha",
    hindiMeaning: "पित्त दोष",
    category: "Ayurveda",
    description: "पित्त आयुर्वेद में परिवर्तन और पाचन से संबंधित दोष है।"
  },
  {
    sanskritWord: "कफ",
    transliteration: "Kapha",
    englishMeaning: "Kapha Dosha",
    hindiMeaning: "कफ दोष",
    category: "Ayurveda",
    description: "कफ आयुर्वेद में स्थिरता और संरचना से संबंधित दोष है।"
  },
  {
    sanskritWord: "धातु",
    transliteration: "Dhatu",
    englishMeaning: "Body Tissue",
    hindiMeaning: "शारीरिक ऊतक",
    category: "Ayurveda",
    description: "आयुर्वेद में धातु शरीर के पोषणकारी ऊतकों को कहते हैं।"
  },
  {
    sanskritWord: "मल",
    transliteration: "Mala",
    englishMeaning: "Waste Products",
    hindiMeaning: "शरीर के अपशिष्ट पदार्थ",
    category: "Ayurveda",
    description: "आयुर्वेद में मल शरीर से निकलने वाले अपशिष्ट पदार्थ हैं।"
  },
  {
    sanskritWord: "अग्नि",
    transliteration: "Agni",
    englishMeaning: "Digestive Fire",
    hindiMeaning: "पाचन शक्ति",
    category: "Ayurveda",
    description: "आयुर्वेद में अग्नि पाचन और चयापचय से संबंधित अवधारणा है।"
  },
  {
    sanskritWord: "ओजस्",
    transliteration: "Ojas",
    englishMeaning: "Vital Essence",
    hindiMeaning: "जीवन शक्ति",
    category: "Ayurveda",
    description: "ओजस् आयुर्वेद में जीवनशक्ति और प्रतिरोधक क्षमता से जुड़ा है।"
  },
  {
    sanskritWord: "स्नेहन",
    transliteration: "Snehana",
    englishMeaning: "Oleation Therapy",
    hindiMeaning: "स्नेह या तेल से उपचार",
    category: "Ayurveda",
    description: "स्नेहन आयुर्वेद की एक पारंपरिक उपचार प्रक्रिया है।"
  },
  {
    sanskritWord: "स्वेदन",
    transliteration: "Swedana",
    englishMeaning: "Sudation Therapy",
    hindiMeaning: "पसीना उत्पन्न करने की चिकित्सा",
    category: "Ayurveda",
    description: "स्वेदन आयुर्वेद में प्रयुक्त एक पारंपरिक प्रक्रिया है।"
  },

  // Grammar and Language
  {
    sanskritWord: "व्याकरण",
    transliteration: "Vyakarana",
    englishMeaning: "Grammar",
    hindiMeaning: "व्याकरण",
    category: "Language",
    description: "व्याकरण भाषा के नियमों का अध्ययन है।"
  },
  {
    sanskritWord: "वर्ण",
    transliteration: "Varna",
    englishMeaning: "Phoneme or Letter",
    hindiMeaning: "अक्षर या ध्वनि",
    category: "Language",
    description: "वर्ण भाषा की मूल ध्वनि इकाई है।"
  },
  {
    sanskritWord: "स्वर",
    transliteration: "Svara",
    englishMeaning: "Vowel",
    hindiMeaning: "स्वर",
    category: "Language",
    description: "स्वर वह ध्वनि है जिसका उच्चारण बिना अवरोध होता है।"
  },
  {
    sanskritWord: "व्यञ्जन",
    transliteration: "Vyanjana",
    englishMeaning: "Consonant",
    hindiMeaning: "व्यंजन",
    category: "Language",
    description: "व्यञ्जन के उच्चारण में वायु प्रवाह में अवरोध होता है।"
  },
  {
    sanskritWord: "सन्धि",
    transliteration: "Sandhi",
    englishMeaning: "Euphonic Combination",
    hindiMeaning: "वर्णों का मेल",
    category: "Language",
    description: "सन्धि दो वर्णों के मिलने पर होने वाला ध्वनि परिवर्तन है।"
  },
  {
    sanskritWord: "समास",
    transliteration: "Samasa",
    englishMeaning: "Compound Formation",
    hindiMeaning: "शब्दों का संक्षिप्त मेल",
    category: "Language",
    description: "समास दो या अधिक पदों को मिलाकर नया पद बनाता है।"
  },
  {
    sanskritWord: "प्रत्यय",
    transliteration: "Pratyaya",
    englishMeaning: "Suffix",
    hindiMeaning: "प्रत्यय",
    category: "Language",
    description: "प्रत्यय शब्द के अंत में जुड़कर उसका रूप या अर्थ बदलता है।"
  },
  {
    sanskritWord: "उपसर्ग",
    transliteration: "Upasarga",
    englishMeaning: "Prefix",
    hindiMeaning: "उपसर्ग",
    category: "Language",
    description: "उपसर्ग शब्द के पहले जुड़कर उसके अर्थ में परिवर्तन करता है।"
  },
  {
    sanskritWord: "धातु",
    transliteration: "Dhatu",
    englishMeaning: "Verbal Root",
    hindiMeaning: "क्रिया का मूल रूप",
    category: "Language",
    description: "संस्कृत व्याकरण में धातु क्रिया का मूल आधार है।"
  },
  {
    sanskritWord: "लकार",
    transliteration: "Lakara",
    englishMeaning: "Verb Tense or Mood Marker",
    hindiMeaning: "क्रिया का काल या भाव",
    category: "Language",
    description: "लकार संस्कृत क्रिया के काल और भाव को व्यक्त करता है।"
  },

  // Music
  {
    sanskritWord: "राग",
    transliteration: "Raga",
    englishMeaning: "Melodic Framework",
    hindiMeaning: "संगीत की धुन",
    category: "Music",
    description: "राग भारतीय शास्त्रीय संगीत का प्रमुख आधार है।"
  },
  {
    sanskritWord: "ताल",
    transliteration: "Tala",
    englishMeaning: "Rhythmic Cycle",
    hindiMeaning: "लय का चक्र",
    category: "Music",
    description: "ताल संगीत में समय और मात्राओं का नियमित चक्र है।"
  },
  {
    sanskritWord: "श्रुति",
    transliteration: "Shruti",
    englishMeaning: "Microtonal Interval",
    hindiMeaning: "सूक्ष्म स्वर अंतर",
    category: "Music",
    description: "भारतीय संगीत में श्रुति सूक्ष्म स्वर अंतर को दर्शाती है।"
  },
  {
    sanskritWord: "स्वरमण्डल",
    transliteration: "Swaramandala",
    englishMeaning: "Musical Scale",
    hindiMeaning: "स्वरों का समूह",
    category: "Music",
    description: "स्वरमण्डल संगीत के स्वरों की व्यवस्थित रचना है।"
  },
  {
    sanskritWord: "वाद्य",
    transliteration: "Vadya",
    englishMeaning: "Musical Instrument",
    hindiMeaning: "बाजे का यंत्र",
    category: "Music",
    description: "वाद्य संगीत उत्पन्न करने वाला उपकरण है।"
  },
  {
    sanskritWord: "वीणा",
    transliteration: "Veena",
    englishMeaning: "Veena",
    hindiMeaning: "वीणा नामक तार वाद्य",
    category: "Music",
    description: "वीणा भारतीय परंपरा का प्राचीन तार वाद्य है।"
  },
  {
    sanskritWord: "मृदङ्ग",
    transliteration: "Mridanga",
    englishMeaning: "Double-Headed Drum",
    hindiMeaning: "दो मुख वाला ढोल",
    category: "Music",
    description: "मृदङ्ग भारतीय संगीत में प्रयुक्त ताल वाद्य है।"
  },
  {
    sanskritWord: "बांसुरी",
    transliteration: "Bansuri",
    englishMeaning: "Flute",
    hindiMeaning: "बाँसुरी",
    category: "Music",
    description: "बाँसुरी वायु से ध्वनि उत्पन्न करने वाला वाद्य है।"
  },
  {
    sanskritWord: "लय",
    transliteration: "Laya",
    englishMeaning: "Tempo",
    hindiMeaning: "गति या तालमेल",
    category: "Music",
    description: "लय संगीत की गति को नियंत्रित करती है।"
  },
  {
    sanskritWord: "आलाप",
    transliteration: "Alapa",
    englishMeaning: "Melodic Elaboration",
    hindiMeaning: "राग का विस्तार",
    category: "Music",
    description: "आलाप राग का लयबद्ध ताल से पहले किया जाने वाला विस्तार है।"
  },

  // Architecture and Vastu
  {
    sanskritWord: "वास्तु",
    transliteration: "Vastu",
    englishMeaning: "Architecture or Dwelling",
    hindiMeaning: "भवन निर्माण से संबंधित विद्या",
    category: "Architecture",
    description: "वास्तु भारतीय परंपरा में भवन और स्थान व्यवस्था से संबंधित है।"
  },
  {
    sanskritWord: "मण्डप",
    transliteration: "Mandapa",
    englishMeaning: "Pavilion",
    hindiMeaning: "मंडप",
    category: "Architecture",
    description: "मण्डप स्तम्भों से युक्त खुला या अर्धखुला भवन भाग है।"
  },
  {
    sanskritWord: "स्तम्भ",
    transliteration: "Stambha",
    englishMeaning: "Pillar",
    hindiMeaning: "खंभा",
    category: "Architecture",
    description: "स्तम्भ भवन को सहारा देने वाली संरचना है।"
  },
  {
    sanskritWord: "तोरण",
    transliteration: "Torana",
    englishMeaning: "Gateway Arch",
    hindiMeaning: "सजावटी प्रवेश द्वार",
    category: "Architecture",
    description: "तोरण भवन या स्मारक का सजावटी प्रवेश द्वार है।"
  },
  {
    sanskritWord: "शिखर",
    transliteration: "Shikhara",
    englishMeaning: "Temple Spire",
    hindiMeaning: "मंदिर का ऊपरी भाग",
    category: "Architecture",
    description: "शिखर मंदिर की ऊँची ऊपरी संरचना को कहते हैं।"
  },
  {
    sanskritWord: "गर्भगृह",
    transliteration: "Garbhagriha",
    englishMeaning: "Sanctum Sanctorum",
    hindiMeaning: "मंदिर का मुख्य पूजा कक्ष",
    category: "Architecture",
    description: "गर्भगृह मंदिर का सबसे भीतरी पवित्र कक्ष है।"
  },
  {
    sanskritWord: "प्रासाद",
    transliteration: "Prasada",
    englishMeaning: "Palace or Temple Structure",
    hindiMeaning: "महल या मंदिर भवन",
    category: "Architecture",
    description: "प्रासाद एक भव्य भवन या मंदिर संरचना को कहते हैं।"
  },
  {
    sanskritWord: "आयाम",
    transliteration: "Ayama",
    englishMeaning: "Dimension",
    hindiMeaning: "माप या विस्तार",
    category: "Architecture",
    description: "आयाम किसी वस्तु की लंबाई, चौड़ाई या ऊँचाई दर्शाता है।"
  },
  {
    sanskritWord: "मान",
    transliteration: "Mana",
    englishMeaning: "Measurement",
    hindiMeaning: "माप",
    category: "Architecture",
    description: "मान किसी वस्तु का माप या परिमाण है।"
  },
  {
    sanskritWord: "रेखा",
    transliteration: "Rekha",
    englishMeaning: "Line",
    hindiMeaning: "रेखा",
    category: "Architecture",
    description: "रेखा वास्तु और ज्यामिति में आकार निर्धारण का आधार है।"
  },

  // Governance and Law
  {
    sanskritWord: "राज्य",
    transliteration: "Rajya",
    englishMeaning: "State or Kingdom",
    hindiMeaning: "राज्य",
    category: "Governance",
    description: "राज्य एक संगठित राजनीतिक क्षेत्र है।"
  },
  {
    sanskritWord: "राजा",
    transliteration: "Raja",
    englishMeaning: "King",
    hindiMeaning: "राजा",
    category: "Governance",
    description: "राजा पारंपरिक शासन व्यवस्था का शासक होता है।"
  },
  {
    sanskritWord: "मन्त्री",
    transliteration: "Mantri",
    englishMeaning: "Minister or Counsellor",
    hindiMeaning: "मंत्री",
    category: "Governance",
    description: "मन्त्री शासन में सलाह और प्रशासनिक कार्य करता है।"
  },
  {
    sanskritWord: "सभा",
    transliteration: "Sabha",
    englishMeaning: "Assembly",
    hindiMeaning: "सभा",
    category: "Governance",
    description: "सभा विचार-विमर्श के लिए लोगों का समूह है।"
  },
  {
    sanskritWord: "समिति",
    transliteration: "Samiti",
    englishMeaning: "Committee",
    hindiMeaning: "समिति",
    category: "Governance",
    description: "समिति किसी विशेष कार्य के लिए गठित समूह है।"
  },
  {
    sanskritWord: "दण्ड",
    transliteration: "Danda",
    englishMeaning: "Punishment",
    hindiMeaning: "दंड",
    category: "Governance",
    description: "दण्ड प्राचीन भारतीय न्याय और शासन विचार में दंड व्यवस्था है।"
  },
  {
    sanskritWord: "नीति",
    transliteration: "Niti",
    englishMeaning: "Policy or Ethics",
    hindiMeaning: "नीति",
    category: "Governance",
    description: "नीति शासन और आचरण के उचित सिद्धांतों को दर्शाती है।"
  },
  {
    sanskritWord: "न्याय",
    transliteration: "Nyaya",
    englishMeaning: "Justice",
    hindiMeaning: "इंसाफ",
    category: "Governance",
    description: "न्याय उचित और निष्पक्ष निर्णय की अवधारणा है।"
  },
  {
    sanskritWord: "कर",
    transliteration: "Kara",
    englishMeaning: "Tax",
    hindiMeaning: "कर या टैक्स",
    category: "Governance",
    description: "कर शासन द्वारा सार्वजनिक कार्यों के लिए लिया जाने वाला शुल्क है।"
  },
  {
    sanskritWord: "प्रजा",
    transliteration: "Praja",
    englishMeaning: "Subjects or Citizens",
    hindiMeaning: "प्रजा",
    category: "Governance",
    description: "प्रजा किसी राज्य के अधीन रहने वाले लोगों को कहते हैं।"
  },

  // Logic and Knowledge
  {
    sanskritWord: "तर्क",
    transliteration: "Tarka",
    englishMeaning: "Reasoning",
    hindiMeaning: "तर्क",
    category: "Logic",
    description: "तर्क विचारों के आधार पर निष्कर्ष तक पहुँचने की प्रक्रिया है।"
  },
  {
    sanskritWord: "अनुमान",
    transliteration: "Anumana",
    englishMeaning: "Inference",
    hindiMeaning: "अनुमान",
    category: "Logic",
    description: "अनुमान ज्ञात तथ्यों के आधार पर नया निष्कर्ष निकालना है।"
  },
  {
    sanskritWord: "उपमान",
    transliteration: "Upamana",
    englishMeaning: "Comparison",
    hindiMeaning: "तुलना",
    category: "Logic",
    description: "उपमान समानता के आधार पर ज्ञान प्राप्त करने का साधन है।"
  },
  {
    sanskritWord: "शब्दप्रमाण",
    transliteration: "Shabda Pramana",
    englishMeaning: "Verbal Testimony",
    hindiMeaning: "शब्द या कथन से प्राप्त ज्ञान",
    category: "Logic",
    description: "शब्दप्रमाण विश्वसनीय कथन से प्राप्त ज्ञान का साधन है।"
  },
  {
    sanskritWord: "प्रत्यक्ष",
    transliteration: "Pratyaksha",
    englishMeaning: "Direct Perception",
    hindiMeaning: "प्रत्यक्ष अनुभव",
    category: "Logic",
    description: "प्रत्यक्ष इंद्रियों द्वारा प्राप्त तत्काल ज्ञान है।"
  },
  {
    sanskritWord: "प्रमाण",
    transliteration: "Pramana",
    englishMeaning: "Means of Valid Knowledge",
    hindiMeaning: "सही ज्ञान का साधन",
    category: "Logic",
    description: "प्रमाण भारतीय दर्शन में यथार्थ ज्ञान प्राप्त करने का साधन है।"
  },
  {
    sanskritWord: "संशय",
    transliteration: "Samsaya",
    englishMeaning: "Doubt",
    hindiMeaning: "संदेह",
    category: "Logic",
    description: "संशय किसी विषय के बारे में अनिश्चितता की स्थिति है।"
  },
  {
    sanskritWord: "निर्णय",
    transliteration: "Nirnaya",
    englishMeaning: "Conclusion",
    hindiMeaning: "निष्कर्ष",
    category: "Logic",
    description: "निर्णय विचार-विमर्श के बाद निकाला गया निश्चित निष्कर्ष है।"
  },
  {
    sanskritWord: "उदाहरण",
    transliteration: "Udaharana",
    englishMeaning: "Example",
    hindiMeaning: "उदाहरण",
    category: "Logic",
    description: "उदाहरण किसी सिद्धांत को स्पष्ट करने के लिए दिया जाता है।"
  },
  {
    sanskritWord: "सिद्धान्त",
    transliteration: "Siddhanta",
    englishMeaning: "Established Doctrine",
    hindiMeaning: "स्थापित सिद्धांत",
    category: "Logic",
    description: "सिद्धान्त तर्क और विचार से स्थापित मान्यता है।"
  },

  // Agriculture
  {
    sanskritWord: "कृषि",
    transliteration: "Krishi",
    englishMeaning: "Agriculture",
    hindiMeaning: "खेती",
    category: "Agriculture",
    description: "कृषि भूमि पर फसल उगाने की प्रक्रिया है।"
  },
  {
    sanskritWord: "कृषक",
    transliteration: "Krishaka",
    englishMeaning: "Farmer",
    hindiMeaning: "किसान",
    category: "Agriculture",
    description: "कृषक खेती करने वाला व्यक्ति है।"
  },
  {
    sanskritWord: "क्षेत्र",
    transliteration: "Kshetra",
    englishMeaning: "Field",
    hindiMeaning: "खेत",
    category: "Agriculture",
    description: "क्षेत्र खेती या किसी कार्य के लिए निर्धारित भूमि है।"
  },
  {
    sanskritWord: "हल",
    transliteration: "Hala",
    englishMeaning: "Plough",
    hindiMeaning: "हल",
    category: "Agriculture",
    description: "हल भूमि जोतने का कृषि उपकरण है।"
  },
  {
    sanskritWord: "वपन",
    transliteration: "Vapana",
    englishMeaning: "Sowing",
    hindiMeaning: "बीज बोना",
    category: "Agriculture",
    description: "वपन खेत में बीज डालने की प्रक्रिया है।"
  },
  {
    sanskritWord: "सस्य",
    transliteration: "Sasya",
    englishMeaning: "Crop",
    hindiMeaning: "फसल",
    category: "Agriculture",
    description: "सस्य खेत में उगाई जाने वाली फसल को कहते हैं।"
  },
  {
    sanskritWord: "सिञ्चन",
    transliteration: "Sinchana",
    englishMeaning: "Irrigation",
    hindiMeaning: "सिंचाई",
    category: "Agriculture",
    description: "सिञ्चन फसलों को पानी देने की प्रक्रिया है।"
  },
  {
    sanskritWord: "उर्वरा",
    transliteration: "Urvara",
    englishMeaning: "Fertile Land",
    hindiMeaning: "उपजाऊ भूमि",
    category: "Agriculture",
    description: "उर्वरा भूमि फसल उत्पादन के लिए उपयुक्त होती है।"
  },
  {
    sanskritWord: "धान्य",
    transliteration: "Dhanya",
    englishMeaning: "Grain",
    hindiMeaning: "अनाज",
    category: "Agriculture",
    description: "धान्य भोजन के लिए उपयोग किए जाने वाले अनाज को कहते हैं।"
  },
  {
    sanskritWord: "गोदाम",
    transliteration: "Godama",
    englishMeaning: "Storehouse",
    hindiMeaning: "भंडार गृह",
    category: "Agriculture",
    description: "गोदाम में अनाज और अन्य वस्तुएँ सुरक्षित रखी जाती हैं।"
  },

    // Vedic Studies
  {
    sanskritWord: "वेद",
    transliteration: "Veda",
    englishMeaning: "Sacred Knowledge",
    hindiMeaning: "पवित्र ज्ञान",
    category: "Vedic Studies",
    description: "वेद भारतीय ज्ञान परंपरा के प्राचीन ग्रंथ हैं।"
  },
  {
    sanskritWord: "ऋचा",
    transliteration: "Richa",
    englishMeaning: "Vedic Verse",
    hindiMeaning: "वैदिक मंत्र की ऋचा",
    category: "Vedic Studies",
    description: "ऋचा वेदों में प्रयुक्त मंत्रात्मक पद्य है।"
  },
  {
    sanskritWord: "सूक्त",
    transliteration: "Sukta",
    englishMeaning: "Hymn",
    hindiMeaning: "वैदिक स्तुति",
    category: "Vedic Studies",
    description: "सूक्त वैदिक मंत्रों का व्यवस्थित समूह है।"
  },
  {
    sanskritWord: "संहिता",
    transliteration: "Samhita",
    englishMeaning: "Collection",
    hindiMeaning: "संग्रह",
    category: "Vedic Studies",
    description: "संहिता मंत्रों और वैदिक पाठों का संग्रह है।"
  },
  {
    sanskritWord: "ब्राह्मण",
    transliteration: "Brahmana",
    englishMeaning: "Vedic Prose Text",
    hindiMeaning: "वैदिक गद्य ग्रंथ",
    category: "Vedic Studies",
    description: "ब्राह्मण ग्रंथ वैदिक यज्ञों और अनुष्ठानों की व्याख्या करते हैं।"
  },
  {
    sanskritWord: "आरण्यक",
    transliteration: "Aranyaka",
    englishMeaning: "Forest Text",
    hindiMeaning: "आरण्यक ग्रंथ",
    category: "Vedic Studies",
    description: "आरण्यक वैदिक साहित्य का एक भाग है।"
  },
  {
    sanskritWord: "उपनिषद्",
    transliteration: "Upanishad",
    englishMeaning: "Philosophical Text",
    hindiMeaning: "दार्शनिक ग्रंथ",
    category: "Vedic Studies",
    description: "उपनिषदों में आत्मा और ब्रह्म से जुड़े विचार मिलते हैं।"
  },
  {
    sanskritWord: "यज्ञ",
    transliteration: "Yajna",
    englishMeaning: "Vedic Sacrifice",
    hindiMeaning: "वैदिक अनुष्ठान",
    category: "Vedic Studies",
    description: "यज्ञ वैदिक परंपरा का एक महत्वपूर्ण अनुष्ठान है।"
  },
  {
    sanskritWord: "होम",
    transliteration: "Homa",
    englishMeaning: "Fire Offering",
    hindiMeaning: "अग्नि में आहुति",
    category: "Vedic Studies",
    description: "होम में अग्नि के माध्यम से आहुति दी जाती है।"
  },
  {
    sanskritWord: "मन्त्र",
    transliteration: "Mantra",
    englishMeaning: "Sacred Formula",
    hindiMeaning: "पवित्र मंत्र",
    category: "Vedic Studies",
    description: "मन्त्र पवित्र ध्वनि या शब्दों का समूह है।"
  },

  // Indian Astronomy
  {
    sanskritWord: "ग्रह",
    transliteration: "Graha",
    englishMeaning: "Planet",
    hindiMeaning: "ग्रह",
    category: "Astronomy",
    description: "ग्रह खगोलीय पिंड हैं जो तारे की परिक्रमा करते हैं।"
  },
  {
    sanskritWord: "उपग्रह",
    transliteration: "Upagraha",
    englishMeaning: "Satellite",
    hindiMeaning: "उपग्रह",
    category: "Astronomy",
    description: "उपग्रह किसी ग्रह की परिक्रमा करने वाला पिंड है।"
  },
  {
    sanskritWord: "कक्षा",
    transliteration: "Kaksha",
    englishMeaning: "Orbit",
    hindiMeaning: "कक्षा",
    category: "Astronomy",
    description: "कक्षा वह मार्ग है जिस पर कोई खगोलीय पिंड घूमता है।"
  },
  {
    sanskritWord: "धूमकेतु",
    transliteration: "Dhumaketu",
    englishMeaning: "Comet",
    hindiMeaning: "पुच्छल तारा",
    category: "Astronomy",
    description: "धूमकेतु बर्फ, धूल और चट्टानी पदार्थों से बना खगोलीय पिंड है।"
  },
  {
    sanskritWord: "उल्का",
    transliteration: "Ulka",
    englishMeaning: "Meteor",
    hindiMeaning: "उल्का",
    category: "Astronomy",
    description: "उल्का वायुमंडल में प्रवेश करने पर चमकने वाला पिंड है।"
  },
  {
    sanskritWord: "ध्रुव",
    transliteration: "Dhruva",
    englishMeaning: "Pole or Fixed Point",
    hindiMeaning: "ध्रुव",
    category: "Astronomy",
    description: "ध्रुव स्थिर दिशा या खगोलीय ध्रुव को दर्शाता है।"
  },
  {
    sanskritWord: "विषुव",
    transliteration: "Vishuva",
    englishMeaning: "Equinox",
    hindiMeaning: "विषुव",
    category: "Astronomy",
    description: "विषुव वह समय है जब दिन और रात लगभग बराबर होते हैं।"
  },
  {
    sanskritWord: "अयन",
    transliteration: "Ayana",
    englishMeaning: "Solar Course",
    hindiMeaning: "सूर्य का मार्ग",
    category: "Astronomy",
    description: "अयन भारतीय कालगणना में सूर्य की गति से संबंधित अवधारणा है।"
  },
  {
    sanskritWord: "मण्डल",
    transliteration: "Mandala",
    englishMeaning: "Circle or Sphere",
    hindiMeaning: "वृत्त या मंडल",
    category: "Astronomy",
    description: "मण्डल गोलाकार क्षेत्र या खगोलीय वृत्त को दर्शाता है।"
  },
  {
    sanskritWord: "राशि",
    transliteration: "Rashi",
    englishMeaning: "Zodiac Sign",
    hindiMeaning: "राशि",
    category: "Astronomy",
    description: "राशि भारतीय ज्योतिष में आकाश के बारह विभागों में से एक है।"
  },

  // Mathematics and Geometry
  {
    sanskritWord: "ज्यामिति",
    transliteration: "Jyamiti",
    englishMeaning: "Geometry",
    hindiMeaning: "ज्यामिति",
    category: "Mathematics",
    description: "ज्यामिति आकारों, रेखाओं और स्थान का अध्ययन है।"
  },
  {
    sanskritWord: "त्रिभुज",
    transliteration: "Tribhuja",
    englishMeaning: "Triangle",
    hindiMeaning: "तीन भुजाओं वाली आकृति",
    category: "Mathematics",
    description: "त्रिभुज तीन भुजाओं और तीन कोणों वाली आकृति है।"
  },
  {
    sanskritWord: "चतुर्भुज",
    transliteration: "Chaturbhuja",
    englishMeaning: "Quadrilateral",
    hindiMeaning: "चार भुजाओं वाली आकृति",
    category: "Mathematics",
    description: "चतुर्भुज चार भुजाओं वाला बहुभुज है।"
  },
  {
    sanskritWord: "वृत्त",
    transliteration: "Vritta",
    englishMeaning: "Circle",
    hindiMeaning: "गोल आकृति",
    category: "Mathematics",
    description: "वृत्त में सभी बिंदु केंद्र से समान दूरी पर होते हैं।"
  },
  {
    sanskritWord: "परिधि",
    transliteration: "Paridhi",
    englishMeaning: "Circumference",
    hindiMeaning: "परिमाप",
    category: "Mathematics",
    description: "परिधि किसी बंद आकृति की सीमा की लंबाई है।"
  },
  {
    sanskritWord: "व्यास",
    transliteration: "Vyas",
    englishMeaning: "Diameter",
    hindiMeaning: "व्यास",
    category: "Mathematics",
    description: "व्यास वृत्त के केंद्र से गुजरने वाली जीवा है।"
  },
  {
    sanskritWord: "त्रिज्या",
    transliteration: "Trijya",
    englishMeaning: "Radius",
    hindiMeaning: "त्रिज्या",
    category: "Mathematics",
    description: "त्रिज्या वृत्त के केंद्र से परिधि तक की दूरी है।"
  },
  {
    sanskritWord: "कोण",
    transliteration: "Kona",
    englishMeaning: "Angle",
    hindiMeaning: "कोण",
    category: "Mathematics",
    description: "कोण दो किरणों के बीच बनने वाली आकृति है।"
  },
  {
    sanskritWord: "रेखाखण्ड",
    transliteration: "Rekhakhanda",
    englishMeaning: "Line Segment",
    hindiMeaning: "रेखाखंड",
    category: "Mathematics",
    description: "रेखाखण्ड के दो निश्चित अंत बिंदु होते हैं।"
  },
  {
    sanskritWord: "समकोण",
    transliteration: "Samakona",
    englishMeaning: "Right Angle",
    hindiMeaning: "नब्बे अंश का कोण",
    category: "Mathematics",
    description: "समकोण का माप नब्बे अंश होता है।"
  },

  // Physics
  {
    sanskritWord: "गति",
    transliteration: "Gati",
    englishMeaning: "Motion",
    hindiMeaning: "गति",
    category: "Physics",
    description: "गति समय के साथ स्थिति में परिवर्तन है।"
  },
  {
    sanskritWord: "बल",
    transliteration: "Bala",
    englishMeaning: "Force",
    hindiMeaning: "बल",
    category: "Physics",
    description: "बल किसी वस्तु की गति या आकार बदल सकता है।"
  },
  {
    sanskritWord: "कार्य",
    transliteration: "Karya",
    englishMeaning: "Work",
    hindiMeaning: "कार्य",
    category: "Physics",
    description: "भौतिकी में बल द्वारा विस्थापन होने पर कार्य होता है।"
  },
  {
    sanskritWord: "दाब",
    transliteration: "Daba",
    englishMeaning: "Pressure",
    hindiMeaning: "दबाव",
    category: "Physics",
    description: "दाब प्रति इकाई क्षेत्रफल पर लगने वाला बल है।"
  },
  {
    sanskritWord: "घनत्व",
    transliteration: "Ghanatva",
    englishMeaning: "Density",
    hindiMeaning: "घनत्व",
    category: "Physics",
    description: "घनत्व प्रति इकाई आयतन में द्रव्यमान है।"
  },
  {
    sanskritWord: "दूरी",
    transliteration: "Duri",
    englishMeaning: "Distance",
    hindiMeaning: "दूरी",
    category: "Physics",
    description: "दूरी तय किए गए कुल मार्ग की लंबाई है।"
  },
  {
    sanskritWord: "विस्थापन",
    transliteration: "Visthapana",
    englishMeaning: "Displacement",
    hindiMeaning: "विस्थापन",
    category: "Physics",
    description: "विस्थापन प्रारंभिक और अंतिम स्थिति के बीच निर्देशित दूरी है।"
  },
  {
    sanskritWord: "आवृत्ति",
    transliteration: "Avritti",
    englishMeaning: "Frequency",
    hindiMeaning: "आवृत्ति",
    category: "Physics",
    description: "आवृत्ति एक सेकंड में होने वाले दोलनों की संख्या है।"
  },
  {
    sanskritWord: "तरंग",
    transliteration: "Taranga",
    englishMeaning: "Wave",
    hindiMeaning: "लहर",
    category: "Physics",
    description: "तरंग ऊर्जा के संचरण का एक माध्यम है।"
  },
  {
    sanskritWord: "दोलन",
    transliteration: "Dolana",
    englishMeaning: "Oscillation",
    hindiMeaning: "कंपन",
    category: "Physics",
    description: "दोलन किसी संतुलन स्थिति के आसपास बार-बार होने वाली गति है।"
  },

  // Chemistry
  {
    sanskritWord: "परमाणु",
    transliteration: "Paramanu",
    englishMeaning: "Atom",
    hindiMeaning: "परमाणु",
    category: "Chemistry",
    description: "परमाणु किसी तत्व की मूल रासायनिक इकाई है।"
  },
  {
    sanskritWord: "अणु",
    transliteration: "Anu",
    englishMeaning: "Molecule",
    hindiMeaning: "अणु",
    category: "Chemistry",
    description: "अणु दो या अधिक परमाणुओं से मिलकर बन सकता है।"
  },
  {
    sanskritWord: "तत्त्व",
    transliteration: "Tattva",
    englishMeaning: "Element or Principle",
    hindiMeaning: "तत्व",
    category: "Chemistry",
    description: "तत्त्व किसी पदार्थ के मूल घटक या सिद्धांत को दर्शाता है।"
  },
  {
    sanskritWord: "यौगिक",
    transliteration: "Yaugika",
    englishMeaning: "Compound",
    hindiMeaning: "यौगिक",
    category: "Chemistry",
    description: "यौगिक दो या अधिक तत्वों के रासायनिक संयोजन से बनता है।"
  },
  {
    sanskritWord: "मिश्रण",
    transliteration: "Mishrana",
    englishMeaning: "Mixture",
    hindiMeaning: "मिश्रण",
    category: "Chemistry",
    description: "मिश्रण दो या अधिक पदार्थों का भौतिक मेल है।"
  },
  {
    sanskritWord: "द्रावण",
    transliteration: "Dravana",
    englishMeaning: "Solution",
    hindiMeaning: "विलयन",
    category: "Chemistry",
    description: "द्रावण दो या अधिक पदार्थों का समांगी मिश्रण है।"
  },
  {
    sanskritWord: "अम्ल",
    transliteration: "Amla",
    englishMeaning: "Acid",
    hindiMeaning: "अम्ल",
    category: "Chemistry",
    description: "अम्ल एक रासायनिक पदार्थ है जो जलीय विलयन में हाइड्रोजन आयन दे सकता है।"
  },
  {
    sanskritWord: "क्षार",
    transliteration: "Kshara",
    englishMeaning: "Alkali",
    hindiMeaning: "क्षार",
    category: "Chemistry",
    description: "क्षार अम्ल के साथ अभिक्रिया करके लवण और जल बना सकता है।"
  },
  {
    sanskritWord: "लवण",
    transliteration: "Lavana",
    englishMeaning: "Salt",
    hindiMeaning: "नमक",
    category: "Chemistry",
    description: "लवण अम्ल और क्षार की अभिक्रिया से बन सकता है।"
  },
  {
    sanskritWord: "विलयन",
    transliteration: "Vilayana",
    englishMeaning: "Dissolution",
    hindiMeaning: "घुलना",
    category: "Chemistry",
    description: "विलयन किसी पदार्थ के दूसरे पदार्थ में घुलने की प्रक्रिया है।"
  },

  // Biology
  {
    sanskritWord: "जीव",
    transliteration: "Jiva",
    englishMeaning: "Living Organism",
    hindiMeaning: "जीव",
    category: "Biology",
    description: "जीव वह इकाई है जिसमें जीवन की विशेषताएँ होती हैं।"
  },
  {
    sanskritWord: "कोशिका",
    transliteration: "Koshika",
    englishMeaning: "Cell",
    hindiMeaning: "कोशिका",
    category: "Biology",
    description: "कोशिका जीवों की संरचनात्मक और क्रियात्मक मूल इकाई है।"
  },
  {
    sanskritWord: "ऊतक",
    transliteration: "Utaka",
    englishMeaning: "Tissue",
    hindiMeaning: "ऊतक",
    category: "Biology",
    description: "ऊतक समान कार्य करने वाली कोशिकाओं का समूह है।"
  },
  {
    sanskritWord: "अंग",
    transliteration: "Anga",
    englishMeaning: "Organ",
    hindiMeaning: "अंग",
    category: "Biology",
    description: "अंग विभिन्न ऊतकों से मिलकर बनता है।"
  },
  {
    sanskritWord: "जीवाणु",
    transliteration: "Jivanu",
    englishMeaning: "Bacterium",
    hindiMeaning: "जीवाणु",
    category: "Biology",
    description: "जीवाणु सूक्ष्म एककोशिकीय जीव होते हैं।"
  },
  {
    sanskritWord: "विषाणु",
    transliteration: "Vishanu",
    englishMeaning: "Virus",
    hindiMeaning: "विषाणु",
    category: "Biology",
    description: "विषाणु कोशिका के बाहर स्वयं प्रजनन नहीं कर सकते।"
  },
  {
    sanskritWord: "प्रजनन",
    transliteration: "Prajanana",
    englishMeaning: "Reproduction",
    hindiMeaning: "प्रजनन",
    category: "Biology",
    description: "प्रजनन जीवों द्वारा नई संतति उत्पन्न करने की प्रक्रिया है।"
  },
  {
    sanskritWord: "वंशानुक्रम",
    transliteration: "Vamshanukrama",
    englishMeaning: "Heredity",
    hindiMeaning: "आनुवंशिकता",
    category: "Biology",
    description: "वंशानुक्रम में गुण माता-पिता से संतानों तक पहुँचते हैं।"
  },
  {
    sanskritWord: "पर्यावरण",
    transliteration: "Paryavarana",
    englishMeaning: "Environment",
    hindiMeaning: "पर्यावरण",
    category: "Biology",
    description: "पर्यावरण जीवों के आसपास की जैविक और अजैविक परिस्थितियाँ हैं।"
  },
  {
    sanskritWord: "पारिस्थितिकी",
    transliteration: "Paristhitiki",
    englishMeaning: "Ecology",
    hindiMeaning: "पारिस्थितिकी",
    category: "Biology",
    description: "पारिस्थितिकी जीवों और उनके पर्यावरण के संबंधों का अध्ययन है।"
  },

  // Economics
  {
    sanskritWord: "अर्थशास्त्र",
    transliteration: "Arthashastra",
    englishMeaning: "Economics",
    hindiMeaning: "अर्थशास्त्र",
    category: "Economics",
    description: "अर्थशास्त्र संसाधनों और आर्थिक गतिविधियों का अध्ययन है।"
  },
  {
    sanskritWord: "धन",
    transliteration: "Dhana",
    englishMeaning: "Wealth",
    hindiMeaning: "धन",
    category: "Economics",
    description: "धन आर्थिक मूल्य वाली संपत्ति को दर्शाता है।"
  },
  {
    sanskritWord: "मुद्रा",
    transliteration: "Mudra",
    englishMeaning: "Currency",
    hindiMeaning: "पैसा",
    category: "Economics",
    description: "मुद्रा विनिमय और भुगतान का माध्यम है।"
  },
  {
    sanskritWord: "वाणिज्य",
    transliteration: "Vanijya",
    englishMeaning: "Commerce",
    hindiMeaning: "व्यापार",
    category: "Economics",
    description: "वाणिज्य वस्तुओं और सेवाओं के आदान-प्रदान से संबंधित है।"
  },
  {
    sanskritWord: "व्यापार",
    transliteration: "Vyapara",
    englishMeaning: "Trade",
    hindiMeaning: "कारोबार",
    category: "Economics",
    description: "व्यापार वस्तुओं और सेवाओं की खरीद-बिक्री है।"
  },
  {
    sanskritWord: "विनिमय",
    transliteration: "Vinimaya",
    englishMeaning: "Exchange",
    hindiMeaning: "अदला-बदली",
    category: "Economics",
    description: "विनिमय में वस्तुओं या सेवाओं का आदान-प्रदान होता है।"
  },
  {
    sanskritWord: "मूल्य",
    transliteration: "Mulya",
    englishMeaning: "Value or Price",
    hindiMeaning: "कीमत",
    category: "Economics",
    description: "मूल्य किसी वस्तु या सेवा का आर्थिक महत्व दर्शाता है।"
  },
  {
    sanskritWord: "लाभ",
    transliteration: "Labha",
    englishMeaning: "Profit or Benefit",
    hindiMeaning: "फायदा",
    category: "Economics",
    description: "लाभ आय और लागत के अंतर से प्राप्त हो सकता है।"
  },
  {
    sanskritWord: "हानि",
    transliteration: "Hani",
    englishMeaning: "Loss",
    hindiMeaning: "नुकसान",
    category: "Economics",
    description: "हानि आर्थिक नुकसान या कमी को दर्शाती है।"
  },
  {
    sanskritWord: "ऋण",
    transliteration: "Rina",
    englishMeaning: "Debt or Loan",
    hindiMeaning: "कर्ज",
    category: "Economics",
    description: "ऋण वह धन है जिसे भविष्य में लौटाना होता है।"
  },

  // Literature
  {
    sanskritWord: "काव्य",
    transliteration: "Kavya",
    englishMeaning: "Poetry",
    hindiMeaning: "काव्य",
    category: "Literature",
    description: "काव्य साहित्य की कलात्मक रचना है।"
  },
  {
    sanskritWord: "महाकाव्य",
    transliteration: "Mahakavya",
    englishMeaning: "Epic Poetry",
    hindiMeaning: "महान काव्य",
    category: "Literature",
    description: "महाकाव्य विस्तृत कथा पर आधारित काव्य रचना है।"
  },
  {
    sanskritWord: "आख्यान",
    transliteration: "Akh yana",
    englishMeaning: "Narrative",
    hindiMeaning: "कथा",
    category: "Literature",
    description: "आख्यान किसी घटना या कथा का वर्णन है।"
  },
  {
    sanskritWord: "उपाख्यान",
    transliteration: "Upakhyana",
    englishMeaning: "Sub-Story",
    hindiMeaning: "उपकथा",
    category: "Literature",
    description: "उपाख्यान किसी मुख्य कथा के भीतर आने वाली छोटी कथा है।"
  },
  {
    sanskritWord: "छन्द",
    transliteration: "Chhanda",
    englishMeaning: "Poetic Meter",
    hindiMeaning: "छंद",
    category: "Literature",
    description: "छन्द कविता की लय और मात्राओं का नियम है।"
  },
  {
    sanskritWord: "अलंकार",
    transliteration: "Alankara",
    englishMeaning: "Figure of Speech",
    hindiMeaning: "काव्य की शोभा बढ़ाने वाला तत्व",
    category: "Literature",
    description: "अलंकार भाषा और काव्य की सुंदरता बढ़ाता है।"
  },
  {
    sanskritWord: "रस",
    transliteration: "Rasa",
    englishMeaning: "Aesthetic Emotion",
    hindiMeaning: "काव्य का भाव",
    category: "Literature",
    description: "रस भारतीय काव्यशास्त्र में सौंदर्य अनुभव का आधार है।"
  },
  {
    sanskritWord: "नायक",
    transliteration: "Nayaka",
    englishMeaning: "Hero",
    hindiMeaning: "नायक",
    category: "Literature",
    description: "नायक कथा या नाटक का प्रमुख पुरुष पात्र होता है।"
  },
  {
    sanskritWord: "नायिका",
    transliteration: "Nayika",
    englishMeaning: "Heroine",
    hindiMeaning: "नायिका",
    category: "Literature",
    description: "नायिका कथा या नाटक का प्रमुख स्त्री पात्र होती है।"
  },
  {
    sanskritWord: "संवाद",
    transliteration: "Samvada",
    englishMeaning: "Dialogue",
    hindiMeaning: "बातचीत",
    category: "Literature",
    description: "संवाद दो या अधिक पात्रों के बीच वार्तालाप है।"
  },

    // Indian History
  {
    sanskritWord: "इतिहास",
    transliteration: "Itihasa",
    englishMeaning: "History",
    hindiMeaning: "इतिहास",
    category: "History",
    description: "इतिहास अतीत की घटनाओं का अध्ययन है।"
  },
  {
    sanskritWord: "पुराण",
    transliteration: "Purana",
    englishMeaning: "Ancient Narrative",
    hindiMeaning: "प्राचीन ग्रंथ",
    category: "History",
    description: "पुराण भारतीय परंपरा के प्राचीन साहित्यिक ग्रंथ हैं।"
  },
  {
    sanskritWord: "वंशावली",
    transliteration: "Vamshavali",
    englishMeaning: "Genealogy",
    hindiMeaning: "वंश का विवरण",
    category: "History",
    description: "वंशावली किसी परिवार या राजवंश की पीढ़ियों का विवरण है।"
  },
  {
    sanskritWord: "अभिलेख",
    transliteration: "Abhilekha",
    englishMeaning: "Inscription",
    hindiMeaning: "शिलालेख या लिखित रिकॉर्ड",
    category: "History",
    description: "अभिलेख किसी ऐतिहासिक घटना का लिखित प्रमाण होता है।"
  },
  {
    sanskritWord: "ताम्रपत्र",
    transliteration: "Tamrapatra",
    englishMeaning: "Copper Plate Record",
    hindiMeaning: "तांबे की पट्टिका",
    category: "History",
    description: "ताम्रपत्र पर प्राचीन समय में महत्वपूर्ण घोषणाएँ लिखी जाती थीं।"
  },
  {
    sanskritWord: "शिलालेख",
    transliteration: "Shilalekh",
    englishMeaning: "Stone Inscription",
    hindiMeaning: "पत्थर पर लिखा लेख",
    category: "History",
    description: "शिलालेख पत्थर पर उत्कीर्ण ऐतिहासिक लेख होता है।"
  },
  {
    sanskritWord: "राजवंश",
    transliteration: "Rajavamsha",
    englishMeaning: "Dynasty",
    hindiMeaning: "राजाओं का वंश",
    category: "History",
    description: "राजवंश एक ही परिवार के शासकों की पीढ़ियों को दर्शाता है।"
  },
  {
    sanskritWord: "साम्राज्य",
    transliteration: "Samrajya",
    englishMeaning: "Empire",
    hindiMeaning: "विशाल राज्य",
    category: "History",
    description: "साम्राज्य अनेक क्षेत्रों में फैला हुआ बड़ा राज्य होता है।"
  },
  {
    sanskritWord: "आक्रमण",
    transliteration: "Akramaṇa",
    englishMeaning: "Invasion",
    hindiMeaning: "हमला",
    category: "History",
    description: "आक्रमण किसी क्षेत्र पर बलपूर्वक प्रवेश करना है।"
  },
  {
    sanskritWord: "सन्धि",
    transliteration: "Sandhi",
    englishMeaning: "Treaty or Agreement",
    hindiMeaning: "समझौता",
    category: "History",
    description: "राजनीतिक संदर्भ में सन्धि दो पक्षों के बीच समझौता है।"
  },

  // Indian Art
  {
    sanskritWord: "मूर्तिकला",
    transliteration: "Murtikala",
    englishMeaning: "Sculpture",
    hindiMeaning: "मूर्तियाँ बनाने की कला",
    category: "Art",
    description: "मूर्तिकला पत्थर, धातु या अन्य पदार्थों से आकृतियाँ बनाने की कला है।"
  },
  {
    sanskritWord: "चित्रकला",
    transliteration: "Chitrakala",
    englishMeaning: "Painting",
    hindiMeaning: "चित्र बनाने की कला",
    category: "Art",
    description: "चित्रकला रंगों और रेखाओं से दृश्य प्रस्तुत करने की कला है।"
  },
  {
    sanskritWord: "वर्णिका",
    transliteration: "Varnika",
    englishMeaning: "Pigment or Colouring Material",
    hindiMeaning: "रंग बनाने का पदार्थ",
    category: "Art",
    description: "वर्णिका चित्रकला में प्रयुक्त रंगद्रव्य को दर्शाती है।"
  },
  {
    sanskritWord: "प्रतिमा",
    transliteration: "Pratima",
    englishMeaning: "Image or Statue",
    hindiMeaning: "मूर्ति",
    category: "Art",
    description: "प्रतिमा किसी व्यक्ति या देवता की बनाई गई आकृति है।"
  },
  {
    sanskritWord: "आकृति",
    transliteration: "Akriti",
    englishMeaning: "Shape or Form",
    hindiMeaning: "आकार",
    category: "Art",
    description: "आकृति किसी वस्तु के बाहरी रूप को दर्शाती है।"
  },
  {
    sanskritWord: "अभिनय",
    transliteration: "Abhinaya",
    englishMeaning: "Acting",
    hindiMeaning: "अभिनय",
    category: "Art",
    description: "अभिनय भावों और क्रियाओं द्वारा किसी पात्र को प्रस्तुत करना है।"
  },
  {
    sanskritWord: "मुद्रा",
    transliteration: "Mudra",
    englishMeaning: "Gesture",
    hindiMeaning: "हाथों की विशेष मुद्रा",
    category: "Art",
    description: "भारतीय नृत्य और कला में मुद्रा विशेष शारीरिक संकेत है।"
  },
  {
    sanskritWord: "हस्तमुद्रा",
    transliteration: "Hastamudra",
    englishMeaning: "Hand Gesture",
    hindiMeaning: "हाथ का संकेत",
    category: "Art",
    description: "हस्तमुद्रा हाथों की विशेष स्थिति द्वारा भाव व्यक्त करती है।"
  },
  {
    sanskritWord: "रंगमञ्च",
    transliteration: "Rangamanca",
    englishMeaning: "Stage",
    hindiMeaning: "मंच",
    category: "Art",
    description: "रंगमञ्च नाटक और प्रदर्शन के लिए निर्धारित स्थान है।"
  },
  {
    sanskritWord: "वेशभूषा",
    transliteration: "Veshabhusha",
    englishMeaning: "Costume",
    hindiMeaning: "पोशाक",
    category: "Art",
    description: "वेशभूषा किसी पात्र या व्यक्ति की विशेष पोशाक है।"
  },

  // Social Life
  {
    sanskritWord: "कुटुम्ब",
    transliteration: "Kutumba",
    englishMeaning: "Family",
    hindiMeaning: "परिवार",
    category: "Social Studies",
    description: "कुटुम्ब परिवार के सदस्यों का समूह है।"
  },
  {
    sanskritWord: "मित्रता",
    transliteration: "Mitrata",
    englishMeaning: "Friendship",
    hindiMeaning: "दोस्ती",
    category: "Social Studies",
    description: "मित्रता दो या अधिक व्यक्तियों के बीच स्नेहपूर्ण संबंध है।"
  },
  {
    sanskritWord: "आतिथ्य",
    transliteration: "Atithya",
    englishMeaning: "Hospitality",
    hindiMeaning: "अतिथि सत्कार",
    category: "Social Studies",
    description: "आतिथ्य अतिथि का आदरपूर्वक स्वागत और सेवा करना है।"
  },
  {
    sanskritWord: "सहकार",
    transliteration: "Sahakara",
    englishMeaning: "Cooperation",
    hindiMeaning: "सहयोग",
    category: "Social Studies",
    description: "सहकार मिलकर किसी उद्देश्य को पूरा करने की भावना है।"
  },
  {
    sanskritWord: "समुदाय",
    transliteration: "Samudaya",
    englishMeaning: "Community",
    hindiMeaning: "समुदाय",
    category: "Social Studies",
    description: "समुदाय समान हितों वाले लोगों का समूह है।"
  },
  {
    sanskritWord: "लोकाचार",
    transliteration: "Lokachara",
    englishMeaning: "Social Custom",
    hindiMeaning: "सामाजिक रीति",
    category: "Social Studies",
    description: "लोकाचार समाज में प्रचलित व्यवहार और परंपराओं को कहते हैं।"
  },
  {
    sanskritWord: "जनपद",
    transliteration: "Janapada",
    englishMeaning: "Territorial Region",
    hindiMeaning: "प्राचीन क्षेत्र या राज्य",
    category: "Social Studies",
    description: "जनपद प्राचीन भारत की क्षेत्रीय राजनीतिक इकाई थी।"
  },
  {
    sanskritWord: "ग्राम",
    transliteration: "Grama",
    englishMeaning: "Village",
    hindiMeaning: "गाँव",
    category: "Social Studies",
    description: "ग्राम ग्रामीण निवास क्षेत्र को कहते हैं।"
  },
  {
    sanskritWord: "नगर",
    transliteration: "Nagara",
    englishMeaning: "Town or City",
    hindiMeaning: "शहर",
    category: "Social Studies",
    description: "नगर एक संगठित शहरी निवास क्षेत्र है।"
  },
  {
    sanskritWord: "नागरिक",
    transliteration: "Nagarika",
    englishMeaning: "Citizen",
    hindiMeaning: "नागरिक",
    category: "Social Studies",
    description: "नागरिक किसी राज्य या देश का सदस्य होता है।"
  },

  // Education and Learning
  {
    sanskritWord: "अध्ययन",
    transliteration: "Adhyayana",
    englishMeaning: "Study",
    hindiMeaning: "अध्ययन",
    category: "Education",
    description: "अध्ययन किसी विषय को व्यवस्थित रूप से सीखने की प्रक्रिया है।"
  },
  {
    sanskritWord: "अध्यापन",
    transliteration: "Adhyapana",
    englishMeaning: "Teaching",
    hindiMeaning: "पढ़ाना",
    category: "Education",
    description: "अध्यापन विद्यार्थियों को ज्ञान प्रदान करने की प्रक्रिया है।"
  },
  {
    sanskritWord: "पाठ्यक्रम",
    transliteration: "Pathyakrama",
    englishMeaning: "Curriculum",
    hindiMeaning: "पढ़ाई का निर्धारित क्रम",
    category: "Education",
    description: "पाठ्यक्रम किसी शैक्षणिक कार्यक्रम के विषयों का विवरण है।"
  },
  {
    sanskritWord: "पाठशाला",
    transliteration: "Pathashala",
    englishMeaning: "School",
    hindiMeaning: "विद्यालय",
    category: "Education",
    description: "पाठशाला शिक्षा प्राप्त करने का स्थान है।"
  },
  {
    sanskritWord: "गुरुकुल",
    transliteration: "Gurukula",
    englishMeaning: "Traditional Learning Centre",
    hindiMeaning: "प्राचीन शिक्षा केंद्र",
    category: "Education",
    description: "गुरुकुल में विद्यार्थी गुरु के मार्गदर्शन में शिक्षा प्राप्त करते थे।"
  },
  {
    sanskritWord: "प्रवचन",
    transliteration: "Pravachana",
    englishMeaning: "Discourse",
    hindiMeaning: "व्याख्यान",
    category: "Education",
    description: "प्रवचन किसी विषय पर दिया गया व्यवस्थित भाषण है।"
  },
  {
    sanskritWord: "व्याख्या",
    transliteration: "Vyakhya",
    englishMeaning: "Explanation",
    hindiMeaning: "स्पष्टीकरण",
    category: "Education",
    description: "व्याख्या किसी विषय के अर्थ को स्पष्ट करती है।"
  },
  {
    sanskritWord: "सन्दर्भ",
    transliteration: "Sandarbha",
    englishMeaning: "Reference or Context",
    hindiMeaning: "संदर्भ",
    category: "Education",
    description: "सन्दर्भ किसी विषय से संबंधित पृष्ठभूमि या स्रोत है।"
  },
  {
    sanskritWord: "अनुसन्धान",
    transliteration: "Anusandhana",
    englishMeaning: "Research",
    hindiMeaning: "शोध",
    category: "Education",
    description: "अनुसन्धान नई जानकारी प्राप्त करने की व्यवस्थित प्रक्रिया है।"
  },
  {
    sanskritWord: "प्रबन्ध",
    transliteration: "Prabandha",
    englishMeaning: "Management or Composition",
    hindiMeaning: "प्रबंधन",
    category: "Education",
    description: "प्रबन्ध किसी कार्य या विषय की व्यवस्थित व्यवस्था है।"
  },

  // Environment
  {
    sanskritWord: "प्रकृति",
    transliteration: "Prakriti",
    englishMeaning: "Nature",
    hindiMeaning: "प्रकृति",
    category: "Environment",
    description: "प्रकृति में पृथ्वी, जल, वायु, वनस्पति और जीव शामिल हैं।"
  },
  {
    sanskritWord: "जैवविविधता",
    transliteration: "Jaivavividhta",
    englishMeaning: "Biodiversity",
    hindiMeaning: "जैव विविधता",
    category: "Environment",
    description: "जैवविविधता किसी क्षेत्र में पाए जाने वाले जीवों की विविधता है।"
  },
  {
    sanskritWord: "वनस्पति",
    transliteration: "Vanas pati",
    englishMeaning: "Vegetation",
    hindiMeaning: "पेड़-पौधे",
    category: "Environment",
    description: "वनस्पति किसी क्षेत्र में पाए जाने वाले पौधों का समूह है।"
  },
  {
    sanskritWord: "प्रदूषण",
    transliteration: "Pradushana",
    englishMeaning: "Pollution",
    hindiMeaning: "प्रदूषण",
    category: "Environment",
    description: "प्रदूषण पर्यावरण में हानिकारक पदार्थों का प्रवेश है।"
  },
  {
    sanskritWord: "संरक्षण",
    transliteration: "Sanrakshana",
    englishMeaning: "Conservation",
    hindiMeaning: "सुरक्षा और संरक्षण",
    category: "Environment",
    description: "संरक्षण प्राकृतिक संसाधनों को सुरक्षित रखने की प्रक्रिया है।"
  },
  {
    sanskritWord: "जलवायु",
    transliteration: "Jalavayu",
    englishMeaning: "Climate",
    hindiMeaning: "जलवायु",
    category: "Environment",
    description: "जलवायु किसी क्षेत्र की दीर्घकालीन मौसमी परिस्थितियाँ हैं।"
  },
  {
    sanskritWord: "पारिस्थितिकीतन्त्र",
    transliteration: "Paristhitiki Tantra",
    englishMeaning: "Ecosystem",
    hindiMeaning: "पारिस्थितिकी तंत्र",
    category: "Environment",
    description: "पारिस्थितिकीतन्त्र जीवों और उनके पर्यावरण की परस्पर क्रिया से बनता है।"
  },
  {
    sanskritWord: "भूमिक्षरण",
    transliteration: "Bhumiksharana",
    englishMeaning: "Soil Erosion",
    hindiMeaning: "मिट्टी का कटाव",
    category: "Environment",
    description: "भूमिक्षरण में मिट्टी की ऊपरी परत हट जाती है।"
  },
  {
    sanskritWord: "वनीकरण",
    transliteration: "Vanikarana",
    englishMeaning: "Afforestation",
    hindiMeaning: "पेड़ लगाना",
    category: "Environment",
    description: "वनीकरण किसी क्षेत्र में वृक्ष लगाने की प्रक्रिया है।"
  },
  {
    sanskritWord: "नवीकरणीय",
    transliteration: "Navikaraniya",
    englishMeaning: "Renewable",
    hindiMeaning: "नवीकरण किया जा सकने वाला",
    category: "Environment",
    description: "नवीकरणीय संसाधन प्राकृतिक रूप से फिर से उपलब्ध हो सकते हैं।"
  },

  // Medicine and Health
  {
    sanskritWord: "आहार",
    transliteration: "Ahara",
    englishMeaning: "Diet or Food",
    hindiMeaning: "भोजन",
    category: "Health",
    description: "आहार शरीर को पोषण देने वाला भोजन है।"
  },
  {
    sanskritWord: "निद्रा",
    transliteration: "Nidra",
    englishMeaning: "Sleep",
    hindiMeaning: "नींद",
    category: "Health",
    description: "निद्रा शरीर और मन के विश्राम की प्राकृतिक अवस्था है।"
  },
  {
    sanskritWord: "व्यायाम",
    transliteration: "Vyayama",
    englishMeaning: "Exercise",
    hindiMeaning: "कसरत",
    category: "Health",
    description: "व्यायाम शरीर को सक्रिय और स्वस्थ रखने की गतिविधि है।"
  },
  {
    sanskritWord: "आरोग्य",
    transliteration: "Arogya",
    englishMeaning: "Good Health",
    hindiMeaning: "स्वस्थता",
    category: "Health",
    description: "आरोग्य रोग से मुक्त और स्वस्थ रहने की अवस्था है।"
  },
  {
    sanskritWord: "व्याधि",
    transliteration: "Vyadhi",
    englishMeaning: "Disease",
    hindiMeaning: "रोग",
    category: "Health",
    description: "व्याधि शरीर या मन की सामान्य कार्यप्रणाली में विकार है।"
  },
  {
    sanskritWord: "ज्वर",
    transliteration: "Jvara",
    englishMeaning: "Fever",
    hindiMeaning: "बुखार",
    category: "Health",
    description: "ज्वर शरीर के तापमान में सामान्य से अधिक वृद्धि है।"
  },
  {
    sanskritWord: "क्षुधा",
    transliteration: "Kshudha",
    englishMeaning: "Hunger",
    hindiMeaning: "भूख",
    category: "Health",
    description: "क्षुधा भोजन की आवश्यकता का अनुभव है।"
  },
  {
    sanskritWord: "तृष्णा",
    transliteration: "Trishna",
    englishMeaning: "Thirst",
    hindiMeaning: "प्यास",
    category: "Health",
    description: "तृष्णा शरीर में जल की आवश्यकता का अनुभव है।"
  },
  {
    sanskritWord: "स्वच्छता",
    transliteration: "Swachhata",
    englishMeaning: "Cleanliness",
    hindiMeaning: "साफ-सफाई",
    category: "Health",
    description: "स्वच्छता स्वास्थ्य बनाए रखने के लिए आवश्यक है।"
  },
  {
    sanskritWord: "पोषण",
    transliteration: "Poshana",
    englishMeaning: "Nutrition",
    hindiMeaning: "पोषण",
    category: "Health",
    description: "पोषण शरीर को आवश्यक तत्व प्रदान करने की प्रक्रिया है।"
  },

  // Ethics
  {
    sanskritWord: "सत्य",
    transliteration: "Satya",
    englishMeaning: "Truth",
    hindiMeaning: "सच",
    category: "Ethics",
    description: "सत्य वास्तविकता और सच्चाई को दर्शाता है।"
  },
  {
    sanskritWord: "अहिंसा",
    transliteration: "Ahimsa",
    englishMeaning: "Non-violence",
    hindiMeaning: "हिंसा न करना",
    category: "Ethics",
    description: "अहिंसा किसी भी जीव को कष्ट न पहुँचाने का सिद्धांत है।"
  },
  {
    sanskritWord: "अस्तेय",
    transliteration: "Asteya",
    englishMeaning: "Non-stealing",
    hindiMeaning: "चोरी न करना",
    category: "Ethics",
    description: "अस्तेय का अर्थ दूसरों की वस्तु अनुचित रूप से न लेना है।"
  },
  {
    sanskritWord: "अपरिग्रह",
    transliteration: "Aparigraha",
    englishMeaning: "Non-possession",
    hindiMeaning: "अनावश्यक संग्रह न करना",
    category: "Ethics",
    description: "अपरिग्रह आवश्यकता से अधिक संग्रह न करने का सिद्धांत है।"
  },
  {
    sanskritWord: "करुणा",
    transliteration: "Karuna",
    englishMeaning: "Compassion",
    hindiMeaning: "दया",
    category: "Ethics",
    description: "करुणा दूसरों के दुःख को समझकर सहायता करने की भावना है।"
  },
  {
    sanskritWord: "मैत्री",
    transliteration: "Maitri",
    englishMeaning: "Friendliness",
    hindiMeaning: "मित्रभाव",
    category: "Ethics",
    description: "मैत्री सभी के प्रति मित्रतापूर्ण व्यवहार की भावना है।"
  },
  {
    sanskritWord: "क्षमा",
    transliteration: "Kshama",
    englishMeaning: "Forgiveness",
    hindiMeaning: "माफ करना",
    category: "Ethics",
    description: "क्षमा दूसरों की गलतियों को सहन करने और माफ करने का गुण है।"
  },
  {
    sanskritWord: "दान",
    transliteration: "Dana",
    englishMeaning: "Charity",
    hindiMeaning: "दान",
    category: "Ethics",
    description: "दान बिना स्वार्थ के किसी को वस्तु या सहायता देना है।"
  },
  {
    sanskritWord: "तपस्",
    transliteration: "Tapas",
    englishMeaning: "Austerity",
    hindiMeaning: "तपस्या",
    category: "Ethics",
    description: "तपस् अनुशासन और आत्मसंयम का अभ्यास है।"
  },
  {
    sanskritWord: "ब्रह्मचर्य",
    transliteration: "Brahmacharya",
    englishMeaning: "Self-discipline",
    hindiMeaning: "संयम",
    category: "Ethics",
    description: "ब्रह्मचर्य आत्मसंयम और अनुशासित जीवन का सिद्धांत है।"
  },

  // Communication
  {
    sanskritWord: "भाषा",
    transliteration: "Bhasha",
    englishMeaning: "Language",
    hindiMeaning: "भाषा",
    category: "Communication",
    description: "भाषा विचारों और भावनाओं को व्यक्त करने का माध्यम है।"
  },
  {
    sanskritWord: "वाणी",
    transliteration: "Vani",
    englishMeaning: "Speech",
    hindiMeaning: "बोली",
    category: "Communication",
    description: "वाणी बोलकर विचार व्यक्त करने की क्षमता है।"
  },
  {
    sanskritWord: "श्रवण",
    transliteration: "Shravana",
    englishMeaning: "Listening",
    hindiMeaning: "सुनना",
    category: "Communication",
    description: "श्रवण ध्वनि और कथन को सुनने की प्रक्रिया है।"
  },
  {
    sanskritWord: "उच्चारण",
    transliteration: "Uccharana",
    englishMeaning: "Pronunciation",
    hindiMeaning: "बोलने का तरीका",
    category: "Communication",
    description: "उच्चारण शब्दों और ध्वनियों को बोलने की विधि है।"
  },
  {
    sanskritWord: "लिपि",
    transliteration: "Lipi",
    englishMeaning: "Script",
    hindiMeaning: "लिखने की प्रणाली",
    category: "Communication",
    description: "लिपि भाषा को लिखित रूप में प्रस्तुत करने की प्रणाली है।"
  },
  {
    sanskritWord: "अक्षर",
    transliteration: "Akshara",
    englishMeaning: "Syllable or Letter",
    hindiMeaning: "अक्षर",
    category: "Communication",
    description: "अक्षर भाषा की लिखित या ध्वन्यात्मक इकाई है।"
  },
  {
    sanskritWord: "पद",
    transliteration: "Pada",
    englishMeaning: "Word",
    hindiMeaning: "शब्द",
    category: "Communication",
    description: "पद वाक्य में प्रयुक्त अर्थपूर्ण भाषाई इकाई है।"
  },
  {
    sanskritWord: "वाक्य",
    transliteration: "Vakya",
    englishMeaning: "Sentence",
    hindiMeaning: "वाक्य",
    category: "Communication",
    description: "वाक्य शब्दों का ऐसा समूह है जो पूर्ण अर्थ देता है।"
  },
  {
    sanskritWord: "अर्थ",
    transliteration: "Artha",
    englishMeaning: "Meaning",
    hindiMeaning: "मतलब",
    category: "Communication",
    description: "अर्थ किसी शब्द या वाक्य का भाव है।"
  },
  {
    sanskritWord: "अनुवाद",
    transliteration: "Anuvada",
    englishMeaning: "Translation",
    hindiMeaning: "भाषांतरण",
    category: "Communication",
    description: "अनुवाद एक भाषा के विचारों को दूसरी भाषा में व्यक्त करना है।"
  },

    // Ayurveda and Medicinal Plants
  {
    sanskritWord: "हरिद्रा",
    transliteration: "Haridra",
    englishMeaning: "Turmeric",
    hindiMeaning: "हल्दी",
    category: "Ayurveda",
    description: "हरिद्रा एक प्रसिद्ध औषधीय वनस्पति है।"
  },
  {
    sanskritWord: "आमलकी",
    transliteration: "Amalaki",
    englishMeaning: "Indian Gooseberry",
    hindiMeaning: "आँवला",
    category: "Ayurveda",
    description: "आमलकी आयुर्वेद में प्रयुक्त एक फल है।"
  },
  {
    sanskritWord: "निम्ब",
    transliteration: "Nimba",
    englishMeaning: "Neem",
    hindiMeaning: "नीम",
    category: "Ayurveda",
    description: "निम्ब एक प्रसिद्ध औषधीय वृक्ष है।"
  },
  {
    sanskritWord: "तुलसी",
    transliteration: "Tulasi",
    englishMeaning: "Holy Basil",
    hindiMeaning: "तुलसी",
    category: "Ayurveda",
    description: "तुलसी भारतीय परंपरा में महत्वपूर्ण औषधीय पौधा है।"
  },
  {
    sanskritWord: "गुडूची",
    transliteration: "Guduchi",
    englishMeaning: "Tinospora Cordifolia",
    hindiMeaning: "गिलोय",
    category: "Ayurveda",
    description: "गुडूची आयुर्वेदिक साहित्य में वर्णित औषधीय लता है।"
  },
  {
    sanskritWord: "यष्टिमधु",
    transliteration: "Yashtimadhu",
    englishMeaning: "Liquorice",
    hindiMeaning: "मुलेठी",
    category: "Ayurveda",
    description: "यष्टिमधु एक पारंपरिक औषधीय वनस्पति है।"
  },
  {
    sanskritWord: "शुण्ठी",
    transliteration: "Shunthi",
    englishMeaning: "Dry Ginger",
    hindiMeaning: "सोंठ",
    category: "Ayurveda",
    description: "शुण्ठी सूखी अदरक को कहते हैं।"
  },
  {
    sanskritWord: "पिप्पली",
    transliteration: "Pippali",
    englishMeaning: "Long Pepper",
    hindiMeaning: "पीपली",
    category: "Ayurveda",
    description: "पिप्पली आयुर्वेद में वर्णित एक औषधीय फल है।"
  },
  {
    sanskritWord: "अश्वगन्धा",
    transliteration: "Ashwagandha",
    englishMeaning: "Ashwagandha",
    hindiMeaning: "अश्वगंधा",
    category: "Ayurveda",
    description: "अश्वगन्धा आयुर्वेदिक परंपरा में प्रयुक्त वनस्पति है।"
  },
  {
    sanskritWord: "शतावरी",
    transliteration: "Shatavari",
    englishMeaning: "Asparagus Racemosus",
    hindiMeaning: "शतावरी",
    category: "Ayurveda",
    description: "शतावरी एक पारंपरिक औषधीय पौधा है।"
  },

  // Traditional Medicine
  {
    sanskritWord: "भेषज",
    transliteration: "Bheshaja",
    englishMeaning: "Medicine or Remedy",
    hindiMeaning: "औषधि",
    category: "Medicine",
    description: "भेषज रोग के उपचार में प्रयुक्त औषधि को कहते हैं।"
  },
  {
    sanskritWord: "चिकित्सक",
    transliteration: "Chikitsaka",
    englishMeaning: "Physician",
    hindiMeaning: "चिकित्सक",
    category: "Medicine",
    description: "चिकित्सक रोगों की पहचान और उपचार करता है।"
  },
  {
    sanskritWord: "चिकित्सा",
    transliteration: "Chikitsa",
    englishMeaning: "Medical Treatment",
    hindiMeaning: "उपचार",
    category: "Medicine",
    description: "चिकित्सा रोगों के उपचार की प्रक्रिया है।"
  },
  {
    sanskritWord: "शल्यचिकित्सा",
    transliteration: "Shalyachikitsa",
    englishMeaning: "Surgery",
    hindiMeaning: "शल्य चिकित्सा",
    category: "Medicine",
    description: "शल्यचिकित्सा शरीर पर की जाने वाली चिकित्सकीय प्रक्रिया है।"
  },
  {
    sanskritWord: "रोगी",
    transliteration: "Rogi",
    englishMeaning: "Patient",
    hindiMeaning: "मरीज",
    category: "Medicine",
    description: "रोगी वह व्यक्ति है जो किसी रोग से प्रभावित हो।"
  },
  {
    sanskritWord: "उपचार",
    transliteration: "Upachara",
    englishMeaning: "Treatment",
    hindiMeaning: "इलाज",
    category: "Medicine",
    description: "उपचार रोग या समस्या को दूर करने का उपाय है।"
  },
  {
    sanskritWord: "औषधालय",
    transliteration: "Aushadhalaya",
    englishMeaning: "Dispensary",
    hindiMeaning: "औषधि केंद्र",
    category: "Medicine",
    description: "औषधालय वह स्थान है जहाँ औषधियाँ उपलब्ध होती हैं।"
  },
  {
    sanskritWord: "रक्त",
    transliteration: "Rakta",
    englishMeaning: "Blood",
    hindiMeaning: "खून",
    category: "Medicine",
    description: "रक्त शरीर में पदार्थों का परिवहन करता है।"
  },
  {
    sanskritWord: "नाडी",
    transliteration: "Nadi",
    englishMeaning: "Pulse",
    hindiMeaning: "नाड़ी",
    category: "Medicine",
    description: "नाड़ी की गति शरीर की धड़कन से संबंधित होती है।"
  },
  {
    sanskritWord: "शरीर",
    transliteration: "Sharira",
    englishMeaning: "Body",
    hindiMeaning: "शरीर",
    category: "Medicine",
    description: "शरीर जीव की भौतिक संरचना है।"
  },

  // Indian Architecture
  {
    sanskritWord: "वास्तुशास्त्र",
    transliteration: "Vastushastra",
    englishMeaning: "Traditional Architecture",
    hindiMeaning: "वास्तु विद्या",
    category: "Architecture",
    description: "वास्तुशास्त्र भवन और स्थान व्यवस्था का पारंपरिक अध्ययन है।"
  },
  {
    sanskritWord: "मन्दिर",
    transliteration: "Mandira",
    englishMeaning: "Temple",
    hindiMeaning: "मंदिर",
    category: "Architecture",
    description: "मन्दिर पूजा और धार्मिक गतिविधियों का स्थान है।"
  },
  {
    sanskritWord: "गोपुर",
    transliteration: "Gopura",
    englishMeaning: "Temple Gateway Tower",
    hindiMeaning: "मंदिर का प्रवेश द्वार",
    category: "Architecture",
    description: "गोपुर दक्षिण भारतीय मंदिरों का विशाल प्रवेश द्वार है।"
  },
  {
    sanskritWord: "वेदिका",
    transliteration: "Vedika",
    englishMeaning: "Platform or Altar",
    hindiMeaning: "चबूतरा या वेदी",
    category: "Architecture",
    description: "वेदिका एक ऊँचा चबूतरा या अनुष्ठान स्थल हो सकती है।"
  },
  {
    sanskritWord: "प्राकार",
    transliteration: "Prakara",
    englishMeaning: "Enclosure Wall",
    hindiMeaning: "परकोटा",
    category: "Architecture",
    description: "प्राकार किसी भवन या मंदिर के चारों ओर बनी दीवार है।"
  },
  {
    sanskritWord: "वातायन",
    transliteration: "Vatayana",
    englishMeaning: "Window",
    hindiMeaning: "खिड़की",
    category: "Architecture",
    description: "वातायन भवन में प्रकाश और वायु आने का मार्ग है।"
  },
  {
    sanskritWord: "द्वार",
    transliteration: "Dvara",
    englishMeaning: "Door or Gate",
    hindiMeaning: "दरवाजा",
    category: "Architecture",
    description: "द्वार किसी भवन में प्रवेश और निकास का मार्ग है।"
  },
  {
    sanskritWord: "सोपान",
    transliteration: "Sopana",
    englishMeaning: "Staircase",
    hindiMeaning: "सीढ़ी",
    category: "Architecture",
    description: "सोपान ऊँचाई पर जाने के लिए बनी सीढ़ियों की व्यवस्था है।"
  },
  {
    sanskritWord: "छद",
    transliteration: "Chhada",
    englishMeaning: "Roof or Covering",
    hindiMeaning: "छत या आवरण",
    category: "Architecture",
    description: "छद भवन के ऊपरी आवरण को दर्शाता है।"
  },
  {
    sanskritWord: "भूमि",
    transliteration: "Bhumi",
    englishMeaning: "Land or Ground",
    hindiMeaning: "जमीन",
    category: "Architecture",
    description: "भूमि भवन निर्माण का आधार है।"
  },

  // Philosophy
  {
    sanskritWord: "दर्शन",
    transliteration: "Darshana",
    englishMeaning: "Philosophical System",
    hindiMeaning: "दर्शन",
    category: "Philosophy",
    description: "दर्शन जीवन और वास्तविकता से जुड़े मूल प्रश्नों का अध्ययन है।"
  },
  {
    sanskritWord: "तत्त्वज्ञान",
    transliteration: "Tattvajnana",
    englishMeaning: "Knowledge of Reality",
    hindiMeaning: "तत्वों का ज्ञान",
    category: "Philosophy",
    description: "तत्त्वज्ञान वास्तविकता के मूल स्वरूप का ज्ञान है।"
  },
  {
    sanskritWord: "माया",
    transliteration: "Maya",
    englishMeaning: "Illusion",
    hindiMeaning: "भ्रम या माया",
    category: "Philosophy",
    description: "माया भारतीय दर्शन में जगत की अनुभूति से जुड़ी अवधारणा है।"
  },
  {
    sanskritWord: "अविद्या",
    transliteration: "Avidya",
    englishMeaning: "Ignorance",
    hindiMeaning: "अज्ञान",
    category: "Philosophy",
    description: "अविद्या वास्तविकता के सही ज्ञान का अभाव है।"
  },
  {
    sanskritWord: "विद्वत्ता",
    transliteration: "Vidvatta",
    englishMeaning: "Scholarship",
    hindiMeaning: "विद्वत्ता",
    category: "Philosophy",
    description: "विद्वत्ता गहन अध्ययन और ज्ञान की अवस्था है।"
  },
  {
    sanskritWord: "अनित्य",
    transliteration: "Anitya",
    englishMeaning: "Impermanent",
    hindiMeaning: "नश्वर",
    category: "Philosophy",
    description: "अनित्य वह है जो स्थायी नहीं है।"
  },
  {
    sanskritWord: "नित्य",
    transliteration: "Nitya",
    englishMeaning: "Eternal",
    hindiMeaning: "शाश्वत",
    category: "Philosophy",
    description: "नित्य वह है जिसे स्थायी या निरंतर माना जाता है।"
  },
  {
    sanskritWord: "शून्यता",
    transliteration: "Shunyata",
    englishMeaning: "Emptiness",
    hindiMeaning: "शून्यता",
    category: "Philosophy",
    description: "शून्यता बौद्ध दर्शन की एक महत्वपूर्ण अवधारणा है।"
  },
  {
    sanskritWord: "द्वैतवाद",
    transliteration: "Dvaitavada",
    englishMeaning: "Dualism",
    hindiMeaning: "द्वैतवाद",
    category: "Philosophy",
    description: "द्वैतवाद दो मूल वास्तविकताओं के अस्तित्व को स्वीकार करता है।"
  },
  {
    sanskritWord: "अद्वैतवाद",
    transliteration: "Advaitavada",
    englishMeaning: "Non-dualism",
    hindiMeaning: "अद्वैतवाद",
    category: "Philosophy",
    description: "अद्वैतवाद अंतिम वास्तविकता की एकता पर बल देता है।"
  },

  // Astronomy
  {
    sanskritWord: "सौरमण्डल",
    transliteration: "Sauramandala",
    englishMeaning: "Solar System",
    hindiMeaning: "सौरमंडल",
    category: "Astronomy",
    description: "सौरमण्डल सूर्य और उसके चारों ओर घूमने वाले पिंडों का समूह है।"
  },
  {
    sanskritWord: "आकाशगङ्गा",
    transliteration: "Akashaganga",
    englishMeaning: "Milky Way",
    hindiMeaning: "आकाशगंगा",
    category: "Astronomy",
    description: "आकाशगङ्गा हमारी आकाशगंगा का पारंपरिक नाम है।"
  },
  {
    sanskritWord: "नभ",
    transliteration: "Nabha",
    englishMeaning: "Sky or Space",
    hindiMeaning: "आकाश",
    category: "Astronomy",
    description: "नभ आकाश या अंतरिक्ष को दर्शाता है।"
  },
  {
    sanskritWord: "खगोल",
    transliteration: "Khagola",
    englishMeaning: "Celestial Sphere",
    hindiMeaning: "खगोलीय क्षेत्र",
    category: "Astronomy",
    description: "खगोल आकाशीय पिंडों के अध्ययन से संबंधित है।"
  },
  {
    sanskritWord: "सूर्यग्रहण",
    transliteration: "Suryagrahana",
    englishMeaning: "Solar Eclipse",
    hindiMeaning: "सूर्य ग्रहण",
    category: "Astronomy",
    description: "सूर्यग्रहण तब होता है जब चन्द्रमा सूर्य और पृथ्वी के बीच आता है।"
  },
  {
    sanskritWord: "चन्द्रग्रहण",
    transliteration: "Chandragrahana",
    englishMeaning: "Lunar Eclipse",
    hindiMeaning: "चंद्र ग्रहण",
    category: "Astronomy",
    description: "चन्द्रग्रहण तब होता है जब पृथ्वी की छाया चन्द्रमा पर पड़ती है।"
  },
  {
    sanskritWord: "नक्षत्रमाला",
    transliteration: "Nakshatramala",
    englishMeaning: "Collection of Constellations",
    hindiMeaning: "नक्षत्रों का समूह",
    category: "Astronomy",
    description: "नक्षत्रमाला नक्षत्रों के समूह या क्रम को दर्शाती है।"
  },
  {
    sanskritWord: "सूर्योदय",
    transliteration: "Suryodaya",
    englishMeaning: "Sunrise",
    hindiMeaning: "सूर्योदय",
    category: "Astronomy",
    description: "सूर्योदय वह समय है जब सूर्य क्षितिज पर दिखाई देता है।"
  },
  {
    sanskritWord: "सूर्यास्त",
    transliteration: "Suryasta",
    englishMeaning: "Sunset",
    hindiMeaning: "सूर्यास्त",
    category: "Astronomy",
    description: "सूर्यास्त वह समय है जब सूर्य क्षितिज के नीचे जाता है।"
  },
  {
    sanskritWord: "चन्द्रकला",
    transliteration: "Chandrakala",
    englishMeaning: "Lunar Phase",
    hindiMeaning: "चंद्रमा की कला",
    category: "Astronomy",
    description: "चन्द्रकला चन्द्रमा के प्रकाशित भाग की अवस्था को दर्शाती है।"
  },

  // Mathematics
  {
    sanskritWord: "बीजगणित",
    transliteration: "Bijaganita",
    englishMeaning: "Algebra",
    hindiMeaning: "बीजगणित",
    category: "Mathematics",
    description: "बीजगणित संख्याओं और अज्ञात राशियों का अध्ययन है।"
  },
  {
    sanskritWord: "अंकगणित",
    transliteration: "Ankaganita",
    englishMeaning: "Arithmetic",
    hindiMeaning: "अंकगणित",
    category: "Mathematics",
    description: "अंकगणित संख्याओं पर मूल गणितीय क्रियाओं का अध्ययन है।"
  },
  {
    sanskritWord: "गुणोत्तर",
    transliteration: "Gunottara",
    englishMeaning: "Geometric Ratio",
    hindiMeaning: "गुणोत्तर अनुपात",
    category: "Mathematics",
    description: "गुणोत्तर दो राशियों के भागफल से संबंधित है।"
  },
  {
    sanskritWord: "समानुपात",
    transliteration: "Samanupata",
    englishMeaning: "Proportion",
    hindiMeaning: "समानुपात",
    category: "Mathematics",
    description: "समानुपात दो अनुपातों की समानता है।"
  },
  {
    sanskritWord: "परिमिति",
    transliteration: "Parimiti",
    englishMeaning: "Measurement",
    hindiMeaning: "मापन",
    category: "Mathematics",
    description: "परिमिति किसी राशि का माप निर्धारित करने की प्रक्रिया है।"
  },
  {
    sanskritWord: "अनुपात",
    transliteration: "Anupata",
    englishMeaning: "Ratio",
    hindiMeaning: "अनुपात",
    category: "Mathematics",
    description: "अनुपात दो समान प्रकार की राशियों की तुलना है।"
  },
  {
    sanskritWord: "औसत",
    transliteration: "Ausata",
    englishMeaning: "Average",
    hindiMeaning: "औसत",
    category: "Mathematics",
    description: "औसत संख्याओं के योग को उनकी संख्या से भाग देने पर मिलता है।"
  },
  {
    sanskritWord: "क्रमचय",
    transliteration: "Kramachaya",
    englishMeaning: "Permutation",
    hindiMeaning: "क्रमचय",
    category: "Mathematics",
    description: "क्रमचय वस्तुओं को अलग-अलग क्रम में व्यवस्थित करने के तरीके हैं।"
  },
  {
    sanskritWord: "संचय",
    transliteration: "Sanchaya",
    englishMeaning: "Combination",
    hindiMeaning: "संचय",
    category: "Mathematics",
    description: "संचय में वस्तुओं का चयन किया जाता है और क्रम महत्वपूर्ण नहीं होता।"
  },
  {
    sanskritWord: "अनन्त",
    transliteration: "Ananta",
    englishMeaning: "Infinity",
    hindiMeaning: "अनंत",
    category: "Mathematics",
    description: "अनन्त ऐसी मात्रा है जिसकी कोई निश्चित सीमा नहीं होती।"
  },

  // Indian Philosophy and Ethics
  {
    sanskritWord: "धर्ममार्ग",
    transliteration: "Dharmamarga",
    englishMeaning: "Path of Righteousness",
    hindiMeaning: "धर्म का मार्ग",
    category: "Ethics",
    description: "धर्ममार्ग उचित आचरण और कर्तव्य का मार्ग है।"
  },
  {
    sanskritWord: "सदाचार",
    transliteration: "Sadachara",
    englishMeaning: "Good Conduct",
    hindiMeaning: "अच्छा आचरण",
    category: "Ethics",
    description: "सदाचार नैतिक और उचित व्यवहार को कहते हैं।"
  },
  {
    sanskritWord: "परहित",
    transliteration: "Parahita",
    englishMeaning: "Welfare of Others",
    hindiMeaning: "दूसरों का कल्याण",
    category: "Ethics",
    description: "परहित दूसरों के लाभ और कल्याण के लिए कार्य करना है।"
  },
  {
    sanskritWord: "लोकहित",
    transliteration: "Lokahita",
    englishMeaning: "Public Welfare",
    hindiMeaning: "जनकल्याण",
    category: "Ethics",
    description: "लोकहित समाज के सभी लोगों के कल्याण से संबंधित है।"
  },
  {
    sanskritWord: "आत्मसंयम",
    transliteration: "Atmasamyama",
    englishMeaning: "Self-control",
    hindiMeaning: "आत्म नियंत्रण",
    category: "Ethics",
    description: "आत्मसंयम अपनी इच्छाओं और व्यवहार पर नियंत्रण रखना है।"
  },
  {
    sanskritWord: "सत्यनिष्ठा",
    transliteration: "Satyanishtha",
    englishMeaning: "Integrity",
    hindiMeaning: "सच्चाई के प्रति निष्ठा",
    category: "Ethics",
    description: "सत्यनिष्ठा सत्य और ईमानदारी के प्रति दृढ़ रहना है।"
  },
  {
    sanskritWord: "परमार्थ",
    transliteration: "Paramartha",
    englishMeaning: "Supreme Purpose or Welfare",
    hindiMeaning: "उच्च उद्देश्य या परोपकार",
    category: "Ethics",
    description: "परमार्थ स्वार्थ से ऊपर उठकर दूसरों के हित में कार्य करना है।"
  },
  {
    sanskritWord: "विनय",
    transliteration: "Vinaya",
    englishMeaning: "Humility",
    hindiMeaning: "विनम्रता",
    category: "Ethics",
    description: "विनय नम्र और सम्मानपूर्ण व्यवहार का गुण है।"
  },
  {
    sanskritWord: "उदारता",
    transliteration: "Udarata",
    englishMeaning: "Generosity",
    hindiMeaning: "दरियादिली",
    category: "Ethics",
    description: "उदारता दूसरों के प्रति खुले मन और सहायता की भावना है।"
  },
  {
    sanskritWord: "कृतज्ञता",
    transliteration: "Kritajnata",
    englishMeaning: "Gratitude",
    hindiMeaning: "आभार",
    category: "Ethics",
    description: "कृतज्ञता किसी की सहायता के लिए आभार व्यक्त करना है।"
  },

    // Mathematics
  {
    sanskritWord: "लघुत्तमसमापवर्त्य",
    transliteration: "Laghuttama Samapavartya",
    englishMeaning: "Least Common Multiple",
    hindiMeaning: "लघुत्तम समापवर्त्य",
    category: "Mathematics",
    description: "The smallest positive number divisible by given numbers."
  },
  {
    sanskritWord: "महत्तमसमापवर्तक",
    transliteration: "Mahattama Samapavartaka",
    englishMeaning: "Greatest Common Divisor",
    hindiMeaning: "महत्तम समापवर्तक",
    category: "Mathematics",
    description: "The greatest number that divides given numbers exactly."
  },
  {
    sanskritWord: "परिमाण",
    transliteration: "Parimana",
    englishMeaning: "Measurement",
    hindiMeaning: "माप",
    category: "Mathematics",
    description: "The process of determining the size or quantity of something."
  },
  {
    sanskritWord: "दशमलव",
    transliteration: "Dashamala",
    englishMeaning: "Decimal",
    hindiMeaning: "दशमलव",
    category: "Mathematics",
    description: "A number system based on powers of ten."
  },
  {
    sanskritWord: "गुणनफल",
    transliteration: "Gunanaphala",
    englishMeaning: "Product",
    hindiMeaning: "गुणनफल",
    category: "Mathematics",
    description: "The result obtained by multiplying numbers."
  },

  // Ayurveda
  {
    sanskritWord: "त्रिफला",
    transliteration: "Triphala",
    englishMeaning: "Three-Fruit Herbal Formulation",
    hindiMeaning: "तीन फलों का मिश्रण",
    category: "Ayurveda",
    description: "A traditional Ayurvedic formulation made from three fruits."
  },
  {
    sanskritWord: "पञ्चकर्म",
    transliteration: "Panchakarma",
    englishMeaning: "Five Therapeutic Procedures",
    hindiMeaning: "पाँच शोधन प्रक्रियाएँ",
    category: "Ayurveda",
    description: "A group of five traditional Ayurvedic purification procedures."
  },
  {
    sanskritWord: "रसायन",
    transliteration: "Rasayana",
    englishMeaning: "Rejuvenation Therapy",
    hindiMeaning: "कायाकल्प चिकित्सा",
    category: "Ayurveda",
    description: "An Ayurvedic approach associated with nourishment and rejuvenation."
  },
  {
    sanskritWord: "दिनचर्या",
    transliteration: "Dinacharya",
    englishMeaning: "Daily Routine",
    hindiMeaning: "दैनिक दिनचर्या",
    category: "Ayurveda",
    description: "A traditional routine followed for maintaining well-being."
  },
  {
    sanskritWord: "ऋतुचर्या",
    transliteration: "Ritucharya",
    englishMeaning: "Seasonal Regimen",
    hindiMeaning: "ऋतु के अनुसार दिनचर्या",
    category: "Ayurveda",
    description: "Seasonal practices recommended in traditional Ayurveda."
  },

  // Yoga
  {
    sanskritWord: "कपालभाति",
    transliteration: "Kapalabhati",
    englishMeaning: "Cleansing Breathing Technique",
    hindiMeaning: "श्वास शुद्धि की प्रक्रिया",
    category: "Yoga",
    description: "A traditional yogic breathing and cleansing practice."
  },
  {
    sanskritWord: "अनुलोमविलोम",
    transliteration: "Anuloma Viloma",
    englishMeaning: "Alternate Nostril Breathing",
    hindiMeaning: "बारी-बारी से नासिका द्वारा श्वास लेना",
    category: "Yoga",
    description: "A breathing practice involving alternate nostrils."
  },
  {
    sanskritWord: "भुजङ्गासन",
    transliteration: "Bhujangasana",
    englishMeaning: "Cobra Pose",
    hindiMeaning: "भुजंग मुद्रा",
    category: "Yoga",
    description: "A yoga posture resembling a raised cobra."
  },
  {
    sanskritWord: "वृक्षासन",
    transliteration: "Vrikshasana",
    englishMeaning: "Tree Pose",
    hindiMeaning: "वृक्ष मुद्रा",
    category: "Yoga",
    description: "A standing yoga posture that develops balance."
  },
  {
    sanskritWord: "त्रिकोणासन",
    transliteration: "Trikonasana",
    englishMeaning: "Triangle Pose",
    hindiMeaning: "त्रिभुज मुद्रा",
    category: "Yoga",
    description: "A standing posture involving a triangular body position."
  },

  // Literature
  {
    sanskritWord: "निबन्ध",
    transliteration: "Nibandha",
    englishMeaning: "Essay",
    hindiMeaning: "निबंध",
    category: "Literature",
    description: "A written composition discussing a particular subject."
  },
  {
    sanskritWord: "सुभाषित",
    transliteration: "Subhashita",
    englishMeaning: "Wise Saying",
    hindiMeaning: "सुंदर और ज्ञानपूर्ण कथन",
    category: "Literature",
    description: "A meaningful and instructive traditional saying."
  },
  {
    sanskritWord: "कथासरित्सागर",
    transliteration: "Kathasaritsagara",
    englishMeaning: "Ocean of Stories",
    hindiMeaning: "कथाओं का सागर",
    category: "Literature",
    description: "A famous Sanskrit collection of interlinked stories."
  },
  {
    sanskritWord: "रूपक",
    transliteration: "Rupaka",
    englishMeaning: "Dramatic Representation",
    hindiMeaning: "नाटकीय प्रस्तुति",
    category: "Literature",
    description: "A literary form of drama or dramatic representation."
  },
  {
    sanskritWord: "प्रहसन",
    transliteration: "Prahasana",
    englishMeaning: "Farce or Comic Play",
    hindiMeaning: "हास्य नाटक",
    category: "Literature",
    description: "A short dramatic work based on humour and satire."
  },

  // History and Culture
  {
    sanskritWord: "सभ्यता",
    transliteration: "Sabhyata",
    englishMeaning: "Civilization",
    hindiMeaning: "सभ्यता",
    category: "Culture",
    description: "The organized social and cultural development of a society."
  },
  {
    sanskritWord: "तीर्थ",
    transliteration: "Tirtha",
    englishMeaning: "Sacred Place",
    hindiMeaning: "पवित्र तीर्थस्थल",
    category: "Culture",
    description: "A sacred place associated with religious or spiritual significance."
  },
  {
    sanskritWord: "यात्रा",
    transliteration: "Yatra",
    englishMeaning: "Journey or Pilgrimage",
    hindiMeaning: "यात्रा",
    category: "Culture",
    description: "Travel from one place to another, sometimes for spiritual purposes."
  },
  {
    sanskritWord: "उत्कीर्णलेख",
    transliteration: "Utkirnalekha",
    englishMeaning: "Inscription",
    hindiMeaning: "उत्कीर्ण लेख",
    category: "History",
    description: "Writing engraved on stone, metal, or another surface."
  },
  {
    sanskritWord: "मुद्राशास्त्र",
    transliteration: "Mudrashastra",
    englishMeaning: "Numismatics",
    hindiMeaning: "मुद्राओं का अध्ययन",
    category: "History",
    description: "The study of coins and currency."
  },

  // Governance and Society
  {
    sanskritWord: "लोकतन्त्र",
    transliteration: "Lokatantra",
    englishMeaning: "Democracy",
    hindiMeaning: "लोकतंत्र",
    category: "Governance",
    description: "A system of government in which people participate in decision-making."
  },
  {
    sanskritWord: "प्रशासन",
    transliteration: "Prashasana",
    englishMeaning: "Administration",
    hindiMeaning: "प्रशासन",
    category: "Governance",
    description: "The management and organization of public affairs."
  },
  {
    sanskritWord: "अधिकार",
    transliteration: "Adhikara",
    englishMeaning: "Right or Authority",
    hindiMeaning: "अधिकार",
    category: "Governance",
    description: "A legitimate power, entitlement, or authority."
  },
  {
    sanskritWord: "कर्तव्य",
    transliteration: "Kartavya",
    englishMeaning: "Duty",
    hindiMeaning: "कर्तव्य",
    category: "Ethics",
    description: "A responsibility or action that a person is expected to perform."
  },
  {
    sanskritWord: "उत्तरदायित्व",
    transliteration: "Uttaradayitva",
    englishMeaning: "Responsibility",
    hindiMeaning: "जिम्मेदारी",
    category: "Ethics",
    description: "The obligation to perform duties and accept their consequences."
  },

    // Vedic Knowledge
  {
    sanskritWord: "ऋत्विज्",
    transliteration: "Ritvij",
    englishMeaning: "Vedic Priest",
    hindiMeaning: "वैदिक पुरोहित",
    category: "Vedic Studies",
    description: "A priest who performs rituals according to Vedic traditions."
  },
  {
    sanskritWord: "अग्निहोत्र",
    transliteration: "Agnihotra",
    englishMeaning: "Fire Offering Ritual",
    hindiMeaning: "अग्नि में आहुति देने का अनुष्ठान",
    category: "Vedic Studies",
    description: "A traditional Vedic ritual involving offerings into sacred fire."
  },
  {
    sanskritWord: "स्वाहा",
    transliteration: "Svaha",
    englishMeaning: "Ritual Offering Exclamation",
    hindiMeaning: "आहुति के समय बोला जाने वाला शब्द",
    category: "Vedic Studies",
    description: "An expression traditionally used while making offerings into fire."
  },
  {
    sanskritWord: "स्वधा",
    transliteration: "Svadha",
    englishMeaning: "Ancestral Offering Formula",
    hindiMeaning: "पितरों को अर्पण का मंत्रसूचक शब्द",
    category: "Vedic Studies",
    description: "A sacred expression associated with offerings to ancestors."
  },
  {
    sanskritWord: "दीक्षा",
    transliteration: "Diksha",
    englishMeaning: "Initiation",
    hindiMeaning: "दीक्षा",
    category: "Vedic Studies",
    description: "A formal initiation into a spiritual or religious practice."
  },
  {
    sanskritWord: "दक्षिणा",
    transliteration: "Dakshina",
    englishMeaning: "Ritual Gift",
    hindiMeaning: "अनुष्ठान के बाद दिया जाने वाला दान",
    category: "Vedic Studies",
    description: "A traditional gift offered to a teacher or priest."
  },
  {
    sanskritWord: "यजमान",
    transliteration: "Yajamana",
    englishMeaning: "Ritual Patron",
    hindiMeaning: "यज्ञ कराने वाला व्यक्ति",
    category: "Vedic Studies",
    description: "A person who sponsors or performs a Vedic ritual."
  },
  {
    sanskritWord: "अध्वर्यु",
    transliteration: "Adhvaryu",
    englishMeaning: "Ritual Priest",
    hindiMeaning: "यज्ञ की क्रियाएँ करने वाला पुरोहित",
    category: "Vedic Studies",
    description: "A priest responsible for the practical performance of a Vedic sacrifice."
  },
  {
    sanskritWord: "उद्गाता",
    transliteration: "Udgata",
    englishMeaning: "Chanting Priest",
    hindiMeaning: "सामवेद के मंत्र गाने वाला पुरोहित",
    category: "Vedic Studies",
    description: "A priest who chants hymns during Vedic ceremonies."
  },
  {
    sanskritWord: "होतृ",
    transliteration: "Hotri",
    englishMeaning: "Invoking Priest",
    hindiMeaning: "वैदिक मंत्रों का पाठ करने वाला पुरोहित",
    category: "Vedic Studies",
    description: "A priest who recites invocations during Vedic sacrifices."
  },

  // Indian Philosophy
  {
    sanskritWord: "आत्मन्",
    transliteration: "Atman",
    englishMeaning: "Self or Soul",
    hindiMeaning: "आत्मा",
    category: "Philosophy",
    description: "The inner self discussed in Indian philosophical traditions."
  },
  {
    sanskritWord: "परमात्मन्",
    transliteration: "Paramatman",
    englishMeaning: "Supreme Self",
    hindiMeaning: "परमात्मा",
    category: "Philosophy",
    description: "The supreme self or ultimate spiritual reality."
  },
  {
    sanskritWord: "ब्रह्मन्",
    transliteration: "Brahman",
    englishMeaning: "Ultimate Reality",
    hindiMeaning: "परम सत्य",
    category: "Philosophy",
    description: "The ultimate reality described in several Upanishadic teachings."
  },
  {
    sanskritWord: "पुरुष",
    transliteration: "Purusha",
    englishMeaning: "Cosmic Person or Consciousness",
    hindiMeaning: "पुरुष या चेतन तत्त्व",
    category: "Philosophy",
    description: "A fundamental concept in several Indian philosophical systems."
  },
  {
    sanskritWord: "प्रकृति",
    transliteration: "Prakriti",
    englishMeaning: "Primordial Nature",
    hindiMeaning: "मूल प्रकृति",
    category: "Philosophy",
    description: "The fundamental material principle in Samkhya philosophy."
  },
  {
    sanskritWord: "गुणत्रय",
    transliteration: "Gunatraya",
    englishMeaning: "Three Qualities",
    hindiMeaning: "तीन गुण",
    category: "Philosophy",
    description: "The three qualities known as Sattva, Rajas and Tamas."
  },
  {
    sanskritWord: "सत्त्व",
    transliteration: "Sattva",
    englishMeaning: "Purity or Harmony",
    hindiMeaning: "शुद्धता और संतुलन",
    category: "Philosophy",
    description: "One of the three qualities described in Samkhya philosophy."
  },
  {
    sanskritWord: "रजस्",
    transliteration: "Rajas",
    englishMeaning: "Activity or Passion",
    hindiMeaning: "क्रियाशीलता और इच्छा",
    category: "Philosophy",
    description: "The quality associated with activity, desire and movement."
  },
  {
    sanskritWord: "तमस्",
    transliteration: "Tamas",
    englishMeaning: "Inertia or Darkness",
    hindiMeaning: "जड़ता और अंधकार",
    category: "Philosophy",
    description: "The quality associated with inertia and lack of awareness."
  },
  {
    sanskritWord: "कैवल्य",
    transliteration: "Kaivalya",
    englishMeaning: "Liberation or Isolation",
    hindiMeaning: "मोक्ष या पूर्ण स्वतंत्रता",
    category: "Philosophy",
    description: "The state of liberation described in Yoga philosophy."
  },

  // Indian Classical Music
  {
    sanskritWord: "गान्धर्ववेद",
    transliteration: "Gandharvaveda",
    englishMeaning: "Traditional Science of Music",
    hindiMeaning: "संगीत का पारंपरिक ज्ञान",
    category: "Music",
    description: "A traditional body of knowledge associated with music and performing arts."
  },
  {
    sanskritWord: "गायन",
    transliteration: "Gayana",
    englishMeaning: "Singing",
    hindiMeaning: "गायन",
    category: "Music",
    description: "The act of producing music through the human voice."
  },
  {
    sanskritWord: "वादन",
    transliteration: "Vādana",
    englishMeaning: "Instrumental Playing",
    hindiMeaning: "वाद्य बजाना",
    category: "Music",
    description: "The act of producing music using musical instruments."
  },
  {
    sanskritWord: "नर्तन",
    transliteration: "Nartana",
    englishMeaning: "Dancing",
    hindiMeaning: "नृत्य करना",
    category: "Music",
    description: "Rhythmic bodily movement performed as an art form."
  },
  {
    sanskritWord: "मूर्च्छना",
    transliteration: "Murchhana",
    englishMeaning: "Musical Scale Pattern",
    hindiMeaning: "स्वरों का क्रम",
    category: "Music",
    description: "A traditional concept describing ascending and descending note patterns."
  },
  {
    sanskritWord: "आरोह",
    transliteration: "Aroha",
    englishMeaning: "Ascending Musical Sequence",
    hindiMeaning: "आरोही स्वर क्रम",
    category: "Music",
    description: "The ascending sequence of notes in Indian classical music."
  },
  {
    sanskritWord: "अवरोह",
    transliteration: "Avaroha",
    englishMeaning: "Descending Musical Sequence",
    hindiMeaning: "अवरोही स्वर क्रम",
    category: "Music",
    description: "The descending sequence of notes in Indian classical music."
  },
  {
    sanskritWord: "तान",
    transliteration: "Tana",
    englishMeaning: "Musical Phrase",
    hindiMeaning: "स्वरों का विस्तार",
    category: "Music",
    description: "A melodic sequence of notes performed in classical music."
  },
  {
    sanskritWord: "गमक",
    transliteration: "Gamaka",
    englishMeaning: "Musical Ornamentation",
    hindiMeaning: "स्वरों की अलंकारिक गति",
    category: "Music",
    description: "An ornamented movement or variation of musical notes."
  },
  {
    sanskritWord: "ध्रुपद",
    transliteration: "Dhrupada",
    englishMeaning: "Classical Vocal Form",
    hindiMeaning: "शास्त्रीय गायन शैली",
    category: "Music",
    description: "An ancient and formal style of Hindustani classical vocal music."
  },

  // Indian Architecture
  {
    sanskritWord: "वास्तुपुरुष",
    transliteration: "Vastupurusha",
    englishMeaning: "Architectural Cosmic Figure",
    hindiMeaning: "वास्तु से संबंधित प्रतीकात्मक पुरुष",
    category: "Architecture",
    description: "A symbolic figure used in traditional Indian architectural planning."
  },
  {
    sanskritWord: "मण्डलविन्यास",
    transliteration: "Mandalavinyasa",
    englishMeaning: "Mandala Layout",
    hindiMeaning: "मण्डल आधारित योजना",
    category: "Architecture",
    description: "A geometric arrangement used in traditional architectural design."
  },
  {
    sanskritWord: "शिल्पविद्या",
    transliteration: "Shilpavidya",
    englishMeaning: "Knowledge of Arts and Crafts",
    hindiMeaning: "शिल्प और कला का ज्ञान",
    category: "Architecture",
    description: "Traditional knowledge related to sculpture, crafts and construction."
  },
  {
    sanskritWord: "स्थपति",
    transliteration: "Sthapati",
    englishMeaning: "Architect or Master Builder",
    hindiMeaning: "वास्तुकार या मुख्य शिल्पी",
    category: "Architecture",
    description: "A master architect or builder in traditional Indian architecture."
  },
  {
    sanskritWord: "सूत्रधार",
    transliteration: "Sutradhara",
    englishMeaning: "Master Craftsman",
    hindiMeaning: "मुख्य शिल्पकार",
    category: "Architecture",
    description: "A term used for a skilled designer or master craftsman."
  },
  {
    sanskritWord: "प्रतिष्ठा",
    transliteration: "Pratishtha",
    englishMeaning: "Consecration",
    hindiMeaning: "प्राण-प्रतिष्ठा या स्थापना",
    category: "Architecture",
    description: "A ceremonial process of establishing a sacred image or object."
  },
  {
    sanskritWord: "शिलान्यास",
    transliteration: "Shilanyasa",
    englishMeaning: "Foundation Laying",
    hindiMeaning: "नींव रखने का समारोह",
    category: "Architecture",
    description: "A traditional ceremony marking the beginning of construction."
  },
  {
    sanskritWord: "अधिष्ठान",
    transliteration: "Adhishthana",
    englishMeaning: "Architectural Base",
    hindiMeaning: "आधार या चबूतरा",
    category: "Architecture",
    description: "The base or supporting platform of a traditional structure."
  },
  {
    sanskritWord: "कपोत",
    transliteration: "Kapota",
    englishMeaning: "Architectural Cornice",
    hindiMeaning: "इमारत का सजावटी छज्जा",
    category: "Architecture",
    description: "An architectural element used in traditional Indian buildings."
  },
  {
    sanskritWord: "जगती",
    transliteration: "Jagati",
    englishMeaning: "Raised Platform",
    hindiMeaning: "ऊँचा चबूतरा",
    category: "Architecture",
    description: "A raised platform on which a temple or structure may stand."
  },

  // Indian Mathematics
  {
    sanskritWord: "अंक",
    transliteration: "Anka",
    englishMeaning: "Numeral or Digit",
    hindiMeaning: "अंक",
    category: "Mathematics",
    description: "A symbol used to represent a number."
  },
  {
    sanskritWord: "एकक",
    transliteration: "Ekaka",
    englishMeaning: "Unit",
    hindiMeaning: "इकाई",
    category: "Mathematics",
    description: "A standard quantity used for measurement or counting."
  },
  {
    sanskritWord: "स्थानमान",
    transliteration: "Sthanamana",
    englishMeaning: "Place Value",
    hindiMeaning: "स्थानीय मान",
    category: "Mathematics",
    description: "The value of a digit based on its position in a number."
  },
  {
    sanskritWord: "परिमेय",
    transliteration: "Parimeya",
    englishMeaning: "Rational Number",
    hindiMeaning: "परिमेय संख्या",
    category: "Mathematics",
    description: "A number that can be expressed as a ratio of integers."
  },
  {
    sanskritWord: "अपरिमेय",
    transliteration: "Aparimeya",
    englishMeaning: "Irrational Number",
    hindiMeaning: "अपरिमेय संख्या",
    category: "Mathematics",
    description: "A number that cannot be expressed as a ratio of integers."
  },
  {
    sanskritWord: "समुच्चय",
    transliteration: "Samuchchaya",
    englishMeaning: "Set or Collection",
    hindiMeaning: "समुच्चय",
    category: "Mathematics",
    description: "A collection of distinct mathematical objects."
  },
  {
    sanskritWord: "समीकरण",
    transliteration: "Samikarana",
    englishMeaning: "Equation",
    hindiMeaning: "समीकरण",
    category: "Mathematics",
    description: "A mathematical statement showing equality between expressions."
  },
  {
    sanskritWord: "चर",
    transliteration: "Chara",
    englishMeaning: "Variable",
    hindiMeaning: "चर राशि",
    category: "Mathematics",
    description: "A symbol representing a quantity that can change."
  },
  {
    sanskritWord: "स्थिराङ्क",
    transliteration: "Sthiranka",
    englishMeaning: "Constant",
    hindiMeaning: "स्थिरांक",
    category: "Mathematics",
    description: "A fixed numerical value in a mathematical expression."
  },
  {
    sanskritWord: "घाताङ्क",
    transliteration: "Ghatanka",
    englishMeaning: "Exponent",
    hindiMeaning: "घातांक",
    category: "Mathematics",
    description: "A number indicating how many times a base is multiplied by itself."
  },

  // Astronomy and Time
  {
    sanskritWord: "सूर्य",
    transliteration: "Surya",
    englishMeaning: "Sun",
    hindiMeaning: "सूर्य",
    category: "Astronomy & Time",
    description: "The star at the centre of our solar system."
  },
  {
    sanskritWord: "चन्द्र",
    transliteration: "Chandra",
    englishMeaning: "Moon",
    hindiMeaning: "चन्द्रमा",
    category: "Astronomy & Time",
    description: "The natural satellite of Earth."
  },
  {
    sanskritWord: "मङ्गल",
    transliteration: "Mangala",
    englishMeaning: "Mars",
    hindiMeaning: "मंगल ग्रह",
    category: "Astronomy & Time",
    description: "The planet known as Mars in English."
  },
  {
    sanskritWord: "बुध",
    transliteration: "Budha",
    englishMeaning: "Mercury",
    hindiMeaning: "बुध ग्रह",
    category: "Astronomy & Time",
    description: "The planet nearest to the Sun."
  },
  {
    sanskritWord: "बृहस्पति",
    transliteration: "Brihaspati",
    englishMeaning: "Jupiter",
    hindiMeaning: "बृहस्पति ग्रह",
    category: "Astronomy & Time",
    description: "The largest planet in our solar system."
  },
  {
    sanskritWord: "शुक्र",
    transliteration: "Shukra",
    englishMeaning: "Venus",
    hindiMeaning: "शुक्र ग्रह",
    category: "Astronomy & Time",
    description: "The second planet from the Sun."
  },
  {
    sanskritWord: "शनैश्चर",
    transliteration: "Shanaishchara",
    englishMeaning: "Saturn",
    hindiMeaning: "शनि ग्रह",
    category: "Astronomy & Time",
    description: "The sixth planet from the Sun."
  },
  {
    sanskritWord: "राहु",
    transliteration: "Rahu",
    englishMeaning: "Ascending Lunar Node",
    hindiMeaning: "राहु",
    category: "Astronomy & Time",
    description: "A shadow entity associated with eclipses in Indian astronomy."
  },
  {
    sanskritWord: "केतु",
    transliteration: "Ketu",
    englishMeaning: "Descending Lunar Node",
    hindiMeaning: "केतु",
    category: "Astronomy & Time",
    description: "A shadow entity associated with eclipses in Indian astronomy."
  },
  {
    sanskritWord: "पञ्चाङ्ग",
    transliteration: "Panchanga",
    englishMeaning: "Traditional Hindu Calendar",
    hindiMeaning: "पंचांग",
    category: "Astronomy & Time",
    description: "A traditional calendar based on five astronomical elements."
  },

  // Ayurveda and Health
  {
    sanskritWord: "प्रकृतिस्थ",
    transliteration: "Prakritistha",
    englishMeaning: "Balanced Natural State",
    hindiMeaning: "प्राकृतिक संतुलित अवस्था",
    category: "Ayurveda",
    description: "A state of balance according to traditional Ayurvedic concepts."
  },
  {
    sanskritWord: "पथ्य",
    transliteration: "Pathya",
    englishMeaning: "Wholesome Diet or Regimen",
    hindiMeaning: "हितकारी आहार-विहार",
    category: "Ayurveda",
    description: "Food and habits considered suitable for maintaining health."
  },
  {
    sanskritWord: "अपथ्य",
    transliteration: "Apathya",
    englishMeaning: "Unwholesome Diet or Regimen",
    hindiMeaning: "अहितकारी आहार-विहार",
    category: "Ayurveda",
    description: "Food or habits considered unsuitable for health."
  },
  {
    sanskritWord: "स्वास्थ्य",
    transliteration: "Svasthya",
    englishMeaning: "Health",
    hindiMeaning: "स्वास्थ्य",
    category: "Ayurveda",
    description: "A state of physical and mental well-being."
  },
  {
    sanskritWord: "बल",
    transliteration: "Bala",
    englishMeaning: "Strength",
    hindiMeaning: "शक्ति",
    category: "Ayurveda",
    description: "The strength or capacity of the body."
  },
  {
    sanskritWord: "वाजीकरण",
    transliteration: "Vajikarana",
    englishMeaning: "Traditional Reproductive Vitality Therapy",
    hindiMeaning: "प्रजनन स्वास्थ्य से संबंधित आयुर्वेदिक विधा",
    category: "Ayurveda",
    description: "A traditional branch of Ayurveda concerned with reproductive health."
  },
  {
    sanskritWord: "कायचिकित्सा",
    transliteration: "Kayachikitsa",
    englishMeaning: "Internal Medicine",
    hindiMeaning: "आंतरिक चिकित्सा",
    category: "Ayurveda",
    description: "A major branch of Ayurveda dealing with internal diseases."
  },
  {
    sanskritWord: "भूतविद्या",
    transliteration: "Bhutavidya",
    englishMeaning: "Traditional Study of Mental and Unexplained Disorders",
    hindiMeaning: "आयुर्वेद की एक पारंपरिक शाखा",
    category: "Ayurveda",
    description: "One of the traditional branches of Ayurveda."
  },
  {
    sanskritWord: "कौमारभृत्य",
    transliteration: "Kaumarabhritya",
    englishMeaning: "Pediatrics",
    hindiMeaning: "बाल चिकित्सा",
    category: "Ayurveda",
    description: "The Ayurvedic branch concerned with the care of children."
  },
  {
    sanskritWord: "अगदतन्त्र",
    transliteration: "Agadatantra",
    englishMeaning: "Toxicology",
    hindiMeaning: "विष विज्ञान",
    category: "Ayurveda",
    description: "The traditional Ayurvedic branch concerned with poisons and their treatment."
  },

  // Indian Logic and Knowledge
  {
    sanskritWord: "हेतु",
    transliteration: "Hetu",
    englishMeaning: "Reason or Cause",
    hindiMeaning: "कारण या हेतु",
    category: "Logic",
    description: "A reason or cause used in logical reasoning."
  },
  {
    sanskritWord: "हेत्वाभास",
    transliteration: "Hetvabhasa",
    englishMeaning: "Fallacy of Reasoning",
    hindiMeaning: "तर्क का दोष",
    category: "Logic",
    description: "An apparent reason that fails to establish a valid conclusion."
  },
  {
    sanskritWord: "व्याप्ति",
    transliteration: "Vyapti",
    englishMeaning: "Invariable Relation",
    hindiMeaning: "अविनाभाव संबंध",
    category: "Logic",
    description: "A necessary relation between two terms in Indian inference."
  },
  {
    sanskritWord: "पक्षधर्मता",
    transliteration: "Pakshadharmata",
    englishMeaning: "Presence of Reason in the Subject",
    hindiMeaning: "पक्ष में हेतु की उपस्थिति",
    category: "Logic",
    description: "A condition used in classical Indian inferential reasoning."
  },
  {
    sanskritWord: "निगमन",
    transliteration: "Nigamana",
    englishMeaning: "Conclusion",
    hindiMeaning: "निष्कर्ष",
    category: "Logic",
    description: "The concluding statement in a logical argument."
  },
  {
    sanskritWord: "उदाहरणम्",
    transliteration: "Udaharanam",
    englishMeaning: "Illustrative Example",
    hindiMeaning: "उदाहरण",
    category: "Logic",
    description: "An illustration used to explain or support an argument."
  },
  {
    sanskritWord: "वितण्डा",
    transliteration: "Vitanda",
    englishMeaning: "Destructive Debate",
    hindiMeaning: "केवल विरोध पर आधारित वाद",
    category: "Logic",
    description: "A debate in which one attacks the opponent's position without establishing one's own."
  },
  {
    sanskritWord: "जल्‍प",
    transliteration: "Jalpa",
    englishMeaning: "Contentious Debate",
    hindiMeaning: "विजय के उद्देश्य से किया गया वाद",
    category: "Logic",
    description: "A form of debate focused on defeating an opponent."
  },
  {
    sanskritWord: "वाद",
    transliteration: "Vada",
    englishMeaning: "Reasoned Discussion",
    hindiMeaning: "तर्कपूर्ण चर्चा",
    category: "Logic",
    description: "A discussion aimed at discovering or establishing truth."
  },
  {
    sanskritWord: "छल",
    transliteration: "Chhala",
    englishMeaning: "Quibbling or Verbal Trick",
    hindiMeaning: "शब्दों का छल",
    category: "Logic",
    description: "A misleading verbal response in debate."
  },

  // Environment and Nature
  {
    sanskritWord: "पर्जन्य",
    transliteration: "Parjanya",
    englishMeaning: "Rain-Giving Cloud or Rain Deity",
    hindiMeaning: "वर्षा करने वाला मेघ",
    category: "Environment",
    description: "A Vedic term associated with rain and rain-bearing clouds."
  },
  {
    sanskritWord: "वन्यजीव",
    transliteration: "Vanyajiva",
    englishMeaning: "Wildlife",
    hindiMeaning: "वन्य जीव",
    category: "Environment",
    description: "Animals and organisms living in natural habitats."
  },
  {
    sanskritWord: "जलस्रोत",
    transliteration: "Jalasrota",
    englishMeaning: "Water Source",
    hindiMeaning: "जल का स्रोत",
    category: "Environment",
    description: "A natural or managed source of water."
  },
  {
    sanskritWord: "भूमिगतजल",
    transliteration: "Bhumigatajala",
    englishMeaning: "Groundwater",
    hindiMeaning: "भूमि के नीचे का जल",
    category: "Environment",
    description: "Water stored beneath the Earth's surface."
  },
  {
    sanskritWord: "मृदासंरक्षण",
    transliteration: "Mrdasamrakshana",
    englishMeaning: "Soil Conservation",
    hindiMeaning: "मिट्टी का संरक्षण",
    category: "Environment",
    description: "Methods used to prevent soil erosion and degradation."
  },
  {
    sanskritWord: "वायुमण्डल",
    transliteration: "Vayumandala",
    englishMeaning: "Atmosphere",
    hindiMeaning: "वायुमंडल",
    category: "Environment",
    description: "The layer of gases surrounding the Earth."
  },
  {
    sanskritWord: "पारिस्थितिकी",
    transliteration: "Paristhitiki",
    englishMeaning: "Ecology",
    hindiMeaning: "पारिस्थितिकी",
    category: "Environment",
    description: "The study of relationships between organisms and their environment."
  },
  {
    sanskritWord: "प्राकृतिकसंसाधन",
    transliteration: "Prakritikasansadhana",
    englishMeaning: "Natural Resources",
    hindiMeaning: "प्राकृतिक संसाधन",
    category: "Environment",
    description: "Materials and resources obtained from nature."
  },
  {
    sanskritWord: "जलचक्र",
    transliteration: "Jalachakra",
    englishMeaning: "Water Cycle",
    hindiMeaning: "जल चक्र",
    category: "Environment",
    description: "The continuous circulation of water through nature."
  },
  {
    sanskritWord: "वृष्टि",
    transliteration: "Vrishti",
    englishMeaning: "Rainfall",
    hindiMeaning: "वर्षा",
    category: "Environment",
    description: "The falling of water from clouds to the Earth's surface."
  },
    // Indian Knowledge Systems
  {
    sanskritWord: "लोकविद्या",
    transliteration: "Lokavidya",
    englishMeaning: "Traditional Community Knowledge",
    hindiMeaning: "लोक परंपराओं से प्राप्त ज्ञान",
    category: "Indian Knowledge Systems",
    description: "Knowledge developed and preserved within local communities."
  },
  {
    sanskritWord: "परम्परागतज्ञान",
    transliteration: "Paramparagat Jnana",
    englishMeaning: "Traditional Knowledge",
    hindiMeaning: "परंपरागत ज्ञान",
    category: "Indian Knowledge Systems",
    description: "Knowledge passed from one generation to another."
  },
  {
    sanskritWord: "मौखिकपरम्परा",
    transliteration: "Maukhika Parampara",
    englishMeaning: "Oral Tradition",
    hindiMeaning: "मौखिक परंपरा",
    category: "Indian Knowledge Systems",
    description: "The transmission of knowledge through spoken communication."
  },

  // Sanskrit Grammar
  {
    sanskritWord: "सुप्",
    transliteration: "Sup",
    englishMeaning: "Nominal Case Endings",
    hindiMeaning: "सुबन्त शब्दों के प्रत्यय",
    category: "Language",
    description: "A traditional grammatical term for nominal inflectional endings."
  },
  {
    sanskritWord: "तिङ्",
    transliteration: "Tin",
    englishMeaning: "Verbal Personal Endings",
    hindiMeaning: "तिङन्त धातुओं के प्रत्यय",
    category: "Language",
    description: "A traditional grammatical term for verbal endings."
  },
  {
    sanskritWord: "कारक",
    transliteration: "Karaka",
    englishMeaning: "Grammatical Relation",
    hindiMeaning: "कारक",
    category: "Language",
    description: "A grammatical relation between a verb and a noun."
  },
  {
    sanskritWord: "विभक्ति",
    transliteration: "Vibhakti",
    englishMeaning: "Grammatical Case",
    hindiMeaning: "विभक्ति",
    category: "Language",
    description: "A grammatical form indicating the role of a noun or pronoun."
  },

  // Indian Art and Culture
  {
    sanskritWord: "चित्रसूत्र",
    transliteration: "Chitrasutra",
    englishMeaning: "Principles of Painting",
    hindiMeaning: "चित्रकला के सिद्धांत",
    category: "Art",
    description: "Traditional principles related to Indian painting."
  },
  {
    sanskritWord: "नाट्यशास्त्र",
    transliteration: "Natyashastra",
    englishMeaning: "Treatise on Performing Arts",
    hindiMeaning: "नाट्यकला का शास्त्र",
    category: "Art",
    description: "An important classical Sanskrit treatise on drama, dance and music."
  },
  {
    sanskritWord: "अभिनयदर्पण",
    transliteration: "Abhinayadarpana",
    englishMeaning: "Treatise on Expression",
    hindiMeaning: "अभिनय का ग्रंथ",
    category: "Art",
    description: "A traditional Sanskrit text on dance and expressive gestures."
  },

  // Indian Knowledge and Science
  {
    sanskritWord: "आयुर्वेद",
    transliteration: "Ayurveda",
    englishMeaning: "Traditional Indian System of Medicine",
    hindiMeaning: "आयुर्वेद",
    category: "Ayurveda",
    description: "A traditional Indian knowledge system concerned with health and well-being."
  },
  {
    sanskritWord: "धनुर्वेद",
    transliteration: "Dhanurveda",
    englishMeaning: "Traditional Science of Warfare",
    hindiMeaning: "युद्धकला का पारंपरिक ज्ञान",
    category: "Indian Knowledge Systems",
    description: "A traditional body of knowledge associated with martial practices."
  },
  {
    sanskritWord: "अर्थशास्त्र",
    transliteration: "Arthashastra",
    englishMeaning: "Treatise on Statecraft and Economics",
    hindiMeaning: "राजनीति और अर्थव्यवस्था का शास्त्र",
    category: "Governance",
    description: "A traditional field of knowledge concerning governance and economic administration."
  },
  {
    sanskritWord: "गणितशास्त्र",
    transliteration: "Ganitashastra",
    englishMeaning: "Science of Mathematics",
    hindiMeaning: "गणित का शास्त्र",
    category: "Mathematics",
    description: "The systematic study of mathematical principles and methods."
  },
  {
    sanskritWord: "खगोलशास्त्र",
    transliteration: "Khagolashastra",
    englishMeaning: "Science of Astronomy",
    hindiMeaning: "खगोल विज्ञान",
    category: "Astronomy & Time",
    description: "The study of celestial objects and astronomical phenomena."
  }


];

module.exports = sanskritWordsRemaining;