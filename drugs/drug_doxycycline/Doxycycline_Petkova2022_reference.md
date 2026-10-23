<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;doxycycline&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/&quot;},{&quot;label&quot;:&quot;Petkova_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxycycline_Altan2024_reference&quot;,&quot;label&quot;:&quot;Altan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Altan2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Mileva2021_reference&quot;,&quot;label&quot;:&quot;Mileva_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Mileva2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Petkova2022_reference&quot;,&quot;label&quot;:&quot;Petkova_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Petkova2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Doxycycline_Thompson2019_reference&quot;,&quot;label&quot;:&quot;Thompson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Thompson2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Toutain2025_reference&quot;,&quot;label&quot;:&quot;Toutain_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Toutain2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Zhang_2016_kill_rate&quot;,&quot;label&quot;:&quot;Zhang_2016 \u00b7 kill rate&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/pd_Zhang_2016_kill_rate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Zhang_2019_kill_rate&quot;,&quot;label&quot;:&quot;Zhang_2019 \u00b7 kill rate&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/pd_Zhang_2019_kill_rate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doxycycline — `Doxycycline_Petkova2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">bird</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:37 UTC) predates the latest extraction (2026-10-04 00:43 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="doxycycline" model-id="Doxycycline_Petkova2022_reference" status="extracted" stale="true" population="healthy and M. gallisepticum-infected broiler chickens" measured-compound="doxycycline" parameterization="apparent" topology="1C"></div>

## Citation
Petkova T, Yordanova A, Milanova A. Population Pharmacokinetics of Doxycycline, Administered Alone or with N-Acetylcysteine, in Chickens with Experimental. Pharmaceutics 14(11) (2022).
  ·  DOI: [10.3390/pharmaceutics14112440](https://doi.org/10.3390/pharmaceutics14112440)

## Population and dosing

**Population:** healthy and M. gallisepticum-infected broiler chickens · condition healthy and M. gallisepticum infection · n = &gt;=32.

**Dosing:** 1400 mg, oral, multiple, every 24 h.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_doxycycline/Doxycycline_Petkova2022_reference/Doxycycline_Petkova2022_reference.svg" alt="Doxycycline_Petkova2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| tvka | kabs | 0.093 | 1/h | 1.47 |
| tvV/F | V/F | 4.73 | L/kg | 2.94 |
| tvke | kel | 0.154 | 1/h | 1.16 |
| tvtlag | tlag | 0.80 | h | 3.58 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The doxycycline model was quarantined because clearance, volume of distribution, absorption rate constant and absorption lag time had no source values and generic placeholder values were used instead.**

Although the record lists kabs 0.093, V/F 4.73, kel 0.154 and tlag 0.80 for doxycycline, the review found no reported values for clearance, volume of distribution, absorption rate constant and absorption lag time, so generic placeholder values stood in for these parameters and the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 with no molar correction, making the parameterization apparent. An adjudicated check flagged the defaulted absorption rate constant as an invented absorption process, which was judged not acceptable. Extracted — doxycycline: kabs 0.093, V/F 4.73, kel 0.154, tlag 0.8.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has doxycycline, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| tvka | `Q49` · kabs | 0.093 | 1/h | 2.583e-05 | 1/s | 1/h | 1.47 | tv_prefix (0.95) | pharmaceutics-14-02440-t001:row1:col1, pharmaceutics-14-02440-t001:row1:col2, pharmaceutics-14-02440-t001:row1:col3, pharmaceutics-14-02440-t001:row1:col4, pharmaceutics-14-02440-t001:row1:col5, pharmaceutics-14-02440-t001:row1:col6 |
| tvV/F | `Q76` · V/F | 4.73 | L/kg | 0.3311 | m3 | L | 2.94 | tv_prefix (0.95) | pharmaceutics-14-02440-t001:row2:col1, pharmaceutics-14-02440-t001:row2:col3, pharmaceutics-14-02440-t001:row2:col4, pharmaceutics-14-02440-t001:row2:col5, pharmaceutics-14-02440-t001:row2:col6 |
| tvke | `Q47` · kel | 0.154 | 1/h | 4.278e-05 | 1/s | 1/h | 1.16 | tv_prefix (0.95) | pharmaceutics-14-02440-t001:row3:col1, pharmaceutics-14-02440-t001:row3:col2, pharmaceutics-14-02440-t001:row3:col3, pharmaceutics-14-02440-t001:row3:col4, pharmaceutics-14-02440-t001:row3:col5, pharmaceutics-14-02440-t001:row3:col6 |
| tvtlag | `Q83` · tlag | 0.80 | h | 2880 | s | h | 3.58 | tv_prefix (0.95) | pharmaceutics-14-02440-t001:row6:col1, pharmaceutics-14-02440-t001:row6:col3, pharmaceutics-14-02440-t001:row6:col4, pharmaceutics-14-02440-t001:row6:col5, pharmaceutics-14-02440-t001:row6:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'tvk 12' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02440-t001:row4:col1', 'pharmaceutics-14-02440-t001:row4:col2', 'pharmaceutics-14-02440-t001:row4:col3', 'pharmaceutics-14-02440-t001:row4:col4', 'pharmaceutics-14-02440-t001:row4:col5', 'pharmaceutics-14-02440-t001:row4:col6'])
- dropped unlinked row (NIL): 'tvk 21' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02440-t001:row5:col1', 'pharmaceutics-14-02440-t001:row5:col2', 'pharmaceutics-14-02440-t001:row5:col3', 'pharmaceutics-14-02440-t001:row5:col4', 'pharmaceutics-14-02440-t001:row5:col5', 'pharmaceutics-14-02440-t001:row5:col6'])
- routed 'tvCMultStdev' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- implicit units: 'tvka' → 1/h (from the paper text: "The text states: 'Its value was lower compared to the majority of published data (from 1.1 ± 0.24–0.83 ± 0.26 to 2.55 ± ")
- implicit units: 'tvV/F' → L/kg (from the paper text: "The text states: 'The values of tvV/F and tvke were 4.73 L × kg−1 and 0.154 h−1, respectively'.")
- implicit units: 'tvke' → 1/h (from the paper text: "The text states: 'The values of tvV/F and tvke were 4.73 L × kg−1 and 0.154 h−1, respectively'.")
- implicit units: 'tvtlag' → h (from the paper text: "The text states: 'A high BSV of 93.17% was calculated for the value of tlag of 0.8 h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=doxycycline
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL/F=50.9894 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[tvk 12]` |  | 4.59 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | doxycycline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | doxycycline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pharmaceutics-14-02440-t001:row3:col1', 'pharmaceutics-14-02440-t001:row3:col2', 'pharmaceutics-14-02440-t001:row3:col3', 'pharmaceutics-14-02440-t001:row3:col4', 'pharmaceutics-14-02440-t001:row3:col5', 'pharmaceutics-14-02440-t001:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-14-02440-t001:row1:col1', 'pharmaceutics-14-02440-t001:row1:col2', 'pharmaceutics-14-02440-t001:row1:col3', 'pharmaceutics-14-02440-t001:row1:col4', 'pharmaceutics-14-02440-t001:row1:col5', 'pharmaceutics-14-02440-t001:row1:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['pharmaceutics-14-02440-t001:row2:col1', 'pharmaceutics-14-02440-t001:row2:col3', 'pharmaceutics-14-02440-t001:row2:col4', 'pharmaceutics-14-02440-t001:row2:col5', 'pharmaceutics-14-02440-t001:row2:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-14-02440-t001:row6:col1', 'pharmaceutics-14-02440-t001:row6:col3', 'pharmaceutics-14-02440-t001:row6:col4', 'pharmaceutics-14-02440-t001:row6:col5', 'pharmaceutics-14-02440-t001:row6:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 331 L | ['pharmaceutics-14-02440-t001:row2:col1', 'pharmaceutics-14-02440-t001:row2:col3', 'pharmaceutics-14-02440-t001:row2:col4', 'pharmaceutics-14-02440-t001:row2:col5', 'pharmaceutics-14-02440-t001:row2:col6'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_doxycycline/Doxycycline_Petkova2022_reference/Doxycycline_Petkova2022_reference_modelica.zip" download>Doxycycline_Petkova2022_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_doxycycline/Doxycycline_Petkova2022_reference/Doxycycline_Petkova2022_reference_fmi.zip" download>Doxycycline_Petkova2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4444 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 2880 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0014 | kg |
| input | model | `Cl` | 1.416e-05 | m3/s |
| input | model | `VdPerKg` | 0.00473 | m3/kg |
| input | model | `ka` | 2.583e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Petkova T, Yordanova A, Milanova A. Population Pharmacokinetics of Doxycycline, Administered Alone or with N-Acetylcysteine, in Chickens with Experimental. Pharmaceutics 14(11) (2022). [doi:10.3390/pharmaceutics14112440](https://doi.org/10.3390/pharmaceutics14112440)

**This record:** Pharmacolibrary v26.09, model `Doxycycline_Petkova2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_doxycycline/Doxycycline_Petkova2022_reference>

```bibtex
@misc{pharmacolibrary_DoxycyclinePetkova2022reference,
  title  = {{Pharmacolibrary model Doxycycline_Petkova2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_doxycycline/Doxycycline_Petkova2022_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics14112440},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1400 mg, single dose, first-order absorption (ka 0.093 /h, lag 48 min, F 1). Dose in the paper: 1400 mg.

<dbs-fmusim paramsurl="drugs/drug_doxycycline/Doxycycline_Petkova2022_reference/Doxycycline_Petkova2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_doxycycline/Doxycycline_Petkova2022_reference/Doxycycline_Petkova2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Doxycycline_Petkova2022_reference_params.json` · controls `Doxycycline_Petkova2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxycycline%5D%20Doxycycline_Petkova2022_reference&body=Drug%3A%20doxycycline%0ARecord%3A%20Doxycycline_Petkova2022_reference%0APaper%3A%20Petkova_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxycycline/Doxycycline_Petkova2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 00:43 UTC</sub>
