<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01B&quot;,&quot;href&quot;:&quot;atc/D01B.md&quot;},{&quot;label&quot;:&quot;fosravuconazole&quot;}]"></div>

# fosravuconazole

- **generic name:** fosravuconazole
- **ATC codes:** `D01BA03`
- **DrugBank:** [DB15204](https://go.drugbank.com/drugs/DB15204) · **PubChem:** not captured
- **molar mass:** 547.47 g/mol (C23H20F2N5O5PS) — DrugBank
- **groups:** investigational

## About

Fosravuconazole is an investigational antifungal drug, related to agents used for systemic fungal infections. It is not yet an approved medicine and remains under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27116141](https://www.wikidata.org/wiki/Q27116141) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosravuconazole | parent | 547.47 | C23H20F2N5O5PS | DrugBank | — | Chu_2025 |
| hydroxyitraconazole | metabolite | — (mass units only) | — | — | — | — |
| ravuconazole | metabolite | 437.468 | C22H17F2N5OS | PubChem | [467825](https://pubchem.ncbi.nlm.nih.gov/compound/467825) | Chu_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:16 | 1:26 | 0/1/0 | 0/0/0 | 0/0/0 | 104,336/7,177 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.611). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chu_2025_reference](drugs/drug_fosravuconazole/Fosravuconazole_Chu2025_reference.md) | — | general linear (no model) | 8 (+2 cov.) | Chu WY et al., Pharmacokinetics and Pharmacodynamics o…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf279](https://doi.org/10.1093/infdis/jiaf279) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assmus_2025 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of benznidazole, with fosravuconazole serving only as a co-administered agent to assess drug-drug interactions, and no PK parameters for fosravuconazole are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:14 UTC</sub>
