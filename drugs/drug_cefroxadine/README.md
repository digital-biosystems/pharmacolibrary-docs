<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefroxadine&quot;}]"></div>

# cefroxadine

- **generic name:** cefroxadine
- **ATC codes:** `J01DB11`
- **DrugBank:** [DB11367](https://go.drugbank.com/drugs/DB11367) · **PubChem:** [CID 5284529](https://pubchem.ncbi.nlm.nih.gov/compound/5284529)
- **molar mass:** 365.4 g/mol (C16H19N3O5S) — DrugBank
- **groups:** approved, withdrawn

## About

Cefroxadine is a first-generation cephalosporin antibiotic used to treat bacterial infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057294](https://www.wikidata.org/wiki/Q5057294) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:18 | 0:15 | 0/1/0 | 0/0/0 | 0/0/0 | 14,903/655 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ohkawa_1981_reference](drugs/drug_cefroxadine/Cefroxadine_Ohkawa1981_reference.md) | — | 1-compartment (no model) | 0 | Ohkawa M et al., Pharmacokinetics of cefroxadine in heal…, Chemotherapy (1981) | [10.1159/000237971](https://doi.org/10.1159/000237971) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefroxadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cadórniga_1990.pdf` | Cadórniga R et al., Pharmacokinetics of cefroxadine after i…, International journal of cl… (1990) | popPK | 10 | not captured | [2258253](https://pubmed.ncbi.nlm.nih.gov/2258253) | The paper reports quantitative pharmacokinetic parameters including half-life, volume of central compartment, and total body volume for cefroxadine in humans. |
| `Ohkawa_1981.pdf` | Ohkawa M et al., Pharmacokinetics of cefroxadine in heal…, Chemotherapy (1981) | popPK | 9 | [10.1159/000237971](https://doi.org/10.1159/000237971) | [7226971](https://pubmed.ncbi.nlm.nih.gov/7226971) | The study reports PK parameters for cefroxadine in humans, but key quantitative parameters like clearance and volume of distribution are not explicitly stated as numeric values in the provided abstract, only half-life and renal excretion percentage. |

<sub>queue written 2026-10-07T11:18:27.106893+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:18 UTC</sub>
