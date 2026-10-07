<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;terfenadine&quot;}]"></div>

# terfenadine

- **generic name:** terfenadine
- **ATC codes:** `R06AX12`
- **DrugBank:** [DB00342](https://go.drugbank.com/drugs/DB00342) · **PubChem:** [CID 5405](https://pubchem.ncbi.nlm.nih.gov/compound/5405)
- **molar mass:** 471.6734 g/mol (C32H41NO2) — DrugBank
- **groups:** approved, withdrawn

## About

Terfenadine was a non-sedating antihistamine used to relieve allergy symptoms such as hay fever. It has been withdrawn from the market because it could cause serious heart rhythm problems, and safer alternatives such as its active metabolite are now used instead.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417909](https://www.wikidata.org/wiki/Q417909) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| terfenadine | parent | 471.673 | C32H41NO2 | DrugBank | [5405](https://pubchem.ncbi.nlm.nih.gov/compound/5405) | Lalonde_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:44 | 7:55 | 0/1/0 | 7/0/0 | 0/0/0 | 269,394/14,066 | einfracz / qwen3.8-27b | 7 | 2/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lalonde_1996_reference](drugs/drug_terfenadine/Terfenadine_Lalonde1996_reference.md) | — | 2-compartment (no model) | 8 | Lalonde RL et al., Population pharmacokinetics of terfenad…, Pharmaceutical research (1996) | [10.1023/a:1016036624935](https://doi.org/10.1023/a:1016036624935) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dresser_2000_QT](drugs/drug_terfenadine/pd_Dresser_2000_QT.md) | QT prolongation ← terfenadine · stimulation effect | — | Dresser GK et al., Pharmacokinetic-pharmacodynamic consequ…, Clinical pharmacokinetics (2000) | [10.2165/00003088-200038010-00003](https://doi.org/10.2165/00003088-200038010-00003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fujii_2012_cell_death](drugs/drug_terfenadine/pd_Fujii_2012_cell_death.md) | cell death ← terfenadine · direct sigmoid Emax (Hill) effect | — | Fujii M et al., Development of recombinant cell line co…, Journal of biomolecular scr… (2012) | [10.1177/1087057112442102](https://doi.org/10.1177/1087057112442102) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hamid_2004_cell_viability](drugs/drug_terfenadine/pd_Hamid_2004_cell_viability.md) | cell viability ← terfenadine · direct sigmoid Emax (Hill) effect | — | Hamid R et al., Comparison of alamar blue and MTT assay…, Toxicology in vitro : an in… (2004) | [10.1016/j.tiv.2004.03.012](https://doi.org/10.1016/j.tiv.2004.03.012) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [McAleer_2019_FPD](drugs/drug_terfenadine/pd_McAleer_2019_FPD.md) | Field potential duration ← terfenadine · indirect response — drug stimulates the production of Field potential duration | — | McAleer CW et al., On the potential of in vitro organ-chip…, Scientific reports (2019) | [10.1038/s41598-019-45656-4](https://doi.org/10.1038/s41598-019-45656-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Nolan_2006_RT](drugs/drug_terfenadine/pd_Nolan_2006_RT.md) | RT interval change ← terfenadine · direct sigmoid Emax (Hill) effect | — | Nolan ER et al., A novel predictive pharmacokinetic/phar…, Journal of pharmacological… (2006) | [10.1016/j.vascn.2005.02.003](https://doi.org/10.1016/j.vascn.2005.02.003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ohtani_1997_QT](drugs/drug_terfenadine/pd_Ohtani_1997_QT.md) | QT interval ← terfenadine · direct Emax (saturable) effect | — | Ohtani H et al., A comparative pharmacokinetic-pharmacod…, The Journal of pharmacy and… (1997) | [10.1111/j.2042-7158.1997.tb06824.x](https://doi.org/10.1111/j.2042-7158.1997.tb06824.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Webster_2001_MAPD](drugs/drug_terfenadine/pd_Webster_2001_MAPD.md) | monophasic action potential duration ← terfenadine · direct Emax (saturable) effect | — | Webster R et al., Pharmacokinetic/pharmacodynamic assessm…, Xenobiotica; the fate of fo… (2001) | [10.1080/00498250110054632](https://doi.org/10.1080/00498250110054632) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=terfenadine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder/regulator, `ORM1` binder/regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (binder), CHRM2 (binder), CHRM3 (target), CHRM4 (binder), CHRM5 (binder), HRH1 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 370 matched, 115 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lalonde_1996.pdf` | Lalonde RL et al., Population pharmacokinetics of terfenad…, Pharmaceutical research (1996) | popPK | 10 | [10.1023/a:1016036624935](https://doi.org/10.1023/a:1016036624935) | [8792418](https://pubmed.ncbi.nlm.nih.gov/8792418) | The paper reports quantitative population pharmacokinetic parameters (Ka, Cl/F, Vc/F, Q/F, Vp/F) for terfenadine in the abstract. |

<sub>queue written 2026-10-07T21:42:16.700014+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arayne_2005 | not_relevant | 0 | 0 | The text discusses grapefruit juice-drug interactions and CYP3A4 protein expression levels, not genetic variants or genotypes. |
| PGx | Bailey_1998 | not_relevant | 0 | 0 | The paper discusses grapefruit juice-drug interactions and mentions terfenadine, but it does not report pharmacogenomic effects (gene variants) on PK parameters. |
| PGx | Brown_2007 | not_relevant | 0 | 0 | The paper evaluates in vitro metabolic clearance prediction methods using terfenadine as a probe substrate but does not investigate pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Cardona_1999 | not_relevant | 1 | 0 | The text discusses food-drug interactions (CYP3A4 inhibition by grapefruit juice) but does not report any genetic variants or genotypes affecting terfenadine PK/PD. |
| PGx | Cataldi_2019 | not_relevant | 0 | 0 | The paper is a review of the cardiac safety of second-generation antihistamines when updosed, mentioning terfenadine only in the historical context of its withdrawal, but it does not report any pharmacogenomic data linking gene variants to terfenadine's PK or PD parameters. |
| PGx | Chen_2013 | not_relevant | 0 | 0 | The paper discusses the use of a terfenadine-derived inhibitor of CYP2J2 for cancer therapy, but it does not report how genetic variants change the pharmacokinetics or pharmacodynamics of terfenadine itself. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This paper is a review of lopinavir/ritonavir pharmacokinetics and uses terfenadine only as a contraindicated drug example for CYP3A4 interactions, without reporting any PK parameters for terfenadine itself. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and mentions terfenadine only as a contraindicated drug due to drug interactions, without reporting any pharmacogenomic effects on terfenadine's PK/PD. |
| PGx | Decker_1998 | not_relevant | 0 | 0 | The paper focuses on the metabolism and CYP3A4 inhibition properties of amprenavir, not the pharmacokinetics of terfenadine. |
| popPK | Dekhuijzen_2002 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of zafirlukast, and terfenadine is only mentioned as a co-administered drug in interaction studies without providing its PK parameters. |
| PGx | Dekhuijzen_2002 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of zafirlukast and mentions an interaction with terfenadine carboxylate, but it does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Desager_1995 | irrelevant | 2 | 0 | This is a review article summarizing PK-PD relationships and does not present original quantitative disposition parameter values (CL, V, etc.) for terfenadine in the provided evidence. |
| popPK | Dresser_2000 | irrelevant | 1 | 0 | This is a general review of CYP3A4 drug interactions and does not report specific quantitative pharmacokinetic parameters (CL, V, ka) for terfenadine. |
| PGx | Dresser_2000 | not_relevant | 2 | 0 | The paper discusses pharmacokinetic interactions involving CYP3A4 inhibition by co-administered drugs, but does not report effects of specific genetic variants or genotypes on terfenadine PK/PD. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (CYP3A4 inhibition) between nefazodone and terfenadine, but does not report any pharmacogenomic effect (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Eseverri_2000 | not_relevant | 0 | 0 | The text discusses general metabolism and drug-drug interactions for terfenadine but does not report specific gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | The paper discusses a food-drug interaction (grapefruit juice), not a pharmacogenomic effect of a gene variant. |
| popPK | Fujii_2012 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study using terfenadine as a positive control for hERG channel inhibition, not a pharmacokinetic study. |
| PGx | Gill_2001 | not_relevant | 0 | 0 | The paper reviews the safety and drug interactions of saquinavir, mentioning terfenadine only as a contraindicated interaction due to CYP3A4 inhibition, but it does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Gillum_1993 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions mediated by CYP3A4 inhibitors/inducers, not pharmacogenomic effects of gene variants on terfenadine PK/PD. |
| PGx | Gras_1999 | not_relevant | 0 | 0 | The paper investigates the cardiac safety (QTc prolongation) of terfenadine in animal models using CYP3A4 inhibition, but it does not report human pharmacogenomic data or genotype-specific PK/PD effects. |
| PGx | Greene_1997 | not_relevant | 1 | 0 | The paper discusses the clinical pharmacokinetics of nefazodone and its interaction with terfenadine via CYP3A4 inhibition, but it does not report any pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| popPK | Hamid_2004 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay comparison using terfenadine as a test compound, not a pharmacokinetic study. |
| PGx | Honig_1994 | not_relevant | 2 | 2 | The paper identifies metabolic phenotypes (poor metabolizers) but does not report specific genetic variants (genotypes) or provide fitted quantitative pharmacogenomic parameters. |
| popPK | Horiuchi_2026 | irrelevant | 1 | 0 | This is an in-vitro mechanistic PK-PD study using a microphysiological system, lacking the specific human or animal population PK parameters (CL, V, Q, ka) required for the screen. |
| PGx | Iwamoto_2001 | not_relevant | 0 | 0 | The study is a preclinical dog model examining drug-drug interactions and cardiac safety, not the effect of human genetic variants on terfenadine PK/PD. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 0 | The study investigates inhibition of terfenadine metabolism by drugs (drugs-drug interactions) in vitro, not genetic variations in terfenadine (drug-gene interactions). |
| PGx | Kenworthy_1999 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and probe substrates of CYP3A4 but does not report any pharmacogenomic effects (gene variants/genotypes) on the pharmacokinetics or pharmacodynamics of terfenadine. |
| popPK | Kidd_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of histamine receptor subtypes in rat ECL cells, where terfenadine is used solely as a specific H1 receptor antagonist tool compound to probe receptor mechanisms, not to determine its own pharmacokinetic parameters. |
| PGx | Lennernäs_2003 | not_relevant | 0 | 0 | The paper discusses the clinical pharmacokinetics of atorvastatin, not terfenadine, and does not report pharmacogenomic effects for terfenadine. |
| PGx | Ling_1995 | not_relevant | 3 | 5 | Study characterizes enzyme involvement (CYP3A4) in microsomes but does not link specific genetic variants to PK/PD parameters. |
| PGx | Malaty_1999 | not_relevant | 1 | 1 | The paper reviews drug-drug interactions with HIV protease inhibitors and mentions terfenadine as a CYP3A4 substrate, but it does not report any pharmacogenomic effects (gene variants/genotypes) on terfenadine's PK or PD parameters. |
| PGx | Masubuchi_2007 | not_relevant | 0 | 0 | The paper discusses mechanism-based inactivation of CYP450 enzymes and mentions terfenadine toxicity in the context of drug-drug interactions, but it does not report pharmacogenomic effects (gene variants) on terfenadine PK/PD parameters. |
| popPK | McAleer_2019 | irrelevant | 2 | 3 | This is an in vitro mechanistic PKPD study using microphysiological systems (organ-on-chip), not a study reporting standard quantitative disposition parameters (CL, V, ka, t1/2) for terfenadine. |
| PGx | Murray_2001 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of CYP enzymes by methylxanthines and does not investigate any genetic variants or their effects on terfenadine pharmacokinetics. |
| popPK | Nolan_2006 | irrelevant | 3 | 0 | The study is a pharmacodynamic evaluation of cardiac repolarization (QT/RT prolongation) in dogs, and while PK/PD models are mentioned, no quantitative disposition parameters (CL, V, t1/2) are provided in the evidence. |
| popPK | Ohtani_1996 | irrelevant | 0 | 0 | The provided evidence contains only metadata regarding a text extraction tool (GROBID) and lacks any scientific content, data, or parameters for terfenadine. |
| popPK | Ohtani_1997 | irrelevant | 2 | 0 | The study is a pharmacodynamic comparison of ECG effects with no report of quantitative PK disposition parameters like clearance or volume of distribution. |
| popPK | Ohtani_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ebastine, using terfenadine only as a comparator agent with no new quantitative PK data reported for it. |
| PGx | Olsen_2014 | not_relevant | 0 | 0 | The study characterizes terfenadine metabolism in locusts to validate the insect as a drug development model, rather than investigating a human pharmacogenomic effect (gene variant genotype/phenotype) on PK/PD parameters. |
| PGx | Ozdemir_1998 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (grapefruit juice and diazepam) and does not report on a pharmacogenomic effect on terfenadine. |
| PGx | Paakkari_2002 | not_relevant | 0 | 0 | The paper discusses general CYP3A4 inhibition and drug interactions causing cardiotoxicity but does not report specific pharmacogenomic effects (gene variants) on terfenadine PK or PD parameters. |
| PGx | Perloff_2003 | not_relevant | 0 | 0 | The paper reports in vitro P-glycoprotein inhibition by terfenadine, not a pharmacogenomic effect of a gene variant on the PK/PD of the drug. |
| PGx | Rodrigues_1995 | not_relevant | 0 | 0 | The paper compares in vitro metabolic rates between recombinant CYP3A4 fusion protein and liver microsomes, but does not report the effect of human genetic variants or genotypes on terfenadine PK/PD. |
| popPK | Sahi_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme induction by troglitazone and does not report quantitative pharmacokinetic parameters for terfenadine. |
| PGx | Selvakumar_2014 | not_relevant | 0 | 0 | The paper focuses on the expression and kinetic characterization of cynomolgus monkey CYP3A4 in vitro, comparing it to human CYP3A4, rather than reporting pharmacogenomic effects of specific gene variants on terfenadine PK/PD parameters. |
| PGx | Shibata_2008 | not_relevant | 1 | 0 | The paper describes a drug-drug interaction (terfenadine-ketoconazole) and an in vitro prediction method, but it does not report a pharmacogenomic effect (gene variant/genotype) on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Shin_2006 | irrelevant | 0 | 0 | The study focuses on the electrophysiological effects of brompheniramine, with terfenadine mentioned only as a background comparison for QT prolongation. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The paper is a review of cardiac adverse effects of prokinetics; it mentions terfenadine only as a co-medication example for QT prolongation risk, without reporting any pharmacogenomic effect on its PK/PD. |
| PGx | Uehara_2019 | not_relevant | 2 | 0 | The paper investigates species differences and inter-individual variability in marmoset P450 activity, not specific human gene variants affecting terfenadine pharmacokinetics. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions for theophylline, mentioning terfenadine only as a drug that did not affect theophylline disposition, and does not report any genetic influence on terfenadine PK/PD. |
| PGx | Varhe_1994 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (ketoconazole/itraconazole) affecting terfenadine pharmacokinetics, not a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | Webster_2001 | irrelevant | 2 | 0 | This is a pharmacodynamic study measuring QT prolongation (MAPD) and free ED50 in dogs, not a study reporting quantitative PK disposition parameters (CL, V, ka) for terfenadine. |
| PGx | Williams_2004 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDI) and specifically mentions terfenadine only as an example of CYP3A4-mediated metabolism, not pharmacogenomics or genetic variants affecting PK/PD. |
| popPK | Wiśniowska_2016 | irrelevant | 2 | 0 | The study is a simulation/modeling exercise predicting DDI effects rather than reporting empirical quantitative disposition parameters (CL, V, etc.) for terfenadine. |
| PGx | Xu_2011 | not_relevant | 0 | 0 | The paper discusses terfenadine-related inhibitors of CYP2J2 in the context of anti-tumor activity, not the pharmacokinetics or pharmacodynamics of terfenadine itself. |
| PGx | Yamazoe_2021 | not_relevant | 0 | 0 | The paper uses a theoretical modeling system to explain CYP3A4 substrate specificity and does not report pharmacogenomic effects of gene variants on drug PK/PD parameters. |
| popPK | Yang_1995 | irrelevant | 0 | 0 | The study reports in-vitro electrophysiological parameters (EC50, channel block mechanism) for terfenadine, not pharmacokinetic disposition parameters. |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | The paper discusses general CYP3A4 inhibition and mentions terfenadine only as an example of a substrate susceptible to drug-drug interactions causing toxicity, without reporting any pharmacogenomic (gene variant/genotype) effects on its PK or PD parameters. |
| popPK | Zünkler_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic electrophysiology investigation of terfenadine's effect on potassium channels, reporting IC50 and Hill coefficients rather than pharmacokinetic disposition parameters. |
| PGx | von_1995 | not_relevant | 1 | 0 | The paper discusses drug-drug interactions between macrolides and terfenadine mediated by CYP3A4, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | von_1995_2 | not_relevant | 2 | 5 | The paper explicitly states there is no evidence of genetic polymorphism for CYP3A and discusses drug-drug interactions rather than pharmacogenomic effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:42 UTC</sub>
