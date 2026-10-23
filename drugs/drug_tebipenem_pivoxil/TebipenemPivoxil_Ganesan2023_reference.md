<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;tebipenem pivoxil&quot;,&quot;href&quot;:&quot;drugs/drug_tebipenem_pivoxil/&quot;},{&quot;label&quot;:&quot;Ganesan_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TebipenemPivoxil_Ganesan2023_reference&quot;,&quot;label&quot;:&quot;Ganesan_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tebipenem pivoxil — `TebipenemPivoxil_Ganesan2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="tebipenem pivoxil" model-id="TebipenemPivoxil_Ganesan2023_reference" status="accepted_with_caveats" stale="false" population="adults with cUTI/AP and healthy adults" measured-compound="tebipenem" parameterization="apparent" topology="2C"></div>

## Citation
Ganesan H, Gupta VK, Safir MC, Bhavnani SM, Talley AK, Melnick D et al. Population Pharmacokinetic Analyses for Tebipenem after Oral Administration of Pro-Drug Tebipenem Pivoxil Hydrobromide. Antimicrobial agents and chemotherapy 67(6):e0145122 (2023).
  ·  DOI: [10.1128/aac.01451-22](https://doi.org/10.1128/aac.01451-22)

## Population and dosing

**Population:** adults with cUTI/AP and healthy adults · age group mixed · n = condition.

**Dosing:** 600 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed tebipenem_pivoxil, measured tebipenem.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference.svg" alt="TebipenemPivoxil_Ganesan2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CLNR | CLNR | 15.6 | L/h |  |
| CL/F:BSA (slope) | CL/F | 0.479 | L/h |  |
| Vc/F | V1/F | 38.5 | L | 10.6 (None% RSE) |
| CLd/F | Q/F | 2.23 | L/h |  |
| Vp/F | V2/F | 4.84 | L | 46.4 (None% RSE) |
| Ka (fasted) | kabs | 1.23 | 1/h | 8.46 (None% RSE) |
| theta_clnr_weight_power | theta_clnr_weight_power | 0.722 |  |  |
| theta_v1_f_weight_power | theta_v1_f_weight_power | 2.09 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is tebipenem pivoxil's own; they describe tebipenem.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tebipenem_pivoxil, the second reading tebipenem pivoxil hydrobromide; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CLNR | `Q79` · CLNR | 15.6 | L/h | 4.333e-06 | m3/s | L/h | exact (1) | T2:row2:col1, T2:row2:col2, T2:row2:col4, T2:row2:col5, T2:row2:col6 |  |
| CL/F:BSA (slope) | `Q27` · CL/F | 0.479 | L/h | 1.331e-07 | m3/s | L/h | llm_confirmed (0.6) | T2:row7:col1, T2:row7:col2, T2:row7:col4, T2:row7:col5, T2:row7:col6 |  |
| Vc/F | `Q290` · V1/F | 38.5 | L | 0.0385 | m3 | L | exact (1) | T2:row8:col1, T2:row8:col2, T2:row8:col4, T2:row8:col5, T2:row8:col6 | 10.6 (None% RSE) |
| CLd/F | `Q69` · Q/F | 2.23 | L/h | 6.194e-07 | m3/s | L/h | exact (1) | T2:row11:col1, T2:row11:col2, T2:row11:col4, T2:row11:col5, T2:row11:col6 |  |
| Vp/F | `Q82` · V2/F | 4.84 | L | 0.00484 | m3 | L | exact (1) | T2:row12:col1, T2:row12:col2, T2:row12:col4, T2:row12:col5, T2:row12:col6 | 46.4 (None% RSE) |
| Ka (fasted) | `Q49` · kabs | 1.23 | 1/h | 0.0003417 | 1/s | 1/h | exact (1) | T2:row15:col1, T2:row15:col2, T2:row15:col4, T2:row15:col5, T2:row15:col6 | 8.46 (None% RSE) |
| theta_clnr_weight_power | `Q900` · theta_clnr_weight_power | 0.722 |  |  |  |  |  | T2:row3:col1, T2:row3:col2, T2:row3:col4, T2:row3:col5, T2:row3:col6 |  |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | 2.09 |  |  |  |  |  | T2:row10:col1, T2:row10:col2, T2:row10:col4, T2:row10:col5, T2:row10:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'Parameter'
- dropped unlinked row (NIL): 'CLR, MAX' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'])
- dropped unlinked row (NIL): 'CLR, CLcr 50' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5', 'T2:row5:col6'])
- dropped PD-category row 'CLR, Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'])
- unit_dimension_unknown: 'slope' (CL/F)
- dropped duplicate Q290 ('Vc/F:Infection status', value '-0.29') — already have one for this compound
- dropped unlinked row (NIL): 'Vp/F:BSA (slope)' — extend the ontology if this is a real PK parameter (source ['T2:row13:col1', 'T2:row13:col2', 'T2:row13:col4', 'T2:row13:col5', 'T2:row13:col6'])
- dropped unlinked row (NIL): 'Vp/F:Infection status' — extend the ontology if this is a real PK parameter (source ['T2:row14:col1', 'T2:row14:col2', 'T2:row14:col4', 'T2:row14:col5', 'T2:row14:col6'])
- unit_dimension_unknown: 'fasted' (kabs)
- unit_dimension_unknown: 'fed' (kabs)
- dropped duplicate Q49 ('Ka (fed)', value '3.04') — already have one for this compound
- dropped duplicate Q49 ('Ka:Dose effect', value '-0.478') — already have one for this compound
- dropped unlinked row (NIL): 'Ka:Infection status' — extend the ontology if this is a real PK parameter (source ['T2:row18:col1', 'T2:row18:col2', 'T2:row18:col4', 'T2:row18:col5', 'T2:row18:col6'])
- dropped unlinked row (NIL): 'RVprop, plasma' — extend the ontology if this is a real PK parameter (source ['T2:row26:col2', 'T2:row26:col3', 'T2:row26:col4', 'T2:row26:col5', 'T2:row26:col6'])
- dropped unlinked row (NIL): 'RVprop, urine' — extend the ontology if this is a real PK parameter (source ['T2:row27:col2', 'T2:row27:col3', 'T2:row27:col4', 'T2:row27:col5', 'T2:row27:col6'])
- dropped unlinked row (NIL): 'RVadd, urine' — extend the ontology if this is a real PK parameter (source ['T2:row28:col1', 'T2:row28:col2', 'T2:row28:col3', 'T2:row28:col4', 'T2:row28:col5', 'T2:row28:col6'])
- implicit units: 'CLNR' → L/h (from the popPK convention: 'CLNR is a clearance parameter; in population PK, clearances are standardly expressed in L/h, consistent with the magnitu')
- implicit units: 'CL/F:BSA (slope)' → L/h (from the popPK convention: 'CL/F is a total clearance parameter; the base unit for clearance in population PK is L/h. The slope relates this to BSA,')
- implicit units: 'Vc/F' → L (from the popPK convention: 'Vc/F is a volume of distribution parameter; volumes in population PK are standardly expressed in L.')
- implicit units: 'CLd/F' → L/h (from the popPK convention: 'CLd/F is an intercompartmental clearance parameter; intercompartmental clearances are standardly expressed in L/h.')
- implicit units: 'Vp/F' → L (from the popPK convention: 'Vp/F is a volume of distribution parameter; volumes in population PK are standardly expressed in L.')
- implicit units: 'Ka (fasted)' → 1/h (from the popPK convention: 'Ka is a first-order rate constant for absorption; rate constants in population PK are standardly expressed in 1/h.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tebipenem
- review gap-fill skipped: this record measures 'tebipenem', not tebipenem_pivoxil — the review values are the parent's

**Extraction notes:**
- unparsed cell T2:row2:col7 = '[14.4, 17.1]'
- unparsed cell T2:row3:col7 = '[0.655, 0.802]'
- unparsed cell T2:row4:col7 = '[18.9, 23.5]'
- unparsed cell T2:row5:col7 = '[38.9, 51.5]'
- unparsed cell T2:row6:col7 = '[1.92, 2.34]'
- unparsed cell T2:row7:col7 = '[0.311, 0.625]'
- unparsed cell T2:row8:col7 = '[35.8, 41.3]'
- unparsed cell T2:row9:col7 = '[−0.396, −0.207]'
- unparsed cell T2:row10:col7 = '[1.26, 2.99]'
- unparsed cell T2:row11:col7 = '[1.82, 3]'
- unparsed cell T2:row12:col7 = '[4.3, 5.61]'
- unparsed cell T2:row13:col7 = '[0.306, 0.661]'
- unparsed cell T2:row14:col7 = '[−0.318, −0.153]'
- unparsed cell T2:row15:col7 = '[1.1, 1.39]'
- unparsed cell T2:row16:col7 = '[2.84, 3.3]'
- unparsed cell T2:row17:col7 = '[−0.522, −0.424]'
- unparsed cell T2:row18:col7 = '[0.168, 0.558]'
- unparsed cell T2:row19:col1 = '0.0614 (24.8 %CV)'
- unparsed cell T2:row19:col7 = '[0.0474, 0.0827]'
- unparsed cell T2:row20:col1 = '0.328 (57.2 %CV)'
- unparsed cell T2:row20:col7 = '[0.287, 0.366]'
- unparsed cell T2:row21:col1 = '0.197 (44.4 %CV)'
- unparsed cell T2:row21:col7 = '[0.157, 0.26]'
- unparsed cell T2:row22:col1 = '0.0115 (10.7 %CV)'
- unparsed cell T2:row22:col7 = '[0.00458, 0.0223]'
- unparsed cell T2:row23:col1 = '0.518 (71.9 %CV)'
- unparsed cell T2:row23:col7 = '[0.44, 0.617]'
- unparsed cell T2:row24:col1 = '0.201 (44.8 %CV)'
- unparsed cell T2:row24:col7 = '[0.102, 0.397]'
- unparsed cell T2:row25:col1 = '0.201 (44.8 %CV)'
- unparsed cell T2:row26:col1 = '0.209 (45.7 %CV)'
- unparsed cell T2:row26:col7 = '[0.198, 0.221]'
- unparsed cell T2:row27:col1 = '0.298 (54.6 %CV)'
- unparsed cell T2:row27:col7 = '[0.254, 0.355]'
- unparsed cell T2:row28:col7 = '[308, 752]'
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f:bsa].value` | 0.479 | 21 | mismatch |
| `gpt-oss-120b` | `parameters[cld/f].value` | 2.23 | 11 | mismatch |
| `gpt-oss-120b` | `parameters[clnr].value` | 15.6 | 5.87 | mismatch |
| `gpt-oss-120b` | `parameters[clr, max]` |  | 5.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 1.23 | 5.08 | mismatch |
| `gpt-oss-120b` | `parameters[rvprop, urine]` |  | 11.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_clnr_weight_power].value` | 0.722 | 5.92 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_f_weight_power].value` | 2.09 | 24.7 | mismatch |
| `gpt-oss-120b` | `parameters[vc/f].value` | 38.5 | 3.81 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f].value` | 4.84 | 6.6 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | tebipenem_pivoxil | tebipenem pivoxil hydrobromide | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col4', 'T2:row8:col5', 'T2:row8:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row15:col1', 'T2:row15:col2', 'T2:row15:col4', 'T2:row15:col5', 'T2:row15:col6'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row11:col1', 'T2:row11:col2', 'T2:row11:col4', 'T2:row11:col5', 'T2:row11:col6'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5', 'T2:row2:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.479 L/h | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 38.5 L | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col4', 'T2:row8:col5', 'T2:row8:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.84 L | ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tebipenem) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_modelica.zip" download>TebipenemPivoxil_Ganesan2023_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_fmi.zip" download>TebipenemPivoxil_Ganesan2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_matlab.zip" download>TebipenemPivoxil_Ganesan2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_matlab_simbio.zip" download>TebipenemPivoxil_Ganesan2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_sbml.zip" download>TebipenemPivoxil_Ganesan2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_cellml.zip" download>TebipenemPivoxil_Ganesan2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3835 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 1.331e-07 | m3/s |
| input | model | `VdPerKg` | 0.00055 | m3/kg |
| input | model | `k12` | 1.609e-05 | 1/s |
| input | model | `k21` | 0.000128 | 1/s |
| input | model | `ka` | 0.0003417 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ganesan H, Gupta VK, Safir MC, Bhavnani SM, Talley AK, Melnick D et al. Population Pharmacokinetic Analyses for Tebipenem after Oral Administration of Pro-Drug Tebipenem Pivoxil Hydrobromide. Antimicrobial agents and chemotherapy 67(6):e0145122 (2023). [doi:10.1128/aac.01451-22](https://doi.org/10.1128/aac.01451-22)

**This record:** Pharmacolibrary v26.09, model `TebipenemPivoxil_Ganesan2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference>

```bibtex
@misc{pharmacolibrary_TebipenemPivoxilGanesan2023reference,
  title  = {{Pharmacolibrary model TebipenemPivoxil_Ganesan2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference},
  note   = {Parameters from doi:10.1128/aac.01451-22},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 1.23 /h, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `TebipenemPivoxil_Ganesan2023_reference_params.json` · controls `TebipenemPivoxil_Ganesan2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btebipenem_pivoxil%5D%20TebipenemPivoxil_Ganesan2023_reference&body=Drug%3A%20tebipenem_pivoxil%0ARecord%3A%20TebipenemPivoxil_Ganesan2023_reference%0APaper%3A%20Ganesan_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:47 UTC</sub>
