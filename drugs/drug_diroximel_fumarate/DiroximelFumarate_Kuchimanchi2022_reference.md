<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;diroximel fumarate&quot;,&quot;href&quot;:&quot;drugs/drug_diroximel_fumarate/&quot;},{&quot;label&quot;:&quot;Kuchimanchi_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diroximel fumarate — `DiroximelFumarate_Kuchimanchi2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (equation variable), so that value has no SI equivalent. None of the extracted parameters is diroximel fumarate's own; they describe monomethyl fumarate, 2-hydroxyethyl succinimide. Extracted — monomethyl fumarate, 2-hydroxyethyl succinimide: kel 3.24 h−1, Q 1.49 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has diroximel fumarate, the second reading diroximel_fumarate; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `diroximel_fumarate`, measured `monomethyl fumarate, 2-hydroxyethyl succinimide`.

## Citation
Kuchimanchi M et al., Development of a Population Pharmacokin…, Neurology and therapy (2022)
  ·  DOI: [10.1007/s40120-021-00316-6](https://doi.org/10.1007/s40120-021-00316-6)

<div class="pk-model-meta" hidden drug="diroximel fumarate" model-id="DiroximelFumarate_Kuchimanchi2022_reference" status="needs_review" stale="false" population="healthy participants and patients with multiple sclerosis" measured-compound="monomethyl fumarate, 2-hydroxyethyl succinimide" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 13.5 | L/h | not captured | [l] / [h] | 3.1 | llm (0.6) | Tab2:row1:col2, Tab2:row1:col3 | — | not captured |
| 6 | `Q47` · kel | 3.24 | h−1 | 0.0009000000000000001 | [1] / [h] | 2.4 | llm (0.6) | Tab2:row4:col2, Tab2:row4:col3 | — | not captured |
| 7 | `Q30` · Q | 1.49 | L/h | 4.1388888888888887e-07 | [l] / [h] | 1.2 | llm (0.6) | Tab2:row5:col2, Tab2:row5:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: '4' routed out of structural estimates ('Residual variability')
- table section residual_error: '5' routed out of structural estimates ('Residual variability')
- table section residual_error: '29' routed out of structural estimates ('Residual variability')
- table section residual_error: '30' routed out of structural estimates ('Residual variability')
- table section residual_error: '31' routed out of structural estimates ('Residual variability')
- table section residual_error: '32' routed out of structural estimates ('Residual variability')
- table section residual_error: '33' routed out of structural estimates ('Residual variability')
- table section residual_error: '34' routed out of structural estimates ('Residual variability')
- table section iiv: '1' routed out of structural estimates ('IIV')
- table section iiv: '2' routed out of structural estimates ('IIV')
- table section iiv: '4' routed out of structural estimates ('IIV')
- table section iiv: '5' routed out of structural estimates ('IIV')
- table section iiv: '8' routed out of structural estimates ('IIV')
- table representations disagree for '1'; source reconciliation required
- column 'ase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for '2'; source reconciliation required
- table representations disagree for '3'; source reconciliation required
- table representations disagree for '6'; source reconciliation required
- table representations disagree for '7'; source reconciliation required
- table representations disagree for '8'; source reconciliation required
- table representations disagree for '9'; source reconciliation required
- table representations disagree for '10'; source reconciliation required
- table representations disagree for '15'; source reconciliation required
- table representations disagree for '17'; source reconciliation required
- table representations disagree for '23'; source reconciliation required
- table representations disagree for '24'; source reconciliation required
- table representations disagree for '25'; source reconciliation required
- table representations disagree for '26'; source reconciliation required
- table representations disagree for '27'; source reconciliation required
- table representations disagree for '28'; source reconciliation required
- table representations disagree for '35'; source reconciliation required
- table representations disagree for '36'; source reconciliation required
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col2', 'Tab2:row2:col3'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col2', 'Tab2:row3:col3'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col2', 'Tab2:row7:col3'])
- dropped duplicate Q30 ('10', value '0.878') — already have one for this compound
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col2', 'Tab2:row13:col3'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col2'])
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row21:col3'])
- dropped unlinked row (NIL): '24' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): '25' — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col2'])
- dropped unlinked row (NIL): '26' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col2', 'Tab2:row24:col3'])
- dropped unlinked row (NIL): '27' — extend the ontology if this is a real PK parameter (source ['Tab2:row25:col2', 'Tab2:row25:col3'])
- dropped unlinked row (NIL): '28' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2', 'Tab2:row26:col3'])
- dropped unlinked row (NIL): '35' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col3'])
- dropped unlinked row (NIL): '36' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=monomethyl fumarate, 2-hydroxyethyl succinimide
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model equation 'Vc_i = 30.4 ⋅ (WT_i/78)^0.878 ⋅ exp(η_i^Vc)' not bound — neither LHS nor base term 'WT_i' linked to an ontology parameter
- status held at route_to_review — not promoted

**Extraction notes:**
- table Tab2: missing_unit_binding
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4, 5, 6
- captured model equation Vc_i = 30.4 ⋅ (WT_i/78)^0.878 ⋅ exp(η_i^Vc)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/17 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['diroximel fumarate', 'monomethyl fumarate', 'metabolism'], ['diroximel fumarate', '2-hydroxyethyl succinimide', 'metabolism']] | [['diroximel_fumarate', 'monomethyl_fumarate', 'metabolism'], ['diroximel_fumarate', '2-hydroxyethyl_succinimide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[15]` | not captured | 0.843 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | 13.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | not captured | 13.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | not captured | 30.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | 30.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | 5.04 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | not captured | 5.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[6]` | 3.24 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[6]` | not captured | 3.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | 1.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | not captured | 1.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` | not captured | 0.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[9]` | not captured | 0.162 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | diroximel fumarate | diroximel_fumarate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | monomethyl fumarate | monomethyl_fumarate, 2-hydroxyethyl succinimide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_diroximel_fumarate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kuchimanchi_2022` / `Kuchimanchi_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:50 UTC</sub>
