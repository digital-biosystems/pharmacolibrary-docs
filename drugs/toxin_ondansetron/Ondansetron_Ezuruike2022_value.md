<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ondansetron&quot;,&quot;href&quot;:&quot;drugs/toxin_ondansetron/&quot;},{&quot;label&quot;:&quot;Ezuruike_2022 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Cai2025_reference&quot;,&quot;label&quot;:&quot;Cai_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ondansetron/Ondansetron_Cai2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Job2022_reference&quot;,&quot;label&quot;:&quot;Job_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ondansetron/Ondansetron_Job2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ondansetron — `Ondansetron_Ezuruike2022_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because the intrinsic clearance (0.24 µl/min/pmol) has a unit incompatible with the required mass-based dimension, preventing SI conversion.

<div class="pk-model-meta" hidden drug="Ondansetron" model-id="Ondansetron_Ezuruike2022_value" status="rejected" stale="false" population="healthy volunteers" measured-compound="Ondansetron" parameterization="mechanistic" topology="1C"></div>

## Citation
Ezuruike U, Zhang M, Pansari A, De Sousa Mendes M, Pan X, Neuhoff S et al. Guide to development of compound files for PBPK modeling in the Simcyp population-based simulator. CPT: pharmacometrics & systems pharmacology 11(7):805–821 (2022).
  ·  DOI: [10.1002/psp4.12791](https://doi.org/10.1002/psp4.12791)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

**Dosing:** 4, 8 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 293.4 | g/mol |
| B:P | Kp | 0.85 |  |
| fu | fu | 0.27 |  |
| Vss (L/kg) | Vss | 2.1 | L/kg |
| CLint (µl/min/pmol) | CLint | 0.24 | µl/min/pmol |
| CLR (L/h) | CLR | 0.9 | L/h |
| in vivo intravenous clearance (CLiv) | CL | 6.7 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because the intrinsic clearance (0.24 µl/min/pmol) has a unit incompatible with the required mass-based dimension, preventing SI conversion.**

The intrinsic clearance parameter for ondansetron is reported with units of µl/min/pmol, which uses substance amount rather than mass. This dimensional conflict prevented the value from being converted to standard International System of Units. Consequently, the parameter reached the model builder without a valid SI value, causing the record's rejection. Extracted — ondansetron: MW 293 g/mol, Kp 0.85, fu 0.27, Vss 2.1 L/kg, CLint 0.24 µl/min/pmol, CLR 0.9 L/h, CL 6.7 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 293.4 | g/mol | 0.2934 |  | g/(m·ol) | exact (1) | Ezuruike_2022_table_2:row0:col1 |
| B:P | `Q410` · Kp | 0.85 |  |  |  |  | llm (0.6) | Ezuruike_2022_table_2:row4:col1 |
| fu | `Q46` · fu | 0.27 |  | 0.27 |  |  | exact (1) | Ezuruike_2022_table_2:row5:col1 |
| Vss (L/kg) | `Q65` · Vss | 2.1 | L/kg | 0.147 | m3 | l/kg | exact (1) | Ezuruike_2022_table_2:row14:col1 |
| CLint (µl/min/pmol) | `Q3` · CLint | 0.24 | µl/min/pmol |  |  | µl/(min·pM) | exact (1) | Ezuruike_2022_table_2:row19:col1, Ezuruike_2022_table_2:row22:col1, Ezuruike_2022_table_2:row25:col1 |
| CLR (L/h) | `Q26` · CLR | 0.9 | L/h | 2.5e-07 | m3/s | l/h | exact (1) | Ezuruike_2022_table_2:row28:col1 |
| in vivo intravenous clearance (CLiv) | `Q22` · CL | 6.7 | L/h | 1.861e-06 | m3/s | L/h | boundary (0.8) | Ezuruike_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Log p' — extend the ontology if this is a real PK parameter (source ['Ezuruike_2022_table_2:row1:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Ezuruike_2022_table_2:row3:col1'])
- dropped duplicate Q46 ('fu,gut', value '0.037') — already have one for this compound
- dropped unlinked row (NIL): 'Peff,man (10-4 cm/s)' — extend the ontology if this is a real PK parameter (source ['Ezuruike_2022_table_2:row9:col1'])
- dropped unlinked row (NIL): 'Papp(A-B) (10-6 cm/s)' — extend the ontology if this is a real PK parameter (source ['Ezuruike_2022_table_2:row12:col1'])
- dropped duplicate Q410 ('Kp scalar', value '0.63') — already have one for this compound
- unit_dimension_mismatch: 'CLint (µl/min/pmol)' → Q3 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_unknown: 'µl/min/mg protein' (CLint)
- dropped duplicate Q3 ('CLint (HLM) (µl/min/mg protein)', value '14.4') — already have one for this compound
- dropped PD-category row 'Ki (µM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ezuruike_2022_table_2:row31:col1', 'Ezuruike_2022_table_2:row34:col1', 'Ezuruike_2022_table_2:row37:col1', 'Ezuruike_2022_table_2:row39:col1'])
- dropped unlinked row (NIL): 'fu,mic' — extend the ontology if this is a real PK parameter (source ['Ezuruike_2022_table_2:row32:col1', 'Ezuruike_2022_table_2:row35:col1'])
- salvaged Q22 ('in vivo intravenous clearance (CLiv)'=6.7) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ondansetron
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Ezuruike_2022 (paper reports 2 populations: 47 b, value)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table psp412791-tbl-0003: unparsed_numeric_cell
- transposed table psp412791-tbl-0003: logical view retains original source coordinates
- table Ezuruike_2022_table_1: no_numeric_grid
- companion parameter table 1 transcribed (0 record(s))
- table Ezuruike_2022_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (29 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Ezuruike_2022_table_2:row28:col1'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µl/min/pmol ([length] ** 3 / [time] / [substance]) | ['Ezuruike_2022_table_2:row19:col1', 'Ezuruike_2022_table_2:row22:col1', 'Ezuruike_2022_table_2:row25:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Ezuruike_2022_table_2:row0:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Ezuruike_2022_table_2:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.7 | ['Ezuruike_2022:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.7 L/h | ['Ezuruike_2022:other_prose'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 147 L | ['Ezuruike_2022_table_2:row14:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bondansetron%5D%20Ondansetron_Ezuruike2022_value&body=Drug%3A%20ondansetron%0ARecord%3A%20Ondansetron_Ezuruike2022_value%0APaper%3A%20Ezuruike_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ondansetron/Ondansetron_Ezuruike2022_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 04:46 UTC</sub>
