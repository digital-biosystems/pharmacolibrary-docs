<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;felbinac&quot;}]"></div>

# felbinac

- **generic name:** felbinac
- **ATC codes:** `M02AA08`
- **DrugBank:** [DB07477](https://go.drugbank.com/drugs/DB07477) · **PubChem:** [CID 3332](https://pubchem.ncbi.nlm.nih.gov/compound/3332)
- **molar mass:** 212.2439 g/mol (C14H12O2) — DrugBank
- **groups:** investigational

## About

Felbinac is a non-steroidal anti-inflammatory drug applied to the skin to relieve joint and muscular pain. It is not an approved medicine in major databases, where it is listed only as investigational, though topical products are available in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3742067](https://www.wikidata.org/wiki/Q3742067) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:44 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 8,182/282 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Higaki_2002.pdf` | Higaki K et al., Estimation of intradermal disposition k…, International journal of ph… (2002) | popPK | 5 | [10.1016/s0378-5173(02)00084-4](https://doi.org/10.1016/s0378-5173(02)00084-4) | [12052698](https://pubmed.ncbi.nlm.nih.gov/12052698) | Felbinac is one of 10 comparator drugs in a mechanistic rat skin penetration study; no specific PK parameters (CL, V, t1/2) for felbinac are reported, only a relative contribution percentage. |
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | popPK | 5 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://pubmed.ncbi.nlm.nih.gov/27285464) | The paper uses felbinac as one of multiple NSAIDs in a PK/PD model to predict fetal toxicity, and no specific numeric PK parameter values for felbinac are present in the provided text. |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:44:10.381749+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Higaki_2002 | irrelevant | 5 | 2 | Felbinac is one of 10 comparator drugs in a mechanistic rat skin penetration study; no specific PK parameters (CL, V, t1/2) for felbinac are reported, only a relative contribution percentage. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA-A receptor binding and does not report pharmacokinetic parameters for felbinac. |
| popPK | Tanaka_2016 | irrelevant | 5 | 0 | The paper uses felbinac as one of multiple NSAIDs in a PK/PD model to predict fetal toxicity, and no specific numeric PK parameter values for felbinac are present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
