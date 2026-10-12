<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;doxylamine&quot;}]"></div>

# doxylamine

- **generic name:** doxylamine
- **ATC codes:** `R06AA09`
- **DrugBank:** [DB00366](https://go.drugbank.com/drugs/DB00366) · **PubChem:** [CID 3162](https://pubchem.ncbi.nlm.nih.gov/compound/3162)
- **molar mass:** 270.3694 g/mol (C17H22N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Doxylamine is an antihistamine used to treat insomnia and headache. It is an approved medication, also approved for veterinary use, and remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423390](https://www.wikidata.org/wiki/Q423390) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:22 | 3:28 | 0/0/0 | 1/0/0 | 0/0/0 | 79,891/5,985 | openai / gpt-6-luna | 9 | 0/1 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Tzeng_2018_nociceptive_blockade](drugs/drug_doxylamine/pd_Tzeng_2018_nociceptive_blockade.md) | nociceptive blockade ← doxylamine · stimulation effect | — | Tzeng JI et al., Spinal sensory and motor blockade by in…, The Journal of pharmacy and… (2018) | [10.1111/jphp.13017](https://doi.org/10.1111/jphp.13017) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Tzeng_2018_proprioceptive_blockade](drugs/drug_doxylamine/pd_Tzeng_2018_proprioceptive_blockade.md) | proprioceptive blockade ← doxylamine · stimulation effect | — | Tzeng JI et al., Spinal sensory and motor blockade by in…, The Journal of pharmacy and… (2018) | [10.1111/jphp.13017](https://doi.org/10.1111/jphp.13017) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Tzeng_2018_spinal_motor_blockade](drugs/drug_doxylamine/pd_Tzeng_2018_spinal_motor_blockade.md) | spinal motor blockade ← doxylamine · stimulation effect | — | Tzeng JI et al., Spinal sensory and motor blockade by in…, The Journal of pharmacy and… (2018) | [10.1111/jphp.13017](https://doi.org/10.1111/jphp.13017) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=doxylamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` regulator | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CYP2B (inducer), HRH1 (target), NR1I3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 34 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2)</sub>
