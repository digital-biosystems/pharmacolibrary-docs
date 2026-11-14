<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Thalidomide&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/&quot;},{&quot;label&quot;:&quot;Atoyebi_2019 \u00b7 observed_values&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thalidomide_Chen1989_reference&quot;,&quot;label&quot;:&quot;Chen_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Chen1989_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Eriksson1995_reference&quot;,&quot;label&quot;:&quot;Eriksson_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Eriksson1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Eriksson2003_reference&quot;,&quot;label&quot;:&quot;Eriksson_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Eriksson2003_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Piscitelli1997_reference&quot;,&quot;label&quot;:&quot;Piscitelli_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Piscitelli1997_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Teo2004v2_reference&quot;,&quot;label&quot;:&quot;Teo_2004_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Teo2004v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Atoyebi2019_reference&quot;,&quot;label&quot;:&quot;Atoyebi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Atoyebi2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thalidomide — `Thalidomide_Atoyebi2019_observed_values`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Thalidomide" model-id="Thalidomide_Atoyebi2019_observed_values" status="needs_review" stale="false" population="non-pregnant and pregnant women (maternofoetal PBPK simulation, n=100 virtual subjects)" measured-compound="Thalidomide" parameterization="apparent" topology="1C"></div>

## Citation
Atoyebi SA, Rajoli RKR, Adejuyigbe E, Owen A, Bolaji O, Siccardi M et al. Using mechanistic physiologically-based pharmacokinetic models to assess prenatal drug exposure: Thalidomide versus efavirenz as case studies. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 140:105068 (2019).
  ·  DOI: [10.1016/j.ejps.2019.105068](https://doi.org/10.1016/j.ejps.2019.105068)

## Population and dosing

**Population:** non-pregnant and pregnant women (maternofoetal PBPK simulation, n=100 virtual subjects) · condition pregnancy / healthy adults (therapeutic oral dosing) · age group adult · n = 100 (simulated virtual subjects per arm).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmin (mg/L) | Cmin | 1.21 | mg/L |
| Cmax (mg/L) | Cmax | 2.75 | mg/L |
| AUC0–24 (mg.h/L) | AUCt | 39.9 | mg.h/L |
| CL/F (L/h) | CL/F | 14.1 | L/h |
| Efavirenz concentration (mg/L) | Ct | 1.05 | mg/L |
| C:M ratio | equation variable | 0.49 |  |
| Absorption rate constant ka (Mouse, Control mouse) | kabs | 1.94 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[auc0-24].value`: this record has 39.9, the second reading 55.4; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmin (mg/L) | `Q36` · Cmin | 1.21 | mg/L | 0.00121 | kg/m3 | mg/l | exact (1) | Atoyebi_2019_table_3:row2:col1, Atoyebi_2019_table_3:row7:col1, Atoyebi_2019_table_3:row12:col1 |
| Cmax (mg/L) | `Q32` · Cmax | 2.75 | mg/L | 0.00275 | kg/m3 | mg/l | exact (1) | Atoyebi_2019_table_3:row3:col1, Atoyebi_2019_table_3:row8:col1, Atoyebi_2019_table_3:row13:col1 |
| AUC0–24 (mg.h/L) | `Q19` · AUCt | 39.9 | mg.h/L | 143.6 | kg*s/m3 | (h·mg)/l | llm (0.6) | Atoyebi_2019_table_3:row4:col1, Atoyebi_2019_table_3:row10:col1, Atoyebi_2019_table_3:row15:col1 |
| CL/F (L/h) | `Q27` · CL/F | 14.1 | L/h | 3.917e-06 | m3/s | l/h | exact (1) | Atoyebi_2019_table_3:row9:col1, Atoyebi_2019_table_3:row14:col1 |
| Efavirenz concentration (mg/L) | `Q75` · Ct | 1.05 | mg/L | 0.00105 | kg/m3 | mg/l | llm (0.6) | Atoyebi_2019_table_3:row18:col1, Atoyebi_2019_table_3:row21:col1 |
| C:M ratio | `Q900` · equation variable | 0.49 |  | 0.49 |  |  | llm (0.6) | Atoyebi_2019_table_3:row19:col1 |
| Absorption rate constant ka (Mouse, Control mouse) | `Q49` · kabs | 1.94 | 1/h | 0.0005389 | 1/s | 1/h | review_gapfill (0.7) | Murayama_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'observed values' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Third trimester' — extend the ontology if this is a real PK parameter (source ['Atoyebi_2019_table_3:row1:col1', 'Atoyebi_2019_table_3:row11:col1'])
- dropped unlinked row (NIL): 'Throughout pregnancy' — extend the ontology if this is a real PK parameter (source ['Atoyebi_2019_table_3:row6:col1'])
- dropped unlinked row (NIL): 'Umbilical vein' — extend the ontology if this is a real PK parameter (source ['Atoyebi_2019_table_3:row17:col1'])
- dropped unlinked row (NIL): 'Foetal plasma' — extend the ontology if this is a real PK parameter (source ['Atoyebi_2019_table_3:row20:col1'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 400 (source ['t0020:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Thalidomide
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: 'observed values' subgroup of Atoyebi_2019 (paper reports 4 populations: observed values, second trimestern = 100, simulated values, third trimestern = 100)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Murayama_2018's review values (primary lacked it)

**Extraction notes:**
- table t0020: representations disagree; selected evidence retained, not merged
- companion parameter table 2 transcribed (39 record(s))
- companion parameter table 3 transcribed (52 record(s))
- table Atoyebi_2019_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (48 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- toxin: the located table(s) gave no kinetic value — 44 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0-24].value` | 39.9 | 55.4 | mismatch |
| `gpt-oss:120b` | `parameters[c:m ratio]` | 0.49 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f].value` | 14.1 | 10.8 | mismatch |
| `gpt-oss:120b` | `parameters[cmax].value` | 2.75 | 5.44 | mismatch |
| `gpt-oss:120b` | `parameters[cmin].value` | 1.21 | 1.60 | mismatch |
| `gpt-oss:120b` | `parameters[efavirenz concentration].value` | 1.05 | 1.70 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Atoyebi_2019_table_3:row4:col1', 'Atoyebi_2019_table_3:row10:col1', 'Atoyebi_2019_table_3:row15:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Atoyebi_2019_table_3:row9:col1', 'Atoyebi_2019_table_3:row14:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Atoyebi_2019_table_3:row3:col1', 'Atoyebi_2019_table_3:row8:col1', 'Atoyebi_2019_table_3:row13:col1'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Atoyebi_2019_table_3:row2:col1', 'Atoyebi_2019_table_3:row7:col1', 'Atoyebi_2019_table_3:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Murayama_2018:review'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Atoyebi_2019_table_3:row18:col1', 'Atoyebi_2019_table_3:row21:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.1 L/h | ['Atoyebi_2019_table_3:row9:col1', 'Atoyebi_2019_table_3:row14:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthalidomide%5D%20Thalidomide_Atoyebi2019_observed_values&body=Drug%3A%20thalidomide%0ARecord%3A%20Thalidomide_Atoyebi2019_observed_values%0APaper%3A%20Atoyebi_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thalidomide/Thalidomide_Atoyebi2019_observed_values%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 02:11 UTC</sub>
