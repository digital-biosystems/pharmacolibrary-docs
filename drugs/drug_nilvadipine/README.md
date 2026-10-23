<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nilvadipine&quot;}]"></div>

# nilvadipine

- **generic name:** nilvadipine
- **ATC codes:** `C08CA10`
- **DrugBank:** [DB06712](https://go.drugbank.com/drugs/DB06712) · **PubChem:** [CID 4494](https://pubchem.ncbi.nlm.nih.gov/compound/4494)
- **molar mass:** 385.3707 g/mol (C19H19N3O6) — DrugBank
- **groups:** approved, investigational

## About

Nilvadipine is a calcium channel blocker used to treat high blood pressure (essential hypertension). It is an approved antihypertensive drug, though not authorised in the European Union, and has also been investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7037489](https://www.wikidata.org/wiki/Q7037489) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">dog</span> | [Wu_1988_DBP](drugs/drug_nilvadipine/pd_Wu_1988_DBP.md) | diastolic blood pressure ← nilvadipine · direct log-linear effect | — | Wu WH et al., Relationship between the pharmacokineti…, Drug metabolism and disposi… (1988) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">dog</span> | [Wu_1988_SBP](drugs/drug_nilvadipine/pd_Wu_1988_SBP.md) | systolic blood pressure ← nilvadipine · direct log-linear effect | — | Wu WH et al., Relationship between the pharmacokineti…, Drug metabolism and disposi… (1988) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nilvadipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2A6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor), CACNA1S (inhibitor), CACNA2D1 (inhibitor), CACNA2D3 (inhibitor), CACNB2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:38 | 0:48 | 0/0/0 | 1/0/0 | 0/0/0 | 28,596/1,259 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 6/2 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheung_1988.pdf` | Cheung WK et al., Importance of oral dosing rate on the h…, Journal of clinical pharmac… (1988) | pd | 5 | [10.1002/j.1552-4604.1988.tb03121.x](https://doi.org/10.1002/j.1552-4604.1988.tb03121.x) | [3243913](https://www.ncbi.nlm.nih.gov/pubmed/3243913) | metadata signals extractable PD data (Emax) |
| `Ishibashi_1998.pdf` | Ishibashi H et al., Effect of nilvadipine on the voltage-de…, Brain research (1998) | pd | 4 | [10.1016/s0006-8993(98)01018-x](https://doi.org/10.1016/s0006-8993(98)01018-x) | [9824683](https://www.ncbi.nlm.nih.gov/pubmed/9824683) | metadata signals extractable PD data (IC50) |
| `Nomoto_1988.pdf` | Nomoto A et al., Smooth muscle cell migration induced by…, Atherosclerosis (1988) | pd | 4 | [10.1016/0021-9150(88)90083-4](https://doi.org/10.1016/0021-9150(88)90083-4) | [2850808](https://www.ncbi.nlm.nih.gov/pubmed/2850808) | metadata signals extractable PD data (IC50) |
| `Türkeş_2019.pdf` | Türkeş C et al., Anti-diabetic Properties of Calcium Cha…, Applied biochemistry and bi… (2019) | pd | 4 | [10.1007/s12010-019-03009-x](https://doi.org/10.1007/s12010-019-03009-x) | [30980289](https://www.ncbi.nlm.nih.gov/pubmed/30980289) | metadata signals extractable PD data (IC50) |
| `Türkeş_2021.pdf` | Türkeş C et al., Calcium channel blockers: molecular doc…, Journal of biomolecular str… (2021) | pd | 4 | [10.1080/07391102.2020.1736631](https://doi.org/10.1080/07391102.2020.1736631) | [32107977](https://www.ncbi.nlm.nih.gov/pubmed/32107977) | metadata signals extractable PD data (IC50) |
| `Türkeş_2022.pdf` | Türkeş C et al., Some calcium-channel blockers: kinetic…, Journal of biomolecular str… (2022) | pd | 4 | [10.1080/07391102.2020.1806927](https://doi.org/10.1080/07391102.2020.1806927) | [32783605](https://www.ncbi.nlm.nih.gov/pubmed/32783605) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T04:37:26.693850+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1988 | irrelevant | 1 | 0 | The paper is a review of calcium antagonists that discusses nilvadipine qualitatively but does not report specific quantitative pharmacokinetic parameter values. |
| PD | Abernethy_1988 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics and mentions that pharmacodynamic data have not been reported for the racemates, providing no numeric PD parameters or exposure-response relationships. |
| popPK | Berger_1992 | irrelevant | 2 | 0 | The abstract mentions pharmacokinetics were examined but provides no quantitative disposition parameters (CL, V, t1/2, etc.) for nilvadipine. |
| PD | Berger_1992 | not_relevant | 2 | 1 | The study reports mean blood pressure changes and PK parameters but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD parameters linking exposure to response. |
| popPK | Breithaupt-Grögler_2001 | irrelevant | 2 | 1 | Nilvadipine is a co-administered comparator in a drug interaction study focused on imidapril, and only relative bioequivalence ratios (AUC%) are reported, not absolute quantitative disposition parameters like clearance or volume. |
| PD | Breithaupt-Grögler_2001 | not_relevant | 2 | 1 | The study reports only qualitative additive pharmacodynamic effects and PK parameters (AUC, Cmax) without any concentration-effect modeling or numeric PD parameters (e.g., Emax, EC50) for nilvadipine. |
| popPK | Brogden_1995 | irrelevant | 0 | 0 | The provided text is a collection of errata and references, not the full text of the nilvadipine review, and contains no quantitative pharmacokinetic parameter values. |
| PD | Brogden_1995 | not_relevant | 0 | 0 | The provided text consists of a list of references and errata notes; it does not contain the main body of a study reporting pharmacodynamic data or numeric PD parameters for nilvadipine. |
| PGx | Brogden_1995 | not_relevant | 0 | 0 | The text is a general clinical review of nilvadipine's pharmacology and therapeutic use, containing no information on gene variants or pharmacogenomic effects. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for nilvadipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for nilvadipine. |
| popPK | Cheung_1988 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Cheung_1988 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships. |
| popPK | Hoffmann_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure outcomes and adverse events, with no pharmacokinetic parameters or disposition data for nilvadipine. |
| popPK | Honerjäger_1992 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics and qualitative comparisons, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nilvadipine. |
| PD | Honerjäger_1992 | not_relevant | 2 | 1 | The text is a qualitative summary comparing nilvadipine to nifedipine and mentions potency ratios, but it does not provide specific numeric PD parameters (like EC50, Emax) or an extractable concentration-effect curve. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition by antihypertensive drugs, not a pharmacokinetic study reporting disposition parameters for nilvadipine. |
| PD | Ikemura_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for CYP2J2, not pharmacodynamic exposure-response or dose-response relationships for the drug's clinical effect. |
| popPK | Ishibashi_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel inhibition in rat neurons, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Kennelly_2012 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic interaction on clinical cognitive outcomes (MMSE/EXIT25), not on pharmacokinetic or pharmacodynamic parameters of nilvadipine. |
| popPK | Lago_2022 | irrelevant | 0 | 0 | The paper is a review on the genetics of schizophrenia and drug repurposing, containing no pharmacokinetic data for nilvadipine. |
| PD | Lago_2022 | not_relevant | 0 | 0 | The paper is a review on the druggable schizophrenia genome and does not report any pharmacodynamic or exposure-response data for nilvadipine. |
| PGx | Naritomi_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro-in vivo extrapolation (IVIVE) for hepatic clearance prediction and does not investigate the impact of genetic variants on nilvadipine pharmacokinetics. |
| PGx | Niwa_2004 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of CYP enzymes by nilvadipine, not the effect of a gene variant on nilvadipine's PK/PD. |
| popPK | Nomoto_1987 | irrelevant | 0 | 0 | The study focuses on antiatherogenic activity and in-vitro mechanisms (IC50 values) rather than pharmacokinetic disposition parameters. |
| popPK | Nomoto_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle cell migration and does not report any pharmacokinetic parameters for nilvadipine. |
| popPK | Ohtsuka_1988 | irrelevant | 0 | 0 | The study investigates cardiovascular pharmacodynamics (hemodynamics and isolated organ responses) rather than pharmacokinetic disposition parameters. |
| popPK | Oyanagui_1991 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (edema, superoxide production) and potency metrics (ED30, IC50) rather than pharmacokinetic disposition parameters. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on pharmacodynamic modeling of slow reversible binding and does not report pharmacokinetic parameters for nilvadipine. |
| PD | Ren_2022 | not_relevant | 4 | 4 | The paper is a review/tutorial on slow reversible binding models and does not report PD parameters for nilvadipine; it focuses on candesartan, noberastine, and other drugs. |
| popPK | Rosenthal_1994 | irrelevant | 2 | 1 | The paper is a review/overview that provides only qualitative descriptions and broad ranges (e.g., half-life 15-20 h, bioavailability 14-19%) without reporting specific quantitative compartmental PK parameters (CL, V, Q, ka) or population model estimates. |
| PD | Rosenthal_1994 | not_relevant | 2 | 1 | The text is a qualitative overview/review that mentions pharmacodynamic properties (e.g., vasodilatory effect magnitude, vascular/cardiac quotient) but does not provide a concentration-effect curve, dose-response data, or numeric PD parameters (Emax, EC50) for nilvadipine. |
| popPK | Saima_2002 | irrelevant | 2 | 0 | The study reports only AUC and pharmacodynamic effects, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| PD | Saima_2002 | not_relevant | 2 | 1 | The study reports qualitative changes in blood pressure and PK parameters (AUC) due to drug interaction, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for nilvadipine. |
| popPK | Shimada_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (effect compartment, EC50, binding affinity) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for nilvadipine. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding nilvadipine or pharmacodynamic parameters. |
| popPK | Sugawara_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on lipid peroxidation, not a pharmacokinetic study, and reports no disposition parameters for nilvadipine. |
| PD | Sugawara_1996 | not_relevant | 0 | 0 | The text describes in vitro lipid peroxidation assays and lists nilvadipine as a reagent, but contains no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Türkeş_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldose reductase inhibition and does not report any pharmacokinetic parameters for nilvadipine. |
| popPK | Türkeş_2021 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Türkeş_2021 | not_relevant | 0 | 0 | The paper focuses on molecular docking and inhibition of carbonic anhydrase by calcium channel blockers, not on pharmacodynamic exposure-response or dose-response relationships for nilvadipine. |
| popPK | Türkeş_2022 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Türkeş_2022 | not_relevant | 0 | 0 | The paper focuses on kinetic and in silico studies of calcium-channel blockers on paraoxonase-I, not on pharmacodynamic exposure-response relationships for nilvadipine in a clinical or physiological context. |
| popPK | Weir_1990 | irrelevant | 2 | 0 | The study reports clinical efficacy and blood pressure responses but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nilvadipine. |
| popPK | Worley_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of perfluorooctanoic acid (PFOA) in rats, not nilvadipine. |
| PD | Worley_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK modeling) of perfluorooctanoic acid (PFOA) in rats, not nilvadipine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Yao_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding nilvadipine pharmacokinetics. |
| PD | Yao_2000 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any data regarding nilvadipine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
