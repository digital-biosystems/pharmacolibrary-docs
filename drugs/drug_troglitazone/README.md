<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;troglitazone&quot;}]"></div>

# troglitazone

- **generic name:** troglitazone
- **ATC codes:** `A10BG01`
- **DrugBank:** [DB00197](https://go.drugbank.com/drugs/DB00197) · **PubChem:** [CID 5591](https://pubchem.ncbi.nlm.nih.gov/compound/5591)
- **molar mass:** 441.54 g/mol (C24H27NO5S) — DrugBank
- **groups:** approved, withdrawn

## About

Troglitazone is a thiazolidinedione anti-diabetic medicine that was used to lower blood sugar in people with diabetes. It has been withdrawn from the market because it caused serious liver damage in some patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7844989](https://www.wikidata.org/wiki/Q7844989) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:21 | 2:41 | 0/0/0 | 2/3/0 | 0/0/0 | 182,781/7,734 | einfracz / qwen3.8-27b | 13 | 6/11 | 11/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [Bouwmeester_2023_viability](drugs/drug_troglitazone/pd_Bouwmeester_2023_viability.md) | cell viability ← troglitazone · inhibition effect | — | Bouwmeester MC et al., Drug Metabolism of Hepatocyte-like Orga…, Molecules (Basel, Switzerla… (2023) | [10.3390/molecules28020621](https://doi.org/10.3390/molecules28020621) |
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2024_hepatic_bile_acid_efflux](drugs/drug_troglitazone/pd_de_2024_hepatic_bile_acid_efflux.md) | hepatic bile acid efflux ← troglitazone · direct linear effect | — | de Bruijn VMP et al., From hazard to risk prioritization: a c…, Archives of toxicology (2024) | [10.1007/s00204-024-03775-6](https://doi.org/10.1007/s00204-024-03775-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2004_PPARgamma_agonistic_activity](drugs/drug_troglitazone/pd_Chen_2004_PPARgamma_agonistic_activity.md) | PPARgamma agonistic activity ← troglitazone · stimulation effect | — | Chen Q et al., A yeast two-hybrid technology-based sys…, Analytical biochemistry (2004) | [10.1016/j.ab.2004.09.004](https://doi.org/10.1016/j.ab.2004.09.004) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Kim_2001_long_chain_fatty_acid_incorporation_into_cellular_lipids](drugs/drug_troglitazone/pd_Kim_2001_long_chain_fatty_acid_incorporation_into_cellular_l.md) | long chain fatty acid incorporation into cellular lipids ← troglitazone · inhibition effect | — | Kim JH et al., Expression and characterization of reco…, The Journal of biological c… (2001) | [10.1074/jbc.M010793200](https://doi.org/10.1074/jbc.M010793200) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Shimomura_2004_KATP](drugs/drug_troglitazone/pd_Shimomura_2004_KATP.md) | KATP channel currents ← troglitazone · direct sigmoid Emax (Hill) effect | — | Shimomura K et al., Fenofibrate, troglitazone, and 15-deoxy…, The Journal of pharmacology… (2004) | [10.1124/jpet.104.067249](https://doi.org/10.1124/jpet.104.067249) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=troglitazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `SLC29A1` inhibitor | DrugBank actor |
| distribution | liver | `SLC29A1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP3A4` inducer, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `GSTP1` unknown, `SLCO1B1` inhibitor, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A4` substrate, `UGT1A6` inhibitor/substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer, `GSTP1` unknown | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inducer, `CYP3A5` inhibitor, `UGT1A1` substrate, `UGT1A6` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACSL4 (inhibitor), ESRRA (inverse agonist), ESRRG (inverse agonist), PPARA (unknown), PPARD (unknown), PPARG (regulator), PPARG (target), SERPINE1 (target), UGT1A10 (substrate), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 233 matched, 139 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kato_2005.pdf` | Kato M et al., The quantitative prediction of in vivo…, Drug metabolism and pharmac… (2005) | pd | 5 | [10.2133/dmpk.20.236](https://doi.org/10.2133/dmpk.20.236) | [16141603](https://www.ncbi.nlm.nih.gov/pubmed/16141603) | metadata signals extractable PD data (Emax) |
| `Loi_1999.pdf` | Loi CM et al., Clinical pharmacokinetics of troglitazo…, Clinical pharmacokinetics (1999) | pd | 5 | [10.2165/00003088-199937020-00001](https://doi.org/10.2165/00003088-199937020-00001) | [10496299](https://www.ncbi.nlm.nih.gov/pubmed/10496299) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Sahi_2000.pdf` | Sahi J et al., Effect of troglitazone on cytochrome P4…, Xenobiotica; the fate of fo… (2000) | pd | 5 | [10.1080/004982500237668](https://doi.org/10.1080/004982500237668) | [10752642](https://www.ncbi.nlm.nih.gov/pubmed/10752642) | metadata signals extractable PD data (EC50) |
| `Chothe_2021.pdf` | Chothe PP et al., Function and Expression of Bile Salt Ex…, Drug metabolism and disposi… (2021) | pd | 4 | [10.1124/dmd.120.000057](https://doi.org/10.1124/dmd.120.000057) | [33472814](https://www.ncbi.nlm.nih.gov/pubmed/33472814) | metadata signals extractable PD data (IC50) |
| `Katoh_2000.pdf` | Katoh Y et al., Inhibitory action of troglitazone, an i…, Japanese journal of pharmac… (2000) | pd | 4 | [10.1254/jjp.82.102](https://doi.org/10.1254/jjp.82.102) | [10877527](https://www.ncbi.nlm.nih.gov/pubmed/10877527) | metadata signals extractable PD data (IC50) |
| `Lee_1996.pdf` | Lee K et al., Inhibition of KATP channel activity by…, European journal of pharmac… (1996) | pd | 4 | [10.1016/0014-2999(96)00619-x](https://doi.org/10.1016/0014-2999(96)00619-x) | [8905344](https://www.ncbi.nlm.nih.gov/pubmed/8905344) | metadata signals extractable PD data (IC50) |
| `Morita_2016.pdf` | Morita M et al., Inhibition of plasma lipid oxidation in…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmcl.2016.10.033](https://doi.org/10.1016/j.bmcl.2016.10.033) | [27777006](https://www.ncbi.nlm.nih.gov/pubmed/27777006) | metadata signals extractable PD data (IC50) |
| `Sears_2007.pdf` | Sears DD et al., Selective modulation of promoter recrui…, Biochemical and biophysical… (2007) | pd | 4 | [10.1016/j.bbrc.2007.10.057](https://doi.org/10.1016/j.bbrc.2007.10.057) | [17963725](https://www.ncbi.nlm.nih.gov/pubmed/17963725) | metadata signals extractable PD data (EC50) |
| `Young_1998.pdf` | Young MA et al., Establishing the dose response curve fo…, Annals of medicine (1998) | pd | 4 | [10.3109/07853899808999405](https://doi.org/10.3109/07853899808999405) | [9667800](https://www.ncbi.nlm.nih.gov/pubmed/9667800) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `DiTusa_2000.pdf` | DiTusa L et al., Potential interaction between troglitaz…, Journal of clinical pharmac… (2000) | pgx | 7 | [10.1046/j.1365-2710.2000.00288.x](https://doi.org/10.1046/j.1365-2710.2000.00288.x) | [10971778](https://www.ncbi.nlm.nih.gov/pubmed/10971778) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Enokizono_2007.pdf` | Enokizono J et al., Involvement of breast cancer resistance…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.012567](https://doi.org/10.1124/dmd.106.012567) | [17093005](https://www.ncbi.nlm.nih.gov/pubmed/17093005) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Lim_2005.pdf` | Lim HK et al., Automated screening with confirmation o…, Drug metabolism and disposi… (2005) | pgx | 7 | [10.1124/dmd.104.003475](https://doi.org/10.1124/dmd.104.003475) | [15860655](https://www.ncbi.nlm.nih.gov/pubmed/15860655) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Scheen_2007.pdf` | Scheen AJ, Pharmacokinetic interactions with thiaz…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746010-00001](https://doi.org/10.2165/00003088-200746010-00001) | [17201456](https://www.ncbi.nlm.nih.gov/pubmed/17201456) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Watanabe_2002.pdf` | Watanabe Y et al., Troglitazone glucuronidation in human l…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.12.1462](https://doi.org/10.1124/dmd.30.12.1462) | [12433820](https://www.ncbi.nlm.nih.gov/pubmed/12433820) | metadata signals extractable PGX data (UGT1A8, PK/PD-context) |

<sub>queue written 2026-10-07T16:20:12.758155+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals related to obesity and diabetes, and does not report any pharmacokinetic parameters for troglitazone. |
| PD | Auerbach_2016 | not_relevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals and does not report any pharmacodynamic or exposure-response analysis for troglitazone. |
| popPK | Barthel_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and enzyme activity in cell lines, reporting no pharmacokinetic parameters. |
| popPK | Benzait_2026 | irrelevant | 0 | 0 | The paper is a review of liver-on-a-chip models and does not report pharmacokinetic parameters for troglitazone. |
| PD | Benzait_2026 | not_relevant | 0 | 0 | The paper is a review of Liver-on-a-Chip models and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PD | Billo_2025 | not_relevant | 0 | 0 | The paper focuses on the cross-reactivities of bile acid reabsorption inhibitors (elobixibat, linerixibat, maralixibat, odevixibat) and does not contain any pharmacodynamic or exposure-response data for troglitazone. |
| PGx | Bircsak_2021 | not_relevant | 0 | 0 | The paper describes a liver-on-a-chip model for toxicity screening and does not investigate the impact of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of troglitazone. |
| popPK | Bouwmeester_2023 | irrelevant | 0 | 0 | The study is an in vitro toxicity screening using troglitazone as a hepatotoxicant probe to report EC50 values, not a pharmacokinetic study of troglitazone disposition. |
| PGx | Bouwmeester_2023 | not_relevant | 0 | 0 | The paper evaluates in vitro toxicity and metabolism in organoid models but does not report any pharmacogenomic effect (gene variant/genotype) on troglitazone PK or PD parameters. |
| popPK | Catto_2025 | irrelevant | 0 | 0 | The study investigates netoglitazone (not troglitazone) in a mouse model for Alzheimer's disease, focusing on amyloid-beta reduction rather than pharmacokinetic parameters. |
| PD | Catto_2025 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects (low vs. high dose) on plaque count and size but does not provide numeric concentration-effect curves, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Chang_2007 | not_relevant | 2 | 1 | The paper is a review discussing hepatotoxicity generally and mentions troglitazone only to compare liver toxicity levels with newer thiazolidinediones; it does not report specific gene variants affecting troglitazone PK/PD parameters. |
| PD | Chang_2013 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and Rfree ratios for troglitazone, which are static potency metrics rather than a dynamic pharmacodynamic (exposure-response) model with parameters like Emax or EC50 describing the time-course of effect. |
| PGx | Chang_2013 | not_relevant | 0 | 0 | The paper investigates in vitro enzyme inhibition (UGT1A1, etc.) to predict hyperbilirubinemia for troglitazone, but does not report pharmacogenomic effects on troglitazone PK/PD parameters. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring receptor binding affinities (EC50/IC50) in a yeast system, not a pharmacokinetic study of troglitazone. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper uses troglitazone to test the toxicity of a liver organoid-on-chip model but does not investigate pharmacogenomic variations or genotype-specific effects on troglitazone's PK/PD parameters. |
| PD | Chothe_2021 | not_relevant | 0 | 0 | The paper focuses on the function and expression of the Bile Salt Export Pump (BSEP) in human hepatocytes and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PGx | Della-Morte_2014 | not_relevant | 2 | 0 | The provided text is an abstract/introduction that discusses the general importance of pharmacogenomics for thiazolidinediones and mentions genetic variability in side effects, but it does not report specific data, fitted effect sizes, or clear statements linking a specific gene variant to a PK/PD parameter of troglitazone. |
| PGx | Denninger_2007 | not_relevant | 0 | 0 | The paper investigates the effect of troglitazone on Trypanosoma brucei differentiation in a protozoan model, not human pharmacokinetics or pharmacodynamics influenced by genetic variants. |
| PGx | DiTusa_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between troglitazone and atorvastatin but does not investigate any gene variants or genetic factors. |
| PGx | Dimaraki_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction where troglitazone induces CYP3A4, altering dexamethasone PK, but does not study the effect of any specific genetic variant or genotype on troglitazone or dexamethasone. |
| popPK | Dirven_2021 | irrelevant | 0 | 0 | The paper is a systematic review focused on the prediction of drug-induced liver injury (DILI) and toxicology, not on quantitative pharmacokinetic parameter estimation. |
| PD | Dirven_2021 | not_relevant | 1 | 0 | The paper is a systematic review of preclinical and clinical safety data (DILI) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters for troglitazone. |
| PGx | Doshi_2011 | not_relevant | 0 | 0 | The paper develops a drug screening assay for CYP3A4 inhibition/induction and does not investigate the impact of a specific gene variant on the PK/PD of troglitazone. |
| popPK | Ekins_2002 | irrelevant | 0 | 0 | The paper describes a pharmacophore model for the pregnane X receptor (PXR) and lists troglitazone only as an example of a potent ligand; it does not report any pharmacokinetic parameters. |
| PD | Ekins_2002 | not_relevant | 1 | 0 | The paper uses literature EC50 values to build a pharmacophore model and qualitatively classifies troglitazone as a potent ligand, but it does not report specific numeric PD parameters or an exposure-response curve for troglitazone in this text. |
| PGx | Enokizono_2007 | not_relevant | 3 | 10 | The study investigates transporter function (BCRP) on the pharmacokinetics of troglitazone sulfate, not the pharmacogenomics (genetic variation in humans) of the parent drug troglitazone. |
| popPK | Felts_2008 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro PPAR-gamma binding activity of sulindac derivatives, using troglitazone only as a reference ligand for displacement assays rather than measuring its pharmacokinetics. |
| PD | Felts_2008 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro activity of sulindac derivatives; troglitazone is only used as a reference ligand in a binding assay, and no PD or exposure-response relationship for troglitazone is reported. |
| PD | Foot_1997 | not_relevant | 1 | 0 | The study reports clinical safety outcomes (glucose levels) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters. |
| PGx | Gan_2008 | not_relevant | 0 | 0 | The paper investigates the in vitro mechanism of reactive metabolite formation using recombinant enzymes and microsomes, but it does not report any pharmacogenomic effect of specific gene variants or genotypes on in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Geci_2026 | irrelevant | 0 | 0 | The paper is a methodological study on DILI prediction using a retrospective analysis of 241 drugs, not a primary PK study reporting quantitative disposition parameters for troglitazone specifically. |
| PD | Geci_2026 | not_relevant | 2 | 1 | The paper uses troglitazone as a case study in a retrospective DILI prediction model, utilizing static Cmax and in vitro IC50 values, but does not report a fitted pharmacodynamic model or extractable PD parameters (e.g., Emax, EC50) for the drug itself. |
| popPK | Goud_1998 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of troglitazone on vascular contractility in rat aortic rings and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Gouni-Berthold_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in vascular smooth muscle cells and does not report pharmacokinetic parameters for troglitazone. |
| PD | Grosser_2021 | not_relevant | 3 | 2 | The paper reports in vitro transporter inhibition (IC50) for troglitazone, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response analysis of the drug's therapeutic effect. |
| popPK | Gunness_2013 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment using cell cultures and does not report any pharmacokinetic disposition parameters for troglitazone. |
| PD | Gunness_2013 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of toxicity sensitivity for troglitazone in 3D vs 2D cultures but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for troglitazone. |
| popPK | Gustafsson_2014 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating metabolic bioactivation and cytotoxicity, not a pharmacokinetic study reporting quantitative disposition parameters for troglitazone. |
| PD | Gustafsson_2014 | not_relevant | 1 | 0 | The paper reports in vitro cytotoxicity EC50 values for a panel of drugs, including troglitazone, but does not provide specific numeric PD parameters for troglitazone in the text, nor does it describe an in vivo exposure-response or dose-response relationship. |
| PGx | Gustafsson_2014 | not_relevant | 0 | 0 | The paper describes in vitro toxicity assays using cell lines to correlate with human liver injury and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study is a neuropharmacology investigation in rats using rosiglitazone, with no pharmacokinetic data or analysis for troglitazone. |
| popPK | Hafez_2024 | irrelevant | 0 | 0 | The paper is a review on the pharmacological activities of *Acacia nilotica* and does not study troglitazone or report any PK parameters. |
| PD | Hafez_2024 | not_relevant | 0 | 0 | The paper is a review of the pharmacological attributes of Acacia (Vachellia nilotica) and does not contain any data, analysis, or mention of troglitazone or its pharmacodynamics. |
| PGx | Hartley_2006 | not_relevant | 0 | 0 | The paper studies structural analogs of troglitazone and uses troglitazone as a control agonist to characterize cell line responses; it does not report a genetic variant affecting troglitazone's PK or PD. |
| PGx | Hawley_2010 | not_relevant | 0 | 0 | The paper describes a cellular mechanism of AMPK activation by troglitazone and does not report pharmacokinetic or pharmacodynamic changes in humans related to a gene variant/genotype/phenotype. |
| PGx | He_2001 | not_relevant | 2 | 0 | The paper describes in vitro CYP3A kinetics and in vivo induction studies but does not report genotype-dependent pharmacogenomic effects on PK/PD parameters. |
| popPK | Hewitt_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of cytotoxicity and enzyme activity correlations, not a pharmacokinetic study, and reports no quantitative PK parameters. |
| PGx | Hewitt_2002 | not_relevant | 2 | 5 | The study examines the correlation between individual enzyme activities and drug cytotoxicity (PD/toxicity) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Hirose_1999 | not_relevant | 0 | 0 | The paper focuses on chemoprevention of carcinogenesis and does not report any pharmacogenomic analysis or genotype-dependent changes in the pharmacokinetics or pharmacodynamics of troglitazone. |
| popPK | Hodis_2006 | irrelevant | 0 | 0 | The study evaluates the effect of troglitazone on subclinical atherosclerosis (IMT) and metabolic markers, but it does not report any quantitative pharmacokinetic disposition parameters. |
| popPK | Hosokawa_1999 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of intestinal ion transport, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Hosomi_2010 | not_relevant | 0 | 0 | The study describes an in vitro hepatotoxicity screening method using troglitazone as a positive control and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Huang_2016 | not_relevant | 1 | 1 | The paper describes an in vitro assay system for hepatotoxicity but does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Kato_2005 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Kato_2005 | not_relevant | 0 | 0 | The paper focuses on in vitro-to-in vivo extrapolation (IVIVE) for enzyme induction and does not report specific pharmacodynamic or exposure-response data for troglitazone. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| popPK | Kawasaki_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel inhibition, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CKD-519, a CETP inhibitor, and does not involve troglitazone. |
| PD | Kim_2016 | not_relevant | 0 | 0 | The paper reports pharmacodynamic data for CKD-519, not troglitazone. |
| PGx | Knotts_2009 | not_relevant | 3 | 5 | The paper examines the transcriptional regulation of the TUSC5 gene by troglitazone and GW1929 in a PPARgamma agonist context, but it does not report how a specific gene variant or phenotype affects the pharmacokinetic or pharmacodynamic parameters of troglitazone itself. |
| popPK | Lee_1996 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Li_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological mechanism study of LY-171883 on ion channels, and troglitazone is used only as a comparator agent without any pharmacokinetic data. |
| PD | Li_2002 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of LY-171883; troglitazone is only mentioned as a single-point qualitative comparison (decreased channel activity) without any dose-response curve or numeric PD parameters. |
| PGx | Lim_2005 | not_relevant | 0 | 0 | The paper describes mechanism-based inactivation of CYP enzymes by troglitazone in microsomes but does not report any genetic variants or their effects on PK/PD parameters. |
| popPK | Lloyd_2002 | irrelevant | 1 | 0 | The study is an in-vitro investigation of hepatotoxicity (cytotoxicity), not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a clinical review of glucose-lowering agents in diabetes and CKD, not a pharmacokinetic study of troglitazone. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for troglitazone. |
| PD | Loi_1999 | not_relevant | 0 | 0 | The paper focuses on clinical pharmacokinetics (ADME) and does not report pharmacodynamic or exposure-response relationships with numeric PD parameters. |
| popPK | Majeed_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of TRP channels using troglitazone as a comparator/modulator, not a pharmacokinetic study of troglitazone. |
| popPK | Mallillin_2026 | irrelevant | 0 | 0 | The paper is a general review of allometric scaling methodologies and does not contain any specific pharmacokinetic data or parameters for troglitazone. |
| PD | Mallillin_2026 | not_relevant | 0 | 0 | The paper is a review of allometric scaling for PK prediction and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PD | Mansour_2018 | not_relevant | 0 | 0 | The paper focuses on the combination of stearidonic acid and docetaxel; troglitazone is only used as a positive control for PPARγ expression and no PD parameters or dose-response curves for troglitazone are reported. |
| PGx | Matsumoto_2011 | not_relevant | 0 | 0 | The paper discusses benzbromarone hepatotoxicity and only mentions troglitazone as a mechanistic comparison, providing no data on troglitazone's pharmacogenomics. |
| PD | Miyashita_2022 | not_relevant | 0 | 0 | Troglitazone is used only as a negative control in an in vitro lens opacity study; no exposure-response or dose-response PD parameters for troglitazone are reported. |
| PD | Morita_2016 | not_relevant | 0 | 0 | The paper focuses on the in vitro antioxidant properties of various drugs against lipid oxidation and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for troglitazone. |
| popPK | Noor_2009 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment (Hep G2 cells and rat hepatocytes) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for troglitazone. |
| PD | Noor_2009 | not_relevant | 3 | 2 | The paper reports an EC50 threshold (100 microM) for toxicity classification in an in-vitro assay, but does not provide specific numeric PD parameters (like Emax, specific EC50 values for troglitazone, or dose-response curves) for troglitazone in the provided text. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The study investigates the effect of pioglitazone on CYP3A4 activity and does not report any gene variant or pharmacogenomic data for troglitazone. |
| popPK | Obara_2025 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on HepaRG cell lines for CYP2D6 expression and does not report quantitative pharmacokinetic parameters for troglitazone. |
| PD | Obara_2025 | not_relevant | 0 | 0 | The paper focuses on the development of a CYP2D6-enhanced HepaRG cell model and reports dose-response data for perhexiline (a CYP2D6 substrate) to demonstrate reduced toxicity, but it does not report any pharmacodynamic or exposure-response relationship for troglitazone. |
| PGx | Ogino_2002 | not_relevant | 0 | 0 | The paper investigates the effect of troglitazone on CYP3A isozyme expression in cell lines, rather than the effect of a gene variant on troglitazone's pharmacokinetics or pharmacodynamics. |
| PGx | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates in vitro cell culture models and does not report any genetic variants or pharmacogenomic data. |
| popPK | Prabhu_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study on biotransformation in hepatocytes and does not report quantitative disposition parameters (CL, V, t1/2) for troglitazone. |
| PD | Prabhu_2002 | not_relevant | 3 | 1 | The paper reports qualitative differences in metabolite formation between sensitive and resistant donors based on cytotoxicity EC50s, but does not provide numeric PD parameters or an exposure-response curve for troglitazone itself. |
| PGx | Qosa_2021 | not_relevant | 0 | 0 | The paper characterizes iPSC-hepatocyte models and uses troglitazone for toxicity assays, but does not report genetic variants or genotypes affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The paper focuses on transporter polypharmacology and hit identification, containing no pharmacokinetic data or models for troglitazone. |
| PD | Rafehi_2026 | not_relevant | 0 | 0 | The paper focuses on transporter profiling and hit identification for ABC and SLC transporters, with no mention of troglitazone or any pharmacodynamic exposure-response analysis. |
| PGx | Rubiano_2021 | not_relevant | 0 | 0 | The paper focuses on the reproducibility of liver microphysiological systems for general drug evaluation and does not investigate gene variants or pharmacogenomics. |
| popPK | Rudich_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nelfinavir's effects on adipocytes, using troglitazone as a co-treatment, and contains no pharmacokinetic parameters or quantitative disposition data for troglitazone. |
| popPK | Saha_2010 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assay (MTT) on hepatocytes, not a pharmacokinetic study, and does not report disposition parameters. |
| popPK | Saha_2010_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hepatotoxicity and reactive metabolites, reporting no pharmacokinetic disposition parameters for troglitazone. |
| popPK | Sahi_2000 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Sahi_2000 | not_relevant | 0 | 0 | The paper focuses on the effect of troglitazone on CYP450 enzyme activity in hepatocytes, which is a mechanism of drug-drug interaction or toxicity, not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect. |
| PGx | Savaryn_2022 | not_relevant | 0 | 0 | The paper studies CYP3A4 enzyme induction by troglitazone in hepatocytes, not how a gene variant affects troglitazone PK/PD. |
| PGx | Scheen_2007 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (e.g., with rifampicin and gemfibrozil) and mentions troglitazone only in the context of enzyme metabolism, but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters for troglitazone. |
| popPK | Sears_2007 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Sears_2007 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of PPARgamma promoter recruitment and transcriptional activity, not on pharmacokinetic or pharmacodynamic exposure-response modeling for troglitazone. |
| popPK | Shibata_1999 | irrelevant | 0 | 0 | The paper focuses on the pharmacological profile of JTT-501, and troglitazone is mentioned only as a structural comparator, with no pharmacokinetic parameters reported. |
| PD | Shibata_1999 | not_relevant | 0 | 0 | The paper focuses on the pharmacological profile of JTT-501 and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| popPK | Shipley_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transcription factor crosstalk (PPAR/STAT5) and does not report pharmacokinetic parameters for troglitazone. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, with no mention of troglitazone or pharmacokinetic parameters for it. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (simvastatin, atorvastatin, etc.) and does not contain any data, analysis, or mention of troglitazone. |
| PGx | Su_1999 | not_relevant | 0 | 0 | The paper reports the characterization of an antibody and the drug's effect on receptor expression in cell lines, but does not report a pharmacogenomic effect on PK/PD. |
| popPK | Taskar_2020 | irrelevant | 0 | 0 | The paper is a review of PBPK models for transporter-mediated drug-drug interactions and does not report specific quantitative PK parameters for troglitazone. |
| PD | Taskar_2020 | not_relevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report any pharmacodynamic or exposure-response data for troglitazone. |
| PGx | Tie_2012 | not_relevant | 0 | 0 | The paper focuses on computational modeling to classify CYP3A4 inhibitors and mentions troglitazone only as a chemical example within the testing set, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper is a review of fucoxanthin's anticancer mechanisms and does not report pharmacogenomic effects on troglitazone PK/PD parameters. |
| PGx | Watanabe_2000 | not_relevant | 0 | 0 | The text contains only metadata regarding the GROBID document extraction software, with no content related to troglitazone or pharmacogenomics. |
| PD | Watanabe_2002 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolic kinetics (glucuronidation by UGTs) and does not report any pharmacodynamic or exposure-response relationships for troglitazone. |
| PGx | Watanabe_2002 | not_relevant | 0 | 0 | The paper characterizes enzyme kinetics and interindividual variability in enzyme activity but does not link specific gene variants/genotypes to changes in drug PK or PD parameters. |
| PGx | Watanabe_2003 | not_relevant | 2 | 0 | The study associates a genotype with clinical hepatotoxicity (transaminase elevation) rather than measuring pharmacokinetic parameters (e.g., Cmax, AUC) or specific pharmacodynamic responses to the drug. |
| PGx | Yamamoto_2002 | not_relevant | 0 | 0 | The paper describes general metabolic formation of a toxic metabolite by CYP3A4 in cell lines, but does not report on specific human genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Yamazaki_2000 | not_relevant | 2 | 2 | The study investigates in vitro CYP enzyme inhibition by troglitazone but does not report the effect of specific gene variants/genotypes on PK or PD parameters. |
| PGx | Yokoyama_2018 | not_relevant | 0 | 0 | The study evaluates in vitro cell models for toxicity and reports no gene variant or genotype data affecting troglitazone pharmacokinetics or pharmacodynamics. |
| PGx | Yoshigae_2000 | not_relevant | 0 | 0 | The text describes the GROBID software for extracting information from documents, not a pharmacogenomic study of troglitazone. |
| popPK | Young_1998 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Young_1998_2 | not_relevant | 3 | 2 | The paper reports binding affinity (IC50) for troglitazone at PPARgamma, which is a pharmacological binding parameter, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., effect vs. concentration curve, Emax, or PK/PD fit) for the drug's therapeutic effect. |
| PGx | Yueh_2005 | not_relevant | 0 | 0 | The paper describes a cell-based assay for CYP3A4 induction and inhibition using troglitazone as an inducer but does not report any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhang_1997 | irrelevant | 0 | 0 | The study measures insulin sensitivity and insulin clearance (Ki) in response to troglitazone, not the pharmacokinetic disposition parameters (CL, V, t1/2) of troglitazone itself. |
| popPK | Zheng_2007 | irrelevant | 0 | 0 | The paper investigates the effect of antihypertensive therapy on carotid intima-media thickness in a diabetes trial using troglitazone as an intervention, but does not report pharmacokinetic parameters for troglitazone. |
| PD | Zhou_2016 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetics and hepatic metabolism comparisons between rat strains, with no pharmacodynamic or exposure-response analysis reported. |
| PD | de_2021 | not_relevant | 0 | 0 | The paper focuses on structure-based drug design and crystallography of new PPARγ ligands (tetrazoles), reporting binding affinities (IC50) for these new compounds, but does not report any pharmacodynamic or exposure-response analysis for troglitazone. |
| popPK | de_2024 | irrelevant | 2 | 0 | The study uses troglitazone as one of 18 drugs in a PBK model to predict cholestasis risk, but it does not report specific population PK parameter values (CL, V, Q) for troglitazone; the drug is a substrate for the model, not the subject of a PK parameter estimation study. |
| PGx | van_2013 | not_relevant | 0 | 0 | The study investigates troglitazone as an inhibitor of rosuvastatin transport, not the pharmacokinetic effects of genetic variants on troglitazone itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
