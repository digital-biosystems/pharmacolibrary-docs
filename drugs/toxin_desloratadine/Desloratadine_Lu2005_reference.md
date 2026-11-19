<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Desloratadine&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/&quot;},{&quot;label&quot;:&quot;Lu_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desloratadine_Wang2015_reference&quot;,&quot;label&quot;:&quot;Wang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Wang2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_beagles_dl_tablet_10_mg_39&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_beagles_ltd_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_beagles_ltd_tablet_10_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_ltd_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_humans_dl_tablet_10_mg_4&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_humans_dl_tablet_10_mg_41&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_humans_dl_tablet_10_mg_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_humans_ltd_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_humans_ltd_tablet_10_mg_40&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_humans_ltd_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Desloratadine — `Desloratadine_Lu2005_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the area under the curve for desloratadine has inconsistent units, defining concentration per time rather than the correct mass times time per volume.

<div class="pk-model-meta" hidden drug="Desloratadine" model-id="Desloratadine_Lu2005_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="Desloratadine" parameterization="mechanistic" topology="1C"></div>

## Citation
Lu XY, Sheng-Tu JZ, Chen ZG, Huang MZ, Zhou HL, Zheng GG. [Study on determination of desloratadine in human serum and its pharmacokinetics by HPLC/MS]. Zhejiang da xue xue bao. Yi xue ban = Journal of Zhejiang University. Medical sciences 34(4):372–374 (2005).
  ·  DOI: [10.3785/j.issn.1008-9292.2005.04.019](https://doi.org/10.3785/j.issn.1008-9292.2005.04.019)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 18.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t(max) | tmax | 1.611 | h |
| C(max) | Cmax | 4.455 | microg x L(-1) |
| AUC(0-t) | AUC | 58.5 | microg x L(-1) x h(-1) |
| t(1/2(ke)) | t1/2z | 20.303 | h |
| Ke | kel | 0.0372 | h(-1) |
| CL | CL | 0.1838 | L x h(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the area under the curve for desloratadine has inconsistent units, defining concentration per time rather than the correct mass times time per volume.**

The area under the concentration-time curve for desloratadine is reported with units of micrograms per liter per hour. This dimensional configuration is physically incorrect for an exposure metric, which must represent mass multiplied by time divided by volume. Additionally, the model relies solely on abstract-derived summary statistics rather than a fitted pharmacokinetic structure. Extracted — desloratadine: tmax 1.61 h, Cmax 4.46 microg x L(-1), AUC 58.5 microg x L(-1) x h(-1), t1/2z 20.3 h, kel 0.0372 h(-1), CL 0.184 L x h(-1).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t(max) | `Q56` · tmax | 1.611 | h | 5800 | s | h | llm (0.6) | Lu_2005:abstract |
| C(max) | `Q32` · Cmax | 4.455 | microg x L(-1) | 4.455e-06 | kg/m3 | µg/l | llm (0.6) | Lu_2005:abstract |
| AUC(0-t) | `Q88` · AUC | 58.5 | microg x L(-1) x h(-1) |  |  | µg/(h·l) | exact (1) | Lu_2005:abstract |
| t(1/2(ke)) | `Q57` · t1/2z | 20.303 | h | 7.309e+04 | s | h | llm_corrected (0.6) | Lu_2005:abstract |
| Ke | `Q47` · kel | 0.0372 | h(-1) | 1.033e-05 | 1/s | 1/h | exact (1) | Lu_2005:abstract |
| CL | `Q22` · CL | 0.1838 | L x h(-1) | 5.106e-08 | m3/s | l/h | exact (1) | Lu_2005:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC(0-t)' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC(0-infinity)' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('AUC(0-infinity)', value 60.59) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Desloratadine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lu_2005_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lu_2005:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Lu_2005:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lu_2005:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Lu_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lu_2005:abstract'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | microg x L(-1) x h(-1) ([mass] / [length] ** 3 / [time]) | ['Lu_2005:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.1838 | ['Lu_2005:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.184 L/h | ['Lu_2005:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesloratadine%5D%20Desloratadine_Lu2005_reference&body=Drug%3A%20desloratadine%0ARecord%3A%20Desloratadine_Lu2005_reference%0APaper%3A%20Lu_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_desloratadine/Desloratadine_Lu2005_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:19 UTC</sub>
