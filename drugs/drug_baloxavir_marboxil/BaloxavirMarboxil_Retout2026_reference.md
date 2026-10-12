<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/&quot;},{&quot;label&quot;:&quot;Retout_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baloxavir marboxil — `BaloxavirMarboxil_Retout2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.115). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Baloxavir marboxil apparent peripheral volume 260 L was not extracted, and covariate effects were not simulated for children aged 1 to &lt;12 years.**

The record lists V2/F as 260 L, but the simulation engine failed to cover this parameter, leaving it undefined in the executed model. Additionally, covariates for race and age on clearance and absorption were not exercised, so only the reference individual was simulated. Extracted — baloxavir: CLm/F 11 L/h, V1/F 735 L, Q/F 2.12 L/h, V2/F 260 L, kabs 1.39 1/h, tlag 0.223 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has baloxavir acid, the second reading baloxavir; it also differs on 22 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:33:32.582847+00:00) predates the upstream re-run (2026-10-07 15:33:08.758662+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `baloxavir marboxil`, measured `baloxavir acid`.

## Citation
Retout S et al., Population Pharmacokinetic and Exposure…, Clinical pharmacology and t… (2026)
  ·  DOI: [10.1002/cpt.70204](https://doi.org/10.1002/cpt.70204)

<div class="pk-model-meta" hidden drug="baloxavir marboxil" model-id="BaloxavirMarboxil_Retout2026_reference" status="extracted" stale="true" population="patients aged ≥1 year with influenza (treatment and post-exposure prophylaxis)" measured-compound="baloxavir acid" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 5 covariate effects.

**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q351` · CLm/F | 11.02 | L/h | 3.0611111111111112e-06 | L/h | 1.87 | exact (1.0) | cpt70204-tbl-0001:row2:col2, cpt70204-tbl-0001:row2:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Vc/F | `Q290` · V1/F | 735 | L | 0.735 | L | 2.12 | exact (1.0) | cpt70204-tbl-0001:row3:col2, cpt70204-tbl-0001:row3:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Q/F | `Q69` · Q/F | 2.12 | L/h | 5.88888888888889e-07 | L/h | 5.2 | exact (1.0) | cpt70204-tbl-0001:row4:col2, cpt70204-tbl-0001:row4:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Vp/F | `Q82` · V2/F | 260 | L | 0.26 | L | 6.68 | exact (1.0) | cpt70204-tbl-0001:row5:col2, cpt70204-tbl-0001:row5:col3, cpt70204-tbl-0001:footnote | — | not captured |
| ka | `Q49` · kabs | 1.39 | 1/h | 0.0003861111111111111 | 1/h | 14.6 | exact (1.0) | cpt70204-tbl-0001:row6:col1, cpt70204-tbl-0001:row6:col2, cpt70204-tbl-0001:row6:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Tlag | `Q83` · tlag | 0.223 | h | 802.8000000000001 | h | 39.6 | exact (1.0) | cpt70204-tbl-0001:row7:col2, cpt70204-tbl-0001:row7:col3 | — | not captured |
| Effect of BW on CL/F, Q/F | `Q900` · equation variable | 0.467 | not captured | not captured | not captured | 5.61 | llm_corrected (0.6) | cpt70204-tbl-0001:row26:col2, cpt70204-tbl-0001:row26:col3 | — | not captured |
| theta_equation_variable_race | `Q900` · theta_equation_variable_race | 0.504 | not captured | not captured | not captured | 2.4 | not captured (not captured) | cpt70204-tbl-0001:row28:col2, cpt70204-tbl-0001:row28:col3 | — | not captured |
| theta_q76_race | `Q900` · theta_q76_race | 0.335 | not captured | not captured | not captured | 5.28 | not captured (not captured) | cpt70204-tbl-0001:row29:col2, cpt70204-tbl-0001:row29:col3 | — | not captured |
| theta_equation_variable_race | `Q900` · theta_equation_variable_race | 0.391 | not captured | not captured | not captured | 7.21 | not captured (not captured) | cpt70204-tbl-0001:row30:col2, cpt70204-tbl-0001:row30:col3 | — | not captured |
| theta_kabs_sex | `Q900` · theta_kabs_sex | 0.205 | not captured | not captured | not captured | 36.4 | not captured (not captured) | cpt70204-tbl-0001:row31:col2, cpt70204-tbl-0001:row31:col3 | — | not captured |
| theta_kabs_age | `Q900` · theta_kabs_age | 0.242 | not captured | not captured | not captured | 21.4 | not captured (not captured) | cpt70204-tbl-0001:row32:col2, cpt70204-tbl-0001:row32:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q900 ('Effect of BW on Vc/F, Vp/F', value '0.887') — already have one for this compound
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F' → L/h (from the paper text: "Text states oral drug clearance values '10.8 L/h versus 11.0 L/h, respectively', matching CL/F = 11.02 in Table 1.")
- implicit units: 'Vc/F' → L (from the popPK convention: 'No unit stated for Vc/F; central volumes of distribution are conventionally in L, consistent with value 735.')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'No unit stated for Q/F; intercompartmental clearances are conventionally in L/h, consistent with value 2.12.')
- implicit units: 'Vp/F' → L (from the popPK convention: 'No unit stated for Vp/F; peripheral volumes of distribution are conventionally in L, consistent with value 260.')
- implicit units: 'ka' → 1/h (from the popPK convention: 'No unit stated for ka; first-order absorption rate constants are conventionally in 1/h, consistent with value 1.39.')
- implicit units: 'Tlag' → h (from the popPK convention: 'No unit stated for Tlag; absorption lag times are conventionally in h, consistent with value 0.223.')
- metabolite baloxavir acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baloxavir acid
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 24 linked by role
- review gap-fill skipped: this record measures 'baloxavir acid', not baloxavir_marboxil — the review values are the parent's

**Extraction notes:**
- unparsed cell cpt70204-tbl-0001:row9:col2 = '45.60%'
- unparsed cell cpt70204-tbl-0001:row9:col3 = '4.23b'
- unparsed cell cpt70204-tbl-0001:row10:col2 = '45.70%'
- unparsed cell cpt70204-tbl-0001:row10:col3 = '5.55b'
- unparsed cell cpt70204-tbl-0001:row11:col2 = '48.60%'
- unparsed cell cpt70204-tbl-0001:row11:col3 = '23.0b'
- unparsed cell cpt70204-tbl-0001:row12:col2 = '15% (Fixed)'
- unparsed cell cpt70204-tbl-0001:row13:col2 = '113%'
- unparsed cell cpt70204-tbl-0001:row13:col3 = '8.91b'
- unparsed cell cpt70204-tbl-0001:row14:col2 = '62.60%'
- unparsed cell cpt70204-tbl-0001:row14:col3 = '80.4b'
- unparsed cell cpt70204-tbl-0001:row15:col3 = '1.38c'
- unparsed cell cpt70204-tbl-0001:row16:col3 = '6.79c'
- unparsed cell cpt70204-tbl-0001:row17:col3 = '25.9c'
- unparsed cell cpt70204-tbl-0001:row18:col3 = '13.6c'
- unparsed cell cpt70204-tbl-0001:row19:col3 = '27.9c'
- unparsed cell cpt70204-tbl-0001:row20:col3 = '30.9c'
- unparsed cell cpt70204-tbl-0001:row21:col3 = '16.5c'
- unparsed cell cpt70204-tbl-0001:row22:col3 = '316c'
- unparsed cell cpt70204-tbl-0001:row23:col3 = '159c'
- unparsed cell cpt70204-tbl-0001:row24:col3 = '124c'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.115 (3/26 fields) | 23 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 11.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 11.02 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of bw on cl/f, q/f]` | 0.467 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.39 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 2.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 2.12 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_race]` | not captured | 0.504 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_equation_variable_race]` | 0.504 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_age]` | not captured | 0.242 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_age]` | 0.242 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_sex]` | not captured | 0.205 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_sex]` | 0.205 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_race]` | not captured | 0.335 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_race]` | 0.335 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_f_race]` | not captured | 0.391 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | not captured | 0.223 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.223 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 735 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 735 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | not captured | 260 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 260 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | baloxavir acid | baloxavir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70204-tbl-0001:row3:col2', 'cpt70204-tbl-0001:row3:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row2:col2', 'cpt70204-tbl-0001:row2:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row6:col1', 'cpt70204-tbl-0001:row6:col2', 'cpt70204-tbl-0001:row6:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row4:col2', 'cpt70204-tbl-0001:row4:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70204-tbl-0001:row5:col2', 'cpt70204-tbl-0001:row5:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row7:col2', 'cpt70204-tbl-0001:row7:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 735 L | not captured | not captured | ['cpt70204-tbl-0001:row3:col2', 'cpt70204-tbl-0001:row3:col3', 'cpt70204-tbl-0001:footnote'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 260 L | not captured | not captured | ['cpt70204-tbl-0001:row5:col2', 'cpt70204-tbl-0001:row5:col3', 'cpt70204-tbl-0001:footnote'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=baloxavir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 5.1772250275190754e-05 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_baloxavir_marboxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Retout_2026` / `Retout_2026::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Retout2026_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Retout2026_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Retout2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_modelica.zip" download>BaloxavirMarboxil_Retout2026_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_fmi.zip" download>BaloxavirMarboxil_Retout2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference.svg" alt="BaloxavirMarboxil_Retout2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 1.39 /h, lag 13.4 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 40 mg oral (J05AX25) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `BaloxavirMarboxil_Retout2026_reference_params.json` · controls `BaloxavirMarboxil_Retout2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:33 UTC</sub>
