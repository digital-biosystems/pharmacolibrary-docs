# phenylephrine

- **generic name:** phenylephrine
- **ATC codes:** `C01CA06`, `C05AX06`, `R01AA04`, `R01AB01`, `R01BA03`, `S01FB01`, `S01FB51`, `S01GA05`
- **DrugBank:** [DB00388](https://go.drugbank.com/drugs/DB00388)
- **groups:** approved, investigational

## About

**Description.** Phenylephrine is an alpha-1 adrenergic receptor agonist used to treat hypotension,[L9416,L9410] dilate the pupil,[L9413] and induce local vasoconstriction.[A187370] The action of phenylephrine, or neo-synephrine, was first described in literature in the 1930s.[A187376]

Phenylephrine was granted FDA approval in 1939.[L9413]

**Indication.** Phenylephrine is available in various drug formulations, which have different indications. Phenylephrine injections are indicated to treat hypotension caused by shock or anesthesia.[L9416, L9410] The ophthalmic formulation is indicated to induce mydriasis [L9413, L46332] and conjunctival vasoconstriction.[A187370] The intranasal formulation is used to treat congestion, and a topical formulation is used to treat hemorrhoids.[A187370] Off-label uses include priapism and induction of local vasoconstriction.[A187370]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 21:27 | 15:22 | 0/1/0 | 2/1/0 | 0/0/2 | 158,818/9,343 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/12 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Anderson_2017](drugs/drug_phenylephrine/Phenylephrine_Anderson2017_reference.md) | Anderson BJ et al., The phenylephrine concentration-respons…, Paediatric anaesthesia (2017) | [10.1111/pan.13221](https://doi.org/10.1111/pan.13221) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2025](drugs/drug_phenylephrine/pd_Hu_2025_human_prostate_smooth_muscle_contraction.md) | Hu S et al., Antagonism of prostate α, The Journal of pharmacology… (2025) | [10.1016/j.jpet.2025.103603](https://doi.org/10.1016/j.jpet.2025.103603) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Panta_2019](drugs/drug_phenylephrine/pd_Panta_2019_vascular_tone.md) | Panta CR et al., Sphingosine-1-Phosphate Enhances α, International journal of mo… (2019) | [10.3390/ijms20246361](https://doi.org/10.3390/ijms20246361) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Choi_2024](drugs/drug_phenylephrine/pd_Choi_2024_maximum_normalized_constriction.md) | Choi R et al., Optimization of resting tension for wir…, Physiological reports (2024) | [10.14814/phy2.15911](https://doi.org/10.14814/phy2.15911) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Choi_2024](drugs/drug_phenylephrine/pd_Choi_2024_maximum_normalized_relaxation.md) | Choi R et al., Optimization of resting tension for wir…, Physiological reports (2024) | [10.14814/phy2.15911](https://doi.org/10.14814/phy2.15911) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRA1A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhang_2019](drugs/drug_phenylephrine/pgx_Zhang_2019_ADRA1A_Q100.md) | Zhang (2019) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **EDN2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhang_2019](drugs/drug_phenylephrine/pgx_Zhang_2019_EDN2_Q100.md) | Zhang (2019) | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 946 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anderson_2017.pdf` | Anderson BJ et al., The phenylephrine concentration-respons…, Paediatric anaesthesia (2017) | popPK | 10 | [10.1111/pan.13221](https://doi.org/10.1111/pan.13221) | [28868789](https://pubmed.ncbi.nlm.nih.gov/28868789) | The paper reports a population PK model for phenylephrine with explicit numeric values for clearance, volumes, intercompartmental clearance, and absorption parameters in the text. |
| `Seliniotaki_2025.pdf` | Seliniotaki AK et al., Efficacy and Safety of Mydriatic Microd…, JAMA ophthalmology (2025) | popPK | 9 | [10.1001/jamaophthalmol.2024.5462](https://doi.org/10.1001/jamaophthalmol.2024.5462) | [39724200](https://pubmed.ncbi.nlm.nih.gov/39724200) | The study reports a 1-compartment PK model for phenylephrine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Huber_1998.pdf` | Huber TB et al., Catecholamines modulate podocyte functi…, Journal of the American Soc… (1998) | pd | 5 | [10.1681/ASN.V93335](https://doi.org/10.1681/ASN.V93335) | [9513895](https://www.ncbi.nlm.nih.gov/pubmed/9513895) | metadata signals extractable PD data (EC50) |
| `Morris_2007.pdf` | Morris RW et al., "Orpheus" cardiopulmonary bypass simula…, The journal of extra-corpor… (2007) | pd | 5 | not captured | [18293807](https://www.ncbi.nlm.nih.gov/pubmed/18293807) | metadata signals extractable PD data (effectcompartment) |
| `Bellissant_2000.pdf` | Bellissant E et al., Effect of hydrocortisone on phenylephri…, Clinical pharmacology and t… (2000) | pd | 4 | [10.1067/mcp.2000.109354](https://doi.org/10.1067/mcp.2000.109354) | [11014411](https://www.ncbi.nlm.nih.gov/pubmed/11014411) | metadata signals extractable PD data (sigmoid) |
| `McIntyre_1996.pdf` | McIntyre RC et al., Pulmonary vascular smooth muscle contra…, The Journal of surgical res… (1996) | pd | 4 | [10.1006/jsre.1996.0100](https://doi.org/10.1006/jsre.1996.0100) | [8769962](https://www.ncbi.nlm.nih.gov/pubmed/8769962) | metadata signals extractable PD data (EC50) |
| `Morais_2019.pdf` | Morais ICPS et al., Cardiovascular Effect of Diosgenin in O…, Journal of medicinal food (2019) | pd | 4 | [10.1089/jmf.2018.0019](https://doi.org/10.1089/jmf.2018.0019) | [30735081](https://www.ncbi.nlm.nih.gov/pubmed/30735081) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-09T21:21:54.258964+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Angus_1982 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of verapamil on coronary artery constriction in dogs and does not report any pharmacogenomic effects on phenylephrine. |
| PGx | Aninat_2008 | not_relevant | 0 | 0 | The study investigates the effect of catecholamines on hepatocyte inflammation and CYP3A4 expression in vitro, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenylephrine. |
| PGx | Bairam_2019 | not_relevant | 5 | 8 | The study reports in vitro enzymatic kinetics (Km, Vmax) of SULT1A3 allozymes, not in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Bellissant_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic dose-response relationship (mean arterial pressure) rather than pharmacokinetic disposition parameters. |
| PGx | Benedetti_2001 | not_relevant | 0 | 0 | The paper is a general review on amine oxidases and mentions phenylephrine only as an example of a potential drug interaction, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Bilgen_2003 | not_relevant | 0 | 0 | The paper studies cadmium-induced endothelial dysfunction and does not report any pharmacogenomic effects (gene variants) on phenylephrine PK or PD parameters. |
| PGx | Bonaventura_2011 | not_relevant | 0 | 0 | The study investigates vascular reactivity in hypertensive rat models, not the effect of human gene variants on phenylephrine pharmacokinetics or pharmacodynamics. |
| popPK | Choi_2024 | irrelevant | 0 | 0 | The study is an in-vitro wire myography experiment using phenylephrine as a vasoconstrictor agent to test vascular reactivity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Costa_2019 | not_relevant | 0 | 0 | The study investigates the effect of estrogen therapy and aging on phenylephrine-induced vasoconstriction, not the effect of a gene variant on phenylephrine's pharmacokinetics or pharmacodynamics. |
| PGx | Cupitra_2020 | not_relevant | 0 | 0 | The study investigates the effect of ageing on vascular reactivity and receptor expression in rabbits, not the effect of a gene variant/genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cupitra_2023 | irrelevant | 0 | 0 | The study is a comparative vascular physiology/pharmacology analysis using organ bath assays, not a pharmacokinetic study, and reports no disposition parameters for phenylephrine. |
| PGx | Donpunha_2011 | not_relevant | 0 | 0 | The study investigates the protective effect of ascorbic acid on cadmium-induced vascular dysfunction and does not report any pharmacogenomic effects (gene variants) on phenylephrine PK or PD parameters. |
| PGx | Fiorim_2012 | not_relevant | 0 | 0 | The paper investigates the effect of lead exposure on vascular reactivity to phenylephrine, not the effect of a gene variant on phenylephrine pharmacokinetics or pharmacodynamics. |
| PGx | Goswami_2016 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of phloroglucinol and sildenafil in diabetic rats and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of verapamil's antagonism of alpha-1 adrenoceptors using phenylephrine as a probe agonist, and it does not report any pharmacokinetic parameters for phenylephrine. |
| popPK | Huber_1998 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on podocyte function, not a pharmacokinetic study of phenylephrine, and no PK parameters are present. |
| PD | Huber_1998 | not_relevant | 0 | 0 | The provided text is a title regarding catecholamines and podocyte function, with no content describing phenylephrine, PK/PD modeling, or numeric exposure-response parameters. |
| PGx | Kaleli_2025 | not_relevant | 0 | 0 | The study investigates the vascular effects of sirolimus and everolimus on human saphenous veins and does not report any pharmacogenomic effects on phenylephrine. |
| PGx | Kao_2023 | not_relevant | 0 | 0 | The paper describes a mathematical model for vasopressor therapy in pigs and does not report any pharmacogenomic effects or gene variants. |
| PGx | Konstandi_2006 | not_relevant | 0 | 0 | The paper investigates the regulation of CYP1A2 expression by adrenergic signaling and does not report pharmacogenomic effects on phenylephrine's PK or PD parameters. |
| popPK | Kubo_2023 | irrelevant | 0 | 0 | The study evaluates cerebral oxygenation changes using near-infrared spectroscopy and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for phenylephrine. |
| PGx | Kumar_2024 | not_relevant | 1 | 0 | The paper reports a genetic association with blood pressure and vascular reactivity to phenylephrine in a mouse model, but does not report pharmacokinetic or pharmacodynamic parameters of phenylephrine as a drug. |
| PGx | Landau_2011 | not_relevant | 0 | 0 | The study reports that phenylephrine dose was not affected by maternal ADRB2 or NOS3 genotypes, and no pharmacokinetic or pharmacodynamic parameters of phenylephrine were found to be altered by genotype. |
| popPK | Lapointe_1991 | irrelevant | 0 | 0 | The study examines calcium kinetics in rat liver where phenylephrine is used as a hormonal stimulant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Lara_2020 | irrelevant | 0 | 0 | The study is an ophthalmology investigation into accommodation where phenylephrine is used solely as a mydriatic agent, and no pharmacokinetic parameters are reported. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of crystalloid fluid (Ringer's lactate) in sheep, using phenylephrine only as a co-administered vasoactive agent to modify fluid distribution, rather than reporting PK parameters for phenylephrine itself. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The paper investigates the cellular mechanism of NT-PGC-1α in mitigating phenylephrine-induced mitochondrial dysfunction in cardiomyocytes, not the effect of a gene variant on phenylephrine's pharmacokinetics or pharmacodynamics. |
| PGx | Lynch_2020 | not_relevant | 0 | 0 | The paper investigates the vascular effects of crotonaldehyde exposure and the role of TRPA1, using phenylephrine only as a standard agonist for aortic contraction assays, rather than reporting a pharmacogenomic effect on phenylephrine's PK or PD parameters. |
| popPK | Martišienė_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction where phenylephrine is used as a contractile agent, not a subject of pharmacokinetic analysis. |
| popPK | McIntyre_1996 | irrelevant | 0 | 0 | The evidence provided is only a title fragment regarding smooth muscle contraction, containing no pharmacokinetic data or numeric parameters for phenylephrine. |
| PD | McIntyre_1996 | not_relevant | 0 | 0 | The provided text is a title fragment regarding pulmonary vascular smooth muscle contraction and contains no data, analysis, or mention of phenylephrine or any pharmacodynamic parameters. |
| popPK | Monge_2017 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (arterial elastance) of phenylephrine as a pharmacological tool, not its pharmacokinetic parameters. |
| popPK | Morais_2019 | irrelevant | 0 | 0 | The paper focuses on the cardiovascular effects of diosgenin in rats and does not report pharmacokinetic parameters for phenylephrine. |
| PD | Morais_2019 | not_relevant | 0 | 0 | The paper investigates the cardiovascular effects of diosgenin in rats, not phenylephrine, and does not report any exposure-response or dose-response relationship for phenylephrine. |
| popPK | Morris_2007 | irrelevant | 0 | 0 | The paper describes a cardiopulmonary bypass simulation system and does not report pharmacokinetic parameters for phenylephrine. |
| PD | Morris_2007 | not_relevant | 0 | 0 | The paper describes a cardiopulmonary bypass simulation system and does not report any pharmacodynamic or exposure-response data for phenylephrine. |
| PGx | Nielsen_2016 | not_relevant | 4 | 5 | The study reports an association between ADRB2 genotype and the *requirement* for vasopressors (phenylephrine/ephedrine) to maintain blood pressure, rather than a direct pharmacokinetic or pharmacodynamic parameter (e.g., EC50, clearance, or direct BP response to a fixed dose) of phenylephrine itself. |
| PGx | Nwokocha_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a plant extract and its CYP inhibition, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenylephrine. |
| popPK | Panta_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular signaling pathways using phenylephrine as a tool compound, and it does not report any pharmacokinetic parameters. |
| PGx | Pereira_2011 | not_relevant | 0 | 0 | The paper studies a new nitric oxide donor (RuBPY) and its mechanism of action, using phenylephrine only as a tool to pre-contract aortas, and does not report any pharmacogenomic effects on phenylephrine. |
| popPK | Seliniotaki_2025 | relevant | 9 | 2 | The study reports a 1-compartment PK model for phenylephrine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| PGx | Silver_1990 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of cicletanine and its interaction with guanylate cyclase activators, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenylephrine. |
| PGx | Simfukwe_2025 | not_relevant | 0 | 0 | The study investigates the vasodilatory effects of a plant extract on rat aortic rings and does not report any pharmacogenomic effects on the PK or PD of phenylephrine. |
| PGx | Streefkerk_2002 | not_relevant | 0 | 0 | The study investigates the influence of pre-contraction type on vasodilator responses in rat aortic rings and does not report any pharmacogenomic effects (gene variants) on phenylephrine PK or PD. |
| PGx | Taniguchi_2005 | not_relevant | 0 | 0 | The study investigates the effect of a diet and pioglitazone on endothelial function in rabbits, using phenylephrine only as a precontracting agent, and does not report any pharmacogenomic effects on phenylephrine PK or PD. |
| PGx | Tom_2014 | not_relevant | 0 | 0 | The study investigates the effect of a plant extract on blood pressure and vascular function in rats, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of phenylephrine. |
| popPK | Villatoro_2020 | irrelevant | 0 | 0 | The study investigates the effect of topical phenylephrine on retinal imaging metrics (OCTA) and does not report any pharmacokinetic parameters. |
| PGx | Zhang_2019_2 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of a metabolite standard for future PK studies and does not report any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_phenylephrine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
