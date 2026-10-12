<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dalteparin&quot;,&quot;href&quot;:&quot;drugs/drug_dalteparin/&quot;},{&quot;label&quot;:&quot;Damle_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dalteparin_Schoemaker1996_reference&quot;,&quot;label&quot;:&quot;Schoemaker_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalteparin/Dalteparin_Schoemaker1996_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dalteparin — `Dalteparin_Damle2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8), gpt-oss:120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**The dalteparin two-compartment model was rejected because one compartment is unreachable from the dose: the peripheral compartment (V2/F = 7180 mL) is unlinked, so no drug can reach it.**

The record describes dalteparin in pediatric venous thromboembolism patients with a two-compartment structure, first-order absorption (kabs = 1.04 1/h) and clearance CL/F = 929 mL/h. The volume parameter V2/F = 7180 mL is defined as the volume of the peripheral compartment, but the model structure leaves that compartment without a path from the dose, making it an orphan compartment. No other failed checks or builder deviations are reported. Extracted — dalteparin: CL/F 929, V2/F 7.18e+03, kabs 1.04, V/F 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dalteparin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:37:27.644184+00:00) predates the upstream re-run (2026-10-05 14:09:39.459714+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `dalteparin`, measured `anti-Xa`.

## Citation
Damle B et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1716](https://doi.org/10.1002/jcph.1716)

<div class="pk-model-meta" hidden drug="dalteparin" model-id="Dalteparin_Damle2021_reference" status="extracted" stale="true" population="pediatric patients with venous thromboembolism" measured-compound="anti-Xa" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F θ1, mL/h | `Q27` · CL/F | 929 | mL/h | 2.580555555555555e-07 | [ml] / [h] | 9.41 | llm_confirmed (0.6) | jcph1716-tbl-0002:row1:col1, jcph1716-tbl-0002:row1:col2, jcph1716-tbl-0002:row1:col3 | — | 0.0369 (67.5% RSE) |
| V/F θ2, mL | `Q76` · V/F | 7180 | mL | 0.00718 | [ml] | 15 | llm_confirmed (0.6) | jcph1716-tbl-0002:row2:col1, jcph1716-tbl-0002:row2:col2, jcph1716-tbl-0002:row2:col3 | — | 1.73 (69.4% RSE) |
| Ka θ3, 1/h | `Q49` · kabs | 1.04 | 1/h | 0.0002888888888888889 | [1] / [h] | 71.8 | llm_confirmed (0.6) | jcph1716-tbl-0002:row3:col1, jcph1716-tbl-0002:row3:col2, jcph1716-tbl-0002:row3:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('WT in CL/F θ6', value '0.75') — already have one for this compound
- dropped duplicate Q76 ('WT in V/F θ7', value '1') — already have one for this compound
- dropped value-less row: 'AGE in CL/F θ8'
- dropped unlinked row (NIL): 'SEX = 1 in CL/F θ14' — extend the ontology if this is a real PK parameter (source ['jcph1716-tbl-0002:row8:col1', 'jcph1716-tbl-0002:row8:col2', 'jcph1716-tbl-0002:row8:col3'])
- dropped duplicate Q27 ('CANCERST = 1 in CL/F θ15', value '0.885') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=anti-Xa
- molar mass: no plausible PubChem entry for 'anti-Xa' ('anti-Xa') — left in mass units
- molar mass: none found for 'dalteparin' — its concentrations stay mass-only
- molar mass: none found for 'anti-Xa' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'anti-Xa', not dalteparin — the review values are the parent's

**Extraction notes:**
- unparsed cell jcph1716-tbl-0002:row1:col4 = '913 (770‐1080)'
- unparsed cell jcph1716-tbl-0002:row2:col4 = '6870 (2460‐8800)'
- unparsed cell jcph1716-tbl-0002:row3:col4 = '0.961 (0.24‐14.50) a'
- unparsed cell jcph1716-tbl-0002:row4:col4 = '1.84 (0.481‐5.94)'
- unparsed cell jcph1716-tbl-0002:row7:col1 = '‐0.0687'
- unparsed cell jcph1716-tbl-0002:row7:col3 = '‐38.3'
- unparsed cell jcph1716-tbl-0002:row7:col4 = '‐0.0672 (−0.122 to −0.0158)'
- unparsed cell jcph1716-tbl-0002:row8:col4 = '1.04 (0.908‐1.2)'
- unparsed cell jcph1716-tbl-0002:row9:col4 = '0.878 (0.744‐1.02)'
- unparsed cell jcph1716-tbl-0002:row10:col4 = '0.0318 (0.00571‐0.0728)'
- unparsed cell jcph1716-tbl-0002:row11:col4 = '0.0545 (0.021‐0.0959)'
- unparsed cell jcph1716-tbl-0002:row12:col4 = '0.0141 (0.0026‐0.0273)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | dalteparin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | anti-Xa | unknown | mismatch |
| `gpt-oss:120b` | `model.links` | [] | [['dalteparin', 'anti-xa', 'none']] | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1716-tbl-0002:row1:col1', 'jcph1716-tbl-0002:row1:col2', 'jcph1716-tbl-0002:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph1716-tbl-0002:row3:col1', 'jcph1716-tbl-0002:row3:col2', 'jcph1716-tbl-0002:row3:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1716-tbl-0002:row2:col1', 'jcph1716-tbl-0002:row2:col2', 'jcph1716-tbl-0002:row2:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.929 L/h | not captured | not captured | ['jcph1716-tbl-0002:row1:col1', 'jcph1716-tbl-0002:row1:col2', 'jcph1716-tbl-0002:row1:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.18 L | not captured | not captured | ['jcph1716-tbl-0002:row2:col1', 'jcph1716-tbl-0002:row2:col2', 'jcph1716-tbl-0002:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dalteparin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Damle_2021` / `Damle_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dalteparin/Dalteparin_Damle2021_reference/Dalteparin_Damle2021_reference_matlab.zip" download>Dalteparin_Damle2021_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dalteparin/Dalteparin_Damle2021_reference/Dalteparin_Damle2021_reference_matlab_simbio.zip" download>Dalteparin_Damle2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dalteparin/Dalteparin_Damle2021_reference/Dalteparin_Damle2021_reference_sbml.zip" download>Dalteparin_Damle2021_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dalteparin/Dalteparin_Damle2021_reference/Dalteparin_Damle2021_reference_cellml.zip" download>Dalteparin_Damle2021_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 14:09 UTC</sub>
