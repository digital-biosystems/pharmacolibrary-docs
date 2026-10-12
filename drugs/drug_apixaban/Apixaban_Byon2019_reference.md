<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;apixaban&quot;,&quot;href&quot;:&quot;drugs/drug_apixaban/&quot;},{&quot;label&quot;:&quot;Byon_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apixaban — `Apixaban_Byon2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has apixaban, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:36:09.504955+00:00) predates the upstream re-run (2026-10-05 13:43:11.324471+00:00). Current validate status: `needs_review`.

## Citation
Byon W et al., Apixaban: A Clinical Pharmacokinetic an…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-019-00775-z](https://doi.org/10.1007/s40262-019-00775-z)

<div class="pk-model-meta" hidden drug="apixaban" model-id="Apixaban_Byon2019_reference" status="needs_review" stale="true" population="healthy subjects and target patient populations" measured-compound="apixaban" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of distribution | `Q61` · V | 21 | L | 0.021 | L | not captured | exact (1.0) | Byon_2019:other_prose | — | not captured |
| Total plasma clearance of apixaban | `Q22` · CL | 3.3 | L/h | 9.166666666666666e-07 | L/h | not captured | boundary (0.8) | Byon_2019:other_prose | — | not captured |
| central volume of distribution | `Q63` · V1 | 25 | % | not captured | % | not captured | boundary_compartment (0.9) | Byon_2019:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Apixaban dose (mg) and regimen'
- dropped value-less row: '2.5 BID (n = 6)' (captured trailing unit 'n = 6' for child rows)
- dropped value-less row: '5 BID (n = 6)' (captured trailing unit 'n = 6' for child rows)
- dropped value-less row: '10 BID (n = 6)' (captured trailing unit 'n = 6' for child rows)
- dropped value-less row: '25 BID (n = 6)' (captured trailing unit 'n = 6' for child rows)
- dropped value-less row: '10 QD (n = 6)' (captured trailing unit 'n = 6' for child rows)
- dropped value-less row: '25 QD (n = 6)' (captured trailing unit 'n = 6' for child rows)
- dropped value-less row: '2.5 BID (n = 5)' (captured trailing unit 'n = 5' for child rows)
- dropped value-less row: '0.5'
- dropped value-less row: '1.0'
- dropped value-less row: '2.5'
- dropped value-less row: '5'
- dropped value-less row: '10'
- dropped value-less row: '25'
- dropped value-less row: '50'
- dropped value-less row: '10 fasted'
- dropped value-less row: '10 fed'
- salvaged Q61 ('volume of distribution'=21) from results prose — parameter table was unreadable
- salvaged Q22 ('Total plasma clearance of apixaban'=3.3) from results prose — parameter table was unreadable
- salvaged Q63 ('central volume of distribution'=25) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=apixaban
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab2:row2:col4 = '3.5 (2.0, 12.0)'
- unparsed cell Tab2:row3:col4 = '3.5 (3.0, 6.0)'
- unparsed cell Tab2:row4:col4 = '4.0 (2.0, 4.0)'
- unparsed cell Tab2:row5:col4 = '3.5 (2.0, 4.0)'
- unparsed cell Tab2:row6:col4 = '4.0 (3.0, 4.0)'
- unparsed cell Tab2:row7:col4 = '4.0 (2.0, 6.0)'
- unparsed cell Tab2:row9:col4 = '3.0 (3.0, 9.0)'
- unparsed cell Tab2:row10:col4 = '4.0 (2.0, 4.0)'
- unparsed cell Tab2:row11:col4 = '3.0 (2.0, 4.0)'
- unparsed cell Tab2:row12:col4 = '3.5 (1.0, 4.0)'
- unparsed cell Tab2:row13:col4 = '3.5 (3.0, 4.0)'
- unparsed cell Tab2:row14:col4 = '3.0 (2.0, 4.0)'
- unparsed cell Byon_2019_table_1:row2:col5 = '1.5 (1.0, 4.0)'
- unparsed cell Byon_2019_table_1:row3:col5 = '1.8 (1.0, 3.0)'
- unparsed cell Byon_2019_table_1:row4:col5 = '1.5 (1.0, 3.0)'
- unparsed cell Byon_2019_table_1:row6:col5 = '3.3 (2.5, 4.0)'
- unparsed cell Byon_2019_table_1:row7:col5 = '3.0 (2.0, 4.0)'
- unparsed cell Byon_2019_table_1:row8:col5 = '3.0 (2.5, 4.0)'
- unparsed cell Byon_2019_table_1:row8:col6 = '26.8a (33.7)'
- unparsed cell Byon_2019_table_1:row9:col5 = '2.5 (2.0, 4.0)'
- unparsed cell Byon_2019_table_1:row11:col5 = '3.0 (1.5, 6.0)'
- unparsed cell Byon_2019_table_1:row12:col5 = '4.0 (1.0, 9.0)'
- companion parameter table 1 transcribed (44 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.857 (6/7 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | 25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | not captured | 25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance of apixaban]` | 3.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance of apixaban]` | not captured | 3.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | not captured | 21 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | apixaban | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | apixaban | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q63 | fail | [length] ** 3 | % | not captured | not captured | ['Byon_2019:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.3 | not captured | not captured | ['Byon_2019:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.3 L/h | not captured | not captured | ['Byon_2019:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 21 L | not captured | not captured | ['Byon_2019:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=apixaban) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_apixaban/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Byon_2019` / `Byon_2019::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_apixaban/models/modelica/Apixaban_Byon2019_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_apixaban/models/modelica/Apixaban_Byon2019_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_apixaban/models/modelica/Apixaban_Byon2019_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_apixaban/Apixaban_Byon2019_reference/Apixaban_Byon2019_reference_modelica.zip" download>Apixaban_Byon2019_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_apixaban/Apixaban_Byon2019_reference/Apixaban_Byon2019_reference_fmi.zip" download>Apixaban_Byon2019_reference_fmi.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_apixaban/Apixaban_Byon2019_reference/Apixaban_Byon2019_reference_matlab.zip" download>Apixaban_Byon2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_apixaban/Apixaban_Byon2019_reference/Apixaban_Byon2019_reference_matlab_simbio.zip" download>Apixaban_Byon2019_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_apixaban/Apixaban_Byon2019_reference/Apixaban_Byon2019_reference_sbml.zip" download>Apixaban_Byon2019_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_apixaban/Apixaban_Byon2019_reference/Apixaban_Byon2019_reference_cellml.zip" download>Apixaban_Byon2019_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 13:43 UTC</sub>
