<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;tezepelumab&quot;}]"></div>

# tezepelumab

- **generic name:** tezepelumab
- **ATC codes:** `R03DX11`
- **DrugBank:** [DB15090](https://go.drugbank.com/drugs/DB15090) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tezepelumab is a monoclonal antibody used to treat asthma. It is authorised in the European Union and is also being investigated for other uses such as sinusitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326702](https://www.wikidata.org/wiki/Q25326702) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:14 | 1:08 | 0/0/0 | 0/1/0 | 0/0/1 | 10,472/661 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ly_2021_AER](drugs/drug_tezepelumab/pd_Ly_2021_AER.md) | asthma exacerbation rate ← tezepelumab · inhibition effect | — | Ly N et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1803](https://doi.org/10.1002/jcph.1803) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ly_2021_FeNO](drugs/drug_tezepelumab/pd_Ly_2021_FeNO.md) | fractional exhaled nitric oxide ← tezepelumab · inhibition effect | — | Ly N et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1803](https://doi.org/10.1002/jcph.1803) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **SERPINE1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Fukahori_2026](drugs/drug_tezepelumab/pgx_Fukahori_2026_SERPINE1_Q100.md) | Fukahori S et al., Influence of PAI-1 gene polymorphism on…, Journal of thoracic disease (2026) | [10.21037/jtd-2025-aw-2408](https://doi.org/10.21037/jtd-2025-aw-2408) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tezepelumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SERPINE1 (target), TSLP (antibody), TSLP (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ly_2021.pdf` | Ly N et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1803](https://doi.org/10.1002/jcph.1803) | [33368307](https://pubmed.ncbi.nlm.nih.gov/33368307) | The paper describes a population PK model for tezepelumab in humans, but the specific numeric parameter estimates (CL, V, Q, ka) are not present in the provided evidence text. |
| `Zheng_2024.pdf` | Zheng Y et al., Population Pharmacokinetic Modeling and…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2433](https://doi.org/10.1002/jcph.2433) | [38632826](https://pubmed.ncbi.nlm.nih.gov/38632826) | The study reports a population PK model for tezepelumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

<sub>queue written 2026-10-07T22:13:59.716933+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Fukahori_2026 | not_relevant | 5 | 0 | The paper is a study protocol for a pharmacogenetic trial that proposes testing the influence of the PAI-1 polymorphism on the efficacy of tezepelumab (primary and secondary endpoints like AAER, FEV1), but it does not report the results, data, or fitted effect sizes from the study. |
| popPK | Ly_2021 | relevant | 10 | 3 | The paper describes a population PK model for tezepelumab in humans, but the specific numeric parameter estimates (CL, V, Q, ka) are not present in the provided evidence text. |
| popPK | Zheng_2024 | relevant | 10 | 0 | The study reports a population PK model for tezepelumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
