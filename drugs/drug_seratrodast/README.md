<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;seratrodast&quot;}]"></div>

# seratrodast

- **generic name:** seratrodast
- **ATC codes:** `R03DX06`
- **DrugBank:** [DB06739](https://go.drugbank.com/drugs/DB06739) · **PubChem:** [CID 2449](https://pubchem.ncbi.nlm.nih.gov/compound/2449)
- **molar mass:** 354.446 g/mol (C22H26O4) — DrugBank
- **groups:** experimental

## About

Seratrodast is an antiasthmatic, anti-inflammatory drug developed for obstructive airway diseases such as asthma. It is not an established marketed medicine and remains an experimental compound, with no authorisation recorded in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7452735](https://www.wikidata.org/wiki/Q7452735) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:12 | 0:15 | 0/1/0 | 0/0/0 | 0/0/0 | 6,196/692 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Samara_1997_reference](drugs/drug_seratrodast/Seratrodast_Samara1997_reference.md) | — | 1-compartment (no model) | 0 | Samara E et al., Population analysis of the pharmacokine…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90121-1](https://doi.org/10.1016/S0009-9236(97)90121-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=seratrodast).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` inhibitor, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (substrate), TBXA2R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Samara_1997.pdf` | Samara E et al., Population analysis of the pharmacokine…, Clinical pharmacology and t… (1997) | popPK | 10 | [10.1016/S0009-9236(97)90121-1](https://doi.org/10.1016/S0009-9236(97)90121-1) | [9357394](https://pubmed.ncbi.nlm.nih.gov/9357394) | The paper reports specific quantitative population pharmacokinetic parameters (clearance, volume of distribution, intercompartmental clearance) for seratrodast. |

<sub>queue written 2026-10-07T22:12:51.195098+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kumar_1997 | not_relevant | 0 | 0 | The paper identifies the CYP isoforms (3A, 2C9, etc.) involved in the metabolism of seratrodast but does not report any data on how specific genetic variants or polymorphisms affect its pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:12 UTC</sub>
