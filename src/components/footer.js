import Image from "next/image";
import Link from "next/link";
import FooterCards from "./global/footerCards";

export default function Footer() {
  return (
    <>
    {/* <FooterCards/> */}
    <footer className="bg-primary text-white md:mt-12.5 mt-7">
        <div className="container">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-7 md:py-17.5 py-12 [&_ul]:list-none! [&_ul]:p-0! [&_ul]:m-0! [&_ul_li_a]:relative [&_ul_li_a]:leading-none [&_ul_li_a]:inline-block [&_ul_li_a]:pb-1 [&_ul_li_a]:after:content-[''] [&_ul_li_a]:after:absolute [&_ul_li_a]:after:bottom-0 [&_ul_li_a]:after:left-0 [&_ul_li_a]:after:w-0 [&_ul_li_a]:after:h-px [&_ul_li_a]:after:bg-white [&_ul_li_a]:after:transition-all [&_ul_li_a]:hover:after:w-full">
            <div className="p-0">
              <h6 className="mb-5 text-[18px] leading-none font-normal font-outfit">Top Collection</h6>
              <ul className="list-none! p-0! m-0! [&_li]:mb-1.5 text-sm">
                <li>
                  <Link href="#">Backpacks</Link>
                </li>
                <li>
                  <Link href="#">Shoes</Link>
                </li>
                <li>
                  <Link href="#">Jewelry</Link>
                </li>
                <li>
                  <Link href="#">Watches</Link>
                </li>
                <li>
                  <Link href="#">Clothing</Link>
                </li>
                <li>
                  <Link href="#">Golf</Link>
                </li>
              </ul>
            </div>
            <div className="p-0">
              <h6 className="mb-5 text-[18px] leading-none font-normal font-outfit">My Account</h6>
              <ul className="list-none! p-0! m-0! [&_li]:mb-1.5 text-sm">
                <li>
                  <Link href="#">Profile</Link>
                </li>
                <li>
                  <Link href="#">Purchases</Link>
                </li>
                <li>
                  <Link href="#">Sales</Link>
                </li>
                <li>
                  <Link href="#">Obsessions</Link>
                </li>
                <li>
                  <Link href="#">Saved Searches</Link>
                </li>
              </ul>
            </div>
            <div className="p-0">
              <h6 className="mb-5 text-[18px] leading-none font-normal font-outfit">Need Help</h6>
              <ul className="list-none! p-0! m-0! [&_li]:mb-1.5 text-sm">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Shipping</Link>
                </li>
                <li>
                  <Link href="#">Returns</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="p-0">
              <h6 className="mb-5 text-[18px] leading-none font-normal font-outfit">Company</h6>
              <ul className="list-none! p-0! m-0! [&_li]:mb-1.5 text-sm">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
                <li>
                  <Link href="#">Investor Relations</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 py-6 border-t border-[rgba(255,255,255,0.2)]">
            <div className="flex flex-wrap md:flex-row flex-col items-center gap-x-7.5 gap-y-2 md:pe-5 md:border-e border-[rgba(255,255,255,0.2)] md:pb-0 pb-4">
              <p className="m-0">Follow Us On</p>
              <ul className="list-none! p-0! m-0! flex flex-wrap gap-2.5 [&_a]:w-10 [&_a]:h-10 [&_a]:flex [&_a]:justify-center [&_a]:items-center">
                <li>
                  <Link href="#" className="btn btn-white-outline p-2.5"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.19311 16V8.70218H7.55084L7.90457 5.85725H5.19311V4.04118C5.19311 3.21776 5.41238 2.65661 6.55063 2.65661L8 2.65599V0.111384C7.74935 0.0775563 6.88896 0 5.88756 0C3.79647 0 2.36488 1.32557 2.36488 3.75942V5.85725H0V8.70218H2.36488V16H5.19311Z" fill="currentcolor"/></svg></Link>
                </li>
                <li>
                  <Link href="#" className="btn btn-white-outline p-2.5"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9594 4.70406C15.9218 3.85389 15.7844 3.26946 15.5873 2.76299C15.3841 2.22541 15.0715 1.74413 14.662 1.34402C14.2618 0.937687 13.7772 0.621936 13.2457 0.421959C12.7363 0.225045 12.1548 0.0875174 11.3045 0.0500725C10.4478 0.00937687 10.1758 0 8.00311 0C5.83039 0 5.55844 0.00937686 4.70495 0.0468843C3.85465 0.0843918 3.27008 0.221982 2.76367 0.418771C2.22583 0.621936 1.74446 0.934499 1.34427 1.34402C0.937864 1.7441 0.622211 2.22857 0.422039 2.75993C0.225087 3.26946 0.0875653 3.85077 0.050082 4.70087C0.00940991 5.55739 0 5.82929 0 8.00159C0 10.1739 0.00940991 10.4458 0.0468932 11.2991C0.0844078 12.1493 0.222024 12.7337 0.419007 13.2402C0.622211 13.7778 0.937864 14.2591 1.34427 14.6592C1.74446 15.0655 2.22902 15.3813 2.76048 15.5812C3.27005 15.7781 3.85147 15.9157 4.70192 15.9531C5.55525 15.9907 5.82736 16 8.00008 16C10.1728 16 10.4447 15.9907 11.2982 15.9531C12.1485 15.9156 12.7331 15.7782 13.2395 15.5812C13.7714 15.3756 14.2544 15.0612 14.6577 14.658C15.0609 14.2549 15.3755 13.772 15.5811 13.2402C15.778 12.7307 15.9156 12.1493 15.9531 11.2991C15.9906 10.4458 16 10.1739 16 8.00159C16 5.82929 15.9968 5.55736 15.9594 4.70406ZM14.5182 11.2366C14.4838 12.018 14.3525 12.44 14.2431 12.7213C13.9742 13.4183 13.4209 13.9715 12.7237 14.2404C12.4423 14.3498 12.0173 14.481 11.2387 14.5153C10.3947 14.553 10.1415 14.5622 8.0063 14.5622C5.87106 14.5622 5.61474 14.553 4.7737 14.5153C3.99214 14.481 3.57011 14.3498 3.28875 14.2404C2.94183 14.1122 2.62605 13.909 2.3697 13.6433C2.10397 13.3839 1.90077 13.0714 1.77253 12.7245C1.66312 12.4432 1.53185 12.018 1.49755 11.2398C1.45991 10.3959 1.45066 10.1426 1.45066 8.00781C1.45066 5.87298 1.45991 5.61671 1.49755 4.77598C1.53185 3.99458 1.66312 3.57262 1.77253 3.29131C1.90077 2.94431 2.10397 2.62865 2.37289 2.37229C2.63224 2.10661 2.94486 1.90344 3.29194 1.77539C3.5733 1.66599 3.99852 1.53471 4.77689 1.5003C5.62097 1.46279 5.87425 1.45341 8.00933 1.45341C10.1478 1.45341 10.4009 1.46279 11.2419 1.5003C12.0235 1.53474 12.4455 1.66596 12.7269 1.77535C13.0738 1.90344 13.3896 2.10661 13.6459 2.37229C13.9117 2.63174 14.1149 2.94431 14.2431 3.29131C14.3525 3.57262 14.4838 3.99761 14.5182 4.77598C14.5557 5.6199 14.5651 5.87298 14.5651 8.00781C14.5651 10.1426 14.5557 10.3927 14.5182 11.2366Z" fill="currentcolor"/><path d="M8.00314 3.8914C5.73358 3.8914 3.89217 5.73233 3.89217 8.00159C3.89217 10.2709 5.73358 12.1118 8.00314 12.1118C10.2728 12.1118 12.1141 10.2709 12.1141 8.00159C12.1141 5.73233 10.2728 3.8914 8.00314 3.8914ZM8.00314 10.6678C6.53076 10.6678 5.33642 9.47383 5.33642 8.00159C5.33642 6.52936 6.53076 5.33544 8.00311 5.33544C9.47562 5.33544 10.6698 6.52936 10.6698 8.00159C10.6698 9.47383 9.47559 10.6678 8.00314 10.6678ZM13.2365 3.72887C13.2365 4.25879 12.8067 4.68843 12.2766 4.68843C11.7466 4.68843 11.3169 4.25879 11.3169 3.72887C11.3169 3.19889 11.7466 2.76936 12.2766 2.76936C12.8067 2.76936 13.2365 3.19886 13.2365 3.72887Z" fill="currentcolor"/></svg></Link>
                </li>
                <li>
                  <Link href="#" className="btn btn-white-outline p-2.5"><svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.71752 0C2.33218 0 0 2.81013 0 5.87427C0 7.29533 0.794061 9.06741 2.06516 9.62944C2.25817 9.71644 2.36318 9.67944 2.40619 9.50043C2.44419 9.36442 2.6112 8.70939 2.69221 8.40038C2.71721 8.30138 2.70421 8.21537 2.6242 8.12237C2.20217 7.63435 1.86714 6.74531 1.86714 5.91127C1.86714 3.77417 3.56627 1.69908 6.4575 1.69908C8.95769 1.69908 10.7068 3.32315 10.7068 5.64626C10.7068 8.27137 9.31772 10.0875 7.51258 10.0875C6.5135 10.0875 5.76944 9.30342 6.00546 8.33338C6.29048 7.17833 6.84953 5.93627 6.84953 5.10323C6.84953 4.3562 6.42749 3.73817 5.56543 3.73817C4.54835 3.73817 3.72329 4.74522 3.72329 6.09728C3.72329 6.95632 4.02731 7.53634 4.02731 7.53634C4.02731 7.53634 3.02123 11.6005 2.83422 12.3596C2.51819 13.6446 2.87722 15.7257 2.90822 15.9047C2.92723 16.0037 3.03823 16.0347 3.10024 15.9537C3.19925 15.8237 4.41534 14.0886 4.75637 12.8346C4.88038 12.3776 5.38941 10.5245 5.38941 10.5245C5.72444 11.1295 6.69151 11.6365 7.72159 11.6365C10.7858 11.6365 13 8.94341 13 5.60125C12.989 2.39711 10.2468 0 6.71752 0Z" fill="currentcolor"/></svg></Link>
                </li>
                <li>
                  <Link href="#" className="btn btn-white-outline p-2.5"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92704 6.77491L14.5111 0H13.1879L8.33921 5.88256L4.4666 0H0L5.85615 8.89547L0 16H1.32333L6.44364 9.78782L10.5334 16H15L8.92671 6.77491H8.92704ZM7.11456 8.97384L1.80014 1.03974H3.83269L13.1885 15.0075H11.156L7.11456 8.97418V8.97384Z" fill="currentcolor"/></svg></Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap md:flex-row flex-col items-center gap-x-7.5 gap-y-2 md:pe-5 md:ps-7.5 pt-3 md:pt-0">
              <p className="m-0">Download Our App</p>
              <ul className="list-none! p-0! m-0! flex gap-2.5">
                <li>
                  <Link href="#">
                    <Image
                        src="/images/app-store.png"
                        alt="Download On App Store"
                        width={140}
                        height={40}
                      />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                        src="/images/google-store.png"
                        alt="Download On Google Play"
                        width={140}
                        height={40}
                      />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-6 border-t border-[rgba(255,255,255,0.2)] text-center">
            <p className="mb-0 text-sm">© 2026 ALL-DIS. All rights reserved</p>
          </div>
        </div>
    </footer>
    </>
  );
}