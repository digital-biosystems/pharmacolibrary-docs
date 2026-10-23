<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2025 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Papathanasiou2025_final`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Papathanasiou2025_final" status="not_modelled" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab_mafodotin ADC and cys-mcMMAF" parameterization="mechanistic" topology="parent_metabolite"></div>

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
**Parameters:** 4 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ADC Vc (L) | V1 | 4.21 | L |
| Q (L/day) | Q | 0.711 | L/day |
| ADC Vp (L) | V2 | 6.63 | L |
| TI50 (days) | t1/2z | 66.4 | days |
| IgG on CL (θCL_IGGBL) | equation variable | 0.170 | θCL_IGGBL |
| theta_q319_weight | theta_q319_weight | 0.929 |  |
| theta_q319_weight | theta_q319_weight | 0.542 |  |
| theta_equation_variable_albumin | theta_equation_variable_albumin | 10.3 |  |
| theta_v1_albumin | theta_v1_albumin | 17.9 |  |
| theta_v1_bmi | theta_v1_bmi | 12.4 |  |
| theta_cl_race | theta_cl_race | 0.861 |  |
| theta_v2_albumin | theta_v2_albumin | 0.567 |  |
| CL | CL | 0.926 | L/day |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.067). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. No model template covers this structure. None of the extracted parameters is belantamab mafodotin's own; they describe belantamab_mafodotin ADC.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has belantamab_mafodotin ADC and cys-mcMMAF, the second reading belantamab_mafodotin; it also differs on 27 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ADC Vc (L) | `Q63` · V1 | 4.21 | L | 0.00421 | m3 | l | llm_confirmed (0.6) | Tab2:row4:col1, Tab2:row4:col2 |
| Q (L/day) | `Q30` · Q | 0.711 | L/day | 8.229e-09 | m3/s | l/d | exact (1) | Tab2:row5:col1, Tab2:row5:col2 |
| ADC Vp (L) | `Q64` · V2 | 6.63 | L | 0.00663 | m3 | l | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2 |
| TI50 (days) | `Q57` · t1/2z | 66.4 | days | 5.737e+06 | s | d | llm (0.6) | Tab2:row8:col1, Tab2:row8:col2 |
| IgG on CL (θCL_IGGBL) | `Q900` · equation variable | 0.170 | θCL_IGGBL |  |  | iggbl·θcl_ | llm_corrected (0.6) | Tab2:row16:col1, Tab2:row16:col2 |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.929 |  |  |  |  |  | Tab2:row11:col1, Tab2:row11:col2 |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.542 |  |  |  |  |  | Tab2:row12:col1, Tab2:row12:col2 |
| theta_equation_variable_albumin | `Q900` · theta_equation_variable_albumin | 10.3 |  |  |  |  |  | Tab2:row13:col2 |
| theta_v1_albumin | `Q900` · theta_v1_albumin | 17.9 |  |  |  |  |  | Tab2:row14:col2 |
| theta_v1_bmi | `Q900` · theta_v1_bmi | 12.4 |  |  |  |  |  | Tab2:row17:col2 |
| theta_cl_race | `Q900` · theta_cl_race | 0.861 |  |  |  |  |  | Tab2:row21:col1, Tab2:row21:col2 |
| theta_v2_albumin | `Q900` · theta_v2_albumin | 0.567 |  |  |  |  |  | Tab2:row25:col1, Tab2:row25:col2 |
| CL | `Q900` · CL | 0.926 | L/day | 1.072e-08 | m3/s |  |  | Tab2:row3:col1, Tab2:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL (L/day) | Q22 | exact |
| IMAXi | Q323 | boundary |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive error variance on log scale ((log(ng/mL))2)' routed out of structural estimates ('Residual error')
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row7:col2'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row9:col1', 'Tab2:row9:col2'])
- unit_dimension_unknown: 'θCL_SBCMABL' (CL)
- dropped duplicate Q22 ('sBCMA on CL (θCL_SBCMABL)', value '0.113') — already have one for this compound
- unit_dimension_unknown: 'θCL_IGGBL' (equation variable)
- unit_dimension_unknown: 'θADC Vc_SBCMABL' (V1)
- dropped duplicate Q63 ('sBCMA on ADC Vc (θADC Vc_SBCMABL)', value '0.0401') — already have one for this compound
- dropped unlinked row (NIL): 'Asian race on CL (θCL_RACEA)' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col1', 'Tab2:row20:col2'])
- dropped PD-category row 'Combination therapy on Imax (θIMAX_COMBO)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row22:col1', 'Tab2:row22:col2'])
- dropped PD-category row 'IgG on Imax (θIMAX_IGGBL)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row23:col1', 'Tab2:row23:col2'])
- dropped PD-category row 'sBCMA on Imax (θIMAX_SBCMABL)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row24:col1', 'Tab2:row24:col2'])
- dropped duplicate Q22 ('On CL', value '26.1') — already have one for this compound
- dropped duplicate Q63 ('On ADC Vc', value '20.0') — already have one for this compound
- dropped duplicate Q30 ('On Q', value '19.0') — already have one for this compound
- dropped duplicate Q64 ('On ADC Vp', value '30.6') — already have one for this compound
- dropped PD-category row 'On Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row32:col1', 'Tab2:row32:col2'])
- dropped unlinked row (NIL): 'On TI50' — extend the ontology if this is a real PK parameter (source ['Tab2:row33:col1', 'Tab2:row33:col2'])
- dropped duplicate Q22 ('CLi = θCL·exp(CL,Time)·(ALBBL/40)θCL_ALBBL · (SBCMABL/50)θCL_SBCMABL · (IGGBL/15)θCL_IGGBL', value None) — already have one for this compound
- unit_dimension_unknown: 'ηCL' (CL)
- dropped duplicate Q22 ('(WTBL/75)θCL_WTBL· (θCL_RACEA) [if Asian] · (θCL_RACEB) [if AA] · exp(ηCL)', value None) — already have one for this compound
- unit_dimension_unknown: 'ηADC Vc' (V1)
- dropped duplicate Q63 ('ADC Vci = θADC Vc · (WTBL/75)θV_WTBL · (ALBBL/40)θADC Vc_ALBBL · (IBMIBL/27)θADC Vc_IBMIBL · (SBCMABL/50)θADC Vc_SBCMABL · exp(ηADC Vc)', value None) — already have one for this compound
- unit_dimension_unknown: 'ηQ' (Q)
- dropped duplicate Q30 ('Qi = θQ · (WTBL/75)θCL_WTBL · exp(ηQ)', value None) — already have one for this compound
- unit_dimension_unknown: 'ηADC Vp' (V2)
- dropped duplicate Q64 ('ADC Vpi = θADC Vp·(WTBL/75)θV_WTBL·(ALBBL/40)θADC Vp_ALBBL ·exp(ηADC Vp)', value None) — already have one for this compound
- dropped PD-category row 'IMAXi = θIMAX · (θIMAX_COMBO) [if not monotherapy] · (IGGBL/15)θIMAX_IGGBL · (SBCMABL/50)θIMAX_SBCMABL + (ηIMAX)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row42:col1', 'Tab2:row42:col2', 'Tab2:row42:col3', 'Tab2:row42:col4'])
- unit_dimension_unknown: 'ηTI50' (equation variable)
- dropped duplicate Q900 ('TI50i = θTI50 · (IGGBL/15)θΤΙ50_IGGBL · exp(ηTI50)', value None) — already have one for this compound
- dropped duplicate Q22 ('CL,Time = [(IMAXi·Time^Gamma)/(TI50i^Gamma+Time^Gamma)]', value None) — already have one for this compound
- routed 'Log-normal distribution CV% = SQRT(exp(Ω) − 1) · 100 and normal distribution CV% = (SQRT(Ω)/θ) ·100' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab_mafodotin ADC and cys-mcMMAF
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- bound model equation to Q22 (CL): CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- model equation 'Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)' not bound — neither LHS nor base term 'θQ' linked to an ontology parameter
- bound model equation to Q323 (Imax): IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- model equation 'TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)' not bound — neither LHS nor base term 'θTI50' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL (L/day)'; equation kept verbatim
- Q323 (Imax) is equation-defined: value moved to equation-variable 'IMAXi'; equation kept verbatim
- status held at route_to_review — not promoted
- model-stage split: 'adc final model' is the final model of Papathanasiou_2025 (paper reports 5 stages: adc final model, adc, % changeb, covariate valuesa, cys-mcmmaf final model, cys-mcmmaf, % changeb); same population, different model-building step
- row roles (LLM): model_class=compartmental; 75/75 row label(s) assigned, 54 linked by role; re-tagged belantamab_mafodotin ADC→cys-mcMMAF ×63
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC' ('belantamab mafodotin') — left in mass units
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC and cys-mcMMAF' ('belantamab mafodotin and cysteine maleimidocaproyl monomethyl auristatin F') — left in mass units
- molar mass: none found for 'belantamab_mafodotin ADC' — its concentrations stay mass-only
- molar mass: none found for 'belantamab_mafodotin ADC and cys-mcMMAF' — its concentrations stay mass-only

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.067 (2/30 fields) | 28 |

<details><summary>28 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['belantamab_mafodotin adc', 'cys-mcmmaf', 'metabolism']] | [['belantamab_mafodotin', 'cys-mcmmaf', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[adc vc]` |  | 4.21 | only_one_extracted |
| `qwen3.8-27b` | `parameters[adc vc]` | 4.21 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[adc vp]` |  | 6.63 | only_one_extracted |
| `qwen3.8-27b` | `parameters[adc vp]` | 6.63 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` |  | 0.926 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[igg on cl]` | 0.170 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[imaxi]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[imaxi]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[on adc vc]` |  | 20.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` |  | 0.711 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` | 0.711 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_race]` |  | 0.861 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_race]` | 0.861 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_albumin]` | 10.3 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_albumin]` |  | 10.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_race]` |  | 0.913 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_weight]` |  | 0.542 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` |  | 0.929 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.929 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin]` | 17.9 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_bmi]` | 12.4 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_albumin]` | 0.567 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ti50]` | 66.4 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ti50i = θti50 (iggbl/15)θτι50_iggbl exp]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | belantamab_mafodotin ADC and cys-mcMMAF | belantamab_mafodotin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row8:col1', 'Tab2:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.21 L | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.63 L | ['Tab2:row6:col1', 'Tab2:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | note |
|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 43.7 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.498 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.976 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 22.9 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.0 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 16.8 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 19.1 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.2 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 17 | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelantamab_mafodotin%5D%20BelantamabMafodotin_Papathanasiou2025_final&body=Drug%3A%20belantamab_mafodotin%0ARecord%3A%20BelantamabMafodotin_Papathanasiou2025_final%0APaper%3A%20Papathanasiou_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Papathanasiou2025_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:53 UTC</sub>
