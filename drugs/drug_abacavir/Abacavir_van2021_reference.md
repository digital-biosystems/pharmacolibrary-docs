<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;van_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Ji2024_reference&quot;,&quot;label&quot;:&quot;Ji_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Ji2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_van2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="abacavir" model-id="Abacavir_van2021_reference" status="extracted" stale="false" population="HIV-positive children with and without MDR-TB" measured-compound="abacavir, lamivudine" parameterization="mechanistic" topology="2C"></div>

## Citation
van der Laan LE, Garcia-Prats AJ, Schaaf HS, Winckler JL, Draper H, Norman J et al. Pharmacokinetics and Drug-Drug Interactions of Abacavir and Lamuvudine Co-administered With Antituberculosis Drugs in HIV-Positive Children Treated for Multidrug-Resistant Tuberculosis. Frontiers in pharmacology 12:722204 (2021).
  ·  DOI: [10.3389/fphar.2021.722204](https://doi.org/10.3389/fphar.2021.722204)

## Population and dosing

**Population:** HIV-positive children with and without MDR-TB · condition HIV, MDR-TB · age group child · n = &gt;54.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 16 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) b | CLb | 10.8 | L/h |
| CL (L/h) b | CLb | 16.3 | L/h |
| Vc (L) b | Vss | 26.5 | L |
| Vc (L) b | V1 | 21.7 | L |
| ka (1/h) | kabs | 1.07 | 1/h |
| ka (1/h) | kabs | 1.77 | 1/h |
| MTT–tablet (h) | MTT | 0.643 | h |
| MTT–tablet (h) | MTT | 0.458 | h |
| NN ( ) | n_transit | 6.38 |  |
| NN ( ) | n_transit | 3.70 |  |
| F ( ) | Fab | 1 |  |
| F ( ) | Fab | 1 |  |
| Q (L/h) b | Qb | 2.25 | L/h |
| Q (L/h) b | Qb | 1.42 | L/h |
| Vp (L) b | V2 | 12.0 | L |
| flow rate | Q | 0.8 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abacavir, lamivudine, the second reading abacavir; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) b | `Q23` · CLb | 10.8 | L/h | 3e-06 | m3/s | l/h | space_fold (0.95) | T2:row2:col1 |
| CL (L/h) b | `Q23` · CLb | 16.3 | L/h | 4.528e-06 | m3/s | l/h | space_fold (0.95) | T2:row2:col3 |
| Vc (L) b | `Q65` · Vss | 26.5 | L | 0.0265 | m3 | l | llm_corrected (0.6) | T2:row3:col1 |
| Vc (L) b | `Q63` · V1 | 21.7 | L | 0.0217 | m3 | l | llm_confirmed (0.6) | T2:row3:col3 |
| ka (1/h) | `Q49` · kabs | 1.07 | 1/h | 0.0002972 | 1/s | 1/h | exact (1) | T2:row4:col1 |
| ka (1/h) | `Q49` · kabs | 1.77 | 1/h | 0.0004917 | 1/s | 1/h | exact (1) | T2:row4:col3 |
| MTT–tablet (h) | `Q81` · MTT | 0.643 | h |  |  | h | llm_confirmed (0.6) | T2:row5:col1 |
| MTT–tablet (h) | `Q81` · MTT | 0.458 | h |  |  | h | llm_confirmed (0.6) | T2:row5:col3 |
| NN ( ) | `Q311` · n_transit | 6.38 |  |  |  |  | exact (1) | T2:row7:col1 |
| NN ( ) | `Q311` · n_transit | 3.70 |  |  |  |  | exact (1) | T2:row7:col3 |
| F ( ) | `Q40` · Fab | 1 |  |  |  |  | exact (1) | T2:row8:col1 |
| F ( ) | `Q40` · Fab | 1 |  |  |  |  | exact (1) | T2:row8:col3 |
| Q (L/h) b | `Q54` · Qb | 2.25 | L/h | 6.25e-07 | m3/s | l/h | space_fold (0.95) | T2:row9:col1 |
| Q (L/h) b | `Q54` · Qb | 1.42 | L/h | 3.944e-07 | m3/s | l/h | space_fold (0.95) | T2:row9:col3 |
| Vp (L) b | `Q64` · V2 | 12.0 | L | 0.012 | m3 | l | llm_confirmed (0.6) | T2:row10:col3 |
| flow rate | `Q30` · Q | 0.8 | mL/min | 1.333e-08 | m3/s | L/h | review_gapfill (0.7) | Zhang_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Effect of suspension on MTT (%)' — extend the ontology if this is a real PK parameter (source ['T2:row6:col1'])
- dropped unlinked row (NIL): 'Effect of suspension on MTT (%)' — extend the ontology if this is a real PK parameter (source ['T2:row6:col3'])
- dropped duplicate Q65 ('Vp (L) b', value '69.8') — already have one for this compound
- dropped unlinked row (NIL): 'PMAGE50 (months from conception) c' — extend the ontology if this is a real PK parameter (source ['T2:row12:col1'])
- dropped unlinked row (NIL): 'PMAGE50 (months from conception) c' — extend the ontology if this is a real PK parameter (source ['T2:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abacavir, lamivudine
- molar mass: no plausible PubChem entry for 'abacavir, lamivudine' ('no full name in the paper') — left in mass units
- molar mass: none found for 'abacavir, lamivudine' — its concentrations stay mass-only
- gap-filled Q30 (Q) from Zhang_2018's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (18/22 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[vc (l) b].parameter_id` | Q65 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vp (l) b]` |  | 69.8 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abacavir, lamivudine | abacavir | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | abacavir, lamivudine | abacavir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['T2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Zhang_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row4:col3'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['T2:row9:col1'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['T2:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row10:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['T2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.8 | ['T2:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 10.8 L/h | ['T2:row2:col1'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 16.3 L/h | ['T2:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 21.7 L | ['T2:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12 L | ['T2:row10:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 26.5 L | ['T2:row3:col1'] |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babacavir%5D%20Abacavir_van2021_reference&body=Drug%3A%20abacavir%0ARecord%3A%20Abacavir_van2021_reference%0APaper%3A%20van_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abacavir/Abacavir_van2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:53 UTC</sub>
