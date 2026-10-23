<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxone&quot;}]"></div>

# naloxone

- **generic name:** naloxone
- **ATC codes:** `A06AH04`, `N02AA53`, `N02AA55`, `N02AD51`, `N02AX51`, `V03AB15`
- **DrugBank:** [DB01183](https://go.drugbank.com/drugs/DB01183) · **PubChem:** [CID 5284596](https://pubchem.ncbi.nlm.nih.gov/compound/5284596)
- **molar mass:** 327.3743 g/mol (C19H21NO4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Naloxone is an opioid antagonist used to reverse opioid overdose, and it has also been used for opiate dependence and septic shock. It is widely used as an antidote, is listed among WHO essential medicines, and is authorised in the European Union for opiate overdose.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q282902](https://www.wikidata.org/wiki/Q282902) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| naloxone | parent | 327.374 | C19H21NO4 | DrugBank | [5284596](https://pubchem.ncbi.nlm.nih.gov/compound/5284596) | Dowling_2008, Gu_2023 |
| norbuprenorphine | metabolite | — (mass units only) | — | — | — | — |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 91 | L/h | 91 L/hr | healthy male volunteers | &gt;=6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dowling_2008_reference](drugs/drug_naloxone/Naloxone_Dowling2008_reference.md) |
| V | V1 | 2.87 | L | 2.87 L | healthy male volunteers | &gt;=6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dowling_2008_reference](drugs/drug_naloxone/Naloxone_Dowling2008_reference.md) |
| ka | kabs | 0.65 | 1/h | 0.65 1/hr | healthy male volunteers | &gt;=6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dowling_2008_reference](drugs/drug_naloxone/Naloxone_Dowling2008_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Dowling_2008_reference](drugs/drug_naloxone/Naloxone_Dowling2008_reference.md) | — | 2-compartment (no model) | 7 | Dowling J et al., Population pharmacokinetics of intraven…, Therapeutic drug monitoring (2008) | [10.1097/FTD.0b013e3181816214](https://doi.org/10.1097/FTD.0b013e3181816214) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gu_2023_reference](drugs/drug_naloxone/Naloxone_Gu2023_reference.md) | — | parent + metabolite (no model) | 0 | Gu M et al., Population pharmacokinetics of buprenor…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1089862](https://doi.org/10.3389/fphar.2023.1089862) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naloxone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CES1` binder, `CYP2C19` substrate, `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), ESR1 (target), OPRD1 (target), OPRK1 (target), OPRM1 (target), TLR4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:13 | 12:47 | 1/1/0 | 0/0/0 | 0/0/0 | 205,988/34,753 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 4/8 | 10/2 | 1 |

## Coverage

- **PubMed hits:** 432 matched, 61 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dowling_2008.pdf` | Dowling J et al., Population pharmacokinetics of intraven…, Therapeutic drug monitoring (2008) | popPK | 10 | [10.1097/FTD.0b013e3181816214](https://doi.org/10.1097/FTD.0b013e3181816214) | [18641540](https://pubmed.ncbi.nlm.nih.gov/18641540) | The paper reports a population pharmacokinetic model for naloxone in humans with all numeric parameter values (CL, V, Q, Ka) explicitly listed in the abstract. |
| `Oh_2024.pdf` | Oh M et al., Machine Learned Classification of Ligan…, ACS chemical neuroscience (2024) | pd | 5 | [10.1021/acschemneuro.4c00212](https://doi.org/10.1021/acschemneuro.4c00212) | [38990780](https://www.ncbi.nlm.nih.gov/pubmed/38990780) | metadata signals extractable PD data (Emax) |
| `Long_2014.pdf` | Long Z et al., Amide alkaloids from Scopolia tangutica, Planta medica (2014) | pd | 4 | [10.1055/s-0034-1382961](https://doi.org/10.1055/s-0034-1382961) | [25127021](https://www.ncbi.nlm.nih.gov/pubmed/25127021) | metadata signals extractable PD data (EC50) |
| `Crist_2018.pdf` | Crist RC et al., Pharmacogenetic analysis of opioid depe…, The American journal of dru… (2018) | pgx | 8 | [10.1080/00952990.2017.1420795](https://doi.org/10.1080/00952990.2017.1420795) | [29333880](https://www.ncbi.nlm.nih.gov/pubmed/29333880) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Docci_2020.pdf` | Docci L et al., Construction and Verification of Physio…, The AAPS journal (2020) | pgx | 8 | [10.1208/s12248-020-00513-5](https://doi.org/10.1208/s12248-020-00513-5) | [33033903](https://www.ncbi.nlm.nih.gov/pubmed/33033903) | metadata signals extractable PGX data (UGT2B15, PK/PD-context) |
| `Ettienne_2019.pdf` | Ettienne EB et al., Pharmacogenomics and Opioid Use Disorde…, Journal of the National Med… (2019) | pgx | 8 | [10.1016/j.jnma.2019.09.006](https://doi.org/10.1016/j.jnma.2019.09.006) | [31676110](https://www.ncbi.nlm.nih.gov/pubmed/31676110) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kaya-Akyüzlü_2022.pdf` | Kaya-Akyüzlü D et al., Effects of UGT2B7 rs7662029 and rs74393…, Environmental toxicology an… (2022) | pgx | 8 | [10.1016/j.etap.2022.103902](https://doi.org/10.1016/j.etap.2022.103902) | [35697190](https://www.ncbi.nlm.nih.gov/pubmed/35697190) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Bruce_2011.pdf` | Bruce RD et al., Tipranavir/ritonavir induction of bupre…, The American journal of dru… (2011) | pgx | 7 | [10.3109/00952990.2011.568081](https://doi.org/10.3109/00952990.2011.568081) | [21438849](https://www.ncbi.nlm.nih.gov/pubmed/21438849) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Ershad_2020.pdf` | Ershad M et al., Opioid Toxidrome Following Grapefruit J…, Journal of addiction medici… (2020) | pgx | 7 | [10.1097/ADM.0000000000000535](https://doi.org/10.1097/ADM.0000000000000535) | [31206401](https://www.ncbi.nlm.nih.gov/pubmed/31206401) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grahl_2025.pdf` | Grahl J et al., Pharmacogenetic Evaluation of Hospitali…, Hospital pharmacy (2025) | pgx | 5 | [10.1177/00185787251339360](https://doi.org/10.1177/00185787251339360) | [40406364](https://www.ncbi.nlm.nih.gov/pubmed/40406364) | metadata signals extractable PGX data (CYP1A2) |

<sub>queue written 2026-10-04T17:02:18.649332+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Huniti_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for naloxegol, a derivative of naloxone, not for naloxone itself. |
| PGx | Al-Huniti_2016 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics of naloxegol (a naloxone derivative) and reports effects of CYP3A4 inhibitors/inducers, but does not report pharmacogenomic effects (gene variants) on naloxone or naloxegol PK/PD. |
| popPK | Al-Huniti_2016_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response modeling of naloxegol, not naloxone. |
| popPK | Algera_2019 | irrelevant | 2 | 0 | This is a review article discussing PKPD modeling concepts for opioid reversal without reporting original quantitative disposition parameters for naloxone. |
| PD | Algera_2019 | not_relevant | 2 | 0 | The text is a review abstract that describes the types of PK/PD models used in the literature but does not report specific numeric PD parameters or extractable concentration-effect data for naloxone. |
| PGx | Bright_2021 | not_relevant | 0 | 0 | The study focuses on genetic risk scores for opioid addiction (OUD) and does not report pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Bruce_2011 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (tipranavir/ritonavir) on buprenorphine metabolism, not a pharmacogenomic effect of a gene variant on naloxone. |
| PGx | Busch_2018 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying naloxone glucuronide in intestinal microsomes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Busse_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro UGT isoform contributions to naloxone metabolism using pooled liver microsomes and does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Crist_2018 | not_relevant | 0 | 0 | The study analyzes pharmacogenetic associations with dropout rates and dose for methadone and buprenorphine/naloxone, but does not report specific pharmacokinetic or pharmacodynamic parameters for naloxone. |
| PGx | Crist_2021 | not_relevant | 0 | 0 | The study investigates the molecular mechanism of a genetic variant (transcription factor binding) and does not report any pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Dayer_1997 | not_relevant | 0 | 0 | The paper discusses the pharmacology of tramadol and mentions naloxone only as an antagonist that partially inhibits tramadol's effect, without reporting any pharmacogenomic effects on naloxone's PK or PD parameters. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study investigates the mechanism of thalidomide in neuropathic pain, using naloxone only as a pharmacological antagonist to block opioid receptors, not as the subject of a pharmacokinetic analysis. |
| PGx | Di_2005 | not_relevant | 0 | 0 | The paper describes a method for determining UGT selectivity and identifies UGT2B7 as the enzyme for naloxone, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Docci_2020 | not_relevant | 0 | 0 | The paper simulates the impact of UGT2B15 polymorphisms only for oxazepam and lorazepam, not for naloxone. |
| PGx | Ershad_2020 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (grapefruit juice and methadone) and does not report any pharmacogenomic effects on naloxone. |
| PGx | Ettienne_2019 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of buprenorphine (CYP3A4/5) and does not report any pharmacokinetic or pharmacodynamic effects of gene variants on naloxone. |
| popPK | Garimella_2014 | irrelevant | 2 | 0 | Naloxone is a co-administered component of the buprenorphine/naloxone formulation, and the study reports non-compartmental PK parameters (Cmax, AUC) for the primary drugs (methadone, buprenorphine, norbuprenorphine) rather than quantitative disposition parameters (CL, V, ka) for naloxone itself. |
| PGx | Grahl_2025 | not_relevant | 2 | 5 | The study reports associations between genotypes and the clinical event of opioid toxicity requiring naloxone, but does not measure or report changes in specific pharmacokinetic or pharmacodynamic parameters of naloxone itself. |
| PGx | Grün_2012 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of tilidine and its metabolites, not naloxone. |
| popPK | Kaski_2021 | irrelevant | 0 | 0 | The study is a retrospective clinical review of pain management outcomes and retention rates for buprenorphine/naloxone, containing no pharmacokinetic parameters or quantitative disposition data for naloxone. |
| popPK | Kaur_2026 | irrelevant | 0 | 0 | The study is a neuroimaging (DTI) analysis of brain white matter integrity and does not report any pharmacokinetic parameters for naloxone. |
| PGx | Kaya-Akyüzlü_2022 | not_relevant | 0 | 0 | The study explicitly states that the investigated polymorphisms did not affect the measured parameters, and no pharmacokinetic or pharmacodynamic effect of the genotype on naloxone or buprenorphine was reported. |
| PGx | Kaya-Akyüzlü_2022_2 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of buprenorphine, not naloxone. |
| PGx | Kaya-Akyüzlü_2023 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on buprenorphine and its metabolite norbuprenorphine, not on naloxone. |
| PGx | Kaya-Akyüzlü_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on buprenorphine levels, not naloxone. |
| PGx | Kazi_2024 | not_relevant | 0 | 0 | The study reports associations between genetic variants and clinical outcomes (urine drug screens), not direct pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Kim_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of naloxone glucuronidation by AM-2201, not a pharmacogenomic effect of a gene variant on naloxone PK/PD. |
| PGx | King_2017 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between HCV antivirals and naloxone, not pharmacogenomic effects of gene variants on naloxone PK/PD. |
| PGx | Kosloski_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between antivirals and opioids, not pharmacogenomic effects of gene variants on naloxone PK/PD. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions between HCV antivirals and opioids, not pharmacogenomic effects on naloxone. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of receptor activation and does not report pharmacokinetic parameters for naloxone. |
| PD | Lin_2022 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/activation data (EC50) for a novel compound in the presence of naloxone, but does not report a pharmacodynamic exposure-response or dose-response relationship for naloxone itself. |
| popPK | Livett_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of chromaffin cells where naloxone is used only as a diagnostic agent to reverse peptide effects, with no pharmacokinetic parameters reported. |
| PD | Livett_1983 | not_relevant | 1 | 0 | The paper is a review of basic release mechanisms in chromaffin cells and mentions naloxone only qualitatively as a reversible agent for enkephalin effects, without providing any numeric PD parameters or concentration-effect data for naloxone. |
| popPK | Lohman_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and structure-activity relationships of nociceptin peptides, with naloxone mentioned only as a non-inhibitor comparator. |
| PD | Lohman_2015 | not_relevant | 0 | 0 | The paper focuses on the structure-activity relationships of nociceptin peptides and their interaction with ORL-1 receptors; naloxone is only mentioned as a classic opioid antagonist that does not inhibit these peptides, with no PD or exposure-response data provided for naloxone. |
| popPK | Long_2014 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Long_2014 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of amide alkaloids from Scopolia tangutica and does not contain any pharmacodynamic or exposure-response data for naloxone. |
| PGx | Mei_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of action of an enkephalinase inhibitor in a migraine model and does not report any pharmacogenomic effects on the PK or PD of naloxone. |
| popPK | Mu_2024 | relevant | 8 | 2 | The paper develops a PBPK model for naloxone in humans and validates it against clinical data, but the specific numeric parameter values (clearance, volume, etc.) are located in Supplementary Tables S1-S4 which are not provided in the evidence. |
| PGx | Nelson_2025 | not_relevant | 2 | 1 | The paper reports a pharmacogenomic effect on the PK/PD of butorphanol (the substrate), not naloxone (the antagonist used for reversal). |
| PGx | Nielsen_2022 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the clinical efficacy (cocaine use) of buprenorphine, not on the pharmacokinetic or pharmacodynamic parameters of naloxone. |
| popPK | Oh_2024 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Oh_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning classification of ligand intrinsic activities at the receptor level, not on pharmacokinetic/pharmacodynamic modeling or exposure-response relationships in a biological system. |
| popPK | Paredes_1999 | irrelevant | 0 | 0 | The study is a behavioral analysis of sexual motivation in rats where naloxone is used only as a pharmacological antagonist to block opioid effects, with no pharmacokinetic parameters reported. |
| PGx | Reddy_2021 | not_relevant | 0 | 0 | The paper discusses PBPK modeling of UGT-mediated intestinal metabolism for naloxone but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Rizk_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing suicidal ideation outcomes in patients with opioid use disorder, not a pharmacokinetic study of naloxone. |
| PGx | Seguí_2020 | not_relevant | 0 | 0 | The paper reviews the pharmacogenomics of buprenorphine, not naloxone. |
| PGx | Tijani_2026 | not_relevant | 0 | 0 | The paper describes a novel drug delivery system (microneedle patches) and its pharmacokinetic performance in porcine models, but it does not investigate any gene variants or pharmacogenomic effects on naloxone. |
| PGx | Tournier_2010 | not_relevant | 0 | 0 | The paper investigates in vitro transporter interactions (P-gp/BCRP) for naloxone but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Tsekouras_2023 | relevant | 9 | 1 | The paper describes a Phase 1 study of naloxone nasal spray with compartmental PK models, but the specific numeric parameter values are not present in the provided text, only model equations and figure captions. |
| popPK | Yang_2024 | relevant | 10 | 2 | The paper describes a population PK model for naloxone, but the specific numeric parameter values (CL, V, Q) are located in Appendix S1 or supplementary tables not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 17:02 UTC</sub>
