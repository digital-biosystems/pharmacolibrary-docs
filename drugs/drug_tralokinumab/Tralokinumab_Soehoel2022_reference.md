<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tralokinumab&quot;,&quot;href&quot;:&quot;drugs/drug_tralokinumab/&quot;},{&quot;label&quot;:&quot;Soehoel_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tralokinumab — `Tralokinumab_Soehoel2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for tralokinumab's volume of distribution and absorption lag time; t6_deviations.

<div class="pk-model-meta" hidden drug="tralokinumab" model-id="Tralokinumab_Soehoel2022_reference" status="model_quarantined" stale="false" population="adults with atopic dermatitis, asthma, and healthy subjects" measured-compound="tralokinumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Soehoel A, Larsen MS, Timmermann S. Population Pharmacokinetics of Tralokinumab in Adult Subjects With Moderate to Severe Atopic Dermatitis. Clinical pharmacology in drug development 11(8):910–921 (2022).
  ·  DOI: [10.1002/cpdd.1113](https://doi.org/10.1002/cpdd.1113)

## Population and dosing

**Population:** adults with atopic dermatitis, asthma, and healthy subjects · age group adult · n = &gt;.

**Dosing:** 45, 150, 300, 600 mg, iv, sc, multiple, every 14 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (absorption rate constant) | kabs | 0.184 | 1/day | 4 |
| V2 (central volume of distribution) | V2 | 2.71 | L | 7 |
| CL (clearance) | CL | 0.149 | L/day | 5 |
| V3 (peripheral volume of distribution) | V3 | 1.44 | L | 6 |
| Q (intercompartmental clearance) | Q | 0.159 | L/day | 8 |
| F (bioavailability) | Fab | 0.761 | bioavailability | 5 |
| ka ∼ dilution f | equation variable | -0.519 |  | 9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.895). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for tralokinumab's volume of distribution and absorption lag time; t6_deviations.**

The model was built, but tralokinumab's volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — tralokinumab: kabs 0.184 1/day, V2 2.71 L, CL 0.149 L/day, V3 1.44 L, Q 0.159 L/day, Fab 0.761 bioavailability.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f ∼ dilution f: this record has none, the second reading 0.354; it also differs on 1 more field. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (absorption rate constant) | `Q49` · kabs | 0.184 | 1/day | 2.13e-06 | 1/s | 1/h | 4 | exact (1) | cpdd1113-tbl-0002:row2:col2, cpdd1113-tbl-0002:row2:col3 |
| V2 (central volume of distribution) | `Q64` · V2 | 2.71 | L | 0.00271 | m3 | L | 7 | exact (1) | cpdd1113-tbl-0002:row3:col2, cpdd1113-tbl-0002:row3:col3 |
| CL (clearance) | `Q22` · CL | 0.149 | L/day | 1.725e-09 | m3/s | L/h | 5 | exact (1) | cpdd1113-tbl-0002:row4:col2, cpdd1113-tbl-0002:row4:col3 |
| V3 (peripheral volume of distribution) | `Q77` · V3 | 1.44 | L | 0.00144 | m3 | L | 6 | exact (1) | cpdd1113-tbl-0002:row5:col2, cpdd1113-tbl-0002:row5:col3 |
| Q (intercompartmental clearance) | `Q30` · Q | 0.159 | L/day | 1.84e-09 | m3/s | L/h | 8 | exact (1) | cpdd1113-tbl-0002:row6:col2, cpdd1113-tbl-0002:row6:col3 |
| F (bioavailability) | `Q40` · Fab | 0.761 | bioavailability |  |  |  | 5 | exact (1) | cpdd1113-tbl-0002:row7:col2, cpdd1113-tbl-0002:row7:col3 |
| ka ∼ dilution f | `Q900` · equation variable | -0.519 |  |  |  |  | 9 | llm_corrected (0.6) | cpdd1113-tbl-0002:row20:col2, cpdd1113-tbl-0002:row20:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on V2' routed out of structural estimates ('IIV d')
- table section iiv: 'IIV on CL' routed out of structural estimates ('IIV d')
- table section iiv: 'IIV on V2:CL' routed out of structural estimates ('IIV d')
- column 'estimate a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'absorption rate constant' (kabs)
- unit_dimension_unknown: 'central volume of distribution' (V2)
- unit_dimension_unknown: 'clearance' (CL)
- unit_dimension_unknown: 'peripheral volume of distribution' (V3)
- unit_dimension_unknown: 'intercompartmental clearance' (Q)
- dropped unlinked row (NIL): 'V2 and V3 ∼ weight' — extend the ontology if this is a real PK parameter (source ['cpdd1113-tbl-0002:row15:col2', 'cpdd1113-tbl-0002:row15:col3'])
- dropped unlinked row (NIL): 'CL and Q ∼ weight' — extend the ontology if this is a real PK parameter (source ['cpdd1113-tbl-0002:row16:col2', 'cpdd1113-tbl-0002:row16:col3'])
- dropped duplicate Q22 ('CL ∼ non‐ECZTRA trials', value '0.344') — already have one for this compound
- dropped duplicate Q64 ('V2 ∼ non‐ECZTRA trials', value '0.258') — already have one for this compound
- dropped unlinked row (NIL): 'F ∼ dilution f' — extend the ontology if this is a real PK parameter (source ['cpdd1113-tbl-0002:row19:col2', 'cpdd1113-tbl-0002:row19:col3'])
- implicit units: 'ka (absorption rate constant)' → 1/day (from the paper text: "The text states: 'The estimated CL (0.149 L/day), SC bioavailability (76.1%), absorption rate constant (0.184 day) and t")
- implicit units: 'V2 (central volume of distribution)' → L (from the paper text: "The text states: 'The volume of distribution at steady state, calculated based on the final population PK model, was est")
- implicit units: 'CL (clearance)' → L/day (from the paper text: "The text explicitly states: 'The estimated CL (0.149 L/day)...'.")
- implicit units: 'V3 (peripheral volume of distribution)' → L (from the paper text: "The text states: 'The volume of distribution at steady state, calculated based on the final population PK model, was est")
- implicit units: 'Q (intercompartmental clearance)' → L/day (from the popPK convention: 'Q is an intercompartmental clearance. Clearance parameters in this model are scaled by body weight with an allometric ex')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tralokinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none found for 'tralokinumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell cpdd1113-tbl-0002:row2:col4 = '0.164 to 0.202'
- unparsed cell cpdd1113-tbl-0002:row3:col4 = '2.33 to 3.00'
- unparsed cell cpdd1113-tbl-0002:row4:col4 = '0.136 to 0.164'
- unparsed cell cpdd1113-tbl-0002:row5:col4 = '1.21 to 1.71'
- unparsed cell cpdd1113-tbl-0002:row6:col4 = '0.125 to 0.199'
- unparsed cell cpdd1113-tbl-0002:row7:col4 = '0.697 to 0.831'
- unparsed cell cpdd1113-tbl-0002:row8:col4 = '0.123 to 0.366'
- unparsed cell cpdd1113-tbl-0002:row9:col4 = '0.207 to 0.224'
- unparsed cell cpdd1113-tbl-0002:row11:col4 = '34.4 to 48.5'
- unparsed cell cpdd1113-tbl-0002:row12:col4 = '29.6 to 33.0'
- unparsed cell cpdd1113-tbl-0002:row15:col4 = '0.727 to 0.842'
- unparsed cell cpdd1113-tbl-0002:row16:col4 = '0.816 to 0.930'
- unparsed cell cpdd1113-tbl-0002:row17:col4 = '0.308 to 0.387'
- unparsed cell cpdd1113-tbl-0002:row18:col4 = '0.198 to 0.327'
- unparsed cell cpdd1113-tbl-0002:row19:col4 = '0.220 to 0.499'
- unparsed cell cpdd1113-tbl-0002:row20:col4 = '–0.605 to 0.394'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.895 (17/19 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f ∼ dilution f]` |  | 0.354 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka ∼ dilution f]` | -0.519 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cpdd1113-tbl-0002:row4:col2', 'cpdd1113-tbl-0002:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpdd1113-tbl-0002:row6:col2', 'cpdd1113-tbl-0002:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpdd1113-tbl-0002:row2:col2', 'cpdd1113-tbl-0002:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpdd1113-tbl-0002:row3:col2', 'cpdd1113-tbl-0002:row3:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['cpdd1113-tbl-0002:row5:col2', 'cpdd1113-tbl-0002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.149 | ['cpdd1113-tbl-0002:row4:col2', 'cpdd1113-tbl-0002:row4:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00621 L/h | ['cpdd1113-tbl-0002:row4:col2', 'cpdd1113-tbl-0002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.71 L | ['cpdd1113-tbl-0002:row3:col2', 'cpdd1113-tbl-0002:row3:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btralokinumab%5D%20Tralokinumab_Soehoel2022_reference&body=Drug%3A%20tralokinumab%0ARecord%3A%20Tralokinumab_Soehoel2022_reference%0APaper%3A%20Soehoel_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:03 UTC</sub>
