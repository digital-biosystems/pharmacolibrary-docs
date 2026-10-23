<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;hemoglobin raffimer&quot;}]"></div>

# hemoglobin raffimer

- **generic name:** hemoglobin raffimer
- **ATC codes:** `B05AA09`
- **DrugBank:** [DB13658](https://go.drugbank.com/drugs/DB13658) · **PubChem:** not captured
- **groups:** investigational

## About

Hemoglobin raffimer is a hemoglobin-based blood substitute developed as an oxygen-carrying alternative to transfusion. It remains investigational and has not reached routine clinical use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-05 22:44 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 3,428/91 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wicks_2003.pdf` | Wicks D et al., The intravascular persistence and methe…, Artificial cells, blood sub… (2003) | popPK | 9 | [10.1081/bio-120018000](https://doi.org/10.1081/bio-120018000) | [12602813](https://pubmed.ncbi.nlm.nih.gov/12602813) | The study reports quantitative pharmacokinetic parameters (half-life and volume of distribution) for hemoglobin raffimer in dogs. |

<sub>queue written 2026-10-05T22:44:21.749068+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bray_2006 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of exenatide, not hemoglobin_raffimer. |
| popPK | Brooks_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linezolid, not hemoglobin_raffimer. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper investigates the role of aquaporin-4 in hematoma clearance after intracerebral hemorrhage and does not report pharmacokinetic parameters for hemoglobin_raffimer. |
| popPK | Cheng_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy/safety study reporting transfusion rates and adverse events, with no pharmacokinetic parameters (CL, V, t1/2) reported. |
| PD | Cheng_2004 | not_relevant | 3 | 1 | The study is a clinical dose-response trial reporting categorical outcomes (transfusion rates, adverse events) rather than a pharmacodynamic model with numeric parameters like Emax or EC50. |
| popPK | Fan_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on renal injury and heme clearance in mice, not a pharmacokinetic study of hemoglobin_raffimer. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for cyclosporine, not hemoglobin_raffimer. |
| popPK | Guan_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cotadutide, not hemoglobin_raffimer. |
| popPK | Hirai_2021 | irrelevant | 0 | 0 | The paper studies roxadustat, not hemoglobin_raffimer, and reports clinical outcomes rather than pharmacokinetic parameters. |
| popPK | Hughes_1995 | irrelevant | 2 | 1 | The study investigates a different drug (HBOC-201) rather than hemoglobin_raffimer, and only reports a single half-life value without a compartmental model or other disposition parameters. |
| popPK | Kameyama_1995 | irrelevant | 0 | 0 | The paper is a clinical study on wound infection risk factors and cefazolin prophylaxis, with no mention of hemoglobin_raffimer or its pharmacokinetics. |
| popPK | Lau_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of decitabine and tetrahydrouridine, not hemoglobin_raffimer. |
| popPK | Monke_1940 | irrelevant | 1 | 0 | The study investigates renal clearance of native hemoglobin in dogs, not the pharmacokinetics of the specific drug hemoglobin_raffimer. |
| popPK | Nikolic_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tamsulosin, not hemoglobin_raffimer. |
| popPK | Ostlund_1993 | irrelevant | 0 | 0 | The paper studies D-chiro-inositol metabolism in diabetes and does not involve the drug hemoglobin_raffimer. |
| popPK | Poortmans_1979 | irrelevant | 0 | 0 | The paper studies biochemical changes in plasma proteins during a 100 km run and does not involve the drug hemoglobin_raffimer or report any pharmacokinetic parameters for it. |
| popPK | Rabiner_1967 | irrelevant | 2 | 1 | The study focuses on renal function and safety of a stroma-free hemoglobin solution in dogs, reporting renal clearance metrics (urea/creatinine) rather than the specific population pharmacokinetic parameters (CL, V, ka) for hemoglobin_raffimer. |
| popPK | Ramis_1982 | irrelevant | 0 | 0 | The paper studies iron metabolism in birds using phenylhydrazine and does not involve the drug hemoglobin_raffimer. |
| popPK | Selam_1989 | irrelevant | 0 | 0 | The paper studies insulin pharmacokinetics and safety, not hemoglobin_raffimer. |
| popPK | Takahashi_1993 | irrelevant | 0 | 0 | The study focuses on renal safety and physiological effects (GFR, RPF) of a hemoglobin conjugate in dogs, not on pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Wattanakul_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paracetamol, not hemoglobin_raffimer. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
