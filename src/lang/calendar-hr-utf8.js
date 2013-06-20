/* Croatian language file for the DHTML Calendar version 1.0 
* Author Krunoslav Zubrinic, June 2012.
* Feel free to use this script under the terms of the GNU Lesser General
* Public License, as long as you do not remove or alter this notice.
*/
// full day names
Calendar._DN = new Array
("Nedjelja",
 "Ponedjeljak",
 "Utorak",
 "Srijeda",
 "Četvrtak",
 "Petak",
 "Subota",
 "Nedjelja");
// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("Ned",
 "Pon",
 "Uto",
 "Sri",
 "Čet",
 "Pet",
 "Sub",
 "Ned");
 
// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 0; 
 
Calendar._MN = new Array
("Siječanj",
 "Veljača",
 "Ožujak",
 "Travanj",
 "Svibanj",
 "Lipanj",
 "Srpanj",
 "Kolovoz",
 "Rujan",
 "Listopad",
 "Studeni",
 "Prosinac");
 
// short month names
Calendar._SMN = new Array
("Sij",
 "Velj",
 "Ožu",
 "Tra",
 "Svi",
 "Lip",
 "Srp",
 "Kol",
 "Ruj",
 "Lis",
 "Stu",
 "Pro"); 

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "O kalendaru";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Izbor datuma:\n" +
"- Za izbor godine koristi tipke \xab i \xbb \n" +
"- Za izbor mjeseca koristi tipke " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " \n" +
"- Za brži izbor, pritisni i drži tipku miša na bilo kojoj od navedenih tipki.";

Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Izbor vremena:\n" +
"- Za povećanje, klikni na bilo koji dio vremena\n" +
"- za smanjenje pritisni  tipku Shift pa kliknite,  \n" +
"- za brži izbor klikni i povuci vrijeme.";

Calendar._TT["PREV_YEAR"] = "Prethodna godina (dugi dugi pritisak za izbornik)";
Calendar._TT["PREV_MONTH"] = "Prethodni mjesec (dugi dugi pritisak za izbornik)";
Calendar._TT["GO_TODAY"] = "Idi na tekući dan";
Calendar._TT["NEXT_MONTH"] = "Sljedeći mjesec (dugi dugi pritisak za izbornik)";
Calendar._TT["NEXT_YEAR"] = "Sljedeća godina (dugi dugi pritisak za izbornik)";

Calendar._TT["SEL_DATE"] = "Izaberite datum";
Calendar._TT["DRAG_TO_MOVE"] = "Pritisni i povuci za promjenu pozicije";
Calendar._TT["PART_TODAY"] = " (danas)";
// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Prikaži %s kao početni dan";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Zatvori";
Calendar._TT["TODAY"] = "Danas";

Calendar._TT["TIME_PART"] = "(Shift-)klik ili pritisni pa povuci lijevo-desno";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "dd-mm-y";
Calendar._TT["TT_DATE_FORMAT"] = "DD, dd.mm.y";

Calendar._TT["WK"] = "Tje";
Calendar._TT["TIME"] = "Vrijeme:";