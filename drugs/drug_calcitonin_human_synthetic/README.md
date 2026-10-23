<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;calcitonin (human synthetic)&quot;}]"></div>

# calcitonin (human synthetic)

- **generic name:** calcitonin (human synthetic)
- **ATC codes:** `H05BA03`
- **DrugBank:** [DB06773](https://go.drugbank.com/drugs/DB06773) · **PubChem:** not captured
- **groups:** approved

## About

Synthetic human calcitonin is a hormone preparation used to lower blood calcium, for example in conditions of excessive calcium or bone breakdown. It is an approved medicine, though it appears to be little used compared with other calcitonin preparations.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 10:08 | 5:07 | 0/0/0 | 0/0/0 | 0/0/0 | 49,120/33,477 | einfracz / qwen3.8-27b | 6 | 2/4 | 4/2 | 0 |

## Coverage

- **PubMed hits:** 398 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tiegs_1986.pdf` | Tiegs RD et al., Secretion and metabolism of monomeric h…, Journal of bone and mineral… (1986) | popPK | 7 | [10.1002/jbmr.5650010407](https://doi.org/10.1002/jbmr.5650010407) | [3503547](https://pubmed.ncbi.nlm.nih.gov/3503547) | Reports quantitative metabolic clearance rates (MCR) for human calcitonin derived from infusion studies in humans. |

<sub>queue written 2026-10-07T10:07:10.171093+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brain_1985 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic effects (vasodilation) of Calcitonin Gene-Related Peptide (CGRP), not the pharmacokinetic parameters of synthetic human calcitonin. |
| popPK | Cambridge_1992 | irrelevant | 0 | 0 | The study investigates calcitonin gene-related peptide (CGRP) in rats, not calcitonin_human_synthetic, and focuses on hemodynamics rather than PK parameters. |
| popPK | Curto_2020 | irrelevant | 0 | 0 | The paper focuses on ubrogepant, a CGRP receptor antagonist, and does not report pharmacokinetic parameters for the drug calcitonin_human_synthetic. |
| popPK | Dahl_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of the amylin analog NN1213, not calcitonin_human_synthetic. |
| popPK | Elalouf_1988 | irrelevant | 0 | 0 | The study investigates the desensitization of rat renal cells to vasopressin; calcitonin is only used as a comparator hormone to test specificity, and no pharmacokinetic parameters for calcitonin are reported. |
| popPK | Feldman_1977 | irrelevant | 0 | 0 | The study investigates gastrointestinal function in carcinoid patients and only mentions normal serum calcitonin levels as a diagnostic exclusion, reporting no pharmacokinetic parameters for calcitonin. |
| popPK | Greger_2000 | irrelevant | 0 | 0 | The paper is a review of renal physiology where calcitonin is mentioned only as a regulatory hormone influencing sodium transport, not as the subject of a pharmacokinetic study. |
| popPK | Hamdy_2012 | irrelevant | 2 | 5 | The paper is a narrative review that reports some basic PK metrics (Cmax, AUC, half-life) for salmon calcitonin but lacks the specific quantitative disposition parameters (CL, V, Q, ka) required for a population-PK model. |
| popPK | Hughes_1992 | irrelevant | 0 | 0 | The paper discusses gallium nitrate, not calcitonin_human_synthetic. |
| popPK | Mortensen_1993 | irrelevant | 0 | 0 | The study measures serum levels of calcitonin as a biomarker of bone turnover in rats, but does not model or report pharmacokinetic parameters (clearance, volume, half-life) for calcitonin as the subject drug. |
| popPK | Paemeleire_2018 | irrelevant | 0 | 0 | The paper is a review of monoclonal antibodies targeting CGRP, not a pharmacokinetic study of calcitonin. |
| popPK | Pelizzo_1994 | irrelevant | 0 | 0 | The paper is a clinical surgical study on medullary thyroid cancer where calcitonin is used as a diagnostic marker, not a pharmacokinetic study of the drug. |
| popPK | Pinho-Ribeiro_2023 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on bacterial meningitis and does not report any pharmacokinetic parameters for calcitonin_human_synthetic. |
| popPK | Scuteri_2019 | irrelevant | 0 | 0 | The paper reviews eptinezumab (a CGRP antibody) for migraine and does not report pharmacokinetic parameters for the subject drug calcitonin_human_synthetic. |
| popPK | Spuntarelli_2021 | irrelevant | 0 | 0 | The paper is a review of eptinezumab (a CGRP monoclonal antibody) and does not study calcitonin_human_synthetic. |
| popPK | Walton_1985 | irrelevant | 0 | 0 | The study focuses on disodium etidronate's effect on skeletal blood flow, using calcitonin only as a historical comparator without reporting any quantitative pharmacokinetic parameters for calcitonin. |
| popPK | Wootton_1981 | irrelevant | 0 | 0 | The study measures skeletal blood flow using 18F and does not report pharmacokinetic parameters (CL, V, t1/2) for calcitonin. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper is a review on oral delivery technologies for peptides and only mentions calcitonin in a table regarding oral bioavailability enhancement, not providing pharmacokinetic parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
