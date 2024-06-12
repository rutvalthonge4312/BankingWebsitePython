const getHeaders = () => {
    return {
      'Content-Type': 'application/json',
      'X-CSRFToken': '{{csrfToken}}',
    };
  };
  
  export default getHeaders;