<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Chlorpromazine&quot;,&quot;href&quot;:&quot;drugs/toxin_chlorpromazine/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlorpromazine_Nielsen1983_reference&quot;,&quot;label&quot;:&quot;Nielsen_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlorpromazine/Chlorpromazine_Nielsen1983_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chlorpromazine_Yeung1993_reference&quot;,&quot;label&quot;:&quot;Yeung_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlorpromazine/Chlorpromazine_Yeung1993_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Chlorpromazine — `Chlorpromazine_Yang2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Chlorpromazine" model-id="Chlorpromazine_Yang2025_reference" status="rejected" stale="false" population="Daphnia magna (daphnids)" measured-compound="Chlorpromazine (CPM)" parameterization="mechanistic" topology="1C"></div>

## Citation
Yang H, Xing H, Chen Z, Kong L, Jiang H, Zhu T. Comparative Toxicokinetics and Biomarker Responses of Typical Psychiatric Pharmaceuticals in Daphnia magna. Toxics 13(6) (2025).
  ·  DOI: [10.3390/toxics13060481](https://doi.org/10.3390/toxics13060481)

## Population and dosing

**Population:** Daphnia magna (daphnids) · condition aquatic waterborne exposure, pH 7.5.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Exposure Concentration (mg/L) | Cavg | 0.06 | mg/L |
| Kd(h−1) | KD | 0.040 | h−1 |
| R2 | equation variable | 0.67 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Chlorpromazine (CPM), the second reading chlorpromazine; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Exposure Concentration (mg/L) | `Q71` · Cavg | 0.06 | mg/L | 6e-05 | kg/m3 | mg/l | llm_corrected (0.6) | toxics-13-00481-t002:row1:col2, toxics-13-00481-t002:row2:col2, toxics-13-00481-t002:row3:col2, toxics-13-00481-t002:row4:col2, toxics-13-00481-t002:row5:col2, toxics-13-00481-t002:row6:col2, toxics-13-00481-t002:row7:col2, toxics-13-00481-t002:row8:col2 |
| Kd(h−1) | `Q331` · KD | 0.040 | h−1 |  |  | 1/h | exact (1) | toxics-13-00481-t002:row1:col4, toxics-13-00481-t002:row2:col4, toxics-13-00481-t002:row3:col4, toxics-13-00481-t002:row4:col4, toxics-13-00481-t002:row5:col4, toxics-13-00481-t002:row6:col4, toxics-13-00481-t002:row7:col4, toxics-13-00481-t002:row8:col4 |
| R2 | `Q900` · equation variable | 0.67 |  | 0.67 |  |  | llm (0.6) | toxics-13-00481-t002:row1:col8, toxics-13-00481-t002:row2:col8, toxics-13-00481-t002:row3:col8, toxics-13-00481-t002:row4:col8, toxics-13-00481-t002:row5:col8, toxics-13-00481-t002:row6:col8, toxics-13-00481-t002:row7:col8, toxics-13-00481-t002:row8:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'LC50(mg/L)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row1:col1', 'toxics-13-00481-t002:row2:col1', 'toxics-13-00481-t002:row3:col1', 'toxics-13-00481-t002:row4:col1', 'toxics-13-00481-t002:row5:col1', 'toxics-13-00481-t002:row6:col1', 'toxics-13-00481-t002:row7:col1', 'toxics-13-00481-t002:row8:col1'])
- dropped 'Ku(L/kg/h)' → Q349: the uptake rate from the exposure medium (bioaccumulation), not a body toxicokinetic parameter
- unit_dimension_mismatch: 'Kd(h−1)' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'BCFk(L/kg ww)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row1:col5', 'toxics-13-00481-t002:row2:col5', 'toxics-13-00481-t002:row3:col5', 'toxics-13-00481-t002:row4:col5', 'toxics-13-00481-t002:row5:col5', 'toxics-13-00481-t002:row6:col5', 'toxics-13-00481-t002:row7:col5', 'toxics-13-00481-t002:row8:col5'])
- dropped unlinked row (NIL): 'BCFss(L/kg ww)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row1:col6', 'toxics-13-00481-t002:row2:col6', 'toxics-13-00481-t002:row3:col6', 'toxics-13-00481-t002:row4:col6', 'toxics-13-00481-t002:row5:col6', 'toxics-13-00481-t002:row6:col6', 'toxics-13-00481-t002:row7:col6', 'toxics-13-00481-t002:row8:col6'])
- dropped unlinked row (NIL): 'log BCF' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row1:col7', 'toxics-13-00481-t002:row2:col7', 'toxics-13-00481-t002:row3:col7', 'toxics-13-00481-t002:row4:col7', 'toxics-13-00481-t002:row5:col7', 'toxics-13-00481-t002:row6:col7', 'toxics-13-00481-t002:row7:col7', 'toxics-13-00481-t002:row8:col7'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Chlorpromazine (CPM)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'Chlorpromazine (CPM)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table toxics-13-00481-t002: logical view retains original source coordinates
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[bcfk]` |  | 1084.34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[exposure concentration].value` | 0.06 | 0.001 | mismatch |
| `gpt-oss:120b` | `parameters[kd].value` | 0.040 | 0.166 | mismatch |
| `gpt-oss:120b` | `parameters[r2]` | 0.67 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Chlorpromazine (CPM) | chlorpromazine | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Chlorpromazine (CPM) | chlorpromazine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | h−1 (1 / [time]) | ['toxics-13-00481-t002:row1:col4', 'toxics-13-00481-t002:row2:col4', 'toxics-13-00481-t002:row3:col4', 'toxics-13-00481-t002:row4:col4', 'toxics-13-00481-t002:row5:col4', 'toxics-13-00481-t002:row6:col4', 'toxics-13-00481-t002:row7:col4', 'toxics-13-00481-t002:row8:col4'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['toxics-13-00481-t002:row1:col2', 'toxics-13-00481-t002:row2:col2', 'toxics-13-00481-t002:row3:col2', 'toxics-13-00481-t002:row4:col2', 'toxics-13-00481-t002:row5:col2', 'toxics-13-00481-t002:row6:col2', 'toxics-13-00481-t002:row7:col2', 'toxics-13-00481-t002:row8:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlorpromazine%5D%20Chlorpromazine_Yang2025_reference&body=Drug%3A%20chlorpromazine%0ARecord%3A%20Chlorpromazine_Yang2025_reference%0APaper%3A%20Yang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chlorpromazine/Chlorpromazine_Yang2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 06:30 UTC</sub>
