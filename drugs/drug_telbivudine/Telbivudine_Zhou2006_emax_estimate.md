<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;telbivudine&quot;,&quot;href&quot;:&quot;drugs/drug_telbivudine/&quot;},{&quot;label&quot;:&quot;Zhou_2006 \u00b7 emax_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telbivudine — `Telbivudine_Zhou2006_emax_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="telbivudine" model-id="Telbivudine_Zhou2006_emax_estimate" status="rejected" stale="false" population="adult patients with chronic hepatitis B virus infection" measured-compound="telbivudine" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhou XJ, Lim SG, Lloyd DM, Chao GC, Brown NA, Lai CL. Pharmacokinetics of telbivudine following oral administration of escalating single and multiple doses in patients with chronic hepatitis B virus infection: pharmacodynamic implications. Antimicrobial agents and chemotherapy 50(3):874–879 (2006).
  ·  DOI: [10.1128/AAC.50.3.874-879.2006](https://doi.org/10.1128/AAC.50.3.874-879.2006)

## Population and dosing

**Population:** adult patients with chronic hepatitis B virus infection · condition chronic hepatitis B virus infection · age group adult.

**Dosing:** 25, 50, 100, 200, 400, 800 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax Day 1 | Cmax | 3.33 | μg/ml |
| AUC0-t Day 1 | AUCt | 3.20 | μg·h/ml |
| AUC0-t Steady state | AUCSS | 3.36 | μg·h/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, AUCt and AUCSS), so that value has no SI equivalent.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Cmax Day 1 | `Q32` · Cmax | 3.33 | μg/ml | μg/ml | llm_confirmed (0.6) | Zhou_2006_table_3:row0:col1 |
| AUC0-t Day 1 | `Q19` · AUCt | 3.20 | μg·h/ml | μg·h/ml | llm_confirmed (0.6) | Zhou_2006_table_3:row2:col1 |
| AUC0-t Steady state | `Q18` · AUCSS | 3.36 | μg·h/ml | μg·h/ml | llm_corrected (0.6) | Zhou_2006_table_3:row3:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax Steady state', value '3.44') — already have one for this compound
- implicit units: 'Cmax Day 1' → μg/ml (from the paper text: 'The paper text states: "the mean C max increased from 0.20 to 3.97 g/ml ... on day 1" (noting that \'g/ml\' is a typograph')
- implicit units: 'AUC0-t Day 1' → μg·h/ml (from the paper text: 'The paper text states: "the mean AUC 0-t increased from 0.51 to 20.94 g • h/ml" (noting \'g • h/ml\' is a typographical er')
- implicit units: 'AUC0-t Steady state' → μg·h/ml (from the paper text: 'The paper text in the Discussion section states: "...predicted to be as low as 0.78 g/ml for C max and 3.36 g • h/ml for')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=telbivudine
- population split: 'emax estimate' subgroup of Zhou_2006 (paper reports 2 populations: emax estimate, epk50 estimate)

**Extraction notes:**
- table Zhou_2006_table_3: units_need_context
- table Zhou_2006_table_2: unparsed_numeric_cell
- transposed table Zhou_2006_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (66 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (7/7 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  | ['Zhou_2006_table_3:row3:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Zhou_2006_table_3:row2:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zhou_2006_table_3:row0:col1'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelbivudine%5D%20Telbivudine_Zhou2006_emax_estimate&body=Drug%3A%20telbivudine%0ARecord%3A%20Telbivudine_Zhou2006_emax_estimate%0APaper%3A%20Zhou_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telbivudine/Telbivudine_Zhou2006_emax_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:04 UTC</sub>
