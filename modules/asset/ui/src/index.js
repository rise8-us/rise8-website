export default () => {
  // Your own project level JS may go here
  console.log('Hello World');

  document.getElementById('customer-button').onclick = function () {
    location.href = '/contact';
  };
  document.getElementById('riser-button').onclick = function () {
    location.href = '/careers';
  };
};
