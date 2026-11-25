<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;suramin sodium&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/&quot;},{&quot;label&quot;:&quot;Naviaux_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SuraminSodium_Kosarek2006_reference&quot;,&quot;label&quot;:&quot;Kosarek_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/SuraminSodium_Kosarek2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# suramin sodium — `SuraminSodium_Naviaux2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="suramin sodium" model-id="SuraminSodium_Naviaux2017_reference" status="rejected" stale="false" population="children with autism spectrum disorder" measured-compound="suramin" parameterization="mechanistic" topology="1C"></div>

## Citation
Naviaux RK, Curtis B, Li K, Naviaux JC, Bright AT, Reiner GE et al. Low-dose suramin in autism spectrum disorder: a small, phase I/II, randomized clinical trial. Annals of clinical and translational neurology 4(7):491-505 (2017).
  ·  DOI: [10.1002/acn3.424](https://doi.org/10.1002/acn3.424)

## Population and dosing

**Population:** children with autism spectrum disorder · condition autism spectrum disorder · age group child · n = 5.

**Dosing:** 1400, 3500 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| d1 | D1 | 2.9 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has suramin, the second reading suramin sodium; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| d1 | `Q310` · D1 | 2.9 | h | 1.044e+04 | s | h | exact (1) | Naviaux_2017_table_5:row0:col6, Naviaux_2017_table_5:row0:col12, Naviaux_2017_table_5:row1:col6, Naviaux_2017_table_5:row1:col12, Naviaux_2017_table_5:row2:col6, Naviaux_2017_table_5:row2:col12, Naviaux_2017_table_5:row3:col6, Naviaux_2017_table_5:row3:col12, Naviaux_2017_table_5:row4:col6, Naviaux_2017_table_5:row4:col12, Naviaux_2017_table_5:row5:col6, Naviaux_2017_table_5:row5:col12, Naviaux_2017_table_5:row6:col6, Naviaux_2017_table_5:row6:col12, Naviaux_2017_table_5:row7:col6, Naviaux_2017_table_5:row7:col12, Naviaux_2017_table_5:row8:col6, Naviaux_2017_table_5:row8:col12, Naviaux_2017_table_5:row9:col6, Naviaux_2017_table_5:row9:col12, Naviaux_2017_table_5:row10:col6, Naviaux_2017_table_5:row10:col12, Naviaux_2017_table_5:row11:col6, Naviaux_2017_table_5:row11:col12, Naviaux_2017_table_5:row12:col6, Naviaux_2017_table_5:row12:col12, Naviaux_2017_table_5:row13:col6, Naviaux_2017_table_5:row13:col12 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Beta elimination half-life | Q60 | half_life_rule |
| Alpha elimination half-life | Q59 | half_life_rule |
| Clearance | Q22 | exact |
| Steady state volume of distribution | Q65 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- column 'primary outcomes' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'secondary outcomes' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'symbol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mean ± sd' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Time after treatment (days)' — extend the ontology if this is a real PK parameter (source ['Naviaux_2017_table_5:row0:col3', 'Naviaux_2017_table_5:row1:col3', 'Naviaux_2017_table_5:row2:col3', 'Naviaux_2017_table_5:row3:col3', 'Naviaux_2017_table_5:row5:col3', 'Naviaux_2017_table_5:row6:col3', 'Naviaux_2017_table_5:row7:col3', 'Naviaux_2017_table_5:row8:col3', 'Naviaux_2017_table_5:row9:col3', 'Naviaux_2017_table_5:row10:col3', 'Naviaux_2017_table_5:row11:col3', 'Naviaux_2017_table_5:row12:col3', 'Naviaux_2017_table_5:row13:col3'])
- dropped unlinked row (NIL): 'Difference from baseline (mean ± SD)' — extend the ontology if this is a real PK parameter (source ['Naviaux_2017_table_5:row0:col4', 'Naviaux_2017_table_5:row0:col10', 'Naviaux_2017_table_5:row1:col4', 'Naviaux_2017_table_5:row1:col10', 'Naviaux_2017_table_5:row2:col4', 'Naviaux_2017_table_5:row2:col10', 'Naviaux_2017_table_5:row3:col4', 'Naviaux_2017_table_5:row3:col10', 'Naviaux_2017_table_5:row4:col10', 'Naviaux_2017_table_5:row5:col4', 'Naviaux_2017_table_5:row5:col10', 'Naviaux_2017_table_5:row6:col4', 'Naviaux_2017_table_5:row6:col10', 'Naviaux_2017_table_5:row7:col4', 'Naviaux_2017_table_5:row7:col10', 'Naviaux_2017_table_5:row8:col4', 'Naviaux_2017_table_5:row8:col10', 'Naviaux_2017_table_5:row9:col4', 'Naviaux_2017_table_5:row9:col10', 'Naviaux_2017_table_5:row10:col4', 'Naviaux_2017_table_5:row10:col10', 'Naviaux_2017_table_5:row11:col4', 'Naviaux_2017_table_5:row11:col10', 'Naviaux_2017_table_5:row12:col4', 'Naviaux_2017_table_5:row12:col10', 'Naviaux_2017_table_5:row13:col4', 'Naviaux_2017_table_5:row13:col10'])
- dropped unlinked row (NIL): 'P2' — extend the ontology if this is a real PK parameter (source ['Naviaux_2017_table_5:row0:col8', 'Naviaux_2017_table_5:row0:col14', 'Naviaux_2017_table_5:row1:col8', 'Naviaux_2017_table_5:row1:col14', 'Naviaux_2017_table_5:row2:col8', 'Naviaux_2017_table_5:row2:col14', 'Naviaux_2017_table_5:row3:col8', 'Naviaux_2017_table_5:row3:col14', 'Naviaux_2017_table_5:row4:col8', 'Naviaux_2017_table_5:row4:col14', 'Naviaux_2017_table_5:row5:col8', 'Naviaux_2017_table_5:row5:col14', 'Naviaux_2017_table_5:row6:col8', 'Naviaux_2017_table_5:row6:col14', 'Naviaux_2017_table_5:row7:col8', 'Naviaux_2017_table_5:row7:col14', 'Naviaux_2017_table_5:row8:col8', 'Naviaux_2017_table_5:row8:col14', 'Naviaux_2017_table_5:row9:col8', 'Naviaux_2017_table_5:row9:col14', 'Naviaux_2017_table_5:row10:col8', 'Naviaux_2017_table_5:row10:col14', 'Naviaux_2017_table_5:row11:col8', 'Naviaux_2017_table_5:row11:col14', 'Naviaux_2017_table_5:row12:col8', 'Naviaux_2017_table_5:row12:col14', 'Naviaux_2017_table_5:row13:col8', 'Naviaux_2017_table_5:row13:col14'])
- dropped unlinked row (NIL): 'P3' — extend the ontology if this is a real PK parameter (source ['Naviaux_2017_table_5:row0:col9', 'Naviaux_2017_table_5:row0:col15', 'Naviaux_2017_table_5:row1:col9', 'Naviaux_2017_table_5:row1:col15', 'Naviaux_2017_table_5:row2:col9', 'Naviaux_2017_table_5:row2:col15', 'Naviaux_2017_table_5:row3:col9', 'Naviaux_2017_table_5:row3:col15', 'Naviaux_2017_table_5:row4:col9', 'Naviaux_2017_table_5:row4:col15', 'Naviaux_2017_table_5:row5:col9', 'Naviaux_2017_table_5:row5:col15', 'Naviaux_2017_table_5:row6:col9', 'Naviaux_2017_table_5:row6:col15', 'Naviaux_2017_table_5:row7:col9', 'Naviaux_2017_table_5:row7:col15', 'Naviaux_2017_table_5:row8:col9', 'Naviaux_2017_table_5:row8:col15', 'Naviaux_2017_table_5:row9:col9', 'Naviaux_2017_table_5:row9:col15', 'Naviaux_2017_table_5:row10:col9', 'Naviaux_2017_table_5:row13:col9', 'Naviaux_2017_table_5:row13:col15'])
- implicit units: 'd1' → h (from the popPK convention: "The parameter 'd1' represents the duration of a zero-order input (infusion). In population pharmacokinetic modeling, tim")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=suramin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Naviaux_2017_table_5: unbound_uncertainty
- transposed table Naviaux_2017_table_5: logical view retains original source coordinates
- table Naviaux_2017_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | suramin | suramin sodium | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | suramin | suramin sodium | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q310 | pass | [time] |  | ['Naviaux_2017_table_5:row0:col6', 'Naviaux_2017_table_5:row0:col12', 'Naviaux_2017_table_5:row1:col6', 'Naviaux_2017_table_5:row1:col12', 'Naviaux_2017_table_5:row2:col6', 'Naviaux_2017_table_5:row2:col12', 'Naviaux_2017_table_5:row3:col6', 'Naviaux_2017_table_5:row3:col12', 'Naviaux_2017_table_5:row4:col6', 'Naviaux_2017_table_5:row4:col12', 'Naviaux_2017_table_5:row5:col6', 'Naviaux_2017_table_5:row5:col12', 'Naviaux_2017_table_5:row6:col6', 'Naviaux_2017_table_5:row6:col12', 'Naviaux_2017_table_5:row7:col6', 'Naviaux_2017_table_5:row7:col12', 'Naviaux_2017_table_5:row8:col6', 'Naviaux_2017_table_5:row8:col12', 'Naviaux_2017_table_5:row9:col6', 'Naviaux_2017_table_5:row9:col12', 'Naviaux_2017_table_5:row10:col6', 'Naviaux_2017_table_5:row10:col12', 'Naviaux_2017_table_5:row11:col6', 'Naviaux_2017_table_5:row11:col12', 'Naviaux_2017_table_5:row12:col6', 'Naviaux_2017_table_5:row12:col12', 'Naviaux_2017_table_5:row13:col6', 'Naviaux_2017_table_5:row13:col12'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuramin_sodium%5D%20SuraminSodium_Naviaux2017_reference&body=Drug%3A%20suramin_sodium%0ARecord%3A%20SuraminSodium_Naviaux2017_reference%0APaper%3A%20Naviaux_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:33 UTC</sub>
