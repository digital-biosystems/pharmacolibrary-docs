<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belinostat&quot;}]"></div>

# belinostat

- **generic name:** belinostat
- **ATC codes:** `L01XH04`
- **DrugBank:** [DB05015](https://go.drugbank.com/drugs/DB05015) · **PubChem:** [CID 6918638](https://pubchem.ncbi.nlm.nih.gov/compound/6918638)
- **molar mass:** 318.35 g/mol (C15H14N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Belinostat is a histone deacetylase inhibitor used as an anticancer medicine, mainly for treating peripheral T-cell lymphoma. It is an approved drug used in cancer care, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4882925](https://www.wikidata.org/wiki/Q4882925) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:23 | 0:29 | 0/0/0 | 0/0/0 | 0/0/0 | 14,672/506 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 0/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dunn_2024.pdf` | Dunn A et al., The effect of liver dysfunction on the…, Cancer chemotherapy and pha… (2024) | popPK | 10 | [10.1007/s00280-024-04651-x](https://doi.org/10.1007/s00280-024-04651-x) | [38483557](https://pubmed.ncbi.nlm.nih.gov/38483557) | The paper describes a population PK model for belinostat and reports specific percentage reductions in clearance, but the absolute numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Peer_2016.pdf` | Peer CJ et al., UGT1A1 genotype-dependent dose adjustme…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.627](https://doi.org/10.1002/jcph.627) | [26637161](https://pubmed.ncbi.nlm.nih.gov/26637161) | The paper describes a population PK model for belinostat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T23:23:46.616556+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2017 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics (Km, Vmax) for glucuronidation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dunn_2024 | relevant | 10 | 2 | The paper describes a population PK model for belinostat and reports specific percentage reductions in clearance, but the absolute numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Goey_2016_2 | irrelevant | 2 | 0 | This is a review article discussing UGT1A1 genotyping and its impact on belinostat pharmacokinetics, but it does not report original quantitative PK parameter values (CL, V, etc.) for belinostat. |
| popPK | Peer_2016 | relevant | 10 | 0 | The paper describes a population PK model for belinostat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Peer_2018 | relevant | 8 | 2 | The paper describes a population PK/PD model for belinostat in humans, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided text, likely residing in the referenced Table 1 or supplementary materials. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The study is a mechanistic/cell-based screening assay for SIRT1 up-regulation and does not report pharmacokinetic parameters for belinostat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
