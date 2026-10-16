<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;tiotixene&quot;}]"></div>

# tiotixene

- **generic name:** tiotixene
- **ATC codes:** `N05AF04`
- **DrugBank:** [DB01623](https://go.drugbank.com/drugs/DB01623) · **PubChem:** [CID 941651](https://pubchem.ncbi.nlm.nih.gov/compound/941651)
- **molar mass:** 443.625 g/mol (C23H29N3O2S2) — DrugBank
- **groups:** approved

## About

Tiotixene (thiothixene) is a thioxanthene antipsychotic used to treat schizophrenia and schizophreniform disorder. It is an approved antipsychotic, though it does not appear to have centralised European Union authorisation and is not among the most widely used antipsychotics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2608288](https://www.wikidata.org/wiki/Q2608288) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:44 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 7,382/493 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiotixene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor, `SLC22A1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: DRD1 (target), DRD2 (target), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zeng_1997.pdf` | Zeng XP et al., Muscarinic m4 receptor activation by so…, European journal of pharmac… (1997) | pd | 4 | [10.1016/s0014-2999(96)00956-9](https://doi.org/10.1016/s0014-2999(96)00956-9) | [9085047](https://www.ncbi.nlm.nih.gov/pubmed/9085047) | metadata signals extractable PD data (EC50) |
| `Guthrie_1997.pdf` | Guthrie SK et al., The effect of paroxetine on thiothixene…, Journal of clinical pharmac… (1997) | pgx | 7 | [10.1046/j.1365-2710.1997.95175951.x](https://doi.org/10.1046/j.1365-2710.1997.95175951.x) | [9447478](https://www.ncbi.nlm.nih.gov/pubmed/9447478) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T17:44:36.396476+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1988 | irrelevant | 0 | 0 | Pharmacodynamic (HVA elevation) dose-response study in rats; no PK parameters for thiothixene are reported. |
| PGx | Guthrie_1997 | not_relevant | 0 | 0 | Paper reports a drug-drug interaction (paroxetine on thiothixene PK), not a pharmacogenomic effect of a gene variant on PK/PD parameters. |
| popPK | Schaefer_1984 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for thiothixene; only dose-response locomotor data. |
| popPK | Sheppard_1974 | irrelevant | 0 | 0 | A prescription-practice survey with no pharmacokinetic data; thiothixene only appears in a list of co-prescribed drugs. |
| PGx | Shin_1999 | not_relevant | 2 | 5 | Reports in vitro CYP2D6 inhibition Ki for cis-thiothixene, but no gene variant/genotype effect on PK/PD parameters. |
| PGx | Sun_2012 | not_relevant | 0 | 0 | Network-based database analysis of antipsychotics; no gene variant effect on tiotixene PK/PD parameters reported. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In vitro pharmacology study of muscarinic m4 receptor effects; thiothixene is only a tested compound with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
