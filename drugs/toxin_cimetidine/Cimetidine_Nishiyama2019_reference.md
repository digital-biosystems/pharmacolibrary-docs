<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cimetidine&quot;,&quot;href&quot;:&quot;drugs/toxin_cimetidine/&quot;},{&quot;label&quot;:&quot;Nishiyama_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cimetidine — `Cimetidine_Nishiyama2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Cimetidine" model-id="Cimetidine_Nishiyama2019_reference" status="needs_review" stale="false" population="healthy human volunteers (clinical DDI data sets)" measured-compound="cimetidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Nishiyama K, Toshimoto K, Lee W, Ishiguro N, Bister B, Sugiyama Y. Physiologically-Based Pharmacokinetic Modeling Analysis for Quantitative Prediction of Renal Transporter-Mediated Interactions Between Metformin and Cimetidine. CPT: pharmacometrics & systems pharmacology 8(6):396–406 (2019).
  ·  DOI: [10.1002/psp4.12398](https://doi.org/10.1002/psp4.12398)

## Population and dosing

**Population:** healthy human volunteers (clinical DDI data sets) · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed cimetidine (also metformin in the DDI simulations), measured cimetidine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 0.1 | ktr | 0.3 |  |
| k a (/hour) | kabs | 0.21 | /hour |
| AUC0–24 (mg•h/L) | AUCt | 21.4 | mg•h/L |
| CLr (L/hour) | CLR | 23.0 | L/hour |
| mean Vz | V | 160.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 0.1 | `Q306` · ktr | 0.3 |  |  |  |  | llm (0.6) | psp412398-tbl-0001:row2:col1, psp412398-tbl-0001:row2:col2, psp412398-tbl-0001:row2:col3 |
| k a (/hour) | `Q49` · kabs | 0.21 | /hour | 5.833e-05 | 1/s | 1/h | space_fold (0.95) | psp412398-tbl-0001:row4:col2, psp412398-tbl-0001:row4:col3, psp412398-tbl-0001:row4:col4, psp412398-tbl-0001:row4:col5 |
| AUC0–24 (mg•h/L) | `Q19` · AUCt | 21.4 | mg•h/L |  |  | (h·mg)/l | llm (0.6) | psp412398-tbl-0001:row6:col1, psp412398-tbl-0001:row6:col2, psp412398-tbl-0001:row6:col3, psp412398-tbl-0001:row6:col4, psp412398-tbl-0001:row6:col5 |
| CLr (L/hour) | `Q26` · CLR | 23.0 | L/hour | 6.389e-06 | m3/s | l/h | exact (1) | psp412398-tbl-0001:row7:col1, psp412398-tbl-0001:row7:col2, psp412398-tbl-0001:row7:col3, psp412398-tbl-0001:row7:col4, psp412398-tbl-0001:row7:col5 |
| mean Vz | `Q61` · V | 160.0 | L | 0.16 | m3 | L | review_gapfill (0.7) | Choules_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for '0.1'; source reconciliation required
- table representations disagree for 'R MATE/dif'; source reconciliation required
- table representations disagree for 'k a (/hour)'; source reconciliation required
- table representations disagree for 'k trans (/hour)'; source reconciliation required
- table representations disagree for 'AUC0–24 (mg•h/L)'; source reconciliation required
- table representations disagree for 'CLr (L/hour)'; source reconciliation required
- dropped unlinked row (NIL): 'R MATE/dif' — extend the ontology if this is a real PK parameter (source ['psp412398-tbl-0001:row3:col2', 'psp412398-tbl-0001:row3:col3', 'psp412398-tbl-0001:row3:col4', 'psp412398-tbl-0001:row3:col5'])
- relinked 'k trans (/hour)' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('k trans (/hour)', value '2.4') — already have one for this compound
- unit_dimension_unknown: 'mg•h/L' (AUCt)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cimetidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Choules_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp412398-tbl-0001: ragged_grid
- table psp412398-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 8 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['psp412398-tbl-0001:row7:col1', 'psp412398-tbl-0001:row7:col2', 'psp412398-tbl-0001:row7:col3', 'psp412398-tbl-0001:row7:col4', 'psp412398-tbl-0001:row7:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412398-tbl-0001:row4:col2', 'psp412398-tbl-0001:row4:col3', 'psp412398-tbl-0001:row4:col4', 'psp412398-tbl-0001:row4:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Choules_2025:review'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | mg•h/L | ['psp412398-tbl-0001:row6:col1', 'psp412398-tbl-0001:row6:col2', 'psp412398-tbl-0001:row6:col3', 'psp412398-tbl-0001:row6:col4', 'psp412398-tbl-0001:row6:col5'] |
| C5_unit_missing_Q306 | fail | 1 / [time] |  | ['psp412398-tbl-0001:row2:col1', 'psp412398-tbl-0001:row2:col2', 'psp412398-tbl-0001:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 160 L | ['Choules_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcimetidine%5D%20Cimetidine_Nishiyama2019_reference&body=Drug%3A%20cimetidine%0ARecord%3A%20Cimetidine_Nishiyama2019_reference%0APaper%3A%20Nishiyama_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cimetidine/Cimetidine_Nishiyama2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:13 UTC</sub>
