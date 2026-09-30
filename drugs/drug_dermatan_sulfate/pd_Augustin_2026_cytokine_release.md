<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dermatan sulfate&quot;,&quot;href&quot;:&quot;drugs/drug_dermatan_sulfate/&quot;},{&quot;label&quot;:&quot;Augustin_2026 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** MAGE-A4-TCB (measured concentrations) drives name (in unknown): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

> MAGE-A4-TCB concentrations (0.05–50 nM) were applied to whole blood to measure cytokine release (IFN-gamma, IL-2, IL-4, IL-6, IL-8, IL-10, TNF-alpha, GM-CSF), analyzed as a sigmoid Emax (stimulatory) concentration-effect relationship; the paper does not state the mechanism beyond T-cell engagement via CD3, and no potency or rate values (EC50, Emax, gamma, ke0) are given in the excerpts.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Augustin_2026`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Augustin A; Avignon B; Boetsch C; Breous-Nystrom E; Broders O; Cabon L; Dernick K; Durr E; Eigenmann MJ; Fischer S; Flinn N; Gerard R; Giusti AM; Gjorevski N; Grote HJ; Häusermann F; Hobi N; Husar E; Juglair L; Keiser SP; Keshelava N; Kustermann S; Marban-Doran C; Marrer-Berger E; Quetglas IM; Micallef V; Matheis R; Ortiz Franyuti D; Polonchuk L; Raggi G; Roller A; Ruffiner P; Sadok S; Saylan T; Schaub N; Schubert D; Shetage S; Stokar-Regenscheit N; Walz AC; Weinzierl T; Wolowski V; Zihlmann C et al. (2026). Frontiers in immunology 17
  ·  DOI: [10.3389/fimmu.2026.1736584](https://doi.org/10.3389/fimmu.2026.1736584)

## Parameters
_No resolved parameters._


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [dermatan sulfate](drugs/drug_dermatan_sulfate/)</sub>
