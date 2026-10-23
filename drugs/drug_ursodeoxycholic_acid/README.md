<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;ursodeoxycholic acid&quot;}]"></div>

# ursodeoxycholic acid

- **generic name:** ursodeoxycholic acid
- **ATC codes:** `A05AA02`
- **DrugBank:** [DB01586](https://go.drugbank.com/drugs/DB01586) · **PubChem:** [CID 31401](https://pubchem.ncbi.nlm.nih.gov/compound/31401)
- **molar mass:** 392.572 g/mol (C24H40O4) — DrugBank
- **groups:** approved, investigational

## About

Ursodeoxycholic acid (ursodiol) is a bile acid used to treat primary biliary cholangitis and gallstone disease. It is an approved medicine, classified for bile therapy, and is widely used for these liver and gallbladder conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241374](https://www.wikidata.org/wiki/Q241374) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Yue_2008_reference](drugs/drug_ursodeoxycholic_acid/UrsodeoxycholicAcid_Yue2008_reference.md) | — | 1-compartment (no model) | 3 | Yue PF et al., Preparation, characterization, and bioa…, Drug development and indust… (2008) | [10.1080/03639040701842477](https://doi.org/10.1080/03639040701842477) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB11** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Kreimeyer_2023](drugs/drug_ursodeoxycholic_acid/pgx_Kreimeyer_2023_ABCB11_Q100.md) | Kreimeyer H et al., Influence of the Bile Acid Transporter…, Journal of personalized med… (2023) | [10.3390/jpm13071180](https://doi.org/10.3390/jpm13071180) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Kreimeyer_2023](drugs/drug_ursodeoxycholic_acid/pgx_Kreimeyer_2023_ABCB4_Q100.md) | Kreimeyer H et al., Influence of the Bile Acid Transporter…, Journal of personalized med… (2023) | [10.3390/jpm13071180](https://doi.org/10.3390/jpm13071180) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PNPLA3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kreimeyer_2023](drugs/drug_ursodeoxycholic_acid/pgx_Kreimeyer_2023_PNPLA3_Q100.md) | Kreimeyer H et al., Influence of the Bile Acid Transporter…, Journal of personalized med… (2023) | [10.3390/jpm13071180](https://doi.org/10.3390/jpm13071180) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:44 | 3:09 | 0/1/0 | 0/0/0 | 0/0/3 | 74,230/6,087 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 118 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gordi_2014.pdf` | Gordi T et al., Pharmacokinetic analysis of 14C-ursodio…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.327](https://doi.org/10.1002/jcph.327) | [24805288](https://pubmed.ncbi.nlm.nih.gov/24805288) | The paper describes a population PK study of ursodeoxycholic acid (ursodiol) in infants using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Yue_2008.pdf` | Yue PF et al., Preparation, characterization, and bioa…, Drug development and indust… (2008) | popPK | 9 | [10.1080/03639040701842477](https://doi.org/10.1080/03639040701842477) | [18612911](https://pubmed.ncbi.nlm.nih.gov/18612911) | The study reports quantitative PK parameters (Tmax, Cmax, AUC) for ursodeoxycholic acid in rats, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-04T14:41:47.709535+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becquemont_2006 | not_relevant | 0 | 0 | The study investigates the effect of the drug UDCA on the pharmacokinetics of other drugs (digoxin/midazolam) and does not report how a gene variant affects the PK/PD of UDCA itself. |
| PGx | Bodin_2005 | not_relevant | 0 | 0 | The paper describes CYP3A4-mediated metabolism of ursodeoxycholic acid but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Bramlett_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and gene expression, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Estiú_2015 | not_relevant | 0 | 0 | The study investigates the mechanism of action of UDCA in cholestasis of pregnancy but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fabbri_2000 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of UDCA in combination with interferon for hepatitis C but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Fossdal_2021 | irrelevant | 0 | 0 | The study focuses on longitudinal biomarkers (ELF, LSM, ALP) in PSC patients and does not report pharmacokinetic parameters for ursodeoxycholic acid. |
| popPK | Gordi_2014 | relevant | 10 | 0 | The paper describes a population PK study of ursodeoxycholic acid (ursodiol) in infants using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Hayashi_2021 | not_relevant | 0 | 0 | The paper is a case report on pazopanib-induced liver injury and does not report any pharmacogenomic effect on the PK or PD of ursodeoxycholic acid. |
| PGx | Jacquemin_1999 | not_relevant | 0 | 0 | The text is a general overview of PFIC genetics and mentions UDCA treatment only in the context of future genotype-phenotype correlations, without reporting any specific pharmacokinetic or pharmacodynamic data. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper reports endogenous serum levels of UDCA in ALS patients, not the pharmacokinetics or pharmacodynamics of exogenous UDCA administration influenced by genetic variants. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of adefovir derivatives (compound 6c), not ursodeoxycholic acid, which is only mentioned in the context of docking studies and structural analogs. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on adefovir derivatives, not ursodeoxycholic acid, and reports antiviral EC50 values rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Little_2022 | not_relevant | 0 | 0 | The paper investigates the physiological role of PXR and CAR on the gut microbiome and bile acid metabolism in genetically modified mice, but does not report pharmacokinetic or pharmacodynamic parameters for the drug ursodeoxycholic acid. |
| PGx | Mackenzie_2008 | not_relevant | 2 | 0 | The paper characterizes the enzyme UGT3A1 and notes a catalytically inactive variant, but it does not report in vivo pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax) for ursodeoxycholic acid in humans. |
| popPK | Mahmood_1998 | irrelevant | 0 | 0 | The paper describes a method for estimating ka using a hypothetical drug and does not report pharmacokinetic parameters for ursodeoxycholic acid. |
| PGx | Marschall_2005 | not_relevant | 0 | 0 | The study investigates the molecular mechanisms of action of UDCA in healthy subjects but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Matsunaga_2023 | not_relevant | 0 | 0 | The paper focuses on paclitaxel resistance in breast cancer cells and does not mention ursodeoxycholic acid. |
| PGx | Mroz_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of UDCA on ion transport in CF vs normal cells, but does not report a pharmacogenomic effect (genetic variant altering drug PK/PD) for UDCA. |
| PGx | Pęczuła_2025 | not_relevant | 0 | 0 | The paper is a review of the genetics of gallstone disease and does not report pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Rostomova_2026 | not_relevant | 0 | 0 | The study compares the efficacy of different drugs in a specific disease population (Gilbert syndrome) but does not report pharmacogenomic effects (gene variant/genotype) on the PK or PD parameters of ursodeoxycholic acid. |
| PGx | Scottoni_2020 | not_relevant | 0 | 0 | The paper is a review of biliary atresia management and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Su_2008 | not_relevant | 0 | 0 | The paper investigates the role of AKR1C2 in the toxicity of 1-nitropyrene and benzo[a]pyrene, using ursodeoxycholic acid only as an inhibitor, and does not report pharmacogenomic effects on the PK or PD of ursodeoxycholic acid itself. |
| PGx | Takahashi_2016 | not_relevant | 2 | 5 | The paper describes species differences in bile acid metabolism (mouse vs human) and the role of Cyp2c70, but does not report a human pharmacogenomic effect (genotype-phenotype association) on the PK or PD of ursodeoxycholic acid in a clinical or relevant pharmacogenomic context. |
| PGx | Tang_2016 | not_relevant | 0 | 0 | The study investigates the mechanism of a herbal capsule in mice and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ursodeoxycholic acid. |
| PGx | Thébaut_2018 | not_relevant | 0 | 0 | The paper is a review of cholestatic pruritus management in children and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| popPK | Varongkriengkrai_2025 | irrelevant | 0 | 0 | The paper is a study on the antiviral and antibacterial activities of bile acid salts, not a pharmacokinetic study, and contains no PK parameters for ursodeoxycholic acid. |
| PD | Varongkriengkrai_2025 | not_relevant | 4 | 3 | The paper reports an EC50 for lithocholic acid (LCA) but explicitly states that ursodeoxycholic acid (UDCA) only exhibited antibacterial activity (measured by inhibition zone diameter) and did not display antiviral/virucidal activity, so no PD parameters are reported for UDCA. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, not ursodeoxycholic acid. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates the interaction between bile acids (including ursodeoxycholic acid) and the OAT2 transporter, but does not report how a gene variant changes the PK or PD of ursodeoxycholic acid itself. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme for the industrial biosynthesis of ursodeoxycholic acid, not the pharmacogenomics of its clinical use. |
| PGx | Wasuwanich_2020 | not_relevant | 0 | 0 | The paper is a review of cystic fibrosis-associated liver disease and mentions the use of ursodeoxycholic acid, but it does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wong_2019 | not_relevant | 0 | 0 | The paper is a survey of clinical practices for biliary atresia and mentions the use of ursodeoxycholic acid but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of arbutin in cholestasis and does not report pharmacogenomic effects on the PK/PD of ursodeoxycholic acid. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper is a case report describing the diagnosis of PKD and CNS-II and the clinical response to ursodeoxycholic acid, but it does not report a pharmacogenomic study linking specific gene variants to changes in the PK or PD parameters of the drug. |
| PGx | Xiang_2012 | not_relevant | 0 | 0 | The study investigates endogenous bile acid concentrations in healthy volunteers, not the pharmacokinetics or pharmacodynamics of ursodeoxycholic acid as an administered drug. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (FFA4 agonism) and efficacy in in vitro and animal models, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Schisandrol B, not the pharmacogenomics of ursodeoxycholic acid. |
| PGx | Zheng_2017 | not_relevant | 0 | 0 | The paper focuses on the industrial bioproduction of ursodeoxycholic acid using engineered enzymes, not on human pharmacogenomics or PK/PD parameters. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper investigates metabolic pathways and transporter interactions in vitro but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Ziegler_2024 | not_relevant | 0 | 0 | The paper describes a method for measuring bile acids in dried blood spots for cholestasis screening and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes and disease severity associated with SLC25A13 genotypes, but does not report pharmacokinetic or pharmacodynamic parameters of ursodeoxycholic acid. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of UDCA in animal models (mice/rats) for neonatal hyperbilirubinemia, not the effect of human gene variants on UDCA pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 14:41 UTC</sub>
