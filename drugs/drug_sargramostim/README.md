<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sargramostim&quot;}]"></div>

# sargramostim

- **generic name:** sargramostim
- **ATC codes:** `L03AA09`
- **DrugBank:** [DB00020](https://go.drugbank.com/drugs/DB00020) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sargramostim, a granulocyte-macrophage colony-stimulating factor, is an immunostimulant used in cancers such as breast cancer, melanoma, and lymphomas, and is authorised in the European Union for acute radiation syndrome. It remains in use, with an authorised product in the European Union, though its use appears limited to specific indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3950557](https://www.wikidata.org/wiki/Q3950557) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:12 | 1:28 | 0/0/0 | 0/0/0 | 0/0/0 | 55,147/777 | einfracz / qwen3.8-27b | 4 | 0/1 | 3/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stute_1995.pdf` | Stute N et al., Pharmacokinetics of recombinant human g…, Journal of pharmaceutical s… (1995) | popPK | 10 | [10.1002/jps.2600840708](https://doi.org/10.1002/jps.2600840708) | [7562431](https://pubmed.ncbi.nlm.nih.gov/7562431) | The paper is a primary pharmacokinetic study of sargramostim in children reporting quantitative parameters such as systemic clearance and half-life with specific numeric values in the abstract. |

<sub>queue written 2026-10-06T23:11:56.356780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| popPK | Desai_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the chimeric anti-GD2 antibody ch14.18, not for sargramostim, which is only listed as a concomitant medication. |
| popPK | Marachelian_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of dinutuximab (ch14.18), with sargramostim serving only as a co-administered supportive agent without reported PK parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for sargramostim. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
