<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metformin&quot;,&quot;href&quot;:&quot;drugs/toxin_metformin/&quot;},{&quot;label&quot;:&quot;Ailabouni_2026 \u00b7 250_mg::pediatric patients with type 2 diabetes&quot;}]"></div>

# metformin — `Metformin_Ailabouni2026_250_mg_pediatric_patients_with_type`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `not_modelled` (reviewed 2026-09-11 08:46:59.095680+00:00) predates the upstream re-run (2026-09-16 14:44:53.132303+00:00). Current validate status: `not captured`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ailabouni AS; Halpin K; Boone EC; Gaedigk A; Nadai T; Irie K; et al. et al. (2026). Pediatric research
  ·  DOI: [10.1038/s41390-026-04938-0](https://doi.org/10.1038/s41390-026-04938-0)

<div class="pk-model-meta" hidden drug="metformin" model-id="Metformin_Ailabouni2026_250_mg_pediatric_patients_with_type" status="" stale="true" population="pediatric patients with type 2 diabetes" measured-compound="" parameterization="" topology=""></div>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell tab_3:row3:col2 = '6.2%'
- unparsed cell tab_3:row4:col2 = '6.3%'
- unparsed cell tab_3:row5:col2 = '13.1%'
- unparsed cell tab_3:row6:col2 = '24.9%'
- unparsed cell tab_3:row7:col2 = '27.2%'
- unparsed cell tab_3:row9:col2 = '21.7%'
- unparsed cell tab_3:row9:col3 = '2.6%'
- unparsed cell tab_3:row10:col2 = '38.5%'
- unparsed cell tab_3:row10:col3 = '15.3%'
- unparsed cell tab_3:row11:col2 = '36.9%'
- unparsed cell tab_3:row11:col3 = '9.6%'
- unparsed cell tab_3:row13:col2 = '20.0%'
- unparsed cell tab_3:row13:col3 = '11.4%'
- unparsed cell Ailabouni_2026_table_2:row0:col2 = '4994 (4463-5588)'
- unparsed cell Ailabouni_2026_table_2:row0:col4 = '8395 (7190-9801)'
- unparsed cell Ailabouni_2026_table_2:row1:col2 = '4994 (4463-5588)'
- unparsed cell Ailabouni_2026_table_2:row1:col4 = '4197 ns (3595-4900)'
- unparsed cell Ailabouni_2026_table_2:row2:col2 = '786.6 (714.2-866.3)'
- unparsed cell Ailabouni_2026_table_2:row2:col4 = '1244 (1043-1485)'
- unparsed cell Ailabouni_2026_table_2:row3:col2 = '786.6 (714.2-866.3)'
- unparsed cell Ailabouni_2026_table_2:row3:col4 = '622.2 ns (521.4-742.5)'
- unparsed cell Ailabouni_2026_table_2:row4:col3 = '42.54 (35.92-50.39)'
- unparsed cell Ailabouni_2026_table_2:row4:col5 = '59.75* (51.65-69.13)'
- companion parameter table 2 transcribed (10 record(s))

## Validation

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ailabouni_2026` / `Ailabouni_2026::250_mg::pediatric patients with type 2 diabetes`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
