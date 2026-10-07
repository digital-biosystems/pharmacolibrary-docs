<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08D&quot;,&quot;href&quot;:&quot;atc/C08D.md&quot;},{&quot;label&quot;:&quot;verapamil&quot;}]"></div>

# verapamil

- **generic name:** verapamil
- **ATC codes:** `C08DA01`, `C09BB10`
- **DrugBank:** [DB00661](https://go.drugbank.com/drugs/DB00661) · **PubChem:** [CID 2520](https://pubchem.ncbi.nlm.nih.gov/compound/2520)
- **molar mass:** 454.6016 g/mol (C27H38N2O4) — DrugBank
- **groups:** approved, investigational

## About

Verapamil is a calcium channel blocker used to treat cardiovascular conditions such as high blood pressure, angina, and certain heart rhythm problems like atrial fibrillation and supraventricular tachycardia. It is an approved medicine and appears on the WHO list of essential medicines, so it is widely used worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410291](https://www.wikidata.org/wiki/Q410291) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| verapamil | parent | 454.602 | C27H38N2O4 | DrugBank | [2520](https://pubchem.ncbi.nlm.nih.gov/compound/2520) | Koike_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:27 | 6:42 | 0/1/0 | 1/0/0 | 0/0/2 | 452,113/34,358 | einfracz / qwen3.8-27b | 23 | 7/16 | 23/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.105). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Koike_1979_reference](drugs/drug_verapamil/Verapamil_Koike1979_reference.md) | — | 1-compartment (no model) | 7 | Koike Y et al., Pharmacokinetics of verapamil in man, Research communications in… (1979) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Bergenholm_2016_PR](drugs/drug_verapamil/pd_Bergenholm_2016_PR.md) | PR interval ← verapamil · direct Emax (saturable) effect | — | Bergenholm L et al., PKPD modelling of PR and QRS intervals…, Journal of pharmacological… (2016) | [10.1016/j.vascn.2016.01.002](https://doi.org/10.1016/j.vascn.2016.01.002) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q23` · CLb | metabolism | [Saedder_2019](drugs/drug_verapamil/pgx_Saedder_2019_CYP2D6_Q23.md) | Saedder EA et al., Heart insufficiency after combination o…, Clinical case reports (2019) | [10.1002/ccr3.2393](https://doi.org/10.1002/ccr3.2393) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q900` · equation variable | transport | [van_2012_2](drugs/drug_verapamil/pgx_van_2012_2_ABCB1_Q900.md) | van Assema DM et al., Blood-brain barrier P-glycoprotein func…, EJNMMI research (2012) | [10.1186/2191-219X-2-57](https://doi.org/10.1186/2191-219X-2-57) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=verapamil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` blocker/inhibitor/substrate/transport, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` blocker/inhibitor/substrate/transport, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` blocker/inhibitor/substrate/transport | DrugBank actor |
| absorption | placenta | `ABCB1` blocker/inhibitor/substrate/transport | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` blocker/inhibitor/substrate/transport, `SLC22A4` inhibitor, `SLC22A5` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` blocker/inhibitor/substrate/transport | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` activator/substrate, `CYP2C19` substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/metabolism, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC4` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC3` inhibitor, `ABCC4` inhibitor, `SLC47A1` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC3` inhibitor | DrugBank actor |
| — | brain | `SLC6A4` unknown | DrugBank actor |
| — | platelet | `SLC6A4` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ADRA1A (target), ADRA1B (target), ADRA1D (target), CACNA1A (inhibitor), CACNA1B (inhibitor), CACNA1C (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNG1 (inhibitor), CYP2C18 (substrate), KCNH2 (inhibitor), KCNJ11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1464 matched, 81 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2002.pdf` | Gupta S et al., Pharmacokinetics of controlled-release…, Biopharmaceutics & drug dis… (2002) | popPK | 10 | [10.1002/bdd.289](https://doi.org/10.1002/bdd.289) | [11891670](https://pubmed.ncbi.nlm.nih.gov/11891670) | The paper reports a population PK model for verapamil but only describes trends and relative comparisons (e.g., 4-fold greater clearance) without providing the specific numeric parameter values (CL, V, Ka) in the provided evidence. |
| `Koike_1979.pdf` | Koike Y et al., Pharmacokinetics of verapamil in man, Research communications in… (1979) | popPK | 10 | not captured | [432439](https://pubmed.ncbi.nlm.nih.gov/432439) | The study reports quantitative compartmental PK parameters (CL, Vd, t1/2) for verapamil in humans, with all values explicitly stated in the text. |
| `Lemmer_1997.pdf` | Lemmer B, Chronopharmacological aspects of PK/PD…, International journal of cl… (1997) | pd | 5 | not captured | [9352396](https://www.ncbi.nlm.nih.gov/pubmed/9352396) | metadata signals extractable PD data (PK/PD) |
| `Zimmerman_2004.pdf` | Zimmerman JJ, Exposure-response relationships and dru…, The AAPS journal (2004) | pd | 5 | [10.1208/aapsj060428](https://doi.org/10.1208/aapsj060428) | [15760093](https://www.ncbi.nlm.nih.gov/pubmed/15760093) | metadata signals extractable PD data (Exposure-response) |
| `Harder_1992.pdf` | Harder S et al., Concentration/effect relationship and e…, Journal of cardiovascular p… (1992) | pd | 4 | not captured | [1381762](https://www.ncbi.nlm.nih.gov/pubmed/1381762) | metadata signals extractable PD data (sigmoid) |
| `Pan_2008.pdf` | Pan W et al., Dietary salt does not influence the dis…, Xenobiotica; the fate of fo… (2008) | pgx | 8 | [10.1080/00498250701832446](https://doi.org/10.1080/00498250701832446) | [18340565](https://www.ncbi.nlm.nih.gov/pubmed/18340565) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Botsch_1993.pdf` | Botsch S et al., Identification and characterization of…, Molecular pharmacology (1993) | pgx | 7 | not captured | [8423765](https://www.ncbi.nlm.nih.gov/pubmed/8423765) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Busse_1995.pdf` | Busse D et al., Cytochromes of the P450 2C subfamily ar…, Naunyn-Schmiedeberg's archi… (1995) | pgx | 7 | [10.1007/BF00168924](https://doi.org/10.1007/BF00168924) | [8750925](https://www.ncbi.nlm.nih.gov/pubmed/8750925) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dadashzadeh_2006.pdf` | Dadashzadeh S et al., The effect of gender on the pharmacokin…, Biopharmaceutics & drug dis… (2006) | pgx | 7 | [10.1002/bdd.512](https://doi.org/10.1002/bdd.512) | [16892180](https://www.ncbi.nlm.nih.gov/pubmed/16892180) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Djebli_2021.pdf` | Djebli N et al., Physiologically-Based Pharmacokinetic M…, European journal of drug me… (2021) | pgx | 7 | [10.1007/s13318-021-00714-z](https://doi.org/10.1007/s13318-021-00714-z) | [34495458](https://www.ncbi.nlm.nih.gov/pubmed/34495458) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Hassan_2007.pdf` | Hassan HE et al., Oxycodone induces overexpression of P-g…, Journal of pharmaceutical s… (2007) | pgx | 7 | [10.1002/jps.20893](https://doi.org/10.1002/jps.20893) | [17593551](https://www.ncbi.nlm.nih.gov/pubmed/17593551) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Jamali_2026.pdf` | Jamali H et al., Targeting ABC transporters in glioma: f…, Neurogenetics (2026) | pgx | 7 | [10.1007/s10048-026-00881-8](https://doi.org/10.1007/s10048-026-00881-8) | [41831170](https://www.ncbi.nlm.nih.gov/pubmed/41831170) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Kim_1993.pdf` | Kim M et al., Inhibition of the enantioselective oxid…, Drug metabolism and disposi… (1993) | pgx | 7 | not captured | [8097702](https://www.ncbi.nlm.nih.gov/pubmed/8097702) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Oshida_2017.pdf` | Oshida K et al., Identification of Transporters Involved…, European journal of drug me… (2017) | pgx | 7 | [10.1007/s13318-016-0327-4](https://doi.org/10.1007/s13318-016-0327-4) | [26961540](https://www.ncbi.nlm.nih.gov/pubmed/26961540) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Othman_2007.pdf` | Othman AA et al., Transport, metabolism, and in vivo popu…, The Journal of pharmacology… (2007) | pgx | 7 | [10.1124/jpet.106.111245](https://doi.org/10.1124/jpet.106.111245) | [17003230](https://www.ncbi.nlm.nih.gov/pubmed/17003230) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Suroowan_2019.pdf` | Suroowan S et al., Herbal Medicine of the 21st Century: A…, Current topics in medicinal… (2019) | pgx | 7 | [10.2174/1568026619666191112121330](https://doi.org/10.2174/1568026619666191112121330) | [31721714](https://www.ncbi.nlm.nih.gov/pubmed/31721714) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tomita_2020.pdf` | Tomita Y et al., Prediction methods of drug-drug interac…, Drug metabolism and pharmac… (2020) | pgx | 7 | [10.1016/j.dmpk.2020.03.006](https://doi.org/10.1016/j.dmpk.2020.03.006) | [32660818](https://www.ncbi.nlm.nih.gov/pubmed/32660818) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T15:21:58.243663+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abutaima_2024 | irrelevant | 0 | 0 | Verapamil is used only as a positive control/probe drug to test p-gp inhibition on prednisolone pharmacokinetics, not as the subject drug for PK parameter extraction. |
| popPK | Aguado-Sierra_2024 | irrelevant | 0 | 0 | The study is an in-silico computational modeling paper focusing on proarrhythmic risk (QT interval) where verapamil is used merely as a reference compound for comparison, with no population pharmacokinetic parameters (CL, V, etc.) reported. |
| PD | Aguado-Sierra_2024 | not_relevant | 0 | 0 | The paper describes an in silico computational model for QT exposure-response but does not report specific numeric PD parameters (e.g., Emax, EC50) for verapamil in the provided text. |
| PGx | Angus_1982 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism and tissue selectivity of verapamil in animal models, but does not report any pharmacogenomic effects (gene variant effects) on PK or PD parameters. |
| popPK | Antunes_2017 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of oxcarbazepine and its metabolite, with verapamil serving only as a co-administered P-gp inhibitor/probe. |
| popPK | Bergenholm_2016 | irrelevant | 1 | 0 | The paper focuses on PKPD modeling of cardiac effects (PR/QRS) where verapamil is one of several comparator drugs, and it does not report verapamil's own quantitative pharmacokinetic disposition parameters (like CL or V). |
| PGx | Biwott_2025 | not_relevant | 0 | 0 | The paper investigates the effect of ruxolitinib on P-glycoprotein function and T-cell biology, using verapamil only as a positive control for ATPase activity, not as the subject of a pharmacogenomic study. |
| PGx | Botsch_1993 | not_relevant | 0 | 0 | The paper focuses on the metabolism of propafenone; verapamil is only used as a tool compound (inhibitor) and its PK/PD parameters are not reported or linked to genetics. |
| PGx | Bucana_1990 | not_relevant | 1 | 5 | The paper uses verapamil as an inhibitor of multidrug resistance (MDR) efflux pumps to study dye transport and adriamycin resistance in cancer cells, not to report a pharmacogenomic effect of a gene variant on verapamil's PK or PD. |
| PGx | Busse_1995 | not_relevant | 3 | 0 | The paper identifies CYP2C subfamily enzymes involved in verapamil O-demethylation using in vitro methods, but it does not report a pharmacogenomic effect (linking a specific genetic variant to a PK/PD change) in vivo. |
| popPK | Cao_2012 | irrelevant | 1 | 0 | Verapamil is used only as one of four example drugs to illustrate a modeling methodology, with no specific quantitative PK parameter values reported in the evidence. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The study reports a pharmacokinetic drug-drug interaction (verapamil inhibits CYP3A4 affecting TQB3909), not a pharmacogenomic effect (gene variant/genotype) on the PK/PD of verapamil. |
| PGx | Dadashzadeh_2006 | not_relevant | 0 | 0 | The paper investigates gender differences, not gene variants/genotypes, so it does not report a pharmacogenomic effect. |
| PGx | Djebli_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of entrectinib and involves drug-drug interactions (verapamil as an inhibitor), but it does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of verapamil. |
| PGx | Domínguez-Álvarez_2016 | not_relevant | 0 | 0 | The paper uses verapamil as a reference standard to compare the efficacy of selenocompounds in reversing multidrug resistance; it does not report pharmacogenomic variants affecting verapamil's PK/PD. |
| PGx | Feng_2020 | not_relevant | 0 | 0 | The paper investigates the effect of a natural compound (Ginsenoside Rg5) on drug transport, not the effect of a genetic variant on verapamil pharmacokinetics. |
| PGx | Freedman_1981 | not_relevant | 0 | 0 | The paper reports clinical response to verapamil in coronary artery spasm patients but does not mention any genetic variants or pharmacogenomic influences on PK/PD. |
| PGx | Fuhr_1992 | not_relevant | 2 | 2 | The title suggests a study on CYP1A2 and Verapamil, but no text content or specific pharmacogenomic effect sizes (genotype -&gt; PK change) are provided to verify relevance. |
| PGx | Gajdács_2017 | not_relevant | 0 | 0 | The paper investigates selenoesters as multidrug resistance reversing agents in cancer cell lines and does not involve verapamil or human pharmacogenomic variants. |
| popPK | García-Varela_2021 | irrelevant | 4 | 6 | The study reports quantitative PK parameters (K1, VT, k2) for a radiolabeled verapamil tracer in nonhuman primates, but the values are not directly readable in the provided text and are primarily referenced in tables/figures not included. |
| PGx | Gosselin_2023 | not_relevant | 0 | 0 | The study examines bleeding risk associated with drug-drug interactions (DOACs and antiarrhythmics) in a clinical cohort, and does not report pharmacogenomic effects on verapamil PK/PD parameters. |
| PGx | Gronich_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes (bleeding/stroke) associated with drug-drug interactions, not gene variants affecting PK/PD parameters. |
| popPK | Gupta_2002 | relevant | 10 | 2 | The paper reports a population PK model for verapamil but only describes trends and relative comparisons (e.g., 4-fold greater clearance) without providing the specific numeric parameter values (CL, V, Ka) in the provided evidence. |
| popPK | Harder_1992 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PGx | Hassan_2007 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic effects of oxycodone and paclitaxel, utilizing verapamil only as an inhibitory control, and does not report pharmacogenomic effects on verapamil. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The study is an ex vivo pharmacological investigation of verapamil's effect on prostate contractions, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Jamali_2026 | not_relevant | 0 | 0 | The paper is a computational study on farnesiferols as P-gp inhibitors and does not report any pharmacogenomic effect of a genetic variant on verapamil's pharmacokinetics or pharmacodynamics. |
| PGx | Kawanabe_2006 | not_relevant | 0 | 0 | The paper uses verapamil as an inhibitor to identify ABCG2-dependent side population cells in periodontal ligaments, rather than studying the effect of a gene variant on verapamil's pharmacokinetics or pharmacodynamics. |
| PGx | Kim_1993 | not_relevant | 0 | 0 | The paper studies the metabolic interaction between verapamil and metoprolol using human liver microsomes without reporting any gene variants or pharmacogenomic effects. |
| PGx | Kim_2011 | not_relevant | 0 | 0 | The paper investigates the role of P-gp in chondrogenesis and does not report pharmacogenomic effects on verapamil's PK or PD parameters. |
| PGx | Kroemer_1993 | not_relevant | 1 | 0 | The paper identifies CYP enzymes involved in verapamil metabolism using human liver microsomes and yeast systems, but does not report pharmacogenomic effects (gene variants changing PK/PD in patients). |
| popPK | Kume_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor crosstalk in airway smooth muscle where verapamil is used solely as a calcium channel inhibitor tool compound, not as the subject drug for pharmacokinetic analysis. |
| PD | Kume_2018 | not_relevant | 0 | 0 | The provided text is a fragment of a title or heading ("Involvement of Allosteric Effect and K") and contains no data, analysis, or numeric parameters regarding verapamil pharmacodynamics. |
| PGx | Lacher_2014 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of paraquat, not verapamil, which is only used as a P-gp inhibitor. |
| popPK | Lacher_2015 | irrelevant | 0 | 0 | Verapamil is used only as an in-vitro positive control for P-glycoprotein function, not as the subject of a pharmacokinetic study. |
| PD | Lacher_2015 | not_relevant | 3 | 5 | The paper reports in vitro kinetic parameters (Vmax, Km) for verapamil as a positive control for P-gp ATPase activity, but does not report a pharmacodynamic exposure-response or dose-response relationship for verapamil itself. |
| PGx | Larrazabal_2021 | not_relevant | 0 | 0 | The paper investigates the effect of verapamil on parasite proliferation in bovine cells, not the effect of a human gene variant on verapamil pharmacokinetics or pharmacodynamics. |
| popPK | Lemmer_1997 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | Lemmer_1997 | not_relevant | 1 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Lü_2022 | not_relevant | 0 | 0 | The study focuses on herb-drug interactions of citrus compounds with verapamil via network analysis and in vitro enzyme assays, reporting no human pharmacogenomic (genetic variant) effects on verapamil PK/PD parameters. |
| PGx | Martin_2016 | not_relevant | 0 | 0 | The study investigates the effect of verapamil (a CYP3A4 inhibitor) on the pharmacokinetics of fostamatinib, not the effect of a specific gene variant or genotype on the pharmacokinetics or pharmacodynamics of verapamil itself. |
| popPK | Methaneethorn_2014 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of simvastatin and its interaction with verapamil; verapamil is treated as a perpetrator/comparator in the DDI model, and no specific numeric PK parameter values for verapamil are provided in the evidence. |
| PGx | Methaneethorn_2014 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic drug-drug interaction between simvastatin and verapamil, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| PGx | Mu_2025 | not_relevant | 0 | 0 | The paper models the impact of liver cirrhosis (reduced enzyme expression/physiological changes) on PK, but does not report specific genetic variants or genotypes influencing the pharmacokinetics of verapamil. |
| PGx | Mukhtar_2023 | not_relevant | 0 | 0 | The paper studies the effect of Cymbopogon citratus/citral on doxorubicin resistance, not the pharmacogenomic effects of gene variants on verapamil PK/PD. |
| PGx | Mäenpää_2016 | not_relevant | 0 | 0 | The paper discusses the cardiac safety of ophthalmic timolol and mentions verapamil only as a CYP2D6 inhibitor that increases timolol levels; it does not report how a gene variant changes the PK/PD of verapamil itself. |
| PGx | Offord_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between nirmatrelvir-ritonavir and verapamil, not a pharmacogenomic effect driven by a gene variant. |
| PGx | Oshida_2017 | not_relevant | 0 | 0 | The paper investigates the transporters for beraprost sodium, using verapamil only as an inhibitor for P-gp, and does not report pharmacogenomic effects on verapamil PK/PD. |
| PGx | Othman_2007 | not_relevant | 0 | 0 | The study investigates benztropine analogs and uses verapamil only as a P-glycoprotein inhibitor to study transport mechanisms, rather than examining the pharmacokinetics or pharmacodynamics of verapamil itself in relation to genetic variants. |
| PGx | Pan_2008 | not_relevant | 5 | 1 | The study reports no statistically significant pharmacogenomic effect of ABCB1 haplotypes on verapamil PK parameters, finding only non-significant trends. |
| PGx | Pillai_2009 | not_relevant | 2 | 5 | The paper describes a drug-drug interaction (grapefruit juice inhibiting CYP3A4) rather than a pharmacogenomic effect mediated by a specific gene variant or genotype. |
| popPK | Rehman_2022 | irrelevant | 0 | 0 | The study is an ex vivo pharmacodynamic and in silico investigation of fenchone using guinea pig trachea, where verapamil is used only as a reference drug/comparator, with no pharmacokinetic parameters reported. |
| PD | Rehman_2022 | not_relevant | 0 | 0 | The paper studies fenchone, not verapamil. |
| PGx | Saedder_2019 | not_relevant | 1 | 2 | The paper mentions CYP2D6 status as a theoretical vulnerability factor in the abstract but is a case report focused on drug-drug interaction with metoprolol, without providing specific quantitative PK/PD data for verapamil in relation to genotype. |
| PGx | Seo_2020 | not_relevant | 4 | 3 | The paper reports a change in brain xenobiotic clearance (measured via PET imaging with [11C]verapamil) due to ABCB1 loss-of-function, but it does not quantify systemic PK parameters (e.g., AUC, Cmax) or PD parameters for verapamil as a therapeutic drug. |
| popPK | Sjögren_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fexofenadine with verapamil as a drug-drug interaction inhibitor, not the PK of verapamil itself. |
| PGx | Slate_1991 | not_relevant | 0 | 0 | The paper studies pharmacodynamic reversal of cancer drug resistance, not pharmacogenomics. |
| PGx | Spengler_2015 | not_relevant | 0 | 0 | The paper investigates the potency of novel phosphorus ylides as ABCB1 inhibitors and compares them to verapamil, but it does not report a pharmacogenomic effect of a gene variant on verapamil's PK or PD parameters. |
| PGx | Srinivas_2008 | not_relevant | 0 | 0 | The paper focuses on dual drug-drug interactions (atorvastatin and verapamil) mediated by P-gp/CYP3A4, not on pharmacogenomic variants affecting verapamil's PK/PD. |
| PGx | Sulová_2009 | not_relevant | 0 | 0 | The paper discusses verapamil only as an example of a drug that antagonizes P-gp mediated resistance, not as the drug subject of pharmacogenomic PK/PD analysis. |
| PGx | Supino_1993 | not_relevant | 0 | 0 | The study examines multidrug resistance mechanisms in cancer cells and does not report on pharmacogenomic effects of verapamil on PK or PD parameters. |
| PGx | Suroowan_2019 | not_relevant | 0 | 0 | The paper reviews herbal interactions with verapamil (displacement from serum proteins) but does not report any pharmacogenomic effects (gene variants) on its PK/PD parameters. |
| PGx | Szczepańska_2020 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of P-gp by novel compounds, comparing potency to verapamil, but does not report a pharmacogenomic effect on the PK or PD parameters of verapamil. |
| PGx | Tam_1993 | not_relevant | 0 | 0 | The text mentions verapamil only as an example of enzymatic induction by rifampicin, not as a pharmacogenomic study involving a gene variant. |
| PGx | Tomita_2020 | not_relevant | 0 | 0 | The paper focuses on predicting drug-drug interactions for non-oral CYP3A4 substrates and does not report pharmacogenomic effects (gene variants) on verapamil PK parameters. |
| popPK | Tran_2023 | irrelevant | 0 | 0 | The study is an in-vitro biophysical analysis of P-glycoprotein ATPase activity modulated by lipids, not a pharmacokinetic study reporting disposition parameters for verapamil. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper reports the in vitro reversal activity of new triazole-pyrimidine compounds against ABCB1-mediated multidrug resistance, using verapamil only as a standard comparator for potency, without investigating genetic variants or pharmacogenomic effects on verapamil's pharmacokinetics or pharmacodynamics. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the interaction of litronesib with ABCB1 transporters; verapamil is used only as a standard reversal agent to confirm mechanism, not as the primary drug for pharmacogenomic analysis. |
| PGx | Yamada_2003 | not_relevant | 0 | 0 | The paper studies the mechanism of intestinal tumorigenesis and the role of P-glycoprotein in Mdr1-deficient mice, using verapamil only as an inhibitor in in vitro assays, rather than reporting a pharmacogenomic effect on verapamil's PK or PD parameters. |
| PGx | Yamazaki_2008 | not_relevant | 0 | 0 | The study investigates the presence of side-population stem cells in liver cells using verapamil as a dye efflux inhibitor, rather than analyzing the effect of genetic variants on verapamil pharmacokinetics or pharmacodynamics. |
| popPK | Yukawa_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, where verapamil is only a co-administered drug influencing digoxin clearance. |
| PGx | Zhao_2017 | not_relevant | 0 | 0 | The study develops an in vitro organoid model for P-gp screening and tests verapamil as an inhibitor, but does not report pharmacogenomic effects on verapamil's own PK or PD parameters. |
| PGx | Zhu_2016 | not_relevant | 0 | 0 | The study investigates the effect of a genetic variant on trandolapril, not verapamil. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PD | Zimmerman_2004 | not_relevant | 0 | 0 | The paper focuses on sirolimus, not verapamil. |
| PGx | do_2025 | not_relevant | 0 | 0 | The study evaluates drug-herb interactions (Maytenus ilicifolia) and does not investigate the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | van_2012 | irrelevant | 1 | 1 | This is a PET imaging study assessing test-retest variability of Pgp function using radiolabeled verapamil as a tracer, not a systemic pharmacokinetic study reporting clearance, volume of distribution, or half-life for the drug. |
| PGx | Żesławska_2016 | not_relevant | 0 | 0 | The study investigates the activity of hydantoin derivatives as P-gp inhibitors and compares the potency of the best compound to verapamil as a positive control, but it does not report any gene-specific effects on verapamil's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:22 UTC</sub>
