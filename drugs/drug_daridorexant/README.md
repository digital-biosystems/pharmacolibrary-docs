<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;daridorexant&quot;}]"></div>

# daridorexant

- **generic name:** daridorexant
- **ATC codes:** `N05CJ03`
- **DrugBank:** [DB15031](https://go.drugbank.com/drugs/DB15031) · **PubChem:** not captured
- **molar mass:** 450.93 g/mol (C23H23ClN6O2) — DrugBank
- **groups:** approved, investigational

## About

Daridorexant is a hypnotic used to treat insomnia, helping people fall asleep and stay asleep. It is authorised in the European Union and is an approved medicine, though also still under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q55112806](https://www.wikidata.org/wiki/Q55112806) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daridorexant | parent | 450.93 | C23H23ClN6O2 | DrugBank | — | Krause_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:15 | 3:26 | 0/4/1 | 0/0/0 | 0/0/0 | 151,724/11,824 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q64, Q30, Q1 — no SI value to build…</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_final_all_data_final_model_rse](drugs/drug_daridorexant/Daridorexant_Krause2023_final_all_data_final_model_rse.md) | — | 1-compartment (no model) | 3 (+3 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.765). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_all_phase_i_data_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_all_phase_i_data_estimate.md) | — | 2-compartment (no model) | 8 (+6 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_final](drugs/drug_daridorexant/Daridorexant_Krause2023_final.md) | — | 2-compartment (no model) | 8 (+7 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_food](drugs/drug_daridorexant/Daridorexant_Krause2023_food.md) | — | 1-compartment (no model) | 0 | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.826). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_phase_i_data_intense_pk_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_phase_i_data_intense_pk_estimate.md) | — | 2-compartment (no model) | 9 | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ufer_2022 | irrelevant | 2 | 0 | Abuse-potential PD study; PK only mentioned qualitatively ("consistent with earlier trials") with no numeric disposition parameters in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:11 UTC</sub>
