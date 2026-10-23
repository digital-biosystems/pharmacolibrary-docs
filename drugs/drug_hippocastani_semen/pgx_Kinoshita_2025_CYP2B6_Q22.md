<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;Hippocastani semen&quot;,&quot;href&quot;:&quot;drugs/drug_hippocastani_semen/&quot;},{&quot;label&quot;:&quot;Kinoshita_2025 \u00b7 PGx CYP2B6&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# CYP2B6 — PGx  <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

- **what it is:** rejected — not accepted.
- **source:** this paper, `Kinoshita_2025` — [doi](https://doi.org/10.1002/pcn5.70164)
- **gene:** CYP2B6
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
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | secondary_empty | 0.0 (0/11 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `applies_to` | pk |  | mismatch |
| `gpt-oss-120b` | `mechanism` | metabolism |  | mismatch |
| `gpt-oss-120b` | `reference_category` | *1/*1 |  | mismatch |
| `gpt-oss-120b` | `target_parameter_id` | Q22 |  | mismatch |
| `gpt-oss-120b` | `theta[*1/*1F]` | -0.0891 |  | only_one_extracted |
| `gpt-oss-120b` | `theta[*1/*1]` | 0.0 |  | only_one_extracted |
| `gpt-oss-120b` | `theta[*1/*2]` | 0.0575 |  | only_one_extracted |
| `gpt-oss-120b` | `theta[*1/*3]` | 0.122 |  | only_one_extracted |
| `gpt-oss-120b` | `theta[*1F/*1F]` | 0.2267 |  | only_one_extracted |
| `gpt-oss-120b` | `theta[*2/*2]` | 0.0952 |  | only_one_extracted |
| `gpt-oss-120b` | `theta[*3/*3]` | 0.0337 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [Hippocastani semen](drugs/drug_hippocastani_semen/)</sub>
