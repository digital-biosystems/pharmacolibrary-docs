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
| buprenorphine | metabolite | 467.65 | C29H41NO4 | PubChem | [644073](https://pubchem.ncbi.nlm.nih.gov/compound/644073) | Gu_2023 |
| norbuprenorphine | metabolite | 413.558 | C25H35NO4 | PubChem | [114976](https://pubchem.ncbi.nlm.nih.gov/compound/114976) | Gu_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:05 | 2:51 | 0/1/1 | 1/0/0 | 0/0/0 | 188,207/13,693 | einfracz / qwen3.8-27b | 12 | 4/8 | 10/2 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Dowling_2008_reference](drugs/drug_naloxone/Naloxone_Dowling2008_reference.md) | — | 2-compartment (no model) | 8 | Dowling J et al., Population pharmacokinetics of intraven…, Therapeutic drug monitoring (2008) | [10.1097/FTD.0b013e3181816214](https://doi.org/10.1097/FTD.0b013e3181816214) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gu_2023_reference](drugs/drug_naloxone/Naloxone_Gu2023_reference.md) | — | parent + metabolite (no model) | 0 | Gu M et al., Population pharmacokinetics of buprenor…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1089862](https://doi.org/10.3389/fphar.2023.1089862) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.95).">human + animal</span> | [Mu_2024_CNS_effects_miosis_respiratory_depression_analgesia](drugs/drug_naloxone/pd_Mu_2024_CNS_effects_miosis_respiratory_depression_analgesia.md) | CNS effects (miosis, respiratory depression, analgesia) ← naloxone · inhibition effect | — | Mu RJ et al., PBPK-PD model for predicting morphine p…, Acta pharmacologica Sinica (2024) | [10.1038/s41401-024-01255-2](https://doi.org/10.1038/s41401-024-01255-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naloxone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CES1` binder, `CYP2C19` substrate, `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), ESR1 (target), OPRD1 (target), OPRK1 (target), OPRM1 (target), TLR4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 432 matched, 61 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dowling_2008.pdf` | Dowling J et al., Population pharmacokinetics of intraven…, Therapeutic drug monitoring (2008) | popPK | 10 | [10.1097/FTD.0b013e3181816214](https://doi.org/10.1097/FTD.0b013e3181816214) | [18641540](https://pubmed.ncbi.nlm.nih.gov/18641540) | The paper reports a population PK study for naloxone in humans with all quantitative parameters (CL, V, Q, Ka) explicitly listed in the abstract. |
| `Oh_2024.pdf` | Oh M et al., Machine Learned Classification of Ligan…, ACS chemical neuroscience (2024) | pd | 5 | [10.1021/acschemneuro.4c00212](https://doi.org/10.1021/acschemneuro.4c00212) | [38990780](https://www.ncbi.nlm.nih.gov/pubmed/38990780) | metadata signals extractable PD data (Emax) |
| `Long_2014.pdf` | Long Z et al., Amide alkaloids from Scopolia tangutica, Planta medica (2014) | pd | 4 | [10.1055/s-0034-1382961](https://doi.org/10.1055/s-0034-1382961) | [25127021](https://www.ncbi.nlm.nih.gov/pubmed/25127021) | metadata signals extractable PD data (EC50) |
| `Crist_2018.pdf` | Crist RC et al., Pharmacogenetic analysis of opioid depe…, The American journal of dru… (2018) | pgx | 8 | [10.1080/00952990.2017.1420795](https://doi.org/10.1080/00952990.2017.1420795) | [29333880](https://www.ncbi.nlm.nih.gov/pubmed/29333880) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Docci_2020.pdf` | Docci L et al., Construction and Verification of Physio…, The AAPS journal (2020) | pgx | 8 | [10.1208/s12248-020-00513-5](https://doi.org/10.1208/s12248-020-00513-5) | [33033903](https://www.ncbi.nlm.nih.gov/pubmed/33033903) | metadata signals extractable PGX data (UGT2B15, PK/PD-context) |
| `Ettienne_2019.pdf` | Ettienne EB et al., Pharmacogenomics and Opioid Use Disorde…, Journal of the National Med… (2019) | pgx | 8 | [10.1016/j.jnma.2019.09.006](https://doi.org/10.1016/j.jnma.2019.09.006) | [31676110](https://www.ncbi.nlm.nih.gov/pubmed/31676110) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kaya-Akyüzlü_2022.pdf` | Kaya-Akyüzlü D et al., Effects of UGT2B7 rs7662029 and rs74393…, Environmental toxicology an… (2022) | pgx | 8 | [10.1016/j.etap.2022.103902](https://doi.org/10.1016/j.etap.2022.103902) | [35697190](https://www.ncbi.nlm.nih.gov/pubmed/35697190) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Bruce_2011.pdf` | Bruce RD et al., Tipranavir/ritonavir induction of bupre…, The American journal of dru… (2011) | pgx | 7 | [10.3109/00952990.2011.568081](https://doi.org/10.3109/00952990.2011.568081) | [21438849](https://www.ncbi.nlm.nih.gov/pubmed/21438849) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Ershad_2020.pdf` | Ershad M et al., Opioid Toxidrome Following Grapefruit J…, Journal of addiction medici… (2020) | pgx | 7 | [10.1097/ADM.0000000000000535](https://doi.org/10.1097/ADM.0000000000000535) | [31206401](https://www.ncbi.nlm.nih.gov/pubmed/31206401) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grahl_2025.pdf` | Grahl J et al., Pharmacogenetic Evaluation of Hospitali…, Hospital pharmacy (2025) | pgx | 5 | [10.1177/00185787251339360](https://doi.org/10.1177/00185787251339360) | [40406364](https://www.ncbi.nlm.nih.gov/pubmed/40406364) | metadata signals extractable PGX data (CYP1A2) |

<sub>queue written 2026-10-15T01:03:30.481998+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Huniti_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for naloxegol (a derivative), not naloxone. |
| PGx | Al-Huniti_2016 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics of naloxegol, not naloxone, and reports no gene variant effects (only CYP3A4 and P-gp transporter interactions via drugs). |
| popPK | Al-Huniti_2016_2 | irrelevant | 1 | 0 | The study focuses on the population exposure-response modeling of naloxegol (a naloxone derivative) for opioid-induced constipation, not the pharmacokinetics of naloxone itself; the few PK values mentioned (CL/F 115 L/h) are explicitly for naloxegol. |
| popPK | Algera_2019 | irrelevant | 0 | 0 | This is a narrative review of PKPD modelling without reporting original quantitative disposition parameter values for naloxone. |
| PD | Algera_2019 | not_relevant | 2 | 0 | The text is a review abstract that describes the types of PK/PD models used in the literature but does not report specific numeric PD parameters or extractable concentration-effect data for naloxone. |
| PGx | Bright_2021 | not_relevant | 0 | 0 | The study reports a genetic risk score for opioid use disorder (OUD) addiction risk, not the effect of specific gene variants on the pharmacokinetics or pharmacodynamics of naloxone itself. |
| PGx | Bruce_2011 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (tipranavir/ritonavir affecting buprenorphine metabolism) in a general population, not pharmacogenomic effects (gene variants) on naloxone or buprenorphine PK/PD parameters. |
| PGx | Busch_2018 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring drug metabolites, including naloxone glucuronide, in microsomal preparations but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Busse_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro UGT isoform contributions and validation of scaling methods, and does not report pharmacogenomic effects of gene variants on naloxone PK or PD parameters. |
| PGx | Crist_2018 | not_relevant | 0 | 0 | The study analyzes pharmacogenetic associations with dropout rates and dosage for methadone and buprenorphine/naloxone, not pharmacokinetic or pharmacodynamic parameters of naloxone itself. |
| PGx | Crist_2021 | not_relevant | 0 | 0 | The study investigates the mechanistic basis of an eQTL for OPRD1 in vitro (transcriptional activity) and does not report changes in naloxone pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Dayer_1997 | not_relevant | 2 | 2 | The paper discusses the pharmacogenetics of tramadol (CYP2D6) and its interaction with naloxone as an antagonist, but does not report how a gene variant changes a PK/PD parameter of naloxone. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The paper studies the mechanism of thalidomide in neuropathic pain, using naloxone only as a mechanistic probe/antagonist, and reports no pharmacokinetic parameters for naloxone. |
| PGx | Di_2005 | not_relevant | 0 | 0 | The paper describes a general assay for UGT activity and identifies UGT2B7 as the enzyme responsible for naloxone glucuronidation, but it does not report a pharmacogenomic effect (gene variant) on a PK/PD parameter. |
| PGx | Docci_2020 | not_relevant | 0 | 0 | The paper simulates the impact of UGT2B15 polymorphisms on the pharmacokinetics of oxazepam and lorazepam, but does not report pharmacogenomic effects for naloxone. |
| PGx | Ershad_2020 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (grapefruit juice and methadone) requiring naloxone, but it does not report a pharmacogenomic effect (gene variant) on naloxone's PK or PD. |
| PGx | Ettienne_2019 | not_relevant | 2 | 2 | The paper studies pharmacogenomic effects on buprenorphine metabolism and OUD treatment outcomes; naloxone is only mentioned as part of the buprenorphine/naloxone formulation, with no reported PK or PD data for naloxone itself. |
| popPK | Garimella_2014 | irrelevant | 0 | 0 | The study focuses on daclatasvir's effect on methadone and buprenorphine, and while naloxone is mentioned as a co-formulation, no specific pharmacokinetic parameters for naloxone are reported in the provided evidence. |
| PGx | Grahl_2025 | not_relevant | 1 | 2 | The paper reports associations between gene variants and the clinical event of naloxone administration (opioid toxicity) rather than specific pharmacokinetic or pharmacodynamic parameters of naloxone. |
| PGx | Grün_2012 | not_relevant | 1 | 5 | The study investigates the pharmacogenomics of tilidine and nortilidine metabolism; naloxone is administered as a co-formulation (tilidine/naloxone) but its PK/PD is not reported as the primary subject of the CYP2C19 effect. |
| popPK | Kaski_2021 | irrelevant | 0 | 0 | The paper is a clinical retrospective chart review of pain management outcomes and does not report any pharmacokinetic parameters for naloxone. |
| popPK | Kaur_2026 | irrelevant | 0 | 0 | The study focuses on brain white matter microstructural changes via DTI in a clinical setting, containing no pharmacokinetic parameter data for naloxone. |
| PGx | Kaya-Akyüzlü_2022 | not_relevant | 1 | 2 | The study reports that the genetic polymorphisms do not affect the drug's treatment response or biomarkers, and while a correlation exists, no direct pharmacokinetic or pharmacodynamic effect of the genes on naloxone or buprenorphine parameters is reported. |
| PGx | Kaya-Akyüzlü_2023 | not_relevant | 4 | 10 | The paper examines the effect of OPRD1 rs569356 on the pharmacokinetic and pharmacodynamic parameters of buprenorphine/naloxone, not the isolated pharmacology of naloxone. |
| PGx | Kaya-Akyüzlü_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on buprenorphine, not naloxone. |
| PGx | Kazi_2024 | not_relevant | 3 | 10 | The paper reports a pharmacogenomic association with a clinical outcome (urine drug screens) rather than a direct PK/PD parameter change for naloxone. |
| PGx | Kim_2017 | not_relevant | 0 | 0 | The paper reports drug-drug enzyme inhibition (AM-2201 inhibiting naloxone glucuronidation), not a pharmacogenomic effect of a gene variant on PK/PD. |
| PGx | King_2017 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between HCV antivirals and naloxone, not pharmacogenomic effects of gene variants on naloxone's PK/PD. |
| PGx | Kosloski_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (antivirals), not the effect of gene variants on naloxone PK/PD. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions between HCV drugs and opioids, containing no pharmacogenomic data or naloxone PK/PD analysis. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The study focuses on in vitro pharmacology and molecular modeling of a new compound's interaction with the mu-opioid receptor in the presence of naloxone, rather than the pharmacokinetics of naloxone. |
| PD | Lin_2022 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/activation data (EC50) for a novel compound in the presence of naloxone, but does not report a pharmacodynamic exposure-response or dose-response relationship for naloxone itself. |
| popPK | Livett_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of chromaffin cell release using naloxone as a reversible antagonist, with no pharmacokinetic parameters reported. |
| PD | Livett_1983 | not_relevant | 1 | 0 | The paper is a review of basic release mechanisms in chromaffin cells and mentions naloxone only qualitatively as a reversible agent for enkephalin effects, without providing any numeric PD parameters or concentration-effect data for naloxone. |
| popPK | Lohman_2015 | irrelevant | 0 | 0 | The study investigates the pharmacology and structure-activity relationships of nociceptin peptides, not the pharmacokinetics of naloxone. |
| PD | Lohman_2015 | not_relevant | 0 | 0 | The paper focuses on the structure-activity relationships of nociceptin peptides and their interaction with ORL-1 receptors; naloxone is only mentioned as a classic opioid antagonist that does not inhibit these peptides, with no PD or exposure-response data provided for naloxone. |
| popPK | Long_2014 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Long_2014 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of amide alkaloids from Scopolia tangutica and does not contain any pharmacodynamic or exposure-response data for naloxone. |
| PGx | Mei_2023 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect on a PK or PD parameter of naloxone; it is a preclinical study of migraine in mice. |
| popPK | Mu_2024 | relevant | 5 | 0 | The paper reports a PBPK model for naloxone in humans, but the specific numeric parameter values (clearance, volume, etc.) required for extraction are located in Supplementary Tables S1-S4, which are not included in the provided evidence. |
| PGx | Nelson_2025 | not_relevant | 2 | 0 | The paper reports a pharmacogenomic effect of the MDR1 mutation on butorphanol PK/PD, not naloxone. |
| PGx | Nielsen_2022 | not_relevant | 2 | 5 | The study evaluates the effect of PDYN variants on the clinical efficacy (response to cocaine use) of buprenorphine/naloxone, not on the pharmacokinetic or pharmacodynamic parameters of naloxone itself. |
| popPK | Oh_2024 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Oh_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning classification of ligand intrinsic activities at the receptor level, not on pharmacokinetic/pharmacodynamic modeling or exposure-response relationships in a biological system. |
| popPK | Paredes_1999 | irrelevant | 0 | 0 | This study investigates the behavioral effects of naloxone on sexual conditioning in rats, not its pharmacokinetic parameters. |
| PGx | Reddy_2021 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of intestinal metabolism by UGTs for various drugs including naloxone, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Rizk_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating suicidal ideation outcomes in patients with opioid use disorder, not a pharmacokinetic study, and reports no PK parameters for naloxone. |
| PGx | Seguí_2020 | not_relevant | 0 | 0 | The paper reviews the pharmacogenomics of buprenorphine, not naloxone. |
| PGx | Tijani_2026 | not_relevant | 0 | 0 | The study focuses on formulation development and delivery mechanisms (microneedle patches) without investigating any genetic variants or pharmacogenomic effects. |
| PGx | Tournier_2010 | not_relevant | 0 | 0 | The paper investigates in vitro drug-transporter interactions for naloxone but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tsekouras_2023 | relevant | 9 | 1 | The paper describes pharmacokinetic modeling and fitting for naloxone, but no specific numeric parameter values (CL, V, ka, etc.) are provided in the evidence. |
| popPK | Yang_2024 | relevant | 10 | 3 | The study reports a population PK model for naloxone in humans, but the specific numeric parameter values (CL, V, Q, ka) are stated to be in the Appendix/Supplementary materials which are not fully provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:03 UTC</sub>
