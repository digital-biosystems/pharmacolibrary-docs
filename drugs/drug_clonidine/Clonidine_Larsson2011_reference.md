<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Larsson_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Larsson2011_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Needs review), but the paper was screened again on 2026-10-09 06:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The clonidine record is incomplete: the absorption lag time (tlag, 0.148 h) was not covered among the expected parameters, and the record was built from the abstract only, so summary statistics stand in for a fitted model.

<div class="pk-model-meta" hidden drug="clonidine" model-id="Clonidine_Larsson2011_reference" status="needs_review" stale="true" population="children undergoing adenotonsillectomy" measured-compound="clonidine" parameterization="mechanistic" topology="2C"></div>

## Citation
Larsson P, Nordlinder A, Bergendahl HT, Lönnqvist PA, Eksborg S, Almenrader N et al. Oral bioavailability of clonidine in children. Paediatric anaesthesia 21(3):335–340 (2011).
  ·  DOI: [10.1111/j.1460-9592.2010.03397.x](https://doi.org/10.1111/j.1460-9592.2010.03397.x)

## Population and dosing

**Population:** children undergoing adenotonsillectomy · condition adenotonsillectomy · age group child · n = 8.

**Dosing:** 0.28 mg, oral, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL std (lAEh per 70 kg) | CLnorm | 17.9 | L/h | 30.3 (None% RSE) |
| V1 std (lAE70 kg )1 ) | V1 | 81.2 | L | 71.5 (None% RSE) |
| Q std (lAEh per 70 kg) | Q | 121 | L/h |  |
| V2 std (lAE70 kg )1 ) | V2 | 113 | L | 33.9 (None% RSE) |
| Tlag | tlag | 0.148 | h | 91.2 (None% RSE) |
| F with oral | Fab | 0.554 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clonidine record is incomplete: the absorption lag time (tlag, 0.148 h) was not covered among the expected parameters, and the record was built from the abstract only, so summary statistics stand in for a fitted model.**

The parameter coverage check expected 5 parameters but found only 4 covered; tlag (absorption lag time, 0.148 h) was neither emitted nor defaulted, so the record was held back for review. Because the source is abstract-only, the reported values (e.g., CL 17.9 L/h, V1 81.2 L·70 kg⁻¹, Fab 55.4%) are summary statistics rather than a fitted model. A second reader disagreed on several fields, reading clearance as 17.9 where this record lists it under a different label, and returning null for the absorption half-life (0.45 h), lag time, between-compartment clearance (121 L/h), and central volume, though the bioavailability value of 55.4% agrees. Extracted — clonidine: t1/2ka 0.45 h, tlag 0.148 h, CL 17.9 L/h, Q 121 L/h, V1 81.2 l·70 kg(-1), V2 113 l·70 kg(-1), Fab 55.4 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of tabs: this record has none, the second reading 0.454; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL std (lAEh per 70 kg) | `Q354` · CLnorm | 17.9 | L/h | 4.972e-06 | m3/s | L/h | space_fold (0.95) | tab_0:row1:col1 | 30.3 (None% RSE) |
| V1 std (lAE70 kg )1 ) | `Q63` · V1 | 81.2 | L | 0.0812 | m3 | L | llm_confirmed (0.6) | tab_0:row2:col1 | 71.5 (None% RSE) |
| Q std (lAEh per 70 kg) | `Q30` · Q | 121 | L/h | 3.361e-05 | m3/s | L/h | llm (0.6) | tab_0:row3:col1 |  |
| V2 std (lAE70 kg )1 ) | `Q64` · V2 | 113 | L | 0.113 | m3 | L | llm_confirmed (0.6) | tab_0:row4:col1 | 33.9 (None% RSE) |
| Tlag | `Q83` · tlag | 0.148 | h | 532.8 | s | h | exact (1) | tab_0:row6:col1 | 91.2 (None% RSE) |
| F with oral | `Q40` · Fab | 0.554 |  |  |  |  | llm (0.6) | tab_0:row9:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL std (lAEh per 70 kg)' routed out of structural estimates ('% BSV')
- table section iiv: 'V1 std (lAE70 kg )1 )' routed out of structural estimates ('% BSV')
- table section iiv: 'Q std (lAEh per 70 kg)' routed out of structural estimates ('% BSV')
- table section iiv: 'V2 std (lAE70 kg )1 )' routed out of structural estimates ('% BSV')
- table section iiv: 'Tabs (h)' routed out of structural estimates ('% BSV')
- table section iiv: 'Tlag' routed out of structural estimates ('% BSV')
- table section iiv: 'F with oral' routed out of structural estimates ('% BSV')
- unit_dimension_unknown: 'lAEh per 70 kg' (CLnorm)
- unit_dimension_unknown: 'lAEh per 70 kg' (Q)
- dropped unlinked row (NIL): 'Tabs (h)' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1'])
- dropped unlinked row (NIL): 'TM 50 (weeks)' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1'])
- dropped unlinked row (NIL): 'Err' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1'])
- implicit units: 'CL std (lAEh per 70 kg)' → L/h (from the paper text: "The text explicitly states the unit for clearance in the covariate analysis equation: 'CL = CL std ... l h )1' (rendered")
- implicit units: 'V1 std (lAE70 kg )1 )' → L (from the paper text: "The text describes the model parameterization: 'central volume (V1)'. The table header/footnote context for V1 std is '(")
- implicit units: 'Q std (lAEh per 70 kg)' → L/h (from the paper text: "The text describes the model parameterization: 'between compartment clearance (Q)'. The standard unit for intercompartme")
- implicit units: 'V2 std (lAE70 kg )1 )' → L (from the paper text: "The text describes the model parameterization: 'peripheral volume of distribution (V2)'. The standard unit for volume of")
- implicit units: 'Tlag' → h (from the paper text: "The abstract explicitly states: 'absorption lag time (Tlag), 0.148 (91.2; 0.002-0.316) h'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonidine

**Extraction notes:**
- unparsed cell tab_0:row1:col3 = '16, 20.3'
- unparsed cell tab_0:row2:col3 = '60.7, 105'
- unparsed cell tab_0:row3:col3 = '80.1, 165'
- unparsed cell tab_0:row4:col3 = '91, 131'
- unparsed cell tab_0:row5:col3 = '0.221, 0.884'
- unparsed cell tab_0:row6:col3 = '0.002, 0.316'
- unparsed cell tab_0:row7:col3 = '53, 78.8'
- unparsed cell tab_0:row8:col3 = '1.5, 3.72'
- unparsed cell tab_0:row9:col3 = '0.469, 0.654'
- unparsed cell tab_0:row10:col3 = '0.105, 0.155'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[tabs]` |  | 0.454 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tm 50]` |  | 61.6 | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_0:row3:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['tab_0:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_0:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_0:row4:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_0:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 81.2 L | ['tab_0:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 113 L | ['tab_0:row4:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=clonidine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clonidine/Clonidine_Larsson2011_reference/Clonidine_Larsson2011_reference_modelica.zip" download>Clonidine_Larsson2011_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_clonidine/Clonidine_Larsson2011_reference/Clonidine_Larsson2011_reference_fmi.zip" download>Clonidine_Larsson2011_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clonidine/Clonidine_Larsson2011_reference/Clonidine_Larsson2011_reference_matlab.zip" download>Clonidine_Larsson2011_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clonidine/Clonidine_Larsson2011_reference/Clonidine_Larsson2011_reference_matlab_simbio.zip" download>Clonidine_Larsson2011_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clonidine/Clonidine_Larsson2011_reference/Clonidine_Larsson2011_reference_sbml.zip" download>Clonidine_Larsson2011_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clonidine/Clonidine_Larsson2011_reference/Clonidine_Larsson2011_reference_cellml.zip" download>Clonidine_Larsson2011_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Larsson P, Nordlinder A, Bergendahl HT, Lönnqvist PA, Eksborg S, Almenrader N et al. Oral bioavailability of clonidine in children. Paediatric anaesthesia 21(3):335–340 (2011). [doi:10.1111/j.1460-9592.2010.03397.x](https://doi.org/10.1111/j.1460-9592.2010.03397.x)

**This record:** Pharmacolibrary v26.09, model `Clonidine_Larsson2011_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_clonidine/Clonidine_Larsson2011_reference>

```bibtex
@misc{pharmacolibrary_ClonidineLarsson2011reference,
  title  = {{Pharmacolibrary model Clonidine_Larsson2011_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_clonidine/Clonidine_Larsson2011_reference},
  note   = {Parameters from doi:10.1111/j.1460-9592.2010.03397.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Larsson2011_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Larsson2011_reference%0APaper%3A%20Larsson_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clonidine/Clonidine_Larsson2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-09 06:08 UTC</sub>
