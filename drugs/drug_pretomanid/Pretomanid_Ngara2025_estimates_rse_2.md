<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pretomanid&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/&quot;},{&quot;label&quot;:&quot;Ngara_2025 \u00b7 estimates_rse_2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pretomanid — `Pretomanid_Ngara2025_estimates_rse_2`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has BTZ-043, bedaquiline, pretomanid, linezolid, the second reading pretomanid; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `BTZ-043, bedaquiline, pretomanid, linezolid`, measured `pretomanid`.

## Citation
Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025)
  ·  DOI: [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088)

<div class="pk-model-meta" hidden drug="pretomanid" model-id="Pretomanid_Ngara2025_estimates_rse_2" status="rejected" stale="false" population="mice with tuberculosis" measured-compound="pretomanid" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, Lh−1 | `Q27` · CL/F | 0.01 | not captured | not captured | not captured | 10 | llm_confirmed (0.6) | jiaf088-T2:row3:col1, jiaf088-T2:row11:col1, jiaf088-T2:row19:col1 | — | not captured |
| Vc/F, L | `Q76` · V/F | 0.73 | L | 0.00073 | [l] | 17 | exact (1.0) | jiaf088-T2:row4:col1, jiaf088-T2:row12:col1, jiaf088-T2:row20:col1 | — | not captured |
| Ka, h−1 | `Q49` · kabs | 0.77 | h−1 | 0.0002138888888888889 | [1] / [h] | 35 | exact (1.0) | jiaf088-T2:row5:col1, jiaf088-T2:row13:col1, jiaf088-T2:row21:col1 | — | not captured |
| FT, % | `Q44` · fe | 34 | not captured | not captured | not captured | 14 | llm (0.6) | jiaf088-T2:row23:col1 | — | not captured |
| γ, d−1 | `Q89` · t1/2γ | 0.38 | d−1 | not captured | [1] / [d] | not captured | llm (0.6) | jiaf088-T2:row33:col1, jiaf088-T2:row37:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimates (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q27 ('CLT/F, %', value '248') — already have one for this compound
- dropped PD-category row 'Emax, d−1' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf088-T2:row28:col1', 'jiaf088-T2:row31:col1', 'jiaf088-T2:row35:col1'])
- dropped PD-category row 'EC50, mgL−1' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf088-T2:row29:col1', 'jiaf088-T2:row32:col1', 'jiaf088-T2:row36:col1'])
- unit_dimension_mismatch: 'γ, d−1' → Q89 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped PD-category row 'Kdelay, d−1' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jiaf088-T2:row38:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pretomanid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F, L' is the general volume)
- status held at route_to_review — not promoted
- population split: 'estimates (rse%)' subgroup of Ngara_2025 (paper reports 2 populations: estimates (rse %), estimates (rse%))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (32 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (8/16 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f, lh-1].value` | 0.01 | 0.009 | mismatch |
| `gpt-oss-120b` | `parameters[ft, %].parameter_id` | Q44 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.77 | 0.22 | mismatch |
| `gpt-oss-120b` | `parameters[kdelay]` | not captured | 6.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].value` | 0.73 | 0.013 | mismatch |
| `gpt-oss-120b` | `parameters[γ].parameter_id` | Q89 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[γ].value` | 0.38 | 0.21 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | BTZ-043, bedaquiline, pretomanid, linezolid | pretomanid | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jiaf088-T2:row5:col1', 'jiaf088-T2:row13:col1', 'jiaf088-T2:row21:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jiaf088-T2:row4:col1', 'jiaf088-T2:row12:col1', 'jiaf088-T2:row20:col1'] |
| C5_dimension_Q89 | fail | 1 / [time] | d−1 | not captured | not captured | ['jiaf088-T2:row33:col1', 'jiaf088-T2:row37:col1'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['jiaf088-T2:row3:col1', 'jiaf088-T2:row11:col1', 'jiaf088-T2:row19:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 0.73 L | not captured | not captured | ['jiaf088-T2:row4:col1', 'jiaf088-T2:row12:col1', 'jiaf088-T2:row20:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pretomanid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ngara_2025` / `Ngara_2025::estimates_rse_2`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-13 11:18 UTC</sub>
