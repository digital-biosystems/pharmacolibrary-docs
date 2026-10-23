<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07X&quot;,&quot;href&quot;:&quot;atc/A07X.md&quot;},{&quot;label&quot;:&quot;racecadotril&quot;}]"></div>

# racecadotril

- **generic name:** racecadotril
- **ATC codes:** `A07XA04`
- **DrugBank:** [DB11696](https://go.drugbank.com/drugs/DB11696) · **PubChem:** [CID 107751](https://pubchem.ncbi.nlm.nih.gov/compound/107751)
- **molar mass:** 385.48 g/mol (C21H23NO4S) — DrugBank
- **groups:** investigational

## About

Racecadotril is an antidiarrhoeal drug, an enkephalinase-inhibiting protease inhibitor used to treat acute diarrhoea. It is not approved in the United States, where it remains investigational, but it is used in several other countries, mainly in Europe and parts of Asia and Latin America, often for children.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416677](https://www.wikidata.org/wiki/Q416677) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:29 | 3:46 | 0/0/0 | 0/0/0 | 0/0/0 | 131,489/3,870 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 2/12 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 63 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tras_2022.pdf` | Tras B et al., Can diarrhea affect the pharmacokinetic…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13078](https://doi.org/10.1111/jvp.13078) | [35706330](https://pubmed.ncbi.nlm.nih.gov/35706330) | The study reports quantitative non-compartmental pharmacokinetic parameters (t1/2, Cmax, Tmax, AUC) for racecadotril in calves. |
| `Said_2024.pdf` | Said R et al., Quantitation of thiorphan in human plas…, Journal of chromatography.… (2024) | popPK | 8 | [10.1016/j.jchromb.2024.124190](https://doi.org/10.1016/j.jchromb.2024.124190) | [38941717](https://pubmed.ncbi.nlm.nih.gov/38941717) | The study reports PK parameters for thiorphan (the active metabolite of racecadotril) in a bioequivalence study, but the specific numeric values are not present in the provided evidence. |
| `Wang_2021.pdf` | Wang B et al., Development, In Vitro and In Vivo Evalu…, AAPS PharmSciTech (2021) | popPK | 8 | [10.1208/s12249-020-01896-6](https://doi.org/10.1208/s12249-020-01896-6) | [33389269](https://pubmed.ncbi.nlm.nih.gov/33389269) | The study reports an in vivo pharmacokinetic study in Beagle dogs comparing racecadotril ODFs to a reference, but the specific numeric PK parameters (Cmax, AUC, CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-04 20:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2011 | irrelevant | 0 | 0 | The paper describes analytical methods for quantifying racecadotril concentration, not a pharmacokinetic study reporting disposition parameters. |
| PD | Ali_2011 | not_relevant | 0 | 0 | The paper describes analytical methods for quantifying racecadotril concentration, not pharmacodynamic or exposure-response relationships. |
| popPK | Bado_1987 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of acetorphan on gastric secretion in cats and does not involve racecadotril or its pharmacokinetics. |
| popPK | Bado_1989 | irrelevant | 0 | 0 | The study investigates the effects of opioid peptides on food intake in cats and does not involve racecadotril or pharmacokinetic parameters. |
| popPK | Baldi_2009 | irrelevant | 0 | 0 | The paper is a general review of diarrhoeal disease and mentions racecadotril's mechanism and clinical efficacy, but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Barrenberg_2017 | irrelevant | 0 | 0 | The paper is a regulatory review of Rx-to-OTC switches and does not report any quantitative pharmacokinetic parameters for racecadotril. |
| popPK | Bergmann_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of acetorphan on intestinal transit times and does not report any pharmacokinetic parameters for racecadotril. |
| popPK | Bousselmame_1991 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of acetorphan and morphine in mice, not the pharmacokinetics of racecadotril. |
| popPK | Bralet_1990 | irrelevant | 0 | 0 | The study investigates the diuretic and natriuretic effects of enkephalinase inhibitors in rats and does not involve racecadotril or its pharmacokinetics. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | This is a clinical practice guideline for pediatric diarrhea that mentions racecadotril as a treatment option but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Cheng_2002 | irrelevant | 0 | 0 | The paper is a general review of traveler's diarrhea that mentions racecadotril only as a symptomatic agent without providing any pharmacokinetic data. |
| popPK | De_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and binding of acetorphan and thiorphan in mice, not racecadotril. |
| popPK | Deng_2017 | irrelevant | 2 | 0 | The study focuses on in vitro dissolution and IVIVC in rats without reporting specific quantitative PK parameters (CL, V, ka) for racecadotril in the provided evidence. |
| PD | Deng_2017 | not_relevant | 0 | 0 | The paper focuses on in vitro dissolution and PK correlation (IVIVC) for formulation discrimination, reporting no pharmacodynamic or exposure-response data. |
| popPK | Duval-Iflah_1999 | irrelevant | 0 | 0 | The study is a toxicological and microbiological assessment in piglets, not a pharmacokinetic study, and reports no quantitative disposition parameters for racecadotril. |
| PD | Duval-Iflah_1999 | not_relevant | 1 | 0 | The study reports qualitative safety and efficacy comparisons (bacterial counts, mortality) at fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for racecadotril. |
| popPK | Eberlin_2012 | irrelevant | 4 | 3 | The paper is a comprehensive review that summarizes pharmacokinetic data (Cmax, t1/2, tmax) for racecadotril and its metabolite thiorphan in humans and animals, but it does not present original quantitative disposition parameters like clearance (CL), volume of distribution (V), or intercompartmental clearance (Q) derived from a compartmental or population PK model. |
| PD | Eberlin_2012 | not_relevant | 3 | 2 | The paper is a review that reports in vitro IC50/Ki values and qualitative clinical PK/PD observations (e.g., time to peak effect, inhibition of NEP activity) but does not provide a quantitative exposure-response or dose-response model with derivable PD parameters like Emax or EC50 for the clinical effect. |
| popPK | Eberlin_2018 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (diarrhea duration, stool output) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for racecadotril. |
| popPK | Fang_2025 | irrelevant | 0 | 0 | This is a clinical practice guideline review that discusses the use of racecadotril but does not report any original pharmacokinetic parameters or quantitative disposition data. |
| popPK | Fink_1995 | irrelevant | 0 | 0 | The paper studies dual inhibitors of ACE and NEP, not the pharmacokinetics of racecadotril. |
| popPK | Fischbach_2016 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy and tolerability studies for acute diarrhea, containing no original pharmacokinetic data or quantitative disposition parameters for racecadotril. |
| popPK | Florez_2018 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of clinical efficacy for acute diarrhea, not a pharmacokinetic study, and contains no PK parameters for racecadotril. |
| popPK | Fournié-Zaluski_1992 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological testing of aminopeptidase N inhibitors in mice and does not involve racecadotril or its pharmacokinetics. |
| popPK | Giros_1987 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and enzyme inhibition of thiorphan and acetorphan, not the pharmacokinetics of racecadotril. |
| popPK | Gordon_2016 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy (duration of illness, stool output) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Griggs_2016 | irrelevant | 2 | 0 | The study uses racecadotril as a comparator in a pharmacodynamic/efficacy model and reports only qualitative comparisons of metabolite concentrations (thiorphan) without providing quantitative PK parameters (CL, V, t1/2) or numeric concentration-time data for racecadotril. |
| popPK | Gros_1990 | irrelevant | 0 | 0 | The study investigates the inactivation of atrial natriuretic factor (ANF) in mice and does not involve racecadotril. |
| popPK | Gros_1991 | irrelevant | 0 | 0 | The paper studies ACE/enkephalinase inhibitors (glycopril, alatriopril) and does not mention racecadotril. |
| popPK | Guarino_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on colonic cells and does not report pharmacokinetic parameters for racecadotril. |
| popPK | Guarino_2014 | irrelevant | 0 | 0 | This is a clinical guideline for the management of acute gastroenteritis that mentions racecadotril as a therapeutic option but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the myth of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for racecadotril. |
| PGx | Haaz_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of irinotecan and mentions racecadotril only as a non-specific CYP3A inhibitor in vitro, not as the subject of a pharmacogenomic study. |
| popPK | Heather_2015 | irrelevant | 0 | 0 | This is a systematic review of clinical effectiveness for travelers' diarrhea, not a pharmacokinetic study, and contains no quantitative PK parameters for racecadotril. |
| popPK | Huighebaert_2003 | irrelevant | 0 | 0 | The paper is a critical review of clinical efficacy and models, not a pharmacokinetic study reporting quantitative disposition parameters for racecadotril. |
| popPK | Kaloudi_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer [111In-DOTA]MG11, using racecadotril only as a co-administered NEP inhibitor to enhance tumor uptake, not as the subject drug for PK parameter estimation. |
| popPK | Kanodia_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TD-0714 (a neprilysin inhibitor), not racecadotril. |
| popPK | Kumari_2025 | irrelevant | 0 | 0 | The study investigates the antimalarial mechanism of thiorphan and its prodrug racecadotril, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for racecadotril. |
| popPK | Lecomte_1986 | irrelevant | 0 | 0 | The paper studies acetorphan, an enkephalinase inhibitor, and does not mention racecadotril or report any pharmacokinetic parameters for it. |
| popPK | Lecomte_2000 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy studies for racecadotril and does not report quantitative pharmacokinetic parameters. |
| popPK | Lehert_2011 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis of racecadotril for gastroenteritis and does not report any pharmacokinetic parameters. |
| popPK | Li_2020 | irrelevant | 2 | 0 | The study reports bioequivalence metrics (AUC, Cmax ratios) for the metabolite thiorphan rather than quantitative population pharmacokinetic parameters (CL, V, ka) for racecadotril. |
| PD | Li_2020 | not_relevant | 0 | 0 | The study is a bioequivalence assessment based on PK parameters (AUC, Cmax) of a metabolite and does not report any pharmacodynamic measurements or exposure-response relationships. |
| popPK | Li_2023 | irrelevant | 1 | 0 | The study is an in vitro/ex vivo mechanistic investigation of probiotic-driven drug metabolism, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for racecadotril. |
| popPK | Liang_2019 | irrelevant | 0 | 0 | This is a clinical efficacy review of racecadotril for acute diarrhea in children, not a pharmacokinetic study, and it contains no quantitative PK parameters (CL, V, ka, etc.). |
| popPK | Liberge_1988 | irrelevant | 0 | 0 | The study investigates gastric emptying in mice using enkephalinase inhibitors and does not involve racecadotril or report any pharmacokinetic parameters. |
| popPK | Livingston_1988 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of acetorphan on opioid withdrawal in rats and mice, and does not involve racecadotril or its pharmacokinetics. |
| popPK | Manfredi_2025 | irrelevant | 2 | 1 | This is a narrative review of clinical efficacy, not a pharmacokinetic study, and the few PK values mentioned (e.g., Vd) are isolated fragments without a full model or clearance data. |
| popPK | Matheson_2000 | irrelevant | 0 | 0 | The text describes clinical efficacy and mechanism of action but contains no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Nagpal_2004 | irrelevant | 0 | 0 | no_text gate: only 13 chars of text extracted (&lt; 400) |
| popPK | Pieścik-Lech_2013 | irrelevant | 0 | 0 | This is a clinical review of acute gastroenteritis management that mentions racecadotril as an adjunctive therapy but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Pınarbaşlı_2022 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation and in-vitro dissolution study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for racecadotril. |
| PD | Pınarbaşlı_2022 | not_relevant | 0 | 0 | The paper is a pharmaceutical formulation study focusing on taste masking and in vitro dissolution, containing no pharmacokinetic or pharmacodynamic data. |
| popPK | Roge_1993 | irrelevant | 0 | 0 | The study evaluates acetorphan and loperamide for acute diarrhea and does not report pharmacokinetic parameters for racecadotril. |
| popPK | Said_2024 | relevant | 8 | 0 | The study reports PK parameters for thiorphan (the active metabolite of racecadotril) in a bioequivalence study, but the specific numeric values are not present in the provided evidence. |
| popPK | Schwartz_2000 | irrelevant | 0 | 0 | The paper is a review of preclinical efficacy and safety studies, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for racecadotril. |
| popPK | Spillantini_1986 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of acetorphan (an enkephalinase inhibitor) and does not involve racecadotril. |
| popPK | Stasch_1995 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of the NEP inhibitor sinorphan in rats and does not involve racecadotril or report its pharmacokinetic parameters. |
| popPK | Tack_2012 | irrelevant | 0 | 0 | The text is a general review of functional diarrhea pathophysiology and treatment, containing no pharmacokinetic data or parameters for racecadotril. |
| popPK | Wang_2021 | relevant | 8 | 0 | The study reports an in vivo pharmacokinetic study in Beagle dogs comparing racecadotril ODFs to a reference, but the specific numeric PK parameters (Cmax, AUC, CL, V, etc.) are not present in the provided evidence text. |
| popPK | Wielgos_2019 | irrelevant | 0 | 0 | The paper is a clinical management review of acute gastroenteritis that mentions racecadotril as a treatment option but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study is a pharmacological and electrophysiological characterization of racecadotril's mechanism of action (Kv7 channel inhibition) and efficacy in a PD model, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yohannes_2020 | irrelevant | 0 | 0 | The paper describes a chiral separation method for racecadotril and does not report any pharmacokinetic parameters. |
| PD | Yohannes_2020 | not_relevant | 0 | 0 | The paper describes a chiral separation method for racecadotril and reports enantiomeric excess values, but contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | unknown_2013 | irrelevant | 0 | 0 | The paper is a clinical review of racecadotril's therapeutic use in acute diarrhea and does not report any pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bracecadotril%5D&body=Drug%3A%20racecadotril%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_racecadotril/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
