<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;lanadelumab&quot;}]"></div>

# lanadelumab

- **generic name:** lanadelumab
- **ATC codes:** `B06AC05`
- **DrugBank:** [DB14597](https://go.drugbank.com/drugs/DB14597) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lanadelumab, a monoclonal antibody, is used to treat hereditary angioedema. It is authorised in the European Union and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326708](https://www.wikidata.org/wiki/Q25326708) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:21 | 5:35 | 0/0/2 | 1/0/0 | 0/0/0 | 103,006/14,827 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_base](drugs/drug_lanadelumab/Lanadelumab_Wang2020_base.md) | — | 1-compartment (no model) | 9 | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_final](drugs/drug_lanadelumab/Lanadelumab_Wang2020_final.md) | — | 1-compartment (no model) | 10 | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Wang_2020_HAE_Attack_FreeDays](drugs/drug_lanadelumab/pd_Wang_2020_HAE_Attack_FreeDays.md) | HAE Attack FreeDays ← lanadelumab · direct sigmoid Emax (Hill) effect | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Wang_2020_cHMWK](drugs/drug_lanadelumab/pd_Wang_2020_cHMWK.md) | cHMWK ← lanadelumab · indirect response — drug inhibits the production of cHMWK | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Wang_2020_HAE_attack_rate](drugs/drug_lanadelumab/pd_Wang_2020_HAE_attack_rate.md) | HAE attack rate ← lanadelumab · direct Emax (saturable) effect | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Wang_2020_Time_to_first_HAE_attack](drugs/drug_lanadelumab/pd_Wang_2020_Time_to_first_HAE_attack.md) | Time to first HAE attack ← lanadelumab · time-to-event model | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lanadelumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: KLKB1 (inhibitor), KLKB1 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Marceau_2020 | not_relevant | 0 | 0 | The paper investigates bradykinin kinetics in hereditary angioedema and mentions lanadelumab only to note a lack of effect on KLK-1-induced bradykinin formation in a specific patient group, without reporting a pharmacogenomic effect on lanadelumab's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:16 UTC</sub>
