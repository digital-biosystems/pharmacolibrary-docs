<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;clindamycin&quot;,&quot;href&quot;:&quot;drugs/drug_clindamycin/&quot;},{&quot;label&quot;:&quot;Pfaffendorf_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clindamycin_Mimram2022_reference&quot;,&quot;label&quot;:&quot;Mimram_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clindamycin/Clindamycin_Mimram2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clindamycin — `Clindamycin_Pfaffendorf2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Clindamycin clearance, volume, and lag time lacked extracted values, so library placeholders were used instead of estimates.**

The five extracted parameters (clearance 58.3 L/h, volume 248 L, lag time 0.105 h, absorption rate 0.698 1/h, bioavailability 1) all describe fosmidomycin, not clindamycin. Consequently, clindamycin's key kinetic parameters were missing, causing the model to rely on generic default values rather than drug-specific estimates. Additionally, defined covariate effects were not simulated, limiting the record to a single reference individual without exploring population variability. Extracted — fosmidomycin: CL/F 58.3 L/h, V/F 248 L, kabs 0.698 1/h, tlag 0.105 h, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clindamycin, fosmidomycin, artesunate, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `clindamycin, fosmidomycin, artesunate`, measured `clindamycin, fosmidomycin`.

## Citation
Pfaffendorf C et al., Population pharmacokinetics of fosmidom…, Malaria journal (2026)
  ·  DOI: [10.1186/s12936-026-05872-6](https://doi.org/10.1186/s12936-026-05872-6)

<div class="pk-model-meta" hidden drug="clindamycin" model-id="Clindamycin_Pfaffendorf2026_reference" status="model_quarantined" stale="false" population="children and adults with uncomplicated P. falciparum malaria" measured-compound="clindamycin, fosmidomycin" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 58.3 | L/h | 1.6194444444444444e-05 | L/h | not captured | exact (1.0) | Tab2:row3:col3, Tab2:row18:col3 | — | not captured |
| V/F | `Q76` · V/F | 248 | L | 0.248 | L | not captured | exact (1.0) | Tab2:row4:col3, Tab2:row19:col3 | — | not captured |
| ka | `Q49` · kabs | 0.698 | 1/h | 0.00019388888888888887 | 1/h | not captured | exact (1.0) | Tab2:row5:col3, Tab2:row20:col3 | — | 68.3 (None% RSE) |
| tlag | `Q83` · tlag | 0.105 | h | 378.0 | h | not captured | exact (1.0) | Tab2:row6:col3, Tab2:row21:col3 | — | 10.7 (None% RSE) |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row7:col3 | — | not captured |
| θTEMP | `Q900` · θTEMP | 6.68 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωka' routed out of structural estimates ('Inter-individual variability (IIV)')
- table section iiv: 'ωF' routed out of structural estimates ('Inter-individual variability (IIV)')
- table section residual_error: 'σprop' routed out of structural estimates ('Residual error model')
- table section residual_error: 'σadd' routed out of structural estimates ('Residual error model')
- table section iiv: 'ωtlag' routed out of structural estimates ('Inter-individual variability (IIV)')
- table section iov: 'κCL/F' routed out of structural estimates ('Inter-occasion variability (IOV)')
- kept covariate coefficient θTEMP=6.68 (covariate TEMP) — not an ontology parameter
- implicit units: 'CL/F' → L/h (from the paper text: "Table 2 lists 'Units' for 'CL/F' as 'L/h'. Additionally, the text states: '...apparent clearance rates of 116 L and 26 L")
- implicit units: 'V/F' → L (from the paper text: "Table 2 lists 'Units' for 'V/F' as 'L'. Additionally, the text states: '...apparent volume of distribution and apparent ")
- implicit units: 'ka' → 1/h (from the paper text: "Table 2 lists 'Units' for 'ka' as 'h⁻¹'.")
- implicit units: 'tlag' → h (from the paper text: "Table 2 lists 'Units' for 'tlag' as 'h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clindamycin, fosmidomycin
- molar mass: none of 3 PubChem candidate(s) is 'clindamycin, fosmidomycin' (LLM) — left in mass units
- molar mass: none found for 'clindamycin, fosmidomycin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col1 = 'Apparent clearance (for a 29.05 kg person at 37.1 °C)'
- unparsed cell Tab2:row3:col4 = '[51.0, 67.8]'
- unparsed cell Tab2:row4:col1 = 'Apparent volume of distribution (for a 29.05 kg person)'
- unparsed cell Tab2:row4:col4 = '[201.9, 302.8]'
- unparsed cell Tab2:row5:col2 = 'h⁻1'
- unparsed cell Tab2:row5:col4 = '[0.48, 1.0]'
- unparsed cell Tab2:row6:col4 = '[0.03, 0.17]'
- unparsed cell Tab2:row9:col4 = '[3.6, 9.7]'
- unparsed cell Tab2:row11:col4 = '[45.8, 102.1]'
- unparsed cell Tab2:row12:col4 = '[24.3, 48.8]'
- unparsed cell Tab2:row14:col4 = '[29.7, 41.9]'
- unparsed cell Tab2:row15:col4 = '[0.15, 0.25]'
- unparsed cell Tab2:row18:col1 = 'Apparent clearance (for a 29.05 kg person)'
- unparsed cell Tab2:row18:col4 = '[7.2, 9.0]'
- unparsed cell Tab2:row19:col1 = 'Apparent volume of distribution (for a 29.05 kg person)'
- unparsed cell Tab2:row19:col4 = '[25.4, 32.6]'
- unparsed cell Tab2:row20:col2 = 'h⁻1'
- unparsed cell Tab2:row20:col4 = '[1.3, 3.8]'
- unparsed cell Tab2:row21:col4 = '[0.20, 0.24]'
- unparsed cell Tab2:row23:col4 = '[65.2, 129.1]'
- unparsed cell Tab2:row24:col4 = '[4.9, 20.6]'
- unparsed cell Tab2:row27:col4 = '[23.7, 34.5]'
- unparsed cell Tab2:row29:col4 = '[27.5.0, 39.2]'
- unparsed cell Tab2:row30:col4 = '[0.003, 0.006]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[θtemp]` | 6.68 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θtemp]` | not captured | 6.68 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clindamycin, fosmidomycin, artesunate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clindamycin, fosmidomycin | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col3', 'Tab2:row18:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row20:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row19:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row6:col3', 'Tab2:row21:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 58.3 L/h | not captured | not captured | ['Tab2:row3:col3', 'Tab2:row18:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 248 L | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row19:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_clindamycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pfaffendorf_2026` / `Pfaffendorf_2026::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_clindamycin/models/modelica/_needs_review/Clindamycin_Pfaffendorf2026_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_clindamycin/models/modelica/_needs_review/Clindamycin_Pfaffendorf2026_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_matlab.zip" download>Clindamycin_Pfaffendorf2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_matlab_simbio.zip" download>Clindamycin_Pfaffendorf2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_sbml.zip" download>Clindamycin_Pfaffendorf2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference/Clindamycin_Pfaffendorf2026_reference_cellml.zip" download>Clindamycin_Pfaffendorf2026_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:34 UTC</sub>
