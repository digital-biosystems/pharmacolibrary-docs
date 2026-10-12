<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;enavogliflozin&quot;}]"></div>

# enavogliflozin

- **generic name:** enavogliflozin
- **ATC codes:** `A10BK09`
- **DrugBank:** [DB18970](https://go.drugbank.com/drugs/DB18970) · **PubChem:** not captured
- **molar mass:** 446.92 g/mol (C24H27ClO6) — DrugBank
- **groups:** investigational

## About

Enavogliflozin is an SGLT2 inhibitor, a class of blood glucose lowering drugs, investigated for treating diabetes. It remains investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123598885](https://www.wikidata.org/wiki/Q123598885) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 23:46 | 0:59 | 0/0/0 | 0/0/0 | 0/0/0 | 17,069/1,304 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2024.pdf` | Jang M et al., Ocular and Plasma Pharmacokinetics of E…, Pharmaceuticals (Basel, Swi… (2024) | popPK | 9 | [10.3390/ph17010111](https://doi.org/10.3390/ph17010111) | [38256944](https://pubmed.ncbi.nlm.nih.gov/38256944) | The study reports quantitative PK parameters (half-life, Tmax, bioavailability) for enavogliflozin in preclinical species, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Kang_2025.pdf` | Kang DW et al., Physiologically-based pharmacokinetic m…, Biomedicine & pharmacothera… (2025) | popPK | 9 | [10.1016/j.biopha.2025.118722](https://doi.org/10.1016/j.biopha.2025.118722) | [41172957](https://pubmed.ncbi.nlm.nih.gov/41172957) | The study reports a PBPK model for enavogliflozin with specific half-life and Tmax values for rat tissues, but lacks explicit clearance (CL) or volume (V) parameters. |
| `Pang_2022.pdf` | Pang M et al., Pharmacokinetics and Tissue Distributio…, Pharmaceutics (2022) | popPK | 9 | [10.3390/pharmaceutics14061210](https://doi.org/10.3390/pharmaceutics14061210) | [35745783](https://pubmed.ncbi.nlm.nih.gov/35745783) | The study reports quantitative PK parameters (bioavailability, AUC ratios, half-life) for enavogliflozin in mice and rats, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Choi_2025.pdf` | Choi YS et al., Pharmacokinetics and Safety of Fixed-Do…, Clinical and translational… (2025) | popPK | 8 | [10.1111/cts.70376](https://doi.org/10.1111/cts.70376) | [41084226](https://pubmed.ncbi.nlm.nih.gov/41084226) | The study reports quantitative PK parameters (Tmax, t1/2) for enavogliflozin in humans, but lacks clearance (CL) and volume (V) values which are typically required for full population PK characterization. |
| `Jeong_2024.pdf` | Jeong SI et al., The effect of renal function on the pha…, Diabetes, obesity & metabol… (2024) | popPK | 8 | [10.1111/dom.15573](https://doi.org/10.1111/dom.15573) | [38618974](https://pubmed.ncbi.nlm.nih.gov/38618974) | The study reports PK parameters (AUC, Cmax) for enavogliflozin in humans, but specific numeric values are not present in the provided text, only qualitative trends and correlations. |
| `Kim_2023.pdf` | Kim MS et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2023) | popPK | 8 | [10.3390/pharmaceutics15030942](https://doi.org/10.3390/pharmaceutics15030942) | [36986803](https://pubmed.ncbi.nlm.nih.gov/36986803) | The paper describes a PBPK model for enavogliflozin, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-04T23:46:10.985263+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Jang_2024 | not_relevant | 3 | 2 | The paper reports PK parameters and mentions that retinal concentrations remained above the IC50, but it does not provide the numeric value of the IC50 or any concentration-effect curve/relationship for enavogliflozin. |
| popPK | Jeong_2024 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax) for enavogliflozin in humans, but specific numeric values are not present in the provided text, only qualitative trends and correlations. |
| PD | Jeong_2024 | not_relevant | 3 | 2 | The paper reports correlations between renal function (CrCL) and PD endpoints (UGE) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for enavogliflozin. |
| popPK | Kang_2025 | relevant | 9 | 4 | The study reports a PBPK model for enavogliflozin with specific half-life and Tmax values for rat tissues, but lacks explicit clearance (CL) or volume (V) parameters. |
| popPK | Kim_2023 | relevant | 8 | 2 | The paper describes a PBPK model for enavogliflozin, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Kim_2026 | irrelevant | 2 | 0 | The study is a bioequivalence comparison reporting only geometric mean ratios (GMRs) and confidence intervals, without providing absolute quantitative disposition parameters (CL, V, t1/2) or a compartmental model for enavogliflozin. |
| popPK | Lee_2026 | irrelevant | 2 | 0 | The study reports bioequivalence ratios (GMR) for Cmax and AUC but does not provide absolute quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
