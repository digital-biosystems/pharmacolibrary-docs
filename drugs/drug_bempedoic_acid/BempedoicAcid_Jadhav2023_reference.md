<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;bempedoic acid&quot;,&quot;href&quot;:&quot;drugs/drug_bempedoic_acid/&quot;},{&quot;label&quot;:&quot;Jadhav_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BempedoicAcid_Amore2023_reference&quot;,&quot;label&quot;:&quot;Amore_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bempedoic_acid/BempedoicAcid_Amore2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BempedoicAcid_Jadhav2023_reference&quot;,&quot;label&quot;:&quot;Jadhav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bempedoic acid — `BempedoicAcid_Jadhav2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.944), gpt-oss:120b (not confirmed, agreement 0.789). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The covariate scenarios were not simulated; t3_param_coverage.**

The base model was simulated, not the covariate effects the record defines. Extracted — bempedoic acid: CL/F 0.755 L/h, V/F 19.1 L, kabs 1.41 h−1, kcomp 0.184 h−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has bempedoic acid, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Jadhav SB et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023)
  ·  DOI: [10.1007/s10928-023-09864-w](https://doi.org/10.1007/s10928-023-09864-w)

<div class="pk-model-meta" hidden drug="bempedoic acid" model-id="BempedoicAcid_Jadhav2023_reference" status="needs_review" stale="false" population="healthy subjects and patients with dyslipidemia" measured-compound="bempedoic_acid" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 0.755 | L/h | 2.0972222222222223e-07 | [l] / [h] | not captured | exact (1.0) | Jadhav_2023_table_2:row0:col1, Jadhav_2023_table_2:row0:col2 | — | 29.7 (None% RSE) |
| Vc/F, L | `Q76` · V/F | 19.1 | L | 0.019100000000000002 | [l] | not captured | exact (1.0) | Jadhav_2023_table_2:row1:col1, Jadhav_2023_table_2:row1:col2 | — | 100 (None% RSE) |
| Ka, h−1 | `Q49` · kabs | 1.41 | h−1 | 0.00039166666666666663 | [1] / [h] | not captured | exact (1.0) | Jadhav_2023_table_2:row2:col1, Jadhav_2023_table_2:row2:col2 | — | 73.9 (None% RSE) |
| K23, h−1 | `Q48` · kcomp | 0.184 | h−1 | 5.111111111111111e-05 | [1] / [h] | not captured | exact (1.0) | Jadhav_2023_table_2:row3:col1, Jadhav_2023_table_2:row3:col2 | — | not captured |
| black_race | `Q900` · black_race | 18.0 | not captured | not captured | not captured | not captured | not captured (not captured) | Jadhav_2023_table_2:row9:col2 | — | not captured |
| egfr | `Q900` · egfr | 0.574 | not captured | not captured | not captured | not captured | not captured (not captured) | Jadhav_2023_table_2:row12:col1, Jadhav_2023_table_2:row12:col2 | — | not captured |
| age | `Q900` · age | 0.743 | not captured | not captured | not captured | not captured | not captured (not captured) | Jadhav_2023_table_2:row16:col1, Jadhav_2023_table_2:row16:col2 | — | not captured |
| theta_kabs_food | `Q900` · theta_kabs_food | 1.4 | not captured | not captured | not captured | not captured | not captured (not captured) | Jadhav_2023_table_2:row5:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'PD proportional, %' routed out of structural estimates ('Residual errora')
- table section residual_error: 'PD additive, g/dL' routed out of structural estimates ('Residual errora')
- table section iiv: 'Imax' routed out of structural estimates ('IIV, %CV')
- table section iiv: 'Baseline LDL-C' routed out of structural estimates ('IIV, %CV')
- table section residual_error: 'Serial PK sampling' routed out of structural estimates ('Residual errora, %')
- table section residual_error: 'Sparse PK sampling' routed out of structural estimates ('Residual errora, %')
- table section iiv: 'CL/F' routed out of structural estimates ('IIV, %CV')
- table section iiv: 'Vc/F' routed out of structural estimates ('IIV, %CV')
- table section iiv: 'Ka' routed out of structural estimates ('IIV, %CV')
- table representations disagree for 'Imax'; source reconciliation required
- table representations disagree for 'IC50, µg/mL'; source reconciliation required
- table representations disagree for 'Baseline LDL-C, mg/dL'; source reconciliation required
- table representations disagree for 'TURN, h'; source reconciliation required
- table representations disagree for 'Ezetimibe'; source reconciliation required
- table representations disagree for 'Female sex'; source reconciliation required
- table representations disagree for 'Body weight'; source reconciliation required
- table representations disagree for 'HeFH'; source reconciliation required
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row2:col1'])
- dropped PD-category row 'IC50, µg/mL' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row3:col1'])
- dropped unlinked row (NIL): 'Baseline LDL-C, mg/dL' — extend the ontology if this is a real PK parameter (source ['Tab3:row4:col1'])
- dropped unlinked row (NIL): 'TURN, h' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1'])
- dropped unlinked row (NIL): 'Ezetimibe' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1', 'Jadhav_2023_table_2:row13:col2'])
- dropped unlinked row (NIL): 'Female sex' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Jadhav_2023_table_2:row7:col2', 'Jadhav_2023_table_2:row15:col2'])
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1', 'Jadhav_2023_table_2:row8:col1', 'Jadhav_2023_table_2:row8:col2', 'Jadhav_2023_table_2:row17:col1', 'Jadhav_2023_table_2:row17:col2'])
- dropped unlinked row (NIL): 'HeFH' — extend the ontology if this is a real PK parameter (source ['Tab3:row19:col1'])
- dropped duplicate Q48 ('K32, h−1', value '0.156') — already have one for this compound
- covariate level 'Black race' → Q900:black_race = 18.0 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Hyperlipidemia' — extend the ontology if this is a real PK parameter (source ['Jadhav_2023_table_2:row10:col2'])
- dropped unlinked row (NIL): 'T2DM' — extend the ontology if this is a real PK parameter (source ['Jadhav_2023_table_2:row11:col2'])
- covariate level 'eGFR' → Q900:egfr = 0.574 (power on Q27)
- covariate level 'Age' → Q900:age = 0.743 (power on Q27)
- dropped unlinked row (NIL): 'Simvastatin' — extend the ontology if this is a real PK parameter (source ['Jadhav_2023_table_2:row18:col2'])
- dropped unlinked row (NIL): 'Atorvastatin' — extend the ontology if this is a real PK parameter (source ['Jadhav_2023_table_2:row20:col1', 'Jadhav_2023_table_2:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=bempedoic_acid
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F, L' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab3: unbound_uncertainty
- table Tab3: representations disagree; selected evidence retained, not merged
- companion parameter table 2 transcribed (50 record(s), model stage 'final')
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.944 (17/18 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.789 (15/19 fields) | 4 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[turn]` | not captured | 85.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[hefh]` | not captured | 0.0671 | only_one_extracted |
| `gpt-oss:120b` | `parameters[turn]` | not captured | 85.8 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | bempedoic acid | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | bempedoic acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jadhav_2023_table_2:row0:col1', 'Jadhav_2023_table_2:row0:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Jadhav_2023_table_2:row3:col1', 'Jadhav_2023_table_2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jadhav_2023_table_2:row2:col1', 'Jadhav_2023_table_2:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jadhav_2023_table_2:row1:col1', 'Jadhav_2023_table_2:row1:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.755 L/h | not captured | not captured | ['Jadhav_2023_table_2:row0:col1', 'Jadhav_2023_table_2:row0:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 19.1 L | not captured | not captured | ['Jadhav_2023_table_2:row1:col1', 'Jadhav_2023_table_2:row1:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=bempedoic_acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_bempedoic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jadhav_2023` / `Jadhav_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_bempedoic_acid/models/modelica/BempedoicAcid_Jadhav2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_bempedoic_acid/models/modelica/BempedoicAcid_Jadhav2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_bempedoic_acid/models/modelica/BempedoicAcid_Jadhav2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_modelica.zip" download>BempedoicAcid_Jadhav2023_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_fmi.zip" download>BempedoicAcid_Jadhav2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_matlab.zip" download>BempedoicAcid_Jadhav2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_matlab_simbio.zip" download>BempedoicAcid_Jadhav2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_sbml.zip" download>BempedoicAcid_Jadhav2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_cellml.zip" download>BempedoicAcid_Jadhav2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference.svg" alt="BempedoicAcid_Jadhav2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 180 mg, single dose, first-order absorption (ka 1.41 /h, F 1). Dose in the paper: 180 mg.

<dbs-fmusim paramsurl="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference/BempedoicAcid_Jadhav2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `BempedoicAcid_Jadhav2023_reference_params.json` · controls `BempedoicAcid_Jadhav2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 01:07 UTC</sub>
