<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Cycloguanil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloguanil_Chotsiri2021_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloguanil/Cycloguanil_Chotsiri2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Cycloguanil

- **generic name:** Cycloguanil
- **ATC codes:** `P01BB02`
- **DrugBank:** [DB14763](https://go.drugbank.com/drugs/DB14763) · **PubChem:** none
- **groups:** approved

## About

Cycloguanil is a biguanide antimalarial used to treat malaria.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cycloguanil | parent | 251.718 | C11H14ClN5 | PubChem | [9049](https://pubchem.ncbi.nlm.nih.gov/compound/9049) | Khwarg_2024, McGready_2003 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |
| proguanil | metabolite | 290.19 | — | the paper | — | Khwarg_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [McGready_2003_reference](drugs/drug_cycloguanil/Cycloguanil_McGready2003_reference.md) | — | parent + metabolite (no model) | 1 | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Chotsiri_2021_reference](drugs/drug_cycloguanil/Cycloguanil_Chotsiri2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 3 | Chotsiri P et al., Piperaquine Pharmacokinetics during Int…, Antimicrobial agents and ch… (2021) | [10.1128/aac.01150-20](https://doi.org/10.1128/aac.01150-20) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Khwarg_2024_reference](drugs/drug_cycloguanil/Cycloguanil_Khwarg2024_reference.md) | — | parent + metabolite (no model) | 0 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Na-Bangchang_2005_reference](drugs/drug_cycloguanil/Cycloguanil_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Watkins_1987_reference](drugs/drug_cycloguanil/Cycloguanil_Watkins1987_reference.md) | — | general linear (no model) | 0 | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **SLC22A1** | `Q27` · CL/F | transport | [Khwarg_2024](drugs/drug_cycloguanil/pgx_Khwarg_2024_SLC22A1_Q27.md) | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2C9_safety.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q40` · Fab | transport | [Hsin_2020](drugs/drug_cycloguanil/pgx_Hsin_2020_ABCB1_Q40.md) | Hsin CH et al., Combinations of common SNPs of the tran…, Scientific reports (2020) | [10.1038/s41598-020-69326-y](https://doi.org/10.1038/s41598-020-69326-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">mouse</span> | **SLC22A1 (OCT1)** | `Q410` · Kp | transport | [Morse_2021](drugs/drug_cycloguanil/pgx_Morse_2021_SLC22A1_OCT1_Q410.md) | Morse BL et al., Expansion of Knowledge on OCT1 Variant…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.631793](https://doi.org/10.3389/fphar.2021.631793) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Park_2019](drugs/drug_cycloguanil/pgx_Park_2019_CYP3A5_Q100.md) | Park JY et al., Influence of midazolam-related genetic…, Scientific reports (2019) | [10.1038/s41598-019-52517-7](https://doi.org/10.1038/s41598-019-52517-7) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **MDR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Park_2019](drugs/drug_cycloguanil/pgx_Park_2019_MDR1_Q100.md) | Park JY et al., Influence of midazolam-related genetic…, Scientific reports (2019) | [10.1038/s41598-019-52517-7](https://doi.org/10.1038/s41598-019-52517-7) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_ABCB1_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2B6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2B6_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2C19_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2D6_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A4** | `Q34` · Css | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP3A4_Q34.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:35 | 0:07 | 1/4/0 | 0/0/0 | 2/0/9 | 4,007/188 | einfracz / qwen3.8-27b | 21 | 1/18 | 21/0 | 1 |

## Coverage

- **PubMed hits:** 233 matched, 85 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_14 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lochner_2014.pdf` | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | pd | 4 | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) | [25277140](https://www.ncbi.nlm.nih.gov/pubmed/25277140) | metadata signals extractable PD data (IC50) |
| `Thapar_2003.pdf` | Thapar MM et al., Pharmacodynamic interactions among atov…, Transactions of the Royal S… (2003) | pd | 4 | [10.1016/s0035-9203(03)90162-3](https://doi.org/10.1016/s0035-9203(03)90162-3) | [15228254](https://www.ncbi.nlm.nih.gov/pubmed/15228254) | metadata signals extractable PD data (EC50) |
| `Wang_2015.pdf` | Wang Y et al., Capitate glandular trichomes of Paragut…, Journal of agricultural and… (2015) | pd | 4 | [10.1021/acs.jafc.5b04113](https://doi.org/10.1021/acs.jafc.5b04113) | [26513276](https://www.ncbi.nlm.nih.gov/pubmed/26513276) | metadata signals extractable PD data (EC50) |
| `Brazeau_2021.pdf` | Brazeau D et al., Association of ABCC2 Haplotypes to Myco…, Journal of clinical pharmac… (2021) | pgx | 8 | [10.1002/jcph.1932](https://doi.org/10.1002/jcph.1932) | [34169529](https://www.ncbi.nlm.nih.gov/pubmed/34169529) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Funakoshi_2019.pdf` | Funakoshi R et al., Effects of proton pump inhibitors, esom…, British journal of clinical… (2019) | pgx | 8 | [10.1111/bcp.13914](https://doi.org/10.1111/bcp.13914) | [30845361](https://www.ncbi.nlm.nih.gov/pubmed/30845361) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Somogyi_1996.pdf` | Somogyi AA et al., Pharmacokinetic evaluation of proguanil…, British journal of clinical… (1996) | pgx | 8 | [10.1111/j.1365-2125.1996.tb00179.x](https://doi.org/10.1111/j.1365-2125.1996.tb00179.x) | [8866915](https://www.ncbi.nlm.nih.gov/pubmed/8866915) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Thapar_2002.pdf` | Thapar MM et al., Time-dependent pharmacokinetics and dru…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-002-0426-9](https://doi.org/10.1007/s00228-002-0426-9) | [11956669](https://www.ncbi.nlm.nih.gov/pubmed/11956669) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Soyinka_2010.pdf` | Soyinka JO et al., Alteration of pharmacokinetics of progu…, European journal of pharmac… (2010) | pgx | 7 | [10.1016/j.ejps.2009.11.012](https://doi.org/10.1016/j.ejps.2009.11.012) | [19961932](https://www.ncbi.nlm.nih.gov/pubmed/19961932) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Birkett_1994.pdf` | Birkett DJ et al., In vitro proguanil activation to cyclog…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb05707.x](https://doi.org/10.1111/j.1365-2125.1994.tb05707.x) | [8054246](https://www.ncbi.nlm.nih.gov/pubmed/8054246) | metadata signals extractable PGX data (CYP3A) |
| `Bolaji_2002.pdf` | Bolaji OO et al., Polymorphic oxidative metabolism of pro…, European journal of clinica… (2002) | pgx | 5 | [10.1007/s00228-002-0509-7](https://doi.org/10.1007/s00228-002-0509-7) | [12451432](https://www.ncbi.nlm.nih.gov/pubmed/12451432) | metadata signals extractable PGX data (CYP2C19) |
| `Brosen_2015.pdf` | Brosen K, Pharmacogenetics of drug oxidation via…, Drug metabolism and persona… (2015) | pgx | 5 | [10.1515/dmdi-2014-0029](https://doi.org/10.1515/dmdi-2014-0029) | [25719307](https://www.ncbi.nlm.nih.gov/pubmed/25719307) | metadata signals extractable PGX data (CYP2D6) |
| `Helsby_1998.pdf` | Helsby NA et al., Hepatic cytochrome P450 CYP2C activity…, Acta dermato-venereologica (1998) | pgx | 5 | [10.1080/000155598433359](https://doi.org/10.1080/000155598433359) | [9534880](https://www.ncbi.nlm.nih.gov/pubmed/9534880) | metadata signals extractable PGX data (CYP2C) |
| `Kaneko_1999.pdf` | Kaneko A et al., Intrinsic efficacy of proguanil against…, The Journal of infectious d… (1999) | pgx | 5 | [10.1086/314683](https://doi.org/10.1086/314683) | [10068594](https://www.ncbi.nlm.nih.gov/pubmed/10068594) | metadata signals extractable PGX data (CYP2C19) |
| `Partovian_1995.pdf` | Partovian C et al., Comparison of chloroguanide and mepheny…, Clinical pharmacology and t… (1995) | pgx | 5 | [10.1016/0009-9236(95)90241-4](https://doi.org/10.1016/0009-9236(95)90241-4) | [7554698](https://www.ncbi.nlm.nih.gov/pubmed/7554698) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-11-23 20:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agomo_2016 | not_relevant | 2 | 5 | Reports parasite resistance-marker genotypes (Pfcrt/Pfmdr1/Pfdhfr) vs parasitaemia, not host pharmacogenomic effects on cycloguanil PK/PD parameters. |
| popPK | Aikio_2025 | irrelevant | 0 | 0 | The paper discusses TDP-43 proteinopathy in ALS and p38α inhibition, containing no data for the drug cycloguanil. |
| PGx | Aikio_2025 | not_relevant | 0 | 0 | The paper reports mechanisms of TDP-43 proteinopathy in ALS involving p38α and PRMT1, and does not investigate pharmacogenomics or PK/PD of cycloguanil. |
| popPK | Arfeen_2014 | irrelevant | 0 | 0 | The study is a quantum chemical mechanism of metabolism, not a pharmacokinetic study with disposition parameters. |
| PGx | Arfeen_2014 | not_relevant | 0 | 0 | The paper is a quantum chemical study on the reaction mechanism of CYP2C19-catalyzed cyclization and does not report any association between specific gene variants or phenotypes and pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ariefta_2023 | irrelevant | 0 | 0 | The study evaluates the antiplasmodial activity of phebestin, not the pharmacokinetics of cycloguanil. |
| PGx | Ariefta_2023 | not_relevant | 0 | 0 | The paper evaluates the antiplasmodial activity of phebestin, not cycloguanil, and contains no data on pharmacogenomic effects on PK or PD parameters. |
| popPK | Bapiro_2001 | irrelevant | 0 | 0 | The study reports in vitro CYP inhibition constants (Ki) for cycloguanil, not population pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Bapiro_2001 | not_relevant | 0 | 0 | The paper evaluates CYP inhibition by drugs (including cycloguanil) in vitro and in liver microsomes, but it does not report pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of cycloguanil. |
| popPK | Basco_1994 | irrelevant | 0 | 0 | The study is an in vitro susceptibility test of Plasmodium falciparum isolates to various antimalarials, not a pharmacokinetic study of cycloguanil. |
| PGx | Basco_1994 | not_relevant | 0 | 0 | The paper reports in vitro susceptibility of parasites to drugs, not pharmacogenomic effects of human gene variants on drug pharmacokinetics or pharmacodynamics. |
| popPK | Basco_1994_2 | irrelevant | 0 | 0 | The paper reports in vitro pharmacodynamic data (IC50 values) for cycloguanil against malaria parasites, not pharmacokinetic parameters (CL, V, ka). |
| PGx | Basco_1994_2 | not_relevant | 0 | 0 | The paper describes in vitro resistance of Plasmodium falciparum to cycloguanil, not the effect of human gene variants on drug pharmacokinetics or pharmacodynamics. |
| popPK | Basco_1995 | irrelevant | 0 | 0 | The study is an in-vitro drug susceptibility assay measuring IC50 values for antimalarial drugs, not a pharmacokinetic study, and cycloguanil is only a comparator drug. |
| PGx | Basco_1995 | not_relevant | 0 | 0 | The paper evaluates in vitro activity of atovaquone against malaria parasites and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cycloguanil. |
| popPK | Birkett_1994 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PGx | Birkett_1994 | not_relevant | 4 | 5 | The paper investigates CYP3A and S-mephenytoin hydroxylase as metabolizing enzymes for proguanil (cycloguanil precursor), but it does not report pharmacogenomic effects of specific genetic variants on cycloguanil PK/PD parameters. |
| popPK | Biswas_2001 | irrelevant | 0 | 0 | The paper is a case study on parasite genetics (DHFR mutations) causing drug resistance, not a pharmacokinetic study, and cycloguanil is only mentioned as a drug tested in in vitro assays. |
| PGx | Biswas_2001 | not_relevant | 0 | 0 | The paper discusses drug resistance in the pathogen (Plasmodium falciparum), not pharmacogenomics (host genetics) affecting drug pharmacokinetics or pharmacodynamics. |
| popPK | Bolaji_2002 | irrelevant | 1 | 0 | The study investigates proguanil as a probe drug for CYP2C19 polymorphism and reports only urinary metabolic ratios (proguanil/cycloguanil), not compartmental pharmacokinetic parameters (CL, V, t1/2) for cycloguanil. |
| popPK | Brazeau_2021 | irrelevant | 0 | 0 | The study focuses on mycophenolic acid pharmacokinetics in kidney transplant recipients and does not mention cycloguanil. |
| PGx | Brazeau_2021 | not_relevant | 0 | 0 | The study reports pharmacogenomics for mycophenolic acid (ABCC2), not cycloguanil. |
| popPK | Brosen_2015 | irrelevant | 0 | 0 | The paper is a review of pharmacogenetics discussing the bioactivation of proguanil to cycloguanil in CYP2C19 poor metabolizers, but it does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for cycloguanil. |
| PGx | Brosen_2015 | not_relevant | 5 | 2 | The paper reports that CYP2C19 poor metabolizers have impaired bioactivation of proguanil to cycloguanil, but does not provide quantitative PK/PD parameter data for cycloguanil itself in a dedicated study. |
| popPK | Brøsen_1991 | irrelevant | 0 | 0 | The paper is a review of cytochrome P450 polymorphisms and only mentions cycloguanil as a metabolite of proguanil in the context of metabolic phenotype, without providing any quantitative pharmacokinetic parameters. |
| PGx | Brøsen_1991 | not_relevant | 6 | 3 | The paper mentions that proguanil conversion to cycloguanil is reduced in mephenytoin poor metabolizers, but it does not provide specific quantitative PK/PD parameter data or fitted effect sizes. |
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | The paper is a genomic and epigenomic analysis of multiple myeloma and does not contain any pharmacokinetic data for cycloguanil. |
| PGx | Canevarolo_2026 | not_relevant | 0 | 0 | The paper discusses multidrug resistance mechanisms in multiple myeloma but does not mention cycloguanil or its specific pharmacokinetic/pharmacodynamic parameters. |
| popPK | Chotsiri_2021 | irrelevant | 0 | 0 | This is a population PK study of piperaquine in pregnant women; cycloguanil is only mentioned as a comparator drug with no PK parameters for it. |
| popPK | Desta_2002 | irrelevant | 0 | 0 | This is a review of CYP2C19 polymorphisms; while it mentions cycloguanil as a metabolite of proguanil, it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for cycloguanil. |
| PGx | Desta_2002 | not_relevant | 1 | 1 | The text only mentions CYP2C19's role in proguanil activation but explicitly states there are no clinical data linking genotype to cycloguanil PK/PD parameters. |
| popPK | Diekstra_2015 | irrelevant | 0 | 0 | The study is a pharmacogenomic investigation of sunitinib in renal cell carcinoma and contains no pharmacokinetic data for cycloguanil. |
| PGx | Diekstra_2015 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects of CYP3A5 and ABCB1 on sunitinib, not cycloguanil. |
| popPK | Edstein_1996 | irrelevant | 2 | 0 | The study investigates in vitro antimalarial activity and qualitative phenotyping of metabolizers, but does not report quantitative population-pharmacokinetic parameters (such as clearance or volume of distribution) for cycloguanil. |
| popPK | Elias_2026 | irrelevant | 0 | 0 | This is a review of gene-editing therapies for neurological disorders with no cycloguanil PK data or parameters. |
| popPK | Ettema_2025 | irrelevant | 0 | 0 | This is a rehabilitation study of gait training devices with no pharmacokinetic data or cycloguanil content whatsoever. |
| popPK | Farrar_2024 | irrelevant | 0 | 0 | This is an in vitro antibiotic susceptibility phenotyping study in E. coli with no cycloguanil PK parameters. |
| PGx | Ferraro_2014 | not_relevant | 2 | 3 | Viral NS3 variants affect drug resistance (PD efficacy proxy), not a measured PK/PD parameter of cycloguanil; different drug entirely. |
| popPK | Francesconi_2018 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antiviral activity (in vitro) of novel dihydrotriazine derivatives, with cycloguanil serving only as a structural reference/comparator; no pharmacokinetic data for cycloguanil is reported. |
| PGx | Francesconi_2018 | not_relevant | 0 | 0 | The paper focuses on the synthesis and molecular modeling of novel antiviral compounds targeting DHFR, without reporting any pharmacogenomic data or gene-variant effects on the pharmacokinetics or pharmacodynamics of cycloguanil. |
| popPK | Funakoshi_2019 | irrelevant | 1 | 0 | The study focuses on proguanil as the primary subject drug for CYP2C19 interaction, with cycloguanil acting only as a metabolite marker for formation clearance rather than the subject of a full PK parameterization. |
| PGx | Funakoshi_2019 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (CYP2C19 inhibition) in a fixed genotype population, not a pharmacogenomic effect caused by genetic variation. |
| popPK | Gu_2017 | irrelevant | 0 | 0 | The paper describes the synthesis and enzymatic inhibition of iminosugar analogues (NB-DNJ derivatives) and contains no pharmacokinetic data or mention of cycloguanil. |
| PGx | Gu_2017 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro enzyme inhibition (GBA1/GBA2/CGT) of NB-DNJ analogues; it does not involve cycloguanil or pharmacogenomic analysis of PK/PD parameters. |
| popPK | Guilhaumou_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vincristine, not cycloguanil. |
| PGx | Guilhaumou_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of vincristine, not cycloguanil. |
| popPK | Helsby_1990 | irrelevant | 0 | 0 | The study reports in vitro enzymatic metabolism (conversion to metabolite) parameters, not pharmacokinetic disposition parameters for the drug. |
| PGx | Helsby_1990 | not_relevant | 3 | 2 | The paper reports in vitro metabolic parameters for proguanil and chlorproguanil and suggests a role for a polymorphic enzyme, but it does not report genotype-stratified pharmacokinetic or pharmacodynamic data for cycloguanil in humans. |
| popPK | Helsby_1998 | irrelevant | 0 | 0 | The study uses proguanil as a probe to measure CYP2C activity and reports the ratio of parent drug to metabolite in urine, rather than quantifying the pharmacokinetic parameters (CL, V, t1/2) of cycloguanil itself. |
| PGx | Helsby_1998 | not_relevant | 0 | 0 | The paper uses proguanil as a probe drug to assess CYP2C activity in psoriasis and does not report a specific gene variant or genotype (only phenotypic poor/extensive metabolizer status) nor does it focus on cycloguanil as a therapeutic drug with a defined pharmacogenomic effect. |
| popPK | Hsin_2020 | irrelevant | 0 | 0 | This is a population-PK study of digoxin (P-gp probe substrate), not cycloguanil; no cycloguanil parameters appear anywhere. |
| popPK | Kaneko_1999 | irrelevant | 0 | 0 | The study investigates the antimalarial efficacy of proguanil and the presence/absence of its metabolite cycloguanil, but does not report pharmacokinetic disposition parameters (such as clearance, volume, or half-life) for cycloguanil. |
| PGx | Kaneko_1999 | not_relevant | 4 | 3 | The study focuses on clinical efficacy (PD outcome) rather than quantifying PK parameter changes, and notably finds no significant difference in clinical response between CYP2C19 genotypes. |
| popPK | Konziase_2015 | irrelevant | 0 | 0 | The study evaluates the antimalarial potency of plant-derived biflavanones; cycloguanil is only mentioned as a resistance marker for the parasite strain used, and no pharmacokinetic parameters are reported. |
| PGx | Konziase_2015 | not_relevant | 0 | 0 | The paper reports antimalarial activity of biflavanones and mentions a cycloguanil-resistant parasite strain, but it does not study pharmacogenomic effects on the PK or PD parameters of cycloguanil. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The paper is about the biochemical characterization of an enzyme from bacteria and has no relation to cycloguanil pharmacokinetics. |
| PGx | Li_2010 | not_relevant | 0 | 0 | The paper focuses on the biochemical characterization of a bacterial enzyme (alpha-CGTase) and has no relevance to the pharmacogenomics of cycloguanil. |
| popPK | Lochner_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and ligand-binding kinetics of 5-HT3 receptors, not on the pharmacokinetic disposition parameters (clearance, volume, etc.) of cycloguanil. |
| PGx | Lochner_2014 | not_relevant | 0 | 0 | The paper examines the pharmacodynamic effects of cycloguanil on 5-HT3 receptors but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | McGready_2003 | not_relevant | 0 | 0 | The paper reports pharmacokinetics in pregnant women but does not report any association with gene variants or genotypes. |
| popPK | McGready_2003_2 | irrelevant | 3 | 0 | The study reports only relative changes in metabolite levels (percentages) and urinary ratios, lacking specific pharmacokinetic parameter values like clearance, volume, or half-life. |
| PGx | McGready_2003_2 | not_relevant | 3 | 2 | The study reports physiological effects of pregnancy and oral contraceptives on CYP2C19 activity, not the effect of a specific gene variant or genotype. |
| popPK | Mehlotra_1993 | irrelevant | 0 | 0 | The study is an in vitro susceptibility assay measuring growth inhibition in Acanthamoeba, not a pharmacokinetic study reporting disposition parameters for cycloguanil. |
| PGx | Mehlotra_1993 | not_relevant | 0 | 0 | The paper reports in vitro susceptibility of a pathogen to cycloguanil but does not describe any pharmacogenomic effects on PK or PD parameters in humans. |
| popPK | Meng_2011 | irrelevant | 0 | 0 | The paper investigates p53 mutation frequencies in rat nasal epithelium following naphthalene exposure and contains no pharmacokinetic data for cycloguanil. |
| PGx | Meng_2011 | not_relevant | 0 | 0 | The paper investigates the mutagenic effects of naphthalene on p53 in rats and contains no mention of cycloguanil or pharmacogenomics. |
| popPK | Na-Bangchang_2005 | relevant | 8 | 4 | The study reports quantitative PK parameters (CL/F, t1/2, etc.) for cycloguanil in humans, though the values are provided as ranges rather than mean values with standard deviations. |
| PGx | Na-Bangchang_2005 | not_relevant | 0 | 0 | The study investigates the effect of pregnancy status on pharmacokinetics, not genetic variants or genotypes. |
| popPK | Nesnow_1995 | irrelevant | 0 | 0 | The paper investigates the carcinogenicity of polycyclic aromatic hydrocarbons in mice and contains no pharmacokinetic data for cycloguanil. |
| PGx | Nesnow_1995 | not_relevant | 0 | 0 | The paper studies polycyclic aromatic hydrocarbons in mice, not the pharmacogenomics of cycloguanil. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | Study protocol for acoziborole in gambiense HAT; no cycloguanil PK parameters reported. |
| popPK | Park_2012 | irrelevant | 0 | 0 | The study investigates genetic polymorphisms associated with chronic liver disease in humans and does not contain any pharmacokinetic data for cycloguanil. |
| PGx | Park_2012 | not_relevant | 0 | 0 | The paper investigates the association between GNLY polymorphisms and chronic liver disease progression in hepatitis B, unrelated to cycloguanil pharmacokinetics or pharmacodynamics. |
| popPK | Partovian_1995 | irrelevant | 1 | 0 | The study uses chloroguanide (proguanil) as a CYP2C19 probe and reports metabolic ratios, but it does not provide quantitative population PK parameters (CL, V, etc.) for cycloguanil. |
| PGx | Partovian_1995 | not_relevant | 2 | 5 | The study only includes extensive metabolizers and focuses on drug-drug interactions rather than the effect of a specific genetic variant on a PK/PD parameter. |
| popPK | Pudney_1999 | irrelevant | 2 | 0 | The paper is a review of nonclinical studies without specific quantitative PK parameters (CL, V, etc.) for cycloguanil, only describing relative exposure levels qualitatively. |
| PGx | Pudney_1999 | not_relevant | 0 | 0 | The paper is a nonclinical review of atovaquone and proguanil that mentions cycloguanil only as an active metabolite, containing no data on genetic variants affecting its pharmacokinetics or pharmacodynamics. |
| PGx | Rana_2022 | not_relevant | 2 | 5 | Reports prevalence of Pfdhfr mutations (including cycloguanil-resistance A16V/S108T absence) as resistance markers, not an effect of genotype on a PK/PD parameter of cycloguanil. |
| popPK | Rasmussen_1998 | irrelevant | 0 | 0 | The study is in-vitro mechanistic research on proguanil metabolism; cycloguanil is a metabolite/product measured, but no pharmacokinetic disposition parameters (CL, V, t1/2) for cycloguanil as the subject drug are reported. |
| PGx | Rasmussen_1998 | not_relevant | 0 | 0 | The study reports in vitro drug-drug interactions (CYP2C19 inhibition by fluvoxamine) rather than the impact of a patient's genetic variant on pharmacokinetics or pharmacodynamics. |
| popPK | Schapira_1984 | irrelevant | 0 | 0 | The study is an in vitro susceptibility assay for malaria parasites, not a pharmacokinetic study, and does not report disposition parameters for cycloguanil. |
| PGx | Schapira_1984 | not_relevant | 0 | 0 | The paper reports in vitro drug susceptibility of parasite isolates to cycloguanil, not the effect of human gene variants on cycloguanil pharmacokinetics or pharmacodynamics. |
| PGx | Siame_2015 | not_relevant | 2 | 3 | Reports parasite dhfr/dhps mutation prevalence (resistance markers), not a pharmacogenomic effect on cycloguanil PK/PD parameters. |
| popPK | Somogyi_1996 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Somogyi_1996 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of proguanil, not cycloguanil. |
| popPK | Soyinka_2010 | irrelevant | 2 | 0 | The study focuses on proguanil as the primary subject drug, with cycloguanil listed only as a metabolite; no quantitative PK parameters (CL, V, etc.) for cycloguanil are reported in the evidence. |
| PGx | Soyinka_2010 | not_relevant | 0 | 10 | The study investigates a drug-drug interaction (efavirenz) and does not report pharmacogenomic effects of gene variants on cycloguanil's PK/PD. |
| popPK | Thapar_2002 | irrelevant | 2 | 0 | The paper reports AUC ratios for cycloguanil (a metabolite) but does not provide absolute quantitative disposition parameters such as clearance (CL), volume of distribution (V), or half-life (t1/2). |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PGx | Thapar_2003 | not_relevant | 0 | 0 | The paper focuses on pharmacodynamic drug-drug interactions between antimalarial agents in vitro, not on pharmacogenomic effects of genetic variants on cycloguanil PK/PD. |
| popPK | Tonelli_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral pharmacodynamics study reporting EC50 values, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| PGx | Tonelli_2017 | not_relevant | 0 | 0 | The paper describes the synthesis and antiviral activity of cycloguanil analogues targeting host DHFR, with no focus on pharmacogenomics or human gene variants. |
| popPK | Vaubel_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the MDM2 inhibitor navtemadlin in mice, not for cycloguanil. |
| PGx | Vaubel_2025 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of navtemadlin, not cycloguanil. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper focuses on the isolation and characterization of phytotoxic labdane diterpenoids from plants and contains no pharmacokinetic data for cycloguanil. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper describes phytotoxic labdane diterpenoids in a plant and has no relation to pharmacogenomics or cycloguanil. |
| PGx | Watkins_1987 | not_relevant | 0 | 0 | The study reports population PK parameters and inter-individual variability but does not analyze gene variants or genotypes as predictors of PK/PD parameters. |
| popPK | Wright_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of metabolic inhibition using human liver microsomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Wright_1995 | not_relevant | 0 | 0 | The study examines the role of CYP2C19 in the metabolism of proguanil and chlorproguanil, not the specific pharmacogenomic impact of the gene variant on the PK or PD of cycloguanil itself. |
| PGx | Yang_2023 | not_relevant | 2 | 0 | Only CYP2C19 *1/*1 extensive metabolizers were enrolled; no genotype/phenotype comparison of cycloguanil PK was performed—effects are drug–drug interactions, not pharmacogenomic. |
| popPK | Youssef_2026 | irrelevant | 0 | 0 | This is a pharmacovigilance review of cell and gene therapies with no cycloguanil PK data or parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcycloguanil%5D&body=Drug%3A%20cycloguanil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cycloguanil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:32 UTC</sub>
