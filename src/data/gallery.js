let gallery = [
    {
        imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Modern Kitchen',
        description: 'A sleek and modern kitchen with stainless steel appliances and minimalist design.',
        category: 'Kitchen',
        featured: true
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Cozy Bathroom',
        description: 'A cozy bathroom featuring a clawfoot tub and vintage fixtures.',
        category: 'Bathroom',
        featured: true
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Elegant Fireplace',
        description: 'An elegant living room with a grand fireplace and classic decor.',
        category: 'Fireplace',
        featured: true
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Outdoor Patio',
        description: 'A beautiful outdoor patio with comfortable seating and lush greenery.',
        category: 'Outdoor',
        featured: true
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Modern Office Space',
        description: 'A modern office space with open layout and contemporary furniture.',
        category: 'Commercial',
        featured: true
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501183638714-8f3c5a6c5d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Rustic Kitchen',
        description: 'A rustic kitchen with wooden beams and farmhouse-style decor.',
        category: 'Kitchen',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Luxurious Bathroom',
        description: 'A luxurious bathroom with marble countertops and a spacious walk-in shower.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Contemporary Fireplace',
        description: 'A contemporary living room with a sleek fireplace and modern furnishings.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Commercial Lobby',
        description: 'A commercial lobby with stylish seating and contemporary art pieces.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Garden Patio',
        description: 'A serene garden patio with comfortable seating and beautiful landscaping.',
        category: 'Outdoor',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Minimalist Kitchen',
        description: 'A minimalist kitchen with clean lines and a monochromatic color scheme.',
        category: 'Kitchen',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Spa-like Bathroom',
        description: 'A spa-like bathroom with a soaking tub and natural stone accents.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Classic Fireplace',
        description: 'A classic living room with a traditional fireplace and elegant decor.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Rooftop Patio',
        description: 'A chic rooftop patio with panoramic city views and modern furnishings.',
        category: 'Outdoor',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Open Office Space',
        description: 'An open office space with collaborative work areas and modern design.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501183638714-8f3c5a6c5d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Vintage Kitchen',
        description: 'A vintage kitchen with retro appliances and colorful decor.',
        category: 'Kitchen',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Modern Bathroom',
        description: 'A modern bathroom with sleek fixtures and a minimalist design.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Rustic Fireplace',
        description: 'A rustic living room with a stone fireplace and cozy furnishings.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Corporate Lobby',
        description: 'A corporate lobby with sleek design and modern art installations.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Beachside Patio',
        description: 'A relaxing beachside patio with comfortable seating and ocean views.',
        category: 'Outdoor',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Modern Kitchen',
        description: 'A sleek and modern kitchen with stainless steel appliances and minimalist design.',
        category: 'Kitchen',
        featured: true

    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Cozy Bathroom',
        description: 'A cozy bathroom featuring a clawfoot tub and vintage fixtures.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Elegant Fireplace',
        description: 'An elegant living room with a grand fireplace and classic decor.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Outdoor Patio',
        description: 'A beautiful outdoor patio with comfortable seating and lush greenery.',
        category: 'Outdoor',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Modern Office Space',
        description: 'A modern office space with open layout and contemporary furniture.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501183638714-8f3c5a6c5d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Rustic Kitchen',
        description: 'A rustic kitchen with wooden beams and farmhouse-style decor.',
        category: 'Kitchen',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Luxurious Bathroom',
        description: 'A luxurious bathroom with marble countertops and a spacious walk-in shower.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Contemporary Fireplace',
        description: 'A contemporary living room with a sleek fireplace and modern furnishings.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Commercial Lobby',
        description: 'A commercial lobby with stylish seating and contemporary art pieces.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Garden Patio',
        description: 'A serene garden patio with comfortable seating and beautiful landscaping.',
        category: 'Outdoor',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Minimalist Kitchen',
        description: 'A minimalist kitchen with clean lines and a monochromatic color scheme.',
        category: 'Kitchen',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Spa-like Bathroom',
        description: 'A spa-like bathroom with a soaking tub and natural stone accents.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Classic Fireplace',
        description: 'A classic living room with a traditional fireplace and elegant decor.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Rooftop Patio',
        description: 'A chic rooftop patio with panoramic city views and modern furnishings.',
        category: 'Outdoor',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Open Office Space',
        description: 'An open office space with collaborative work areas and modern design.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501183638714-8f3c5a6c5d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Vintage Kitchen',
        description: 'A vintage kitchen with retro appliances and colorful decor.',
        category: 'Kitchen',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Modern Bathroom',
        description: 'A modern bathroom with sleek fixtures and a minimalist design.',
        category: 'Bathroom',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Rustic Fireplace',
        description: 'A rustic living room with a stone fireplace and cozy furnishings.',
        category: 'Fireplace',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Corporate Lobby',
        description: 'A corporate lobby with sleek design and modern art installations.',
        category: 'Commercial',
        featured: false
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Beachside Patio',
        description: 'A relaxing beachside patio with comfortable seating and ocean views.',
        category: 'Outdoor',
        featured: false
    }
];

export default gallery;