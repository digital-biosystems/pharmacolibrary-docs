<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;lomitapide&quot;}]"></div>

# lomitapide

- **generic name:** lomitapide
- **ATC codes:** `C10AX12`
- **DrugBank:** [DB08827](https://go.drugbank.com/drugs/DB08827) · **PubChem:** [CID 9853053](https://pubchem.ncbi.nlm.nih.gov/compound/9853053)
- **molar mass:** 693.7204 g/mol (C39H37F6N3O2) — DrugBank
- **groups:** approved, investigational

## About

Lomitapide is a lipid-modifying medicine used to treat hypercholesterolaemia. It is authorised in the European Union, where one product is on the market, and is used only in a limited way for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1268941](https://www.wikidata.org/wiki/Q1268941) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:31 | 7:07 | 0/0/0 | 0/0/0 | 1/0/0 | 154,087/2,898 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/11 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **MTTP** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Kolovou_2025](drugs/drug_lomitapide/pgx_Kolovou_2025_MTTP_safety.md) | Kolovou G et al., Lomitapide response in a cohort of pati…, Orphanet journal of rare di… (2025) | [10.1186/s13023-025-04033-3](https://doi.org/10.1186/s13023-025-04033-3) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lomitapide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MTTP (inhibitor), MTTP (safety_allele), MTTP (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bihorel_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for evinacumab, not lomitapide. |
| PGx | DErasmo_2017 | not_relevant | 0 | 0 | The study reports clinical efficacy in HoFH patients but explicitly states that LDL-C reduction was not related to genotype, and it does not report pharmacokinetic parameters or genotype-specific pharmacodynamic effects. |
| PGx | DErasmo_2021 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of lomitapide versus lipoprotein apheresis in HoFH patients but does not report pharmacogenomic effects (gene variant impact) on lomitapide's PK or PD parameters. |
| PGx | DErasmo_2022_2 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of lomitapide in patients with a specific genetic disease (ARH) but does not report a pharmacogenomic effect of a gene variant on the drug's PK or PD parameters. |
| PGx | Davis_2014 | not_relevant | 0 | 0 | The paper is a general review of lomitapide's pharmacology and clinical use, mentioning CYP3A4 metabolism but not reporting specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Dingman_2024 | irrelevant | 0 | 0 | The paper is a review of evinacumab, and lomitapide is only mentioned as a comparator therapy without any pharmacokinetic data provided for it. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | The paper is an in silico study focusing on montelukast binding to Cav3.1 calcium channels and does not contain any pharmacokinetic data for lomitapide. |
| PGx | Hang_2026 | not_relevant | 0 | 0 | The paper is a review of plozasiran and other therapies for familial chylomicronemia syndrome; it mentions lomitapide only as a non-traditional therapy but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Huang_2025 | not_relevant | 0 | 0 | The paper is a general review of HoFH treatments and mentions lomitapide as a therapeutic option but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Iannuzzo_2024 | not_relevant | 0 | 0 | The paper is a clinical review and case series on the management and monitoring of side effects in HoFH patients, and does not report pharmacogenomic effects of gene variants on lomitapide PK or PD parameters. |
| PGx | Jianu_2025 | not_relevant | 0 | 0 | The paper is a general review of lipid-lowering therapies and does not report specific pharmacogenomic effects on the PK or PD parameters of lomitapide. |
| PGx | Marbach_2014 | not_relevant | 0 | 0 | The text is a general review of novel treatments for familial hypercholesterolemia and does not report specific pharmacogenomic effects on lomitapide's PK or PD parameters. |
| PGx | Marbach_2015 | not_relevant | 0 | 0 | The paper describes the mechanism of action and clinical use of lomitapide in HoFH patients but does not report any pharmacogenomic analysis or specific gene variants affecting its PK/PD parameters. |
| PGx | Nohara_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of lomitapide in HoFH patients but does not analyze the impact of specific gene variants (e.g., MTP, LDLR, CYP3A4) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Raper_2015 | not_relevant | 0 | 0 | The paper reports clinical outcomes of MTP inhibitor therapy in a patient with HoFH but does not report pharmacogenomic effects on PK/PD parameters of lomitapide. |
| PGx | Reiner_2014 | not_relevant | 0 | 0 | The paper discusses statin resistance and intolerance, mentioning lomitapide only as a future alternative therapy without reporting any pharmacogenomic data for it. |
| PGx | Sanna_2016 | not_relevant | 0 | 0 | The paper mentions lomitapide only as a future therapeutic option and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Schaduangrat_2023 | irrelevant | 0 | 0 | The paper is a machine learning study for predicting estrogen receptor inhibitors and mentions lomitapide only as a reference in the bibliography, containing no pharmacokinetic data. |
| PGx | Tuteja_2014 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (lomitapide affecting statins) in healthy volunteers and does not report any pharmacogenomic effects (gene variants) on lomitapide's PK or PD parameters. |
| PGx | Vrablík_2016 | not_relevant | 0 | 0 | The text is a general review of familial hypercholesterolemia treatment and mentions lomitapide only as a therapeutic option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper describes a glioblastoma organoid model and drug screening for lomitapide but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Zubielienė_2022 | not_relevant | 0 | 0 | The paper is a general review of familial hypercholesterolemia and does not report pharmacogenomic effects on lomitapide PK/PD. |
| PGx | unknown_2015 | not_relevant | 0 | 0 | The text is a clinical review discussing efficacy and safety in a specific disease population (HoFH) and mentions CYP3A4 metabolism, but it does not report any pharmacogenomic study linking specific gene variants to changes in lomitapide PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
