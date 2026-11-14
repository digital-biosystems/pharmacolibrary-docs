<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Albendazole&quot;,&quot;href&quot;:&quot;drugs/toxin_albendazole/&quot;},{&quot;label&quot;:&quot;Pillay-Fuentes_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Albendazole_Castro2009_reference&quot;,&quot;label&quot;:&quot;Castro_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_albendazole/Albendazole_Castro2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Albendazole_Dai2025_reference&quot;,&quot;label&quot;:&quot;Dai_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_albendazole/Albendazole_Dai2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Albendazole_Fimbo2023_reference&quot;,&quot;label&quot;:&quot;Fimbo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_albendazole/Albendazole_Fimbo2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Albendazole_Shah2023_value&quot;,&quot;label&quot;:&quot;Shah_2023_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_albendazole/Albendazole_Shah2023_value.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Albendazole — `Albendazole_PillayFuentes2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Albendazole" model-id="Albendazole_PillayFuentes2024_reference" status="rejected" stale="false" population="adolescents infected with Trichuris trichiura in Tanzania and Côte d’Ivoire" measured-compound="Albendazole sulfoxide" parameterization="apparent" topology="general_linear"></div>

## Citation
Pillay-Fuentes Lorente V, Nwogu-Attah JN, Steffens B, Bräm D, Sprecher V, Hofmann D et al. Understanding Drug Exposure and Trichuris trichiura Cure Rates: A Pharmacometric Approach for Albendazole-Ivermectin Co-medication in Tanzania and Côte d'Ivoire. Drugs in R&D 24(2):331–340 (2024).
  ·  DOI: [10.1007/s40268-024-00476-4](https://doi.org/10.1007/s40268-024-00476-4)

## Population and dosing

**Population:** adolescents infected with Trichuris trichiura in Tanzania and Côte d’Ivoire · condition trichuriasis (parasite infection), healthy otherwise · age group adolescent · n = 44.

**Dosed compound ≠ measured compound:** dosed Albendazole, measured Albendazole sulfoxide.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate constant, [Ka (h-1)] | kabs | 0.2 |  |  |  |
| Transit rate constant, [Ktr (h-1)] | ktr | 0.12 |  | 6.01 |  |
| Mean transit time, [Mtt (h)] | MTT | 0.095 |  | 8.72 |  |
| Volume of albendazole sulfoxide in the CC, [Vox (L)] | Vm/F | 81.81 |  | 10.8 | 0.9 (22.4% RSE) |
| Clearance of albendazole sulfoxide, [Clox (L h-1)] | CLm/F | 2.09 |  | 5.62 | 0.11 (33.3% RSE) |
| Clearance of albendazole sulfone, [Clon (L h-1)] | Q | 22.87 |  | 5.38 | 0.69 (12.3% RSE) |
| Volume of sulfoxide in the PC, [Pvox (L)] | V2 | 1931.53 |  | 5.61 |  |
| theta_q30_category | theta_q30_category | 20.85 |  | 11.30 |  |
| Apparent clearance (albendazole sulfoxide) | CL/F | 2.09 | L/h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.524). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has albendazole → albendazole sulfoxide (metabolite); albendazole sulfoxide → albendazole sulfone (metabolite), the second reading albendazole → albendazole sulfoxide (conversion); albendazole sulfoxide → albendazole sulfone (conversion); it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, [Ka (h-1)] | `Q49` · kabs | 0.2 |  |  |  |  |  | llm_confirmed (0.6) | Tab2:row2:col1 |  |
| Transit rate constant, [Ktr (h-1)] | `Q306` · ktr | 0.12 |  |  |  |  | 6.01 | llm_confirmed (0.6) | Tab2:row3:col1 |  |
| Mean transit time, [Mtt (h)] | `Q81` · MTT | 0.095 |  |  |  |  | 8.72 | llm_confirmed (0.6) | Tab2:row4:col1 |  |
| Volume of albendazole sulfoxide in the CC, [Vox (L)] | `Q367` · Vm/F | 81.81 |  |  |  |  | 10.8 | llm_confirmed (0.6) | Tab2:row5:col1 | 0.9 (22.4% RSE) |
| Clearance of albendazole sulfoxide, [Clox (L h-1)] | `Q351` · CLm/F | 2.09 |  |  |  |  | 5.62 | llm_confirmed (0.6) | Tab2:row7:col1 | 0.11 (33.3% RSE) |
| Clearance of albendazole sulfone, [Clon (L h-1)] | `Q30` · Q | 22.87 |  |  |  |  | 5.38 | llm_corrected (0.6) | Tab2:row8:col1 | 0.69 (12.3% RSE) |
| Volume of sulfoxide in the PC, [Pvox (L)] | `Q64` · V2 | 1931.53 |  |  |  |  | 5.61 | llm_corrected (0.6) | Tab2:row10:col1 |  |
| theta_q30_category | `Q900` · theta_q30_category | 20.85 |  |  |  |  | 11.30 |  | Tab2:row9:col1 |  |
| Apparent clearance (albendazole sulfoxide) | `Q27` · CL/F | 2.09 | L/h | 5.806e-07 | m3/s | L/h |  | review_gapfill (0.7) | Pillay-Fuentes_2024:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 6 row(s) → Albendazole sulfoxide, 1 row(s) → Albendazole sulfone (name 7)
- table section iiv: 'BSV on volume of ALB-OX in the CP' routed out of structural estimates ('Inter-individual variability (random effects)')
- table section iiv: 'Variability on volume of ALB-ON in the CP, [ω (Von)]' routed out of structural estimates ('Inter-individual variability (random effects)')
- table section iiv: 'Variability on clearance of ALB-OX in the CP, [ω (Clox)]' routed out of structural estimates ('Inter-individual variability (random effects)')
- table section iiv: 'Variability on intercompartmental clearance of ALB-OX, [ω (Qox)]' routed out of structural estimates ('Inter-individual variability (random effects)')
- table section iiv: 'Variability on volume of ALB-OX in the PC, [ω (Pvox)]' routed out of structural estimates ('Inter-individual variability (random effects)')
- table section residual_error: 'Sulfoxide, proportional' routed out of structural estimates ('Residual variability')
- table representations disagree for 'Absorption rate constant, [Ka (h-1)]'; source reconciliation required
- table representations disagree for 'Transit rate constant, [Ktr (h-1)]'; source reconciliation required
- table representations disagree for 'Mean transit time, [Mtt (h)]'; source reconciliation required
- table representations disagree for 'Volume of albendazole sulfoxide in the CC, [Vox (L)]'; source reconciliation required
- table representations disagree for 'Clearance of albendazole sulfoxide, [Clox (L h-1)]'; source reconciliation required
- table representations disagree for 'Clearance of albendazole sulfone, [Clon (L h-1)]'; source reconciliation required
- table representations disagree for 'Intercompartmental clearance for sulfoxide, [Qox (L h-1)]'; source reconciliation required
- table representations disagree for 'Volume of sulfoxide in the PC, [Pvox (L)]'; source reconciliation required
- table representations disagree for 'Clox-Country (Tanzania)'; source reconciliation required
- table representations disagree for 'Clon-Country (Tanzania)'; source reconciliation required
- dropped unlinked row (NIL): 'Clox-Country (Tanzania)' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col1'])
- dropped unlinked row (NIL): 'Clon-Country (Tanzania)' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1'])
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 230 (char 229)) — units left missing
- metabolite albendazole sulfoxide: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite albendazole sulfoxide: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Albendazole sulfoxide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/16 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Albendazole sulfoxide' — its concentrations stay mass-only
- molar mass: none found for 'Albendazole sulfone' — its concentrations stay mass-only
- gap-filled Q27 (CL/F) from Pillay-Fuentes_2024's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab2: units_need_context
- table Tab2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.524 (11/21 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['albendazole', 'albendazole sulfoxide', 'metabolite'], ['albendazole sulfoxide', 'albendazole sulfone', 'metabolite']] | [['albendazole', 'albendazole sulfoxide', 'conversion'], ['albendazole sulfoxide', 'albendazole sulfone', 'conversion']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[clearance of albendazole sulfone, [clon (l h-1)]].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[clearance of albendazole sulfoxide, [clox (l h-1)]].parameter_id` | Q351 | Q371 | mismatch |
| `gpt-oss:120b` | `parameters[theta_q30_category]` |  | 20.85 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q30_category]` | 20.85 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of albendazole sulfoxide in the cc, [vox (l)]]` |  | 81.81 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of albendazole sulfoxide in the cc, [vox (l)]]` | 81.81 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of sulfoxide in the pc, [pvox (l)]]` |  | 1931.53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of sulfoxide in the pc, [pvox (l)]]` | 1931.53 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Pillay-Fuentes_2024:review'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Tab2:row8:col1'] |
| C5_unit_missing_Q306 | fail | 1 / [time] |  | ['Tab2:row3:col1'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] |  | ['Tab2:row7:col1'] |
| C5_unit_missing_Q367 | fail | [length] ** 3 |  | ['Tab2:row5:col1'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Tab2:row2:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Tab2:row10:col1'] |
| C5_unit_missing_Q81 | fail | [time] |  | ['Tab2:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['100% conversion assumed', 'total conversion assumed'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.09 L/h | ['Pillay-Fuentes_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balbendazole%5D%20Albendazole_PillayFuentes2024_reference&body=Drug%3A%20albendazole%0ARecord%3A%20Albendazole_PillayFuentes2024_reference%0APaper%3A%20Pillay-Fuentes_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_albendazole/Albendazole_PillayFuentes2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 16:27 UTC</sub>
