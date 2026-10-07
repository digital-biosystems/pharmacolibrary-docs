<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01J&quot;,&quot;href&quot;:&quot;atc/S01J.md&quot;},{&quot;label&quot;:&quot;fluorescein&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorescein_Min2015_reference&quot;,&quot;label&quot;:&quot;Min_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorescein/Fluorescein_Min2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fluorescein

- **generic name:** fluorescein
- **ATC codes:** `S01JA01`
- **DrugBank:** [DB00693](https://go.drugbank.com/drugs/DB00693) · **PubChem:** [CID 16850](https://pubchem.ncbi.nlm.nih.gov/compound/16850)
- **molar mass:** 332.3063 g/mol (C20H12O5) — DrugBank
- **groups:** approved, investigational

## About

Fluorescein is a fluorescent dye used in eye examinations as a diagnostic colouring agent and contrast agent to help visualise structures of the eye. It is an approved diagnostic ophthalmological agent and is widely used in eye care, with some investigational uses as well.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410922](https://www.wikidata.org/wiki/Q410922) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:09 | 6:17 | 1/1/0 | 0/0/0 | 0/0/0 | 517,247/36,627 | einfracz / qwen3.8-27b | 33 | 2/25 | 32/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Min_2015_reference](drugs/drug_fluorescein/Fluorescein_Min2015_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Min T et al., Microanalysis, Pharmacokinetics and Tis…, International journal of mo… (2015) | [10.3390/ijms161024403](https://doi.org/10.3390/ijms161024403) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tsuru_1984_reference](drugs/drug_fluorescein/Fluorescein_Tsuru1984_reference.md) | — | 1-compartment (no model) | 0 | Tsuru T et al., Endothelial wound-healing of monkey cor…, Japanese journal of ophthal… (1984) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluorescein) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (other), IGKV2-30 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 919 matched, 176 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abduljalil_2008.pdf` | Abduljalil K et al., Modelling ocular pharmacokinetics of fl…, European journal of clinica… (2008) | popPK | 8 | [10.1007/s00228-007-0457-3](https://doi.org/10.1007/s00228-007-0457-3) | [18219479](https://pubmed.ncbi.nlm.nih.gov/18219479) | The paper describes a population PK model for fluorescein but provides only relative fold-change ratios (Cmax, AUC, F) rather than absolute numeric parameter values (CL, V, t1/2). |
| `Tsuru_1984.pdf` | Tsuru T et al., Endothelial wound-healing of monkey cor…, Japanese journal of ophthal… (1984) | popPK | 8 | not captured | [6471601](https://pubmed.ncbi.nlm.nih.gov/6471601) | The paper reports quantitative parameters (transfer coefficient, permeability coefficient) from a two-compartment model of fluorescein disposition in the cornea/aqueous humor of monkeys. |
| `McLaren_1993.pdf` | McLaren JW et al., A simple three-compartment model of ant…, Experimental eye research (1993) | popPK | 7 | [10.1006/exer.1993.1046](https://doi.org/10.1006/exer.1993.1046) | [8472791](https://pubmed.ncbi.nlm.nih.gov/8472791) | The paper describes a compartmental PK model for fluorescein in rabbits and humans and reports a specific bound for diffusional clearance, but specific parameter values (ki, kd) are not explicitly listed in the evidence. |

<sub>queue written 2026-10-07T21:04:39.268151+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abduljalil_2008 | relevant | 8 | 2 | The paper describes a population PK model for fluorescein but provides only relative fold-change ratios (Cmax, AUC, F) rather than absolute numeric parameter values (CL, V, t1/2). |
| popPK | Agarwal_2011 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of antiviral nucleoside analogs (stavudine derivatives) using fluorescein as a fluorescent reporter tag for uptake, not on the pharmacokinetics of the drug fluorescein itself. |
| popPK | Alves_2020 | irrelevant | 0 | 0 | The study uses fluorescein isothiocyanate (FITC) only as a fluorescent label to visualize lectin penetration in mosquito eggs, not as a subject drug for pharmacokinetic analysis. |
| popPK | Alves_2022 | irrelevant | 0 | 0 | The paper investigates the ovicidal activity of a lectin using fluorescein isothiocyanate (FITC) merely as a fluorescent label for microscopy, not as a subject of pharmacokinetic analysis. |
| popPK | Anschuetz_2021 | irrelevant | 0 | 0 | The study is a cadaveric surgical simulation using fluorescein as a tracer to measure droplet formation, not a pharmacokinetic study of the drug. |
| PGx | Arora_2002 | not_relevant | 0 | 0 | The paper examines antisense oligomers inhibiting CYP3A4 and does not report the pharmacokinetics of the drug fluorescein. |
| PGx | Asano_2014 | not_relevant | 0 | 0 | The paper studies bispecific antibodies and their pharmacokinetics, not the pharmacogenomics of fluorescein. |
| popPK | Barrios_2019 | irrelevant | 0 | 0 | The study investigates the antimicrobial mechanism of graphene oxide, using fluorescein diacetate as a diagnostic dye to assess cell permeability, not as a subject drug for PK analysis. |
| PGx | Baudoin_2013 | not_relevant | 0 | 0 | The paper evaluates hepatocyte function and drug metabolism using standard probes (midazolam, etc.), not the pharmacokinetics of the drug fluorescein, and does not report pharmacogenomic effects. |
| PGx | Bednarczyk_2010 | not_relevant | 0 | 0 | The paper develops a fluorescence-based assay to measure transporter activity using a probe substrate (8-FcA), but it does not report a pharmacogenomic effect (gene variant) on the pharmacokinetics or pharmacodynamics of the drug fluorescein itself. |
| popPK | Beer_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of triamcinolone acetonide, and fluorescein is mentioned only as a diagnostic imaging agent. |
| popPK | Benedetti_2021 | irrelevant | 0 | 0 | The paper describes the engineering and biophysical characterization of bispecific antibodies, not the pharmacokinetics of fluorescein. |
| popPK | Bi_2022 | irrelevant | 0 | 0 | Fluorescein is used only as a fluorescent labeling probe (FITC) for the subject drug (Polygonatum sibiricum polysaccharide), not as the subject of the pharmacokinetic study. |
| PGx | Blazquez_2012 | not_relevant | 0 | 0 | The paper investigates the role of the ABCG2 transporter in bile acid transport, not a pharmacogenomic effect on the PK/PD of fluorescein (a diagnostic dye). |
| PGx | Bleier_2012 | not_relevant | 0 | 0 | The study examines P-glycoprotein expression levels in sinus tissue using fluorescein only as a labeling reagent for immunohistochemistry, not as a drug to assess pharmacokinetic or pharmacodynamic parameters. |
| popPK | Briot_2008 | irrelevant | 0 | 0 | Fluorescein is used only as a label for Dextran (FITC-D70) in a study of lung permeability, not as the subject drug for PK parameter estimation. |
| popPK | Briot_2009 | irrelevant | 0 | 0 | The study uses fluorescein-labeled dextran (FITC-D70) as a diagnostic tracer to measure lung permeability, not to characterize the pharmacokinetic disposition parameters of fluorescein itself. |
| PGx | Buckberry_2020 | not_relevant | 0 | 0 | The paper describes a dialysis machine's performance using fluorescein-tagged molecules as markers and does not involve pharmacogenomics or drug PK/PD. |
| popPK | Bursell_1997 | irrelevant | 0 | 0 | The study uses fluorescein angiography as a diagnostic imaging tool to measure retinal blood flow and circulation time, not to determine the pharmacokinetic parameters of fluorescein itself. |
| popPK | Burton_2002 | irrelevant | 0 | 0 | The study investigates Na+ channel regulation in rabbit bladder epithelium, using fluorescein isothiocyanate (FITC)-dextran only as a fluid-phase marker for endocytosis, not as a subject drug for PK analysis. |
| popPK | Cai_2005 | irrelevant | 0 | 0 | The study investigates the anti-angiogenic effects of plasminogen kringle 5, using fluorescein angiography only as a diagnostic imaging technique to visualize retinal neovascularization, rather than measuring the pharmacokinetics of fluorescein. |
| PGx | Call_2024 | not_relevant | 0 | 0 | The paper focuses on a pH biosensor in Trypanosoma brucei and does not investigate pharmacogenomics or pharmacokinetic/pharmacodynamic parameters of fluorescein as a drug. |
| popPK | Cardullo_1994 | irrelevant | 0 | 0 | The study uses a fluorescein conjugate as a diagnostic probe for sperm receptors, not for pharmacokinetic analysis. |
| PGx | Casselman_2021 | not_relevant | 0 | 0 | The paper discusses the use of fluorescein angiography for diagnosis but does not report pharmacokinetic or pharmacodynamic effects of gene variants on the drug itself. |
| popPK | Castro_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study of thrombin inhibition by ecotin, using fluorescein only as a fluorophore label for a peptide substrate, not as the subject drug for PK analysis. |
| PGx | Chen_2012 | not_relevant | 0 | 0 | The paper reports on the chemical synthesis and engineering of a protein tag for live cell imaging, not on the pharmacokinetics or pharmacodynamics of the drug fluorescein in a clinical or pharmacogenomic context. |
| PGx | Chuman_2014 | not_relevant | 0 | 0 | The paper discusses an animal model of ischemic optic neuropathy and treatment options, with no mention of gene variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of fluorescein. |
| popPK | Cicinelli_2025 | irrelevant | 0 | 0 | The study uses fluorescein angiography as a diagnostic imaging tool to assess retinal vasculopathy, not to determine pharmacokinetic parameters of the dye itself. |
| popPK | Colecraft_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on muscarinic receptors in heart cells, using fluorescein only as a label for antisense oligonucleotides rather than studying its pharmacokinetics. |
| PGx | Coradini_1999 | not_relevant | 0 | 0 | The paper focuses on drug delivery and anti-proliferative activity of sodium butyrate conjugates, with no report on gene variants affecting the PK or PD of fluorescein. |
| popPK | Crocenzi_2001 | irrelevant | 0 | 0 | The study investigates silymarin's effects on cholestasis using bromosulfophthalein (BSP) and cholyl-lysyl-fluorescein as probes/analogs, not the pharmacokinetics of fluorescein itself. |
| PGx | Crocenzi_2001 | not_relevant | 0 | 0 | The paper investigates the protective effects of silymarin on cholestasis using rat models and does not involve pharmacogenomics or the PK/PD of fluorescein. |
| PGx | Csaky_2015 | not_relevant | 0 | 0 | The study reports that the complement factor H genotype had no effect on clinical responses to pazopanib or ranibizumab, and contains no data on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of fluorescein. |
| PGx | Csonka_2013 | not_relevant | 0 | 0 | The paper studies the effect of thioridazine stereoisomers on cancer cells and mentions fluorescein isothiocyanate (FITC) only as a label for annexin V in apoptosis assays, not as a drug with a pharmacokinetic or pharmacodynamic parameter affected by a genetic variant. |
| PGx | Diaz_2020 | not_relevant | 0 | 0 | The paper studies antibiotic activity against Pseudomonas biofilms using fluorescein diacetate as a metabolic marker, not the pharmacokinetics or pharmacodynamics of fluorescein itself, and does not involve genetic variants. |
| popPK | Dickinson_1997 | irrelevant | 0 | 0 | The study is a binding assay in rabbit skeletal muscle membranes, and fluorescein analogs are only used as competitive inhibitors, not as the subject drug. |
| popPK | Duijm_1997 | irrelevant | 0 | 0 | The study uses fluorescein angiography as a diagnostic imaging technique to measure choroidal blood flow parameters (blood refreshment time) in glaucoma patients, rather than performing a pharmacokinetic study of fluorescein's disposition. |
| PGx | Ferreira_2017 | not_relevant | 0 | 0 | The paper uses fluorescein isothiocyanate (FITC) as a fluorescent dye for flow cytometry, not as a drug for pharmacokinetic or pharmacodynamic analysis. |
| popPK | Foster_2007 | irrelevant | 0 | 0 | The study focuses on characterizing Cryptococcus neoformans cell surface proteins using fluorescein isothiocyanate (FITC) as a fluorescent label/diagnostic tool, not on the pharmacokinetics of the drug fluorescein. |
| popPK | Fukuda_2004 | irrelevant | 0 | 0 | The paper describes an ELISA method where fluorescein is used solely as a labeling agent for a probe, not as a pharmacokinetic subject. |
| popPK | Futaki_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetics for fluorescein isothiocyanate dextran (FD-4), a different compound, not the drug fluorescein (sodium fluorescein). |
| popPK | Gilger_2006 | irrelevant | 0 | 0 | Fluorescein is used only as a permeability marker/probe in in vitro scleral diffusion studies, not as the subject drug for PK parameter estimation. |
| popPK | Gopalakrishnan_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacology of the alpha 7 nicotinic acetylcholine receptor, and fluorescein is only used as a fluorescent tag for detection, not as a subject drug for PK analysis. |
| popPK | Gregório_2024 | irrelevant | 0 | 0 | The paper describes an in-vitro yeast estrogen screen assay using fluorescein di-β-d-galactopyranoside as a substrate, not a pharmacokinetic study of fluorescein. |
| PGx | Hagstrom_2013 | not_relevant | 0 | 0 | The study evaluates response to anti-VEGF therapy, not the pharmacokinetics or pharmacodynamics of fluorescein. |
| popPK | Heller_2023 | irrelevant | 0 | 0 | Fluorescein is used solely as a dye to characterize a 3D-printed in-vitro device, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Honma_2013 | not_relevant | 0 | 0 | The paper reports an association between an ESR2 polymorphism and femoral fracture risk; fluorescein is used only as a molecular biology tool for genotyping and is not the subject of the pharmacological investigation. |
| popPK | Jain_2007 | irrelevant | 0 | 0 | The paper investigates spermicides, using fluorescein isothiocyanate (FITC) only as a fluorescent label for Annexin-V, not as a drug for PK analysis. |
| popPK | Jiang_2018 | irrelevant | 0 | 0 | The study uses FITC-inulin as a reference method to validate an MRI-based GFR measurement, and does not report pharmacokinetic parameters for fluorescein. |
| PGx | Jin_2016 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory effects of herbal formulas on CYP and UGT enzymes, not the pharmacokinetics or pharmacodynamics of the drug fluorescein in relation to genetic variants. |
| PGx | Jin_2021 | not_relevant | 0 | 0 | The study examines the transcriptomic and phenotypic effects of cigarette smoke on the corneal epithelium but does not report pharmacogenomic effects on the PK or PD of fluorescein. |
| PGx | Kaarniranta_2012 | not_relevant | 0 | 0 | The paper reports a genetic association with a disease (AMD), not a pharmacokinetic or pharmacodynamic effect of fluorescein. |
| popPK | Karimi_2019 | irrelevant | 0 | 0 | The study focuses on the synthesis and toxicity of Thymol nanoparticles, and fluorescein is only mentioned as a reagent (DCFH-DA) for measuring reactive oxygen species, not as a subject drug for PK analysis. |
| popPK | Kastner_2013 | irrelevant | 1 | 0 | Fluorescein is used as a probe for permeability studies in an in-vitro diffusion chamber, not for systemic pharmacokinetic parameter estimation. |
| PGx | Kenaan_2011 | not_relevant | 0 | 0 | The study examines protein-protein interactions using fluorescein as a labeling reagent, not as a therapeutic drug with a pharmacogenomic effect. |
| PGx | Kim_2008 | not_relevant | 0 | 0 | The paper describes an assay for measuring TAFI activity using fluorescein as a label, not a pharmacokinetic or pharmacodynamic study of fluorescein as a drug, and does not report pharmacogenomic effects on fluorescein parameters. |
| popPK | Kitagawa_1990 | irrelevant | 0 | 0 | The paper uses fluorescein diacetate only as a fluorescent dye to demonstrate cell permeabilization in an in-vitro mechanism study, not as a drug subject to pharmacokinetic analysis. |
| PGx | Lauwers_2026 | not_relevant | 0 | 0 | The paper describes a pH-sensitive cancer immunotherapy platform using fluorescein as an epitope tag for CAR T cells, not the pharmacogenomics of fluorescein's PK or PD parameters. |
| PGx | Lee_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the response to ranibizumab (a VEGF inhibitor), not on the PK or PD parameters of fluorescein. |
| popPK | Lee_2018 | irrelevant | 0 | 0 | Fluorescein is used only as a diagnostic dye (corneal staining) for evaluation, not as a subject drug with pharmacokinetic parameters. |
| popPK | Longobardi_2024 | irrelevant | 0 | 0 | The paper is an in vitro study on green tea extract's antiviral effects against Feline Herpesvirus 1, containing no pharmacokinetic data for fluorescein. |
| popPK | Löffler-Walz_1998 | irrelevant | 0 | 0 | The study investigates receptor binding kinetics in rat cardiac membranes where fluorescein derivative phloxine B is used only as a binding ligand inhibitor, not as a subject for pharmacokinetic parameter estimation. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The paper is a review on nanosystem-mediated chemodynamic therapy and does not report pharmacokinetic parameters for fluorescein. |
| PGx | Markand_2016 | not_relevant | 0 | 0 | The paper investigates genetic modifiers of a retinal disease phenotype (Crb1 mutation) using fluorescein angiography as a diagnostic tool, not pharmacogenomics of fluorescein as a drug. |
| popPK | McLaren_1993 | relevant | 7 | 2 | The paper describes a compartmental PK model for fluorescein in rabbits and humans and reports a specific bound for diffusional clearance, but specific parameter values (ki, kd) are not explicitly listed in the evidence. |
| popPK | Meyer_2002 | irrelevant | 0 | 0 | The paper is a mechanistic structural biology study on pigment epithelium-derived factor (PEDF) and collagen binding, where fluorescein is only used as a chemical conjugation agent to modify PEDF, not as the subject of a pharmacokinetic study. |
| popPK | Min_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of FITC-labeled longan polysaccharide-protein complexes in mice, not the drug fluorescein itself. |
| popPK | Nakada_2024 | irrelevant | 0 | 0 | The study investigates verteporfin photodynamic therapy in cancer cell lines; fluorescein is mentioned only as a reference or image label, not as a subject drug for PK analysis. |
| PGx | Neuhaus_2014 | not_relevant | 0 | 0 | The paper uses fluorescein as a tracer to measure blood-brain barrier permeability in response to oxygen/glucose deprivation and astrocyte factors, but it does not report any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Neumann_2023 | irrelevant | 0 | 0 | The study is an in vitro biophysical investigation of peptide permeation into liposomes using fluorescein only as a fluorescent label, not as a subject drug for PK analysis. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | The study is a burn wound assessment imaging study in pigs where fluorescein is used as a diagnostic dye, not as a subject drug for pharmacokinetic analysis. |
| popPK | Nishida_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluorescein isothiocyanate-dextrans (FDs) as a drug delivery vehicle in rats, not the disposition parameters of free fluorescein. |
| PGx | Nishihashi_2017 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical inducer (cobalt chloride) on transporter expression in a cell line, not the impact of a specific gene variant/genotype on pharmacokinetics or pharmacodynamics. |
| popPK | Niwa_2001 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of endothelial permeability using FITC-dextran as a probe, not a pharmacokinetic study of fluorescein. |
| PGx | Nowak-Sliwinska_2013 | not_relevant | 0 | 0 | The paper reviews photodynamic therapy for a retinal disease and mentions fluorescein angiography as a diagnostic tool, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of fluorescein. |
| popPK | Oprea_2025 | irrelevant | 0 | 0 | The paper is an in vitro study on the antioxidant capacity of plant extracts on fibroblast cells, not a pharmacokinetic study of fluorescein. |
| popPK | Ostrander_1990 | irrelevant | 3 | 0 | The study focuses on a perfusion indicator model in canine flaps and does not report standard quantitative disposition parameters (CL, V, ka, t1/2) for fluorescein. |
| popPK | Panthong_2020 | irrelevant | 0 | 0 | The study investigates the immunological and receptor-mediated effects (TRPV1 activation) of Piper chaba and piperine using FITC as a hapten/diagnostic agent, not the pharmacokinetics of fluorescein. |
| popPK | Parboosing_2017 | irrelevant | 0 | 0 | The study investigates HIV encapsidation inhibition in vitro where fluorescein is used only as a fluorescent label for RNA uptake, not as a drug subject to pharmacokinetic analysis. |
| PGx | Parmeggiani_2010 | not_relevant | 3 | 10 | The paper reports pharmacogenomic associations with clinical efficacy (CNV leakage/area), which are pharmacodynamic outcomes, but does not report changes in pharmacokinetic parameters or specific drug concentration-based PD parameters for fluorescein (the dye) or the active drug verteporfin. |
| PGx | Paszti-Gere_2014 | not_relevant | 0 | 0 | The paper investigates LPS effects on inflammatory response and CYP gene expression, and uses fluorescein only as a barrier integrity marker, not as a study drug with a pharmacogenomic link. |
| popPK | Pedron_2020 | irrelevant | 0 | 0 | The study focuses on 8-nitroquinolinone derivatives for antiparasitic activity, not the drug fluorescein. |
| popPK | Peng_2017 | irrelevant | 0 | 0 | Fluorescein is used only as a label for in vitro cell binding assays, not as the subject of a pharmacokinetic study in vivo. |
| PGx | Polsky-Fisher_2006 | not_relevant | 0 | 0 | The paper reports the inhibitory effects of chemical agents and antibodies on esterase activity using fluorescein diacetate as a probe, but does not report the effect of any genetic variant or genotype on the pharmacokinetics or pharmacodynamics of fluorescein. |
| popPK | Price_2011 | irrelevant | 0 | 0 | The study uses sodium fluorescein as a fluorescent tracer to measure microfluidic transport within bone, not to characterize the systemic pharmacokinetic parameters (CL, V, etc.) of the drug itself. |
| PGx | Qiao_2021 | not_relevant | 0 | 0 | The paper studies an in vitro hepatocyte cell model for drug metabolism and does not report pharmacogenomic effects on the PK/PD of fluorescein in humans. |
| popPK | Qtaishat_2013 | irrelevant | 0 | 0 | The study focuses on protein engineering and binding affinity (KD, EC50) of a Protein A construct using fluorescein as a fluorescent label, not on the pharmacokinetic disposition of the drug fluorescein. |
| popPK | Ravenstijn_2008 | irrelevant | 1 | 0 | Sodium fluorescein is used strictly as a passive permeability marker to assess blood-brain barrier integrity in a rotenone rat model, with no population-PK parameters (CL, V, etc.) reported for the drug itself. |
| popPK | Rieg_2013 | irrelevant | 1 | 0 | The study uses FITC-labeled inulin as a probe to measure GFR in mice, not to characterize the pharmacokinetics of fluorescein itself, and no PK parameters for fluorescein are reported. |
| PGx | Salminen_2011 | not_relevant | 0 | 0 | The paper describes an assay method for CYP2C19 inhibition using fluorescein derivatives and does not report a pharmacogenomic effect on the PK/PD of fluorescein. |
| PGx | Salomon_2014 | not_relevant | 0 | 0 | The paper characterizes a cell line model for transport studies and does not investigate gene variants or their impact on pharmacokinetic parameters of fluorescein. |
| popPK | Sebbag_2019 | irrelevant | 3 | 5 | The study measures tear volume and turnover rate using fluorescein as a diagnostic dye, reporting ocular physiological parameters rather than systemic pharmacokinetic parameters (CL, V, ka) for fluorescein as a drug subject. |
| PGx | Selver_2016 | not_relevant | 0 | 0 | The paper focuses on corneal recovery in a limbal stem cell deficiency model and does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of fluorescein. |
| popPK | Sevgi_2021 | irrelevant | 0 | 0 | The paper is a retrospective image analysis study of retinal vascular features in diabetic retinopathy using fluorescein angiography as a diagnostic imaging modality, reporting no pharmacokinetic parameters. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | Fluorescein is used as a diagnostic dye to visualize calcium chloride permeation in bovine extraocular muscles, not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | Shiri_2019 | irrelevant | 0 | 0 | The paper is a study on silibinin nanopolymer delivery in rat cells, using fluorescein diacetate only as a ROS probe, not as a subject drug for PK analysis. |
| popPK | Simms_2018 | irrelevant | 0 | 0 | The paper describes the use of fluorescein as a fluorescent tag for a CGRP peptide in an in vitro receptor binding study, not as a subject drug for pharmacokinetic analysis. |
| popPK | Song_2021 | irrelevant | 0 | 0 | The study is a clinical trial analyzing the association between systemic medications and geographic atrophy, using fluorescein angiography only as a diagnostic imaging technique rather than measuring its pharmacokinetics. |
| popPK | St-Pierre_1997 | irrelevant | 1 | 0 | The study investigates hepatocyte canalicular secretion of fluorescent analogs (FITC-GA and CMFD) rather than the systemic pharmacokinetics (CL, V, t1/2) of the parent drug fluorescein. |
| popPK | Stattin_2020 | irrelevant | 0 | 0 | The study is an imaging comparison of microaneurysm detection using fluorescein angiography, not a pharmacokinetic analysis of the drug. |
| popPK | Stefanucci_2017 | irrelevant | 0 | 0 | The study describes the synthesis of opioid peptides conjugated with fluorescein for use as biological probes, not the pharmacokinetics of the drug fluorescein itself. |
| PGx | Stresser_2002 | not_relevant | 0 | 0 | The paper discusses CYP450 isoform selectivity for fluorometric probe substrates, not the pharmacogenomic effect of a gene variant on the PK/PD of the drug fluorescein itself. |
| popPK | Takagi_1996 | irrelevant | 0 | 0 | Fluorescein is used only as a diagnostic tracer for video angiography in this study of retinal hemodynamics in rats, with no pharmacokinetic parameters (CL, V, t1/2) reported for the drug itself. |
| popPK | Tanaka_1989 | irrelevant | 0 | 0 | The study focuses on photoreceptor channel activation and uses a fluorescein derivative (8-Fl-cGMP) as a ligand, not fluorescein as a drug for PK analysis. |
| PGx | Thakur_2021 | not_relevant | 0 | 0 | The paper focuses on the enzymatic properties of a DNA repair protein (UvrC) in Mycobacterium tuberculosis, with no mention of human pharmacogenomics, gene variants, or pharmacokinetics/pharmacodynamics of fluorescein. |
| popPK | Ullah_2020 | irrelevant | 2 | 0 | The study measures FITC-sinistrin clearance as a proxy for GFR in rats, not the pharmacokinetic parameters of fluorescein itself as a subject drug, and no specific numeric PK values for fluorescein are provided in the evidence. |
| popPK | Umstead_2020 | irrelevant | 0 | 0 | Fluorescein is used only as a tracer to assess airway permeability, not as the subject of a pharmacokinetic disposition analysis. |
| popPK | Wang_2005 | irrelevant | 0 | 0 | The study measures the diffusion coefficient of fluorescein in bone tissue using FRAP, which is a physicochemical/transport study rather than a systemic pharmacokinetic study reporting parameters like CL, V, or Ka. |
| popPK | Wang_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on angiotensin II-induced free radical production in neurons using a fluorescent dye as a probe, containing no pharmacokinetic data for fluorescein. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study focuses on choroidal thickness and vascular density imaging in macular telangiectasia, using fluorescein only as a diagnostic imaging agent rather than measuring its pharmacokinetic parameters. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of Lycium barbarum glycopeptide on diabetic retinopathy and liver disorders, containing no pharmacogenomic data regarding the PK/PD of fluorescein. |
| PGx | Weiss_2015 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interactions involving metabolites of bosentan and ambrisentan, and does not involve pharmacogenomics (gene variants) or the drug fluorescein. |
| PGx | Whiting_2015 | not_relevant | 0 | 0 | The paper reports ophthalmic and neurological effects of a TPP1 mutation in dogs, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of fluorescein (which is used here only as a diagnostic imaging tool). |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study investigates fluoxetine resistance in E. coli and uses fluorescein diacetate as a reagent for ROS detection, not as a subject drug for PK analysis. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The paper reports disease-causing genetic mutations associated with retinitis pigmentosa and does not investigate the impact of genotypes on the pharmacokinetics or pharmacodynamics of fluorescein. |
| popPK | Wubuli_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Glycyrrhiza uralensis polysaccharides (GUPS) using fluorescein derivatives (5-DTAF) as fluorescent labels, rather than studying fluorescein itself as the subject drug. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | The study investigates the effect of retinoic acid on intestinal barrier function and reports no data on gene variants or genotypes. |
| popPK | Yegneswaran_2004 | irrelevant | 0 | 0 | Fluorescein is used only as a fluorescent label for a protein (factor Va) in a mechanistic binding study, not as a subject drug for pharmacokinetic analysis. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper investigates the chemosensitization effect of lidocaine on 5-fluorouracil in choriocarcinoma cells and does not involve pharmacogenomics or the drug fluorescein. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper focuses on the toxicity of nanoparticles to microorganisms, using fluorescein diacetate only as a viability probe, not as the subject of pharmacokinetic analysis. |
| PGx | Zhao_2021 | not_relevant | 0 | 0 | The paper describes in vitro enzyme inhibition by drugs and does not report any pharmacogenomic effect on a PK or PD parameter of fluorescein. |
| PGx | Zheng_2021 | not_relevant | 0 | 0 | The study investigates the metabolic degradation of lentinan in rats and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | de_2001 | not_relevant | 0 | 0 | The paper studies peptide transport by MRP1 and does not investigate the pharmacokinetics or pharmacodynamics of the drug fluorescein itself, nor does it report pharmacogenomic effects on fluorescein parameters. |
| PGx | de_2010 | not_relevant | 0 | 0 | The study investigates transporter mechanisms for cholyl-L-lysyl-fluorescein, not the pharmacogenomic effects of gene variants on the PK/PD of fluorescein itself. |
| PGx | van_2014 | not_relevant | 0 | 0 | The paper describes clinical and genetic features of Stargardt disease, using fluorescein angiography only as a diagnostic imaging tool rather than measuring PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:04 UTC</sub>
