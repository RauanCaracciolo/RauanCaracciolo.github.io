$(document).ready(function() {
    const selectElement = $("#selectOptions");
  
    // Function to fetch data from the server using AJAX
    function fetchData() {
      return $.ajax({
        url: "http://magosdeiliria.ddns.net:5000/ListarDocumentos", // Replace with your actual API endpoint
        method: "GET",
        error: function(xhr, status, error) {
          console.error("Error fetching data:", error);
        }
      });
    }
  
    // Function to update the select element with fetched data
    function updateSelectOptions(data) {
      data.forEach((option) => {
        const optionElement = $("<option>").val(option).text(option);
        selectElement.append(optionElement);
      });
    }
  
    // Fetch data and update the select element on page load
    fetchData().done((data) => updateSelectOptions(data));
  });
  
