
//Compute intermediate variables.
//Compute intermediate variables.
//Compute intermediate variables.
var nkids, sumhours, sumfees;
var rate1, rate2, rate3, rate4, rate5, rate6;
var l2rate1, l2rate2, l2rate3, l2rate4, l2rate5, l2rate6;
l2rate1 = 0; l2rate2 = 0; l2rate3 = 0; l2rate4 = 0; l2rate5 = 0; l2rate6 = 0;

//Calculate number of kids.
//Calculate number of kids.
//Calculate number of kids.
nkids = 0;
if (inputs.hours1 > 0){
    nkids = nkids + 1;
}
if (inputs.hours2 > 0){
    nkids = nkids + 1;
}
if (inputs.hours3 > 0){
    nkids = nkids + 1;
}
if (inputs.hours4 > 0){
    nkids = nkids + 1;
}
if (inputs.hours5 > 0){
    nkids = nkids + 1;
}
if (inputs.hours6 > 0){
    nkids = nkids + 1;
}

//Calculate weekly sums.
//Calculate weekly sums.
//Calculate weekly sums.
sumhours = inputs.hours1 + inputs.hours2 + inputs.hours3 + inputs.hours4 + inputs.hours5 + inputs.hours6;
sumfees = Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6);

//Convert age variables to numeric rate modifier.
//Convert age variables to numeric rate modifier.
//Convert age variables to numeric rate modifier.
if (inputs.age1 === 'a'){
    rate1 = 0.5;
} else { rate1 = 0;}
if (inputs.age2 === 'a'){
    rate2 = 0.5;
} else { rate2 = 0;}
if (inputs.age3 === 'a'){
    rate3 = 0.5;
} else { rate3 = 0;}
if (inputs.age4 === 'a'){
    rate4 = 0.5;
} else { rate4 = 0;}
if (inputs.age5 === 'a'){
    rate5 = 0.5;
} else { rate5 = 0;}
if (inputs.age6 === 'a'){
    rate6 = 0.5;
} else { rate6 = 0;}

//Recode rates for level 2.
//Recode rates for level 2.
//Recode rates for level 2.
if (rate1 === 0.5){
    l2rate1 = 0.35;
} 
if (rate2 === 0.5){
    l2rate2 = 0.35;
}
if (rate3 === 0.5){
    l2rate3 = 0.35;
}
if (rate4 === 0.5){
    l2rate4 = 0.35;
}
if (rate5 === 0.5){
    l2rate5 = 0.35;
}
if (rate6 === 0.5){
    l2rate6 = 0.35;
}

//Rate Calculations and Output Tables.
//Rate Calculations and Output Tables.
//Rate Calculations and Output Tables.
return{
  level1: [{
      'weekly': (1.35 * sumhours),
      'biweekly': (1.35 * sumhours * 2),
      'monthly': (1.35 * sumhours * 4.3),
      'yearly': (1.35 * sumhours * 52)
  }],
  copay1: [{
      'weekly': (sumfees / 2),
      'biweekly': (sumfees),
      'monthly': (sumfees * 2.15),
      'yearly': (sumfees * 26)
  }],
  level2: [{
      'weekly': ((inputs.hours1 * (1.85 + l2rate1) + inputs.hours2 * (1.85 + l2rate2) + inputs.hours3 * (1.85 + l2rate3) + inputs.hours4 * (1.85 + l2rate4) + inputs.hours5 * (1.85 + l2rate5) + inputs.hours6 * (1.85 + l2rate6))),
      'biweekly': ((inputs.hours1 * (1.85 + l2rate1) + inputs.hours2 * (1.85 + l2rate2) + inputs.hours3 * (1.85 + l2rate3) + inputs.hours4 * (1.85 + l2rate4) + inputs.hours5 * (1.85 + l2rate5) + inputs.hours6 * (1.85 + l2rate6)) * 2),
      'monthly': ((inputs.hours1 * (1.85 + l2rate1) + inputs.hours2 * (1.85 + l2rate2) + inputs.hours3 * (1.85 + l2rate3) + inputs.hours4 * (1.85 + l2rate4) + inputs.hours5 * (1.85 + l2rate5) + inputs.hours6 * (1.85 + l2rate6)) * 4.3),
      'yearly': ((inputs.hours1 * (1.85 + l2rate1) + inputs.hours2 * (1.85 + l2rate2) + inputs.hours3 * (1.85 + l2rate3) + inputs.hours4 * (1.85 + l2rate4) + inputs.hours5 * (1.85 + l2rate5) + inputs.hours6 * (1.85 + l2rate6)) * 52),
  }],
  copay2: [{
      'weekly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) / 2,
      'biweekly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)),
      'monthly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) * 2.15,
      'yearly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) * 26,
  }],
    home1: [{
      'weekly': ((inputs.hours1 * (2.40 + rate1) + inputs.hours2 * (2.40 + rate2) + inputs.hours3 * (2.40 + rate3) + inputs.hours4 * (2.40 + rate4) + inputs.hours5 * (2.40 + rate5) + inputs.hours6 * (2.40 + rate6))),
      'biweekly': ((inputs.hours1 * (2.40 + rate1) + inputs.hours2 * (2.40 + rate2) + inputs.hours3 * (2.40 + rate3) + inputs.hours4 * (2.40 + rate4) + inputs.hours5 * (2.40 + rate5) + inputs.hours6 * (2.40 + rate6)) * 2),
      'monthly': ((inputs.hours1 * (2.40 + rate1) + inputs.hours2 * (2.40 + rate2) + inputs.hours3 * (2.40 + rate3) + inputs.hours4 * (2.40 + rate4) + inputs.hours5 * (2.40 + rate5) + inputs.hours6 * (2.40 + rate6)) * 4.3),
      'yearly': ((inputs.hours1 * (2.40 + rate1) + inputs.hours2 * (2.40 + rate2) + inputs.hours3 * (2.40 + rate3) + inputs.hours4 * (2.40 + rate4) + inputs.hours5 * (2.40 + rate5) + inputs.hours6 * (2.40 + rate6)) * 52),
  }],
  copay1star: [{
      'weekly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) / 2,
      'biweekly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)),
      'monthly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) * 2.15,
      'yearly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) * 26,
  }],
    home2: [{
      'weekly': ((inputs.hours1 * (2.65 + rate1) + inputs.hours2 * (2.65 + rate2) + inputs.hours3 * (2.65 + rate3) + inputs.hours4 * (2.65 + rate4) + inputs.hours5 * (2.65 + rate5) + inputs.hours6 * (2.65 + rate6))),
      'biweekly': ((inputs.hours1 * (2.65 + rate1) + inputs.hours2 * (2.65 + rate2) + inputs.hours3 * (2.65 + rate3) + inputs.hours4 * (2.65 + rate4) + inputs.hours5 * (2.65 + rate5) + inputs.hours6 * (2.65 + rate6)) * 2),
      'monthly': ((inputs.hours1 * (2.65 + rate1) + inputs.hours2 * (2.65 + rate2) + inputs.hours3 * (2.65 + rate3) + inputs.hours4 * (2.65 + rate4) + inputs.hours5 * (2.65 + rate5) + inputs.hours6 * (2.65 + rate6)) * 4.3),
      'yearly': ((inputs.hours1 * (2.65 + rate1) + inputs.hours2 * (2.65 + rate2) + inputs.hours3 * (2.65 + rate3) + inputs.hours4 * (2.65 + rate4) + inputs.hours5 * (2.65 + rate5) + inputs.hours6 * (2.65 + rate6)) * 52),
  }],
  copay2star: [{
      'weekly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) / 2,
      'biweekly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)),
      'monthly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) * 2.15,
      'yearly': (Number(inputs.fee1) + Number(inputs.fee2) + Number(inputs.fee3) + Number(inputs.fee4) + Number(inputs.fee5) + Number(inputs.fee6)) * 26,
  }],
    home3: [{
      'weekly': ((inputs.hours1 * (2.90 + rate1) + inputs.hours2 * (2.90 + rate2) + inputs.hours3 * (2.90 + rate3) + inputs.hours4 * (2.90 + rate4) + inputs.hours5 * (2.90 + rate5) + inputs.hours6 * (2.90 + rate6))),
      'biweekly': ((inputs.hours1 * (2.90 + rate1) + inputs.hours2 * (2.90 + rate2) + inputs.hours3 * (2.90 + rate3) + inputs.hours4 * (2.90 + rate4) + inputs.hours5 * (2.90 + rate5) + inputs.hours6 * (2.90 + rate6)) * 2),
      'monthly': ((inputs.hours1 * (2.90 + rate1) + inputs.hours2 * (2.90 + rate2) + inputs.hours3 * (2.90 + rate3) + inputs.hours4 * (2.90 + rate4) + inputs.hours5 * (2.90 + rate5) + inputs.hours6 * (2.90 + rate6)) * 4.3),
      'yearly': ((inputs.hours1 * (2.90 + rate1) + inputs.hours2 * (2.90 + rate2) + inputs.hours3 * (2.90 + rate3) + inputs.hours4 * (2.90 + rate4) + inputs.hours5 * (2.90 + rate5) + inputs.hours6 * (2.90 + rate6)) * 52),
  }],
  copay3star: [{
      'weekly': 0,
      'biweekly': 0,
      'monthly': 0,
      'yearly': 0,
  }],
    home4: [{
      'weekly': ((inputs.hours1 * (3.15 + rate1) + inputs.hours2 * (3.15 + rate2) + inputs.hours3 * (3.15 + rate3) + inputs.hours4 * (3.15 + rate4) + inputs.hours5 * (3.15 + rate5) + inputs.hours6 * (3.15 + rate6))),
      'biweekly': ((inputs.hours1 * (3.15 + rate1) + inputs.hours2 * (3.15 + rate2) + inputs.hours3 * (3.15 + rate3) + inputs.hours4 * (3.15 + rate4) + inputs.hours5 * (3.15 + rate5) + inputs.hours6 * (3.15 + rate6)) * 2),
      'monthly': ((inputs.hours1 * (3.15 + rate1) + inputs.hours2 * (3.15 + rate2) + inputs.hours3 * (3.15 + rate3) + inputs.hours4 * (3.15 + rate4) + inputs.hours5 * (3.15 + rate5) + inputs.hours6 * (3.15 + rate6)) * 4.3),
      'yearly': ((inputs.hours1 * (3.15 + rate1) + inputs.hours2 * (3.15 + rate2) + inputs.hours3 * (3.15 + rate3) + inputs.hours4 * (3.15 + rate4) + inputs.hours5 * (3.15 + rate5) + inputs.hours6 * (3.15 + rate6)) * 52),
  }],
  copay4star: [{
      'weekly': 0,
      'biweekly': 0,
      'monthly': 0,
      'yearly': 0,
  }],
    home5: [{
      'weekly': ((inputs.hours1 * (3.40 + rate1) + inputs.hours2 * (3.40 + rate2) + inputs.hours3 * (3.40 + rate3) + inputs.hours4 * (3.40 + rate4) + inputs.hours5 * (3.40 + rate5) + inputs.hours6 * (3.40 + rate6))),
      'biweekly': ((inputs.hours1 * (3.40 + rate1) + inputs.hours2 * (3.40 + rate2) + inputs.hours3 * (3.40 + rate3) + inputs.hours4 * (3.40 + rate4) + inputs.hours5 * (3.40 + rate5) + inputs.hours6 * (3.40 + rate6)) * 2),
      'monthly': ((inputs.hours1 * (3.40 + rate1) + inputs.hours2 * (3.40 + rate2) + inputs.hours3 * (3.40 + rate3) + inputs.hours4 * (3.40 + rate4) + inputs.hours5 * (3.40 + rate5) + inputs.hours6 * (3.40 + rate6)) * 4.3),
      'yearly': ((inputs.hours1 * (3.40 + rate1) + inputs.hours2 * (3.40 + rate2) + inputs.hours3 * (3.40 + rate3) + inputs.hours4 * (3.40 + rate4) + inputs.hours5 * (3.40 + rate5) + inputs.hours6 * (3.40 + rate6)) * 52),
  }],
  copay5star: [{
      'weekly': 0,
      'biweekly': 0,
      'monthly': 0,
      'yearly': 0,
  }]
};
