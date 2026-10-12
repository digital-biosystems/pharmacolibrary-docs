<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium glucoheptonate&quot;}]"></div>

# calcium glucoheptonate

- **generic name:** calcium glucoheptonate
- **ATC codes:** `A12AA10`
- **DrugBank:** [DB00326](https://go.drugbank.com/drugs/DB00326) · **PubChem:** [CID 62859](https://pubchem.ncbi.nlm.nih.gov/compound/62859)
- **molar mass:** 490.425 g/mol (C14H26CaO16) — DrugBank
- **groups:** approved, investigational

## About

Calcium glucoheptonate is a calcium supplement used for conditions involving low calcium or needing extra calcium, such as osteoporosis, tetany, indigestion, heartburn, peptic ulcers, and cardiac arrest. It is an approved medicine, though it does not appear to be authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5018826](https://www.wikidata.org/wiki/Q5018826) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:40 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 17,406/340 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=calcium_glucoheptonate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lister-James_1996.pdf` | Lister-James J et al., Thrombus imaging with a technetium-99m-…, Journal of nuclear medicine… (1996) | pd | 5 | not captured | [8965144](https://www.ncbi.nlm.nih.gov/pubmed/8965144) | metadata signals extractable PD data (IC50) |
| `Kairemo_1998.pdf` | Kairemo KJ et al., Expression profile of vascular cell adh…, Cell adhesion and communica… (1998) | pd | 4 | [10.3109/15419069809040301](https://doi.org/10.3109/15419069809040301) | [9762472](https://www.ncbi.nlm.nih.gov/pubmed/9762472) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-05T08:39:57.443397+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dewanjee_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of stannous (tin) chelates, not the pharmacokinetics of calcium glucoheptonate, and reports no quantitative PK parameters. |
| PD | Dewanjee_1979 | not_relevant | 1 | 0 | The text provides only a qualitative description of the distribution and instability of tin chelates (including glucoheptonate) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Kairemo_1998 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Kairemo_1998 | not_relevant | 0 | 0 | The paper focuses on the expression profile of CD106 using a radiolabeled antibody in mice and does not report any pharmacodynamic or exposure-response relationship for calcium glucoheptonate. |
| popPK | Kerwin_2023 | irrelevant | 0 | 0 | The study is a nutritional trial in cattle evaluating the effect of trace mineral forms on performance and health, not a pharmacokinetic study of calcium glucoheptonate. |
| popPK | León_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding of technetium complexes, using glucoheptonate only as a precursor, and does not report pharmacokinetic parameters for calcium glucoheptonate. |
| PD | León_2002 | not_relevant | 0 | 0 | The paper reports in vitro binding affinity (IC50) for radiotracers, not a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate. |
| popPK | Lister-James_1996 | irrelevant | 0 | 0 | The paper studies a radiolabeled peptide (99mTc-P280) for thrombus imaging, and calcium glucoheptonate is only mentioned as a labeling reagent, not as the subject drug for PK analysis. |
| PD | Lister-James_1996 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a peptide's receptor binding and in vivo biodistribution/imaging data for a radiotracer, but does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is used only as a labeling reagent). |
| popPK | Papagiannopoulou_2001 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding of oxotechnetium complexes, using calcium glucoheptonate only as a precursor, and does not report pharmacokinetic parameters for calcium glucoheptonate. |
| PD | Papagiannopoulou_2001 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of novel 99mTc complexes for imaging, providing receptor binding IC50 values and preliminary biodistribution data, but it does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is used only as a precursor). |
| popPK | Tsoukalas_2003 | irrelevant | 0 | 0 | The paper focuses on the synthesis and characterization of oxorhenium/oxotechnetium complexes for 5-HT1A receptor imaging, where calcium_glucoheptonate is only mentioned as a precursor for radiolabeling, not as the subject drug for PK analysis. |
| PD | Tsoukalas_2003 | not_relevant | 0 | 0 | The paper reports the synthesis and characterization of oxorhenium/oxotechnetium complexes and a single IC50 value for receptor binding, but does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is only mentioned as a precursor). |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is a radiochemistry study on peptide labeling where calcium glucoheptonate is used only as a precursor for ligand exchange, not as the subject drug for PK analysis. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper reports radiochemistry and in vitro receptor binding affinity (IC50) for a somatostatin receptor antagonist, not a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate. |
| popPK | Welling_1975 | irrelevant | 0 | 0 | The paper is a review/modeling study of 22 drugs in renal failure, and calcium_glucoheptonate is not the subject drug (likely a typo for erythromycin glucoheptonate or unrelated). |
| popPK | del_1994 | irrelevant | 0 | 0 | The paper studies a radiolabeled cholinergic neuron marker (99mTc-DADT-benzovesamicol) and does not report pharmacokinetic parameters for calcium glucoheptonate. |
| PD | del_1994 | not_relevant | 0 | 0 | The paper reports the synthesis and biodistribution of a radiotracer (99mTc-DADT-benzovesamicol) and provides an IC50 for binding affinity, but it does not report a pharmacodynamic exposure-response or dose-response relationship for calcium glucoheptonate (which is used only as a labeling reagent). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
