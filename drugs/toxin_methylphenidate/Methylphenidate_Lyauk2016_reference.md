<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methylphenidate&quot;,&quot;href&quot;:&quot;drugs/toxin_methylphenidate/&quot;},{&quot;label&quot;:&quot;Lyauk_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylphenidate_Lyauk2016_reference&quot;,&quot;label&quot;:&quot;Lyauk_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methylphenidate — `Methylphenidate_Lyauk2016_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> Record rejected due to a mismatched one-compartment model structure, an incorrect output variable, and a missing peripheral volume parameter.

<div class="pk-model-meta" hidden drug="Methylphenidate" model-id="Methylphenidate_Lyauk2016_reference" status="rejected" stale="false" population="Healthy adult volunteers" measured-compound="d-Methylphenidate" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Lyauk YK, Stage C, Bergmann TK, Ferrero-Milliani L, Bjerre D, Thomsen R et al. Population Pharmacokinetics of Methylphenidate in Healthy Adults Emphasizing Novel and Known Effects of Several Carboxylesterase 1 (CES1) Variants. Clinical and translational science 9(6):337-345 (2016).
  ·  DOI: [10.1111/cts.12423](https://doi.org/10.1111/cts.12423)

## Population and dosing

**Population:** Healthy adult volunteers · condition healthy · age group adult · n = 122.

**Dosing:** 10 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Methylphenidate, measured d-Methylphenidate.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference/Methylphenidate_Lyauk2016_reference.svg" alt="Methylphenidate_Lyauk2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θ1: MTT (/h) | kabs | 0.505 | /h | 13.7 |  |
| θ2: No. of transit compartments (fixed) | n_transit | 3 | fixed |  |  |
| θ4: CL/F (L/h) | CL/F | 233.0 | L/h | 3.6 | 21.6 (15.4% RSE) |
| θ5: Vdcentral/F (L) | V1/F | 97.6 | L | 28.6 |  |
| θ6: Q/F (L/h) | Q/F | 70.1 | L/h | 47.8 |  |
| θ7: Vdperipheral/F (L) | V2/F | 252 | L | 30.9 |  |
| θ14: rs115629050 (TG) on CL/F | equation variable | -0.403 | TG | 26.1 |  |
| theta_q81_gender | theta_q81_gender | 0.925 |  | 44.3 |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.75 |  |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 1 |  |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.75 |  |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 1 |  |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected due to a mismatched one-compartment model structure, an incorrect output variable, and a missing peripheral volume parameter.**

The model structure is a one-compartment enteral model, conflicting with the required parent-metabolite topology. The output variable targets the central compartment instead of the measured analyte compartment. Additionally, the peripheral volume of distribution parameter was neither explicitly extracted nor defaulted during reconstruction. Extracted — methylphenidate: kabs 0.505 /h, n_transit 3 fixed, CL/F 233 L/h, V1/F 97.6 L, Q/F 70.1 L/h, V2/F 252 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1: MTT (/h) | `Q49` · kabs | 0.505 | /h | 0.0001403 | 1/s | 1/h | 13.7 | exact (1) | cts12423-tbl-0001:row2:col1 |  |
| θ2: No. of transit compartments (fixed) | `Q311` · n_transit | 3 | fixed |  |  | fixed |  | llm_corrected (0.6) | cts12423-tbl-0001:row3:col1 |  |
| θ4: CL/F (L/h) | `Q27` · CL/F | 233.0 | L/h | 6.472e-05 | m3/s | l/h | 3.6 | exact (1) | cts12423-tbl-0001:row5:col1 | 21.6 (15.4% RSE) |
| θ5: Vdcentral/F (L) | `Q290` · V1/F | 97.6 | L | 0.0976 | m3 | l | 28.6 | exact (1) | cts12423-tbl-0001:row6:col1 |  |
| θ6: Q/F (L/h) | `Q69` · Q/F | 70.1 | L/h | 1.947e-05 | m3/s | l/h | 47.8 | exact (1) | cts12423-tbl-0001:row7:col1 |  |
| θ7: Vdperipheral/F (L) | `Q82` · V2/F | 252 | L | 0.252 | m3 | l | 30.9 | exact (1) | cts12423-tbl-0001:row8:col1 |  |
| θ14: rs115629050 (TG) on CL/F | `Q900` · equation variable | -0.403 | TG |  |  | tg | 26.1 | llm_corrected (0.6) | cts12423-tbl-0001:row16:col1 |  |
| theta_q81_gender | `Q900` · theta_q81_gender | 0.925 |  |  |  |  | 44.3 |  | cts12423-tbl-0001:row10:col1 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.75 |  |  |  |  |  |  | cts12423-tbl-0001:row18:col1 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1 |  |  |  |  |  |  | cts12423-tbl-0001:row19:col1 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.75 |  |  |  |  |  |  | cts12423-tbl-0001:row20:col1 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1 |  |  |  |  |  |  | cts12423-tbl-0001:row21:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'MTT' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'CL/F' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Vdcentral/F' routed out of structural estimates ('IIV (%CV)')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability')
- unit_dimension_unknown: 'fixed' (n_transit)
- dropped duplicate Q49 ('θ3: ka (/h)', value '0.418') — already have one for this compound
- dropped 'θ9: rs71647871 (GA) on CL/F' → Q27 = -0.587: a clearance of -0.587 is not a parameter value (source ['cts12423-tbl-0001:row11:col1'])
- dropped 'θ10: Missing data rs71647871 on CL/F' → Q27 = -0.157: a clearance of -0.157 is not a parameter value (source ['cts12423-tbl-0001:row12:col1'])
- dropped 'θ11: One CES1A2 on CL/F' → Q27 = -0.182: a clearance of -0.182 is not a parameter value (source ['cts12423-tbl-0001:row13:col1'])
- dropped 'θ12: Two CES1A2 on CL/F' → Q27 = -0.410: a clearance of -0.410 is not a parameter value (source ['cts12423-tbl-0001:row14:col1'])
- dropped 'θ13: Missing data CES1A diplotype on CL/F' → Q27 = -0.535: a clearance of -0.535 is not a parameter value (source ['cts12423-tbl-0001:row15:col1'])
- unit_dimension_unknown: 'TG' (equation variable)
- dropped duplicate Q27 ('θ15: Missing data rs115629050 on CL/F', value '0.090') — already have one for this compound
- covariate effect for Q81 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=d-Methylphenidate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles: 7 per-group rows of d-Methylphenidate covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 6 linked by role; re-tagged parent→d-Methylphenidate ×23
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table cts12423-tbl-0001: unbound_uncertainty
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts12423-tbl-0001:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts12423-tbl-0001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts12423-tbl-0001:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts12423-tbl-0001:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts12423-tbl-0001:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 233 L/h | ['cts12423-tbl-0001:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 97.6 L | ['cts12423-tbl-0001:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 252 L | ['cts12423-tbl-0001:row8:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=d-Methylphenidate) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_shared_parameters |  | pass | 12 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.505 /h, F 1). Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference/Methylphenidate_Lyauk2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference/Methylphenidate_Lyauk2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Methylphenidate_Lyauk2016_reference_params.json` · controls `Methylphenidate_Lyauk2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylphenidate%5D%20Methylphenidate_Lyauk2016_reference&body=Drug%3A%20methylphenidate%0ARecord%3A%20Methylphenidate_Lyauk2016_reference%0APaper%3A%20Lyauk_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:59 UTC</sub>
