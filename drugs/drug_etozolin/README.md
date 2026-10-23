<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;etozolin&quot;}]"></div>

# etozolin

- **generic name:** etozolin
- **ATC codes:** `C03CX01`
- **DrugBank:** [DB08982](https://go.drugbank.com/drugs/DB08982) · **PubChem:** not captured
- **groups:** experimental

## About

Etozolin is a loop (high-ceiling) diuretic that has been used as a diuretic and antihypertensive drug. It is currently listed only as an experimental drug and does not appear to be in widespread clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5404861](https://www.wikidata.org/wiki/Q5404861) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:52 | 0:43 | 0/0/0 | 0/0/0 | 0/0/0 | 24,615/826 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knauf_1980.pdf` | Knauf H et al., Independent of etozolin elimination of…, Arzneimittel-Forschung (1980) | popPK | 8 | not captured | [7192116](https://pubmed.ncbi.nlm.nih.gov/7192116) | The study reports quantitative half-life values for etozolin and its metabolite in humans, though other parameters like clearance or volume are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06T17:52:18.616418+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barthelmebs_1995 | irrelevant | 0 | 0 | The study focuses on renal hemodynamics and diuretic effects, not pharmacokinetic disposition parameters (CL, V, etc.) for etozolin. |
| popPK | Battaglia_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure changes, not a pharmacokinetic study with disposition parameters. |
| PD | Battaglia_1990 | not_relevant | 2 | 1 | The paper reports clinical blood pressure changes for fixed doses but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Beermann_1987 | irrelevant | 2 | 2 | This is a review article that summarizes published knowledge rather than reporting original quantitative disposition parameters (CL, V, Q, ka) or a compartmental model for etozolin. |
| popPK | Donat_1981 | irrelevant | 0 | 0 | The paper is a clinical review of diuretic therapy for coronary insufficiency and contains no pharmacokinetic data or quantitative disposition parameters for etozolin. |
| PD | Donat_1981 | not_relevant | 0 | 0 | The text is a qualitative clinical review discussing the general mechanism and therapeutic use of diuretics, including etozoline, without providing any specific pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | Greven_1977 | irrelevant | 0 | 0 | The study focuses on renal physiology and tubular reabsorption mechanisms (micropuncture) rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for etozolin. |
| popPK | Greven_1978 | irrelevant | 2 | 0 | The study focuses on the renal physiology and diuretic effects of the metabolite ozolinone in dogs, not on the quantitative pharmacokinetic disposition parameters (CL, V, etc.) of etozoline itself. |
| popPK | Herrmann_1977 | irrelevant | 0 | 0 | The paper is a toxicological study focusing on safety, fertility, and teratogenicity, and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Herrmann_1977 | not_relevant | 1 | 0 | The paper describes qualitative toxicological observations (dose-related increase in excretion) but provides no numeric PD parameters, concentration-effect curves, or quantitative exposure-response modeling. |
| popPK | Knauf_1984 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and the kinetics of the metabolite ozolinone, with no quantitative PK parameters (CL, V, etc.) reported for etozolin in the provided evidence. |
| PD | Knauf_1984 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (diuresis, BP reduction) and PK data for a metabolite, but does not provide numeric concentration-effect parameters (e.g., EC50, Emax) or a fitted PD model. |
| popPK | Knauf_1987 | relevant | 8 | 2 | The study reports qualitative changes in PK parameters (half-life, AUC, Cmax) for etozolin in liver disease, but specific numeric values for clearance, volume, or absolute half-life are not provided in the text. |
| PD | Knauf_1987 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, Cmax, half-life) in different patient populations and does not provide any pharmacodynamic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Lant_1986 | irrelevant | 0 | 0 | The text is a general review of diuretic pharmacology and does not report specific quantitative pharmacokinetic parameters for etozolin. |
| PD | Lant_1986 | not_relevant | 1 | 0 | The text is a general review of diuretic pharmacology and mentions etozoline only in the context of stereospecific effects, without providing any numeric PD parameters or exposure-response data. |
| popPK | Scheitza_1977 | irrelevant | 0 | 0 | The study investigates the diuretic effect (renal elimination of water and solutes) of etozolin, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Scheitza_1977_2 | irrelevant | 0 | 0 | The study investigates renal physiology and solute clearance (GFR, electrolytes) rather than the pharmacokinetic disposition parameters (CL, V, ka) of etozolin itself. |
| popPK | Schlatter_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic action on renal transport, not a pharmacokinetic study, and etozoline is only a comparator found to be ineffective. |
| PD | Schlatter_1983 | not_relevant | 4 | 5 | The paper reports that etozoline was ineffective at high concentrations (10^-4 - 10^-3 M) and does not provide specific numeric PD parameters (like EC50 or Emax) for etozoline, only for other furosemide-type compounds. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
