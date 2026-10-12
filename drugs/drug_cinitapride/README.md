<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;cinitapride&quot;}]"></div>

# cinitapride

- **generic name:** cinitapride
- **ATC codes:** `A03FA08`
- **DrugBank:** [DB08810](https://go.drugbank.com/drugs/DB08810) · **PubChem:** [CID 68867](https://pubchem.ncbi.nlm.nih.gov/compound/68867)
- **molar mass:** 402.4873 g/mol (C21H30N4O4) — DrugBank
- **groups:** investigational

## About

Cinitapride is a propulsive drug for functional gastrointestinal disorders and has been described as an anti-ulcer agent. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5121012](https://www.wikidata.org/wiki/Q5121012) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:40 | 1:04 | 0/0/0 | 0/0/0 | 0/1/0 | 23,664/1,417 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C8** | `Q22` · CL | metabolism | [Campodónico_2022](drugs/drug_cinitapride/pgx_Campod_nico_2022_CYP2C8_Q22.md) | Campodónico DM et al., CYP2C8*3 and *4 define CYP2C8 phenotype…, Clinical and translational… (2022) | [10.1111/cts.13386](https://doi.org/10.1111/cts.13386) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cinitapride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: HTR1A (target), HTR2A (target), HTR4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2019.pdf` | Zhang X et al., Pharmacokinetics and tolerability of ci…, Xenobiotica; the fate of fo… (2019) | popPK | 10 | [10.1080/00498254.2018.1447710](https://doi.org/10.1080/00498254.2018.1447710) | [29502468](https://pubmed.ncbi.nlm.nih.gov/29502468) | The study reports pharmacokinetic parameters for cinitapride in humans, but the specific numeric values are not present in the provided evidence text. |
| `Robert_2007.pdf` | Robert M et al., The prokinetic cinitapride has no clini…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.010835](https://doi.org/10.1124/dmd.106.010835) | [17437965](https://www.ncbi.nlm.nih.gov/pubmed/17437965) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T13:39:22.998336+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hassan_2019 | not_relevant | 0 | 0 | The paper focuses on drug repositioning for Alzheimer's disease and does not report pharmacogenomic effects on the PK or PD parameters of cinitapride. |
| popPK | Marcelín-Jiménez_2017 | irrelevant | 2 | 0 | The paper describes a method development and an interaction trial (simethicone) but does not report quantitative disposition parameters (CL, V, etc.) for cinitapride in the provided evidence. |
| popPK | Massingham_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cinitapride's mechanism of action on guinea-pig ileum, reporting potency (EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Rehman_2018 | irrelevant | 0 | 0 | The study focuses on the formulation and physico-chemical characterization of mouth-dissolving tablets, reporting no pharmacokinetic parameters. |
| PGx | Robert_2007 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (ketoconazole) and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Saleem_2025 | irrelevant | 2 | 0 | The study reports in-silico PBPK predictions (Cmax, AUC) for a formulation but does not provide the underlying quantitative PK parameters (CL, V, Q, ka) or a population PK model for cinitapride. |
| popPK | Zhang_2019 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for cinitapride in humans, but the specific numeric values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
