<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;diazoxide&quot;}]"></div>

# diazoxide

- **generic name:** diazoxide
- **ATC codes:** `C02DA01`, `V03AH01`
- **DrugBank:** [DB01119](https://go.drugbank.com/drugs/DB01119) · **PubChem:** [CID 3019](https://pubchem.ncbi.nlm.nih.gov/compound/3019)
- **molar mass:** 230.671 g/mol (C8H7ClN2O2S) — DrugBank
- **groups:** approved, investigational

## About

Diazoxide is a vasodilator and potassium channel activator used to treat hypoglycemia and malignant hypertension. It is an approved medicine, used mainly in hospital settings for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420009](https://www.wikidata.org/wiki/Q420009) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| diazoxide | parent | 230.671 | C8H7ClN2O2S | DrugBank | [3019](https://pubchem.ncbi.nlm.nih.gov/compound/3019) | Kizu_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:17 | 4:49 | 0/1/0 | 0/0/0 | 0/0/7 | 102,194/9,965 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kizu_2017_reference](drugs/drug_diazoxide/Diazoxide_Kizu2017_reference.md) | — | 1-compartment (no model) | 0 | Kizu R et al., Population Pharmacokinetics of Diazoxid…, Hormone research in paediat… (2017) | [10.1159/000478696](https://doi.org/10.1159/000478696) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **ABCC8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Nair_2026](drugs/drug_diazoxide/pgx_Nair_2026_ABCC8_Q100.md) | Nair AK et al., Modelling the effects of human SUR1 R14…, Diabetologia (2026) | [10.1007/s00125-025-06605-1](https://doi.org/10.1007/s00125-025-06605-1) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **ABCC8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_ABCC8_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **GLUD1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_GLUD1_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **HADH** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_HADH_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **HNF1A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_HNF1A_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **HNF4A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_HNF4A_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **KCNJ11** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_KCNJ11_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 27 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kizu_2017.pdf` | Kizu R et al., Population Pharmacokinetics of Diazoxid…, Hormone research in paediat… (2017) | popPK | 10 | [10.1159/000478696](https://doi.org/10.1159/000478696) | [28715810](https://pubmed.ncbi.nlm.nih.gov/28715810) | The paper reports a population pharmacokinetic model for diazoxide in children with specific numeric coefficients for clearance and volume of distribution. |
| `Männistö_2020.pdf` | Männistö JME et al., Clinical and Genetic Characterization o…, The Journal of clinical end… (2020) | pgx | 5 | [10.1210/clinem/dgz271](https://doi.org/10.1210/clinem/dgz271) | [32170320](https://www.ncbi.nlm.nih.gov/pubmed/32170320) | metadata signals extractable PGX data (ABCC8) |
| `Ohkubo_2005.pdf` | Ohkubo K et al., Genotypes of the pancreatic beta-cell K…, Clinical endocrinology (2005) | pgx | 5 | [10.1111/j.1365-2265.2005.02242.x](https://doi.org/10.1111/j.1365-2265.2005.02242.x) | [15807877](https://www.ncbi.nlm.nih.gov/pubmed/15807877) | metadata signals extractable PGX data (ABCC8) |

<sub>queue written 2026-10-06T13:12:53.903258+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alemzadeh_1993 | not_relevant | 0 | 0 | The study investigates the physiological effects of diazoxide in a specific rat strain (Zucker) but does not report pharmacogenomic effects (gene variant-dependent changes) on PK or PD parameters. |
| PGx | Alemzadeh_1996 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of diazoxide in obese vs. lean rats, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Bessadok_2011 | not_relevant | 0 | 0 | The paper investigates the interaction of diazoxide with P-glycoprotein in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Butler_2025 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of diazoxide choline and the genetic basis of Prader-Willi syndrome, but it does not report any pharmacogenomic effects (gene variants altering PK/PD) of diazoxide. |
| PGx | De_2020 | not_relevant | 0 | 0 | The paper reports a case of congenital hyperinsulinism caused by a CACNA1D mutation and describes the clinical use of diazoxide, but it does not report a pharmacogenomic effect of the variant on the pharmacokinetic or pharmacodynamic parameters of diazoxide. |
| popPK | Deja_2009 | irrelevant | 0 | 0 | The study is a clinical trial assessing cardioprotective efficacy and mitochondrial function, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for diazoxide. |
| PGx | El-Meanawy_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of SUR2A-55 overexpression on mitochondrial function and glucose uptake, using diazoxide only as a tool compound to probe channel activity, rather than reporting a pharmacogenomic effect on diazoxide's PK/PD parameters. |
| PGx | Flechtner_2006 | not_relevant | 2 | 0 | The paper discusses the mechanism of action of diazoxide in the context of KCNJ11 mutations but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, ED50) resulting from the genotype. |
| PGx | Laaraje_2025 | not_relevant | 0 | 0 | The paper reports a case of congenital hyperinsulinism where diazoxide was unavailable, so no pharmacokinetic or pharmacodynamic data for the drug is presented. |
| PGx | Mouron-Hryciuk_2021 | not_relevant | 2 | 2 | The paper reports clinical outcomes (remission, adverse events) and genetic variants in ABCC8, but does not quantify specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, insulin levels) to establish a pharmacogenomic effect size. |
| PGx | Männistö_2020 | not_relevant | 2 | 0 | The paper reports genetic associations with the clinical diagnosis of congenital hyperinsulinism and general diazoxide responsiveness, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, EC50) linked to specific genotypes. |
| PGx | Nair_2026 | not_relevant | 5 | 5 | The paper reports a pharmacodynamic effect of diazoxide (reduction of insulin secretion) in a specific genotype, but it is a qualitative/semi-quantitative observation in a cell model, not a fitted pharmacokinetic or pharmacodynamic parameter (e.g., EC50, Emax) derived from a population model. |
| PGx | Ni_2019 | not_relevant | 2 | 1 | The paper reports clinical response (diazoxide-unresponsive) and genotype associations in congenital hyperinsulinism, but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, insulin suppression curve metrics) linked to specific gene variants. |
| PGx | Ohkubo_2005 | not_relevant | 2 | 0 | The paper reports genetic mutations associated with the disease phenotype (PHHI) and general response to diazoxide, but does not quantify specific pharmacokinetic or pharmacodynamic parameters of diazoxide. |
| PGx | Stanik_2017 | not_relevant | 2 | 0 | The paper reports a clinical response to diazoxide in a patient with an HNF4A mutation but does not quantify specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, insulin suppression curve metrics) to establish a pharmacogenomic effect size. |
| PGx | Staník_2016 | not_relevant | 2 | 0 | The text is a general overview of congenital hyperinsulinism and mentions diazoxide resistance qualitatively but provides no specific pharmacokinetic or pharmacodynamic data or quantitative effect sizes for gene variants. |
| PGx | Wexler_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a SUR2A splice variant on cardiac function and mitochondrial KATP channel sensitivity to diazoxide, but does not report pharmacokinetic or pharmacodynamic parameters of diazoxide as a therapeutic drug. |
| PGx | Yamauchi_2003 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanism of diazoxide in retinal neurons and does not report any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 13:12 UTC</sub>
