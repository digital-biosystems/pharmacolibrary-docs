<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;bisacodyl&quot;}]"></div>

# bisacodyl

- **generic name:** bisacodyl
- **ATC codes:** `A06AB02`, `A06AG02`
- **DrugBank:** [DB09020](https://go.drugbank.com/drugs/DB09020) · **PubChem:** [CID 2391](https://pubchem.ncbi.nlm.nih.gov/compound/2391)
- **molar mass:** 361.3906 g/mol (C22H19NO4) — DrugBank
- **groups:** approved, investigational

## About

Bisacodyl is a stimulant laxative used to treat constipation, taken by mouth or as an enema. It is an approved medicine that remains widely available, generally without prescription, for short-term relief of constipation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417874](https://www.wikidata.org/wiki/Q417874) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bisacodyl).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AQP3 (negative modulator), ATP1A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:03 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 16,921/561 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/3 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roth_1988.pdf` | Roth W et al., [Pharmacokinetics and laxative effect o…, Arzneimittel-Forschung (1988) | popPK | 9 |  | [3401271](https://pubmed.ncbi.nlm.nih.gov/3401271) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, half-life) for bisacodyl's metabolite BHPM in humans, with values explicitly stated in the abstract. |

<sub>queue written 2026-10-04 15:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Battaglia_2018 | irrelevant | 0 | 0 | The study uses bisacodyl as a diagnostic probe for colonic motility and reports clinical outcomes, not pharmacokinetic parameters. |
| PD | Battaglia_2018 | not_relevant | 1 | 0 | The paper reports a qualitative diagnostic test (presence/absence of response) and clinical outcomes, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters like Emax or EC50. |
| popPK | Beubler_1985 | irrelevant | 0 | 0 | The study investigates the physiological effects of bisacodyl on water and electrolyte transport in the rat colon, not its pharmacokinetic disposition parameters. |
| PD | Beubler_1985 | not_relevant | 3 | 2 | The study reports qualitative changes in transport fluxes after chronic pretreatment and acute dosing, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for bisacodyl. |
| popPK | Farack_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of action (fluid transport and permeability) in rat colonic loops, not the systemic pharmacokinetic disposition parameters (CL, V, t1/2) of bisacodyl. |
| popPK | Farack_1985 | irrelevant | 0 | 0 | The study investigates the mechanism of action (mucus secretion and electrolyte transport) in rat colon, not pharmacokinetic disposition parameters. |
| popPK | Ghorpade_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of polysaccharides from Delonix regia, using bisacodyl only as a comparator for laxative efficacy, and does not report any pharmacokinetic parameters for bisacodyl. |
| PD | Ghorpade_2026 | not_relevant | 0 | 0 | The paper studies polysaccharides from Delonix regia and only mentions bisacodyl as a positive control for laxative efficacy; it does not report any pharmacodynamic or exposure-response data for bisacodyl. |
| popPK | Ibrahim_2022 | irrelevant | 0 | 0 | The paper describes a thin-layer chromatography (TLC) method for the qualitative and quantitative analysis of bisacodyl in pharmaceutical formulations, not a pharmacokinetic study, and contains no disposition parameters. |
| PD | Ibrahim_2022 | not_relevant | 0 | 0 | The paper describes an analytical method (smartphone-based TLC) for quantifying drug concentrations in formulations, not a pharmacodynamic or exposure-response study. |
| popPK | Jordan-Ely_2015 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of a laxative protocol (PEG and sodium picosulphate) for disimpaction and does not report pharmacokinetic parameters for bisacodyl. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study is a clinical trial evaluating bowel cleansing efficacy and tolerability, not a pharmacokinetic study, and reports no disposition parameters for bisacodyl. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper is a clinical trial comparing bowel cleansing efficacy and tolerability, reporting no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for bisacodyl. |
| popPK | Leng-Peschlow_1989 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic effects (transit time, fluid absorption) in rat large intestine and does not report quantitative pharmacokinetic parameters (CL, V, ka) for bisacodyl. |
| popPK | Müller-Lissner_2013 | irrelevant | 0 | 0 | The paper is a review of pharmacology and efficacy without original quantitative pharmacokinetic parameter values for bisacodyl. |
| PD | Müller-Lissner_2013 | not_relevant | 1 | 0 | The paper is a qualitative review of pharmacology and efficacy without reporting specific numeric PD parameters or exposure-response models for bisacodyl. |
| popPK | Puckett_2012 | irrelevant | 0 | 0 | The paper is a review of colonoscopy preparation protocols and does not report any pharmacokinetic parameters for bisacodyl. |
| PD | Puckett_2012 | not_relevant | 1 | 0 | The text is a review of colonoscopy preparation regimes and only qualitatively mentions bisacodyl as an adjunct with an undefined role, providing no numeric PD parameters or exposure-response data. |
| popPK | Reinhold_2025 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters (CL, Vss, T1/2) for Acetalax, not bisacodyl; bisacodyl is a co-investigated drug for efficacy but no PK values are provided for it. |
| PD | Roth_1988 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative observations of laxative effect timing, but explicitly states there is "no apparent relationship between effect and plasma level" for the dragee and provides no numeric PD parameters (Emax, EC50, etc.) or quantitative concentration-effect curve. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focusing on bowel movement frequency, not a pharmacokinetic study reporting disposition parameters like clearance or volume for bisacodyl. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The paper focuses on sodium picosulfate (Clenpiq), not bisacodyl, and does not report pharmacodynamic or exposure-response parameters for bisacodyl. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The paper describes a colonoscopy preparation (Plenvu) and does not report any pharmacodynamic or exposure-response analysis for bisacodyl. |
| popPK | unknown_2019_2 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PD | unknown_2019_2 | not_relevant | 0 | 0 | The paper discusses prucalopride, not bisacodyl, and does not report any pharmacodynamic or exposure-response data for bisacodyl. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The paper describes a mechanical device (vibrating capsule) for constipation, not a pharmacological drug like bisacodyl, and contains no pharmacodynamic or exposure-response data. |
| popPK | van_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for prucalopride, not bisacodyl. |
| PD | van_2016 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for prucalopride, not bisacodyl, and contains no pharmacodynamic (PD) or exposure-response analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbisacodyl%5D&body=Drug%3A%20bisacodyl%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bisacodyl/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
