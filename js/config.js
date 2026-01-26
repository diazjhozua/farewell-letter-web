// Theme Configuration
export const THEMES = {
  default: {
    name: 'Default',
    description: 'Blue/purple elegant cinematic theme'
  },
  tech: {
    name: 'Tech/Programmer',
    description: 'Dark green terminal theme'
  },
  business: {
    name: 'Business',
    description: 'Professional navy corporate theme'
  },
  girly: {
    name: 'Girly',
    description: 'Pink/purple feminine theme'
  },
  futuristic: {
    name: 'Futuristic',
    description: 'Cyan/neon sci-fi theme'
  }
};

// Default data fallbacks
export const DEFAULT_INTRO_SLIDES = [
  {
    icon: '👋',
    title: 'A Farewell Tribute',
    text: "We've gathered heartfelt messages from your colleagues to celebrate your incredible journey with us.",
  },
  {
    icon: '🌟',
    title: 'Your Impact',
    text: 'Your leadership, mentorship, and friendship have touched the lives of everyone around you.',
  },
  {
    icon: '🚀',
    title: 'New Adventures Await',
    text: 'As you embark on your next chapter, know that your legacy here will continue to inspire us all.',
  },
  {
    icon: '💝',
    title: 'From All of Us',
    text: "These personal messages are a small token of our appreciation for everything you've given us.",
  },
];

export const DEFAULT_LETTERS = [
  {
    from: 'John Doe',
    message: "Thank you for being an incredible mentor and leader. Your guidance has shaped not just my career, but also my approach to life. You've always been there with wisdom, patience, and encouragement. The impact you've made on our team and on me personally will be felt for years to come. Wishing you all the best in your next adventure!",
  },
  {
    from: 'Sarah Johnson',
    message: 'Working with you has been one of the highlights of my career. Your dedication, professionalism, and kindness have inspired us all. You have this amazing ability to make everyone feel valued and heard. Thank you for creating such a positive work environment and for always believing in our potential. You will be greatly missed!',
  },
  {
    from: 'Mike Chen',
    message: "It's hard to imagine the office without your infectious laughter and positive energy. You've been more than a colleague – you've been a friend, a mentor, and sometimes even a therapist when work got stressful! Your door was always open, and your advice always spot-on. Best of luck in your new role – they're getting someone truly special.",
  },
  {
    from: 'Emily Rodriguez',
    message: "Your leadership style has taught me so much about balancing strength with empathy. You've shown us that success isn't just about numbers, but about people. Thank you for fighting for our team, for celebrating our wins, and for helping us grow through our challenges. Your legacy here will continue to inspire us.",
  },
  {
    from: 'David Kim',
    message: 'From day one, you welcomed me with open arms and made me feel like part of the family. Your patience in teaching me the ropes and your trust in giving me important projects boosted my confidence immensely. Thank you for being such an amazing role model and for showing me what true leadership looks like.',
  },
];

// Configuration constants
export const CONFIG = {
  SWIPE_THRESHOLD: 100,
  ANIMATION_DURATION_INTRO: 800,
  ANIMATION_DURATION_LETTERS: 300,
  FADE_TRANSITION_DURATION: 800,
  BOUNDARY_RESISTANCE: 0.3
};