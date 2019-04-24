/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 * Global API Configs For Application
 */


 /**
 * Primary API LINKS -----------------------------------------------------
 */
//Old One const USER_REGISTER_URL = 'http://10.0.2.2/eLibrary/api/register-user.php';

//Register URL For All Users
const USER_REGISTER_URL = 'https://elibrarymain.000webhostapp.com/eLibrary/api/register-user.php';

//Login URL
const USER_LOGIN_URL = 'https://elibrarymain.000webhostapp.com/eLibrary/api/login-auth.php';

//User Details Get API
const GET_USERDETAILS_URL = 'https://elibrarymain.000webhostapp.com/eLibrary/api/get-user-details.php';

//Get Book Details API
const GET_BOOK_DETAILS_URL = 'https://elibrarymain.000webhostapp.com/eLibrary/api/get-book-details.php';

//Get Newspaper Details
const GET_NEWSPAPER_DETAILS_URL = 'https://elibrarymain.000webhostapp.com/eLibrary/api/get-newspaper-details.php';

//Get Government Publications Details
const GET_GOVPUB_DETAILS = 'https://elibrarymain.000webhostapp.com/eLibrary/api/get-govpub-details.php';

//Get Ola Script Details
const GET_OLASCRIPT_DETAILS_URL = 'https://elibrarymain.000webhostapp.com/eLibrary/api/get-olascripts-details.php';


 /**
 * Backup API LINKS -----------------------------------------------------
 */

//Register URL For All Users
const USER_REGISTER_URL_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/register-user.php';

//Login URL
const USER_LOGIN_URL_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/login-auth.php';

//User Details Get API
const GET_USERDETAILS_URL_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/get-user-details.php';

//Get Book Details API
const GET_BOOK_DETAILS_URL_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/get-book-details.php';

//Get Newspaper Details
const GET_NEWSPAPER_DETAILS_URL_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/get-newspaper-details.php';

//Get Government Publications Details
const GET_GOVPUB_DETAILS_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/get-govpub-details.php';

//Get Ola Script Details
const GET_OLASCRIPT_DETAILS_URL_BACKUP = 'https://elibrarybackup.000webhostapp.com/eLibrary/api/get-olascripts-details.php';


//export all links
export default {

    USER_REGISTER_URL:USER_REGISTER_URL,
    USER_LOGIN_URL:USER_LOGIN_URL,
    GET_USERDETAILS_URL:GET_USERDETAILS_URL,
    GET_BOOK_DETAILS_URL:GET_BOOK_DETAILS_URL,
    GET_NEWSPAPER_DETAILS_URL:GET_NEWSPAPER_DETAILS_URL,
    GET_GOVPUB_DETAILS:GET_GOVPUB_DETAILS,
    GET_OLASCRIPT_DETAILS_URL:GET_OLASCRIPT_DETAILS_URL,

    USER_REGISTER_URL_BACKUP:USER_REGISTER_URL_BACKUP,
    USER_LOGIN_URL_BACKUP:USER_LOGIN_URL_BACKUP,
    GET_USERDETAILS_URL_BACKUP:GET_USERDETAILS_URL_BACKUP,
    GET_BOOK_DETAILS_URL_BACKUP:GET_BOOK_DETAILS_URL_BACKUP,
    GET_NEWSPAPER_DETAILS_URL_BACKUP:GET_NEWSPAPER_DETAILS_URL_BACKUP,
    GET_GOVPUB_DETAILS_BACKUP:GET_GOVPUB_DETAILS_BACKUP,
    GET_OLASCRIPT_DETAILS_URL_BACKUP:GET_OLASCRIPT_DETAILS_URL_BACKUP,
    


}