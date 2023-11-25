const truncateText = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      const truncated = description.substring(0, maxLength).trim();
      return truncated + '...';
    }
  };

export default truncateText;