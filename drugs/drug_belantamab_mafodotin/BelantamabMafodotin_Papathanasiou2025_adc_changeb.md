<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2025 \u00b7 adc_changeb&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Papathanasiou2025_adc_changeb`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Papathanasiou2025_adc_changeb" status="not_modelled" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab_mafodotin ADC and cys-mcMMAF" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Papathanasiou T, Kaullen J, Polireddy K, Chen X, Ho YL, Taylor A et al. Population Pharmacokinetics for Belantamab Mafodotin Monotherapy and Combination Therapies in Patients with Relapsed/Refractory Multiple Myeloma. Clinical pharmacokinetics 64(6):925–942 (2025).
  ·  DOI: [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1)

## Population and dosing

**Population:** patients with relapsed/refractory multiple myeloma · condition relapsed/refractory multiple myeloma · age group adult · n = 977.

**Dosing:** 175 mg, iv, multiple, every 504 h.

**Dosed compound ≠ measured compound:** dosed belantamab_mafodotin, measured belantamab_mafodotin ADC and cys-mcMMAF.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| race | race | 15.6 |  |
| steady-state volume of distribution | V | 10.8 | L |
| initial systemic CL | initial systemic CL | 0.926 | L/day |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. No model template covers this structure. None of the extracted parameters is belantamab mafodotin's own; they describe belantamab_mafodotin ADC and cys-mcMMAF.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| race | `Q900` · race | 15.6 |  |  |  |  |  | Papathanasiou_2025_table_4:row9:col3, Papathanasiou_2025_table_4:row9:col4, Papathanasiou_2025_table_4:row9:col5 |
| steady-state volume of distribution | `Q61` · V | 10.8 | L | 0.0108 | m3 | L | boundary (0.8) | Papathanasiou_2025:other_prose |
| initial systemic CL | `Q900` · initial systemic CL | 0.926 | L/day | 1.072e-08 | m3/s |  |  | Papathanasiou_2025:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| initial systemic CL | Q22 | boundary |
| IMAXi | Q323 | boundary |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Baseline sBCMA' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row1:col3', 'Papathanasiou_2025_table_4:row1:col4', 'Papathanasiou_2025_table_4:row1:col5'])
- dropped unlinked row (NIL): '516 ng/mL' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row2:col4', 'Papathanasiou_2025_table_4:row2:col5'])
- dropped unlinked row (NIL): 'Baseline IgG' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row3:col3', 'Papathanasiou_2025_table_4:row3:col4', 'Papathanasiou_2025_table_4:row3:col5'])
- dropped unlinked row (NIL): '57.8 g/L' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row4:col4', 'Papathanasiou_2025_table_4:row4:col5'])
- dropped unlinked row (NIL): '47 g/L' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row6:col3'])
- dropped unlinked row (NIL): '107 kg' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row8:col3', 'Papathanasiou_2025_table_4:row8:col5'])
- covariate level 'Race' → Q900:race = 15.6 (linear_fractional on the model)
- dropped unlinked row (NIL): 'African American' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row10:col3'])
- table mostly unlinked (7/8 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('initial systemic CL'=0.926) from results prose — parameter table was unreadable
- salvaged Q61 ('steady-state volume of distribution'=10.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab_mafodotin ADC and cys-mcMMAF
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- bound model equation to Q22 (CL): CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- model equation 'Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)' not bound — neither LHS nor base term 'θQ' linked to an ontology parameter
- bound model equation to Q323 (Imax): IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- model equation 'TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)' not bound — neither LHS nor base term 'θTI50' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'initial systemic CL'; equation kept verbatim
- Q323 (Imax) is equation-defined: value moved to equation-variable 'IMAXi'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'adc, % changeb' subgroup of Papathanasiou_2025 (paper reports 5 populations: adc final model, adc, % changeb, covariate valuesa, cys-mcmmaf final model, cys-mcmmaf, % changeb)
- row roles (LLM): model_class=compartmental; 75/75 row label(s) assigned, 54 linked by role; re-tagged belantamab_mafodotin ADC→cys-mcMMAF ×63
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC' ('belantamab mafodotin ADC') — left in mass units
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC and cys-mcMMAF' ('belantamab mafodotin ADC and cysteine maleimidocaproyl monomethyl auristatin F') — left in mass units
- molar mass: none found for 'belantamab_mafodotin ADC' — its concentrations stay mass-only
- molar mass: none found for 'belantamab_mafodotin ADC and cys-mcMMAF' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col3 = '0.899 to 0.952'
- unparsed cell Tab2:row4:col3 = '4.15 to 4.28'
- unparsed cell Tab2:row5:col3 = '0.660 to 0.761'
- unparsed cell Tab2:row6:col3 = '6.29 to 6.96'
- unparsed cell Tab2:row7:col1 = '− 0.403'
- unparsed cell Tab2:row7:col3 = '− 0.458 to − 0.347'
- unparsed cell Tab2:row8:col3 = '63.5 to 69.2'
- unparsed cell Tab2:row9:col3 = '2.47 to 3.27'
- unparsed cell Tab2:row11:col3 = '0.845 to 1.01'
- unparsed cell Tab2:row12:col3 = '0.449 to 0.635'
- unparsed cell Tab2:row13:col1 = '− 0.698'
- unparsed cell Tab2:row13:col3 = '− 0.839 to − 0.557'
- unparsed cell Tab2:row14:col1 = '− 0.302'
- unparsed cell Tab2:row14:col3 = '− 0.407 to − 0.19'
- unparsed cell Tab2:row15:col3 = '0.0988 to 0.127'
- unparsed cell Tab2:row16:col3 = '0.153 to 0.187'
- unparsed cell Tab2:row17:col1 = '− 0.459'
- unparsed cell Tab2:row17:col3 = '− 0.571 to − 0.348'
- unparsed cell Tab2:row19:col3 = '0.0289 to 0.0513'
- unparsed cell Tab2:row20:col3 = '0.867 to 0.958'
- unparsed cell Tab2:row21:col3 = '0.801 to 0.921'
- unparsed cell Tab2:row22:col3 = '1.23 to 1.66'
- unparsed cell Tab2:row23:col3 = '0.117 to 0.266'
- unparsed cell Tab2:row24:col3 = '0.0920 to 0.227'
- unparsed cell Tab2:row25:col3 = '0.285 to 0.849'
- unparsed cell Tab2:row27:col3 = '24.0 to 28.0'
- unparsed cell Tab2:row27:col4 = '14.9%'
- unparsed cell Tab2:row28:col3 = '0.0272 to 0.0383'
- unparsed cell Tab2:row29:col3 = '18.5 to 21.3'
- unparsed cell Tab2:row29:col4 = '15.7%'
- unparsed cell Tab2:row30:col3 = 'NA to 31.0'
- unparsed cell Tab2:row30:col4 = '69.1%'
- unparsed cell Tab2:row31:col3 = '25.1 to 35.4'
- unparsed cell Tab2:row31:col4 = '50.1%'
- unparsed cell Tab2:row32:col3 = '22.5 to 34.5'
- unparsed cell Tab2:row32:col4 = '40.6%'
- unparsed cell Tab2:row33:col3 = '58.4 to 79.6'
- unparsed cell Tab2:row33:col4 = '53.7%'
- unparsed cell Tab2:row35:col3 = '0.0553 to 0.0714'
- unparsed cell Tab2:row35:col4 = '12.6%'
- unparsed cell Papathanasiou_2025_table_3:row2:col3 = '607 to 677'
- unparsed cell Papathanasiou_2025_table_3:row3:col3 = '6.91 to 17.7'
- unparsed cell Papathanasiou_2025_table_3:row4:col3 = '98.9 to 273'
- unparsed cell Papathanasiou_2025_table_3:row5:col3 = '5.34 to 6.6'
- unparsed cell Papathanasiou_2025_table_3:row6:col3 = '0.0351 to 0.0411'
- unparsed cell Papathanasiou_2025_table_3:row8:col1 = '− 0.0448'
- unparsed cell Papathanasiou_2025_table_3:row8:col3 = '− 0.0746 to − 0.0151'
- unparsed cell Papathanasiou_2025_table_3:row9:col3 = '0.528 to 0.875'
- unparsed cell Papathanasiou_2025_table_3:row10:col1 = '− 0.533'
- unparsed cell Papathanasiou_2025_table_3:row10:col3 = '− 0.835 to − 0.232'
- unparsed cell Papathanasiou_2025_table_3:row11:col3 = '0.148 to 0.22'
- unparsed cell Papathanasiou_2025_table_3:row12:col3 = '0.0732 to 0.14'
- unparsed cell Papathanasiou_2025_table_3:row13:col3 = '0.912 to 1.57'
- unparsed cell Papathanasiou_2025_table_3:row14:col3 = '0.724 to 0.908'
- unparsed cell Papathanasiou_2025_table_3:row15:col3 = '0.606 to 0.886'
- unparsed cell Papathanasiou_2025_table_3:row16:col1 = '− 0.853'
- unparsed cell Papathanasiou_2025_table_3:row16:col3 = '− 1.25 to − 0.455'
- unparsed cell Papathanasiou_2025_table_3:row18:col3 = '22.4 to 35.5'
- unparsed cell Papathanasiou_2025_table_3:row19:col3 = '0.0597 to 0.103'
- unparsed cell Papathanasiou_2025_table_3:row20:col3 = '59.5 to 70.7'
- unparsed cell Papathanasiou_2025_table_3:row21:col3 = '0.288 to 0.456'
- unparsed cell Papathanasiou_2025_table_3:row22:col3 = '119 to 155'
- unparsed cell Papathanasiou_2025_table_3:row23:col3 = '53.0 to 60.3'
- unparsed cell Papathanasiou_2025_table_3:row24:col3 = '42.7 to 47.3'
- unparsed cell Papathanasiou_2025_table_3:row26:col3 = '25.6 to 26.7'
- companion parameter table 3 transcribed (67 record(s), model stage 'final')
- unparsed cell Papathanasiou_2025_table_4:row1:col6 = '− 13.1'
- unparsed cell Papathanasiou_2025_table_4:row1:col7 = '− 14.6'
- unparsed cell Papathanasiou_2025_table_4:row2:col1 = '− 8.99'
- unparsed cell Papathanasiou_2025_table_4:row2:col2 = '− 18.7'
- unparsed cell Papathanasiou_2025_table_4:row2:col3 = '− 34.0'
- unparsed cell Papathanasiou_2025_table_4:row3:col1 = 'ADC ADC VpADC ImaxADC TI50cys-mcMMAF cys-mcMMAF Vc'
- unparsed cell Papathanasiou_2025_table_4:row3:col6 = '− 21.5'
- unparsed cell Papathanasiou_2025_table_4:row3:col7 = '− 15.6'
- unparsed cell Papathanasiou_2025_table_4:row4:col1 = '− 0.117'
- unparsed cell Papathanasiou_2025_table_4:row4:col2 = '− 16.0'
- unparsed cell Papathanasiou_2025_table_4:row4:col3 = '− 31.9'
- unparsed cell Papathanasiou_2025_table_4:row5:col3 = '− 10.2'
- unparsed cell Papathanasiou_2025_table_4:row5:col4 = '− 15.6'
- unparsed cell Papathanasiou_2025_table_4:row5:col5 = '− 32.9'
- unparsed cell Papathanasiou_2025_table_4:row6:col4 = '− 3.56'
- unparsed cell Papathanasiou_2025_table_4:row6:col5 = '− 4.75'
- unparsed cell Papathanasiou_2025_table_4:row7:col2 = '51.2 kg'
- unparsed cell Papathanasiou_2025_table_4:row7:col3 = '− 2.84'
- unparsed cell Papathanasiou_2025_table_4:row7:col4 = '− 12.9'
- unparsed cell Papathanasiou_2025_table_4:row7:col5 = '− 18.6'
- unparsed cell Papathanasiou_2025_table_4:row7:col7 = '− 6.53'
- unparsed cell Papathanasiou_2025_table_4:row8:col4 = '− 6.12'
- unparsed cell Papathanasiou_2025_table_4:row9:col6 = '− 2.45'
- unparsed cell Papathanasiou_2025_table_4:row9:col7 = '− 3.52'
- unparsed cell Papathanasiou_2025_table_4:row10:col4 = '− 5.33'
- unparsed cell Papathanasiou_2025_table_4:row10:col5 = '− 5.78'
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 2, 3, 4
- captured model equation CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- captured model equation Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)
- captured model equation IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- captured model equation TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.8 L | ['Papathanasiou_2025:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | skipped |  |  | no emitted model to inspect (engineer build absent) |
| T3_shared_parameters |  | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 43.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.498 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.976 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 22.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.0 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 16.8 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 19.1 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.2 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 17 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelantamab_mafodotin%5D%20BelantamabMafodotin_Papathanasiou2025_adc_changeb&body=Drug%3A%20belantamab_mafodotin%0ARecord%3A%20BelantamabMafodotin_Papathanasiou2025_adc_changeb%0APaper%3A%20Papathanasiou_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Papathanasiou2025_adc_changeb%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:53 UTC</sub>
