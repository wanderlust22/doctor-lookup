export class DoctorService {
 async getDoctor(inputName) {
    try{
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/practices?name=${inputName}&location=47.6062%2C-122.3321%2C100&user_location=47.6062%2C-122.3321&skip=0&limit=10&${process.env.API_KEY}`)
      let jsonifiedResponse =  await response.json();
      return jsonifiedResonse;
    } catch(error) {
      console.error('Sorry it didnt work ' + error.message);
    }
  }
}
