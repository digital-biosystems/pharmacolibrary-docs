<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;indinavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Indinavir_Cressey2011_reference&quot;,&quot;label&quot;:&quot;Cressey_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/Indinavir_Cressey2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Indinavir_Csajka2004_reference&quot;,&quot;label&quot;:&quot;Csajka_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/Indinavir_Csajka2004_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Indinavir_Kappelhoff2005_reference&quot;,&quot;label&quot;:&quot;Kappelhoff_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/Indinavir_Kappelhoff2005_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# indinavir

- **generic name:** indinavir
- **ATC codes:** `J05AE02`
- **DrugBank:** [DB00224](https://go.drugbank.com/drugs/DB00224) · **PubChem:** [CID 5362440](https://pubchem.ncbi.nlm.nih.gov/compound/5362440)
- **molar mass:** 613.7895 g/mol (C36H47N5O4) — DrugBank
- **groups:** approved

## About

Indinavir is a protease inhibitor that was used to treat HIV infection and AIDS.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425490](https://www.wikidata.org/wiki/Q425490) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| indinavir | parent | 613.789 | C36H47N5O4 | DrugBank | [5362440](https://pubchem.ncbi.nlm.nih.gov/compound/5362440) | Cressey_2011, Csajka_2004, Zhou_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:05 | 11:37 | 3/4/0 | 4/0/0 | 0/0/0 | 274,014/18,138 | einfracz / qwen3.8-27b | 7 | 3/2 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cressey_2011_reference](drugs/drug_indinavir/Indinavir_Cressey2011_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cressey TR et al., Influence of body weight on achieving i…, Therapeutic drug monitoring (2011) | [10.1097/FTD.0b013e3182057f6f](https://doi.org/10.1097/FTD.0b013e3182057f6f) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Csajka_2004_reference](drugs/drug_indinavir/Indinavir_Csajka2004_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Csajka C et al., Population pharmacokinetics of indinavi…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.9.3226-3232.2004](https://doi.org/10.1128/AAC.48.9.3226-3232.2004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kappelhoff_2005_reference](drugs/drug_indinavir/Indinavir_Kappelhoff2005_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Kappelhoff BS et al., Population pharmacokinetics of indinavi…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02436.x](https://doi.org/10.1111/j.1365-2125.2005.02436.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brendel_2005_reference](drugs/drug_indinavir/Indinavir_Brendel2005_reference.md) | — | 1-compartment (no model) | 0 | Brendel K et al., Population pharmacokinetic analysis of…, Fundamental & clinical phar… (2005) | [10.1111/j.1472-8206.2005.00315.x](https://doi.org/10.1111/j.1472-8206.2005.00315.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kshirsagar_2007_reference](drugs/drug_indinavir/Indinavir_Kshirsagar2007_reference.md) | — | 1-compartment (no model) | 0 | Kshirsagar SA et al., Improving data reliability using a non-…, Journal of pharmacokinetics… (2007) | [10.1007/s10928-006-9032-2](https://doi.org/10.1007/s10928-006-9032-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Solas_2007_reference](drugs/drug_indinavir/Indinavir_Solas2007_reference.md) | — | 1-compartment (no model) | 0 | Solas C et al., Minimal effect of MDR1 and CYP3A5 genet…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02903.x](https://doi.org/10.1111/j.1365-2125.2007.02903.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2000_reference](drugs/drug_indinavir/Indinavir_Zhou2000_reference.md) | — | 1-compartment (no model) | 8 | Zhou XJ et al., Plasma population pharmacokinetics and…, AIDS (London, England) (2000) | [10.1097/00002030-200012220-00008](https://doi.org/10.1097/00002030-200012220-00008) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2012_none](drugs/drug_indinavir/pd_Chen_2012_none.md) | none ← indinavir · model not identified | — | Chen XW et al., Herb-drug interactions and mechanistic…, Current drug metabolism (2012) | [10.2174/1389200211209050640](https://doi.org/10.2174/1389200211209050640) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ekins_2017_7_nAChR_activity](drugs/drug_indinavir/pd_Ekins_2017_7_nAChR_activity.md) | α7-nicotinic acetylcholine receptor activity ← indinavir · direct Emax (saturable) effect | — | Ekins S et al., α7-Nicotinic acetylcholine receptor inh…, AIDS (London, England) (2017) | [10.1097/QAD.0000000000001488](https://doi.org/10.1097/QAD.0000000000001488) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ekins_2017_7_nAChR_activity_2](drugs/drug_indinavir/pd_Ekins_2017_7_nAChR_activity_2.md) | α7-nicotinic acetylcholine receptor activity ← indinavir · inhibition effect | — | Ekins S et al., α7-Nicotinic acetylcholine receptor inh…, AIDS (London, England) (2017) | [10.1097/QAD.0000000000001488](https://doi.org/10.1097/QAD.0000000000001488) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Koster_2003_2_deoxyglucose_uptake](drugs/drug_indinavir/pd_Koster_2003_2_deoxyglucose_uptake.md) | uptake of 2-deoxyglucose biomarker turnover ← indinavir | — | Koster JC et al., HIV protease inhibitors acutely impair…, Diabetes (2003) | [10.2337/diabetes.52.7.1695](https://doi.org/10.2337/diabetes.52.7.1695) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Koster_2003_insulin_release](drugs/drug_indinavir/pd_Koster_2003_insulin_release.md) | insulin release biomarker turnover ← indinavir | — | Koster JC et al., HIV protease inhibitors acutely impair…, Diabetes (2003) | [10.2337/diabetes.52.7.1695](https://doi.org/10.2337/diabetes.52.7.1695) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Stein_1996_HIV_RNA](drugs/drug_indinavir/pd_Stein_1996_HIV_RNA.md) | HIV RNA ← indinavir · direct sigmoid Emax (Hill) effect | — | Stein DS et al., A 24-week open-label phase I/II evaluat…, AIDS (London, England) (1996) | [10.1097/00002030-199605000-00006](https://doi.org/10.1097/00002030-199605000-00006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=indinavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `SLCO1A2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 387 matched, 147 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 7  ·  extracted 3  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brendel_2005.pdf` | Brendel K et al., Population pharmacokinetic analysis of…, Fundamental & clinical phar… (2005) | popPK | 10 | [10.1111/j.1472-8206.2005.00315.x](https://doi.org/10.1111/j.1472-8206.2005.00315.x) | [15910662](https://pubmed.ncbi.nlm.nih.gov/15910662) | The study is a population pharmacokinetic analysis of indinavir in humans, and all key quantitative parameters (ka, Cl/F, V/F, variability) are explicitly reported in the abstract text provided. |
| `Cressey_2011.pdf` | Cressey TR et al., Influence of body weight on achieving i…, Therapeutic drug monitoring (2011) | popPK | 10 | [10.1097/FTD.0b013e3182057f6f](https://doi.org/10.1097/FTD.0b013e3182057f6f) | [21233689](https://pubmed.ncbi.nlm.nih.gov/21233689) | The abstract explicitly reports final population estimates for indinavir apparent oral clearance (21.3 L/h/70 kg) and volume of distribution (90.7 L/70 kg) with interindividual variability. |
| `Csajka_2004.pdf` | Csajka C et al., Population pharmacokinetics of indinavi…, Antimicrobial agents and ch… (2004) | popPK | 10 | [10.1128/AAC.48.9.3226-3232.2004](https://doi.org/10.1128/AAC.48.9.3226-3232.2004) | [15328077](https://pubmed.ncbi.nlm.nih.gov/15328077) | The abstract explicitly reports quantitative population pharmacokinetic parameters (CL, V, Ka) for indinavir in humans. |
| `Hamidi_2010.pdf` | Hamidi M, Pharmacokinetic properties of indinavir…, Drug development and indust… (2010) | popPK | 10 | [10.1080/03639040903173564](https://doi.org/10.1080/03639040903173564) | [19722914](https://pubmed.ncbi.nlm.nih.gov/19722914) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, MRT) for indinavir in rats with values explicitly provided in the text. |
| `Solas_2007.pdf` | Solas C et al., Minimal effect of MDR1 and CYP3A5 genet…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02903.x](https://doi.org/10.1111/j.1365-2125.2007.02903.x) | [17517050](https://pubmed.ncbi.nlm.nih.gov/17517050) | The study reports a population PK model for indinavir with specific covariate effects (clearance and absorption rate constant differences), but the absolute mean parameter values are likely in tables not fully reproduced in the evidence. |
| `Zhou_2000.pdf` | Zhou XJ et al., Plasma population pharmacokinetics and…, AIDS (London, England) (2000) | popPK | 10 | [10.1097/00002030-200012220-00008](https://doi.org/10.1097/00002030-200012220-00008) | [11153668](https://pubmed.ncbi.nlm.nih.gov/11153668) | The abstract provides explicit numeric values for clearance, volume of distribution, and half-life from a population PK study of indinavir in humans. |
| `Kshirsagar_2007.pdf` | Kshirsagar SA et al., Improving data reliability using a non-…, Journal of pharmacokinetics… (2007) | popPK | 9 | [10.1007/s10928-006-9032-2](https://doi.org/10.1007/s10928-006-9032-2) | [17004125](https://pubmed.ncbi.nlm.nih.gov/17004125) | The paper reports a population PK analysis of indinavir in humans and provides specific percentage differences in clearance and volume for a subpopulation, though absolute parameter values are likely in the unprovided tables/figures. |
| `Pfister_2003.pdf` | Pfister M et al., Population pharmacokinetics and pharmac…, Antimicrobial agents and ch… (2003) | popPK | 9 | [10.1128/AAC.47.1.130-137.2003](https://doi.org/10.1128/AAC.47.1.130-137.2003) | [12499180](https://pubmed.ncbi.nlm.nih.gov/12499180) | The study reports population PK for indinavir but no numeric parameter values are present in the provided evidence. |
| `Snedecor_2006.pdf` | Snedecor SJ et al., Feasibility of weekly HIV drug delivery…, Pharmaceutical research (2006) | popPK | 9 | [10.1007/s11095-006-9026-1](https://doi.org/10.1007/s11095-006-9026-1) | [16832614](https://pubmed.ncbi.nlm.nih.gov/16832614) | The paper develops a quantitative two-compartment pharmacokinetic model for indinavir in humans, but the specific numeric parameter values are likely in figures or tables not fully detailed in the provided abstract snippet. |
| `Piscitelli_1998.pdf` | Piscitelli SC et al., Alteration in indinavir clearance durin…, Pharmacotherapy (1998) | popPK | 7 | not captured | [9855318](https://pubmed.ncbi.nlm.nih.gov/9855318) | The study reports a PK model and clearance changes, but specific numeric parameter values (like CL or V values) are not explicitly listed in the text provided, only AUC changes and trough concentrations. |
| `Samson_2007.pdf` | Samson A et al., The SAEM algorithm for group comparison…, Statistics in medicine (2007) | popPK | 7 | [10.1002/sim.2950](https://doi.org/10.1002/sim.2950) | [17562540](https://pubmed.ncbi.nlm.nih.gov/17562540) | The paper applies a PK modeling algorithm to indinavir data in HIV patients, but the specific numeric parameter values are likely in the illustration section not fully detailed in the provided abstract or do not appear as explicit numbers in the text. |
| `Duval_2005.pdf` | Duval X et al., Indinavir plasma concentration and adhe…, Therapeutic drug monitoring (2005) | popPK | 6 | [10.1097/00007691-200502000-00013](https://doi.org/10.1097/00007691-200502000-00013) | [15665749](https://pubmed.ncbi.nlm.nih.gov/15665749) | The study uses a population PK model to estimate indinavir concentrations, but specific structural parameter values (CL, V, etc.) are not reported in the provided text, only derived Cmin/Cmax metrics. |
| `Mole_2001.pdf` | Mole L et al., A pilot trial of indinavir, ritonavir,…, Journal of acquired immune… (2001) | popPK | 5 | [10.1097/00126334-200107010-00007](https://doi.org/10.1097/00126334-200107010-00007) | [11464145](https://pubmed.ncbi.nlm.nih.gov/11464145) | The study reports qualitative PK comparisons (concentrations vs IC95/EC50) but contains no quantitative disposition parameters (CL, V, t1/2) in the provided text. |

<sub>queue written 2026-10-07T13:01:28.192147+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amano_2007 | irrelevant | 0 | 0 | This is an in-vitro virology study characterizing a new HIV protease inhibitor (GRL-98065), and indinavir is only mentioned as a comparator drug used for resistance selection, with no pharmacokinetic parameters reported. |
| PGx | Baede-van_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving Hypericum perforatum (St. John's Wort) and does not report pharmacogenomic effects based on gene variants or genotypes. |
| PGx | Bertrand_2008 | not_relevant | 2 | 0 | The paper describes statistical methods for detecting genetic effects using indinavir data, but does not report a specific pharmacogenomic association or fitted effect size for indinavir in this context. |
| PGx | Bertrand_2012 | not_relevant | 5 | 0 | The paper proposes statistical testing methods for pharmacogenetic analysis and applies them to indinavir data, but it does not report specific gene variant effects or fitted PK parameter values in the provided text. |
| PGx | Boffito_2003 | not_relevant | 1 | 0 | The paper is a review of general principles of protein binding for antiretrovirals and explicitly mentions investigating AAG variants as a future research priority, but does not report any specific pharmacogenomic findings or effect sizes for indinavir. |
| PGx | Burstein_2000 | not_relevant | 0 | 0 | The paper investigates the effect of St John's Wort on carbamazepine pharmacokinetics and does not involve indinavir or any pharmacogenomic analysis. |
| PGx | Calcagno_2019 | not_relevant | 0 | 0 | The study focuses on Tenofovir and explicitly states that genetic variants were not associated with outcomes; indinavir is only mentioned as a history factor, not as the subject of a pharmacogenomic analysis. |
| PGx | Campbell_2015 | not_relevant | 0 | 0 | The paper investigates the effect of indinavir on methadone metabolism and transport, not the effect of a genetic variant on indinavir PK/PD. |
| PGx | Chandler_2003 | not_relevant | 0 | 10 | The study examines how indinavir affects P-gp expression in PBMCs, which is the inverse of a pharmacogenomic effect on a PK/PD parameter, and it found no difference in this effect based on MDR1 genotype. |
| PGx | Chiou_2014 | not_relevant | 3 | 5 | The study investigates in vitro transport inhibition (OATP1B1/3) as a predictor for hyperbilirubinemia, not the direct effect of a gene variant on the PK/PD of indinavir. |
| PGx | Costa_2021 | not_relevant | 5 | 10 | The study is conducted in canines, not humans, and reports no significant difference in plasma protein binding for indinavir between the ORM1 genotypes. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir pharmacokinetics and clinical use, and indinavir is only mentioned as a co-administered drug with no PK parameter data. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper reviews Lopinavir/ritonavir and does not report any pharmacogenomic data regarding Indinavir. |
| popPK | Decloedt_2015 | irrelevant | 0 | 0 | This is a review discussing CNS penetration of antiretrovirals and does not report original quantitative PK parameters (CL, V, Q, etc.) for indinavir. |
| popPK | Duval_2005 | relevant | 6 | 2 | The study uses a population PK model to estimate indinavir concentrations, but specific structural parameter values (CL, V, etc.) are not reported in the provided text, only derived Cmin/Cmax metrics. |
| popPK | Ekins_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of indinavir's effect on alpha-7 nicotinic acetylcholine receptors, not a pharmacokinetic study. |
| popPK | Ford_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nelfinavir and its metabolite M8; indinavir is mentioned only as a comparator in the introduction hierarchy. |
| popPK | Fumagalli_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of daunorubicin, using indinavir only as a co-administered drug for comparison, not as the subject drug. |
| popPK | Gaucher_2004 | irrelevant | 0 | 0 | The study focuses on the in vitro synthesis, stability, and anti-HIV activity of indinavir prodrugs, not the pharmacokinetic disposition of indinavir itself. |
| PGx | Gill_2001 | not_relevant | 0 | 0 | The paper discusses saquinavir pharmacology and interactions, not pharmacogenomics or indinavir PK/PD. |
| popPK | Gong_2000 | irrelevant | 0 | 0 | The paper reports in vitro virological resistance data for a different drug (BMS-232632), with indinavir serving only as a comparator for cross-resistance, and contains no pharmacokinetic parameters. |
| PGx | Harris_2003 | not_relevant | 1 | 0 | The paper discusses dietary and herbal food-drug interactions (e.g., St John's wort) affecting indinavir, which is a pharmacodynamic/pharmacokinetic interaction but not a pharmacogenomic one (gene variant dependent). |
| PGx | Hayashi_1999 | not_relevant | 0 | 10 | The paper describes a drug-drug interaction (pharmacokinetic alteration of indinavir by HBY-097) rather than a pharmacogenomic effect mediated by a gene variant or genotype. |
| PGx | Hsu_1998 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and drug interactions of ritonavir, including its effect on indinavir, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| PGx | Ioannides_2002 | not_relevant | 2 | 0 | The paper discusses a drug-herb interaction (St. John's Wort induction) affecting indinavir PK, but does not report a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper discusses herb-drug interactions (e.g., St. John's Wort with various drugs) but does not report pharmacogenomic effects for indinavir. |
| PGx | Kelly_2002 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between indinavir/ritonavir and risperidone, but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of indinavir. |
| PGx | Klotz_2002 | not_relevant | 1 | 1 | The paper focuses on drug-drug interactions involving lercanidipine and mentions indinavir only as a general CYP3A4 inhibitor without reporting any pharmacogenomic data or specific PK/PD changes attributable to genetic variants. |
| PGx | Koh_2003 | not_relevant | 0 | 0 | The paper describes the in vitro antiviral activity and structure of a new compound (UIC-94017) and does not report any pharmacogenomic analysis of indinavir. |
| popPK | Koh_2009 | irrelevant | 0 | 0 | The study investigates the in vitro antiviral activity of a novel drug GRL-02031, using indinavir only as a comparator for resistance selection, and does not report any pharmacokinetic parameters. |
| popPK | Koh_2010 | irrelevant | 0 | 0 | The study is an in vitro virology study focusing on HIV-1 resistance to darunavir, with indinavir mentioned only as a comparator drug for resistance profiling, containing no pharmacokinetic data. |
| popPK | Ma_2008 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of efavirenz, reporting only qualitative relative changes (percent increases) in its volume of distribution due to indinavir co-administration, without providing quantitative PK parameters for indinavir itself. |
| PGx | Ma_2008 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (efavirenz and protease inhibitors) and reports no gene variant/genotype data relevant to indinavir's PK/PD. |
| PGx | McKeage_2009 | not_relevant | 0 | 0 | The paper is a review of Darunavir, not Indinavir, and does not report pharmacogenomic effects on PK/PD parameters for Indinavir. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper reviews drug interactions with cisapride and mentions indinavir as a CYP3A4 inhibitor, but does not report any gene variants or genotypes affecting the pharmacokinetic or pharmacodynamic parameters of indinavir. |
| popPK | Mole_2001 | irrelevant | 5 | 0 | The study reports qualitative PK comparisons (concentrations vs IC95/EC50) but contains no quantitative disposition parameters (CL, V, t1/2) in the provided text. |
| PGx | Moore_2000 | not_relevant | 0 | 0 | The paper investigates a herb-drug interaction (St. John's wort induction of CYP3A4) affecting indinavir, but does not report a pharmacogenomic effect (variant/genotype). |
| PGx | Nicolussi_2020 | not_relevant | 0 | 0 | The paper is a review of St. John's Wort interactions (PXR activation) and does not report specific genetic variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| PGx | Niemi_2003 | not_relevant | 0 | 0 | The paper discusses a pharmacokinetic drug-drug interaction with rifampicin, not a pharmacogenomic effect of a gene variant on indinavir. |
| popPK | Panhard_2007 | irrelevant | 0 | 0 | The study reports population PK parameters for lamivudine, stavudine, and zidovudine, while indinavir is only mentioned as the comparator protease inhibitor regimen. |
| PGx | Penzak_2002 | not_relevant | 0 | 0 | The paper discusses the management of hyperlipidemia side effects of protease inhibitors but does not report any pharmacogenomic effects (gene variants) on the PK or PD of indinavir. |
| PGx | Perloff_2003 | not_relevant | 0 | 0 | The paper reports in vitro P-glycoprotein inhibition/induction data for indinavir but does not investigate gene variants or genotypes. |
| popPK | Pfister_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amprenavir, with indinavir serving only as a co-administered protease inhibitor affecting amprenavir's clearance. |
| PGx | Pfister_2002 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A4 inhibition/induction) affecting amprenavir pharmacokinetics, not the effect of a specific gene variant or genotype. |
| popPK | Pfister_2003 | irrelevant | 9 | 0 | The study reports population PK for indinavir but no numeric parameter values are present in the provided evidence. |
| popPK | Piscitelli_1998 | relevant | 7 | 2 | The study reports a PK model and clearance changes, but specific numeric parameter values (like CL or V values) are not explicitly listed in the text provided, only AUC changes and trough concentrations. |
| PGx | Plosker_2003 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics and efficacy of saquinavir regimens and compares them to indinavir, but does not report any pharmacogenomic variants or genotypes affecting drug parameters. |
| popPK | Raugi_2013 | irrelevant | 0 | 0 | The study focuses on HIV-2 protease resistance and viral susceptibility (EC50), not the pharmacokinetic disposition parameters of indinavir. |
| PGx | Rho_2007 | not_relevant | 0 | 0 | The paper discusses general nephrotoxicity of antiretroviral drugs including indinavir but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | The study describes in vitro antiviral activity and combination studies, not pharmacokinetic parameter estimation for indinavir. |
| popPK | Rojas_2003 | irrelevant | 0 | 0 | The paper is a clinical analysis of lipid metabolism (triglycerides) and does not report any pharmacokinetic parameters for indinavir. |
| popPK | Samson_2007 | relevant | 7 | 0 | The paper applies a PK modeling algorithm to indinavir data in HIV patients, but the specific numeric parameter values are likely in the illustration section not fully detailed in the provided abstract or do not appear as explicit numbers in the text. |
| popPK | Snedecor_2006 | relevant | 9 | 3 | The paper develops a quantitative two-compartment pharmacokinetic model for indinavir in humans, but the specific numeric parameter values are likely in figures or tables not fully detailed in the provided abstract snippet. |
| popPK | Stein_1996 | irrelevant | 3 | 0 | The study reports concentration-time metrics (Cmax, Cmin, AUC) but does not provide derived compartmental pharmacokinetic parameters (CL, V, ka) or a quantitative population model. |
| popPK | Stein_1997 | irrelevant | 0 | 0 | The study models CD4 lymphocyte kinetics, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug indinavir. |
| PGx | Stephan_2012 | not_relevant | 0 | 0 | The paper reviews the efficacy and safety of switching to atazanavir and contains no data on pharmacogenomic effects on indinavir. |
| popPK | Taylor_2000 | irrelevant | 0 | 0 | The paper investigates the in-vitro antiviral activity and resistance of the nucleoside analogue dOTC, and indinavir is only mentioned as a comparator agent in combination assays; no pharmacokinetic parameters for indinavir are reported. |
| PGx | Tian_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic interaction between indinavir and midazolam, but does not report any effect of a gene variant or genotype on indinavir's PK or PD parameters. |
| PGx | Tran_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and drug interactions of delavirdine, not on pharmacogenomic variants affecting indinavir. |
| PGx | Vera_2009 | not_relevant | 0 | 0 | The study investigates the cardiovascular effects of hyperbilirubinemia induced by indinavir in mice, not the impact of genetic variants on indinavir's pharmacokinetics or pharmacodynamics. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The study assesses in vitro BCRP inhibition by various anti-HIV drugs, not pharmacogenomic effects on PK/PD parameters of indinavir. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The paper is an in vitro antiviral susceptibility study measuring EC50 values for HIV-2, SIV, and SHIV, and does not report any pharmacokinetic parameters for indinavir. |
| popPK | Xu_2001 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study for reverse transcriptase inhibitors where indinavir is only mentioned as a comparator drug in a multidrug-resistant virus context, containing no PK parameters. |
| PGx | Yu_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and does not report pharmacogenomic effects on indinavir PK/PD parameters. |
| PGx | Zhou_2004_2 | not_relevant | 0 | 0 | The paper discusses herbal modulation of P-glycoprotein and its impact on drug bioavailability (mentioning indinavir qualitatively) but does not report on genetic variants or genotypes (pharmacogenomics) affecting PK/PD parameters. |
| PGx | unknown_2012 | not_relevant | 0 | 0 | The text discusses grapefruit juice interactions with indinavir but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:01 UTC</sub>
