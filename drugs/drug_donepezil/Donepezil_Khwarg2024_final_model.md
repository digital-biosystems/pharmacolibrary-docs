<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Khwarg_2024 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Khwarg2024_final_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The donepezil model was held back because oral bioavailability F was left at a library default instead of an estimate from Khwarg_2024.**

All other donepezil parameters (kabs 0.21 1/h, CL 14.35 L/h, V 40.737 L, Q 86.514 L/h, tlag 0.931 h) were extracted, but F1 oral bioavailability has no value in the record. The model builder substituted a default for F, so the simulated exposure would rest on a placeholder not supported by the paper. The deviations check flagged this as unacceptable, and the record was marked needs_review. Extracted — donepezil: kabs 0.21 1/h, CL 14.3 L/h, V 40.7 L, Q 86.5 L/h, tlag 0.931 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f1 oral bioavailability: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Khwarg J et al., Population Pharmacokinetic Modeling and…, Neurology and therapy (2024)
  ·  DOI: [10.1007/s40120-024-00643-4](https://doi.org/10.1007/s40120-024-00643-4)

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Khwarg2024_final_model" status="needs_review" stale="false" population="healthy adults" measured-compound="donepezil" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant (depot 1) | `Q49` · kabs | 0.21 | 1/h | 5.833333333333333e-05 | 1/h | not captured | exact (1.0) | Tab2:row3:col5 | — | not captured |
| Clearance | `Q22` · CL | 14.35 | L/h | 3.986111111111111e-06 | L/h | not captured | exact (1.0) | Tab2:row4:col2, Tab2:row4:col5 | — | 0.045 (None% RSE) |
| Volume of distribution (central) | `Q61` · V | 40.737 | L | 0.040737 | L | not captured | exact (1.0) | Tab2:row5:col5 | — | 1.498 (None% RSE) |
| Intercompartmental clearance | `Q30` · Q | 86.514 | L/h | 2.4031666666666666e-05 | L/h | not captured | exact (1.0) | Tab2:row6:col2, Tab2:row6:col5 | — | not captured |
| Absorption lag time (depot 1) | `Q83` · tlag | 0.931 | h | 3351.6000000000004 | h | not captured | exact (1.0) | Tab2:row8:col2, Tab2:row8:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F1 oral bioavailability | Q40 | not captured | llm_confirmed |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section covariance: 'IIV volume of distribution (peripheral)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'IIV oral bioavailability' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Proportional error' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Additive error' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Intramuscular' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Fraction of dose (depot 5)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption rate constant (depot 4)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption rate constant (depot 5)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Clearance' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Volume of distribution (central)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Intercompartmental clearance' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Volume of distribution (peripheral)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Duration of zero order absorption' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption lag time (depot 4)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Absorption lag time (depot 5)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'IIV on clearance' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'IIV on volume of distribution (central)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- table section covariance: 'Covariance clearance vs volume of distribution (central)' routed out of structural estimates ('Covariance clearance vs. volume of distribution (central)')
- dropped unlinked row (NIL): 'Oral' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col3'])
- unit_dimension_unknown: 'depot 1' (kabs)
- unit_dimension_unknown: 'central' (V)
- unit_dimension_unknown: 'peripheral' (V)
- dropped duplicate Q61 ('Volume of distribution (peripheral)', value '1073.55') — already have one for this compound
- unit_dimension_unknown: 'depot 1' (tlag)
- implicit units: 'Absorption rate constant (depot 1)' → 1/h (from the popPK convention: 'No unit stated for absorption rate constant; first-order rate constants conventionally in 1/h, and 0.21 1/h is consisten')
- implicit units: 'Clearance' → L/h (from the popPK convention: 'No unit stated for CL in the population table; clearances conventionally in L/h, consistent with CL/F = dose/AUCinf for ')
- implicit units: 'Volume of distribution (central)' → L (from the paper text: "Text states 'The estimated parameter for central Vd showed a significant difference between the oral and IM formulations")
- implicit units: 'Intercompartmental clearance' → L/h (from the popPK convention: 'No unit stated for Q; intercompartmental clearances conventionally in L/h, consistent with the magnitude 86.514.')
- implicit units: 'Absorption lag time (depot 1)' → h (from the popPK convention: 'No unit stated for lag time; absorption lag times conventionally in h, consistent with 0.931 h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'final model' subgroup of Khwarg_2024 (paper reports 2 populations: bootstrapa, final model)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = 'F1'
- unparsed cell Tab2:row3:col2 = '0.203 h−1'
- unparsed cell Tab2:row3:col3 = '11.40%'
- unparsed cell Tab2:row4:col3 = '6.50%'
- unparsed cell Tab2:row5:col1 = 'V2'
- unparsed cell Tab2:row5:col2 = '39.5 L'
- unparsed cell Tab2:row5:col3 = '36.50%'
- unparsed cell Tab2:row6:col3 = '9.60%'
- unparsed cell Tab2:row7:col1 = 'V3'
- unparsed cell Tab2:row7:col2 = '1080 L'
- unparsed cell Tab2:row7:col3 = '5.90%'
- unparsed cell Tab2:row8:col1 = 'ALAG1'
- unparsed cell Tab2:row8:col3 = '1.70%'
- unparsed cell Tab2:row9:col2 = '0.0475 (22.1%)b'
- unparsed cell Tab2:row9:col3 = '39.20%'
- unparsed cell Tab2:row9:col4 = '48.30%'
- unparsed cell Tab2:row10:col2 = '1.59 (197.6%)b'
- unparsed cell Tab2:row10:col3 = '31.10%'
- unparsed cell Tab2:row10:col4 = '45.60%'
- unparsed cell Tab2:row12:col2 = '0.0153 (12.4%)b'
- unparsed cell Tab2:row12:col3 = '44.10%'
- unparsed cell Tab2:row12:col4 = '61%'
- unparsed cell Tab2:row13:col2 = '0.0162 (12.8%)b'
- unparsed cell Tab2:row13:col3 = '28.60%'
- unparsed cell Tab2:row13:col4 = '50.70%'
- unparsed cell Tab2:row14:col3 = '11.50%'
- unparsed cell Tab2:row15:col3 = '13%'
- unparsed cell Tab2:row16:col2 = 'F4'
- unparsed cell Tab2:row16:col4 = '1.90%'
- unparsed cell Tab2:row17:col1 = 'F5'
- unparsed cell Tab2:row17:col3 = '11.20%'
- unparsed cell Tab2:row18:col1 = 'KA4'
- unparsed cell Tab2:row18:col2 = '0.00402 h−1'
- unparsed cell Tab2:row18:col3 = '6.70%'
- unparsed cell Tab2:row19:col1 = 'KA5'
- unparsed cell Tab2:row19:col2 = '0.0134 h−1'
- unparsed cell Tab2:row19:col3 = '17.20%'
- unparsed cell Tab2:row19:col6 = '(0.011—0.034)'
- unparsed cell Tab2:row20:col3 = '6.10%'
- unparsed cell Tab2:row21:col1 = 'V2'
- unparsed cell Tab2:row21:col2 = '503 L'
- unparsed cell Tab2:row21:col3 = '29%'
- unparsed cell Tab2:row22:col3 = '18.10%'
- unparsed cell Tab2:row23:col1 = 'V3'
- unparsed cell Tab2:row23:col2 = '1160 L'
- unparsed cell Tab2:row23:col3 = '8.30%'
- unparsed cell Tab2:row24:col1 = 'D2'
- unparsed cell Tab2:row24:col3 = '0.20%'
- unparsed cell Tab2:row25:col1 = 'ALAG4'
- unparsed cell Tab2:row25:col3 = '0.50%'
- unparsed cell Tab2:row26:col1 = 'ALAG5'
- unparsed cell Tab2:row26:col3 = '0.20%'
- unparsed cell Tab2:row27:col2 = '0.0936 (31.3%)b'
- unparsed cell Tab2:row27:col3 = '24%'
- unparsed cell Tab2:row27:col4 = '18.10%'
- unparsed cell Tab2:row28:col2 = '1.13 (144.8%)b'
- unparsed cell Tab2:row28:col3 = '39.70%'
- unparsed cell Tab2:row28:col4 = '20.70%'
- unparsed cell Tab2:row29:col3 = '55.20%'
- unparsed cell Tab2:row29:col6 = '(− 0.02–0.239)'
- unparsed cell Tab2:row30:col3 = '5%'
- unparsed cell Tab2:row31:col3 = '14.40%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f1 oral bioavailability]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row8:col2', 'Tab2:row8:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.35 | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.3 L/h | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 40.7 L | not captured | not captured | ['Tab2:row5:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=donepezil) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.012 | 6.137018647805846e-05 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | not captured | 6.137018647805846e-05 | not captured | non-numeric value |
| T1_cmax | reference | skipped | not captured | 6.137018647805846e-05 | not captured | non-numeric value |
| T1_t_half_beta | reference | skipped | not captured | 3.456317717746295 | not captured | non-numeric value |
| T1_t_half_beta | reference | skipped | not captured | 3.456317717746295 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 4.6593186372745485 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_donepezil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Khwarg_2024` / `Khwarg_2024::final_model`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_donepezil/models/modelica/Donepezil_Khwarg2024_final_model.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_donepezil/models/modelica/Donepezil_Khwarg2024_final_model.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_donepezil/models/modelica/Donepezil_Khwarg2024_final_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_modelica.zip" download>Donepezil_Khwarg2024_final_model_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_fmi.zip" download>Donepezil_Khwarg2024_final_model_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_matlab.zip" download>Donepezil_Khwarg2024_final_model_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_matlab_simbio.zip" download>Donepezil_Khwarg2024_final_model_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_sbml.zip" download>Donepezil_Khwarg2024_final_model_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_cellml.zip" download>Donepezil_Khwarg2024_final_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model.svg" alt="Donepezil_Khwarg2024_final_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.21 /h, lag 55.9 min, F 0.9). Doses in the paper: 10, 70, 140, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_donepezil/Donepezil_Khwarg2024_final_model/Donepezil_Khwarg2024_final_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Donepezil_Khwarg2024_final_model_params.json` · controls `Donepezil_Khwarg2024_final_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:30 UTC</sub>
