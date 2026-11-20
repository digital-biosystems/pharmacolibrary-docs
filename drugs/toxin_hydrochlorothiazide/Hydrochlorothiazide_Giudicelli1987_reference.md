<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Hydrochlorothiazide&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrochlorothiazide/&quot;},{&quot;label&quot;:&quot;Giudicelli_1987 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydrochlorothiazide_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrochlorothiazide/Hydrochlorothiazide_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydrochlorothiazide_Roux1983_reference&quot;,&quot;label&quot;:&quot;Roux_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrochlorothiazide/Hydrochlorothiazide_Roux1983_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydrochlorothiazide_Vlachou2021_reference&quot;,&quot;label&quot;:&quot;Vlachou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrochlorothiazide/Hydrochlorothiazide_Vlachou2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydrochlorothiazide — `Hydrochlorothiazide_Giudicelli1987_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Hydrochlorothiazide" model-id="Hydrochlorothiazide_Giudicelli1987_reference" status="rejected" stale="false" population="patients with moderate essential hypertension and normal renal function" measured-compound="Hydrochlorothiazide" parameterization="mechanistic" topology="retention"></div>

## Citation
Giudicelli JF, Richer C, Mattei A. Pharmacokinetics and biological effects of captopril and hydrochlorothiazide after acute and chronic administration either alone or in combination in hypertensive patients. British journal of clinical pharmacology 23 Suppl 1(Suppl 1):51S–63S (1987).
  ·  DOI: [10.1111/j.1365-2125.1987.tb03122.x](https://doi.org/10.1111/j.1365-2125.1987.tb03122.x)

## Population and dosing

**Population:** patients with moderate essential hypertension and normal renal function · condition chronic dietary exposure · age group adult · n = 25.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Elimination half-lives of total captopril after acute | t1/2z | 7.8 | h |
| total captopril after chronic | kel | 7.0 | h |
| HCTZ after acute | t1/2z | 6.5 | h |
| HCTZ after chronic | kel | 8.0 | h |
| Elimination half-life of free unchanged captopril ... after acute | t1/2z | 0.81 | h |
| free unchanged captopril ... after chronic | kel | 0.96 | h |
| Ka | kabs | 0.01417 | min−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Elimination half-lives of total captopril after acute | `Q57` · t1/2z | 7.8 | h | 2.808e+04 | s | h | toxin_unit_relink (0.85) | Giudicelli_1987:abstract |
| total captopril after chronic | `Q47` · kel | 7.0 | h |  |  | h | exact (1) | Giudicelli_1987:abstract |
| HCTZ after acute | `Q57` · t1/2z | 6.5 | h | 2.34e+04 | s | h | llm (0.6) | Giudicelli_1987:abstract |
| HCTZ after chronic | `Q47` · kel | 8.0 | h |  |  | h | exact (1) | Giudicelli_1987:abstract |
| Elimination half-life of free unchanged captopril ... after acute | `Q57` · t1/2z | 0.81 | h | 2916 | s | h | toxin_unit_relink (0.85) | Giudicelli_1987:abstract |
| free unchanged captopril ... after chronic | `Q47` · kel | 0.96 | h |  |  | h | exact (1) | Giudicelli_1987:abstract |
| Ka | `Q49` · kabs | 0.01417 | min−1 | 0.0002362 | 1/s | 1/h | review_gapfill (0.7) | Vlachou_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- relinked 'Elimination half-lives of total captopril after acute' Q47 → Q57: a half-life by its label (the unit decides, not the label)
- unit_dimension_mismatch: 'total captopril after chronic' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- linked 'HCTZ after chronic' as 'kel' → Q47 (kel) for  — compound marker removed
- unit_dimension_mismatch: 'HCTZ after chronic' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- relinked 'Elimination half-life of free unchanged captopril ... after acute' Q47 → Q57: a half-life by its label (the unit decides, not the label)
- unit_dimension_mismatch: 'free unchanged captopril ... after chronic' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Hydrochlorothiazide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 6 linked by role; re-tagged Hydrochlorothiazide→Total Captopril ×2, Hydrochlorothiazide→parent ×2, Hydrochlorothiazide→Free unchanged Captopril ×2
- molar mass: no plausible PubChem entry for 'Free unchanged Captopril' ('Free unchanged Captopril') — left in mass units
- molar mass: no plausible PubChem entry for 'Total Captopril' ('Total Captopril') — left in mass units
- molar mass: none found for 'Free unchanged Captopril' — its concentrations stay mass-only
- molar mass: none found for 'Total Captopril' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V from Gosse_2006: its label names a different analyte ('telmisartan') — 'volume of distribution of telmisartan'
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Vlachou_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Giudicelli_1987_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Giudicelli_1987:abstract'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Giudicelli_1987:abstract'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Giudicelli_1987:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Vlachou_2021:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Giudicelli_1987:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Giudicelli_1987:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Giudicelli_1987:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydrochlorothiazide%5D%20Hydrochlorothiazide_Giudicelli1987_reference&body=Drug%3A%20hydrochlorothiazide%0ARecord%3A%20Hydrochlorothiazide_Giudicelli1987_reference%0APaper%3A%20Giudicelli_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydrochlorothiazide/Hydrochlorothiazide_Giudicelli1987_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 10:56 UTC</sub>
