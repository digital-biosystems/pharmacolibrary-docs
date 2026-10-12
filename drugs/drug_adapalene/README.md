<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;adapalene&quot;}]"></div>

# adapalene

- **generic name:** adapalene
- **ATC codes:** `D10AD03`
- **DrugBank:** [DB00210](https://go.drugbank.com/drugs/DB00210) · **PubChem:** [CID 60164](https://pubchem.ncbi.nlm.nih.gov/compound/60164)
- **molar mass:** 412.5201 g/mol (C28H28O3) — DrugBank
- **groups:** approved, investigational

## About

Adapalene is a topical retinoid used to treat acne. It is an approved medicine, widely used as a topical anti-acne preparation applied to the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q352348](https://www.wikidata.org/wiki/Q352348) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:24 | 0:16 | 0/0/0 | 0/1/0 | 0/0/0 | 30,718/565 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Matharoo_2025_SC_thickness](drugs/drug_adapalene/pd_Matharoo_2025_SC_thickness.md) | stratum corneum thickness ← adapalene · direct Emax (saturable) effect | — | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Matharoo_2025_infundibular_area](drugs/drug_adapalene/pd_Matharoo_2025_infundibular_area.md) | infundibular area ← adapalene · direct sigmoid Emax (Hill) effect | — | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=adapalene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GOT1 (inhibitor), JUN (target), RARA (target), RARB (target), RARG (target), RXRA (target), RXRB (target), RXRG (target), TLR2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Matharoo_2025 | irrelevant | 2 | 2 | The study focuses on in-vitro permeation and a dermal PBPK model calibrated to in-vitro data, with systemic PK parameters (Cmax, AUC, t1/2) cited from external literature rather than derived from original human or animal population PK modeling in this paper. |
| popPK | Stein_2017 | irrelevant | 0 | 0 | The paper is a clinical review of topical efficacy for acne vulgaris and contains no pharmacokinetic data or models. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
