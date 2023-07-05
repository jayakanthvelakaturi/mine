const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// add click event on toggle
toggle.addEventListener('click', () => {
	ul.classList.toggle('nav__active');
});

// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "V. Jayakanth"
let start = 0;

const typeWrite = () => {
    if(start < nameText.length) {
		nameElement.innerHTML += nameText.charAt(start);
		start++;
		setTimeout(typeWrite, 300);
	}
}
typeWrite();

// open / close modal

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper__close')

// open modal
modalBtn.addEventListener('click', () => {
	modal.style.display = "flex";
})

// close modal
modalClose.addEventListener('click', () => {
	modal.style.display = "none";
})

// get current year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();




































// projects
const container = document.querySelector('.mainthing')
const projects = document.querySelectorAll('.boxes')
const projectHideBtn = document.querySelector('.project-hide-btn')
const navdu = document.querySelector('.nav')


projects.forEach((boxes, i)=>{
	boxes.addEventListener('mouseenter',()=>{
		boxes.firstElementChild.style.top = `-${boxes.firstElementChild.offsetHeight - boxes.offsetHeight + 20}px`
	});

	boxes.addEventListener('mouseleave',()=>{
		boxes.firstElementChild.style.top = '2rem'
	})

	// Big Project Image
	boxes.addEventListener('click',()=>{

		
		

		const bigImgWrapper = document.createElement('div');
		bigImgWrapper.className = 'project-img-wrapper';
		container.appendChild(bigImgWrapper);


		const bigImg = document.createElement('img');
		bigImg.className = "project-img";
		const imgPath = boxes.firstElementChild.getAttribute('src').split('.')[1];
		console.log(imgPath);
		bigImg.setAttribute("src",`.${imgPath}.png`);
		bigImgWrapper.appendChild(bigImg);
		document.body.style.overflowY = "hidden";


		projectHideBtn.classList.add("change");
		navdu.classList.add('change2')

		projectHideBtn.onclick = () => {
			projectHideBtn.classList.remove('change');
			bigImgWrapper.remove();
			document.body.style.overflow = "scroll";
			navdu.classList.remove('change2')
		}
		
		
	})
	// End of Big Project Image

	i>=6 && (boxes.style.cssText = "display:none; opacity:0");
	
})




// Main Button
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach((btn) => {
  let ripple;

  btn.addEventListener("mouseenter", (e) => {
    console.log("hi");
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
  });

  btn.addEventListener("mouseleave", () => {
    btn.removeChild(ripple);
  });
});

// End of Main Button


// Projects Button
const projectsBtn = document.querySelector('.projects-btn');
const projectsBtnText = document.querySelector('.projects-btn span');
let showHideBool = true

projectsBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	projects.forEach((boxes,i)=>{
		if(i>=6)
		{
			if(showHideBool)
			{
				boxes.style.display = "flex"
				boxes.style.opacity = "1"

				projectsBtnText.textContent = "Show Less"
				
			}
			else
			{
				boxes.style.display = "none"
				boxes.style.opacity = "0"

				projectsBtnText.textContent = "Show More"
			}
		}
	})
	showHideBool = !showHideBool;
})
// End of Projects Button







// Form names
	// Form
		const formHeading = document.querySelector('.form-heading')
		const formInputs = document.querySelectorAll('.contact-form-input')

		formInputs.forEach(input=>{
			input.addEventListener('focus',()=>{
				formHeading.textContent = `Your ${input.placeholder}`
			})
		})
	// End of Form
// End of Form names
















// Form validation
const form = document.querySelector('.contact-form')

const username = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

const messages = document.querySelectorAll(".message")

const error = (input,message) => {
	input.nextElementSibling.classList.add("error")
	input.nextElementSibling.textContent = message;
}

const success =(input) => {
	input.nextElementSibling.classList.remove("error")
}

const checkRequiredFields = (inputArr) => {
	inputArr.forEach(input => {
		if(input.value.trim() === "")
		{
			error(input, `${input.id} is required`)
		}
		
	})
}

const checkLength = (input,min) => {
	if(input.value.trim().length < min)
	{
		error(input,`${input.id} must be atleast ${min} characters`)
	}
	else
	{
		success(input);
	}
}

const checkEmail = (input) => {
	const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if(regEx.test(input.value.trim()))
	{
		success(input)
	}
	else
	{
		error(input,"Email is not valid")
	}
}

form.addEventListener("submit",e=>{
	

	checkLength(username,3)
	checkLength(subject,3)
	checkLength(message,10)

	checkEmail(email);

	checkRequiredFields([username,email,subject,message]);

	const notValid = Array.from(messages).find((message) => {
		return message.classList.contains("error")
	})

	notValid && e.preventDefault()
})
// End of Form validation
