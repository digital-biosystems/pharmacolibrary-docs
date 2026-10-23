<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;ziconotide&quot;}]"></div>

# ziconotide

- **generic name:** ziconotide
- **ATC codes:** `N02BG08`
- **DrugBank:** [DB06283](https://go.drugbank.com/drugs/DB06283) · **PubChem:** none
- **groups:** approved, investigational

## About

Ziconotide is a non-opioid painkiller used for severe chronic pain, including complex regional pain syndrome. It is authorised in the European Union and given as an injection into the spinal fluid, so its use is restricted to specialist care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q198473](https://www.wikidata.org/wiki/Q198473) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ziconotide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1A (inhibitor), CACNA1B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:18 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 60,212/1,284 | einfracz / qwen3.8-27b | 4 | 2/5 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Manda_2016.pdf` | Manda P et al., Delivery of ziconotide to cerebrospinal…, Journal of controlled relea… (2016) | popPK | 10 | [10.1016/j.jconrel.2015.12.044](https://doi.org/10.1016/j.jconrel.2015.12.044) | [26732557](https://pubmed.ncbi.nlm.nih.gov/26732557) | The paper is a preclinical PK study in rats reporting specific numeric parameters (elimination rate constants, Cmax, Tmax) for ziconotide in CSF. |
| `Wermeling_2003.pdf` | Wermeling D et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | popPK | 10 |  | [12817525](https://pubmed.ncbi.nlm.nih.gov/12817525) | The paper reports specific quantitative PK parameters for ziconotide (half-life, clearance, volume of distribution) in the abstract, derived from a clinical study. |
| `Yaksh_2012.pdf` | Yaksh TL et al., Pharmacokinetic analysis of ziconotide…, Neuromodulation : journal o… (2012) | popPK | 10 | [10.1111/j.1525-1403.2012.00479.x](https://doi.org/10.1111/j.1525-1403.2012.00479.x) | [22748108](https://pubmed.ncbi.nlm.nih.gov/22748108) | The study reports quantitative pharmacokinetic parameters for ziconotide in dogs, including half-lives (0.14, 1.77, 2.47 hours) and concentration ratios, which are explicitly provided in the abstract. |
| `Swensen_2014.pdf` | Swensen AM et al., Characterization of the triazine, T4, a…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.10.037](https://doi.org/10.1016/j.ejphar.2014.10.037) | [25446431](https://www.ncbi.nlm.nih.gov/pubmed/25446431) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 06:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbadie_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and mechanism of action of TROX-1, with ziconotide mentioned only as a background comparator, and no pharmacokinetic parameters for ziconotide are reported. |
| PD | Abbadie_2010 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of a new compound (TROX-1) and only mentions ziconotide qualitatively as a comparator without providing any exposure-response or dose-response data for ziconotide. |
| popPK | Antunes_2020 | irrelevant | 0 | 0 | The study evaluates the antinociceptive efficacy of a new spider-derived peptide using ziconotide only as a comparator, and explicitly states that pharmacokinetics were not determined. |
| popPK | Davran_2026 | irrelevant | 0 | 0 | The paper is a review of marine bioactive compounds and contains no data or parameters for the drug ziconotide. |
| PD | Davran_2026 | not_relevant | 0 | 0 | The paper is a general review of marine bioactive compounds and does not contain specific pharmacodynamic modeling or numeric exposure-response data for ziconotide. |
| popPK | Deer_2017 | irrelevant | 0 | 0 | The paper is a consensus guideline on intrathecal drug delivery safety and does not report quantitative pharmacokinetic parameters for ziconotide. |
| PD | Deer_2017 | not_relevant | 1 | 0 | The paper is a consensus guideline and literature review regarding intrathecal drug delivery safety, not a primary study reporting specific pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Finley_2010 | irrelevant | 0 | 0 | The paper is a mechanistic/drug discovery study on small-molecule calcium channel antagonists where ziconotide is used only as a reference compound, with no pharmacokinetic parameters reported. |
| PD | Finley_2010 | not_relevant | 0 | 0 | The paper focuses on the discovery of small-molecule Cav2.2 inhibitors using in vitro assays and does not report any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | The study is an in silico modeling study of montelukast targeting T-type calcium channels and does not report pharmacokinetic parameters for ziconotide. |
| PD | Fong_2025 | not_relevant | 0 | 0 | The paper focuses on in silico docking and MCell simulations for montelukast targeting Cav3.1 channels; it does not report any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Hamadou_2026 | irrelevant | 0 | 0 | The paper is a review of bioactive peptide pharmacology where ziconotide is cited only as a clinical precedent/comparator, with no original PK data reported for ziconotide itself. |
| popPK | Hirasawa_2022 | irrelevant | 0 | 0 | The study is a PBPK modeling study in rats focusing on CSF flow dynamics and using sucrose as a marker, not a study of ziconotide's pharmacokinetics. |
| PD | Hirasawa_2022 | not_relevant | 0 | 0 | The paper focuses on a physiologically based pharmacokinetic (PBPK) model for CSF flow and does not report any pharmacodynamic (PD) or exposure-response analysis for ziconotide. |
| popPK | Hu_1999 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on analogues of ziconotide, reporting in vitro and in vivo efficacy (IC50, ED50) but no pharmacokinetic disposition parameters for ziconotide. |
| PD | Hu_1999 | not_relevant | 3 | 2 | The paper reports IC50 and ED50 values for a novel analogue (compound 11), not for ziconotide, and does not provide a concentration-effect curve or PK/PD model for ziconotide. |
| popPK | Jain_2000 | irrelevant | 0 | 0 | The text is a qualitative review of intrathecal ziconotide that discusses mechanisms and clinical approval without reporting quantitative pharmacokinetic parameters. |
| popPK | Karri_2021 | irrelevant | 1 | 0 | This is a narrative review of combination intrathecal drug therapy strategies and does not report original quantitative pharmacokinetic parameter values for ziconotide. |
| PD | Karri_2021 | not_relevant | 1 | 0 | The paper is a narrative review of combination intrathecal drug therapy strategies and does not report specific numeric PD parameters or exposure-response curves for ziconotide. |
| popPK | Klotz_2006 | irrelevant | 4 | 3 | This is a short review that provides a single qualitative clearance value for ziconotide in the CSF but lacks a compartmental population-PK model, volume of distribution, or detailed quantitative disposition parameters. |
| popPK | Kolosov_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of leconotide (a different drug) and morphine, not the pharmacokinetics of ziconotide. |
| popPK | Lin_2024 | irrelevant | 2 | 0 | This is a comprehensive review article summarizing the literature on ziconotide pharmacokinetics and does not present original quantitative parameter values in the provided evidence. |
| popPK | Luo_2015 | irrelevant | 0 | 0 | The paper focuses on the characterization of a new conotoxin (GeXIVA) and only mentions ziconotide as a structural comparator, providing no pharmacokinetic parameters for ziconotide. |
| PD | Luo_2015 | not_relevant | 0 | 0 | The paper focuses on the characterization of a new conotoxin (GeXIVA) and only mentions ziconotide as a structural comparison without providing any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | McDowell_2016 | irrelevant | 1 | 0 | This is a clinical review of dosing and administration strategies for ziconotide that lacks original pharmacokinetic studies and specific quantitative disposition parameters (CL, V, half-life). |
| popPK | Pope_2013 | irrelevant | 2 | 0 | This is a narrative review that discusses pharmacokinetics in general terms but does not present original quantitative disposition parameters or numeric values for ziconotide. |
| PD | Pope_2013 | not_relevant | 2 | 1 | The text is a qualitative review summary that mentions pharmacodynamics and the therapeutic window but does not provide specific numeric PD parameters or concentration-effect data. |
| popPK | Pope_2017 | irrelevant | 0 | 0 | The paper is a narrative review summarizing existing literature and does not report original quantitative pharmacokinetic parameter values for ziconotide. |
| popPK | Samii_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium accumulation following traumatic brain injury and does not report any pharmacokinetic parameters for ziconotide. |
| popPK | Schroeder_2004 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on small molecule mimics of omega-conotoxins and does not report pharmacokinetic parameters for ziconotide. |
| PD | Schroeder_2004 | not_relevant | 1 | 1 | The paper reports an IC50 for newly synthesized small molecule analogs, not for ziconotide, and does not provide a concentration-effect curve or population PD model for the drug of interest. |
| popPK | Swensen_2012 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing TROX-1, with ziconotide serving only as a comparator and no pharmacokinetic parameters reported. |
| PD | Swensen_2012 | not_relevant | 0 | 0 | The paper reports in vitro electrophysiology and IC50 values for TROX-1, not pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Swensen_2014 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PD | Swensen_2014 | not_relevant | 0 | 0 | The paper characterizes a novel triazine compound (T4) and does not report any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Verweij_2000 | irrelevant | 0 | 0 | The study is a preclinical efficacy trial in rats focusing on mitochondrial function and dose-response, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wang_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antinociception and drug interactions in rats, reporting no quantitative pharmacokinetic parameters for ziconotide. |
| PD | Wang_2000 | not_relevant | 4 | 2 | The paper describes dose-dependent effects and shifts in dose-response curves but does not provide specific numeric PD parameters (e.g., ED50, Emax) or concentration-effect data in the provided text. |
| popPK | Williams_2008 | irrelevant | 0 | 0 | The paper is a review of safety and efficacy without original quantitative pharmacokinetic parameter values for ziconotide. |
| PD | Williams_2008 | not_relevant | 2 | 0 | The paper is a qualitative review that mentions a steep dose-response curve but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper studies a novel conotoxin (TsIIIA) and uses ziconotide only as a comparator in an analgesic assay, reporting no pharmacokinetic parameters for ziconotide. |
| PD | Yang_2017 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for a novel conotoxin (TsIIIA), not for ziconotide; ziconotide is only mentioned as a comparator in a qualitative statement. |
| popPK | Yaseen_2026 | irrelevant | 0 | 0 | This is a review article on peptide therapeutics that mentions ziconotide only as an example of a venom-derived peptide, providing no original pharmacokinetic data or quantitative parameters. |
| PD | Yaseen_2026 | not_relevant | 1 | 0 | The text is a general review of peptide therapeutics that mentions ziconotide only as an example of a venom-derived peptide, without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper discusses the discovery of an EGFR inhibitor (CDDO-Me) for lung cancer and contains no data or mention of ziconotide pharmacokinetics. |
| PD | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates CDDO-Me, not ziconotide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bziconotide%5D&body=Drug%3A%20ziconotide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ziconotide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
