<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;regadenoson&quot;}]"></div>

# regadenoson

- **generic name:** regadenoson
- **ATC codes:** `C01EB21`
- **DrugBank:** [DB06213](https://go.drugbank.com/drugs/DB06213) · **PubChem:** [CID 219024](https://pubchem.ncbi.nlm.nih.gov/compound/219024)
- **molar mass:** 390.354 g/mol (C15H18N8O5) — DrugBank
- **groups:** approved, investigational

## About

Regadenoson is a cardiac drug used to help with myocardial perfusion imaging, a heart scan that shows blood flow to the heart muscle. It is an approved medicine, with one product authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7307897](https://www.wikidata.org/wiki/Q7307897) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:44 | 0:28 | 0/0/0 | 0/0/0 | 0/0/0 | 19,210/509 | einfracz / qwen3.8-27b | 2 | 0/4 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=regadenoson).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADORA2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gordi_2007.pdf` | Gordi T et al., Regadenoson pharmacokinetics and tolera…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007301620](https://doi.org/10.1177/0091270007301620) | [17585115](https://pubmed.ncbi.nlm.nih.gov/17585115) | The paper describes a population pharmacokinetic model for regadenoson in humans, but specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence. |
| `Gordi_2006.pdf` | Gordi T et al., A population pharmacokinetic/pharmacody…, Clinical pharmacokinetics (2006) | pd | 5 | [10.2165/00003088-200645120-00005](https://doi.org/10.2165/00003088-200645120-00005) | [17112296](https://www.ncbi.nlm.nih.gov/pubmed/17112296) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Tejani_2011.pdf` | Tejani FH et al., Effect of caffeine on SPECT myocardial…, Journal of nuclear cardiolo… (2011) | pd | 5 | [10.1007/s12350-010-9311-6](https://doi.org/10.1007/s12350-010-9311-6) | [21082298](https://www.ncbi.nlm.nih.gov/pubmed/21082298) | metadata signals extractable PD data (exposure-response) |
| `Noël_2017.pdf` | Noël F et al., Validation of a Na+-shift binding assay…, Journal of pharmacological… (2017) | pd | 4 | [10.1016/j.vascn.2016.10.009](https://doi.org/10.1016/j.vascn.2016.10.009) | [27810394](https://www.ncbi.nlm.nih.gov/pubmed/27810394) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T23:44:20.812348+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abudiab_2014 | irrelevant | 0 | 0 | The paper is a case report focusing on the pharmacodynamic reversal of regadenoson with aminophylline and does not report quantitative pharmacokinetic parameters. |
| PD | Abudiab_2014 | not_relevant | 1 | 0 | The text is a case report describing the clinical efficacy of late aminophylline reversal without providing numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Baksa_2025 | irrelevant | 0 | 0 | The paper is a systematic review on myocardial flow reserve using SPECT imaging, which is a diagnostic imaging study, not a pharmacokinetic study of regadenoson. |
| PD | Baksa_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of the diagnostic and prognostic value of SPECT-derived myocardial flow reserve; it does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for regadenoson. |
| popPK | Bastarrika_2025 | irrelevant | 0 | 0 | The study is a cardiac magnetic resonance imaging trial assessing residual myocardial hyperemia and perfusion dynamics, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for regadenoson. |
| popPK | Bengs_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET tracer 18F-flurpiridaz in mice, using regadenoson only as a pharmacological stress agent. |
| popPK | Gordi_2006 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Gordi_2007 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for regadenoson in humans, but specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for regadenoson. |
| popPK | Liu_2026 | relevant | 8 | 2 | The study reports PK parameters for regadenoson, but the evidence only provides bioequivalence ratios and qualitative statements about differences in T1/2 and Vss without listing the actual numeric values for clearance, volume, or half-life. |
| PD | Liu_2026 | not_relevant | 2 | 1 | The study reports only summary statistics (mean/SD) for heart rate and blood pressure changes in a single-dose bioequivalence study, without providing concentration-effect data, dose-response curves, or fitted PD parameters (e.g., Emax, EC50). |
| popPK | Muñiz-Sáenz-Diez_2023 | irrelevant | 0 | 0 | The study evaluates the safety, hemodynamic response, and diagnostic performance of regadenoson for stress CMR, but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| PD | Muñiz-Sáenz-Diez_2023 | not_relevant | 1 | 0 | The paper reports clinical hemodynamic responses (HR, BP) and diagnostic accuracy but does not provide drug concentrations or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Noël_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study validating a binding assay for intrinsic efficacy and does not report any pharmacokinetic parameters for regadenoson. |
| PD | Noël_2017 | not_relevant | 2 | 2 | The paper reports binding assay parameters (IC50 ratios) for intrinsic efficacy estimation, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | Pogosyan_2026 | irrelevant | 0 | 0 | This is a hemodynamic safety study evaluating the use of regadenoson as a stress agent in cardiac MRI, not a pharmacokinetic study reporting disposition parameters for regadenoson. |
| popPK | Shrestha_2021 | irrelevant | 0 | 0 | The study uses regadenoson as a diagnostic stress agent for cardiac PET imaging in heart transplant patients and does not model or report pharmacokinetic parameters for regadenoson itself. |
| popPK | Tan_2020 | irrelevant | 0 | 0 | Regadenoson (Lexiscan) is used only as a blood-brain barrier regulator/co-administered agent, not as the subject drug for PK parameter extraction. |
| PD | Tan_2020 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action (pyroptosis/apoptosis) and biodistribution of HSYA with Lexiscan, but does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Tejani_2011 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| PD | Tejani_2011 | not_relevant | 0 | 0 | The paper is a rationale and design document for a clinical trial and does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Van_2013 | irrelevant | 0 | 0 | The paper focuses on myocardial perfusion imaging using (82)Rb and reports functional parameters like CFR and LVEF, not the pharmacokinetic parameters (CL, V, etc.) of the drug regadenoson itself. |
| popPK | Zhu_2012 | irrelevant | 0 | 0 | The study is a hemodynamic/physiological investigation of hepatic artery flow in a porcine model and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for regadenoson. |
| PD | Zhu_2012 | not_relevant | 3 | 2 | The paper mentions a dose-response curve to select a single dose (0.1 ug/kg/min) but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve in the text. |
| popPK | Zoghbi_2012 | irrelevant | 2 | 0 | The paper is a review article summarizing pharmacokinetics without providing original quantitative parameter values for regadenoson. |
| PD | Zoghbi_2012 | not_relevant | 2 | 1 | The text is an abstract for a review article summarizing pharmacology and clinical data, but it does not present specific numeric PD parameters or extractable concentration-effect curves for regadenoson. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
