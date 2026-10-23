<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;flosequinan&quot;}]"></div>

# flosequinan

- **generic name:** flosequinan
- **ATC codes:** `C01DB01`
- **DrugBank:** [DB13228](https://go.drugbank.com/drugs/DB13228) · **PubChem:** none
- **molar mass:** 239.26 g/mol (C11H10FNO2S) — DrugBank
- **groups:** approved, withdrawn

## About

Flosequinan is a vasodilator that was used to treat heart failure. It has been withdrawn from the market and is no longer used, reportedly because of safety concerns in patients with heart failure.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q592947](https://www.wikidata.org/wiki/Q592947) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 10:03 | 1:41 | 0/0/0 | 0/0/0 | 0/0/0 | 35,225/2,004 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 38 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gallo_1993.pdf` | Gallo BV et al., Pharmacokinetic profile of flosequinan…, Journal of pharmaceutical s… (1993) | popPK | 10 | [10.1002/jps.2600820313](https://doi.org/10.1002/jps.2600820313) | [8450423](https://pubmed.ncbi.nlm.nih.gov/8450423) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, half-life, clearance changes) for flosequinan and its active metabolite in humans. |
| `Hinson_1994.pdf` | Hinson JL et al., Pharmacokinetics, safety, and tolerabil…, Journal of pharmaceutical s… (1994) | popPK | 10 | [10.1002/jps.2600830323](https://doi.org/10.1002/jps.2600830323) | [8207686](https://pubmed.ncbi.nlm.nih.gov/8207686) | The abstract provides explicit quantitative pharmacokinetic parameters (AUC, Cmax, t1/2, clearance, elimination rate constant) for flosequinan and its metabolite in patients with hepatic dysfunction. |
| `Lindsey_2000.pdf` | Lindsey JK et al., Simultaneous modelling of flosequinan a…, European journal of clinica… (2000) | popPK | 10 | [10.1007/s002280050704](https://doi.org/10.1007/s002280050704) | [10805061](https://pubmed.ncbi.nlm.nih.gov/10805061) | The paper describes a PK study of flosequinan in humans with a parent-metabolite model, but the specific numeric parameter values are not present in the provided evidence. |
| `Kashiyama_1994.pdf` | Kashiyama E et al., Stereoselective pharmacokinetics and in…, Xenobiotica; the fate of fo… (1994) | popPK | 9 | [10.3109/00498259409045900](https://doi.org/10.3109/00498259409045900) | [8059540](https://pubmed.ncbi.nlm.nih.gov/8059540) | The study reports quantitative pharmacokinetic parameters (clearance, interconversion) for flosequinan in rats, but the specific numeric values are not present in the provided abstract text. |
| `Nicholls_1996.pdf` | Nicholls DP et al., Pharmacokinetics of flosequinan in pati…, European journal of clinica… (1996) | popPK | 9 | [10.1007/s002280050110](https://doi.org/10.1007/s002280050110) | [8803521](https://pubmed.ncbi.nlm.nih.gov/8803521) | The study reports quantitative PK parameters (Cmax, Tmax, half-life) for flosequinan in humans, but lacks explicit clearance or volume of distribution values. |
| `Sakai_1993.pdf` | Sakai M et al., Pharmacokinetics of flosequinan in elde…, European journal of clinica… (1993) | popPK | 9 | [10.1007/BF00316479](https://doi.org/10.1007/BF00316479) | [8513852](https://pubmed.ncbi.nlm.nih.gov/8513852) | The study reports quantitative pharmacokinetic parameters (tmax, Cmax, t1/2) for flosequinan and its metabolite in human patients. |
| `Rau_1994.pdf` | Rau R et al., Effects of concurrent administration of…, Arzneimittel-Forschung (1994) | popPK | 8 |  | [8192694](https://pubmed.ncbi.nlm.nih.gov/8192694) | The study reports pharmacokinetic parameters for flosequinan in humans, but the specific numeric values are not present in the provided abstract text. |
| `Frodsham_1992.pdf` | Frodsham G et al., Effect of flosequinan upon isoenzymes o…, European journal of pharmac… (1992) | pd | 5 | [10.1016/0014-2999(92)90396-l](https://doi.org/10.1016/0014-2999(92)90396-l) | [1319914](https://www.ncbi.nlm.nih.gov/pubmed/1319914) | metadata signals extractable PD data (IC50) |
| `Starling_1994.pdf` | Starling MR, Effects of low-dose flosequinan on left…, American heart journal (1994) | pd | 4 | [10.1016/0002-8703(94)90018-3](https://doi.org/10.1016/0002-8703(94)90018-3) | [8017265](https://www.ncbi.nlm.nih.gov/pubmed/8017265) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06 10:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoki_1986 | irrelevant | 0 | 0 | The paper investigates the effects of Bay K 8644 and nifedipine on rat femoral arteries and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | Atchison_1987 | irrelevant | 0 | 0 | The study investigates the neurophysiological effects of BAY K 8644 on acetylcholine release in mice and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Barrús_1995 | irrelevant | 0 | 0 | The paper studies the effect of Bay K 8644 on human placental arteries and does not involve flosequinan or its pharmacokinetics. |
| popPK | Cohn_1991 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism of action and therapeutic potential of flosequinan, containing no quantitative pharmacokinetic parameters. |
| PD | Cohn_1991 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism and potential benefits of flosequinan without providing any numeric pharmacodynamic parameters, concentration-effect data, or dose-response curves. |
| popPK | Falotico_1989 | irrelevant | 0 | 0 | The study reports inotropic and hemodynamic effects (pharmacodynamics) in ferrets and dogs, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Frodsham_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on phosphodiesterase isoenzymes and does not report pharmacokinetic parameters for flosequinan. |
| PD | Frodsham_1992 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50) for phosphodiesterase isoenzymes, which is a mechanistic/pharmacological study, not a pharmacodynamic (exposure-response) or dose-response analysis in a biological system (in vivo or ex vivo tissue response) as defined for PD modeling. |
| popPK | Haida_1994 | irrelevant | 0 | 0 | The study investigates the effect of BAY K-8644 on brain ischemia in rats and does not involve flosequinan or its pharmacokinetics. |
| popPK | Howl_1989 | irrelevant | 0 | 0 | The paper investigates the mechanism of muscle necrosis induced by Bay K 8644 in vitro and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Högestätt_1989 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of Bay K 8644 on adrenoceptors in cat and rat arteries and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | Ives_1986 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of BAY k 8644 in rats and does not involve flosequinan or report its pharmacokinetic parameters. |
| popPK | Kamali_1991 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of theophylline, with flosequinan acting only as a co-administered agent to test for drug-drug interactions, and no PK parameters for flosequinan itself are reported. |
| popPK | Kashiyama_1994 | relevant | 9 | 2 | The study reports quantitative pharmacokinetic parameters (clearance, interconversion) for flosequinan in rats, but the specific numeric values are not present in the provided abstract text. |
| popPK | Leary_1989 | irrelevant | 0 | 0 | The study focuses on renal excretory actions and pharmacodynamics, not pharmacokinetic parameters, and flosequinan is only a comparator agent. |
| PD | Leary_1989 | not_relevant | 0 | 0 | The paper only qualitatively states that flosequinan did not affect water and electrolyte excretion, providing no numeric PD parameters or exposure-response data. |
| popPK | Lindsey_2000 | relevant | 10 | 0 | The paper describes a PK study of flosequinan in humans with a parent-metabolite model, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | McMurtry_1985 | irrelevant | 0 | 0 | The paper studies the effects of BAY K 8644 and A23187 on hypoxic vasoconstriction in rat lungs and does not involve flosequinan or its pharmacokinetics. |
| popPK | Moreland_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of action of Bay K 8644 in rats and does not mention flosequinan or report any pharmacokinetic parameters for it. |
| popPK | Ng_1994 | irrelevant | 0 | 0 | The study reports only pharmacodynamic (hemodynamic) effects and contains no pharmacokinetic parameters for flosequinan. |
| PD | Ng_1994 | not_relevant | 2 | 1 | The study reports qualitative changes in hemodynamic variables (HR, CO, etc.) for a single fixed dose compared to placebo, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50). |
| popPK | Ogawa_2014 | irrelevant | 2 | 0 | This is a review article that discusses flosequinan qualitatively (noting increased AUC in decompensated heart failure) but does not provide specific quantitative PK parameter values (CL, V, t1/2) in the provided text. |
| popPK | Rau_1994 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for flosequinan in humans, but the specific numeric values are not present in the provided abstract text. |
| PD | Rau_1994 | not_relevant | 2 | 1 | The paper reports a drug-drug interaction study with only qualitative/percentage changes in blood pressure and heart rate, lacking any concentration-effect modeling or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Scott_1991 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (blood flow and vascular resistance) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Scriabine_1986 | irrelevant | 0 | 0 | The paper studies the effect of BAY K 8644 on calcium uptake in rabbit aortic rings and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Sim_1988 | irrelevant | 0 | 0 | The study reports cardiovascular and renal physiological effects (blood pressure, PRA, sodium excretion) but does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for flosequinan. |
| popPK | Starling_1994 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Starling_1994 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Tran_2023 | irrelevant | 0 | 0 | The paper studies ginsenoside Re in mice and does not involve flosequinan or its pharmacokinetics. |
| popPK | Vercruysse_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propranolol in rats, not flosequinan. |
| popPK | Warbanow_1988 | irrelevant | 0 | 0 | The paper studies the pharmacological effect of BAY K 8644 on rat aorta and does not involve flosequinan or any pharmacokinetic parameters. |
| popPK | Xu_2011 | irrelevant | 0 | 0 | The paper studies blood pressure in BK channel knockout mice and does not involve flosequinan or its pharmacokinetics. |
| popPK | Yamaguchi_2020 | irrelevant | 0 | 0 | The paper studies the effects of Bay K 8644 on HepG2 cells and does not involve flosequinan or its pharmacokinetics. |
| popPK | Zhou_1998 | irrelevant | 0 | 0 | The paper studies insulin-producing cells in mice and does not involve flosequinan or its pharmacokinetics. |
| popPK | de_1989 | irrelevant | 0 | 0 | The study investigates the chronotropic effects of Bay K 8644 in rat atria and does not involve flosequinan or its pharmacokinetics. |
| popPK | unknown_1988 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | unknown_1988 | not_relevant | 0 | 0 | The provided text is only a header for a conference proceedings and does not contain the abstract or data for flosequinan. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflosequinan%5D&body=Drug%3A%20flosequinan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flosequinan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
