window.addEventListener('DOMContentLoaded', function() {
	var splide = new Splide( '.splide', {
		type   : 'loop',
		perPage: 1,
		focus  : 'left',
		arrowPath: 'm15.5 0.932-4.3 4.38...',
		rewind: true
	  } );
	  
	splide.mount();
	
	const menuItems = document.querySelectorAll(".header nav .menu > li");
	const mobileMenuElement = document.createElement("div");
	const mobileMenuItemsElement = document.createElement("ul");
	mobileMenuElement.appendChild(mobileMenuItemsElement);
	
	mobileMenuElement.classList.add("mobile-menu");
	
	menuItems.forEach (item => {
		const link = item.querySelector("a");
		const linkHref = link.getAttribute("href");
		const linkText = link.textContent;
	
		const linkInnerMenu1 = item.querySelector(".menu__services-inner-wrapper");
		const linkInnerMenu2 = item.querySelector(".menu__inner-wrapper");
	
		const mobileMenuItemElement = document.createElement("li");
		const mobileMenuLinkElement = document.createElement("a");
		mobileMenuLinkElement.classList.add("mobile-menu-title");
		mobileMenuItemsElement.appendChild(mobileMenuItemElement);
		mobileMenuItemElement.appendChild(mobileMenuLinkElement);
		mobileMenuLinkElement.setAttribute("href", linkHref);
		mobileMenuLinkElement.textContent = linkText;
	
		if (linkInnerMenu1) {
		
			const allLinkInnerMenuItems = linkInnerMenu1.querySelectorAll("a");
			const linkInnerMenu1_wrapper = document.createElement("ul");
	
			linkInnerMenu1_wrapper.classList.add("mobile-menu-subtitle");
	
			allLinkInnerMenuItems.forEach(innerItem => {
				const linkInnerEl = document.createElement("a");
				linkInnerEl.setAttribute("href", innerItem.getAttribute("href"));
				linkInnerEl.textContent = innerItem.querySelector('.menu__services-inner-title').textContent;
				linkInnerMenu1_wrapper.appendChild(linkInnerEl);
			})
			mobileMenuItemElement.appendChild(linkInnerMenu1_wrapper);
	
			mobileMenuItemElement.addEventListener('click', () => {
				linkInnerMenu1_wrapper.classList.toggle("mobile-menu-subtitle-active");
				mobileMenuItemElement.classList.toggle("mobile-menu-title-expand-active");    
			})
			
			mobileMenuItemElement.classList.add("mobile-menu-title-expand");
	
	  }	else if (linkInnerMenu2) {
	
			const allLinkInnerMenuItems = linkInnerMenu2.querySelectorAll("a");
			const linkInnerMenu2_wrapper = document.createElement("ul");
	
			linkInnerMenu2_wrapper.classList.add("mobile-menu-subtitle");
	
			allLinkInnerMenuItems.forEach(innerItem => {
				const linkInnerEl = document.createElement("a");
				linkInnerEl.setAttribute("href", innerItem.getAttribute("href"));
				linkInnerEl.textContent = innerItem.textContent;
				linkInnerMenu2_wrapper.appendChild(linkInnerEl);
			})
			mobileMenuItemElement.appendChild(linkInnerMenu2_wrapper);
	
			mobileMenuItemElement.addEventListener('click', () => {
				linkInnerMenu2_wrapper.classList.toggle("mobile-menu-subtitle-active");
				mobileMenuItemElement.classList.toggle("mobile-menu-title-expand-active");  
			})
	
			mobileMenuItemElement.classList.add("mobile-menu-title-expand");
		  }
	})
	
	document.body.appendChild(mobileMenuElement);
	
	mobileMenuElement.innerHTML += `
	<div class="mobile-menu-icons">
		<div>
			<ul class="mobile-menu__menu-items mobile-menu__menu-items-horizontal">
			<li>
				<a href="#">
					<svg width="32" height="32" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.38046 12L12.3742 10L9.38046 8L9.38046 12Z" fill="#2D415E"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.39917 10C0.39917 4.478 4.86785 0 10.3784 0C15.8889 0 20.3576 4.478 20.3576 10C20.3576 15.522 15.8889 20 10.3784 20C4.86785 20 0.39917 15.522 0.39917 10ZM16.3571 13.0162C16.6139 12.0383 16.6139 10.0102 16.6139 10.0102C16.6139 10.0102 16.6242 7.97211 16.3571 6.99417C16.2132 6.45889 15.7921 6.03668 15.2579 5.89264C14.282 5.625 10.3784 5.625 10.3784 5.625C10.3784 5.625 6.47477 5.625 5.49886 5.88242C4.9749 6.02646 4.54337 6.45889 4.39962 6.99417C4.14274 7.97211 4.14274 10 4.14274 10C4.14274 10 4.14274 12.0383 4.39962 13.0058C4.54352 13.5411 4.9647 13.9633 5.49886 14.1074C6.48497 14.375 10.3784 14.375 10.3784 14.375C10.3784 14.375 14.282 14.375 15.2579 14.1176C15.7921 13.9735 16.2132 13.5515 16.3571 13.0162Z" fill="#2D415E"/>
					</svg>	
				</a>
			</li>
			<li>
				<a href="#">
					<svg width="32" height="32" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.79 10C12.79 11.1046 11.8964 12 10.7942 12C9.69186 12 8.79831 11.1046 8.79831 10C8.79831 8.89541 9.69186 8 10.7942 8C11.8964 8 12.79 8.89541 12.79 10Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5387 6.40301C15.4412 6.13819 15.2856 5.8985 15.0835 5.70175C14.8871 5.49917 14.6481 5.34326 14.3836 5.24553C14.1692 5.16207 13.847 5.06272 13.2536 5.03565C12.6117 5.00632 12.4193 5 10.7942 5C9.169 5 8.97654 5.00616 8.3348 5.03549C7.74141 5.06272 7.41908 5.16207 7.20479 5.24553C6.94036 5.34326 6.70116 5.49917 6.50499 5.70175C6.30282 5.8985 6.14724 6.13803 6.04956 6.40301C5.96626 6.61791 5.86712 6.94091 5.84012 7.53553C5.81084 8.17861 5.80453 8.37147 5.80453 10.0001C5.80453 11.6285 5.81084 11.8214 5.84012 12.4646C5.86712 13.0593 5.96626 13.3821 6.04956 13.597C6.14724 13.862 6.30266 14.1015 6.50482 14.2983C6.70116 14.5008 6.9402 14.6567 7.20463 14.7545C7.41908 14.8381 7.74141 14.9374 8.3348 14.9645C8.97654 14.9938 9.16884 15 10.7941 15C12.4194 15 12.6119 14.9938 13.2535 14.9645C13.8469 14.9374 14.1692 14.8381 14.3836 14.7545C14.9144 14.5493 15.334 14.1289 15.5387 13.597C15.622 13.3821 15.7212 13.0593 15.7483 12.4646C15.7776 11.8214 15.7837 11.6285 15.7837 10.0001C15.7837 8.37147 15.7776 8.17861 15.7483 7.53553C15.7213 6.94091 15.6222 6.61791 15.5387 6.40301ZM10.7942 13C9.14075 13 7.80038 11.657 7.80038 10C7.80038 8.34304 9.14075 7 10.7942 7C12.4475 7 13.7879 8.34304 13.7879 10C13.7879 11.657 12.4475 13 10.7942 13ZM12.79 6.5C12.79 6.77613 13.0134 7 13.2889 7C13.5645 7 13.7878 6.77613 13.7879 6.5C13.7879 6.22387 13.5645 6 13.2889 6C13.0134 6 12.79 6.22387 12.79 6.5Z" fill="#2D415E"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.814941 10C0.814941 4.478 5.28363 0 10.7941 0C16.3047 0 20.7734 4.478 20.7734 10C20.7734 15.522 16.3047 20 10.7941 20C5.28363 20 0.814941 15.522 0.814941 10ZM16.2235 13.7613C16.3651 13.396 16.4621 12.9787 16.4898 12.3674C16.5178 11.7551 16.5244 11.5594 16.5244 10C16.5244 8.44055 16.5178 8.24493 16.49 7.6326C16.4621 7.02133 16.3653 6.604 16.2235 6.23871C16.0798 5.85556 15.8541 5.50858 15.5627 5.22171C15.2764 4.9295 14.93 4.70337 14.5476 4.55917C14.1831 4.41742 13.7666 4.32037 13.1566 4.2926C12.5456 4.26453 12.3504 4.25781 10.7941 4.25781C9.23794 4.25781 9.04273 4.26453 8.43167 4.29245C7.82167 4.32037 7.40521 4.41742 7.04068 4.55933C6.65833 4.70352 6.31191 4.9295 6.02579 5.22171C5.7342 5.50842 5.50853 5.85556 5.36463 6.23871C5.22302 6.604 5.12618 7.02133 5.09847 7.6326C5.07045 8.24493 5.0639 8.44055 5.0639 10C5.0639 11.5594 5.07045 11.7551 5.09862 12.3676C5.12633 12.9787 5.22333 13.3961 5.36494 13.7613C5.50883 14.1444 5.73435 14.4916 6.02579 14.7783C6.31206 15.0705 6.65833 15.2965 7.04083 15.4407C7.40521 15.5826 7.82183 15.6796 8.43167 15.7076C9.04288 15.7355 9.23794 15.7422 10.7943 15.7422C12.3505 15.7422 12.5457 15.7355 13.1568 15.7076C13.7666 15.6796 14.1832 15.5826 14.5476 15.4407C15.3173 15.1424 15.9258 14.5326 16.2235 13.7613Z" fill="#2D415E"/>
					</svg>
				</a>
			</li>
			<li>
				<a href="#">
					<svg width="32" height="32" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.4708 19.952C11.3928 19.9867 11.3145 20.0188 11.236 20.048C11.3145 20.0188 11.3928 19.9867 11.4708 19.952Z" fill="black"/>
						<path d="M11.4708 19.9732C11.3925 19.992 11.3143 20.0092 11.236 20.0268C11.3143 20.0092 11.3925 19.992 11.4708 19.9732Z" fill="black"/>
						<path d="M11.4708 19.9629C11.3929 19.991 11.3146 20.016 11.236 20.0371C11.3146 20.016 11.3929 19.991 11.4708 19.9629Z" fill="black"/>
						<path d="M11.4708 19.9775C11.3928 19.9936 11.3143 20.0084 11.236 20.0225C11.3143 20.0084 11.3928 19.9936 11.4708 19.9775Z" fill="black"/>
						<path d="M12.4033 19.9717C12.3688 19.9908 12.3341 20.01 12.2994 20.0283C12.3341 20.01 12.3688 19.9908 12.4033 19.9717Z" fill="black"/>
						<path d="M12.4014 18.9697C12.3681 18.9904 12.3348 19.01 12.3014 19.0303C12.3348 19.01 12.3681 18.9904 12.4014 18.9697Z" fill="black"/>
						<path d="M12.4014 19.9691C12.3682 19.9898 12.3348 20.0109 12.3014 20.0309C12.3348 20.0109 12.3682 19.9902 12.4014 19.9691Z" fill="black"/>
						<path d="M12.4014 19.9717C12.3683 19.9912 12.3349 20.0096 12.3014 20.0283C12.3349 20.0096 12.3683 19.9912 12.4014 19.9717Z" fill="black"/>
						<path d="M10.4729 19.9848C10.3947 19.9961 10.3165 20.0063 10.2381 20.0152C10.3165 20.0063 10.3947 19.9961 10.4729 19.9848Z" fill="black"/>
						<path d="M20.3347 10C20.3347 4.478 15.866 0 10.3555 0C4.84497 0 0.376282 4.478 0.376282 10C0.376282 15.522 4.84497 20 10.3555 20C10.4141 20 10.4724 19.9988 10.5309 19.9977V12.2131H8.38693V9.70932H10.5309V7.86682C10.5309 5.72998 11.8327 4.56696 13.7348 4.56696C14.6457 4.56696 15.4287 4.63501 15.6569 4.66537V6.89865H14.3453C13.3104 6.89865 13.1101 7.39151 13.1101 8.11462V9.70932H15.5845L15.2619 12.2131H13.1101V19.6136C17.2812 18.4154 20.3347 14.5645 20.3347 10Z" fill="#2D415E"/>
						<path d="M10.4729 19.9801C10.3949 19.9973 10.3166 20.0109 10.2381 20.0199C10.3166 20.0109 10.3949 19.9973 10.4729 19.9801Z" fill="black"/>
						<path d="M10.4729 19.9947C10.3948 19.9994 10.3164 20.0029 10.2381 20.0053C10.3164 20.0029 10.3948 19.9994 10.4729 19.9947Z" fill="black"/>
					</svg>
				</a>
			</li>
			<li>
				<a href="#">
					<svg width="32" height="32" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.937622 10C0.937622 4.478 5.40631 0 10.9168 0C16.4273 0 20.896 4.478 20.896 10C20.896 15.522 16.4273 20 10.9168 20C5.40631 20 0.937622 15.522 0.937622 10ZM5.5866 15.1172H8.01699V7.79007H5.5866V15.1172ZM6.80187 6.78955H6.78603C5.97047 6.78955 5.443 6.22696 5.443 5.52383C5.443 4.80484 5.98661 4.25781 6.81801 4.25781C7.64941 4.25781 8.16103 4.80484 8.17687 5.52383C8.17687 6.22696 7.64941 6.78955 6.80187 6.78955ZM14.3504 15.1172H16.7805V10.9158C16.7805 8.66531 15.5815 7.6181 13.9825 7.6181C12.6931 7.6181 12.1152 8.32825 11.7922 8.82751V7.79007H9.36199C9.39382 8.47748 9.36199 15.1172 9.36199 15.1172H11.7922V11.0254C11.7922 10.8064 11.8079 10.5876 11.8722 10.4311C12.0479 9.99359 12.4478 9.54041 13.1191 9.54041C13.9985 9.54041 14.3504 10.2122 14.3504 11.1974V15.1172Z" fill="#2D415E"/>
					</svg>
				</a>
			</li>
			</ul>
		</div>
	
		<div class="mobile-menu__actions-block">
			<button class="mobile-menu__search-button"></button>
			<div class="mobile-menu__language-select">ENG</div>
		</div>
	</div>
	`;
	
	const mobileMenuIcon = document.querySelector(".header .menu__icon");
	mobileMenuIcon.addEventListener("click", () => {
	  mobileMenuElement.classList.toggle("mobile-menu-show");
	  mobileMenuIcon.classList.toggle("menu__icon_active");   
	});
	
});