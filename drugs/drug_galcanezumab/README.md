<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;galcanezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Galcanezumab_FiedlerKelly2021_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# galcanezumab

- **generic name:** galcanezumab
- **ATC codes:** `N02CD02`
- **DrugBank:** [DB14042](https://go.drugbank.com/drugs/DB14042) · **PubChem:** none
- **groups:** approved, investigational

## About

Galcanezumab is a humanized monoclonal antibody used to prevent migraine attacks. It is an approved medicine, authorised in the European Union for migraine, and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326707](https://www.wikidata.org/wiki/Q25326707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Fiedler-Kelly_2021_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy subjects, n = 9. [Run it in the simulator](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md?tab=Simulation) · [record](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0106 | L/h | 0.0106 L/h | healthy subjects | 9 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Fiedler-Kelly_2021_reference](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) |
| CL | CL/F | — | L/h | 0.601 | healthy individuals and patients with migraine |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kielbasa_2020_final](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_final.md) |
| V | V | 11.2 | L | 11.2 L | healthy subjects | 9 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Fiedler-Kelly_2021_reference](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) |
| ka | kabs | 0.0192 | 1/h | 0.0192 h-1 | healthy subjects | 9 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Fiedler-Kelly_2021_reference](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) |
| t½ | t1/2z | 720 | h | 30 days | healthy subjects | 9 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Fiedler-Kelly_2021_reference](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Fiedler-Kelly_2021_reference](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [Kielbasa_2020_final](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_final.md) | — | 1-compartment (no model) | 1 (+3 cov.) | Kielbasa W et al., Population Pharmacokinetics of Galcanez…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1511](https://doi.org/10.1002/jcph.1511) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ base](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_base.md) | — | 1-compartment (no model) | 0 (+1 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fiedler-Kelly_2021_CIDBF](drugs/drug_galcanezumab/pd_Fiedler_Kelly_2021_CIDBF.md) | capsaicin-induced dermal blood flow ← galcanezumab · delayed effect through an effect compartment | model (no simulator) | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTSS1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_MTSS1_safety.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ACOX2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_ACOX2_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ATAD2B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_ATAD2B_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **LRRC4C** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_LRRC4C_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **OXR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_OXR1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TMEM92-AS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_TMEM92_AS1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=galcanezumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACOX2 (unknown), ATAD2B (unknown), CALCA (antibody), CALCB (antibody), CALCRL (modulator), LRRC4C (unknown), MTSS1 (safety_allele), OXR1 (unknown), TMEM92-AS1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:26 | 1:04 | 2/1/0 | 1/0/0 | 1/0/5 | 56,247/1,680 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fiedler-Kelly_2021.pdf` | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) | [33740315](https://pubmed.ncbi.nlm.nih.gov/33740315) | The evidence provides explicit numeric values for clearance, volume of distribution, absorption rate constant, and half-life from a 1-compartment model in healthy human subjects. |

<sub>queue written 2026-10-07 06:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2026 | irrelevant | 0 | 0 | The study is a clinical effectiveness analysis reporting headache day reductions and safety profiles, containing no pharmacokinetic parameters or disposition data. |
| popPK | Martín-Yeves_2026 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing migraine frequency and medication use, reporting no pharmacokinetic parameters for galcanezumab. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and does not report pharmacogenomic effects of gene variants on the PK or PD of galcanezumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgalcanezumab%5D&body=Drug%3A%20galcanezumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_galcanezumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 06:25 UTC</sub>
