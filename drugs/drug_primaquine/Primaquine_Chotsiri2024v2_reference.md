<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/&quot;},{&quot;label&quot;:&quot;Chotsiri_2024_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Primaquine_Sridharan2019_reference&quot;,&quot;label&quot;:&quot;Sridharan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# primaquine — `Primaquine_Chotsiri2024v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The primaquine model was rejected because its two metabolites, carboxy-primaquine and primaquine carbamoyl-glucuronide, are unlinked: each is formed from primaquine at the central compartment but has no compartment of its own (0 compartments), leaving them without a reachable structure.

<div class="pk-model-meta" hidden drug="primaquine" model-id="Primaquine_Chotsiri2024v2_reference" status="rejected" stale="false" population="healthy African males (G6PD-normal and G6PD-deficient) without malaria" measured-compound="primaquine" parameterization="apparent" topology="2C"></div>

## Citation
Chotsiri P, Mahamar A, Diawara H, Fasinu PS, Diarra K, Sanogo K et al. Population pharmacokinetics of primaquine and its metabolites in African males. Malaria journal 23(1):159 (2024).
  ·  DOI: [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y)

## Population and dosing

**Population:** healthy African males (G6PD-normal and G6PD-deficient) without malaria · condition healthy (G6PD-normal and G6PD-deficient, without malaria) · age group adult · n = 28.

**Dosing:** 28, 31.5, 35 mg, oral, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 15.4 | L/h |
| VC/F (L) | V1/F | 163 | L |
| Carboxy-primaquine σVP | V2 | 0.0328 |  |
| Lag time (h) | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The primaquine model was rejected because its two metabolites, carboxy-primaquine and primaquine carbamoyl-glucuronide, are unlinked: each is formed from primaquine at the central compartment but has no compartment of its own (0 compartments), leaving them without a reachable structure.**

The record lists carboxy-primaquine and primaquine carbamoyl-glucuronide as metabolites formed from primaquine at the central site, but both specify zero compartments, so no path exists from the dose to these metabolites — the structural check for unreachable compartments or unlinked metabolites failed. The parent model itself carries fitted values (CL/F 15.4 L/h, V1/F 163 L, tlag 0.0 h) and a peripheral volume for carboxy-primaquine (0.0328), yet the metabolite structure remains disconnected, so the record was refused. Extracted — primaquine: CL/F 15.4 L/h, V1/F 163 L, V2 0.0328, tlag 0 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading primaquine → carboxy-primaquine (metabolism); primaquine → primaquine carbamoyl-glucuronide (metabolism); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 15.4 | L/h | 4.278e-06 | m3/s | L/h | exact (1) | Chotsiri_2024_2:other_prose |
| VC/F (L) | `Q290` · V1/F | 163 | L | 0.163 | m3 | L | exact (1) | Chotsiri_2024_2:other_prose |
| Carboxy-primaquine σVP | `Q64` · V2 | 0.0328 |  |  |  | L | boundary (0.8) | Chotsiri_2024_2:other_prose |
| Lag time (h) | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Fasinu_2022_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'MTT (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'CL/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'VC/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CF (%)' (captured trailing unit '%' for child rows)
- salvaged Q27 ('CL/F (L/h)'=15.4) from results prose — parameter table was unreadable
- salvaged Q290 ('VC/F (L)'=163) from results prose — parameter table was unreadable
- salvaged Q64 ('Carboxy-primaquine σVP'=0.0328) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=primaquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 9 linked by role; re-tagged primaquine→parent ×20
- molar mass: no plausible PubChem entry for 'primaquine carbamoyl-glucuronide' ('primaquine carbamoyl-glucuronide') — left in mass units
- molar mass: none found for 'primaquine carbamoyl-glucuronide' — its concentrations stay mass-only
- gap-filled Q83 (tlag) from Fasinu_2022_2's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '52.9% (15.4%)'
- unparsed cell Tab2:row2:col4 = '39.7%–74.6%'
- unparsed cell Tab2:row3:col1 = '0.563 (18.7%)'
- unparsed cell Tab2:row3:col3 = '63.3% (23.5%)'
- unparsed cell Tab2:row3:col4 = '36.8%–100%'
- unparsed cell Tab2:row4:col1 = '15.4 (9.57%)'
- unparsed cell Tab2:row4:col3 = '12% (12.4%)'
- unparsed cell Tab2:row4:col4 = '7.99%–14.3%'
- unparsed cell Tab2:row5:col1 = '163 (10.3%)'
- unparsed cell Tab2:row6:col1 = '32.9 (6.89%)'
- unparsed cell Tab2:row7:col1 = '0.173 (9.37%)'
- unparsed cell Tab2:row8:col1 = '0.226 (9.33%)'
- unparsed cell Tab2:row10:col1 = '1.24 (11.7%)'
- unparsed cell Tab2:row10:col3 = '65.3% (13.2%)'
- unparsed cell Tab2:row10:col4 = '50.6%–89.2%'
- unparsed cell Tab2:row11:col1 = '0.129 (28.5%)'
- unparsed cell Tab2:row12:col1 = '93.3 (7.00%)'
- unparsed cell Tab2:row12:col3 = '37.4% (15.7%)'
- unparsed cell Tab2:row12:col4 = '29.5%–52.9%'
- unparsed cell Tab2:row13:col1 = '69.1 (3.83%)'
- unparsed cell Tab2:row14:col1 = '0.0328 (8.96%)'
- unparsed cell Tab2:row15:col1 = '0.101 (8.84%)'
- unparsed cell Tab2:row17:col3 = '63.5% (12.1%)'
- unparsed cell Tab2:row17:col4 = '48.7%–81.9%'
- unparsed cell Tab2:row18:col1 = '1.13 (8.84%)'
- unparsed cell Tab2:row18:col3 = '34.4% (25.1%)'
- unparsed cell Tab2:row18:col4 = '24.2%–58.5%'
- unparsed cell Tab2:row19:col1 = '2.83 (15.8%)'
- unparsed cell Tab2:row19:col3 = '57.8% (12.1%)'
- unparsed cell Tab2:row19:col4 = '42.8%–75.1%'
- unparsed cell Tab2:row20:col1 = '55.4 (12.4%)'
- unparsed cell Tab2:row21:col1 = '40.1 (6.97%)'
- unparsed cell Tab2:row22:col1 = '0.108 (12.3%)'
- unparsed cell Tab2:row23:col1 = '0.242 (8.00%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['primaquine', 'carboxy-primaquine', 'metabolism'], ['primaquine', 'primaquine carbamoyl-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[carboxy-primaquine σvp]` | 0.0328 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (l/h) - primaquine]` |  | 15.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 15.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f (l) - primaquine]` |  | 163 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 163 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q83 | pass | [time] |  | ['Fasinu_2022_2:review'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Chotsiri_2024_2:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.4 L/h | ['Chotsiri_2024_2:other_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 163 L | ['Chotsiri_2024_2:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprimaquine%5D%20Primaquine_Chotsiri2024v2_reference&body=Drug%3A%20primaquine%0ARecord%3A%20Primaquine_Chotsiri2024v2_reference%0APaper%3A%20Chotsiri_2024_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_primaquine/Primaquine_Chotsiri2024v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:50 UTC</sub>
