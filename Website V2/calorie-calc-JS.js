function calorieCalc() {
  let gender = document.getElementById('gender').value;
  let age = parseFloat(document.getElementById('age').value);
  let height = parseFloat(document.getElementById('height').value);
  let weight = parseFloat(document.getElementById('weight').value);
  let activity = parseFloat(document.getElementById('activity').value);
  let ans = document.getElementById('ans');


  if (!age || !height || !weight || age <= 0 || height <= 0 || weight <= 0) {
    ans.innerHTML = '<p class="error-text">Please enter valid positive numbers for all fields.</p>';
    ans.classList.remove('hidden');
    return;
  }


  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }


  let tdee = Math.round(bmr * activity);
  let weightLoss = Math.round(tdee - 500);
  let weightGain = Math.round(tdee + 500);


  ans.innerHTML = `
    <p style="margin: 0 0 6px 0;">Maintenance Calories (TDEE):</p>
    <div class="ans-value">${tdee} kcal/day</div>
    <hr style="border: 0; border-top: 1px solid var(--border); margin: 12px 0;">
    <p style="margin: 4px 0;"><strong>Weight Loss:</strong> ${weightLoss} kcal/day (-0.5 kg/wk)</p>
    <p style="margin: 4px 0;"><strong>Weight Gain:</strong> ${weightGain} kcal/day (+0.5 kg/wk)</p>
  `;
  ans.classList.remove('hidden');
}
