<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;quinine&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/&quot;},{&quot;label&quot;:&quot;Kloprogge_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinine_Hendriksen2013_reference&quot;,&quot;label&quot;:&quot;Hendriksen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Hendriksen2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Kloprogge2014_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Kloprogge2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Quinine_Phillips1986_reference&quot;,&quot;label&quot;:&quot;Phillips_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Phillips1986_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinine — `Quinine_Kloprogge2014_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `quinine sulphate`, measured `quinine`.

## Citation
Kloprogge F et al., Population pharmacokinetics of quinine…, The Journal of antimicrobia… (2014)
  ·  DOI: [10.1093/jac/dku228](https://doi.org/10.1093/jac/dku228)

<div class="pk-model-meta" hidden drug="quinine" model-id="Quinine_Kloprogge2014_reference" status="curated_candidate" stale="false" population="pregnant women with uncomplicated falciparum malaria" measured-compound="quinine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.817 | (1/h) | 0.00022694444444444444 | 1/h | not captured | exact (1.0) | Kloprogge_2014:results_prose | — | not captured |
| CL/F | `Q27` · CL/F | 10.4 | (L/h) | 2.8888888888888894e-06 | L/h | not captured | exact (1.0) | Kloprogge_2014:results_prose | — | not captured |
| Vc/F | `Q290` · V1/F | 174 | (L) | 0.17400000000000002 | L | not captured | exact (1.0) | Kloprogge_2014:results_prose | — | not captured |
| Q/F | `Q69` · Q/F | 10.7 | (L/h) | 2.972222222222222e-06 | L/h | not captured | exact (1.0) | Kloprogge_2014:results_prose | — | not captured |
| Vp/F | `Q82` · V2/F | 54.3 | (L) | 0.0543 | L | not captured | exact (1.0) | Kloprogge_2014:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F (%) | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ka (1/h)' routed out of structural estimates ('IIV/IOV (% CV)a (% RSE)b')
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV/IOV (% CV)a (% RSE)b')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('IIV/IOV (% CV)a (% RSE)b')
- dropped value-less row: 'ka (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'CL/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vc/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Q/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vp/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Parasitaemia (log10) on F (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'Temperature on CL/F'
- dropped value-less row: 'The additive error (σ) variance will essentially be exponential on normal scale data.'
- dropped value-less row: 'bThe relative standard error (RSE) is calculated as 100 × (standard deviation/mean value) from 1000 runs of a non-parametric bootstrap. The 95% CI is displayed as the 2.5th to 97.5th percentiles of the bootstrap estimates.'
- dropped value-less row: 'cPost hoc estimates were calculated as the medians and ranges of the empirical Bayes estimates.'
- salvaged Q49 ('ka'=0.817) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F'=10.4) from results prose — parameter table was unreadable
- salvaged Q290 ('Vc/F'=174) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F'=10.7) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F'=54.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=quinine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell DKU228TB2:row4:col3 = '12.3 (77.0)/21.4 (48.8)'
- unparsed cell DKU228TB2:row4:col4 = '0.170–48.8/19.3–93.3'
- unparsed cell DKU228TB2:row8:col2 = '−0.427 to −0.180'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.4 L/h | not captured | not captured | ['Kloprogge_2014:results_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 174 L | not captured | not captured | ['Kloprogge_2014:results_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 54.3 L | not captured | not captured | ['Kloprogge_2014:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=quinine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 4.06 (2.40–7.92) | 0.0029816056744582644 | not captured | unresolved concentration unit (exp '(mg/L)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.95 (2.54–6.62) | 0.0029816056744582644 | not captured | unresolved concentration unit (exp '(mg/L)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4.16 (2.40–7.92) | 0.0029816056744582644 | not captured | unresolved concentration unit (exp '(mg/L)', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped | 15.3 (10.4–30.8) | 12.927409353545489 | not captured | unresolved time unit '(h)' |
| T1_t_half_terminal | reference | skipped | 14.6 (11.0–29.3) | 12.927409353545489 | not captured | unresolved time unit '(h)' |
| T1_t_half_terminal | reference | skipped | 16.1 (10.4–30.8) | 12.927409353545489 | not captured | unresolved time unit '(h)' |
| T1_tmax | reference | skipped | 3.01 (1.85–8.00) | 3.627490642040109 | not captured | unresolved time unit '(h)' |
| T1_tmax | reference | skipped | 3.01 (2.00–8.00) | 3.627490642040109 | not captured | unresolved time unit '(h)' |
| T1_tmax | reference | skipped | 2.75 (1.85–4.34) | 3.627490642040109 | not captured | unresolved time unit '(h)' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_quinine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kloprogge_2014` / `Kloprogge_2014::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_quinine/models/modelica/Quinine_Kloprogge2014_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_quinine/models/modelica/Quinine_Kloprogge2014_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_quinine/models/modelica/Quinine_Kloprogge2014_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_modelica.zip" download>Quinine_Kloprogge2014_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_fmi.zip" download>Quinine_Kloprogge2014_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_matlab.zip" download>Quinine_Kloprogge2014_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_matlab_simbio.zip" download>Quinine_Kloprogge2014_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_sbml.zip" download>Quinine_Kloprogge2014_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_cellml.zip" download>Quinine_Kloprogge2014_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference.svg" alt="Quinine_Kloprogge2014_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 0.817 /h, F 1). Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Quinine_Kloprogge2014_reference_params.json` · controls `Quinine_Kloprogge2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:36 UTC</sub>
