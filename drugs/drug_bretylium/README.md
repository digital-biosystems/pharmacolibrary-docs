# Bretylium

- **generic name:** Bretylium
- **ATC codes:** `C01BD02`
- **DrugBank:** [DB01158](https://go.drugbank.com/drugs/DB01158)
- **groups:** approved

## About

**Description.** Bretylium blocks the release of noradrenaline from the peripheral sympathetic nervous system, and is used in emergency medicine, cardiology, and other specialties for the acute management of ventricular tachycardia and ventricular fibrillation. The primary mode of action for bretylium is thought to be inhibition of voltage-gated K(+) channels. Recent evidence has shown that bretylium may also inhibit the Na,K-ATPase by binding to the extracellular K-site.

**Indication.** For use in the prophylaxis and therapy of ventricular fibrillation. Also used in the treatment of life-threatening ventricular arrhythmias, such as ventricular tachycardia, that have failed to respond to adequate doses of a first-line antiarrhythmic agent, such as lidocaine.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 08:26 | 18:01 | 5/0/0 | 1/2/0 | 0/0/0 | 262,616/15,501 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 4/7 | 9/3 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Garrett_1982](drugs/drug_bretylium/Bretylium_Garrett1982_reference.md) | Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982) | [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Greenberg_2022](drugs/drug_bretylium/Bretylium_Greenberg2022_reference.md) | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kamath_1981](drugs/drug_bretylium/Bretylium_Kamath1981_reference.md) | Kamath BL et al., Pharmacokinetics of [14C]bretylium tosy…, Journal of pharmaceutical s… (1981) | [10.1002/jps.2600700623](https://doi.org/10.1002/jps.2600700623) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Narang_1980](drugs/drug_bretylium/Bretylium_Narang1980_reference.md) | Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980) | [10.1007/BF01059384](https://doi.org/10.1007/BF01059384) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rapeport_1985](drugs/drug_bretylium/Bretylium_Rapeport1985_reference.md) | Rapeport WG, Clinical pharmacokinetics of bretylium, Clinical pharmacokinetics (1985) | [10.2165/00003088-198510030-00004](https://doi.org/10.2165/00003088-198510030-00004) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yoon_2020](drugs/drug_bretylium/pd_Yoon_2020_unknown.md) | Yoon JY et al., Optimal effect-site concentration of re…, Journal of dental anesthesi… (2020) | [10.17245/jdapm.2020.20.4.195](https://doi.org/10.17245/jdapm.2020.20.4.195) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sakuta_1993](drugs/drug_bretylium/pd_Sakuta_1993_unknown.md) | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wilson_2004](drugs/drug_bretylium/pd_Wilson_2004_unknown.md) | Wilson TE et al., Effect of age on cutaneous vasoconstric…, American journal of physiol… (2004) | [10.1152/ajpregu.00467.2004](https://doi.org/10.1152/ajpregu.00467.2004) |

## Coverage

- **PubMed hits:** 53 matched, 31 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 5  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Garrett_1982.pdf` | Garrett ER et al., Bretylium pharmacokinetics and bioavail…, Biopharmaceutics & drug dis… (1982) | popPK | 10 | [10.1002/bdd.2510030206](https://doi.org/10.1002/bdd.2510030206) | [7104462](https://pubmed.ncbi.nlm.nih.gov/7104462) | The paper reports quantitative pharmacokinetic parameters for bretylium, including terminal half-life, renal clearance, and volume of distribution, with specific numeric values provided in the text. |
| `Kamath_1981.pdf` | Kamath BL et al., Pharmacokinetics of [14C]bretylium tosy…, Journal of pharmaceutical s… (1981) | popPK | 10 | [10.1002/jps.2600700623](https://doi.org/10.1002/jps.2600700623) | [7252812](https://pubmed.ncbi.nlm.nih.gov/7252812) | The paper reports quantitative pharmacokinetic parameters (Vd, CL, half-life) for bretylium in rats with all numeric values explicitly present in the text. |
| `Kamath_1982.pdf` | Kamath BL et al., Pharmacokinetics of bretylium in dogs a…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600711129](https://doi.org/10.1002/jps.2600711129) | [7175729](https://pubmed.ncbi.nlm.nih.gov/7175729) | The paper reports quantitative pharmacokinetic parameters for bretylium in dogs, including half-lives, volumes of distribution, and clearance values, all of which are explicitly present in the text. |
| `Narang_1980.pdf` | Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980) | popPK | 10 | [10.1007/BF01059384](https://doi.org/10.1007/BF01059384) | [7431227](https://pubmed.ncbi.nlm.nih.gov/7431227) | The paper reports quantitative PK parameters (t1/2, Vd, clearance) for bretylium in humans, and the specific numeric values are present in the provided text. |
| `Rapeport_1985.pdf` | Rapeport WG, Clinical pharmacokinetics of bretylium, Clinical pharmacokinetics (1985) | popPK | 9 | [10.2165/00003088-198510030-00004](https://doi.org/10.2165/00003088-198510030-00004) | [3893841](https://pubmed.ncbi.nlm.nih.gov/3893841) | The abstract provides specific quantitative PK parameters for bretylium, including bioavailability, clearance, half-life, and model description. |
| `Koide_1986.pdf` | Koide M et al., Characterization of xylamine binding to…, Journal of neurochemistry (1986) | pd | 4 | [10.1111/j.1471-4159.1986.tb00751.x](https://doi.org/10.1111/j.1471-4159.1986.tb00751.x) | [3746302](https://www.ncbi.nlm.nih.gov/pubmed/3746302) | metadata signals extractable PD data (IC50) |
| `Marino_1992.pdf` | Marino V et al., Extraneuronal uptake of noradrenaline i…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00165298](https://doi.org/10.1007/BF00165298) | [1448181](https://www.ncbi.nlm.nih.gov/pubmed/1448181) | metadata signals extractable PD data (IC50) |
| `Nedergaard_1986.pdf` | Nedergaard OA, Pre- and postsynaptic effects of indora…, Journal of cardiovascular p… (1986) | pd | 4 | [10.1097/00005344-198609000-00021](https://doi.org/10.1097/00005344-198609000-00021) | [2429075](https://www.ncbi.nlm.nih.gov/pubmed/2429075) | metadata signals extractable PD data (IC50) |
| `Yamreudeewong_2003.pdf` | Yamreudeewong W et al., Potentially significant drug interactio…, Drug safety (2003) | pgx | 7 | [10.2165/00002018-200326060-00004](https://doi.org/10.2165/00002018-200326060-00004) | [12688833](https://www.ncbi.nlm.nih.gov/pubmed/12688833) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-09T08:18:07.336027+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aussel_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipid metabolism in Jurkat T cells, not a pharmacokinetic study, and reports no disposition parameters for bretylium. |
| PD | BOURA_1962 | not_relevant | 3 | 1 | The paper describes qualitative changes in dose-response slopes and hypersensitivity in an animal model but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves. |
| PD | Brown_1996 | not_relevant | 1 | 0 | The text is a review of future directions in resuscitation research that mentions bretylium only as a topic for future investigation, without providing any specific data, dose-response curves, or numeric PD parameters. |
| popPK | Dubey_2020 | irrelevant | 0 | 0 | The study focuses on the antiemetic efficacy of gabapentin and ondansetron, with no mention of bretylium or pharmacokinetic parameters. |
| PD | Dubey_2020 | not_relevant | 0 | 0 | The paper studies Gabapentin and Ondansetron, not Bretylium, and reports only clinical incidence rates without any pharmacokinetic or pharmacodynamic modeling. |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moxifloxacin, not bretylium, which is only mentioned as a potential interacting medication. |
| PD | Greenberg_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of Moxifloxacin in children and does not report any pharmacodynamic or exposure-response relationship for Bretylium. |
| popPK | Hagelüken_1995 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on G protein activation where bretylium is a negative comparator, containing no pharmacokinetic parameters. |
| PD | Hagelüken_1995 | not_relevant | 0 | 0 | The paper reports that bretylium tosylate did not increase GTP hydrolysis, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper focuses on the structural and pharmacological targeting of the SHOC2-RAS interaction in cancer and does not involve bretylium or report any pharmacokinetic parameters. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of SHOC2 inhibitors for RAS-mutant cancers and does not mention or analyze Bretylium. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of end-tidal CO2 on cerebral oxygen saturation and does not involve bretylium or report its pharmacokinetic parameters. |
| PD | Ki_2018 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamic relationship between end-tidal CO2 and cerebral oxygen saturation, not the drug Bretylium. |
| PD | Koide_1986 | not_relevant | 0 | 0 | The paper focuses on the binding of xylamine to proteins in PC12 cells and does not mention Bretylium or report any pharmacodynamic or exposure-response relationships. |
| popPK | Koo_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of propofol in OSAHS patients and does not report pharmacokinetic parameters for bretylium. |
| PD | Koo_2015 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic model for Propofol, not Bretylium. |
| PD | Kowey_1997 | not_relevant | 1 | 0 | The text is a review of intravenous amiodarone that only qualitatively mentions a dose-response relation and comparison to bretylium, without providing any numeric PD parameters or extractable concentration-effect data for bretylium. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study characterizes the volume kinetics of Ringer's lactate solution, not the pharmacokinetics of bretylium. |
| PD | Lee_2019 | not_relevant | 0 | 0 | The paper analyzes the volume kinetics of Ringer's lactate solution, not the pharmacodynamics of Bretylium. |
| PD | Marino_1992 | not_relevant | 0 | 0 | The paper discusses noradrenaline uptake in rabbit dental pulp and does not mention Bretylium or report any pharmacodynamic or exposure-response data. |
| PD | Medow_2005 | not_relevant | 1 | 0 | Bretylium is used only as a qualitative pharmacological tool to block adrenergic receptors; no concentration-effect or dose-response data for Bretylium is reported. |
| PD | Nedergaard_1986 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of indoramin, not bretylium. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacodynamics of morphine derivatives, not the pharmacokinetics of bretylium. |
| PD | Nourmandipour_2025 | not_relevant | 0 | 0 | The paper studies morphine derivatives, not Bretylium, and reports ED50 values for analgesia rather than a pharmacodynamic model for the target drug. |
| popPK | Rehan_2023 | irrelevant | 0 | 0 | The paper describes the structural biology and mechanism of action of KZR-8445 (a Sec61 inhibitor) and does not involve the drug bretylium or report any pharmacokinetic parameters for it. |
| PD | Rehan_2023 | not_relevant | 0 | 0 | The paper describes a novel Sec61 inhibitor (KZR-8445) and does not mention or analyze Bretylium. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study measuring IC50 values for K+ channel blockade in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of sevoflurane and does not involve bretylium or report any pharmacokinetic parameters for it. |
| PD | Shin_2014 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of Sevoflurane, not Bretylium. |
| popPK | Wilson_2004 | irrelevant | 0 | 0 | Bretylium is used as a local pharmacological tool to block norepinephrine release, not as the subject drug for pharmacokinetic analysis. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for class III antiarrhythmics but does not report any pharmacogenomic effects (gene variants) on bretylium's PK or PD parameters. |
| popPK | Yoon_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of remifentanil, not the pharmacokinetics of bretylium. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bretylium`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
