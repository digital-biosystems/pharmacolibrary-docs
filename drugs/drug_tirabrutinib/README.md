<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tirabrutinib&quot;}]"></div>

# tirabrutinib

- **generic name:** tirabrutinib
- **ATC codes:** `L01EL06`
- **DrugBank:** [DB15227](https://go.drugbank.com/drugs/DB15227) · **PubChem:** not captured
- **molar mass:** 454.49 g/mol (C25H22N6O3) — DrugBank
- **groups:** investigational

## About

Tirabrutinib is an investigational Bruton's tyrosine kinase inhibitor, a type of cancer drug. It is not yet an approved medicine and remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27283239](https://www.wikidata.org/wiki/Q27283239) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tirabrutinib | parent | 454.49 | C25H22N6O3 | DrugBank | — | Meng_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:23 | 2:32 | 0/1/0 | 1/0/0 | 0/0/0 | 47,264/13,517 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Meng_2022_reference](drugs/drug_tirabrutinib/Tirabrutinib_Meng2022_reference.md) | — | 1-compartment (no model) | 0 | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Meng_2022_TJC68](drugs/drug_tirabrutinib/pd_Meng_2022_TJC68.md) | TJC68 ← tirabrutinib · direct linear effect | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Meng_2022_fBTK](drugs/drug_tirabrutinib/pd_Meng_2022_fBTK.md) | free BTK ← tirabrutinib · indirect response — drug stimulates the loss of free BTK | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Meng_2022_hsCRP](drugs/drug_tirabrutinib/pd_Meng_2022_hsCRP.md) | hsCRP ← tirabrutinib · direct linear effect | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Meng_2022_tBTK](drugs/drug_tirabrutinib/pd_Meng_2022_tBTK.md) | total BTK ← tirabrutinib · indirect response — drug stimulates the production of total BTK | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 1 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:21 UTC</sub>
