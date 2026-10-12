<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodixanol&quot;}]"></div>

# iodixanol

- **generic name:** iodixanol
- **ATC codes:** `V08AB09`
- **DrugBank:** [DB01249](https://go.drugbank.com/drugs/DB01249) · **PubChem:** [CID 3724](https://pubchem.ncbi.nlm.nih.gov/compound/3724)
- **molar mass:** 1550.1819 g/mol (C35H44I6N6O15) — DrugBank
- **groups:** approved

## About

Iodixanol is an iodinated X-ray contrast agent used to visualise tissues and blood vessels during imaging procedures. It is an approved, low-osmolar, water-soluble contrast medium and is widely used in medical imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2419291](https://www.wikidata.org/wiki/Q2419291) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:11 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 39,751/703 | ollama / glm-5.3-flash | 6 | 0/2 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nossen_1995.pdf` | Nossen JO et al., Elimination of the non-ionic X-ray cont…, Scandinavian journal of cli… (1995) | popPK | 10 | [10.3109/00365519509104972](https://doi.org/10.3109/00365519509104972) | [7569737](https://pubmed.ncbi.nlm.nih.gov/7569737) | PK parameters for iodixanol (half-life, Vd, plasma and renal clearance) are reported directly in the abstract. |

<sub>queue written 2026-10-07T22:10:53.056883+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eide_2026 | relevant | 8 | 3 | Population PK model of intrathecal iodixanol in humans is described (Ka, Tlag, absorption half-life, Cmax, AUC), but the actual numeric parameter values appear only in tables/figures/supplementary material not included in the evidence. |
| popPK | Joshi-Barr_2013 | irrelevant | 0 | 0 | Iodixanol is used only as an inert density modifier in a tissue-engineering scaffold protocol; no PK parameters are reported. |
| popPK | Li_2012 | irrelevant | 0 | 0 | This is a BOLD MRI oxygenation study in rats; iodixanol is a contrast agent administered for its renal effect, with no PK disposition parameters (CL, V, half-life, or model) reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
