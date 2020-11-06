import classes from './MainSkills.module.css'

const MainSkills = () => {
    return <div className={classes.main_skills}>
        <div className={classes.skills}>
            <div className={classes.main_circle}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V20.5205H8.02402V21.9877H6.55742V23.4526H18.4425V21.9877H16.9759V20.5205H25V0H0ZM15.511 21.9877H9.48897V20.5205H15.511V21.9877H15.511ZM23.5351 19.0556H1.46489V16.1222H23.5351V19.0556H23.5351ZM23.5351 14.6573H1.46489V1.46494H23.5351V14.6573H23.5351Z" fill="black" />
                    <path d="M9.95816 5.4134L8.92232 4.37756L5.23877 8.06111L8.92232 11.7446L9.95816 10.7088L7.31045 8.06111L9.95816 5.4134Z" fill="black" />
                    <path d="M16.0777 4.37756L15.0419 5.4134L17.6896 8.06111L15.0419 10.7088L16.0777 11.7446L19.7612 8.06111L16.0777 4.37756Z" fill="black" />
                    <path d="M12.6319 3.64405L10.9313 12.1931L12.3681 12.4789L14.0687 3.92986L12.6319 3.64405Z" fill="black" />
                </svg>
            </div>
            <div>
                <div className={`${classes.title} ${classes.title_fz16}`}>Web-разработка</div>
                <div className={classes.main_skillsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
        <div className={classes.skills}>
            <div className={classes.main_circle}>
                <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7188 0H1.5625C1.14827 0.000542615 0.751153 0.165337 0.458245 0.458245C0.165337 0.751153 0.000542615 1.14827 0 1.5625V22.6562C0.000542615 23.0705 0.165337 23.4676 0.458245 23.7605C0.751153 24.0534 1.14827 24.2182 1.5625 24.2188H11.7188C12.133 24.2182 12.5301 24.0534 12.823 23.7605C13.1159 23.4676 13.2807 23.0705 13.2812 22.6562V1.5625C13.2807 1.14827 13.1159 0.751153 12.823 0.458245C12.5301 0.165337 12.133 0.000542615 11.7188 0ZM8.46875 0.78125L8.24902 1.5625H4.99268L4.79736 0.78125H8.46875ZM12.5 22.6562C12.4997 22.8634 12.4173 23.0619 12.2709 23.2084C12.1244 23.3548 11.9259 23.4372 11.7188 23.4375H1.5625C1.35538 23.4372 1.15683 23.3548 1.01037 23.2084C0.863918 23.0619 0.781521 22.8634 0.78125 22.6562V1.5625C0.781521 1.35538 0.863918 1.15683 1.01037 1.01037C1.15683 0.863918 1.35538 0.781521 1.5625 0.78125H3.9917L4.30859 2.04785C4.32972 2.13236 4.37848 2.20738 4.44713 2.261C4.51579 2.31461 4.60039 2.34374 4.6875 2.34375H8.54492C8.63005 2.34375 8.71285 2.31594 8.78071 2.26455C8.84858 2.21317 8.89781 2.14102 8.9209 2.05908L9.28027 0.78125H11.7188C11.9259 0.781521 12.1244 0.863918 12.2709 1.01037C12.4173 1.15683 12.4997 1.35538 12.5 1.5625V22.6562Z" fill="black" />
                    <path d="M4.6875 21.875H1.95312C1.84952 21.875 1.75017 21.9162 1.67691 21.9894C1.60365 22.0627 1.5625 22.162 1.5625 22.2656C1.5625 22.3692 1.60365 22.4686 1.67691 22.5418C1.75017 22.6151 1.84952 22.6562 1.95312 22.6562H4.6875C4.7911 22.6562 4.89046 22.6151 4.96371 22.5418C5.03697 22.4686 5.07812 22.3692 5.07812 22.2656C5.07812 22.162 5.03697 22.0627 4.96371 21.9894C4.89046 21.9162 4.7911 21.875 4.6875 21.875Z" fill="black" />
                    <path d="M6.25 21.875H5.85938C5.75577 21.875 5.65642 21.9162 5.58316 21.9894C5.5099 22.0627 5.46875 22.162 5.46875 22.2656C5.46875 22.3692 5.5099 22.4686 5.58316 22.5418C5.65642 22.6151 5.75577 22.6562 5.85938 22.6562H6.25C6.3536 22.6562 6.45296 22.6151 6.52621 22.5418C6.59947 22.4686 6.64062 22.3692 6.64062 22.2656C6.64062 22.162 6.59947 22.0627 6.52621 21.9894C6.45296 21.9162 6.3536 21.875 6.25 21.875Z" fill="black" />
                    <path d="M8.01349 9.82123C7.9695 9.79484 7.92074 9.77737 7.87001 9.76982C7.81927 9.76227 7.76754 9.76479 7.71777 9.77723C7.668 9.78967 7.62117 9.81179 7.57996 9.84233C7.53874 9.87287 7.50394 9.91123 7.47755 9.95522L5.13379 13.8615C5.08049 13.9503 5.06466 14.0567 5.08979 14.1572C5.11492 14.2577 5.17894 14.3441 5.26778 14.3974C5.35662 14.4507 5.46299 14.4665 5.5635 14.4414C5.664 14.4163 5.75041 14.3522 5.80372 14.2634L8.14747 10.3572C8.17386 10.3132 8.19134 10.2644 8.19889 10.2137C8.20644 10.1629 8.20392 10.1112 8.19148 10.0615C8.17904 10.0117 8.15691 9.96486 8.12637 9.92364C8.09583 9.88242 8.05748 9.84762 8.01349 9.82123Z" fill="black" />
                    <path d="M9.28936 9.91206C9.2573 9.87201 9.21766 9.83866 9.17271 9.81392C9.12776 9.78918 9.07838 9.77354 9.02739 9.76788C8.9244 9.75646 8.82109 9.78643 8.74019 9.85118C8.65929 9.91593 8.60743 10.0102 8.59601 10.1132C8.58459 10.2161 8.61455 10.3194 8.6793 10.4003L10.0465 12.1093L8.6793 13.8183C8.61455 13.8992 8.58459 14.0025 8.59601 14.1055C8.60743 14.2085 8.65929 14.3027 8.74019 14.3675C8.82109 14.4322 8.9244 14.4622 9.02739 14.4508C9.13037 14.4394 9.22461 14.3875 9.28936 14.3066L10.8519 12.3535C10.9073 12.2842 10.9376 12.1981 10.9376 12.1093C10.9376 12.0206 10.9073 11.9345 10.8519 11.8652L9.28936 9.91206Z" fill="black" />
                    <path d="M3.99182 14.3066C4.05657 14.3875 4.15081 14.4393 4.2538 14.4508C4.35679 14.4622 4.46009 14.4322 4.54099 14.3675C4.62189 14.3027 4.67375 14.2085 4.68517 14.1055C4.69659 14.0025 4.66663 13.8992 4.60188 13.8183L3.23469 12.1093L4.60188 10.4003C4.63394 10.3603 4.6578 10.3143 4.67209 10.265C4.68638 10.2158 4.69083 10.1641 4.68517 10.1131C4.67952 10.0622 4.66388 10.0128 4.63914 9.96782C4.6144 9.92287 4.58105 9.88324 4.54099 9.85118C4.50093 9.81911 4.45495 9.79526 4.40568 9.78097C4.3564 9.76667 4.30479 9.76223 4.2538 9.76788C4.2028 9.77354 4.15342 9.78918 4.10847 9.81392C4.06352 9.83866 4.02388 9.87201 3.99182 9.91206L2.42932 11.8652C2.37385 11.9345 2.34363 12.0206 2.34363 12.1093C2.34363 12.1981 2.37385 12.2842 2.42932 12.3535L3.99182 14.3066Z" fill="black" />
                </svg>
            </div>
            <div>
                <div className={`${classes.title} ${classes.title_fz16}`}>Разработка приложений</div>
                <div className={classes.main_skillsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
        <div className={classes.skills}>
            <div className={classes.main_circle}>
                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3871 0H1.6129C1.18531 0.000560118 0.775384 0.17067 0.473027 0.473027C0.17067 0.775384 0.000560118 1.18531 0 1.6129V15.3226C0.000560118 15.7502 0.17067 16.1601 0.473027 16.4625C0.775384 16.7648 1.18531 16.9349 1.6129 16.9355H9.92439L9.38659 18.5484H8.06452C7.95757 18.5484 7.85501 18.5909 7.77939 18.6665C7.70377 18.7421 7.66129 18.8447 7.66129 18.9516V19.7581H4.03226C3.92532 19.7581 3.82275 19.8005 3.74713 19.8762C3.67151 19.9518 3.62903 20.0543 3.62903 20.1613C3.62903 20.2682 3.67151 20.3708 3.74713 20.4464C3.82275 20.522 3.92532 20.5645 4.03226 20.5645H21.7742C21.8811 20.5645 21.9837 20.522 22.0593 20.4464C22.1349 20.3708 22.1774 20.2682 22.1774 20.1613C22.1774 20.0543 22.1349 19.9518 22.0593 19.8762C21.9837 19.8005 21.8811 19.7581 21.7742 19.7581H17.3387V18.9516C17.3387 18.8447 17.2962 18.7421 17.2206 18.6665C17.145 18.5909 17.0424 18.5484 16.9355 18.5484H15.6134L15.0756 16.9355H23.3871C23.8147 16.9349 24.2246 16.7648 24.527 16.4625C24.8293 16.1601 24.9994 15.7502 25 15.3226V1.6129C24.9994 1.18531 24.8293 0.775384 24.527 0.473027C24.2246 0.17067 23.8147 0.000560118 23.3871 0ZM16.5323 19.3548V19.7581H8.46774V19.3548H16.5323ZM10.2369 18.5484L10.7747 16.9355H14.2253L14.7631 18.5484H10.2369ZM24.1935 15.3226C24.1933 15.5364 24.1082 15.7413 23.957 15.8925C23.8059 16.0437 23.6009 16.1288 23.3871 16.129H1.6129C1.3991 16.1288 1.19414 16.0437 1.04297 15.8925C0.891787 15.7413 0.806732 15.5364 0.806452 15.3226V14.5161H24.1935V15.3226ZM6.8377 10.0806L6.68649 13.7097H6.21673L6.06552 10.0806H6.8377ZM6.12097 9.27419L6.39012 7.66129H6.5131L6.78226 9.27419H6.12097ZM6.45161 6.85484C6.01462 6.85484 5.64516 6.30091 5.64516 5.64516C5.64516 5.23135 6.06754 4.63004 6.4506 4.20615C6.79587 4.58921 7.25806 5.20161 7.25806 5.64516C7.25806 6.30091 6.88861 6.85484 6.45161 6.85484ZM10.8397 6.04839L10.8871 6.14365V6.45161H9.27419V6.14365L9.32157 6.04839H10.8397ZM9.7248 5.24194L10.0806 4.53075L10.4365 5.24194H9.7248ZM10.8871 7.25806V13.6593C10.8873 13.6761 10.8884 13.693 10.8906 13.7097H9.27067C9.27286 13.693 9.27404 13.6761 9.27419 13.6593V7.25806H10.8871ZM14.5161 5.64516H15.7258V6.45161H15.3226C15.2156 6.45161 15.1131 6.4941 15.0375 6.56971C14.9618 6.64533 14.9194 6.7479 14.9194 6.85484C14.9194 6.96178 14.9618 7.06434 15.0375 7.13996C15.1131 7.21558 15.2156 7.25806 15.3226 7.25806H15.7258V8.06452H14.5161C14.4092 8.06452 14.3066 8.107 14.231 8.18262C14.1554 8.25824 14.1129 8.3608 14.1129 8.46774C14.1129 8.57468 14.1554 8.67725 14.231 8.75287C14.3066 8.82849 14.4092 8.87097 14.5161 8.87097H15.7258V9.67742H15.3226C15.2156 9.67742 15.1131 9.7199 15.0375 9.79552C14.9618 9.87114 14.9194 9.9737 14.9194 10.0806C14.9194 10.1876 14.9618 10.2901 15.0375 10.3658C15.1131 10.4414 15.2156 10.4839 15.3226 10.4839H15.7258V11.2903H14.5161C14.4092 11.2903 14.3066 11.3328 14.231 11.4084C14.1554 11.484 14.1129 11.5866 14.1129 11.6935C14.1129 11.8005 14.1554 11.9031 14.231 11.9787C14.3066 12.0543 14.4092 12.0968 14.5161 12.0968H15.7258V13.7097H12.9032V4.03226H15.7258V4.83871H14.5161C14.4092 4.83871 14.3066 4.88119 14.231 4.95681C14.1554 5.03243 14.1129 5.13499 14.1129 5.24194C14.1129 5.34888 14.1554 5.45144 14.231 5.52706C14.3066 5.60268 14.4092 5.64516 14.5161 5.64516ZM19.3548 10.4839V13.6593C19.355 13.6761 19.3562 13.693 19.3584 13.7097H17.7384C17.7406 13.693 17.7418 13.6761 17.7419 13.6593V10.4839H19.3548ZM17.7419 9.67742V9.36946L18.5484 7.75655L19.3548 9.36946V9.67742H17.7419ZM24.1935 13.7097H20.1578C20.16 13.693 20.1611 13.6761 20.1613 13.6593V9.27419C20.1612 9.21159 20.1467 9.14985 20.119 9.09375L18.9093 6.6744C18.8757 6.60743 18.8242 6.55113 18.7604 6.51178C18.6967 6.47243 18.6233 6.4516 18.5484 6.4516C18.4735 6.4516 18.4001 6.47243 18.3363 6.51178C18.2726 6.55113 18.2211 6.60743 18.1875 6.6744L16.9778 9.09375C16.95 9.14985 16.9355 9.21159 16.9355 9.27419V13.6593C16.9356 13.6761 16.9368 13.693 16.939 13.7097H16.5323V3.62903C16.5323 3.52209 16.4898 3.41953 16.4142 3.34391C16.3385 3.26829 16.236 3.22581 16.129 3.22581H12.5C12.3931 3.22581 12.2905 3.26829 12.2149 3.34391C12.1393 3.41953 12.0968 3.52209 12.0968 3.62903V13.7097H11.69C11.6922 13.693 11.6934 13.6761 11.6935 13.6593V6.04839C11.6935 5.98579 11.679 5.92404 11.6512 5.86794L10.4415 3.44859C10.408 3.38163 10.3564 3.32532 10.2927 3.28598C10.229 3.24663 10.1555 3.22579 10.0806 3.22579C10.0057 3.22579 9.93232 3.24663 9.86858 3.28598C9.80485 3.32532 9.75332 3.38163 9.71976 3.44859L8.51008 5.86794C8.48229 5.92404 8.4678 5.98579 8.46774 6.04839V13.6593C8.4679 13.6761 8.46908 13.693 8.47127 13.7097H7.49345L7.66079 9.69405C7.66129 9.68498 7.66079 9.67591 7.66079 9.66633V9.65423C7.65985 9.64004 7.65817 9.62591 7.65575 9.61189V9.61089L7.28276 7.37248C7.75101 7.01915 8.06452 6.37702 8.06452 5.64516C8.06452 4.60887 6.86341 3.46119 6.72631 3.33367C6.6516 3.26442 6.55348 3.22594 6.45161 3.22594C6.34974 3.22594 6.25163 3.26442 6.17692 3.33367C6.03982 3.46119 4.83871 4.60887 4.83871 5.64516C4.83871 6.37702 5.15222 7.01915 5.62046 7.37248L5.24748 9.61089V9.61189C5.24506 9.62591 5.24337 9.64004 5.24244 9.65423V9.66633C5.24244 9.67591 5.24194 9.68498 5.24244 9.69405L5.40978 13.7097H0.806452V1.6129C0.806732 1.3991 0.891787 1.19414 1.04297 1.04297C1.19414 0.891787 1.3991 0.806732 1.6129 0.806452H23.3871C23.6009 0.806732 23.8059 0.891787 23.957 1.04297C24.1082 1.19414 24.1933 1.3991 24.1935 1.6129V13.7097Z" fill="black" />
                    <path d="M4.4355 14.9193H2.01614C1.9092 14.9193 1.80664 14.9618 1.73102 15.0374C1.6554 15.113 1.61292 15.2156 1.61292 15.3225C1.61292 15.4295 1.6554 15.532 1.73102 15.6077C1.80664 15.6833 1.9092 15.7258 2.01614 15.7258H4.4355C4.54244 15.7258 4.645 15.6833 4.72062 15.6077C4.79624 15.532 4.83872 15.4295 4.83872 15.3225C4.83872 15.2156 4.79624 15.113 4.72062 15.0374C4.645 14.9618 4.54244 14.9193 4.4355 14.9193Z" fill="black" />
                    <path d="M6.04839 14.9193H5.64517C5.53823 14.9193 5.43567 14.9618 5.36005 15.0374C5.28443 15.113 5.24194 15.2156 5.24194 15.3225C5.24194 15.4295 5.28443 15.532 5.36005 15.6077C5.43567 15.6833 5.53823 15.7258 5.64517 15.7258H6.04839C6.15534 15.7258 6.2579 15.6833 6.33352 15.6077C6.40914 15.532 6.45162 15.4295 6.45162 15.3225C6.45162 15.2156 6.40914 15.113 6.33352 15.0374C6.2579 14.9618 6.15534 14.9193 6.04839 14.9193Z" fill="black" />
                    <path d="M10.0807 7.66125C9.97371 7.66125 9.87115 7.70374 9.79553 7.77936C9.71991 7.85498 9.67743 7.95754 9.67743 8.06448V12.5C9.67743 12.6069 9.71991 12.7095 9.79553 12.7851C9.87115 12.8607 9.97371 12.9032 10.0807 12.9032C10.1876 12.9032 10.2902 12.8607 10.3658 12.7851C10.4414 12.7095 10.4839 12.6069 10.4839 12.5V8.06448C10.4839 7.95754 10.4414 7.85498 10.3658 7.77936C10.2902 7.70374 10.1876 7.66125 10.0807 7.66125Z" fill="black" />
                    <path d="M18.5484 10.8871C18.4414 10.8871 18.3389 10.9296 18.2632 11.0052C18.1876 11.0808 18.1451 11.1834 18.1451 11.2903V12.5C18.1451 12.6069 18.1876 12.7095 18.2632 12.7851C18.3389 12.8607 18.4414 12.9032 18.5484 12.9032C18.6553 12.9032 18.7579 12.8607 18.8335 12.7851C18.9091 12.7095 18.9516 12.6069 18.9516 12.5V11.2903C18.9516 11.1834 18.9091 11.0808 18.8335 11.0052C18.7579 10.9296 18.6553 10.8871 18.5484 10.8871Z" fill="black" />
                    <path d="M2.01614 2.41937H5.24195C5.34889 2.41937 5.45145 2.37688 5.52707 2.30126C5.60269 2.22564 5.64517 2.12308 5.64517 2.01614C5.64517 1.9092 5.60269 1.80664 5.52707 1.73102C5.45145 1.6554 5.34889 1.61292 5.24195 1.61292H2.01614C1.9092 1.61292 1.80664 1.6554 1.73102 1.73102C1.6554 1.80664 1.61292 1.9092 1.61292 2.01614C1.61292 2.12308 1.6554 2.22564 1.73102 2.30126C1.80664 2.37688 1.9092 2.41937 2.01614 2.41937Z" fill="black" />
                    <path d="M2.01614 3.62908H2.82259C2.92953 3.62908 3.0321 3.5866 3.10772 3.51098C3.18334 3.43536 3.22582 3.3328 3.22582 3.22586C3.22582 3.11892 3.18334 3.01635 3.10772 2.94073C3.0321 2.86511 2.92953 2.82263 2.82259 2.82263H2.01614C1.9092 2.82263 1.80664 2.86511 1.73102 2.94073C1.6554 3.01635 1.61292 3.11892 1.61292 3.22586C1.61292 3.3328 1.6554 3.43536 1.73102 3.51098C1.80664 3.5866 1.9092 3.62908 2.01614 3.62908Z" fill="black" />
                    <path d="M21.3709 12.9033H22.9838C23.0908 12.9033 23.1933 12.8608 23.269 12.7852C23.3446 12.7095 23.3871 12.607 23.3871 12.5C23.3871 12.3931 23.3446 12.2905 23.269 12.2149C23.1933 12.1393 23.0908 12.0968 22.9838 12.0968H21.3709C21.264 12.0968 21.1614 12.1393 21.0858 12.2149C21.0102 12.2905 20.9677 12.3931 20.9677 12.5C20.9677 12.607 21.0102 12.7095 21.0858 12.7852C21.1614 12.8608 21.264 12.9033 21.3709 12.9033Z" fill="black" />
                    <path d="M22.5807 11.6935H22.9839C23.0908 11.6935 23.1934 11.6511 23.269 11.5754C23.3446 11.4998 23.3871 11.3973 23.3871 11.2903C23.3871 11.1834 23.3446 11.0808 23.269 11.0052C23.1934 10.9296 23.0908 10.8871 22.9839 10.8871H22.5807C22.4737 10.8871 22.3712 10.9296 22.2955 11.0052C22.2199 11.0808 22.1774 11.1834 22.1774 11.2903C22.1774 11.3973 22.2199 11.4998 22.2955 11.5754C22.3712 11.6511 22.4737 11.6935 22.5807 11.6935Z" fill="black" />
                </svg>
            </div>
            <div>
                <div className={`${classes.title} ${classes.title_fz16}`}>UI/UX Design</div>
                <div className={classes.main_skillsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    </div>
}

export default MainSkills