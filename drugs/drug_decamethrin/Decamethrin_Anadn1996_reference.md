<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03B&quot;,&quot;href&quot;:&quot;atc/P03B.md&quot;},{&quot;label&quot;:&quot;decamethrin&quot;,&quot;href&quot;:&quot;drugs/drug_decamethrin/&quot;},{&quot;label&quot;:&quot;Anad\u00f3n_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# decamethrin — `Decamethrin_Anadn1996_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.278). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The deltamethrin record was rejected because the metabolite 4'-HO-deltamethrin is unlinked: the metabolism link from parent to metabolite carries no parameter, leaving the metabolite without a path from the dose, and the model was built from the abstract only.**

The structure is parent–metabolite, with 4'-HO-deltamethrin formed from deltamethrin in the central compartment, but the metabolism link has link parameter 'none' of unknown kind, so the metabolite has no quantitative connection to the dose and counts as an unlinked metabolite. The record is also abstract-only, meaning reported summary statistics (e.g., t1/2z 33.0 hr for deltamethrin and 25.67 hr for 4'-HO-deltamethrin, CL 0.11 liter/hr, Fab 14.43%) stood in for a fitted model rather than being extracted from one. Extracted — decamethrin: t1/2z 33 hr, V2 5.33 liters, V 2.04 liters, CL 0.11 liter/hr, tmax 1.83 hr, Fab 14.4 %, Kp 2.32 deltamethrin, medulla oblongata, AUC ratio 295 deltamethrin, hypothalamus; 4'-HO-deltamethrin: t1/2z 25.7 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auctissue/aucplasma: this record has 2.32, the second reading none; it also differs on 12 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Anadón A et al., Toxicokinetics of deltamethrin and its…, Toxicology and applied phar… (1996)
  ·  DOI: [10.1006/taap.1996.0254](https://doi.org/10.1006/taap.1996.0254)

## Model component
<dbs-pgx drug="decamethrin" model-id="Decamethrin_Anadn1996_reference" status="rejected" stale="false" population="male Wistar rats" measured-compound="deltamethrin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2 theta (deltamethrin, iv, plasma) | `Q57` · t1/2z | 33.0 | hr | 118800.0 | [h] | not captured | llm_confirmed (0.6) | Anadón_1996:abstract | — | not captured |
| t1/2 theta (4'-HO-deltamethrin, iv, plasma) | `Q57` · t1/2z | 25.67 | hr | 92412.0 | [h] | not captured | llm_confirmed (0.6) | Anadón_1996:abstract | — | not captured |
| V alpha(area) (deltamethrin, iv) | `Q64` · V2 | 5.33 | liters | 0.0053300000000000005 | [l] | not captured | llm_corrected (0.6) | Anadón_1996:abstract | — | not captured |
| V d(m) (deltamethrin, iv) | `Q61` · V | 2.04 | liters | 0.00204 | [l] | not captured | space_fold (0.95) | Anadón_1996:abstract | — | not captured |
| total plasma clearance (deltamethrin, oral and iv) | `Q22` · CL | 0.11 | liter/hr | 3.0555555555555556e-08 | [l] / [h] | not captured | llm_confirmed (0.6) | Anadón_1996:abstract | — | not captured |
| Tmax (deltamethrin, single oral dose) | `Q56` · tmax | 1.83 | hr | 6588.0 | [h] | not captured | exact (1.0) | Anadón_1996:abstract | — | not captured |
| oral bioavailability (deltamethrin) | `Q40` · Fab | 14.43 | % | not captured | not captured | not captured | exact (1.0) | Anadón_1996:abstract | — | not captured |
| AUCtissue/AUCplasma (deltamethrin, medulla oblongata) | `Q410` · Kp | 2.32 | deltamethrin, medulla oblongata | not captured | [d] · [eltamethrin] | not captured | llm (0.6) | Anadón_1996:abstract | — | not captured |
| AUCtissue/AUCplasma (deltamethrin, hypothalamus) | `Q21` · AUC ratio | 295.3 | deltamethrin, hypothalamus | not captured | [d] · [eltamethrin] | not captured | llm (0.6) | Anadón_1996:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('t1/2 theta (deltamethrin, po, plasma)', value 38.5) — already have one for this compound
- dropped duplicate Q57 ("t1/2 theta (4'-HO-deltamethrin, po, plasma)", value 30.13) — already have one for this compound
- dropped value-less row: 't1/2 el (deltamethrin, tissues)'
- dropped duplicate Q57 ('range t1/2 el (deltamethrin, tissues)', value 18) — already have one for this compound
- dropped duplicate Q57 ("range t1/2 el (4'-HO-deltamethrin, tissues)", value 15) — already have one for this compound
- dropped duplicate Q57 ('t1/2 el (deltamethrin, plasma)', value 38.5) — already have one for this compound
- dropped duplicate Q57 ("t1/2 el (4'-HO-deltamethrin, plasma)", value 30.13) — already have one for this compound
- unit_dimension_unknown: 'deltamethrin, medulla oblongata' (Kp)
- unit_dimension_unknown: 'deltamethrin, hypothalamus' (AUC ratio)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=deltamethrin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of deltamethrin summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 3 linked by role; re-tagged deltamethrin→parent ×12, deltamethrin→4'-HO-deltamethrin ×4
- molar mass: no plausible PubChem entry for "4'-HO-deltamethrin" ("4'-OH-deltamethrin") — left in mass units
- molar mass: none found for "4'-HO-deltamethrin" — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Anadón_1996_metadata.yaml (16 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.278 (5/18 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auctissue/aucplasma]` | 2.32 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-lives (t1/2 theta) from plasma after iv - 4'-ho-deltamethrin]` | not captured | 25.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-lives (t1/2 theta) from plasma after iv - deltamethrin]` | not captured | 33.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability of deltamethrin]` | not captured | 14.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability]` | 14.43 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 theta]` | 33.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 theta]` | 25.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax after oral dose]` | not captured | 1.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 1.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total plasma clearance of deltamethrin]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total plasma clearance]` | 0.11 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v alpha(area)]` | 5.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d(m)]` | 2.04 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Anadón_1996:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Anadón_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Anadón_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Anadón_1996:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Anadón_1996:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Anadón_1996:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.11 | not captured | not captured | ['Anadón_1996:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.11 L/h | not captured | not captured | ['Anadón_1996:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.04 L | not captured | not captured | ['Anadón_1996:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.33 L | not captured | not captured | ['Anadón_1996:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_decamethrin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Anadón_1996` / `Anadón_1996::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:44 UTC</sub>
