<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;tezepelumab&quot;}]"></div>

# tezepelumab

- **generic name:** tezepelumab
- **ATC codes:** `R03DX11`
- **DrugBank:** [DB15090](https://go.drugbank.com/drugs/DB15090) · **PubChem:** none
- **groups:** approved, investigational

## About

Tezepelumab is a monoclonal antibody used to treat asthma. It is authorised in the European Union and is also being investigated for other uses such as sinusitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326702](https://www.wikidata.org/wiki/Q25326702) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ly_2021_AER](drugs/drug_tezepelumab/pd_Ly_2021_AER.md) | asthma exacerbation rate ← tezepelumab · inhibition effect | — | Ly N et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1803](https://doi.org/10.1002/jcph.1803) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ly_2021_FeNO](drugs/drug_tezepelumab/pd_Ly_2021_FeNO.md) | fractional exhaled nitric oxide ← tezepelumab · inhibition effect | — | Ly N et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1803](https://doi.org/10.1002/jcph.1803) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SERPINE1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Fukahori_2026](drugs/drug_tezepelumab/pgx_Fukahori_2026_SERPINE1_Q100.md) | Fukahori S et al., Influence of PAI-1 gene polymorphism on…, Journal of thoracic disease (2026) | [10.21037/jtd-2025-aw-2408](https://doi.org/10.21037/jtd-2025-aw-2408) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tezepelumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SERPINE1 (target), TSLP (antibody), TSLP (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:14 | 1:08 | 0/0/0 | 0/1/0 | 0/0/1 | 10,472/661 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ly_2021.pdf` | Ly N et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1803](https://doi.org/10.1002/jcph.1803) | [33368307](https://pubmed.ncbi.nlm.nih.gov/33368307) | The paper describes a population PK model for tezepelumab in humans, but the specific numeric parameter estimates (CL, V, Q, ka) are not present in the provided evidence text. |
| `Zheng_2024.pdf` | Zheng Y et al., Population Pharmacokinetic Modeling and…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2433](https://doi.org/10.1002/jcph.2433) | [38632826](https://pubmed.ncbi.nlm.nih.gov/38632826) | The study reports a population PK model for tezepelumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

<sub>queue written 2026-10-07 22:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Fukahori_2026 | not_relevant | 5 | 0 | The paper is a study protocol for a pharmacogenetic trial that proposes testing the influence of the PAI-1 polymorphism on the efficacy of tezepelumab (primary and secondary endpoints like AAER, FEV1), but it does not report the results, data, or fitted effect sizes from the study. |
| popPK | Ly_2021 | relevant | 10 | 3 | The paper describes a population PK model for tezepelumab in humans, but the specific numeric parameter estimates (CL, V, Q, ka) are not present in the provided evidence text. |
| popPK | Zheng_2024 | relevant | 10 | 0 | The study reports a population PK model for tezepelumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btezepelumab%5D&body=Drug%3A%20tezepelumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tezepelumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
