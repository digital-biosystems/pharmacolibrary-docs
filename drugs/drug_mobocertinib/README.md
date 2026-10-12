<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;mobocertinib&quot;}]"></div>

# mobocertinib

- **generic name:** mobocertinib
- **ATC codes:** `L01EB10`
- **DrugBank:** [DB16390](https://go.drugbank.com/drugs/DB16390) · **PubChem:** not captured
- **molar mass:** 585.709 g/mol (C32H39N7O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Mobocertinib is an EGFR tyrosine kinase inhibitor developed for treating non-small-cell lung cancer. It is no longer available: its marketing application in the European Union was withdrawn, and it is listed as withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105338009](https://www.wikidata.org/wiki/Q105338009) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mobocertinib | parent | 585.709 | C32H39N7O4 | DrugBank | — | Gupta_2022 |
| AP32914 | metabolite | — (mass units only) | — | — | — | — |
| AP32960 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:02 | 4:23 | 0/0/1 | 0/0/1 | 0/0/0 | 63,063/24,701 | openai / gpt-6-luna | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q290, Q27 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2022_reference](drugs/drug_mobocertinib/Mobocertinib_Gupta2022_reference.md) | — | general linear (no model) | 4 | Gupta N et al., Population pharmacokinetics of mobocert…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12785](https://doi.org/10.1002/psp4.12785) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_PR](drugs/drug_mobocertinib/pd_Gupta_2022_2_PR.md) | longitudinal clinical response of PR or better ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_SAEs](drugs/drug_mobocertinib/pd_Gupta_2022_2_SAEs.md) | treatment-emergent serious adverse events ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_confirmed_ORR](drugs/drug_mobocertinib/pd_Gupta_2022_2_confirmed_ORR.md) | best confirmed response of PR or better ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_diarrhea](drugs/drug_mobocertinib/pd_Gupta_2022_2_diarrhea.md) | diarrhea ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_grade_3_TEAEs](drugs/drug_mobocertinib/pd_Gupta_2022_2_grade_3_TEAEs.md) | grade ≥ 3 treatment-emergent adverse events ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_grade_3_treatment_related_TEAEs](drugs/drug_mobocertinib/pd_Gupta_2022_2_grade_3_treatment_related_TEAEs.md) | grade ≥ 3 treatment-related TEAEs ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_nausea](drugs/drug_mobocertinib/pd_Gupta_2022_2_nausea.md) | nausea ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_paronychia](drugs/drug_mobocertinib/pd_Gupta_2022_2_paronychia.md) | paronychia ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_rash](drugs/drug_mobocertinib/pd_Gupta_2022_2_rash.md) | rash ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_stomatitis](drugs/drug_mobocertinib/pd_Gupta_2022_2_stomatitis.md) | stomatitis ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_time_to_first_dose_reduction](drugs/drug_mobocertinib/pd_Gupta_2022_2_time_to_first_dose_reduction.md) | time to the first AE-related mobocertinib dose reduction ← mobocertinib, AP32960, and AP32914 (molar sum) · time-to-event model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Gupta_2022_2_vomiting](drugs/drug_mobocertinib/pd_Gupta_2022_2_vomiting.md) | vomiting ← mobocertinib, AP32960, and AP32914 (molar sum) · categorical (graded) response model | — | Gupta N et al., Mobocertinib Dose Rationale in Patients…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2622](https://doi.org/10.1002/cpt.2622) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mobocertinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gupta_2022_2 | irrelevant | 2 | 0 | This is an exposure-response analysis that only describes a previously developed population-PK model; no disposition parameter values are provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:58 UTC</sub>
