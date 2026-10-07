<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01C&quot;,&quot;href&quot;:&quot;atc/M01C.md&quot;},{&quot;label&quot;:&quot;penicillamine&quot;}]"></div>

# penicillamine

- **generic name:** penicillamine
- **ATC codes:** `M01CC01`
- **DrugBank:** [DB00859](https://go.drugbank.com/drugs/DB00859) · **PubChem:** [CID 5852](https://pubchem.ncbi.nlm.nih.gov/compound/5852)
- **molar mass:** 149.211 g/mol (C5H11NO2S) — DrugBank
- **groups:** approved

## About

Penicillamine is a chelating agent used to treat heavy-metal poisoning such as lead or mercury, Wilson disease, rheumatoid arthritis, cystinuria, and primary biliary cholangitis. It remains an approved medicine and is included on the WHO list of essential medicines, though it can be toxic and requires careful monitoring.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421239](https://www.wikidata.org/wiki/Q421239) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:42 | 21:07 | 0/0/0 | 0/1/0 | 0/0/0 | 784,014/12,700 | einfracz / qwen3.8-27b | 42 | 11/28 | 40/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Smith_2009_none](drugs/drug_penicillamine/pd_Smith_2009_none.md) | none ← penicillamine · model not identified | — | Smith SW, Chiral toxicology: it's the same thing.…, Toxicological sciences : an… (2009) | [10.1093/toxsci/kfp097](https://doi.org/10.1093/toxsci/kfp097) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=penicillamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Copper (chelator), Cystine (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10840 matched, 134 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clerc_1983.pdf` | Clerc D et al., [Pharmacology and mechanism of action o…, Revue du rhumatisme et des… (1983) | popPK | 6 | not captured | [6351235](https://pubmed.ncbi.nlm.nih.gov/6351235) | The paper describes a pharmacokinetic profile (2-compartment model) but contains no quantitative numeric parameter values for penicillamine in the provided evidence. |

<sub>queue written 2026-10-07T01:39:47.446130+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Althaus_1994 | irrelevant | 0 | 0 | The study investigates in-vitro structure-activity relationships of peroxynitrite scavengers and does not report pharmacokinetic parameters for penicillamine. |
| PGx | Babich_1998 | not_relevant | 0 | 0 | The paper studies in vitro toxicity of sodium nitroprusside and mentions S-nitroso-N-acetyl-d-penicillamine as an NO donor, but does not discuss penicillamine pharmacokinetics, pharmacodynamics, or pharmacogenomic effects. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for enzyme replacement therapies (e.g., imiglucerase, avalglucosidase) in lysosomal storage diseases, and does not study the small-molecule drug penicillamine. |
| PGx | Beyeler_1997 | not_relevant | 0 | 0 | The study examines CYP3A4 activity in RA patients treated with penicillamine but reports no genetic variants or pharmacogenomic effects on penicillamine PK/PD. |
| PGx | Bruha_2011 | not_relevant | 0 | 0 | The study analyzes natural history and clinical outcomes in Wilson disease, not the pharmacokinetic or pharmacodynamic parameters of penicillamine. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a pharmacometric modeling method applied to warfarin, neonatal weight, and simulated data, with no data or analysis for penicillamine. |
| popPK | Bélec_2005 | irrelevant | 0 | 0 | The paper is a structural/spectroscopic study of oxytocin analogs, not a pharmacokinetic study of penicillamine drug disposition. |
| popPK | Cassidy_2019 | irrelevant | 0 | 0 | The paper is a mathematical biology study on delay differential equations for population dynamics and does not involve the drug penicillamine. |
| PGx | Chandhok_2016 | not_relevant | 3 | 5 | The paper reports a pharmacodynamic response (cell survival) to the drug D-penicillamine in a cell model, not a change in PK parameters, and focuses on cellular biology rather than clinical pharmacogenomics of the drug's PK. |
| popPK | Chandrakumar_1992 | irrelevant | 0 | 0 | The study focuses on the synthesis and pharmacodynamics (opioid receptor binding, antinociception) of opioid peptide analogs containing penicillamine residues, not the pharmacokinetics of the drug penicillamine. |
| popPK | Chen_1998 | irrelevant | 0 | 0 | The subject drug is [D-Penicillamine(2,5)]enkephalin, a distinct opioid peptide, not the small molecule drug penicillamine. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rivaroxaban, not penicillamine. |
| PGx | Clarkson_1992 | not_relevant | 0 | 10 | The paper reports an association between C4 null alleles and clinical toxicity, which is a safety outcome rather than a pharmacokinetic or pharmacodynamic parameter (such as concentration, clearance, or receptor response). |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for belantamab mafodotin in multiple myeloma patients, not for penicillamine. |
| popPK | Clerc_1983 | irrelevant | 6 | 0 | The paper describes a pharmacokinetic profile (2-compartment model) but contains no quantitative numeric parameter values for penicillamine in the provided evidence. |
| PGx | Das_2006 | not_relevant | 0 | 0 | This is a general clinical review of Wilson disease and does not report specific pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of penicillamine. |
| PGx | Datta_1999 | not_relevant | 0 | 0 | The paper studies NO signaling in mesangial cells using SNAP (a NO donor) and does not report on human pharmacogenomics or PK/PD parameters of the drug penicillamine. |
| popPK | Dawson_1991 | irrelevant | 0 | 0 | The study is a toxicology/malformation study in Xenopus embryos, not a pharmacokinetic study, and contains no PK parameters. |
| PGx | Deshpande_2006 | not_relevant | 0 | 0 | The paper investigates the neurotoxicity of 3-nitropropionic acid and does not involve penicillamine's pharmacokinetics or pharmacodynamics in relation to gene variants. |
| PGx | Dias_2026 | not_relevant | 0 | 0 | The paper is a case report describing clinical diagnosis and treatment response of Wilson's disease, without analyzing pharmacokinetic or pharmacodynamic parameters of penicillamine influenced by genetic variants. |
| PGx | El-Youssef_2003 | not_relevant | 0 | 0 | The paper is a general overview of Wilson disease management, mentioning penicillamine as a treatment but not reporting pharmacogenomic data linking variants to PK/PD parameters. |
| popPK | Eldefrawi_1977 | irrelevant | 0 | 0 | The study is an in-vitro biochemical/molecular binding study on acetylcholine receptors, not a pharmacokinetic study of penicillamine. |
| PGx | Fass_2004 | not_relevant | 0 | 0 | The paper investigates the neurotoxicity of nitric oxide donors, specifically S-nitroso-N-acetyl-dl-penicillamine (SNAP), in cell lines and does not involve human genetic variants or pharmacogenomics. |
| popPK | Ferrero_1999 | irrelevant | 0 | 0 | The study is an in-vitro investigation of S-nitroso-N-acetyl-D,L-penicillamine as a nitric oxide donor, measuring cyclic GMP levels and NO release rates, rather than the pharmacokinetics of the drug penicillamine itself. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of peroxynitrite toxicity and cytoprotection, with penicillamine serving only as a concurrent treatment agent rather than the subject of pharmacokinetic analysis. |
| popPK | Fiorucci_2000 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study focusing on the anti-inflammatory mechanism of a nitric oxide-releasing aspirin derivative, where penicillamine is only mentioned as a comparator for enzyme inhibition and no pharmacokinetic parameters are reported. |
| PGx | Foucher_1989 | not_relevant | 0 | 0 | The paper discusses drug-induced adverse events (respiratory complications) rather than pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Goh_1995 | irrelevant | 0 | 0 | The study investigates ciliary muscle relaxation mechanisms in cats using S-nitroso-N-acetyl-DL-penicillamine (SNAP) as a nitric oxide donor, not the pharmacokinetics of penicillamine itself. |
| PGx | Gomez-Sarosi_2010 | not_relevant | 0 | 0 | The paper studies the mechanism of action of hydrogen peroxide and nitroprusside in melanoma cells; penicillamine is mentioned only as a component of a control compound (SNAP) and no pharmacokinetic or pharmacodynamic parameters of penicillamine itself are reported. |
| PGx | Gromadzka_2024 | not_relevant | 0 | 0 | The paper reviews the pathophysiology of Wilson's Disease and mentions penicillamine-induced autoimmune complications, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of penicillamine. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of iclepertin, not penicillamine. |
| PGx | Hara_2002 | not_relevant | 0 | 0 | The paper studies the down-regulation of CYP2D6 by nitric oxide and does not report pharmacogenomic effects on the PK or PD parameters of the drug penicillamine. |
| PGx | Helliwell_2003 | not_relevant | 0 | 0 | The paper describes a clinical trial regarding ethnic differences in drug discontinuation due to tolerability, not a specific pharmacogenomic mechanism affecting a PK/PD parameter of penicillamine. |
| popPK | Hermenegildo_1998 | irrelevant | 0 | 0 | The study is a mechanistic neurophysiological investigation in rats where S-nitroso-N-acetyl-penicillamine is used merely as a nitric oxide donor, not as the subject drug for pharmacokinetic analysis. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for calaspargase pegol (an enzyme), not penicillamine. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study using a hypothetical model of dolutegravir, not an original pharmacokinetic study of penicillamine. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated pharmacokinetic modeling using 22 datasets, none of which are penicillamine. |
| popPK | Hunt_1993 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study focusing on the formation of disulfide bonds in penicillamine-modified peptides, not a pharmacokinetic study of penicillamine drug disposition. |
| PGx | Ioannidis_1996 | not_relevant | 0 | 0 | The paper describes the chemical release of NO from SNAP under hypoxic conditions, not a pharmacogenomic effect of penicillamine. |
| PGx | Isa_2024 | not_relevant | 0 | 0 | The study is a retrospective cohort of Wilson Disease diagnosis and outcomes in Bahrain, not a pharmacogenomic study analyzing how ATP7B variants affect penicillamine's PK/PD parameters. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not penicillamine. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper analyzes population pharmacokinetics for multiple myeloma drugs (carfilzomib, lenalidomide, melphalan, daratumumab, panobinostat) and does not mention penicillamine. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building using simulated PK data for an unspecified molecule, and does not report pharmacokinetic parameters for penicillamine. |
| PGx | Khan_2006 | not_relevant | 0 | 0 | The paper investigates neuroprotective effects of nitric oxide donors (including SNAP, a penicillamine derivative) in a rat stroke model and contains no information on pharmacogenomics or human PK/PD parameters. |
| popPK | Kotchi_1998 | irrelevant | 0 | 0 | The study is a mechanistic cardiology investigation using SNAP (S-nitroso-penicillamine) as a nitric oxide donor, not a pharmacokinetic study of penicillamine. |
| popPK | Kungolos_1999 | irrelevant | 0 | 0 | The study investigates mercury toxicity in yeast, and penicillamine is used only as a chelating agent, not as the subject of pharmacokinetic analysis. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper describes an automated PK modeling tool (PKGPT) tested on warfarin, theophylline, and tobramycin, and does not involve penicillamine. |
| popPK | Laber_2002 | irrelevant | 0 | 0 | The study investigates vascular biology and soluble guanylyl cyclase expression using S-nitrosopenicillamine (SNAP) as a nitric oxide donor, not the pharmacokinetics of penicillamine. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of PF-06804103, an anti-HER2 antibody-drug conjugate, not penicillamine. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study reports population PK parameters for gotistobart (a monoclonal antibody), not penicillamine. |
| popPK | Lien_1983 | irrelevant | 0 | 0 | The study reports the pharmacokinetic parameters of mercury, not penicillamine, which was only mentioned as a chelation therapy. |
| popPK | Lorca_2003 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on prion proteins and P2X4 receptors where penicillamine is used only as a positive control metal chelator, with no pharmacokinetic parameters reported. |
| PGx | Mantione_2008 | not_relevant | 0 | 0 | The paper studies morphine's effect on CYP2D6/COMT expression in white blood cells and does not involve penicillamine. |
| PGx | Marcus_1995 | not_relevant | 0 | 0 | The paper is a clinical case report on Wilson's disease diagnosis and treatment, containing no data on pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of penicillamine. |
| PGx | McKinney_2004 | not_relevant | 0 | 0 | The paper studies the neurotoxicity of S-nitro-N-acetyl-d,l-penicillamine (SNAP), a chemical stressor, on neurons, and does not report pharmacogenomic effects on the PK or PD of penicillamine as a therapeutic drug. |
| PGx | Mohr_2025 | not_relevant | 0 | 0 | The study examines monitoring strategies for 24-hour urinary copper in Wilson disease but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Nayagam_2023 | not_relevant | 2 | 0 | The paper evaluates the impact of ATP7B genotypes on liver transplant-free survival (a clinical outcome), not a pharmacokinetic or pharmacodynamic parameter of penicillamine. |
| popPK | Nayak_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of marstacimab (a monoclonal antibody), not penicillamine. |
| PGx | Nicastro_2026 | not_relevant | 0 | 0 | The paper reports the use of a penicillamine challenge as a diagnostic test for Wilson disease and discusses a gene variant (ATP7B p.Met665Ile) related to the disease, but it does not report any pharmacokinetic or pharmacodynamic effects of penicillamine that are modified by a patient's genotype. |
| popPK | Olianas_1992 | irrelevant | 0 | 0 | The study characterizes opioid receptors in rat olfactory bulb using D-penicillamine as a structural component of a synthetic agonist, not as a subject drug for PK analysis. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of elafibranor and its metabolite GFT1007, not penicillamine. |
| PGx | Pandit_2002 | not_relevant | 0 | 0 | The paper is a general clinical review of Wilson's disease diagnosis and treatment, reporting no pharmacogenomic data or effects of genetic variants on the pharmacokinetics or pharmacodynamics of penicillamine. |
| PGx | Patil_2013 | not_relevant | 0 | 0 | The paper is a general review of Wilson disease and its management, mentioning penicillamine only as a treatment option, but it does not report any specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Pfeiffer_1998 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting S-nitrosothiols and uses penicillamine derivatives as calibration standards, but does not report pharmacokinetic parameters for penicillamine. |
| PGx | Price_1989 | not_relevant | 4 | 3 | The paper reports a major gene polymorphism affecting RBC thiol methyltransferase activity (an enzyme involved in metabolism) but does not report specific changes in pharmacokinetic (e.g., clearance, half-life) or pharmacodynamic parameters of penicillamine itself. |
| popPK | Psychoyos_1989 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study testing the anti-inflammatory effects of penicillamine on neutrophils, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Rao_2018 | not_relevant | 0 | 0 | The paper is a case report describing the co-occurrence of two genetic diseases and does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of penicillamine. |
| PGx | Robinson_1986 | not_relevant | 3 | 1 | The paper reports the induction of autoantibodies (an adverse effect/toxicity endpoint), not a pharmacokinetic or standard pharmacodynamic parameter, and does not quantify the effect size of genetic variation on PK/PD. |
| PGx | Roy_2025 | not_relevant | 0 | 0 | The paper is a review of Wilson disease diagnosis and does not report on any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of penicillamine. |
| popPK | Sadeghi-Hashjin_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bovine tracheal smooth muscle using S-nitroso-N-acetyl-penicillamine (SNAP) as a nitric oxide donor, not a pharmacokinetic study of penicillamine. |
| PGx | Sainsbury_2007 | not_relevant | 0 | 0 | The paper discusses vascular responses to SNAP (a related compound) but reports no pharmacogenomic effects (gene variants) on PK/PD parameters of penicillamine. |
| PGx | Sarode_2021 | not_relevant | 0 | 0 | The paper investigates epigenetic mechanisms in a Wilson disease mouse model but does not report how genetic variants affect the pharmacokinetics or pharmacodynamics of penicillamine itself. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ocrelizumab, not penicillamine. |
| PGx | Singh_2017 | not_relevant | 0 | 0 | The paper uses S-nitroso-N-acetyl penicillamine (SNAP) merely as an NO donor in a toxicology study of zinc and nNOS, not as a therapeutic drug, and reports no pharmacogenomic effects on its PK or PD parameters. |
| popPK | Smith_1980 | irrelevant | 0 | 0 | The study is an in vitro assay of leukocyte chemokinesis where penicillamine acts as a comparator agent, not a pharmacokinetic study. |
| PGx | Smith_2009 | not_relevant | 0 | 0 | The text is a general review of chiral toxicology concepts that merely lists penicillamine as an example without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics/pharmacodynamics of meropenem, colistin, and polymyxin B, not penicillamine. |
| popPK | Southam_1991 | irrelevant | 0 | 0 | The study investigates the effects of a penicillamine derivative (S-nitroso-N-penicillamine) on cGMP levels in rat brain tissue, which is a mechanistic/pharmacodynamic in vitro study, not a pharmacokinetic disposition study of penicillamine. |
| PGx | Srinivasan_2026 | not_relevant | 0 | 0 | The paper is a radiological case report of a rare MRI sign ("panda with bright eyes") in Wilson disease and does not discuss pharmacogenomics or drug pharmacokinetics. |
| popPK | Stout_1994 | irrelevant | 0 | 0 | The study investigates the mechanism of neurotransmitter release using S-nitroso-N-acetyl-D,L-penicillamine (SNAP) as a nitric oxide donor, not the pharmacokinetics of penicillamine itself. |
| popPK | Stumpe_2001 | irrelevant | 0 | 0 | The paper investigates cardiac energy metabolism in rat cardiomyocytes, and penicillamine is only mentioned as a component of a nitric oxide donor (SNAP), not as the subject of a pharmacokinetic analysis. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not penicillamine. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of busulfan, not penicillamine. |
| popPK | Terluk_2004 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of nitric oxide donors in rat aorta, using penicillamine as a chemical precursor for the NO donor SNAP, not a pharmacokinetic study of penicillamine itself. |
| PGx | Tiedge_1999 | not_relevant | 0 | 0 | The paper investigates the protective role of antioxidant enzymes against NO donor toxicity in beta-cells; penicillamine is only listed as a chemical reagent (SNAP) and not studied as a drug for pharmacokinetic or pharmacodynamic effects based on genotypes. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for infliximab, not penicillamine. |
| PGx | Volk_1995 | not_relevant | 0 | 0 | The paper studies endothelial toxicity of a nitric oxide donor (SNAP) involving penicillamine, but does not report pharmacogenomic effects on the PK or PD of penicillamine. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study is a population pharmacokinetic model library for polymyxin B, not penicillamine. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The study is a methodological demonstration using simulated data from a generic Monolix demo project, not a pharmacokinetic study of penicillamine. |
| PGx | Weinshilboum_1984 | not_relevant | 5 | 2 | The paper discusses the heritability of TMT, which metabolizes D-penicillamine, but does not report specific gene variant-to-PK/PD effect sizes or fitted models for the drug. |
| popPK | Witta_2026 | irrelevant | 0 | 0 | The paper is a simulation study for a hypothetical drug evaluating model averaging algorithms, and does not report pharmacokinetic parameters for penicillamine. |
| PGx | Wolf_1997 | not_relevant | 0 | 0 | The paper discusses the pathomechanisms of penicillamine-induced acantholysis and proposes a chain reaction theory, but it does not report any specific gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wu_1998 | not_relevant | 0 | 0 | The paper uses S-nitroso-N-acetyl-D, L-penicillamine (SNAP) as a general nitric oxide donor to study Vibrio cholerae toxicity, not to analyze pharmacogenomic effects on the drug penicillamine's PK or PD. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not penicillamine. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not penicillamine. |
| popPK | Xu_2004 | irrelevant | 0 | 0 | The study investigates cerebral vasodilation mechanisms using SNAP (S-nitroso-N-acetyl penicillamine) as an NO donor, not the pharmacokinetics of the drug penicillamine. |
| PGx | Yu_2024 | not_relevant | 0 | 0 | The paper is a systematic review of drug-induced dermatomyositis and does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of penicillamine. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a review of opioid pharmacokinetics in pregnancy and does not contain any data or parameters for penicillamine. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not penicillamine. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics of immunoglobulins (IVIg/SCIg), not penicillamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
