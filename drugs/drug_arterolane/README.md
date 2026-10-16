<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Arterolane&quot;}]"></div>

# Arterolane

- **generic name:** Arterolane
- **ATC codes:** `P01BX02`
- **DrugBank:** [DB19027](https://go.drugbank.com/drugs/DB19027) · **PubChem:** not captured
- **molar mass:** 392.54 g/mol (C22H36N2O4) — DrugBank
- **groups:** investigational

## About

Arterolane is an antimalarial drug developed for the treatment of malaria. It is still classed as investigational and is not widely approved; it has been used mainly in combination therapy in India.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:09 | 6:58 | 0/0/0 | 0/0/0 | 0/0/1 | 227,267/3,642 | einfracz / qwen3.8-27b | 19 | 5/13 | 19/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | **P. falciparum K13** | `Q321` · EC50 | target | [Straimer_2017](drugs/drug_arterolane/pgx_Straimer_2017_P_falciparum_K13_Q321.md) | Straimer J et al., Plasmodium falciparum K13 Mutations Dif…, mBio (2017) | [10.1128/mBio.00172-17](https://doi.org/10.1128/mBio.00172-17) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=arterolane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: P. FALCIPARUM K13 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gautam_2011.pdf` | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | popPK | 8 | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) | [21148048](https://pubmed.ncbi.nlm.nih.gov/21148048) | The study is a Phase II clinical PK/PD trial of arterolane in humans, but the provided text only reports the relationship between AUC and PD metrics, lacking specific numeric disposition parameters (CL, V, Ka) which are likely in the full text or supplementary tables not included in the evidence. |

<sub>queue written 2026-10-14T20:09:17.047020+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-Rahman_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of the antimalarial combination artefenomel and piperaquine, not the drug arterolane. |
| popPK | Adoke_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics and efficacy of artefenomel and ferroquine, not arterolane. |
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (IC50) of arterolane against Ebola virus, not pharmacokinetic parameters. |
| popPK | Awodele_2025 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study (Phase IV) comparing treatment outcomes (ACPR, PCT) with no reporting of pharmacokinetic parameters (CL, V, etc.). |
| popPK | Collins_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for artefenomel, not arterolane. |
| popPK | Demarta-Gatsi_2023 | irrelevant | 0 | 0 | The paper focuses on antimalarial drugs (artefenomel, ferroquine, piperaquine) in a mouse model and does not mention or study arterolane. |
| popPK | Gansane_2023 | irrelevant | 0 | 0 | The study investigates artefenomel and ferroquine, not arterolane. |
| popPK | Gautam_2011 | relevant | 8 | 2 | The study is a Phase II clinical PK/PD trial of arterolane in humans, but the provided text only reports the relationship between AUC and PD metrics, lacking specific numeric disposition parameters (CL, V, Ka) which are likely in the full text or supplementary tables not included in the evidence. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The paper is a structure-activity discovery report for a new compound (artefenomel) and does not contain quantitative pharmacokinetic parameter data for arterolane. |
| popPK | Macintyre_2017 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of artefenomel and piperaquine, not arterolane. |
| popPK | McCarthy_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of artefenomel (OZ439), mentioning arterolane only briefly in the discussion as a comparator with a different half-life, without providing any quantitative PK parameters for arterolane itself. |
| popPK | McCarthy_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for the drugs artefenomel and DSM265, not arterolane. |
| popPK | Odedra_2020 | irrelevant | 0 | 0 | The paper investigates liver function test abnormalities in malaria infection studies and does not report pharmacokinetic parameters for arterolane. |
| popPK | Patil_2014 | relevant | 4 | 6 | Review article containing scattered PK parameters (AUC, t1/2, Vd qualitative, T_max) for arterolane in humans, but lacking a comprehensive compartmental model or complete set of CL/V/Q values. |
| popPK | Phyo_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artefenomel (OZ439), not arterolane; arterolane is only mentioned in the background as a related trioxolane. |
| popPK | Saha_2014 | relevant | 4 | 0 | The study reports qualitative PK characteristics (t1/2, tmax) for arterolane in humans, but lacks the specific quantitative values (e.g., CL, V, AUC) required for parameter extraction. |
| popPK | Straimer_2017 | irrelevant | 0 | 0 | The paper is an in-vitro resistance study on Plasmodium parasites, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for arterolane. |
| PGx | Straimer_2017 | not_relevant | 0 | 0 | The paper examines P. falciparum K13 mutations (drug target resistance), not human pharmacogenomic variants affecting PK/PD. |
| popPK | Toure_2015 | irrelevant | 5 | 0 | The paper describes an efficacy study that collected PK data and mentions a bioavailability study, but the specific quantitative PK parameters (CL, V, ka, etc.) are not reported in the provided evidence, only referenced or in figures. |
| popPK | Toure_2016 | irrelevant | 1 | 0 | The paper is a Phase 3 clinical efficacy trial for falciparum malaria treatment that reports clinical response rates (ACPR) and safety profiles, but contains no quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for arterolane. |
| popPK | Toure_2017 | irrelevant | 1 | 0 | The paper is a Phase 3 clinical trial reporting efficacy and safety (cure rates, clearance times) without any pharmacokinetic parameters (CL, Vd, ka) for arterolane. |
| popPK | Valecha_2010 | irrelevant | 0 | 0 | The paper is a Phase II clinical trial reporting efficacy and safety outcomes (parasite clearance, clinical response), not pharmacokinetic parameters (CL, V, half-life) for arterolane. |
| popPK | Valecha_2012 | irrelevant | 2 | 0 | This is a clinical efficacy trial reporting parasite and fever clearance times, not pharmacokinetic disposition parameters (CL, V, Q) for arterolane. |
| popPK | Valecha_2016 | irrelevant | 1 | 1 | The paper is a Phase III efficacy study; while it mentions arterolane's half-life in the background, it does not report original quantitative PK parameters (CL, Vd) for the study population. |
| popPK | Walz_2019 | irrelevant | 0 | 0 | The study focuses on OZ439 and OZ609 (artefenomel) as anti-malarial drugs, not arterolane. |
| popPK | Wamae_2022 | irrelevant | 0 | 0 | The paper reports parasite clearance half-lives for Plasmodium falciparum malaria infection in humans, not pharmacokinetic parameters (CL, V, etc.) for the drug arterolane. |
| popPK | Wattanakul_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperaquine, not arterolane. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
