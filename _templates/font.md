---
layout: outer_ayakashi.njk
title: Truth and Ideals
description: Astaryuu's main font project
container: 2col
---
{% textbox 2 "haslinks" %}
# The font, Truth and Ideals
(an edit by Astaryuu)

{% endtextbox %}{% textbox-link %}
<div class="textbox-link-first"><a href="/">home</a></div>
<div class=textbox-link><a href="/arcadia">arcadia</a></div>
<div class=textbox-link><a href="/lutera">lutera</a></div>
<div class=textbox-link><a href="/conlang">conlang</a></div>
<div class=textbox-link><a href="/ocs">ocs</a></div>
<div class=textbox-link><a href="/devlog">devlog</a></div>
<div class=textbox-link-last><a href="/whois">who is</a></div>
{% endtextbox-link %}{% textbox 2 %}
Truth and Ideals is the main font used on this website. It is based on Pokémon Black and White's ingame font. This origin is why the font is named as such, as the names of those games refer to the signature Legendary Pokémon, Reshiram and Zekrom, who represent idealism and realism respectively. In fact, the basic Latin script, hangul, and Japanese scripts are derived directly from ripping images from Pokémon Black, White, Black 2, and White 2.

However, these games are missing a fair few scripts. Truth and Ideals is effectively an updated version of the script that adds support for various scripts that the original games do not support (due to not releasing in regions that use those scripts). There is no Ποκέμων Μαύρος 2 or Покѐмон белый 2, but now there can be.

In addition to the original games' fonts, which support Japanese, Korean, and Latin scripts, Truth and Ideals supports:
- The Greek alphabet, though only the simplified version used in Modern Greek.
- The Cyrillic alphabet, mostly.
- The Armenian alphabet.
- The International Phonetic Alphabet, plus superscript versions of all IPA characters.
- The Hebrew "abjad," including all of its various marks.
- A large portion of Latin-script special characters.
- My conlangs' scripts, specifically Rokadong and Liðakuin.

## Advantages
Although Truth and Ideals does not have nearly the same level of Unicode coverage as most of them, and was never trying to compete with them in the first place, Truth and Ideals has been noted to be a *better looking font* than well-known competitors in the pixel/bitmap font sphere. Personally, I think this is a difference of goals and not really something to criticize e.g. Unifont over, but the statement does have some merit.

For example, [Unifont](https://unifoundry.com/unifont/) does not support combining diacritics well - it has them, but its implementation is not very visually pleasing. And its spiteful spinoff [Kissinger 2](https://typedesign.replit.app/kissinger2.html), for all of Type Design founder Piotr Grochowski's posturing over superscript heights and glyph inverses, completely fails to address this problem.

Reasons to use Truth and Ideals over Unifont:
- Proper support for combining diacritics across the entire font. This is a necessity for Hebrew.
- .TTF packing. Unifont discontinued this; Truth and Ideals does not.
- A height of 16 is too tall for your purposes (TaI has a *total* height of 16, but a cap height of 10).
- You wish to use a sans-serif font - Unifont is duospace.
Reasons to use Unifont over Truth and Ideals:
- You wish to use a duospace font - Truth and Ideals isn't, so it is not recommended for coding.
- Unifont has significantly more of Unicode covered - the vast majority of U+0000 to U+1FFFF, in fact.
- You need an actual $ character.
Reasons to use Kissinger 2 over either font:
- You are as much of a pedant as Piotr Grochowski.
{% endtextbox %}{% textbox %}
## Example texts in various scripts
### Latin
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Cyrillic
Зарегистрируйтесь сейчас на Десятую Международную Конференцию по Unicode, которая состоится 10-12 марта 1997 года в Майнце в Германии. Конференция соберет широкий круг экспертов по вопросам глобального Интернета и Unicode, локализации и интернационализации, воплощению и применению Unicode в различных операционных системах и программных приложениях, шрифтах, верстке и многоязычных компьютерных системах.

### Greek
Άρθρο 1: Όλοι οι άνθρωποι γεννιούνται ελεύθεροι και ίσοι στην αξιοπρέπεια και τα δικαιώματα. Είναι προικισμένοι με λογική και συνείδηση, και οφείλουν να συμπεριφέρονται μεταξύ τους με πνεύμα αδελφοσύνης.

### Hebrew
<p dir="rtl">וְאָהַבְתָּ אֵת יְיָ | אֱלֹהֶיךָ, בְּכָל-לְבָֽבְךָ, וּבְכָל-נַפְשְׁךָ, וּבְכָל-מְאֹדֶֽךָ. וְהָיוּ הַדְּבָרִים הָאֵלֶּה, אֲשֶׁר | אָֽנֹכִי מְצַוְּךָ הַיּוֹם, עַל-לְבָבֶֽךָ: וְשִׁנַּנְתָּם לְבָנֶיךָ, וְדִבַּרְתָּ בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ, וּבְלֶכְתְּךָ בַדֶּרֶךְ וּֽבְשָׁכְבְּךָ, וּבְקוּמֶֽךָ. וּקְשַׁרְתָּם לְאוֹת | עַל-יָדֶךָ, וְהָיוּ לְטֹטָפֹת בֵּין | עֵינֶֽיךָ, וּכְתַבְתָּם | עַל מְזֻזֹת בֵּיתֶךָ וּבִשְׁעָרֶֽיךָ:</p>

### Japanese
パイポパイポ パイポのシューリンガン。長久命の長助、寿限無、寿限無、五劫の擦り切れ。グーリンダイのポンポコピーのポンポコナーの。水行末 雲来末 風来末、グーリンダイのポンポコピーのポンポコナーの。長久命の長助、シューリンガンのグーリンダイ、海砂利水魚の、シューリンガンのグーリンダイ。やぶら小路の藪柑子。食う寝る処に住む処、寿限無、寿限無。パイポパイポ パイポのシューリンガン。

### Korean
뼈 그들에게 산야에 아름다우냐? 얼마나 든 찾아 발휘하기 뼈 것이다. 물방아 같은 이상 그들을 위하여, 사는가 보이는 그들의 것이다. 많이 눈이 끓는 넣는 듣는다, 공자는 인생에 커다란 천지는 없으면. 이상의 피다, 쓸쓸하랴? 못할 노래하며 일월과 갑 아름다우냐? 구하지 보내는 원대하고. 목숨이 ? 어디 듣기만 꽃이 커다란 생의 행복스럽고 그들은 열락의 봄바람이다.

### Armenian
լոռեմ իպսում դոլոռ սիթ ամեթ, սեդ եա մոդուս պութենթ, հինծ անիմալ դեմոծռիթում վիս եու. մագնա ֆածեթե հենդռեռիթ նո հաս, ծու ծասե քուանդո ֆածեթե պռի. եի ռիդենս իռիուռե ծոնսեծթեթուեռ քուի, պռո թիբիքուե ծոռպոռա թածիմաթես իդ, ծու դուո գռաեծի ֆասթիդիի դելենիթի. ան պռո պեռիծուլիս պռինծիպես, ծու մուծիուս քուալիսքուե սեդ. նո պռո սալութաթուս պռոդեսսեթ ինթելլեգաթ, լաթինե մենանդռի եսթ ութ, իպսում պհիլոսոպհիա ծու ծում.

### Georgian
ყველა ადამიანი იბადება თავისუფალი და თანასწორი თავისი ღირსებითა და უფლებებით. მათ მინიჭებული აქვთ გონება და სინდისი და ერთმანეთის მიმართ უნდა იქცეოდნენ ძმობის სულისკვეთებით.

### Ni̦xlo
níańíomyr nia ŧanai vi znen mie visaꜥanig, ji̦ƨaima ꞓon jaƶmo̦ ƨo̦ roŋa ƶnꞓý ƨ́iovygia roŋa; týśamkeŋ. «jaƶkm wýƶuŋ, veƨoni, hi ca jov níanlo y mie jo fyg!» ŋa idai, níanlo síako y ƨa̦re̦i vi gikaza roŋa. «ƶu jaƶía̦ƨai=ŋ?» 

### Rokadong
", !        : , ,  .    ,                 .      ,                 .  ."

{% endtextbox %}{% textbox %}
## Download and history
**[Download this font](https://hoard.astaryuu.cc/astaryuu/fonts/Truth%20And%20Ideals-Normal.ttf)** - version 0.875
There are also other styles available: [Bold](https://hoard.astaryuu.cc/astaryuu/fonts/Truth%20And%20Ideals-Bold.ttf) [Oblique](https://hoard.astaryuu.cc/astaryuu/fonts/Truth%20And%20Ideals-Italic.ttf) [Both](https://hoard.astaryuu.cc/astaryuu/fonts/Truth%20And%20Ideals-Bold-Italic.ttf)

The download is current as of October 8, 2025. History below:
- (April 2023, v.0.2) - Ripped the font from the Pokémon games.
- (June 2023, v.0.3) - Updated to support Greek and basic Cyrillic.
- (July 2023, v.0.4) - Updated to support basic IPA.
- (August 23 2023, v.0.44) - Updated to support basic Hebrew.
- October 15, 2023, v.0.48 - Added support for extended IPA superscripts, as well as Hebrew niqqud and some of advanced Cyrillic.
- November 10, 2023, v.0.50 - Finished Cyrillic support.
- January 3, 2024, v.0.54 - Added support for the Rokadong script to the PUA.
- March 26, 2024, v.0.57 - Added support for the Liðakuin script to the PUA.
- May 20, 2024, v.0.60 - Rudimentary Arabic support; connecting forms do not work.
- June 15, 2024, v.0.63 - Added Armenian and Ni̦xlo support.
- June 17, 2024, v.0.65 - Fixed ӆ/ԯ reversal, Rokadong script bearings, and so on.
- August 11, 2024, v.0.678 - Many small updates:
	- Updated the glyphs to be at a scale of 16:1 rather than 1:1. This should help reduce glitchiness in certain font renderers.
	- Updated the OS/2 metrics from 13 ascender/3 descender to 12 ascender/2 descender. This should help improve line spacing.
	- The superscript glottal stop and pharyngeal stop glyphs ˀ ˁ were not consistent with the pharyngealization diacritic ˤ. This has been fixed.
	- Updated Arabic numerals (‭١٢٣٤٥٦٧٨٩) for consistency with the rest of Arabic / the font in general. Also, some connecting form glyphs have been added, but this is still a work in progress.
- August 30, 2024, v.0.70 - Added Georgian script.
- October 15, 2024, v.0.72 - Added Braille script.
- November 27, 2024, v.0.725 - Moved Rokadong precomposed characters to the ExtPUA. Regular PUA characters are still in place, as ligature data is not updated yet.
- December 3, 2024, v.0.73 - Removed regular PUA precomposed Rokadong. Moved Liðakuin from F120-F16F to F100-F14F.
- December 24, 2024, v.0.80 - Added Lunarian (standalone glyphs in regular PUA, composable glyphs in extended PUA) and extended Rokadong consonants.
- March 4, 2025, v.0.81 - Added High Karanesa blockscript and Kairitelan. Updated Lunarian glyphs for composition to allow for more variants.
- May 3, 2025, v.0.82 - Added extended Rokadong vowels - presently, only the plosive series is precomposed. Moved High Karanesa blockscript from F040-F06F to F050-F07F.
- July 1, 2025, v.0.83 - Precomposed more Rokadong words and added some more extended Cyrillic/Latin letters.
- August 2, 2025, v.0.85 - Added Nenevesian script (unlike Rokadong, it isn't precomposed, because it uses combining diacritics).
- October 8, 2025, v.0.87 - Updated Lunarian script.
- November 13, 2025, v.0.875 - Fix Nenevesian long vowel, add like 2 more kanji.
- November 17, 2025, v.0.876 - Add Rokadong double a (finally).
- December 16, 2025, v.0.90 - Added connecting forms for most Arabic characters that currently exist in the font.
Future goals:
- Add support for polytonic Greek. (v.1.1?)
- Complete support for Arabic and Syriac. (v.1.0?)
- Possibly add more kanji, as, as you can see above, some of the more popular kanji were not in the font rip.

{% endtextbox %}{% textbox 2 %}
## <span style="font-family: 'Truth and Ideals - Fighting Ideals'">Truth and Ideals: Small Truths/Fighting Ideals</span>
<span style="font-family: 'Truth and Ideals - Fighting Ideals'">Truth and Ideals: Small Truths (or just Small Truths) and Truth and Ideals: Fighting Ideals (or just Fighting Ideals) are a small version of Truth and Ideals. In the games Pokémon Black Version 2 and White Version 2, this font displays while in battle for text such as Pokémon nicknames - which can contain any character in the language the game is being played in.

Therefore, the small font must be as featured as the main font, and as main Truth and Ideals updates the main font to support way more scripts, so do these fonts for the small font. (As expected, the name Fighting Ideals is a reference to the location where it appears: in battle.)

Fighting Ideals maintains the same ascender and descender sizes as Truth and Ideals, while Small Truths reduces them to values that better fit Fighting Ideals's glyphs.

Note that while the main body of Truth and Ideals is based on a character size of 10x5, Fighting Ideals reduces that to 7x3. This means Fighting Ideals is significantly less readable than Truth and Ideals. There will be more characters that break the width restriction in Fighting Ideals than in Truth and Ideals, but there will likely still be readability issues.

Additionally, because Fighting Ideals is not the main font, it is not as far along. The version number is based on the main font versioning - that is, v0.3 of Truth and Ideals: Fighting Ideals is reached when progress is equal to v0.3 of Truth and Ideals, and so on.

For now, only Fighting Ideals is included on this website. Small Truths will be added later, once Fighting Ideals is more caught up with Truth and Ideals.

**[Download this font](https://hoard.astaryuu.cc/astaryuu/fonts/Truth%20And%20Ideals-Fighting Ideals-Normal2.ttf)** - version 0.40

The download is current as of August 14, 2024.
- (April 2023, v.0.2) - Ripped the font from the Pokémon games.
- (October 2023, v.0.3) - Updated to support Greek.
- May 20, 2024, v.0.31 - Updated to support basic Cyrillic.
- August 11, 2024, v.0.32 - Updated some superscript glyphs and added glyphs for modifier letters (combining diacritics are also present, but do not function).
- August 14, 2024, v.0.40 - Added IPA letters and combining diacritic support (Latin/IPA script only for now).
- August 14, 2024, v.0.42 - Added Rokadong base characters (no precomposed characters yet).
</span>
{% endtextbox %}