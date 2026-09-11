# misoprostol

- **generic name:** misoprostol
- **ATC codes:** `A02BB01`, `G02AD06`, `M01AE56`
- **DrugBank:** [DB00929](https://go.drugbank.com/drugs/DB00929)
- **groups:** approved, investigational

## About

**Description.** Misoprostol is a prostaglandin analog used to reduce the risk of NSAID related ulcers, manage miscarriages, prevent post partum hemorrhage, and also for first trimester abortions.[L7616,L7619,A181589,A181583,A181697] The stimulation of prostaglandin receptors in the stomach reduces gastric acid secretion, while stimulating these receptors in the uterus and cervix can increase the strength and frequency of contractions and decrease cervical tone.[A181586]

Misoprostol was granted FDA approval on 27 December 1988.[L7616]

**Indication.** Misoprostol is indicated as a tablet to reduce the risk of NSAID induced gastric ulcers but not duodenal ulcers in high risk patients.[L7616] Misoprostol is also formulated in combination with diclofenac to treat symptoms of osteoarthritis or rheumatoid arthritis in patients with a high risk of developing gastric ulcers.[L7619] Misoprostol is used off label for the management of miscarriages, prevention of post partum hemorrhage, and is also used alone or in combination with mifepristone in other countries for first trimester abortions.[A181589,A181583,A181697]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 19:29 | 10:41 | 1/0/0 | 1/1/0 | 0/0/0 | 161,755/12,582 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Vorontsova_2022](drugs/drug_misoprostol/Misoprostol_Vorontsova2022_reference.md) | Vorontsova Y et al., Pharmacokinetics of vaginal versus bucc…, Clinical and translational… (2022) | [10.1111/cts.13306](https://doi.org/10.1111/cts.13306) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nazabal_2023](drugs/drug_misoprostol/pd_Nazabal_2023_LC_neuron_firing_rate.md) | Nazabal A et al., Inhibition of rat locus coeruleus neuro…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1290605](https://doi.org/10.3389/fphar.2023.1290605) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Norel_1999](drugs/drug_misoprostol/pd_Norel_1999_relaxation.md) | Norel X et al., Prostanoid receptors involved in the re…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702392](https://doi.org/10.1038/sj.bjp.0702392) |

## Coverage

- **PubMed hits:** 35 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morrison_2016.pdf` | Morrison JJ et al., In vitro contractile effects of agents…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejphar.2016.07.025](https://doi.org/10.1016/j.ejphar.2016.07.025) | [27423315](https://www.ncbi.nlm.nih.gov/pubmed/27423315) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T19:23:49.514155+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atuhairwe_2022 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the effectiveness and safety of misoprostol for abortion, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Atuhairwe_2022_2 | irrelevant | 0 | 0 | The paper is a mixed-methods study on patient acceptability of misoprostol for abortion care and does not report any pharmacokinetic parameters. |
| popPK | Cleeve_2016 | irrelevant | 0 | 0 | The paper is a clinical trial assessing patient acceptability of misoprostol treatment and does not report any pharmacokinetic parameters. |
| PGx | Del_2000 | not_relevant | 0 | 0 | The paper investigates the role of PGE2 receptor subtypes in chondrocyte differentiation using misoprostol as a tool compound, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of misoprostol. |
| popPK | Gana_1989 | irrelevant | 0 | 0 | The study investigates ionic fluxes and blood flow in canine gastric mucosa (pharmacodynamics/mechanism) and does not report pharmacokinetic parameters for misoprostol. |
| PGx | Heikinheimo_1997 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mifepristone and mentions misoprostol only as a combination therapy agent, without reporting any pharmacogenomic effects on misoprostol's PK or PD parameters. |
| popPK | Holt_2019 | irrelevant | 0 | 0 | The paper is a structural biology study on EP4 receptor homology modeling and docking, not a pharmacokinetic study, and contains no disposition parameters for misoprostol. |
| PD | Holt_2019 | not_relevant | 2 | 2 | The paper focuses on homology modeling and docking of EP4 receptors; while it cites EC50 values for various agonists (including misoprostol) to validate the model, it does not report a pharmacokinetic or pharmacodynamic exposure-response relationship or fit a PD model for misoprostol. |
| popPK | Klingberg-Allvin_2015 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the effectiveness and safety of misoprostol for incomplete abortion, not a pharmacokinetic study, and contains no PK parameters. |
| PGx | Konopka_2016 | not_relevant | 2 | 5 | The study investigates differential gene expression and oxidative markers in myometrial cells from different patient groups (spontaneous vs. non-spontaneous labor) rather than the effect of a specific genetic variant on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Larrea_2022 | irrelevant | 0 | 0 | The paper is a sociological study on abortion service utilization and does not report any pharmacokinetic parameters for misoprostol. |
| popPK | Longrois_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vascular tone in human intercostal arteries, not a pharmacokinetic study, and misoprostol is used only as a receptor agonist. |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | The paper describes in vitro contractile effects, which is a mechanistic study not reporting pharmacokinetic parameters for misoprostol. |
| PD | Morrison_2016 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Nazabal_2023 | irrelevant | 0 | 0 | The study is an ex vivo electrophysiological pharmacology experiment measuring receptor potency (EC50) in brain slices, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Norel_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostanoid receptors in human bronchial preparations, reporting potency (pD2) and efficacy (Emax) rather than pharmacokinetic disposition parameters. |
| popPK | Qian_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated contractile actions on isolated tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of noradrenaline release in rat stomach tissue and does not report any pharmacokinetic parameters for misoprostol. |
| popPK | Sarkar_2002 | irrelevant | 0 | 0 | The paper is a review of mifepristone pharmacokinetics, and misoprostol is only mentioned as a co-administered agent without any PK parameters reported for it. |
| PGx | Sheibani_2018 | not_relevant | 0 | 0 | The paper is a general safety review of labor induction agents and only mentions pharmacogenomics as a future possibility without reporting any specific genetic effects on misoprostol PK/PD. |
| popPK | Talpain_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of PGE receptor subtypes in neutrophils and does not report any pharmacokinetic parameters for misoprostol. |
| popPK | Wheeldon_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study characterizing prostanoid receptors on neutrophils and does not report any pharmacokinetic parameters for misoprostol. |
| PGx | Wing_2015 | not_relevant | 0 | 0 | The paper is a general review of labor induction agents and explicitly states that there are currently no pharmacogenomic findings affecting dosing for prostaglandins or oxytocin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_misoprostol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
