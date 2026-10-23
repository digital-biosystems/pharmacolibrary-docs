<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;capivasertib&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/&quot;},{&quot;label&quot;:&quot;Fernandez_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capivasertib_Fernandez2025_reference&quot;,&quot;label&quot;:&quot;Fernandez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capivasertib — `Capivasertib_Fernandez2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00146, model 0.000174); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="capivasertib" model-id="Capivasertib_Fernandez2025_reference" status="needs_review" stale="false" population="patients with cancer from six Phase I–III trials" measured-compound="capivasertib" parameterization="apparent" topology="2C"></div>

## Citation
Fernandez Teruel C, Cullberg M, González-García I, Schiavon G, Zhang L, Zhou D. Population Pharmacokinetics and Exposure-Response Analyses for Capivasertib in Combination With Fulvestrant in Patients With Breast Cancer. Clinical and translational science 18(7):e70286 (2025).
  ·  DOI: [10.1111/cts.70286](https://doi.org/10.1111/cts.70286)

## Population and dosing

**Population:** patients with cancer from six Phase I–III trials · condition advanced cancer · age group adult · n = 851.

**Dosing:** 80, 800 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, Q3/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference.svg" alt="Capivasertib_Fernandez2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| First‐order absorption rate constant; Ka (1/h) | kabs | 0.441 | 1/h | 0.045 |  |
| Initial apparent clearance; CL0/F (L/h) | CL/F | 59.6 | L/h | 0.0509 | 38.2 (4.36% RSE) |
| Apparent volume of distribution of central compartment; V2/F (L) | V1/F | 49 | L | 0.0549 | 103 (5.64% RSE) |
| Apparent volume of distribution of first peripheral compartment; V3/F (L) | V2/F | 113 | L | 2.42 |  |
| Apparent inter‐compartmental clearance of first peripheral compartment; Q3/F (L/h) | Q3/F | 2.52 | L/h | 0.151 |  |
| Logit of fraction of dose absorbed as first‐order (LogitF1) | Fab | 1.6 | LogitF1 | 4.82 |  |
| Time (h) at which inhibition of CL/F is reduced by half (T50) | equation variable | 126 | T50 | 0.105 |  |
| Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F) | Q/F | 23.4 | L/h | 0.0557 |  |
| Apparent volume of distribution of second peripheral compartment, L (V4/F) | V3/F | 103 | L | 0.0508 |  |
| Duration of zero‐order absorption; hours (D2) | D1 | 45 | h | 0.748 |  |
| Relationship between CL0/F and body weight (CL0_BBW) | allometric_exponent | 0.302 | CL0_BBW | 0.146 |  |
| theta_q83_category | theta_q83_category | 0.468 |  | 0.152 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.88). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00146, model 0.000174); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Fab, equation variable and allometric_exponent), so that value has no SI equivalent. Extracted — capivasertib: kabs 0.441 1/h, CL/F 59.6 L/h, V1/F 49 L, V2/F 113 L, Q3/F 2.52 L/h, Fab 1.6 LogitF1, Q/F 23.4 L/h, V3/F 103 L, … (+2).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of duration of zero‐order absorption; hours: this record has 45, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| First‐order absorption rate constant; Ka (1/h) | `Q49` · kabs | 0.441 | 1/h | 0.0001225 | 1/s | 1/h | 0.045 | llm_confirmed (0.6) | cts70286-tbl-0002:row1:col1, cts70286-tbl-0002:row1:col2 |  |
| Initial apparent clearance; CL0/F (L/h) | `Q27` · CL/F | 59.6 | L/h | 1.656e-05 | m3/s | l/h | 0.0509 | llm_confirmed (0.6) | cts70286-tbl-0002:row2:col1, cts70286-tbl-0002:row2:col2 | 38.2 (4.36% RSE) |
| Apparent volume of distribution of central compartment; V2/F (L) | `Q290` · V1/F | 49 | L | 0.049 | m3 | l | 0.0549 | boundary_compartment (0.9) | cts70286-tbl-0002:row3:col1, cts70286-tbl-0002:row3:col2 | 103 (5.64% RSE) |
| Apparent volume of distribution of first peripheral compartment; V3/F (L) | `Q82` · V2/F | 113 | L | 0.113 | m3 | l | 2.42 | boundary_compartment (0.9) | cts70286-tbl-0002:row4:col1, cts70286-tbl-0002:row4:col2 |  |
| Apparent inter‐compartmental clearance of first peripheral compartment; Q3/F (L/h) | `Q309` · Q3/F | 2.52 | L/h | 7e-07 | m3/s | l/h | 0.151 | llm_corrected (0.6) | cts70286-tbl-0002:row5:col1, cts70286-tbl-0002:row5:col2 |  |
| Logit of fraction of dose absorbed as first‐order (LogitF1) | `Q40` · Fab | 1.6 | LogitF1 |  |  | l·ogitf1 | 4.82 | llm (0.6) | cts70286-tbl-0002:row8:col1, cts70286-tbl-0002:row8:col2 |  |
| Time (h) at which inhibition of CL/F is reduced by half (T50) | `Q900` · equation variable | 126 | T50 |  |  | t50 | 0.105 | llm_corrected (0.6) | cts70286-tbl-0002:row9:col1, cts70286-tbl-0002:row9:col2 |  |
| Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F) | `Q69` · Q/F | 23.4 | L/h | 6.5e-06 | m3/s | L/h | 0.0557 | llm_corrected (0.6) | cts70286-tbl-0002:row10:col1, cts70286-tbl-0002:row10:col2 |  |
| Apparent volume of distribution of second peripheral compartment, L (V4/F) | `Q78` · V3/F | 103 | L | 0.103 | m3 | L | 0.0508 | boundary_compartment (0.9) | cts70286-tbl-0002:row11:col1, cts70286-tbl-0002:row11:col2 |  |
| Duration of zero‐order absorption; hours (D2) | `Q310` · D1 | 45 | h | 1.62e+05 | s | h | 0.748 | llm_corrected (0.6) | cts70286-tbl-0002:row12:col1, cts70286-tbl-0002:row12:col2 |  |
| Relationship between CL0/F and body weight (CL0_BBW) | `Q319` · allometric_exponent | 0.302 | CL0_BBW |  |  | bbw·cl0_ | 0.146 | llm (0.6) | cts70286-tbl-0002:row17:col1, cts70286-tbl-0002:row17:col2 |  |
| theta_q83_category | `Q900` · theta_q83_category | 0.468 |  |  |  |  | 0.152 |  | cts70286-tbl-0002:row7:col1, cts70286-tbl-0002:row7:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'Maximum inhibition of CL/F; I max' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70286-tbl-0002:row6:col1', 'cts70286-tbl-0002:row6:col2'])
- unit_dimension_unknown: 'LogitF1' (Fab)
- unit_dimension_unknown: 'T50' (equation variable)
- unit_dimension_unknown: 'Q4/F' (Q/F)
- unit_dimension_unknown: 'V4/F' (V3/F)
- unit_dimension_unknown: 'D2' (D1)
- dropped unlinked row (NIL): 'Relationship between I max and planned capivasertib dose (I max_dose)' — extend the ontology if this is a real PK parameter (source ['cts70286-tbl-0002:row15:col1', 'cts70286-tbl-0002:row15:col2'])
- unit_dimension_unknown: 'CL0_BBW' (allometric_exponent)
- unit_dimension_unknown: 'F1_BBW' (equation variable)
- dropped duplicate Q900 ('Relationship between LogitF1 and body weight (F1_BBW)', value '-1.27') — already have one for this compound
- unit_dimension_unknown: 'CL0_AGE' (CL/F)
- dropped duplicate Q27 ('Relationship between CL0/F and age (CL0_AGE)', value '-0.314') — already have one for this compound
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q83 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'First‐order absorption rate constant; Ka (1/h)' → 1/h (from the paper text: 'The parameter is labeled “First‐order absorption rate constant; Ka (1/h) = 0.441.”')
- implicit units: 'Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F)' → L/h (from the paper text: 'The parameter is labeled “Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F) = 23.4.”')
- implicit units: 'Apparent volume of distribution of second peripheral compartment, L (V4/F)' → L (from the paper text: 'The parameter is labeled “Apparent volume of distribution of second peripheral compartment, L (V4/F) = 103.”')
- implicit units: 'Duration of zero‐order absorption; hours (D2)' → h (from the paper text: 'The parameter is labeled “Duration of zero‐order absorption; hours (D2) = 45.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=capivasertib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts70286-tbl-0002:row1:col3 = '0.441 (0.358, 0.538)'
- unparsed cell cts70286-tbl-0002:row2:col3 = '59.3 (56.8, 62)'
- unparsed cell cts70286-tbl-0002:row3:col3 = '49.7 (36.7, 68.9)'
- unparsed cell cts70286-tbl-0002:row4:col3 = '116 (95.7, 137)'
- unparsed cell cts70286-tbl-0002:row5:col3 = '2.36 (1.43, 3.38)'
- unparsed cell cts70286-tbl-0002:row6:col3 = '−1.81 (−2.53, −1.44)'
- unparsed cell cts70286-tbl-0002:row7:col3 = '0.461 (0.405, 0.505)'
- unparsed cell cts70286-tbl-0002:row8:col3 = '1.47 (1.16, 2.18)'
- unparsed cell cts70286-tbl-0002:row9:col3 = '127 (63.3, 144)'
- unparsed cell cts70286-tbl-0002:row10:col3 = '23 (16.5, 31.6)'
- unparsed cell cts70286-tbl-0002:row11:col3 = '98.7 (74, 159)'
- unparsed cell cts70286-tbl-0002:row12:col3 = '45 (43.6, 45.6)'
- unparsed cell cts70286-tbl-0002:row13:col3 = '0.928 (0.516, 1.58)'
- unparsed cell cts70286-tbl-0002:row14:col3 = '44.9 (40.4, 49.2)'
- unparsed cell cts70286-tbl-0002:row15:col3 = '−0.00209 (−0.00253, −0.00133)'
- unparsed cell cts70286-tbl-0002:row16:col3 = '0.287 (0.223, 0.334)'
- unparsed cell cts70286-tbl-0002:row17:col3 = '0.334 (0.189, 0.492)'
- unparsed cell cts70286-tbl-0002:row18:col3 = '−1.2 (−1.62, −0.811)'
- unparsed cell cts70286-tbl-0002:row19:col3 = '−0.319 (−0.476, −0.151)'
- unparsed cell cts70286-tbl-0002:row20:col3 = '37.5 (32.4, 42.4)'
- unparsed cell cts70286-tbl-0002:row21:col3 = '103 (75.7, 143)'
- unparsed cell cts70286-tbl-0002:row22:col3 = '89.1 (54.5, 132)'
- unparsed cell cts70286-tbl-0002:row23:col3 = '73.2 (60.2, 95.5)'
- unparsed cell cts70286-tbl-0002:row24:col3 = '66.4 (51.2, 78.3)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.88 (22/25 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[duration of zero‐order absorption; hours]` | 45 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[logit of fraction of dose absorbed as first‐order]` | 1.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[time (h) at which inhibition of cl/f is reduced by half]` | 126 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70286-tbl-0002:row2:col1', 'cts70286-tbl-0002:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts70286-tbl-0002:row3:col1', 'cts70286-tbl-0002:row3:col2'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['cts70286-tbl-0002:row5:col1', 'cts70286-tbl-0002:row5:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['cts70286-tbl-0002:row12:col1', 'cts70286-tbl-0002:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70286-tbl-0002:row1:col1', 'cts70286-tbl-0002:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts70286-tbl-0002:row10:col1', 'cts70286-tbl-0002:row10:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['cts70286-tbl-0002:row11:col1', 'cts70286-tbl-0002:row11:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts70286-tbl-0002:row4:col1', 'cts70286-tbl-0002:row4:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 59.6 L/h | ['cts70286-tbl-0002:row2:col1', 'cts70286-tbl-0002:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49 L | ['cts70286-tbl-0002:row3:col1', 'cts70286-tbl-0002:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 113 L | ['cts70286-tbl-0002:row4:col1', 'cts70286-tbl-0002:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=capivasertib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.00146 | 0.0001739 | 0.1191 | μg/L→SI vs simulated kg/m3 |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_modelica.zip" download>Capivasertib_Fernandez2025_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_fmi.zip" download>Capivasertib_Fernandez2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_matlab.zip" download>Capivasertib_Fernandez2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_matlab_simbio.zip" download>Capivasertib_Fernandez2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_sbml.zip" download>Capivasertib_Fernandez2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_cellml.zip" download>Capivasertib_Fernandez2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4289 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8e-05 | kg |
| input | model | `Cl` | 1.656e-05 | m3/s |
| input | model | `VdPerKg` | 0.0007 | m3/kg |
| input | model | `k12` | 0.0001327 | 1/s |
| input | model | `k21` | 5.752e-05 | 1/s |
| input | model | `ka` | 0.0001225 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fernandez Teruel C, Cullberg M, González-García I, Schiavon G, Zhang L, Zhou D. Population Pharmacokinetics and Exposure-Response Analyses for Capivasertib in Combination With Fulvestrant in Patients With Breast Cancer. Clinical and translational science 18(7):e70286 (2025). [doi:10.1111/cts.70286](https://doi.org/10.1111/cts.70286)

**This record:** Pharmacolibrary v26.09, model `Capivasertib_Fernandez2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference>

```bibtex
@misc{pharmacolibrary_CapivasertibFernandez2025reference,
  title  = {{Pharmacolibrary model Capivasertib_Fernandez2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference},
  note   = {Parameters from doi:10.1111/cts.70286},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.441 /h, F 1). Doses in the paper: 80–800 mg.

<dbs-fmusim paramsurl="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Capivasertib_Fernandez2025_reference_params.json` · controls `Capivasertib_Fernandez2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapivasertib%5D%20Capivasertib_Fernandez2025_reference&body=Drug%3A%20capivasertib%0ARecord%3A%20Capivasertib_Fernandez2025_reference%0APaper%3A%20Fernandez_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:20 UTC</sub>
