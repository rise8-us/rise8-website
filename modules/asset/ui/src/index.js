export default () => {
  // Your own project level JS may go here
  console.log('Hello World');

  const customerButton = document.getElementById('customer-button');
  const riserButton = document.getElementById('riser-button');

  if (customerButton) {
    customerButton.onclick = function () {
      location.href = '/contact';
    };
  }
  if (riserButton) {
    riserButton.onclick = function () {
      location.href = '/careers';
    };
  }
};
