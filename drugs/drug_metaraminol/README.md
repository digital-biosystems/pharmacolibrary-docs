<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;metaraminol&quot;}]"></div>

# metaraminol

- **generic name:** metaraminol
- **ATC codes:** `C01CA09`
- **DrugBank:** [DB00610](https://go.drugbank.com/drugs/DB00610) · **PubChem:** [CID 5906](https://pubchem.ncbi.nlm.nih.gov/compound/5906)
- **molar mass:** 167.205 g/mol (C9H13NO2) — DrugBank
- **groups:** approved

## About

Metaraminol is a sympathomimetic vasopressor used to treat hypotension, including in neurogenic shock. It is an approved adrenergic cardiac stimulant, used mainly in hospital settings to raise blood pressure during anesthesia or shock.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409981](https://www.wikidata.org/wiki/Q409981) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Xiao_2021_incidence_of_hypotension](drugs/drug_metaraminol/pd_Xiao_2021_incidence_of_hypotension.md) | incidence of hypotension ← metaraminol · categorical (graded) response model | — | Xiao F et al., A Randomized Double-Blinded Dose-depend…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.608198](https://doi.org/10.3389/fphar.2021.608198) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=metaraminol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 20:07 | 1:11 | 0/0/0 | 1/0/0 | 0/0/0 | 10,093/1,234 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_2007.pdf` | Morris RW et al., "Orpheus" cardiopulmonary bypass simula…, The journal of extra-corpor… (2007) | pd | 5 | not captured | [18293807](https://www.ncbi.nlm.nih.gov/pubmed/18293807) | metadata signals extractable PD data (effectcompartment) |
| `Ungell_1989.pdf` | Ungell AL et al., Chloride-dependence of the potency of i…, Naunyn-Schmiedeberg's archi… (1989) | pd | 5 | [10.1007/BF00165128](https://doi.org/10.1007/BF00165128) | [2725700](https://www.ncbi.nlm.nih.gov/pubmed/2725700) | metadata signals extractable PD data (IC50) |
| `Ungell_1987.pdf` | Ungell AL et al., Failure of K+ to affect the potency of…, Naunyn-Schmiedeberg's archi… (1987) | pd | 4 | [10.1007/BF00172792](https://doi.org/10.1007/BF00172792) | [3587371](https://www.ncbi.nlm.nih.gov/pubmed/3587371) | metadata signals extractable PD data (IC50) |
| `Waldmeier_1977.pdf` | Waldmeier PC et al., Metaraminol uptake by human thrombocyte…, Experientia (1977) | pd | 4 | [10.1007/BF01920177](https://doi.org/10.1007/BF01920177) | [908413](https://www.ncbi.nlm.nih.gov/pubmed/908413) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-09T20:07:24.392468+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babich_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional analysis, not a pharmacokinetic study, and reports no disposition parameters for metaraminol. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | no_text gate: only 211 chars of text extracted (&lt; 400) |
| popPK | Morris_2007 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| PD | Morris_2007 | not_relevant | 0 | 0 | The text describes a cardiopulmonary bypass simulation system and does not contain any pharmacodynamic or exposure-response data for metaraminol. |
| popPK | Mu_2020 | irrelevant | 0 | 0 | The study investigates the PET tracer [11C]mHED (a metabolite of metaraminol) in mice, not the pharmacokinetics of metaraminol itself. |
| popPK | Tong_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and does not report any pharmacokinetic parameters for metaraminol. |
| popPK | Ungell_1987 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Ungell_1987 | not_relevant | 0 | 0 | The paper investigates the effect of potassium on noradrenaline carrier inhibitors in rat vas deferens and does not mention metaraminol or report any pharmacodynamic parameters for it. |
| popPK | Ungell_1989 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Ungell_1989 | not_relevant | 0 | 0 | The paper investigates the chloride-dependence of neuronal noradrenaline carrier inhibitors in rat vas deferens and does not report pharmacodynamic or exposure-response data for metaraminol. |
| popPK | Waldmeier_1977 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Waldmeier_1977 | not_relevant | 0 | 0 | The paper investigates the mechanism of metaraminol uptake by thrombocytes (transport kinetics) rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The study is a dose-response clinical trial determining ED50/ED90 for hemodynamic effects, not a pharmacokinetic study reporting clearance, volume, or compartmental parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
