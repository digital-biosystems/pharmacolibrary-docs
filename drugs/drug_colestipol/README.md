<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;colestipol&quot;}]"></div>

# colestipol

- **generic name:** colestipol
- **ATC codes:** `C10AC02`
- **DrugBank:** [DB00375](https://go.drugbank.com/drugs/DB00375) · **PubChem:** [CID 62816](https://pubchem.ncbi.nlm.nih.gov/compound/62816)
- **groups:** approved

## About

Colestipol is a bile acid sequestrant used to lower blood lipids in conditions such as hyperlipidemia, arteriosclerosis, and coronary artery disease, and it has also been used to bind toxins in pseudomembranous colitis. It remains an approved lipid-lowering medicine, used mainly for high cholesterol and related cardiovascular conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3294635](https://www.wikidata.org/wiki/Q3294635) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-16 08:42 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 2,973/207 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=colestipol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Bile acids (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 0 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Davies_1997.pdf` | Davies NM et al., Clinical pharmacokinetics of diclofenac…, Clinical pharmacokinetics (1997) | pd | 5 | [10.2165/00003088-199733030-00003](https://doi.org/10.2165/00003088-199733030-00003) | [9314611](https://www.ncbi.nlm.nih.gov/pubmed/9314611) | metadata signals extractable PD data (Concentration-effect) |

<sub>queue written 2026-10-16T08:42:58.196706+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fleishaker_1990 | irrelevant | 0 | 0 | The study assesses pharmacodynamic effects on serum bile acid concentrations and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for colestipol itself. |
| popPK | Hunninghake_1995 | irrelevant | 0 | 0 | The study is a dose-response efficacy trial measuring lipid changes, not a pharmacokinetic study reporting disposition parameters like clearance or volume for colestipol. |
| popPK | Polin_1985 | irrelevant | 0 | 0 | Colestipol is used as a therapeutic agent to remove PBBs in chickens, not as the subject of a pharmacokinetic study, and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
