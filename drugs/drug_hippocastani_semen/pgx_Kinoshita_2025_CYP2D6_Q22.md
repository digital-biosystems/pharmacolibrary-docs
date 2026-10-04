<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;Hippocastani semen&quot;,&quot;href&quot;:&quot;drugs/drug_hippocastani_semen/&quot;},{&quot;label&quot;:&quot;Kinoshita_2025 \u00b7 PGx CYP2D6&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Wang_2024_I&quot;,&quot;label&quot;:&quot;Wang_2024 \u00b7 I&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_hippocastani_semen/pd_Wang_2024_I.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# CYP2D6 — PGx  <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **what it is:** rejected — not accepted.
- **source:** this paper, `Kinoshita_2025` — [doi](https://doi.org/10.1002/pcn5.70164)
- **gene:** CYP2D6
- **mechanism:** metabolism — the gene's enzyme clears the drug
- **applies to:** pharmacokinetics (exposure)
- **parameter it changes:** CL (`Q22`)
- **effect (θ per phenotype, categorical_fractional):** *1/*1=0.0, *1/*1F=-0.0891, *1/*2=0.0575, *1/*3=0.122, *1F/*1F=0.2267, *2/*2=0.0952
- **phenotype groups:** groups defined by genotype (e.g. *1/*1, *1/*3), as the paper reports them

### Notes from the extraction

- genotype-stratified θ from Q100 (NIL) — AUC/Cmax inverted to a clearance effect (∝1/CL)
- reference genotype = *1/*1 (most-populous stratum; paper did not designate a reference — engineer may rebase)
- multi-gene table (7 PK genes): genotype→gene assignment unverified — θ may conflate co-tabulated genes
- θ target Q22 ('none (no significant effect)') has no matching parameter in the drug's PK record — cannot attach

## Citation
Kinoshita S et al., Influence of pharmacokinetics-related g…, PCN reports : psychiatry an… (2025)
  ·  DOI: [10.1002/pcn5.70164](https://doi.org/10.1002/pcn5.70164)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/11 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `applies_to` | pk | not captured | mismatch |
| `gpt-oss:120b` | `mechanism` | metabolism | not captured | mismatch |
| `gpt-oss:120b` | `reference_category` | *1/*1 | not captured | mismatch |
| `gpt-oss:120b` | `target_parameter_id` | Q22 | not captured | mismatch |
| `gpt-oss:120b` | `theta[*1/*1F]` | -0.0891 | not captured | only_one_extracted |
| `gpt-oss:120b` | `theta[*1/*1]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `theta[*1/*2]` | 0.0575 | not captured | only_one_extracted |
| `gpt-oss:120b` | `theta[*1/*3]` | 0.122 | not captured | only_one_extracted |
| `gpt-oss:120b` | `theta[*1F/*1F]` | 0.2267 | not captured | only_one_extracted |
| `gpt-oss:120b` | `theta[*2/*2]` | 0.0952 | not captured | only_one_extracted |
| `gpt-oss:120b` | `theta[*3/*3]` | 0.0337 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [Hippocastani semen](drugs/drug_hippocastani_semen/)</sub>
