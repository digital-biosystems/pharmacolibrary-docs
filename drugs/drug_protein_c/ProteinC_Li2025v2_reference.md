<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;protein C&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/&quot;},{&quot;label&quot;:&quot;Li_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ProteinC_Cojutti2024_reference&quot;,&quot;label&quot;:&quot;Cojutti_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Cojutti2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ProteinC_Troisi2024_reference&quot;,&quot;label&quot;:&quot;Troisi_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Troisi2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# protein C — `ProteinC_Li2025v2_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.812). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for protein c's clearance, volume of distribution and absorption lag time; the covariate scenarios were not simulated (+1 more).**

The model was built, but protein c's clearance, volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — protein c: CL 7.14 dL/h, V 60.7 dL, kabs 0.0379 1/h, Fab 0.79.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has protein C concentrate, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `protein C concentrate`, measured `protein C`.

## Citation
Li Z et al., Pharmacokinetic Evidence Supporting Sub…, TH open : companion journal… (2025)
  ·  DOI: [10.1055/a-2731-5372](https://doi.org/10.1055/a-2731-5372)

<div class="pk-model-meta" hidden drug="protein C" model-id="ProteinC_Li2025v2_reference" status="model_quarantined" stale="false" population="patients with severe congenital protein C deficiency" measured-compound="protein C" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (dL/h) | `Q22` · CL | 7.14 | dL/h | 1.9833333333333332e-07 | [dl] / [h] | not captured | exact (1.0) | TB25050017-3:row1:col1 | — | 0.0992 (None% RSE) |
| Volume of distribution (dL) | `Q61` · V | 60.7 | dL | 0.006070000000000001 | [dl] | not captured | exact (1.0) | TB25050017-3:row2:col1 | — | 0.0505 (None% RSE) |
| effect_of_age_on_the_rate_of_endogenous_protein_c_production | `Q900` · effect_of_age_on_the_rate_of_endogenous_protein_c_production | 0.589 | not captured | not captured | not captured | not captured | not captured (not captured) | TB25050017-3:row5:col1 | — | not captured |
| First-order absorption rate constant (1/h) | `Q49` · kabs | 0.0379 | 1/h | 1.0527777777777778e-05 | 1/h | 4.26 | llm_confirmed (0.6) | TB25050017-3:row13:col1, TB25050017-3:row13:col2, TB25050017-3:row13:col3 | — | not captured |
| Bioavailability | `Q40` · Fab | 0.79 | not captured | not captured | not captured | 5.37 | exact (1.0) | TB25050017-3:row14:col1, TB25050017-3:row14:col2, TB25050017-3:row14:col3 | — | not captured |
| theta_v_age | `Q900` · theta_v_age | -0.112 | not captured | not captured | not captured | not captured | not captured (not captured) | TB25050017-3:row3:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Rate of endogenous protein C production (IU/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['TB25050017-3:row4:col1'])
- covariate level 'Effect of age on the rate of endogenous protein C production' → Q900:effect_of_age_on_the_rate_of_endogenous_protein_c_production = 0.589 (linear_fractional on Q22)
- dropped duplicate Q22 ('Effect of SCPCD indication on clearance', value '-0.575') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of SCPCD indication on rate of endogenous protein C production' — extend the ontology if this is a real PK parameter (source ['TB25050017-3:row9:col1'])
- dropped unlinked row (NIL): 'Duration of administration (h) b' — extend the ontology if this is a real PK parameter (source ['TB25050017-3:row15:col1', 'TB25050017-3:row15:col2', 'TB25050017-3:row15:col3'])
- implicit units: 'First-order absorption rate constant (1/h)' → 1/h (from the paper text: 'The paper text explicitly states: "the first-order absorption rate constant was estimated as 0.0379 1/h".')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=protein C
- molar mass: none found for 'protein_c' — its concentrations stay mass-only
- molar mass: none found for 'protein C' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell TB25050017-3:row13:col4 = '0.04 (0.0284, 0.0867)'
- unparsed cell TB25050017-3:row14:col4 = '0.764 (0.511, 0.886)'
- unparsed cell TB25050017-3:row15:col4 = '4.94 (3.34, 6.37)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.812 (13/16 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[effect of scpcd indication on clearance]` | not captured | -0.575 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | protein C concentrate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | protein C | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['TB25050017-3:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['TB25050017-3:row13:col1', 'TB25050017-3:row13:col2', 'TB25050017-3:row13:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['TB25050017-3:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.14 | not captured | not captured | ['TB25050017-3:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.714 L/h | not captured | not captured | ['TB25050017-3:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.07 L | not captured | not captured | ['TB25050017-3:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_protein_c/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2025_2` / `Li_2025_2::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_protein_c/models/modelica/_needs_review/ProteinC_Li2025v2_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_protein_c/models/modelica/_needs_review/ProteinC_Li2025v2_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_reference/ProteinC_Li2025v2_reference_matlab.zip" download>ProteinC_Li2025v2_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_reference/ProteinC_Li2025v2_reference_matlab_simbio.zip" download>ProteinC_Li2025v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_reference/ProteinC_Li2025v2_reference_sbml.zip" download>ProteinC_Li2025v2_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_reference/ProteinC_Li2025v2_reference_cellml.zip" download>ProteinC_Li2025v2_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 15:22 UTC</sub>
