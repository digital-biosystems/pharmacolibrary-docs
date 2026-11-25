<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;valbenazine&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/&quot;},{&quot;label&quot;:&quot;Nguyen_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valbenazine_Nguyen2025_reference&quot;,&quot;label&quot;:&quot;Nguyen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valbenazine — `Valbenazine_Nguyen2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The covariate scenarios were not simulated; t3_param_coverage (+2 more).

<div class="pk-model-meta" hidden drug="valbenazine" model-id="Valbenazine_Nguyen2025_reference" status="needs_review" stale="false" population="patients with Huntington&#39;s disease" measured-compound="valbenazine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Nguyen HQ, Crass RL, Chapel S, Kuan HS, Loewen G, Brar S. Population Pharmacokinetic and Exposure-Efficacy Analyses of Valbenazine in Patients with Huntington's Disease: Supporting Dose Selection for Chorea Management. Journal of clinical pharmacology 65(12):1777–1788 (2025).
  ·  DOI: [10.1002/jcph.70092](https://doi.org/10.1002/jcph.70092)

## Population and dosing

**Population:** patients with Huntington's disease · condition Huntington's disease · age group adult · n = 425.

**Dosing:** 40, 80 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference.svg" alt="Valbenazine_Nguyen2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| 1 CLP/F (L/h) | CL/F | 23.2 | L/h | 3.95 |
| 2 VC/F (L) | V1/F | 226 | L | 4.49 |
| 3 KA (per hour) | kabs | 8.43 | per hour | 3.84 |
| 4 QP/F (L/h) | Q/F | 22.0 | L/h | 4.35 |
| 5 VPP/F (L) | V2/F | 198 | L | 3.44 |
| 6 Fmax (relative to 1 mg) | Frel | 1.36 | relative to 1 mg | 10.9 |
| 10_fed_status_on_f1 | 10_fed_status_on_f1 | -0.0646 |  | 20.2 |
| 13 CLM (L/h) | CL | 31.0 | L/h | 4.99 |
| 14 FM | fm | 0.207 |  | 1.91 |
| 15 QM (L/h) | Q | 1.27 | L/h | 7.60 |
| 16 VPM (L) | V2 | 97.8 | L | 7.12 |
| 17_poor_metabolizer_a_on_clm | 17_poor_metabolizer_a_on_clm | -0.516 |  | 12.3 |
| 21_wt_on_clp | 21_wt_on_clp | 0.602 |  | 21.2 |
| 22_wt_on_vcp | 22_wt_on_vcp | 1.04 |  | 17.0 |
| theta_kabs_fed | theta_kabs_fed | -0.685 |  | 0.816 |
| theta_q351_intermediate_metabolizer | theta_q351_intermediate_metabolizer | -0.281 |  | 15.3 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate scenarios were not simulated; t3_param_coverage (+2 more).**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Frel), so that value has no SI equivalent. Extracted — valbenazine: CL/F 23.2 L/h, V1/F 226 L, kabs 8.43 per hour, Q/F 22 L/h, V2/F 198 L, Frel 1.36 relative to 1 mg; [+]‐α‐dihydrotetrabenazine: CL 31 L/h, fm 0.207, Q 1.27 L/h, V2 97.8 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has valbenazine → [+]‐α‐dihydrotetrabenazine (metabolism), the second reading valbenazine → [+]‐α‐htbz (metabolism); it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| 1 CLP/F (L/h) | `Q27` · CL/F | 23.2 | L/h | 6.444e-06 | m3/s | l/h | 3.95 | exact (1) | jcph70092-tbl-0001:row1:col1 |
| 2 VC/F (L) | `Q290` · V1/F | 226 | L | 0.226 | m3 | l | 4.49 | exact (1) | jcph70092-tbl-0001:row2:col1 |
| 3 KA (per hour) | `Q49` · kabs | 8.43 | per hour | 0.002342 | 1/s | 1/h | 3.84 | exact (1) | jcph70092-tbl-0001:row3:col1 |
| 4 QP/F (L/h) | `Q69` · Q/F | 22.0 | L/h | 6.111e-06 | m3/s | l/h | 4.35 | exact (1) | jcph70092-tbl-0001:row4:col1 |
| 5 VPP/F (L) | `Q82` · V2/F | 198 | L | 0.198 | m3 | l | 3.44 | exact (1) | jcph70092-tbl-0001:row5:col1 |
| 6 Fmax (relative to 1 mg) | `Q87` · Frel | 1.36 | relative to 1 mg |  |  | mg·relative·to1 | 10.9 | llm (0.6) | jcph70092-tbl-0001:row6:col1 |
| 10_fed_status_on_f1 | `Q900` · 10_fed_status_on_f1 | -0.0646 |  |  |  |  | 20.2 |  | jcph70092-tbl-0001:row10:col1 |
| 13 CLM (L/h) | `Q22` · CL | 31.0 | L/h | 8.611e-06 | m3/s | l/h | 4.99 | exact (1) | jcph70092-tbl-0001:row11:col1 |
| 14 FM | `Q45` · fm | 0.207 |  | 0.207 |  |  | 1.91 | exact (1) | jcph70092-tbl-0001:row12:col1 |
| 15 QM (L/h) | `Q30` · Q | 1.27 | L/h | 3.528e-07 | m3/s | l/h | 7.60 | exact (1) | jcph70092-tbl-0001:row13:col1 |
| 16 VPM (L) | `Q64` · V2 | 97.8 | L | 0.0978 | m3 | l | 7.12 | exact (1) | jcph70092-tbl-0001:row14:col1 |
| 17_poor_metabolizer_a_on_clm | `Q900` · 17_poor_metabolizer_a_on_clm | -0.516 |  |  |  |  | 12.3 |  | jcph70092-tbl-0001:row15:col1 |
| 21_wt_on_clp | `Q900` · 21_wt_on_clp | 0.602 |  |  |  |  | 21.2 |  | jcph70092-tbl-0001:row17:col1 |
| 22_wt_on_vcp | `Q900` · 22_wt_on_vcp | 1.04 |  |  |  |  | 17.0 |  | jcph70092-tbl-0001:row18:col1 |
| theta_kabs_fed | `Q900` · theta_kabs_fed | -0.685 |  |  |  |  | 0.816 |  | jcph70092-tbl-0001:row9:col1 |
| theta_q351_intermediate_metabolizer | `Q900` · theta_q351_intermediate_metabolizer | -0.281 |  |  |  |  | 15.3 |  | jcph70092-tbl-0001:row16:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: '11 Log additive (parent, rich)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '12 Log additive (parent, sparse)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '19 Log additive (metabolite, rich)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '20 Log additive (metabolite, sparse)' routed out of structural estimates ('Residual variability (%)')
- unit_dimension_unknown: 'relative to 1 mg' (Frel)
- dropped PD-category row '7 ED50 (mg)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph70092-tbl-0001:row7:col1'])
- dropped unlinked row (NIL): '8 Solution on KA' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row8:col1'])
- covariate level '10 Fed status on F1' → Q900:10_fed_status_on_f1 = -0.0646 (linear_fractional on Q27)
- covariate level '17 Poor metabolizer a on CLM' → Q900:17_poor_metabolizer_a_on_clm = -0.516 (linear_fractional on Q27)
- covariate level '21 WT on CLP' → Q900:21_wt_on_clp = 0.602 (linear_fractional on Q27)
- covariate level '22 WT on VCP' → Q900:22_wt_on_vcp = 1.04 (linear_fractional on Q27)
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=valbenazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- pharmacogenetic covariate '17_poor_metabolizer_a_on_clm' (poor metabolizer) — PGx domain
- pharmacogenetic covariate 'theta_q351_intermediate_metabolizer' (intermediate metabolizer) — PGx domain
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of [+]‐α‐dihydrotetrabenazine covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of valbenazine covariate_effect but 2 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 9 linked by role; re-tagged parent→[+]‐α‐dihydrotetrabenazine ×6
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table jcph70092-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.462 (18/39 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['valbenazine', '[+]‐α‐dihydrotetrabenazine', 'metabolism']] | [['valbenazine', '[+]‐α‐htbz', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[1 clp/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[10_fed_status_on_f1]` | -0.0646 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[13 clm]` | 31.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[13 clm]` |  | 31.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[14 fm]` | 0.207 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[14 fm]` |  | 0.207 | only_one_extracted |
| `gpt-oss-120b` | `parameters[15 qm]` | 1.27 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[15 qm]` |  | 1.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[16 vpm]` | 97.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[16 vpm]` |  | 97.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[17_poor_metabolizer_a_on_clm]` | -0.516 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[21_wt_on_clp]` | 0.602 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[22_wt_on_vcp]` | 1.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[6 fmax].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_intermediate_metabolizer]` |  | -0.281 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_poor_metabolizer]` |  | -0.516 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_fed]` |  | -0.0646 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_wt]` |  | 0.602 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q351_intermediate_metabolizer]` | -0.281 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_wt]` |  | 1.04 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row11:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph70092-tbl-0001:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row13:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph70092-tbl-0001:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph70092-tbl-0001:row14:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph70092-tbl-0001:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph70092-tbl-0001:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 31 L/h | ['jcph70092-tbl-0001:row11:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.2 L/h | ['jcph70092-tbl-0001:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 226 L | ['jcph70092-tbl-0001:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 97.8 L | ['jcph70092-tbl-0001:row14:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 198 L | ['jcph70092-tbl-0001:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | the phenotype scenarios were simulated, but not the covariates fed, intermediate metabolizer, wt |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=valbenazine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 8 scholar param(s) emitted or defaulted | 6 covered |  | neither emitted nor in defaulted[]: ['V2/F', 'V2'] |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.462 (18 of 39 compared fields agree, 18 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.462 | cross-check contradicted by a second reader: verdict disputed; agreement 0.462 (18 of 39 compared fields agree, 18 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T2_pgx_Poor | pgx:Poor | pass |  |  |  | Poor vs Normal: central.C auc +52 %, central.C cmax +2 % (PK_1C_enteral.fmu, 2 phenotypes) |
| T1_cmax | reference | skipped | 1.83 | 8.256e-05 |  | unresolved concentration unit (exp '[90% CI, 1.55‐2.25]', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_modelica.zip" download>Valbenazine_Nguyen2025_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_fmi.zip" download>Valbenazine_Nguyen2025_reference_fmi.zip</a> <span class="pk-size">(4.6 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_matlab.zip" download>Valbenazine_Nguyen2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_matlab_simbio.zip" download>Valbenazine_Nguyen2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_sbml.zip" download>Valbenazine_Nguyen2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_cellml.zip" download>Valbenazine_Nguyen2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 8.611e-06 | m3/s |
| input | model | `VdPerKg` | 0.003229 | m3/kg |
| input | model | `ka` | 0.002342 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nguyen HQ, Crass RL, Chapel S, Kuan HS, Loewen G, Brar S. Population Pharmacokinetic and Exposure-Efficacy Analyses of Valbenazine in Patients with Huntington's Disease: Supporting Dose Selection for Chorea Management. Journal of clinical pharmacology 65(12):1777–1788 (2025). [doi:10.1002/jcph.70092](https://doi.org/10.1002/jcph.70092)

**This record:** Pharmacolibrary, model `Valbenazine_Nguyen2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference>

```bibtex
@misc{pharmacolibrary_ValbenazineNguyen2025reference,
  title  = {{Pharmacolibrary model Valbenazine_Nguyen2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference},
  note   = {Parameters from doi:10.1002/jcph.70092},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 8.43 /h, F 1). Doses in the paper: 20, 40, 60, 80 mg.

<dbs-fmusim paramsurl="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Valbenazine_Nguyen2025_reference_params.json` · controls `Valbenazine_Nguyen2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalbenazine%5D%20Valbenazine_Nguyen2025_reference&body=Drug%3A%20valbenazine%0ARecord%3A%20Valbenazine_Nguyen2025_reference%0APaper%3A%20Nguyen_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:06 UTC</sub>
