<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;topiramate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Lee2024_reference&quot;,&quot;label&quot;:&quot;Lee_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/Topiramate_Lee2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Marques2020_reference&quot;,&quot;label&quot;:&quot;Marques_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/Topiramate_Marques2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# topiramate

- **generic name:** topiramate
- **ATC codes:** `A08AA51`, `N03AX11`
- **DrugBank:** [DB00273](https://go.drugbank.com/drugs/DB00273)
- **groups:** approved, investigational

## About

**Description.** Topiramate is a anti-epileptic drug used to manage seizures and prevent migraines.[A175249] It was initially approved by the FDA in 1996. In 2004, topiramate was approved for the prevention of migraine in adults.[A188309,L10544,L43478] Since 2012, the extended-release formulation has been approved in combination with [phentermine] for chronic weight management therapy in adults.[L10550] 

Characteristics that distinguish topiramate from other antiepileptic drugs are a monosaccharide chemical structure containing a sulfamate, and 40% of its mass accounted for by oxygen.[A175249] Interestingly, topiramate was discovered by chance when attempts were made to formulate a novel antidiabetic drug.[A188330]

**Indication.** Topiramate is indicated  for the following conditions: 1)Monotherapy for partial onset or primary generalized tonic-clonic seizures for patients 2 years of age and above 2)Adjunctive therapy for partial onset seizures or primary generalized tonic-clonic seizures for both adult and pediatric patients above 2 years old 3)Adjunctive therapy for seizures associated with Lennox-Gastaut syndrome in patients above 2 years of age 4)Prophylaxis of migraine in children 12 years of age and older and adults.[L10544]

Topiramate is also used off-label as an adjunct therapy for weight management[L10550] and for mood disorders.[A188312]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 03:13 | 22:07 | 1/1/0 | 0/0/0 | 0/0/5 | 173,469/20,245 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 0/0 | 12/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Lee_2024_reference](drugs/drug_topiramate/Topiramate_Lee2024_reference.md) | Lee S et al., Topiramate dosage optimization for effe…, Annals of clinical and tran… (2024) | [10.1002/acn3.51962](https://doi.org/10.1002/acn3.51962) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Marques_2020_reference](drugs/drug_topiramate/Topiramate_Marques2020_reference.md) | Marques MR et al., Topiramate pharmacokinetics in neonates…, Acta paediatrica (Oslo, Nor… (2020) | [10.1111/apa.14944](https://doi.org/10.1111/apa.14944) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **DPW_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_DPW_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GRIK1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_GRIK1_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PAU_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_PAU_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **THR_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_THR_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **TR_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_TR_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 171 matched, 62 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahmed_2015.pdf` | Ahmed GF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12556](https://doi.org/10.1111/bcp.12556) | [25403343](https://pubmed.ncbi.nlm.nih.gov/25403343) | The title confirms a PK/PD modeling study of topiramate, but the provided evidence contains no numeric parameter values. |
| `Elewa_2023.pdf` | Elewa M et al., Population Pharmacokinetics of Topirama…, Therapeutic drug monitoring (2023) | popPK | 10 | [10.1097/FTD.0000000000001143](https://doi.org/10.1097/FTD.0000000000001143) | [37798835](https://pubmed.ncbi.nlm.nih.gov/37798835) | The study is a population PK analysis of topiramate reporting a 1-compartment model, and the text explicitly provides the mean estimated clearance (2.11 L/h) and identifies covariates for volume, though specific V values are not numerically listed in the provided text. |
| `Girgis_2010.pdf` | Girgis IG et al., Pharmacokinetic-pharmacodynamic assessm…, Epilepsia (2010) | popPK | 10 | [10.1111/j.1528-1167.2010.02598.x](https://doi.org/10.1111/j.1528-1167.2010.02598.x) | [20880232](https://pubmed.ncbi.nlm.nih.gov/20880232) | The title confirms a PK/PD study of topiramate in children, but the provided evidence contains no numeric parameter values. |
| `Lim_2016.pdf` | Lim CN et al., Pharmacokinetic-Pharmacodynamic Modelin…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.646](https://doi.org/10.1002/jcph.646) | [26395889](https://pubmed.ncbi.nlm.nih.gov/26395889) | The title confirms a PK/PD modeling study for topiramate, but the provided evidence contains only the title and no numeric parameter values. |
| `Wei_2023.pdf` | Wei S et al., Population pharmacokinetics of topirama…, European journal of clinica… (2023) | popPK | 10 | [10.1007/s00228-023-03549-6](https://doi.org/10.1007/s00228-023-03549-6) | [37597080](https://pubmed.ncbi.nlm.nih.gov/37597080) | The title indicates a population PK study of topiramate, but the provided evidence contains only the title and no numeric parameter values. |
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | pd | 5 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://www.ncbi.nlm.nih.gov/pubmed/22171585) | metadata signals extractable PD data (exposure-response) |
| `Morgan_2004.pdf` | Morgan PE et al., Carbonic anhydrase inhibitors that dire…, Molecular membrane biology (2004) | pd | 5 | [10.1080/09687860400014872](https://doi.org/10.1080/09687860400014872) | [15764372](https://www.ncbi.nlm.nih.gov/pubmed/15764372) | metadata signals extractable PD data (EC50) |
| `Narayanasamy_2019.pdf` | Narayanasamy S et al., An alternating polarity switching assay…, Journal of chromatography.… (2019) | pd | 5 | [10.1016/j.jchromb.2019.04.044](https://doi.org/10.1016/j.jchromb.2019.04.044) | [31030106](https://www.ncbi.nlm.nih.gov/pubmed/31030106) | metadata signals extractable PD data (PK/PD) |
| `Wei_2024.pdf` | Wei S et al., UGT1A polymorphism rs4148324 associated…, Seizure (2024) | pgx | 8 | [10.1016/j.seizure.2023.10.004](https://doi.org/10.1016/j.seizure.2023.10.004) | [37858371](https://www.ncbi.nlm.nih.gov/pubmed/37858371) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Nallani_2003.pdf` | Nallani SC et al., Dose-dependent induction of cytochrome…, Epilepsia (2003) | pgx | 7 | [10.1111/j.0013-9580.2003.06203.x](https://doi.org/10.1111/j.0013-9580.2003.06203.x) | [14636322](https://www.ncbi.nlm.nih.gov/pubmed/14636322) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sachdeo_2002.pdf` | Sachdeo RC et al., Topiramate and phenytoin pharmacokineti…, Epilepsia (2002) | pgx | 7 | [10.1046/j.1528-1157.2002.41701.x](https://doi.org/10.1046/j.1528-1157.2002.41701.x) | [12102670](https://www.ncbi.nlm.nih.gov/pubmed/12102670) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Stöllberger_2016.pdf` | Stöllberger C et al., Interactions between non-vitamin K oral…, Epilepsy research (2016) | pgx | 7 | [10.1016/j.eplepsyres.2016.06.003](https://doi.org/10.1016/j.eplepsyres.2016.06.003) | [27450623](https://www.ncbi.nlm.nih.gov/pubmed/27450623) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Atasayar_2016.pdf` | Atasayar G et al., Association of MDR1, CYP2D6, and CYP2C1…, Journal of the neurological… (2016) | pgx | 5 | [10.1016/j.jns.2016.05.019](https://doi.org/10.1016/j.jns.2016.05.019) | [27288795](https://www.ncbi.nlm.nih.gov/pubmed/27288795) | metadata signals extractable PGX data (CYP2D6) |
| `Jogamoto_2017.pdf` | Jogamoto T et al., Add-on stiripentol elevates serum valpr…, Epilepsy research (2017) | pgx | 5 | [10.1016/j.eplepsyres.2016.12.014](https://doi.org/10.1016/j.eplepsyres.2016.12.014) | [28081475](https://www.ncbi.nlm.nih.gov/pubmed/28081475) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-09-12T03:04:24.177804+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2015 | relevant | 10 | 0 | The title confirms a PK/PD modeling study of topiramate, but the provided evidence contains no numeric parameter values. |
| PGx | Belcastro_2010 | not_relevant | 0 | 0 | The study investigates the effect of topiramate on homocysteine levels and mentions MTHFR polymorphisms, but it does not report how a gene variant changes the pharmacokinetic or pharmacodynamic parameters of topiramate itself. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in mice where topiramate is a co-administered comparator, and no quantitative PK parameters (CL, V, etc.) for topiramate are reported. |
| PD | Citraro_2016 | not_relevant | 1 | 0 | The paper reports qualitative potentiation of topiramate's anticonvulsant effect by cannabinoid agonists and confirms it is pharmacodynamic (no PK change), but it does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response curves for topiramate. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | The study focuses on eslicarbazepine acetate, not topiramate. |
| PD | Falcão_2012 | not_relevant | 0 | 0 | The paper focuses on eslicarbazepine acetate, not topiramate. |
| popPK | Girgis_2010 | relevant | 10 | 0 | The title confirms a PK/PD study of topiramate in children, but the provided evidence contains no numeric parameter values. |
| PD | Girgis_2010 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to verify the presence of numeric pharmacodynamic parameters or exposure-response relationships. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general review introduction summarizing the field of pharmacogenetics for obesity drugs and does not report specific gene-variant effects on topiramate PK/PD parameters. |
| popPK | Honybun_2026 | irrelevant | 0 | 0 | The study reports neurocognitive outcomes in children exposed to topiramate in utero, not pharmacokinetic parameters. |
| PGx | Jaisupa_2025 | not_relevant | 0 | 0 | The study investigates the effect of CYP2C19 genotypes on the metabolism of cannabidiol (CBD), not topiramate. |
| PGx | Jogamoto_2017 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects (CYP2C19) on valproate pharmacokinetics, not topiramate. |
| popPK | Klein_2026 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing psychotherapy outcomes (PTSD/AUD symptoms) and does not report any pharmacokinetic parameters for topiramate. |
| PGx | Kotake_2025 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects on clinical efficacy (drinking outcomes) and safety, not on pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Kranzler_2016 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on a behavioral outcome (drinking) and a psychological mediator (self-efficacy), not on a pharmacokinetic or pharmacodynamic parameter of topiramate. |
| PGx | Kranzler_2018 | not_relevant | 0 | 0 | The paper is a general review of alcohol use disorder treatment and explicitly states there is insufficient evidence for pharmacogenetics in this context, without reporting specific PK/PD effects of topiramate. |
| PGx | Kranzler_2021 | not_relevant | 0 | 0 | The paper reports a null result for the pharmacogenomic effect on clinical outcomes (PD), stating the SNP does not moderate therapeutic effects. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study focuses on lamotrigine pharmacokinetics in an animal model, and topiramate is only used as a comparator drug for efficacy testing without any reported PK parameters. |
| PD | Kumar_2020 | not_relevant | 1 | 0 | The paper reports a binary resistance response to a single fixed dose of topiramate (300 mg/kg) in an animal model, without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study for Alzheimer's disease that identifies topiramate as a potential candidate based on gene expression signatures, but it does not report any pharmacogenomic effects on topiramate's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lim_2016 | relevant | 10 | 0 | The title confirms a PK/PD modeling study for topiramate, but the provided evidence contains only the title and no numeric parameter values. |
| PGx | Lin_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of oxcarbazepine (MHD), not topiramate, and reports that topiramate co-administration did not significantly influence MHD clearance. |
| PGx | Louveau_2023 | not_relevant | 4 | 8 | The paper reports differences in clinical efficacy and tolerability (PD outcomes) based on genetic subtype, but does not report fitted pharmacokinetic parameters or quantitative pharmacodynamic effect sizes. |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (perampanel's effect on topiramate clearance) and demographic covariates, but does not report any pharmacogenomic effects (gene variants/genotypes) on topiramate PK/PD. |
| popPK | Methaneethorn_2022 | irrelevant | 2 | 0 | The paper is a simulation study that uses parameters from other published models but does not report original quantitative PK parameter values for topiramate in the provided evidence. |
| popPK | Morgan_2004 | irrelevant | 0 | 0 | The paper focuses on the mechanism of carbonic anhydrase inhibitors on the AE1 exchanger and does not report pharmacokinetic parameters for topiramate. |
| PD | Morgan_2004 | not_relevant | 0 | 0 | The paper focuses on the mechanism of carbonic anhydrase inhibitors on the AE1 exchanger and does not report pharmacokinetic or pharmacodynamic modeling or exposure-response relationships for topiramate. |
| PGx | Morley_2018 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial examining pharmacodynamic outcomes (drinking behavior) and does not report pharmacokinetic parameters or fitted pharmacogenomic effect sizes. |
| PGx | Morley_2024 | not_relevant | 0 | 0 | The study reports that the examined polymorphisms had no effect on treatment response, and the outcomes measured were clinical efficacy endpoints (drinking days, BMI) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nakashima_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of valproic acid (VPA), with topiramate mentioned only as a co-administered covariate in the PD model. |
| PD | Nakashima_2015 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for valproic acid (VPA), not topiramate; topiramate is only mentioned as a covariate in the VPA model. |
| PGx | Nakashima_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of valproic acid (VPA), not topiramate; topiramate is only mentioned as a covariate for co-administration. |
| PGx | Nallani_2003 | not_relevant | 0 | 0 | The paper investigates the mechanism of topiramate-induced CYP3A4 induction in vitro but does not report any pharmacogenomic effects (gene variants) on topiramate's PK or PD parameters. |
| popPK | Narayanasamy_2019 | irrelevant | 2 | 0 | The paper describes an analytical method (LC-MS/MS) for quantification in rodents, but the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for topiramate. |
| PD | Narayanasamy_2019 | not_relevant | 0 | 0 | The paper describes an analytical method (LC-MS/MS) for quantifying topiramate and oxycodone, not a pharmacodynamic or exposure-response analysis. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rufinamide and its interactions with other drugs, not on the pharmacogenomics of topiramate. |
| PGx | Pisano_2015 | not_relevant | 0 | 0 | The paper describes clinical outcomes (seizure control) in patients with KCNQ2 mutations but does not report pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, ED50) for topiramate. |
| PGx | Sabers_2008 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiepileptics and contraceptives, not pharmacogenomic effects of gene variants on topiramate PK/PD. |
| PGx | Sachdeo_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between topiramate and phenytoin, not the effect of genetic variants on pharmacokinetics. |
| PGx | Sakamoto_2017 | not_relevant | 0 | 0 | The paper reports a clinical case of therapeutic response to topiramate in a patient with a GNAO1 mutation, but it does not report changes in pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) caused by the genotype. |
| PGx | Sarayani_2023 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between topiramate and oral contraceptives, not a pharmacogenomic effect. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | The paper is a clinical review of topiramate's efficacy in substance-related disorders and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Soyka_2015 | not_relevant | 0 | 0 | The paper is a narrative review of alcoholism pharmacotherapy that mentions topiramate and pharmacogenetics generally, but does not report specific gene-variant effects on topiramate PK or PD parameters. |
| PGx | Stöllberger_2016 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between NOACs and AEDs, not pharmacogenomic effects of gene variants on topiramate PK/PD. |
| popPK | Sun_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel modulation, not a pharmacokinetic study, and reports no disposition parameters for topiramate. |
| popPK | Tompson_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of retigabine, with topiramate serving only as a co-administered drug in an interaction study, and no quantitative PK parameters for topiramate are reported. |
| popPK | Vashi_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cenobamate, with topiramate mentioned only as a co-administered drug that did not significantly affect cenobamate's disposition. |
| popPK | Wei_2023 | relevant | 10 | 0 | The title indicates a population PK study of topiramate, but the provided evidence contains only the title and no numeric parameter values. |
| PGx | Yorns_2013 | not_relevant | 0 | 0 | The paper discusses the relationship between mitochondrial dysfunction and migraine, mentioning topiramate only as a therapeutic agent, without reporting any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | van_2018 | relevant | 8 | 2 | The paper is a supplement to a PK study that includes a validation section for topiramate (Girgis et al. 2010), but the specific numeric parameter values are not present in the provided text, which cuts off before the topiramate section. |
| PGx | Łukawski_2021 | not_relevant | 0 | 0 | The paper is a general review of drug resistance mechanisms in epilepsy and does not report specific pharmacogenomic effects on topiramate PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_topiramate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
