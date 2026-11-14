<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cisapride&quot;,&quot;href&quot;:&quot;drugs/toxin_cisapride/&quot;},{&quot;label&quot;:&quot;Kearns_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisapride_Cook1997_reference&quot;,&quot;label&quot;:&quot;Cook_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisapride/Cisapride_Cook1997_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisapride_Desta2001v2_reference&quot;,&quot;label&quot;:&quot;Desta_2001_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisapride/Cisapride_Desta2001v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisapride_Gladziwa1991_reference&quot;,&quot;label&quot;:&quot;Gladziwa_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisapride/Cisapride_Gladziwa1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cisapride — `Cisapride_Kearns2003_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Cisapride" model-id="Cisapride_Kearns2003_reference" status="rejected" stale="false" population="neonates and young infants" measured-compound="Cisapride" parameterization="apparent" topology="1C"></div>

## Citation
Kearns GL, Robinson PK, Wilson JT, Wilson-Costello D, Knight GR, Ward RM et al. Cisapride disposition in neonates and infants: in vivo reflection of cytochrome P450 3A4 ontogeny. Clinical pharmacology and therapeutics 74(4):312–325 (2003).
  ·  DOI: [10.1016/S0009-9236(03)00225-X](https://doi.org/10.1016/S0009-9236(03)00225-X)

## Population and dosing

**Population:** neonates and young infants · condition feeding intolerance / gastroesophageal reflux (single dose, tolerability) · age group infant · n = 35.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t(max) | tmax | 4.4 | hours |
| C(max) | Cmax | 29.3 | ng/mL |
| t(1/2) | t1/2z | 10.7 | hours |
| Cl/F | CL/F | 0.62 | L.kg(-1) |
| VD(ss)/F | V/F | 9.0 | L/kg |
| CL(R) | CL | 0.003 | L. |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of apparent renal clearance (cl(r)): this record has none, the second reading 0.003; it also differs on 10 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t(max) | `Q56` · tmax | 4.4 | hours | 1.584e+04 | s | h | llm (0.6) | Kearns_2003:abstract |
| C(max) | `Q32` · Cmax | 29.3 | ng/mL | 2.93e-05 | kg/m3 | ng/ml | llm (0.6) | Kearns_2003:abstract |
| t(1/2) | `Q57` · t1/2z | 10.7 | hours | 3.852e+04 | s | h | llm (0.6) | Kearns_2003:abstract |
| Cl/F | `Q27` · CL/F | 0.62 | L.kg(-1) |  |  | l/kg | exact (1) | Kearns_2003:abstract |
| VD(ss)/F | `Q76` · V/F | 9.0 | L/kg | 0.63 | m3 | l/kg | space_fold (0.95) | Kearns_2003:abstract |
| CL(R) | `Q22` · CL | 0.003 | L. |  |  | l | exact (1) | Kearns_2003:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 't(max) range' — extend the ontology if this is a real PK parameter (source ['Kearns_2003:abstract'])
- dropped duplicate Q56 ('t(max) range upper', value 12) — already have one for this compound
- dropped unlinked row (NIL): 'C(max) range' — extend the ontology if this is a real PK parameter (source ['Kearns_2003:abstract'])
- dropped duplicate Q32 ('C(max) range upper', value 71.7) — already have one for this compound
- dropped unlinked row (NIL): 't(1/2) range' — extend the ontology if this is a real PK parameter (source ['Kearns_2003:abstract'])
- dropped duplicate Q57 ('t(1/2) range upper', value 18.1) — already have one for this compound
- unit_dimension_mismatch: 'Cl/F' → Q27 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'VD(ss)/F range' — extend the ontology if this is a real PK parameter (source ['Kearns_2003:abstract'])
- dropped duplicate Q76 ('VD(ss)/F range upper', value 30.5) — already have one for this compound
- unit_dimension_mismatch: 'CL(R)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped PD-category row 'lambda(z)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Kearns_2003:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Cisapride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 0/15 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Norcisapride' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kearns_2003_metadata.yaml (15 record(s)); values are summary statistics, not a fitted model
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[apparent renal clearance (cl(r))]` |  | 0.003 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent total body clearance]` |  | 0.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution (vd(ss)/f)]` |  | 9.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c]` | 29.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 0.62 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 0.003 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (t(1/2))]` |  | 10.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peak plasma concentration (c(max))]` |  | 29.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t]` | 4.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[time to reach peak plasma concentration (t(max))]` |  | 4.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd(ss)/f]` | 9.0 |  | only_one_extracted |

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
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | L. ([length] ** 3) | ['Kearns_2003:abstract'] |
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | L.kg(-1) ([length] ** 3) | ['Kearns_2003:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kearns_2003:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kearns_2003:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kearns_2003:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kearns_2003:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 630 L | ['Kearns_2003:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcisapride%5D%20Cisapride_Kearns2003_reference&body=Drug%3A%20cisapride%0ARecord%3A%20Cisapride_Kearns2003_reference%0APaper%3A%20Kearns_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cisapride/Cisapride_Kearns2003_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 08:59 UTC</sub>
