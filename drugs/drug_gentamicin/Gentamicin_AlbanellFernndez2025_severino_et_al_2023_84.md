<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025 \u00b7 severino_et_al_2023_84&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_AlbanellFernndez2025_severino_et_al_2023_84`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has vancomycin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Albanell-Fernández M et al., A Review of Vancomycin, Gentamicin, and…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-024-01459-z](https://doi.org/10.1007/s40262-024-01459-z)

## Model component
<dbs-pgx drug="gentamicin" model-id="Gentamicin_AlbanellFernndez2025_severino_et_al_2023_84" status="extracted" stale="false" population="neonates and infants with no previous pathologies" measured-compound="gentamicin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL equation | Q900 | not captured | llm_corrected |
| Mean CL in L/h/kg | Q22 | not captured | llm_confirmed |
| Vd equation | Q61 | not captured | llm_confirmed |
| Mean Vd in L/kg | Q352 | not captured | llm_corrected |
| Vc | Q63 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'severino et al., 2023 [84]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gentamicin
- bound model equation to Q22 (CL): CL = 1.0 * (WT/70)^0.75 * (PMA/30)^3.16 * [0.83 * GA + 1.03 * (1 - GA)]GA = 1 for SGA infants and 0 for appropriate-for-GA infants
- bound model equation to Q61 (V): V = 0.791 * (WT/1.416)^0.898
- bound model equation to Q63 (V1): Vc = 0.913 * (WT/1.75)^0.919Vc = Vp
- Q22 (CL) is equation-defined: value moved to equation-variable 'Mean CL in L/h/kg'; equation kept verbatim
- Q61 (V) is equation-defined: value moved to equation-variable 'Vd equation'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'Vc'; equation kept verbatim
- 1C volume Q63 kept: Q61 already present — review duplicate volume
- population split: 'severino et al., 2023 [84]' subgroup of Albanell-Fernández_2025 (paper reports 57 populations: allegaert et al., 2006 [79], allegaert et al., 2007 [40], allegaert et al., 2008 [80], alsultan et al., 2023 [58], amponsah et al., 2017 [82], anderson et al., 2007 [41], asbury et al., 1993 [34], back et al., 2019 [54], bhongsatiern et al., 2015 [46], botha et al., 1998 [78], botha et al., 2003 [67], burstein et al., 1997 [22], capparelli et al., 2001 [23], chen et al., 2018 [51], chung et al., 2023 [59], cristea et al., 2019 [19], dao et al., 2020 [55], de cock et al., 2012 [29], de hoog et al., 2000 [38], frymoyer et al., 2014 [86], garcía et al., 2006 [71], germovsek et al., 2016 [74], germovsek et al., 2019 [53], grimsley et al., 1999 [37], illamola et al., 2016 [30], izquierdo et al., 1992 [27], jarugula et al., 2022 [20], jensen et al., 1992 [61], kato et al., 2017 [47], kelman et al., 1984 [26], kimura et al., 2004 [39], lanao et al., 2004 [69], lee et al., 2021 [6], li et al., 2018 [50], lingvall et al., 2005 [70], lo et al., 2010 [43], marqués-miñana et al., 2010 [42], mehrotra et al., 2012 [85], mulubwa et al., 2020 [56], nielsen et al., 2009 [72], reilly et al., 2019 [52], rodvold et al., 1993 [62], rodvold et al., 1995 [35], sasano et al., 2021 [57], seay et al., 1994 [21], severino et al., 2023 [84], sherwin et al., 2009 [73], sherwin et al., 2009 [81], silva et al., 1998 [36], smits et al., 2015 [32], song et al., 2017 [48], thomson et al., 1988 [26], touw et al., 2001 [28], tseng et al., 2018 [49], vervelde et al., 1999 [64], weber et al., 1993 [63], zhao et al., 2013 [44])
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- transposed table Tab5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab5:row2:col4 = '0.072a'
- unparsed cell Tab5:row2:col8 = '0.07 presence or 0.086 absence of concomitant treatment with IND or VENT'
- unparsed cell Tab5:row2:col13 = '0.079 (for mean weight 1.3 kg, 30 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row2:col14 = '0.049 (for mean weight 1.3 kg, 34 wks PMA and no VENT)'
- unparsed cell Tab5:row2:col29 = '1.46 (for mean weight 3.2 kg and PMA 41 weeks)'
- unparsed cell Tab5:row2:col31 = '0.102 (for mean weight 1.48 kg)'
- unparsed cell Tab5:row2:col38 = 'M1: 0.057M2: 0.063'
- unparsed cell Tab5:row2:col39 = '0.053 if PCA &gt;34 wks and AP ≥7; 0.044 if PCA ≤34 wks and AP &lt;7; 0.036 if PCA ≤34 wks and AP &lt;7'
- unparsed cell Tab5:row2:col40 = '0.046 if GA ≤31 wks, 0.094 if GA 31–34 wks'
- unparsed cell Tab5:row2:col41 = '0.069c'
- unparsed cell Tab5:row2:col46 = '0.046 (for mean weight 2.4 kg)'
- unparsed cell Tab5:row2:col47 = '0.0387 (It2B modeling) − 0.0404 (STS modeling)'
- unparsed cell Tab5:row2:col50 = '0.076 (for median BW 1.92 kg and GA 32 wks)'
- unparsed cell Tab5:row2:col55 = '0.037 (for mean weight 2.3 kg, PNA 3 days)'
- unparsed cell Tab5:row2:col63 = '0.028 (for mean weight 1 kg, PCA 27 wks, and no NSAID)'
- unparsed cell Tab5:row2:col64 = '0.040 (for mean weight 1 kg, 28 wks PMA and appropriate forGA)'
- unparsed cell Tab5:row2:col65 = '0.0497 (for mean weight 1 kg, PMA 34 wks, PNA 1 day, no INO, no VENT)'
- unparsed cell Tab5:row2:col66 = '0.091 (for mean weight 2 kg, PMA 30 wks)'
- unparsed cell Tab5:row5:col3 = '1.18 (for mean weight 2 kg, PCA 40 wks, Cr)'
- unparsed cell Tab5:row5:col4 = '0.52a'
- unparsed cell Tab5:row5:col8 = '0.562 (PMA ≤32 wks)0.498 (PMA &gt;32 wks)'
- unparsed cell Tab5:row5:col13 = '0.730 (for mean weight 1.3 kg, 30 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row5:col14 = '0.724 (for mean weight 1.3 kg, 34 wks PMA and no artificial ventilation)'
- unparsed cell Tab5:row5:col29 = '0.148 (for mean weight 3.2 kg)'
- unparsed cell Tab5:row5:col31 = '0.884 (for mean weight 1.48 kg)'
- unparsed cell Tab5:row5:col40 = '0.703 – 0.767 if GA ≤31 wks0.643–0.653 if GA 31−34 wks'
- unparsed cell Tab5:row5:col41 = '0.547c'
- unparsed cell Tab5:row5:col46 = '0.46 (for mean weight 2.4 kg)'
- unparsed cell Tab5:row5:col47 = '0.586 (It2B modeling) − 0.623 (STS modeling)'
- unparsed cell Tab5:row5:col48 = '0.631c'
- unparsed cell Tab5:row5:col50 = '0.136 (for median BW 1.92 kg)'
- unparsed cell Tab5:row5:col55 = '0.687 (for mean weight 2.3kg and no sepsis)'
- unparsed cell Tab5:row5:col64 = '0.561 (for mean weight 1 kg, 28 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row5:col65 = '0.455 (for mean weight 1 kg, PMA 34 wks, PNA 1 day, no INO, no VENT)'
- unparsed cell Tab5:row5:col66 = '0.957 (for mean weight 2 kg PMA 30 wks)'
- companion parameter table 2 transcribed (5 record(s))
- companion parameter table 3 transcribed (11 record(s))
- companion parameter table 4 transcribed (5 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- LLM region Albanell-Fernández_2025:other_prose: no JSON records returned
- captured model equation CL = 1.0 * (WT/70)^0.75 * (PMA/30)^3.16 * [0.83 * GA + 1.03 * (1 - GA)]GA = 1 for SGA infants and 0 for appropriate-for-GA infants
- captured model equation V = 0.791 * (WT/1.416)^0.898
- captured model equation Vc = 0.913 * (WT/1.75)^0.919Vc = Vp

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | vancomycin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | vancomycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Albanell-Fernández_2025` / `Albanell-Fernández_2025::severino_et_al_2023_84`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:09 UTC</sub>
