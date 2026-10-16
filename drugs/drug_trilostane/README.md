<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02C&quot;,&quot;href&quot;:&quot;atc/H02C.md&quot;},{&quot;label&quot;:&quot;trilostane&quot;}]"></div>

# trilostane

- **generic name:** trilostane
- **ATC codes:** `H02CA01`
- **DrugBank:** [DB01108](https://go.drugbank.com/drugs/DB01108) · **PubChem:** [CID 656583](https://pubchem.ncbi.nlm.nih.gov/compound/656583)
- **molar mass:** 329.4333 g/mol (C20H27NO3) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Trilostane is an anticorticosteroid drug that blocks adrenal steroid production and was used to treat Cushing's syndrome and other conditions of excess cortisol. It was withdrawn from human use but remains approved for veterinary use, mainly in dogs with Cushing's disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907313](https://www.wikidata.org/wiki/Q907313) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:35 | 3:52 | 0/0/0 | 1/0/0 | 0/0/0 | 75,117/1,108 | einfracz / qwen3.8-27b | 5 | 0/0 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">dog</span> | [Feldman_2011_good_response](drugs/drug_trilostane/pd_Feldman_2011_good_response.md) | response to trilostane (good response) ← trilostane · model not identified | — | Feldman EC, Evaluation of twice-daily lower-dose tr…, Journal of the American Vet… (2011) | [10.2460/javma.238.11.1441](https://doi.org/10.2460/javma.238.11.1441) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trilostane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ESR1 (allosteric modulator), ESR2 (allosteric modulator), HSD3B1 (inhibitor), HSD3B2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 36 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Conley_2012 | irrelevant | 0 | 0 | The study investigates enzyme kinetics and steroid synthesis pathways in insect cells using trilostane only as an inhibitor to modulate 3betaHSD activity, not for pharmacokinetic characterization. |
| popPK | Wehner_2021 | irrelevant | 0 | 0 | This is a clinical study investigating the association between ACTH stimulation test results and clinical signs, reporting no pharmacokinetic parameters for trilostane. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
