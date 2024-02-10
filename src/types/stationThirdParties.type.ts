/* tslint:disable */
/* eslint-disable */
/**
 * laut.fm-API
 * Die API exponiert **allgemeine Informationen über laut.fm** (\"Welche Genres gibt es?\", \"Wie ist der Status des Servers?\"), **Auflistungen von Stationen** (alle, nach Anfangsbuchstaben, nach Genres) und **Informationen über einzelne Stationen** (allgemeine Infos, der aktuelle Track, das Netzwerk). Ergänzt wird die normale laut.fm-API durch die <a href=\"https://search.api.laut.fm\" target=\"_blank\" rel=\"noreferrer noopener\">laut.fm-Search-API</a>.  ## Zugriff auf die API per Javascript Um den API-Zugriff per Javascript so einfach, wie irgendwie möglich zu machen, haben wir eine Javascript-Bibliothek entwickelt. Diese Bibliothek ist – inklusive vieler einfacher Beispielen – bei <a href=\"https://github.com/lautde/lautfm_js_tools\" target=\"_blank\" rel=\"norefferer noopener\">Github gehostet</a>. Sie ermöglich nicht nur die Benutzung der normalen API, sondern auch der Such-API und enthält sogar einen komplett per Javascript steuerbaren Player. Wer trotzdem “zu Fuß” per Javascript zugreifen will, kann sich an unserer Javascript-Bibliothek orientieren.  ## Beispiele  - <a href=\"https://api.laut.fm/static/example.phps\">PHP-Demo</a>  ## Datenschutzerklärung für die Verwendung dieser API auf einer Website Wird diese API im Kontext einer Website über Javascript genutzt, so können Besucher der Website mit diesem Passus in der Datenschutzerklärung über die API-Verbindung aufgeklärt werden.  ## Verwendung der laut.fm-API Diese Website benutzt die öffentliche laut.fm-API. Die laut.fm-API ist ein Dienst der <a href=\"https://www.laut.ag\">LAUT AG</a> und exponiert allgemeine Informationen über <a href=\"https://laut.fm\">laut.fm</a>, Auflistungen von Stationen und Informationen über einzelne Stationen. Bei Zugriff auf die API werden automatisch Informationen allgemeiner Natur an laut.fm übertragen. Diese Informationen beinhalten etwa die IP-Adresse, die Art des Webbrowsers und des verwendete Betriebssystems, den Domainnamen Ihres Internet Service Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um beispielsweise den aktuell laufenden Titel korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Anonyme Informationen dieser Art werden von der LAUT AG nur kurzfristig gespeichert und gegebenenfalls statistisch ausgewertet, um die API und die dahinterstehende Technik zu optimieren.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: team@laut.fm
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {
  LautFmStationThirdPartyAmazon,
  LautFmStationThirdPartyTwitter,
  LautFmStationThirdPartyUrl,
} from '.';
export interface LautFmStationThirdParties {
  amazon?: LautFmStationThirdPartyAmazon;
  website?: LautFmStationThirdPartyUrl;
  twitter?: LautFmStationThirdPartyTwitter;
  facebook?: LautFmStationThirdPartyUrl;
  phonostar?: LautFmStationThirdPartyUrl;
  radiode?: LautFmStationThirdPartyUrl;
}
