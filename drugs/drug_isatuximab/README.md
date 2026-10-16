<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;isatuximab&quot;}]"></div>

# isatuximab

- **generic name:** isatuximab
- **ATC codes:** `L01FC02`, `L01XC38`
- **DrugBank:** [DB14811](https://go.drugbank.com/drugs/DB14811) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Isatuximab is a monoclonal antibody that inhibits CD38 and is used to treat multiple myeloma. It is authorised in the European Union and is used in cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20707906](https://www.wikidata.org/wiki/Q20707906) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:45 | 4:01 | 0/3/0 | 3/0/0 | 0/0/0 | 191,969/17,490 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Brillac_2025_final](drugs/drug_isatuximab/Isatuximab_Brillac2025_final.md) | — | 2-compartment (no model) | 2 | Brillac C et al., Selection of isatuximab dosing regimen…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Brillac_2025_model_1](drugs/drug_isatuximab/Isatuximab_Brillac2025_model_1.md) | — | 2-compartment (no model) | 2 | Brillac C et al., Selection of isatuximab dosing regimen…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fau_2020_reference](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md) | — | 1-compartment (no model) | 0 | Fau JB et al., Drug-Disease Interaction and Time-Depen…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12561](https://doi.org/10.1002/psp4.12561) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M](drugs/drug_isatuximab/pd_Koiwai_2021_M.md) | serum M-protein ← isatuximab · disease-progression model | — | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M_2](drugs/drug_isatuximab/pd_Koiwai_2021_M_2.md) | serum M-protein ← isatuximab · disease-progression model | — | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M_3](drugs/drug_isatuximab/pd_Koiwai_2021_M_3.md) | serum M-protein ← isatuximab · disease-progression model | — | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Pitoy_2024_MPROT](drugs/drug_isatuximab/pd_Pitoy_2024_MPROT.md) | Serum M-protein ← Isatuximab, Pomalidomide, Dexamethasone · disease-progression model | — | Pitoy A et al., Isatuximab-dexamethasone-pomalidomide c…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13206](https://doi.org/10.1002/psp4.13206) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Rachedi_2022_ORR](drugs/drug_isatuximab/pd_Rachedi_2022_ORR.md) | overall response rate ← isatuximab · direct log-linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Rachedi_2022_ORR_2](drugs/drug_isatuximab/pd_Rachedi_2022_ORR_2.md) | overall response rate ← isatuximab · direct log-linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Rachedi_2022_ORR_3](drugs/drug_isatuximab/pd_Rachedi_2022_ORR_3.md) | overall response rate ← isatuximab · direct linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Rachedi_2022_PFS](drugs/drug_isatuximab/pd_Rachedi_2022_PFS.md) | progression-free survival ← isatuximab · direct linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=isatuximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD38 (allosteric modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Koiwai_2021 | relevant | 7 | 4 | The study describes a population PK model for isatuximab, but the specific numeric parameter estimates (CL, V1, Q, Vm, Km) are referenced in Table 2 which is not fully provided in the evidence, although some parameter names and context are visible. |
| popPK | Korver_2019 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and efficacy of TAK-079 in monkeys, not the pharmacokinetics of isatuximab. |
| popPK | Pape_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic data (half-life) for novel nanobody-based bispecific antibody recruiters (BARs) in mice, not for the drug isatuximab. |
| popPK | Pitoy_2024 | irrelevant | 2 | 0 | The study models serum M-protein kinetics and PFS, treating isatuximab PK as a covariate/exposure input rather than reporting quantitative PK parameters for isatuximab itself. |
| popPK | Rachedi_2022 | relevant | 5 | 0 | This is an exposure-response study that references population PK parameters and clearance descriptions but does not provide specific quantitative PK parameter values (CL, V, t1/2) in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:42 UTC</sub>
