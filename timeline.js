const timelineElement = document.getElementById('timeline');

const jobs = [
  { title: 'Director', company: 'Discover', startDate: '2022', endDate: new Date().getFullYear().toString(), color: '#E55C20', logo: 'assets/RDAMBA_Logo_Discover.jpg', class: 'jobg'  },
  { title: 'Senior Manager', company: 'Amazon', startDate: '2020', endDate: '2022', color: '#FF9900', logo: 'assets/RDAMBA_Logo_Amazon.jpg', class: 'jobf'  },
  { title: 'Senior Manager', company: 'Holland America', startDate: '2019', endDate: '2020', color: '#132356', logo: 'assets/RDAMBA_Logo_Holland.jpg', class: 'jobe'  },
  { title: 'Manager', company: 'Amazon', startDate: '2018', endDate: '2019', color: '#FF9900', logo: 'assets/RDAMBA_Logo_Amazon.jpg', class: 'jobd'  },
  { title: 'Senior Product Manager', company: 'Splash Mktg', startDate: '2015', endDate: '2018', color: '#00a8ff', logo: 'assets/RDAMBA_Logo_Splash.jpg', class: 'jobc'  },
  { title: 'Product Manager', company: 'MyCultureFit', startDate: '2012', endDate: '2015', color: 'rgb(197 255 190)', logo: 'null', class: 'jobb'  },
  { title: 'Front End Developer', company: 'Splash Mktg', startDate: '2010', endDate: '2012', color: '#00a8ff', logo: 'assets/RDAMBA_Logo_Splash.jpg', class: 'joba' },
  { title: 'Jr Accountant', company: 'Harris Cotherman & Assoc', startDate: '2006', endDate: '2010', color: 'wheat', logo: 'null', class: 'jobz' },
];

const timelineStart = new Date(jobs[jobs.length-1].startDate);
const timelineEnd = new Date(jobs[0].endDate);

const timelineDuration = timelineEnd.getMonth() - timelineStart.getMonth() + 
                         (12 * (timelineEnd.getFullYear() - timelineStart.getFullYear()));

jobs.forEach(job => {
  const jobElement = document.createElement('div');
  const jobWrapper = document.createElement('span');
  const jobLogo = document.createElement('img');
  const jobTitle = document.createElement('span');
  const jobCompany = document.createElement('span');
  const jobStartDate = document.createElement('span');
  const jobEndDate = document.createElement('span');

  const jobStart = new Date(job.startDate);
  const jobEnd = new Date(job.endDate);
  const jobDuration = jobEnd.getMonth() - jobStart.getMonth() + 
                      (12 * (jobEnd.getFullYear() - jobStart.getFullYear()));

  jobTitle.className = 'job-title';
  jobCompany.className = 'job-company';
  jobStartDate.className = 'job-start';
  jobEndDate.className = 'job-end';
  jobWrapper.className = 'job-wrapper';
  jobLogo.className = 'job-logo';

  jobTitle.innerText = job.title;
  jobCompany.innerText = job.company;
  jobStartDate.innerText = job.startDate;
  jobEndDate.innerText = job.endDate;
  jobLogo.src = job.logo;

  jobWrapper.appendChild(jobLogo);
  jobWrapper.appendChild(jobTitle);
  jobWrapper.appendChild(document.createTextNode(""));
  jobWrapper.appendChild(jobCompany);
  jobWrapper.appendChild(document.createTextNode(", from "));
  jobWrapper.appendChild(jobStartDate);
  jobWrapper.appendChild(document.createTextNode(" to "));
  jobWrapper.appendChild(jobEndDate);

  jobElement.classList.add(job.class);
  jobElement.className += ' job';
  jobElement.style.height = `${(jobDuration / timelineDuration) * 100}%`;
  jobElement.style.backgroundColor = job.color;
  jobElement.appendChild(jobWrapper);

  timelineElement.appendChild(jobElement);
});
