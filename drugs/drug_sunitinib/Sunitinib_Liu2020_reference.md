<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sunitinib&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/&quot;},{&quot;label&quot;:&quot;Liu_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sunitinib_Naeem2024_reference&quot;,&quot;label&quot;:&quot;Naeem_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Naeem2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sunitinib_Wang2020_reference&quot;,&quot;label&quot;:&quot;Wang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Wang2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sunitinib_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sunitinib — `Sunitinib_Liu2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="sunitinib" model-id="Sunitinib_Liu2020_reference" status="needs_review" stale="false" population="rats" measured-compound="sunitinib" parameterization="mechanistic" topology="1C"></div>

## Citation
Liu HC, Zhou XT, Zheng YS, He H, Liu XQ. PK/PD modeling based on NO-ET homeostasis for improving management of sunitinib-induced hypertension in rats. Acta pharmacologica Sinica 41(5):719–728 (2020).
  ·  DOI: [10.1038/s41401-019-0331-8](https://doi.org/10.1038/s41401-019-0331-8)

## Population and dosing

**Population:** rats · condition healthy · n = 12.

**Dosing:** 1869 mg, oral, multiple, every 24 h.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k2sunitinib | k21 | 0.019 | 1/h |
| k1 | k12 | 250.04 | 1/h |
| k5SBPout | equation variable | 9.69 |  |
| ka (h−1) | kabs | 13.9 | h−1 |
| V (L) | V | 24.39 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.308), qwen3.8-27b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — sunitinib: k21 0.019 1/h, k12 250 1/h, kabs 13.9 h−1, V 24.4 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of k1: this record has 250.04, the second reading none; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k2sunitinib | `Q302` · k21 | 0.019 | 1/h | 5.278e-06 | 1/s | 1/h | llm (0.6) | Liu_2020_table_2:row2:col1, Liu_2020_table_2:row2:col4 |
| k1 | `Q301` · k12 | 250.04 | 1/h | 0.06946 | 1/s | 1/h | llm (0.6) | Liu_2020_table_2:row5:col1, Liu_2020_table_2:row5:col4, Liu_2020_table_2:row5:col5 |
| k5SBPout | `Q900` · equation variable | 9.69 |  | 9.69 |  |  | llm (0.6) | Liu_2020_table_2:row13:col1, Liu_2020_table_2:row13:col4, Liu_2020_table_2:row13:col5 |
| ka (h−1) | `Q49` · kabs | 13.9 | h−1 | 0.003861 | 1/s | 1/h | exact (1) | Liu_2020:other_prose |
| V (L) | `Q61` · V | 24.39 | L | 0.02439 | m3 | L | exact (1) | Liu_2020:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'k1sunitinib' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row0:col1', 'Liu_2020_table_2:row0:col4'])
- dropped unlinked row (NIL): 'Vsunitinib' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row1:col1', 'Liu_2020_table_2:row1:col4'])
- dropped unlinked row (NIL): 'k1NOin' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row3:col1', 'Liu_2020_table_2:row3:col4', 'Liu_2020_table_2:row3:col5'])
- dropped unlinked row (NIL): 'EET' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row4:col1', 'Liu_2020_table_2:row4:col4', 'Liu_2020_table_2:row4:col5'])
- dropped unlinked row (NIL): 'k2NOout' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row6:col1', 'Liu_2020_table_2:row6:col4', 'Liu_2020_table_2:row6:col5'])
- dropped duplicate Q302 ('k2', value '1349.4') — already have one for this compound
- dropped PD-category row 'k4ETout' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Liu_2020_table_2:row9:col1', 'Liu_2020_table_2:row9:col4', 'Liu_2020_table_2:row9:col5'])
- dropped unlinked row (NIL): 'k1SBPin' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row10:col1', 'Liu_2020_table_2:row10:col4', 'Liu_2020_table_2:row10:col5'])
- dropped unlinked row (NIL): 'k3' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row11:col1', 'Liu_2020_table_2:row11:col4', 'Liu_2020_table_2:row11:col5'])
- dropped unlinked row (NIL): 'k4' — extend the ontology if this is a real PK parameter (source ['Liu_2020_table_2:row12:col1', 'Liu_2020_table_2:row12:col4', 'Liu_2020_table_2:row12:col5'])
- salvaged Q49 ('ka (h−1)'=13.9) from results prose — parameter table was unreadable
- salvaged Q61 ('V (L)'=24.39) from results prose — parameter table was unreadable
- implicit units: 'k2sunitinib' → 1/h (from the popPK convention: "The parameter k2sunitinib is described in the table caption as a 'First-order transfer rate constant'. In population pha")
- implicit units: 'k1' → 1/h (from the popPK convention: "The parameter k1 is described in the table caption as a 'First-order transfer rate constant'. Consistent with standard P")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sunitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Liu_2020_table_2: unspecified_interval_bound
- table Liu_2020_table_2: unbound_uncertainty
- table Liu_2020_table_2: units_need_context
- table Liu_2020_table_2: ragged_grid
- table Liu_2020_table_2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.308 (4/13 fields) | 9 |
| `qwen3.8-27b` | partly confirmed | 0.875 (7/8 fields) | 1 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k1]` | 250.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k1sbpin]` |  | 10.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k1sunitinib]` |  | 1.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k2]` |  | 1349.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k2sunitinib]` | 0.019 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k5sbpout]` | 9.69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 13.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 24.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vsunitinib]` |  | 87821.75 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl schmulenson et al. [15]]` | 223.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Liu_2020_table_2:row5:col1', 'Liu_2020_table_2:row5:col4', 'Liu_2020_table_2:row5:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Liu_2020_table_2:row2:col1', 'Liu_2020_table_2:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 24.4 L | ['Liu_2020:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsunitinib%5D%20Sunitinib_Liu2020_reference&body=Drug%3A%20sunitinib%0ARecord%3A%20Sunitinib_Liu2020_reference%0APaper%3A%20Liu_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sunitinib/Sunitinib_Liu2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:25 UTC</sub>
