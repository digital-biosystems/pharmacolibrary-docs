<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03B&quot;,&quot;href&quot;:&quot;atc/P03B.md&quot;},{&quot;label&quot;:&quot;decamethrin&quot;,&quot;href&quot;:&quot;drugs/drug_decamethrin/&quot;},{&quot;label&quot;:&quot;Anad\u00f3n_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# decamethrin — `Decamethrin_Anadn1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The deltamethrin record was rejected because the metabolite 4'-HO-deltamethrin is unlinked: the metabolism link from parent to metabolite carries no parameter, leaving the metabolite without a path from the dose, and the model was built from the abstract only.

<div class="pk-model-meta" hidden drug="decamethrin" model-id="Decamethrin_Anadn1996_reference" status="rejected" stale="false" population="male Wistar rats" measured-compound="deltamethrin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Anadón A, Martinez-Larrañaga MR, Fernandez-Cruz ML, Diaz MJ, Fernandez MC, Martinez MA. Toxicokinetics of deltamethrin and its 4'-HO-metabolite in the rat. Toxicology and applied pharmacology 141(1):8–16 (1996).
  ·  DOI: [10.1006/taap.1996.0254](https://doi.org/10.1006/taap.1996.0254)

## Population and dosing

**Population:** male Wistar rats · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 theta (deltamethrin, iv, plasma) | t1/2z | 33.0 | hr |
| t1/2 theta (4'-HO-deltamethrin, iv, plasma) | t1/2z | 25.67 | hr |
| V alpha(area) (deltamethrin, iv) | V2 | 5.33 | liters |
| V d(m) (deltamethrin, iv) | V | 2.04 | liters |
| total plasma clearance (deltamethrin, oral and iv) | CL | 0.11 | liter/hr |
| Tmax (deltamethrin, single oral dose) | tmax | 1.83 | hr |
| oral bioavailability (deltamethrin) | Fab | 14.43 | % |
| AUCtissue/AUCplasma (deltamethrin, medulla oblongata) | Kp | 2.32 | deltamethrin, medulla oblongata |
| AUCtissue/AUCplasma (deltamethrin, hypothalamus) | AUC ratio | 295.3 | deltamethrin, hypothalamus |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The deltamethrin record was rejected because the metabolite 4'-HO-deltamethrin is unlinked: the metabolism link from parent to metabolite carries no parameter, leaving the metabolite without a path from the dose, and the model was built from the abstract only.**

The structure is parent–metabolite, with 4'-HO-deltamethrin formed from deltamethrin in the central compartment, but the metabolism link has link parameter 'none' of unknown kind, so the metabolite has no quantitative connection to the dose and counts as an unlinked metabolite. The record is also abstract-only, meaning reported summary statistics (e.g., t1/2z 33.0 hr for deltamethrin and 25.67 hr for 4'-HO-deltamethrin, CL 0.11 liter/hr, Fab 14.43%) stood in for a fitted model rather than being extracted from one. Extracted — decamethrin: t1/2z 33 hr, V2 5.33 liters, V 2.04 liters, CL 0.11 liter/hr, tmax 1.83 hr, Fab 14.4 %, Kp 2.32 deltamethrin, medulla oblongata, AUC ratio 295 deltamethrin, hypothalamus; 4'-HO-deltamethrin: t1/2z 25.7 hr.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 theta (deltamethrin, iv, plasma) | `Q57` · t1/2z | 33.0 | hr | 1.188e+05 | s | h | llm_confirmed (0.6) | Anadón_1996:abstract |
| t1/2 theta (4'-HO-deltamethrin, iv, plasma) | `Q57` · t1/2z | 25.67 | hr | 9.241e+04 | s | h | llm_confirmed (0.6) | Anadón_1996:abstract |
| V alpha(area) (deltamethrin, iv) | `Q64` · V2 | 5.33 | liters | 0.00533 | m3 | l | llm_corrected (0.6) | Anadón_1996:abstract |
| V d(m) (deltamethrin, iv) | `Q61` · V | 2.04 | liters | 0.00204 | m3 | l | space_fold (0.95) | Anadón_1996:abstract |
| total plasma clearance (deltamethrin, oral and iv) | `Q22` · CL | 0.11 | liter/hr | 3.056e-08 | m3/s | l/h | llm_confirmed (0.6) | Anadón_1996:abstract |
| Tmax (deltamethrin, single oral dose) | `Q56` · tmax | 1.83 | hr | 6588 | s | h | exact (1) | Anadón_1996:abstract |
| oral bioavailability (deltamethrin) | `Q40` · Fab | 14.43 | % |  |  |  | exact (1) | Anadón_1996:abstract |
| AUCtissue/AUCplasma (deltamethrin, medulla oblongata) | `Q410` · Kp | 2.32 | deltamethrin, medulla oblongata |  |  | d·eltamethrin | llm (0.6) | Anadón_1996:abstract |
| AUCtissue/AUCplasma (deltamethrin, hypothalamus) | `Q21` · AUC ratio | 295.3 | deltamethrin, hypothalamus |  |  | d·eltamethrin | llm (0.6) | Anadón_1996:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Anadón_1996:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Anadón_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Anadón_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Anadón_1996:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Anadón_1996:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Anadón_1996:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.11 | ['Anadón_1996:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.11 L/h | ['Anadón_1996:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.04 L | ['Anadón_1996:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.33 L | ['Anadón_1996:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdecamethrin%5D%20Decamethrin_Anadn1996_reference&body=Drug%3A%20decamethrin%0ARecord%3A%20Decamethrin_Anadn1996_reference%0APaper%3A%20Anad%C3%B3n_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_decamethrin/Decamethrin_Anadn1996_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:44 UTC</sub>
