<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Alprazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/&quot;},{&quot;label&quot;:&quot;Barter_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Yamamoto2019_reference&quot;,&quot;label&quot;:&quot;Yamamoto_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/Alprazolam_Yamamoto2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alprazolam — `Alprazolam_Barter2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Alprazolam" model-id="Alprazolam_Barter2013_reference" status="needs_review" stale="false" population="Chinese and Caucasian adults" measured-compound="Alprazolam" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Barter ZE, Tucker GT, Rowland-Yeo K. Differences in cytochrome p450-mediated pharmacokinetics between chinese and caucasian populations predicted by mechanistic physiologically based pharmacokinetic modelling. Clinical pharmacokinetics 52(12):1085–1100 (2013).
  ·  DOI: [10.1007/s40262-013-0089-y](https://doi.org/10.1007/s40262-013-0089-y)

## Population and dosing

**Population:** Chinese and Caucasian adults · condition healthy · age group adult.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| phenacetin clearance, predicted lower in Chinese | CL | 36 |  |
| midazolam (oral) clearance, predicted lower in Chinese | CL/F | 17 |  |
| alprazolam (intravenous) clearance, predicted lower in Chinese | equation variable | 21 |  |
| alprazolam (intravenous) clearance, observed lower in Chinese | CL_ratio | 20 |  |
| geometric mean VSS/F values (&lt;50 kg) | V/F | 67.53 | L |
| absorption rate constant for the slow absorption component | kabs | 5.37 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has bupropion → hydroxy bupropion (metabolism), the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| phenacetin clearance, predicted lower in Chinese | `Q22` · CL | 36 |  |  |  |  | llm_confirmed (0.6) | Barter_2013:abstract |
| midazolam (oral) clearance, predicted lower in Chinese | `Q27` · CL/F | 17 |  |  |  |  | llm_corrected (0.6) | Barter_2013:abstract |
| alprazolam (intravenous) clearance, predicted lower in Chinese | `Q900` · equation variable | 21 |  | 21 |  |  | llm_corrected (0.6) | Barter_2013:abstract |
| alprazolam (intravenous) clearance, observed lower in Chinese | `Q31` · CL_ratio | 20 |  | 20 |  |  | llm_corrected (0.6) | Barter_2013:abstract |
| geometric mean VSS/F values (&lt;50 kg) | `Q76` · V/F | 67.53 | L | 0.06753 | m3 | L | review_gapfill (0.7) | Klein_2026:review |
| absorption rate constant for the slow absorption component | `Q49` · kabs | 5.37 | h−1 | 0.001492 | 1/s | 1/h | review_gapfill (0.7) | Klein_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Chinese CYP2C19 PMs' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'Caucasian CYP2C19 PMs' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'Chinese CYP2D6 PMs' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- covariate cyp2d6 for equation variable from footnote/prose kept as documentation only (['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'Caucasian CYP2D6 PMs' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'Caucasian CYP2D6 IMs' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- covariate cyp2c19 for CLint from footnote/prose kept as documentation only (['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'hepatic abundance of CYP2C19, Caucasian' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'liver weight, Chinese' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'liver weight, Caucasian' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'predicted within twofold' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped unlinked row (NIL): 'predicted within 1.5-fold' — extend the ontology if this is a real PK parameter (source ['Barter_2013:abstract'])
- dropped duplicate Q22 ('tolbutamide clearance, predicted lower in Chinese', value 25) — already have one for this compound
- dropped duplicate Q22 ('omeprazole clearance, predicted lower in Chinese', value 51) — already have one for this compound
- dropped duplicate Q22 ('desipramine clearance, predicted lower in Chinese', value 43) — already have one for this compound
- dropped duplicate Q22 ('midazolam (intravenous) clearance, predicted lower in Chinese', value 24) — already have one for this compound
- dropped duplicate Q27 ('alprazolam (oral) clearance, predicted lower in Chinese', value 22) — already have one for this compound
- dropped duplicate Q22 ('phenacetin clearance, observed lower in Chinese', value 28) — already have one for this compound
- dropped duplicate Q22 ('tolbutamide clearance, observed lower in Chinese', value 2) — already have one for this compound
- dropped duplicate Q22 ('omeprazole clearance, observed lower in Chinese', value 75) — already have one for this compound
- dropped duplicate Q22 ('desipramine clearance, observed lower in Chinese', value 42) — already have one for this compound
- dropped duplicate Q22 ('midazolam (intravenous) clearance, observed lower in Chinese', value 19) — already have one for this compound
- dropped duplicate Q27 ('midazolam (oral) clearance, observed lower in Chinese', value 62) — already have one for this compound
- dropped duplicate Q27 ('alprazolam (oral) clearance, observed lower in Chinese', value 21) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Alprazolam
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=pbpk; 0/28 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Bupropion' — its concentrations stay mass-only
- molar mass: none found for 'Hydroxy bupropion' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q76 (V/F) from Klein_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Klein_2026's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Barter_2013_metadata.yaml (28 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['bupropion', 'hydroxy bupropion', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[alprazolam (intravenous) clearance, observed lower in chinese]` | 20 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[alprazolam (intravenous) clearance, predicted lower in chinese]` | 21 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[midazolam (oral) clearance, predicted lower in chinese]` | 17 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[phenacetin clearance, predicted lower in chinese]` | 36 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[phenacetin clearance]` |  | 36 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Klein_2026:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Klein_2026:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Barter_2013:abstract'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Barter_2013:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 67.5 L | ['Klein_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balprazolam%5D%20Alprazolam_Barter2013_reference&body=Drug%3A%20alprazolam%0ARecord%3A%20Alprazolam_Barter2013_reference%0APaper%3A%20Barter_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alprazolam/Alprazolam_Barter2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:15 UTC</sub>
