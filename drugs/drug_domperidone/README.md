<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;domperidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Domperidone_Dailly2008_reference&quot;,&quot;label&quot;:&quot;Dailly_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_domperidone/Domperidone_Dailly2008_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# domperidone

- **generic name:** domperidone
- **ATC codes:** `A03FA03`
- **DrugBank:** [DB01184](https://go.drugbank.com/drugs/DB01184)
- **groups:** approved, investigational, vet_approved

## About

**Description.** A specific blocker of dopamine receptors. It speeds gastrointestinal peristalsis, causes prolactin release, and is used as antiemetic and tool in the study of dopaminergic mechanisms.

**Indication.** For management of dyspepsia, heartburn, epigastric pain, nausea, and vomiting.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 11:57 | 4:04 | 0/1/0 | 0/0/0 | 0/0/1 | 60,142/5,521 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Dailly_2008_reference](drugs/drug_domperidone/Domperidone_Dailly2008_reference.md) | Dailly E et al., Population pharmacokinetics of domperid…, European journal of clinica… (2008) | [10.1007/s00228-008-0535-1](https://doi.org/10.1007/s00228-008-0535-1) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCB1** | `Q44` · fe | transport | [Borst_2013](drugs/drug_domperidone/pgx_Borst_2013_ABCB1_Q44.md) | Borst P et al., P-glycoprotein ABCB1: a major player in…, The Journal of clinical inv… (2013) | [10.1172/JCI70430](https://doi.org/10.1172/JCI70430) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=domperidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate/transport | DrugBank actor |
| absorption | kidney | `ABCB1` substrate/transport | DrugBank actor |
| absorption | liver | `ABCB1` substrate/transport | DrugBank actor |
| absorption | placenta | `ABCB1` substrate/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate/transport | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DRD2 (target), DRD3 (target), HTR2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dailly_2008.pdf` | Dailly E et al., Population pharmacokinetics of domperid…, European journal of clinica… (2008) | popPK | 10 | [10.1007/s00228-008-0535-1](https://doi.org/10.1007/s00228-008-0535-1) | [18685840](https://pubmed.ncbi.nlm.nih.gov/18685840) | The paper is a population PK study of domperidone and explicitly reports numeric values for Cl/F, Vd/F, and Ka in the abstract. |
| `Heykants_1981.pdf` | Heykants J et al., On the pharmacokinetics of domperidone…, European journal of drug me… (1981) | popPK | 9 | [10.1007/BF03189516](https://doi.org/10.1007/BF03189516) | [7250152](https://pubmed.ncbi.nlm.nih.gov/7250152) | The paper is a primary PK study for domperidone reporting a compartmental model and half-life, but specific numeric values for clearance, volume, or rate constants are not present in the provided abstract text. |
| `Wu_2002.pdf` | Wu MS et al., Determination of domperidone in human p…, Acta pharmacologica Sinica (2002) | popPK | 9 | not captured | [11918857](https://pubmed.ncbi.nlm.nih.gov/11918857) | The study reports quantitative PK parameters (Tmax, Cmax, T1/2) for domperidone in humans, but lacks specific values for clearance (CL) or volume of distribution (V). |
| `Bose_2013.pdf` | Bose A et al., Convolution and validation of in vitro-…, European journal of drug me… (2013) | popPK | 8 | [10.1007/s13318-012-0116-7](https://doi.org/10.1007/s13318-012-0116-7) | [23264125](https://pubmed.ncbi.nlm.nih.gov/23264125) | The study reports PK parameters (ka, absorption) for domperidone, but the specific numeric values are not present in the provided evidence text. |
| `Devandla_2015.pdf` | Devandla A et al., Effect of rifampicin pretreatment on th…, Drug metabolism and persona… (2015) | popPK | 8 | [10.1515/dmpt-2015-0004](https://doi.org/10.1515/dmpt-2015-0004) | [26353177](https://pubmed.ncbi.nlm.nih.gov/26353177) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for domperidone, but only as percentage changes relative to baseline, without providing the absolute numeric values for clearance, volume, or half-life. |
| `Heykants_1981_2.pdf` | Heykants J et al., On the pharmacokinetics of domperidone…, European journal of drug me… (1981) | popPK | 8 | [10.1007/BF03189513](https://doi.org/10.1007/BF03189513) | [7250149](https://pubmed.ncbi.nlm.nih.gov/7250149) | The study reports quantitative PK parameters (half-lives) for domperidone in dogs, but lacks specific values for clearance, volume, or human data. |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Kan_2025.pdf` | Kan JY et al., Darunavir inhibits dengue virus replica…, Biochemical pharmacology (2025) | pd | 4 | [10.1016/j.bcp.2025.116839](https://doi.org/10.1016/j.bcp.2025.116839) | [40024350](https://www.ncbi.nlm.nih.gov/pubmed/40024350) | metadata signals extractable PD data (EC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |
| `Vayssette_1986.pdf` | Vayssette J et al., Dopamine receptors in pancreatic acinar…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90412-7](https://doi.org/10.1016/0014-2999(86)90412-7) | [2872068](https://www.ncbi.nlm.nih.gov/pubmed/2872068) | metadata signals extractable PD data (EC50) |
| `Athukuri_2017.pdf` | Athukuri BL et al., Enhanced Oral Bioavailability of Domper…, Journal of pharmacy & pharm… (2017) | pgx | 7 | [10.18433/J3MK72](https://doi.org/10.18433/J3MK72) | [28459658](https://www.ncbi.nlm.nih.gov/pubmed/28459658) | metadata signals extractable PGX data (CYP3A1, PK/PD-context) |
| `Michaud_2010.pdf` | Michaud V et al., Characterization of CYP3A isozymes invo…, Drug metabolism letters (2010) | pgx | 7 | [10.2174/187231210791292735](https://doi.org/10.2174/187231210791292735) | [21281268](https://www.ncbi.nlm.nih.gov/pubmed/21281268) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Naidoo_2019.pdf` | Naidoo P et al., Progress in the Consideration of Possib…, Current drug metabolism (2019) | pgx | 7 | [10.2174/1389200220666181128160813](https://doi.org/10.2174/1389200220666181128160813) | [30488793](https://www.ncbi.nlm.nih.gov/pubmed/30488793) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 | not captured | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Rossi_2010.pdf` | Rossi M et al., Domperidone and long QT syndrome, Current drug safety (2010) | pgx | 7 | [10.2174/157488610791698334](https://doi.org/10.2174/157488610791698334) | [20394569](https://www.ncbi.nlm.nih.gov/pubmed/20394569) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Templeton_2016.pdf` | Templeton I et al., A physiologically based pharmacokinetic…, Biopharmaceutics & drug dis… (2016) | pgx | 7 | [10.1002/bdd.1992](https://doi.org/10.1002/bdd.1992) | [26356245](https://www.ncbi.nlm.nih.gov/pubmed/26356245) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ung_2009.pdf` | Ung D et al., Metabolic interactions between prokinet…, Xenobiotica; the fate of fo… (2009) | pgx | 7 | [10.1080/00498250903096121](https://doi.org/10.1080/00498250903096121) | [19575604](https://www.ncbi.nlm.nih.gov/pubmed/19575604) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamsani_2014.pdf` | Yamsani SK et al., Effect of silymarin pretreatment on the…, Drug metabolism and drug in… (2014) | pgx | 7 | [10.1515/dmdi-2014-0013](https://doi.org/10.1515/dmdi-2014-0013) | [25029082](https://www.ncbi.nlm.nih.gov/pubmed/25029082) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Zhou_2021.pdf` | Zhou H et al., A simple LC-MS/MS method for simultaneo…, Journal of chromatography.… (2021) | pgx | 7 | [10.1016/j.jchromb.2021.122766](https://doi.org/10.1016/j.jchromb.2021.122766) | [34247102](https://www.ncbi.nlm.nih.gov/pubmed/34247102) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `unknown_2016.pdf` | unknown, Metoclopramide, domperidone: sudden car…, Prescrire international (2016) | pgx | 7 | not captured | [30645828](https://www.ncbi.nlm.nih.gov/pubmed/30645828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Essa_2012.pdf` | Essa EA et al., Preparation and characterization of dom…, Pakistan journal of pharmac… (2012) | pgx | 5 | not captured | [23009995](https://www.ncbi.nlm.nih.gov/pubmed/23009995) | metadata signals extractable PGX data (CYP3A4) |
| `Parkman_2011.pdf` | Parkman HP et al., Domperidone treatment for gastroparesis…, Digestive diseases and scie… (2011) | pgx | 5 | [10.1007/s10620-010-1472-2](https://doi.org/10.1007/s10620-010-1472-2) | [21063774](https://www.ncbi.nlm.nih.gov/pubmed/21063774) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-18T11:53:58.169320+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Athukuri_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (piperine) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Barthelmebs_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal vascular receptors where domperidone is used solely as a D2-receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Barthelmebs_1991 | not_relevant | 0 | 0 | The study reports PD parameters (EC50, Emax) for bromocriptine, not domperidone; domperidone is used only as a qualitative antagonist to confirm receptor subtype. |
| popPK | Biewenga_2015 | irrelevant | 2 | 2 | The study is a thorough QT/QTc safety trial that reports only exposure metrics (AUC, Cmax) and lacks quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Bose_2013 | relevant | 8 | 0 | The study reports PK parameters (ka, absorption) for domperidone, but the specific numeric values are not present in the provided evidence text. |
| popPK | Claassen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report pharmacokinetic parameters. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine on the human urinary bladder and does not mention domperidone or report any pharmacodynamic parameters for it. |
| popPK | Devandla_2015 | relevant | 8 | 2 | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for domperidone, but only as percentage changes relative to baseline, without providing the absolute numeric values for clearance, volume, or half-life. |
| PGx | Doggrell_2014 | not_relevant | 0 | 0 | The paper is a review of cardiac safety and pharmacodynamics (QT prolongation) but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for treating SARS-CoV-2 and does not report pharmacogenomic effects on domperidone PK/PD. |
| PGx | Essa_2012 | not_relevant | 0 | 0 | The paper focuses on formulation development (solid dispersions) to improve dissolution and bioavailability, not on pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Etchegoyen_1986 | not_relevant | 0 | 0 | The paper focuses on catecholestrogens and receptor binding in guinea-pig membranes, with no mention of domperidone or its pharmacodynamics. |
| popPK | Heykants_1981 | relevant | 9 | 2 | The paper is a primary PK study for domperidone reporting a compartmental model and half-life, but specific numeric values for clearance, volume, or rate constants are not present in the provided abstract text. |
| popPK | Heykants_1981_2 | relevant | 8 | 3 | The study reports quantitative PK parameters (half-lives) for domperidone in dogs, but lacks specific values for clearance, volume, or human data. |
| PGx | Ioannou_2016 | not_relevant | 0 | 0 | The study is a survey of prescribing practices and drug interactions, not a pharmacogenomic study investigating the effect of genetic variants on domperidone PK/PD. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Kan_2025 | not_relevant | 0 | 0 | The paper discusses darunavir and dengue virus, not domperidone, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Kurosawa_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine receptors in guinea pig stomach smooth muscle, where domperidone is used only as a selective antagonist probe, and no pharmacokinetic parameters are reported. |
| PD | Kurosawa_1991 | not_relevant | 0 | 0 | The paper reports pharmacological characterization of dopamine receptors in guinea pig stomach smooth muscle; domperidone is mentioned only as a DA2 antagonist that had no effect, with no exposure-response or dose-response relationship for domperidone itself. |
| PGx | Maher_2017 | not_relevant | 0 | 0 | The paper uses domperidone as an internal standard for a bioanalytical method and does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Marechal_2006 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A4 inhibition) involving domperidone, not pharmacogenomic effects (gene variants) on its PK/PD. |
| popPK | McGonigle_1988 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study in human retina, not a pharmacokinetic study, and domperidone is only mentioned as a ligand for binding affinity characterization. |
| PD | McGonigle_1988 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding kinetics (Kd, Bmax) for spiroperidol and mentions domperidone's affinity for binding sites, but it does not report a pharmacodynamic exposure-response or dose-response relationship for domperidone in a physiological or clinical context. |
| PGx | Michaud_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (clarithromycin inhibiting domperidone metabolism) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Michaud_2010_2 | not_relevant | 0 | 0 | The study characterizes CYP3A isoforms and cytochrome b5 modulation in vitro but does not report the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Naidoo_2019 | not_relevant | 0 | 0 | The paper discusses sex differences in drug interactions, not pharmacogenomic effects (gene variants) on domperidone PK/PD. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| PGx | Nomoto_2005 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic variations in Parkinson's disease treatment but does not report pharmacogenomic effects on domperidone. |
| PGx | Patoine_2014 | not_relevant | 0 | 0 | The study investigates the effect of diabetes (a disease state) on CYP3a activity, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Rossi_2010 | not_relevant | 0 | 0 | The paper reviews the safety risk of long QT syndrome associated with domperidone but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor modulation in human atria, not a pharmacokinetic study, and domperidone is used only as a tool compound. |
| PD | Rump_1995 | not_relevant | 3 | 2 | The study reports a pKB value for domperidone as a D2 antagonist in an ex vivo electrophysiology/neurotransmission assay, which is a pharmacological potency parameter rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | The paper investigates the interaction between drugs and estrogen metabolism, not the pharmacokinetics or pharmacodynamics of domperidone. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Schuurkes_1985 | not_relevant | 0 | 0 | The paper is an in-vitro/in-vivo pharmacological study on guinea pigs focusing on qualitative or semi-quantitative effects on gut preparation, not a clinical PK/PD or exposure-response analysis with numeric PD parameters for domperidone. |
| PGx | Simard_2004 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the metabolic enzyme for domperidone using in vitro systems but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Swain_2013 | not_relevant | 0 | 0 | The paper reports a lack of neurotoxicity (clinical observation) for domperidone in a mouse model, but does not report changes in specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tanda_1994 | not_relevant | 0 | 0 | The paper investigates the hemodynamic effects of dopamine on tumor blood flow in rats and uses domperidone only as a receptor antagonist to characterize the mechanism, without reporting any pharmacogenomic effects on domperidone's PK or PD parameters. |
| PGx | Templeton_2016 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions with CYP3A4 inhibitors using PBPK modeling, not on pharmacogenomic variants affecting domperidone PK/PD. |
| PGx | Ung_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (erythromycin inhibiting CYP3A4) rather than a pharmacogenomic effect (gene variant/genotype) on domperidone PK/PD. |
| popPK | Vayssette_1986 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Vayssette_1986 | not_relevant | 0 | 0 | The paper focuses on dopamine receptors in pancreatic acinar cells from dogs and does not mention domperidone or report any pharmacodynamic or exposure-response data for it. |
| PGx | Wang_2012 | not_relevant | 2 | 5 | The study reports associations between SNPs and clinical outcomes (efficacy/side effects) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ward_2004 | not_relevant | 0 | 0 | The paper characterizes CYP enzymes involved in domperidone metabolism in vitro but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Wu_2023 | irrelevant | 2 | 0 | The study reports only non-compartmental bioequivalence metrics (Cmax, AUC, T1/2) and geometric mean ratios, lacking the specific compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PGx | Yamsani_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (silymarin) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Youssef_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (pioglitazone/ondansetron) on domperidone metabolism, not the effect of a gene variant or genotype on PK/PD parameters. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study for cilostazol and ambroxol, using domperidone only as an internal standard, and contains no pharmacogenomic data. |
| PGx | Zidan_2020 | not_relevant | 2 | 5 | The paper uses in silico methods to predict genes associated with adverse drug reactions (like QT prolongation) rather than reporting measured pharmacokinetic or pharmacodynamic parameter changes based on specific genotypes. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The text discusses drug-drug interactions (CYP3A4 inhibitors) and safety risks, but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 11:54 UTC</sub>
