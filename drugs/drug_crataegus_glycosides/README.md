<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;crataegus glycosides&quot;}]"></div>

# crataegus glycosides

- **generic name:** crataegus glycosides
- **ATC codes:** `C01EB04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Crataegus glycosides, derived from hawthorn, are cardiac preparations used traditionally for mild heart problems such as heart failure symptoms. They are classified under other cardiac preparations and are used mainly as a herbal remedy, not as a mainstream prescription medicine.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:39 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 26,029/718 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 0 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2010.pdf` | Ma LY et al., The pharmacokinetics of C-glycosyl flav…, Phytomedicine : internation… (2010) | popPK | 9 | [10.1016/j.phymed.2009.12.010](https://doi.org/10.1016/j.phymed.2009.12.010) | [20096549](https://pubmed.ncbi.nlm.nih.gov/20096549) | The study reports PK parameters (Tmax, T1/2, recovery) for C-glycosyl flavones in rats, matching the subject drug class, but lacks compartmental parameters like CL, V, or ka. |

<sub>queue written 2026-10-08T11:39:09.706180+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammon_1981 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| popPK | Boukerouis_2025 | irrelevant | 0 | 0 | The study focuses on the in silico ADMET prediction and in vitro anti-inflammatory mechanisms of fupenzic acid (a triterpene) from Crataegus, not the pharmacokinetics of crataegus glycosides. |
| popPK | Chang_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of specific hawthorn phenolic compounds (epicatechin, chlorogenic acid, etc.) in rats, not crataegus glycosides. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study analyzes pharmacokinetics of ginsenosides and rutin, not crataegus_glycosides. |
| popPK | Chow_2025 | irrelevant | 2 | 1 | The study investigates the absorption of individual flavonoids (GLV, RHV, etc.) from hawthorn leaves, not the specific drug entity "crataegus_glycosides" (a defined mixture), and lacks a compartmental PK model or standard clearance/volume parameters for the named subject. |
| popPK | Liang_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vitexin rhamnoside, a specific constituent, rather than the specific drug crataegus_glycosides. |
| popPK | Liu_2010 | relevant | 9 | 3 | The paper reports pharmacokinetic parameters (CL, AUC, t1/2) for hyperoside (a crataegus glycoside) in rats, but the specific numeric values in Table 4 are not present in the provided text evidence, only the AUC values are partially visible in the parameter lines. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is a review of hyperoside, which is a different compound from crataegus_glycosides (the target drug), and does not provide original quantitative PK parameters for crataegus_glycosides. |
| popPK | Zhu_2015 | irrelevant | 1 | 0 | The study analyzes hawthorn leaves flavonoids (specifically seven different compounds like rutin and quercetin) rather than the target drug crataegus_glycosides, and no specific PK parameter values are reported in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
