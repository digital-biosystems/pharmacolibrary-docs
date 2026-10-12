<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopentol&quot;}]"></div>

# iopentol

- **generic name:** iopentol
- **ATC codes:** `V08AB08`
- **DrugBank:** [DB13861](https://go.drugbank.com/drugs/DB13861) · **PubChem:** not captured
- **molar mass:** 835.1644 g/mol (C20H28I3N3O9) — DrugBank
- **groups:** experimental

## About

Iopentol is an iodinated, low-osmolar contrast agent used as an X-ray imaging contrast medium. It remains experimental and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6063892](https://www.wikidata.org/wiki/Q6063892) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:58 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 18,876/1,252 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Svaland_1992.pdf` | Svaland MG et al., Pharmacokinetics of iopentol in patient…, Acta radiologica (Stockholm… (1992) | popPK | 8 | not captured | [1389660](https://pubmed.ncbi.nlm.nih.gov/1389660) | Human PK study of iopentol with numeric half-life (28.4 h), volume of distribution (0.27 l/kg), and clearance data reported directly in the abstract. |
| `Waaler_1987.pdf` | Waaler A et al., Pharmacokinetics of iopentol in healthy…, Acta radiologica. Supplemen… (1987) | popPK | 8 | not captured | [2980304](https://pubmed.ncbi.nlm.nih.gov/2980304) | Human PK study of iopentol as subject drug, but the abstract gives no numeric CL/V values — they likely appear in tables/figures not provided. |
| `Berg_1992.pdf` | Berg KJ et al., Iopentol in patients with chronic renal…, Scandinavian journal of cli… (1992) | popPK | 6 | [10.3109/00365519209085437](https://doi.org/10.3109/00365519209085437) | [1594886](https://pubmed.ncbi.nlm.nih.gov/1594886) | Human PK study of iopentol with clearance values discussed, but only relative percentages given; absolute numeric parameters not shown in evidence. |
| `Lehnert_1998.pdf` | Lehnert T et al., Effect of haemodialysis after contrast…, Nephrology, dialysis, trans… (1998) | popPK | 6 | [10.1093/oxfordjournals.ndt.a027830](https://doi.org/10.1093/oxfordjournals.ndt.a027830) | [9509446](https://pubmed.ncbi.nlm.nih.gov/9509446) | Human PK study of iopentol with quantitative clearance values (71 ml/min extracorporeal, 32% eliminated), but no full disposition parameters (V, half-life, total CL) reported. |
| `Michelet_1987.pdf` | Michelet AA et al., Pharmacokinetics of iopentol in the rat, Acta radiologica. Supplemen… (1987) | popPK | 6 | not captured | [2980301](https://pubmed.ncbi.nlm.nih.gov/2980301) | Rat PK study of iopentol with a half-life value (24 min) reported in the abstract, but no CL/V or full parameter set is present. |

<sub>queue written 2026-10-07T22:58:24.401787+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berg_1992 | relevant | 6 | 3 | Human PK study of iopentol with clearance values discussed, but only relative percentages given; absolute numeric parameters not shown in evidence. |
| popPK | Jakobsen_1990 | irrelevant | 2 | 0 | Study reports renal effects (diuresis, enzymes, GFR) of iopentol in humans, not quantitative disposition parameters like CL, V, or a PK model. |
| popPK | Jakobsen_1991 | irrelevant | 2 | 1 | Renal safety study with no PK disposition parameters (CL, V, half-life) for iopentol reported; only creatinine clearance as a safety marker. |
| popPK | Jakobsen_1992 | irrelevant | 2 | 1 | Iopentol is a co-administered comparator in a renal-function/CT study; no PK disposition parameters (CL, V, half-life) are reported, only qualitative renal effects. |
| popPK | Jakobsen_1993 | irrelevant | 1 | 1 | Study of renal tubular enzyme excretion effects; iopentol is a contrast agent studied for nephrotoxicity, not PK disposition parameters, and no numeric PK values appear. |
| popPK | Jakobsen_1994 | irrelevant | 2 | 1 | This is a renal safety study of iopentol as contrast agent; no PK disposition parameters (CL, V, half-life) are reported, only creatinine clearance as a safety biomarker. |
| popPK | Michelet_1987 | relevant | 6 | 4 | Rat PK study of iopentol with a half-life value (24 min) reported in the abstract, but no CL/V or full parameter set is present. |
| popPK | Waaler_1987 | relevant | 8 | 2 | Human PK study of iopentol as subject drug, but the abstract gives no numeric CL/V values — they likely appear in tables/figures not provided. |
| popPK | Wieslander_1987 | irrelevant | 0 | 0 | This is an endothelial toxicity study in rabbits with no PK disposition parameters for iopentol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
