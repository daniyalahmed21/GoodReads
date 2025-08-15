// A helper function to format the shelf name
export const formatShelfName = (name) => {
    if (!name) return "";
    // 1. Replace underscores with spaces
    const withSpaces = name.replace(/_/g, ' ');
    // 2. Capitalize the first letter of each word
    return withSpaces.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };