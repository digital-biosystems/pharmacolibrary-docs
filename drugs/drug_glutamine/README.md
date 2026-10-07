<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;glutamine&quot;}]"></div>

# glutamine

- **generic name:** glutamine
- **ATC codes:** `A16AA03`
- **DrugBank:** [DB00130](https://go.drugbank.com/drugs/DB00130) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

Glutamine, an amino acid, is used in the treatment of short bowel syndrome. It is approved and also available as a nutraceutical, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q181619](https://www.wikidata.org/wiki/Q181619) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glutamine | parent | 146.146 | C5H10N2O3 | PubChem | [5961](https://pubchem.ncbi.nlm.nih.gov/compound/5961) | Sadaf_2024_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:43 | 6:01 | 0/0/1 | 0/0/0 | 0/0/0 | 485,332/23,548 | einfracz / qwen3.8-27b | 36 | 8/29 | 32/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Sadaf_2024_2_reference](drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference.md) | — | 1-compartment (no model) | 3 | Sadaf A et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01349-4](https://doi.org/10.1007/s40262-024-01349-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glutamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ASNS (substrate), CAD (substrate), CTPS1 (substrate), CTPS1 (target), F13A1 (substrate), GATB (substrate), GFPT2 (substrate), GLS (substrate), GLS2 (substrate), GLUL (product), GMPS (substrate), KYAT1 (substrate), NADSYN1 (substrate), PFAS (substrate), PPAT (substrate), QARS1 (substrate), SLC16A10 (inhibitor), SLC1A5 (substrate), SLC38A1 (substrate), SLC38A2 (substrate), SLC38A3 (substrate), SLC6A14 (substrate), SLC7A5 (substrate), SLC7A6 (substrate), SLC7A7 (substrate), SLC7A8 (substrate), SLC7A9 (substrate), TGM1 (substrate), TGM2 (substrate), TGM3 (substrate), TGM4 (substrate), TGM5 (substrate), TGM6 (substrate), TGM7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1985 matched, 173 returned
- **screened:** 14  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sadaf_2024.pdf` | Sadaf A et al., A pharmacokinetic-pharmacodynamic analy…, British journal of haematol… (2024) | pd | 5 | [10.1111/bjh.19632](https://doi.org/10.1111/bjh.19632) | [38977270](https://www.ncbi.nlm.nih.gov/pubmed/38977270) | metadata signals extractable PD data (PK-PD) |
| `Achanta_2024.pdf` | Achanta LB et al., AMP-activated protein kinase activators…, Journal of neurochemistry (2024) | pd | 4 | [10.1111/jnc.15815](https://doi.org/10.1111/jnc.15815) | [36977628](https://www.ncbi.nlm.nih.gov/pubmed/36977628) | metadata signals extractable PD data (EC50) |
| `Balázs_1988.pdf` | Balázs R et al., N-methyl-D-aspartate promotes the survi…, Neuroscience (1988) | pd | 4 | [10.1016/0306-4522(88)90279-5](https://doi.org/10.1016/0306-4522(88)90279-5) | [2905787](https://www.ncbi.nlm.nih.gov/pubmed/2905787) | metadata signals extractable PD data (EC50) |
| `Haser_1985.pdf` | Haser WG et al., Comparison of the phosphate-dependent g…, The Biochemical journal (1985) | pd | 4 | [10.1042/bj2290399](https://doi.org/10.1042/bj2290399) | [3899104](https://www.ncbi.nlm.nih.gov/pubmed/3899104) | metadata signals extractable PD data (sigmoid) |
| `Ohashi_1995.pdf` | Ohashi H et al., Purification and characterization of ra…, Journal of biochemistry (1995) | pd | 4 | [10.1093/oxfordjournals.jbchem.a125018](https://doi.org/10.1093/oxfordjournals.jbchem.a125018) | [8720146](https://www.ncbi.nlm.nih.gov/pubmed/8720146) | metadata signals extractable PD data (EC50) |
| `Parkash_2002.pdf` | Parkash A et al., Purification and characterization of ch…, The journal of peptide rese… (2002) | pd | 4 | [10.1034/j.1399-3011.2002.00978.x](https://doi.org/10.1034/j.1399-3011.2002.00978.x) | [11966976](https://www.ncbi.nlm.nih.gov/pubmed/11966976) | metadata signals extractable PD data (IC50) |
| `Tapia-Arancibia_1989.pdf` | Tapia-Arancibia L et al., Actions of excitatory amino acids on so…, Journal of neurochemistry (1989) | pd | 4 | [10.1111/j.1471-4159.1989.tb07406.x](https://doi.org/10.1111/j.1471-4159.1989.tb07406.x) | [2570126](https://www.ncbi.nlm.nih.gov/pubmed/2570126) | metadata signals extractable PD data (EC50) |
| `Trikha_1994.pdf` | Trikha M et al., Purification and characterization of fi…, Toxicon : official journal… (1994) | pd | 4 | [10.1016/0041-0101(94)90310-7](https://doi.org/10.1016/0041-0101(94)90310-7) | [7725320](https://www.ncbi.nlm.nih.gov/pubmed/7725320) | metadata signals extractable PD data (EC50) |
| `Yang_2021.pdf` | Yang X et al., The responses of the growth, cytochrome…, Ecotoxicology and environme… (2021) | pgx | 7 | [10.1016/j.ecoenv.2020.111547](https://doi.org/10.1016/j.ecoenv.2020.111547) | [33254406](https://www.ncbi.nlm.nih.gov/pubmed/33254406) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Sparreboom_2005.pdf` | Sparreboom A et al., Effect of ABCG2 genotype on the oral bi…, Cancer biology & therapy (2005) | pgx | 5 | [10.4161/cbt.4.6.1731](https://doi.org/10.4161/cbt.4.6.1731) | [15908806](https://www.ncbi.nlm.nih.gov/pubmed/15908806) | metadata signals extractable PGX data (ABCG2) |

<sub>queue written 2026-10-07T17:39:34.759580+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achanta_2024 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Achanta_2024 | not_relevant | 0 | 0 | The paper discusses AMPK activators and brain metabolism, not glutamine, and does not report a pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Ahn_2010 | irrelevant | 0 | 0 | The study focuses on the structural biology of the cannabinoid receptor 1 (CB1) and amino acid substitutions (including glutamine as a residue type), not the pharmacokinetics of the drug L-glutamine. |
| PD | Ahn_2010 | not_relevant | 0 | 0 | The paper investigates the structural role of helix 8 residues in the cannabinoid receptor 1 (CB1) using mutagenesis and binding assays, and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Albers_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of a transporter protein, not a pharmacokinetic study of glutamine disposition. |
| PD | Albers_2001 | not_relevant | 0 | 0 | The paper describes the electrophysiology and transport stoichiometry of the ATA1 transporter in oocytes, not a pharmacodynamic exposure-response relationship for glutamine as a drug. |
| PD | Andrews_1995 | not_relevant | 0 | 0 | The paper describes a structural biology study identifying a specific amino acid sequence (Gln-628 to Val-646) in von Willebrand factor that mediates binding to sulfatides, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Avramis_2005 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics/pharmacodynamics of asparaginase formulations and their effect on glutamine deamination, not on the disposition pharmacokinetic parameters (CL, V, etc.) of glutamine as a drug. |
| popPK | Avramis_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (half-life) for the drug Erwinia asparaginase (Erwinase), while glutamine is only mentioned as a pharmacodynamic target whose concentration is deaminated by the drug, not the subject of PK modeling. |
| popPK | Bae_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for MIT-001 (a ferroptosis inhibitor), not glutamine. |
| PD | Bae_2026 | not_relevant | 0 | 0 | The paper reports a population PK model and dose optimization based on preclinical efficacy and safety, but it does not present a pharmacodynamic (PD) model or numeric exposure-response/dose-response parameters (e.g., Emax, EC50) for the drug. |
| popPK | Balázs_1988 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Balázs_1988 | not_relevant | 0 | 0 | The paper investigates the effect of NMDA on cell survival and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| PGx | Barr_2025 | not_relevant | 0 | 0 | The paper investigates the impact of dietary protein and ammonium hydroxide on liver metabolism in mice and does not report pharmacogenomic effects of gene variants on a pharmacokinetic or pharmacodynamic parameter of glutamine. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper studies PD-L1 siRNA for immunotherapy in lung cancer cells and contains no pharmacokinetic data for glutamine. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper describes the efficacy of a PD-L1 siRNA in vitro but does not report a pharmacokinetic/pharmacodynamic model, exposure-response relationship, or numeric PD parameters (e.g., EC50, Emax) for glutamine or the siRNA itself. |
| popPK | Birnir_1997 | irrelevant | 0 | 0 | The paper investigates the structural role of a glutamine amino acid mutation in GABA receptors, not the pharmacokinetics of glutamine as a drug. |
| PD | Birnir_1997 | not_relevant | 0 | 0 | The paper describes electrophysiological properties of a mutated GABAA receptor (GABA response, pentobarbitone modulation) and does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug glutamine. |
| PD | Bobzin_2000 | not_relevant | 3 | 2 | The paper reports a single IC50 value for aaptamine (not glutamine) against an enzyme, which is a pharmacological potency metric, not a pharmacodynamic exposure-response or dose-response relationship for the drug glutamine. |
| PGx | Bruhn_1992 | not_relevant | 0 | 0 | The paper reports observational MRS findings in peroxisomal disorders, not the effect of a gene variant on the PK/PD of glutamine as a drug. |
| popPK | Calvetti_2013 | irrelevant | 0 | 0 | This is a qualitative in silico metabolic network modeling study of neurotransmitter cycling, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for glutamine as a drug. |
| PGx | Cassago_2012 | not_relevant | 0 | 0 | The paper focuses on the structural biology and physiological role of the endogenous enzyme Glutaminase C in cancer metabolism, not on pharmacogenomic variations affecting the PK/PD of exogenous glutamine administration. |
| popPK | Charney_2020 | irrelevant | 0 | 0 | The study uses MRS to measure glutamine as a neurochemical biomarker in the brain to correlate with gait performance, not to characterize its pharmacokinetics (CL, V, etc.) after dosing. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | The paper describes in-vitro mutagenesis and kinetics of an enzyme, not the pharmacokinetics of the drug glutamine. |
| PD | Chen_1994 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and the effect of a mutation on AMP cooperativity, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | The paper is a translational framework/hypothesis with no original data, and glutamine is only mentioned as an optional exploratory component without any PK parameters. |
| PD | Cheung_2026 | not_relevant | 0 | 0 | The paper is a conceptual framework and evidence synthesis that explicitly reports no original clinical or laboratory data, and glutamine is only mentioned as an optional exploratory component without any PD analysis. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The paper is a hypothesis/framework article without original data, and glutamine is merely an optional exploratory component, not the subject of a pharmacogenomic PK/PD analysis. |
| popPK | Cheung_2026_2 | irrelevant | 0 | 0 | The paper is a clinical case series regarding dextromethorphan treatment for PTSD and does not report pharmacokinetic parameters for glutamine. |
| PD | Cheung_2026_2 | not_relevant | 0 | 0 | The paper is a case series reporting clinical outcomes without any pharmacokinetic data, concentration measurements, or quantitative dose-response modeling. |
| PGx | Cheung_2026_3 | not_relevant | 0 | 0 | The paper is a clinical case report describing treatment response in OCD and does not report any pharmacogenomic effects of gene variants on the pharmacokinetic or pharmacodynamic parameters of glutamine. |
| PGx | Cheung_2026_4 | not_relevant | 1 | 1 | The paper is a single case report describing a clinical observation of mood improvement, but it does not report pharmacokinetic or pharmacodynamic data (e.g., drug concentrations, AUC, EC50) for glutamine, nor does it link genetic variants to changes in glutamine parameters. |
| PGx | Chiarelli_2006 | not_relevant | 0 | 0 | The paper describes genetic mutations causing a rare enzymatic disorder, not a pharmacogenomic effect on the PK or PD of glutamine as a drug. |
| PD | Cho_2009 | not_relevant | 0 | 0 | The paper describes a cell-based assay for 11beta-HSD1 inhibitors and reports an IC50 for carbenoxolone, but does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Cremer_1974 | irrelevant | 0 | 0 | The study measures brain metabolic rates of glucose and ketone bodies, with glutamine only mentioned as a metabolite whose formation rate was measured, not as the subject drug for PK parameters. |
| popPK | Dehghani_2016 | irrelevant | 0 | 0 | The paper studies brain energy metabolism using 13C-MRS in rats, reporting metabolic fluxes (TCA cycle, neurotransmission) rather than pharmacokinetic disposition parameters (CL, V, ka) for glutamine as a drug. |
| popPK | Deutz_2025 | relevant | 9 | 4 | The study uses a compartmental model in pigs to measure quantitative kinetic parameters (clearance, pool size, flux) for glutamine, but the specific absolute numeric values are located in Tables 2-9 which are not fully provided in the text. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for posaconazole, not glutamine. |
| PD | Ding_2022 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PopPK) models for posaconazole and does not report any pharmacodynamic (PD) or exposure-response relationships for glutamine. |
| popPK | Douglas_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic relationship between white cell count and pain scores in children with mucositis, with no mention of glutamine pharmacokinetics or disposition parameters. |
| PGx | Duldulao_2013 | not_relevant | 0 | 0 | The paper studies gene polymorphisms affecting toxicity of 5-fluorouracil and oxaliplatin, not pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Dumitrescu_2026 | irrelevant | 0 | 0 | The study uses MRS to measure steady-state tissue concentrations of glutamine as a neurometabolite biomarker for impulsivity, not to determine pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Earhart_1983 | irrelevant | 0 | 0 | The study reports pharmacokinetics for acivicin (an antagonist), not for glutamine itself. |
| popPK | Errey_2005 | irrelevant | 0 | 0 | This is an in-vitro enzymology study characterizing ArgA enzyme kinetics in Mycobacterium tuberculosis, not a pharmacokinetic study of glutamine disposition. |
| PD | Errey_2005 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, kcat, Ki) for a bacterial enzyme, not a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| PGx | Evans_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of oxylipins (9-HODE and 9-HOTrE) in HepG2 cells, not the pharmacokinetics or pharmacodynamics of glutamine itself in the context of a gene variant. |
| PGx | Evers_2013 | not_relevant | 0 | 0 | The paper describes a therapeutic strategy for spinocerebellar ataxia type 3 involving exon skipping and protein modification, not a pharmacogenomic effect on the PK/PD of the drug glutamine. |
| popPK | Fentem_1983 | irrelevant | 0 | 0 | The study investigates the metabolic mechanism of ammonia assimilation into glutamine in barley roots, not the pharmacokinetics of exogenous glutamine. |
| PGx | Furlong_1993 | not_relevant | 0 | 0 | The paper focuses on the paraoxonase gene and organophosphate detoxification, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Garfinkel_1975 | irrelevant | 1 | 0 | The paper describes a metabolic compartment model for guinea pig brain slices involving glutamine as a substrate, but does not report pharmacokinetic disposition parameters (CL, V, t1/2) for glutamine following systemic administration. |
| PGx | Gilchrist_2025 | not_relevant | 0 | 0 | The paper investigates the causal effects of metabolites (including glutamine) on disease risk using Mendelian Randomization, rather than the effect of genetic variants on the PK or PD parameters of glutamine administered as a drug or supplement. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The paper describes a computational drug discovery pipeline for hypocretin receptors in zebrafish and contains no pharmacokinetic data for glutamine. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on BATF2 and tumor immunity where glutamine acts as a metabolic regulator, not a pharmacokinetic study of glutamine as a drug subject. |
| popPK | Grkovski_2020 | relevant | 5 | 4 | The study provides pharmacokinetic modeling parameters (K1, k2, k3, k4, VT) for 18F-fluoroglutamine, a radiotracer analog of glutamine, in human subjects, but these are specific to the radiolabeled compound and not the endogenous or therapeutic drug glutamine itself. |
| popPK | Guido_2012 | irrelevant | 0 | 0 | The paper is a mechanistic cancer biology study discussing glutamine as a metabolic fuel/catabolite in tumor stroma, not a pharmacokinetic study of glutamine as a drug. |
| popPK | Gurgul-Convey_2015 | irrelevant | 0 | 0 | The study characterizes beta-cell physiology and insulin secretion in vitro, using L-glutamine only as a secretagogue/co-factor, and does not report pharmacokinetic parameters for glutamine. |
| PD | Gurgul-Convey_2015 | not_relevant | 1 | 0 | The paper characterizes a cell line and reports glucose EC50, but only qualitatively mentions glutamine's potentiating effect without providing numeric dose-response parameters or curves for glutamine. |
| PGx | Gómez-Vicente_2013 | not_relevant | 0 | 0 | The paper characterizes a murine retinal cell line and its gene expression markers (including glutamine synthetase) but does not report on pharmacokinetic or pharmacodynamic parameters of the drug glutamine or any other pharmaceutical agent. |
| popPK | Haser_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Haser_1985 | not_relevant | 0 | 0 | The paper compares the biochemical properties of phosphate-dependent glutaminase enzymes from rat tissues, not the pharmacodynamic or exposure-response relationship of glutamine as a drug. |
| popPK | Hassanein_2026 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the therapeutic efficacy of glutamine supplementation for oral mucositis, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.). |
| popPK | He_2022 | irrelevant | 0 | 0 | The study investigates the mechanistic role of the glutamate-glutamine cycle in anaesthetic sensitivity in mice, rather than measuring the pharmacokinetic parameters (CL, V, ka, etc.) of the drug glutamine. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper reports the EC50 of sevoflurane (an anesthetic), not glutamine; glutamine is a metabolic intermediate in the mechanism, not the drug being modeled for a dose-response relationship. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper describes the enzymatic synthesis and antioxidant activity of peptides in vitro, not the pharmacokinetics of the drug glutamine. |
| PD | He_2023 | not_relevant | 0 | 0 | The paper reports the synthesis of peptides and their antioxidant activity (EC50 values for scavenging assays), which is a biochemical/food science analysis, not a pharmacodynamic (drug exposure-response) relationship for glutamine. |
| popPK | He_2026 | irrelevant | 0 | 0 | This is a metabolomics study identifying glutamine as one of several altered metabolites following T-DM1 therapy, not a pharmacokinetic study characterizing the disposition of glutamine as a drug. |
| popPK | Hensley_2025 | irrelevant | 2 | 0 | This is a preclinical PET imaging study in mice using a radiolabeled tracer to characterize tumor uptake and metabolite fractions, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for glutamine. |
| PGx | Herzfeld_1976 | not_relevant | 0 | 0 | The paper describes enzyme activities in rat tissues and does not report any pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glutamine. |
| PGx | Higaki_2007 | not_relevant | 0 | 0 | The paper discusses the use of amino acids like L-glutamine as absorption enhancers, not as the drug of interest, and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Calaspargase Pegol (an enzyme) and its effect on asparagine, not the pharmacokinetics of glutamine as a drug. |
| PGx | Hoekstra_2011 | not_relevant | 0 | 0 | The paper evaluates the functionality of a cell line for bioartificial liver applications, not pharmacogenomics of drug PK/PD. |
| popPK | Holz_2020 | irrelevant | 0 | 0 | The study reports metabolic biomarker levels (glutamine concentration) in COPD patients during exercise, not pharmacokinetic disposition parameters (CL, V, etc.) following drug dosing. |
| popPK | Huang_2023 | irrelevant | 4 | 0 | The study analyzes the PK of a radiolabeled glutamine analog ((2S,4S)-4-[18F]FEBGln) as a PET tracer, not the disposition parameters of glutamine itself, and no specific numeric PK values are provided in the text. |
| PD | Jain_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of SARS 3CLpro by glutamine analogues, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug glutamine in a biological system. |
| popPK | Jiang_2011 | irrelevant | 0 | 0 | The study investigates cerebral metabolic flux and substrate oxidation (using ketone bodies and glucose) in rats, rather than the pharmacokinetic parameters (CL, V, etc.) of glutamine as a subject drug. |
| popPK | Johansen-Leete_2022 | irrelevant | 0 | 0 | The paper describes antiviral peptides targeting SARS-CoV-2 protease, where glutamine is mentioned only as a specific amino acid residue in the protein structure, not as a drug subject to pharmacokinetic analysis. |
| PD | Johansen-Leete_2022 | not_relevant | 0 | 0 | The paper reports antiviral activity (EC50) for cyclic peptides, not for glutamine, and does not provide a pharmacodynamic model or exposure-response relationship for glutamine. |
| PGx | Kaler_1995 | not_relevant | 0 | 0 | The paper discusses a genetic variant in the copper-transporting ATPase and its effect on copper therapy response, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Kawano_2004 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of propofol and thiamylal on potassium channels in cell lines, not the pharmacokinetics of glutamine. |
| PD | Kawano_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of propofol and thiamylal, not glutamine. |
| PGx | Kong_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nutritional supplements for cardiac surgery that explicitly states the evidence does not support genotype-guided precision supplementation. |
| PGx | Korein_1994 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of Maple Syrup Urine Disease and BCAA neurotoxicity, not pharmacogenomic effects on the PK/PD of the drug glutamine. |
| PGx | Kose_2026 | not_relevant | 0 | 0 | The study characterizes the mitochondrial phenotype in Cockayne Syndrome and screens for therapeutic compounds, but does not report the pharmacokinetics or pharmacodynamics of glutamine. |
| PD | Laganà_2026 | not_relevant | 0 | 0 | The paper studies the toxicological effects of nanoceria (CeO2) on cells, not the pharmacodynamics of glutamine; glutamine is only mentioned as a metabolite that accumulates. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | The study investigates cerebral metabolic flux and glutamine synthesis via 13C MRS in mice, not the pharmacokinetic disposition parameters (CL, V, ka) of glutamine as a drug. |
| popPK | Lanfermeijer_1992 | irrelevant | 0 | 0 | The study is a plant physiology experiment on pea seed coats, not a pharmacokinetic study of the drug glutamine in an animal or human subject. |
| PGx | Lant_2021 | not_relevant | 0 | 0 | The paper investigates the effect of tRNA variants on protein aggregation in Huntington's disease and does not involve pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Lanz_2014 | irrelevant | 1 | 0 | This is a metabolic flux study using MRS to measure TCA cycle rates and neurotransmission in rats, not a pharmacokinetic study of glutamine disposition. |
| popPK | Laue_2026 | irrelevant | 0 | 0 | The paper describes a histological image analysis workflow for liver zonation in mice and does not involve glutamine pharmacokinetics or quantitative disposition parameters. |
| PD | Laue_2026 | not_relevant | 0 | 0 | The paper describes an image analysis workflow for quantifying spatial zonation of liver markers (steatosis, CYPs) in mice and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| PGx | Lei_1994 | not_relevant | 0 | 0 | The paper investigates mutations in the glucose-6-phosphatase gene causing glycogen storage disease type 1a and reports on enzyme activity/structural truncation, not pharmacokinetic or pharmacodynamic parameters of the drug glutamine. |
| popPK | Lhospice_2015 | irrelevant | 0 | 0 | The paper studies antibody-drug conjugates where glutamine is merely a residue site for conjugation, not the subject drug, and no PK parameters for glutamine are reported. |
| PGx | Li_1993 | not_relevant | 0 | 0 | The paper discusses the role of the glutamine residue at position 192 in paraoxonase activity regarding organophosphate toxicity, but does not report on the pharmacokinetics or pharmacodynamics of the amino acid glutamine as a drug or parameter. |
| PGx | Li_2008 | not_relevant | 0 | 0 | The paper studies RNA toxicity and degeneration in Drosophila related to ataxin-3, not pharmacogenomics of glutamine. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper describes the structural biology of the GAC enzyme involved in glutamine metabolism in cancer, not the pharmacokinetics or pharmacodynamics of a glutamine drug in humans influenced by genetic variants. |
| PGx | Liang_2023 | not_relevant | 0 | 0 | The study investigates the role of glutaminase in sperm function and redox homeostasis in C. elegans; it is not a pharmacogenomic study involving drug PK or PD. |
| popPK | Liao_2020 | irrelevant | 0 | 0 | The study investigates cytotoxicity and metabolic pathway changes of PCB95 in chicken embryo liver cells, with glutamine mentioned only as part of an affected amino acid metabolic pathway, not as the subject drug for PK parameter estimation. |
| PD | Liao_2020 | not_relevant | 0 | 0 | The paper studies the cytotoxicity of PCB95 and its metabolites, not the pharmacodynamics of glutamine; glutamine is only mentioned as a metabolite affected by MeO-PCB95. |
| PGx | Liu_2010 | not_relevant | 0 | 0 | The paper studies the GFAT1 gene in pigs and its association with carcass traits, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper focuses on TRPV1 pentapeptide inhibitors and has no relation to glutamine pharmacokinetics. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper reports on a TRPV1 pentapeptide inhibitor (P5), not glutamine, and does not provide specific numeric PD parameters (e.g., IC50 values or dose-response curves) in the provided text. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study investigates the biotransformation of obefazimod, not glutamine, and contains no pharmacokinetic data for glutamine. |
| PD | Lochman_2026 | not_relevant | 0 | 0 | The paper focuses on the biotransformation and metabolic pathways of obefazimod, not on pharmacodynamic or exposure-response relationships for glutamine. |
| popPK | Lowe_2022 | irrelevant | 0 | 0 | This is an in-vivo imaging study using MRS to measure brain metabolite concentrations in Huntington's disease; it does not report pharmacokinetic disposition parameters (CL, V, t1/2, ka) for administered glutamine. |
| popPK | Maese_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for recombinant Erwinia asparaginase (JZP458), not glutamine. |
| PD | Maese_2025 | not_relevant | 3 | 2 | The paper reports population pharmacokinetic (PK) modeling and clinical efficacy/safety outcomes (NSAA levels) but does not describe a pharmacodynamic (PD) model or provide numeric PD parameters (e.g., Emax, EC50) linking drug exposure to a pharmacological effect. |
| popPK | Maharem_2020 | irrelevant | 0 | 0 | This is an in-vitro enzymology study characterizing the l-glutaminase enzyme, not a pharmacokinetic study of glutamine disposition. |
| popPK | Maqsood_2020 | irrelevant | 0 | 0 | The study focuses on the characterization of an L-asparaginase enzyme and explicitly notes no activity with L-glutamine, containing no pharmacokinetic data. |
| PD | Maqsood_2020 | not_relevant | 0 | 0 | The paper characterizes the enzyme kinetics (K0.5, Hill coefficient) of L-asparaginase, not the pharmacodynamic exposure-response relationship of glutamine in a biological system. |
| PGx | Mercer_2026 | not_relevant | 0 | 0 | The paper reports metabolic changes in a neurodegeneration mouse model, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Miller_1990 | not_relevant | 0 | 0 | The paper describes the role of a yeast enzyme (GDH) in nitrogen metabolism and gene cloning, not a human pharmacogenomic effect on glutamine pharmacokinetics or pharmacodynamics. |
| popPK | Mishra_2020 | irrelevant | 0 | 0 | The study investigates neurotransmitter cycling rates in the brain using MRS, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a subject drug. |
| PGx | Mitchell_1985 | not_relevant | 0 | 0 | The paper describes a yeast gene (GLN1) and its role in glutamine metabolism, which is not a pharmacogenomic study of a drug's PK/PD in humans. |
| popPK | Miyashi_2026 | irrelevant | 0 | 0 | This is an in-vitro cell biology study measuring EC50 for nutrient requirements, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution for glutamine. |
| PGx | Mohammadi_2013 | not_relevant | 0 | 0 | The paper identifies a novel UGT1A1 mutation associated with Crigler-Najjar syndrome and reports bilirubin levels, but it does not report pharmacokinetic or pharmacodynamic effects of glutamine. |
| popPK | Molina_1995 | irrelevant | 0 | 0 | The study describes in-vitro mitochondrial transport kinetics, not in-vivo pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Montani_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of benzothiazole derivatives for skin disease, and contains no pharmacokinetic data for glutamine. |
| PD | Montani_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzothiazole derivatives, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Nakamura_1995 | irrelevant | 0 | 0 | The study characterizes the enzyme GMP synthetase and its interaction with the substrate glutamine, but does not report pharmacokinetic parameters (CL, V, etc.) for glutamine as a drug. |
| PD | Nakamura_1995 | not_relevant | 0 | 0 | The paper reports in vitro biochemical kinetics of GMP synthetase (enzyme activity vs. substrate/inhibitor concentration), not a pharmacodynamic (drug effect) relationship in a biological system or patient. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | The paper describes the mechanism of action of lonidamine and mentions glutamine oxidation inhibition in vitro, but does not report any pharmacokinetic parameters for glutamine. |
| PD | Nath_2016 | not_relevant | 1 | 2 | The paper is a mechanistic review of lonidamine that reports in vitro enzyme inhibition constants (Ki, IC50) for mitochondrial targets, but does not provide a pharmacodynamic exposure-response or dose-response model for glutamine or the drug in a biological system. |
| PGx | Nong_2005 | not_relevant | 0 | 0 | The paper describes a case of a genetic mutation (UGT1A1) in a patient but does not study the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Occhipinti_2010 | irrelevant | 0 | 0 | The paper is a computational modeling study of metabolic energetics in neurons and astrocytes, not a pharmacokinetic study of glutamine disposition. |
| PD | Odell_2009 | not_relevant | 3 | 2 | The paper reports a single IC50 value for an enzyme inhibitor, which is a pharmacodynamic parameter, but it lacks the exposure-response or dose-response curve data, multiple concentration points, or PK/PD modeling required to define a PD relationship or derive parameters like Emax or slope. |
| popPK | Ohashi_1995 | irrelevant | 0 | 0 | The paper describes the purification and characterization of transglutaminase enzyme kinetics (Km, inhibition) in rat brain, which is a mechanistic study unrelated to the pharmacokinetic disposition of glutamine. |
| PD | Ohashi_1995 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, EC50 for Ca2+) for purified transglutaminase, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Oku_2004 | irrelevant | 0 | 0 | The paper describes the isolation and structural elucidation of a new compound (neamphamide A) and does not report any pharmacokinetic parameters for glutamine. |
| PGx | Owens_1992 | not_relevant | 0 | 0 | The paper discusses mutations in the deoxycytidine kinase gene affecting resistance to ara-C and ddC, and the drug in question is glutamine, which is not the subject of the study. |
| PGx | Ozarchevici_2025 | not_relevant | 0 | 0 | The paper investigates plant growth and metabolomics in Camassia cultivars and does not contain any information regarding pharmacogenomics or the effects of gene variants on the pharmacokinetics or pharmacodynamics of glutamine. |
| PGx | Pan_2012 | not_relevant | 0 | 0 | The paper reports the establishment of an immortalized hepatocyte cell line and its general functional characteristics, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glutamine. |
| PD | Parkash_2002 | not_relevant | 0 | 0 | The paper reports the IC50 of a peptide (charantin) in a cell-free system, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Perkins_2012 | irrelevant | 0 | 0 | The paper studies glycine receptor mutations using glutamine as an amino acid substitution, not as a pharmacokinetic subject drug. |
| PGx | Pesti_1994 | not_relevant | 0 | 0 | The paper compares amino acid metabolism in different chicken genotypes (lean vs fat) and does not report a pharmacogenomic effect on the PK or PD of glutamine as a drug. |
| popPK | Plaindoux_2025 | irrelevant | 0 | 0 | The paper uses MRS to map glutamine as a neurochemical biomarker in epilepsy, not to measure pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Pliska_1976 | irrelevant | 0 | 0 | The paper studies the inactivation of oxytocin analogues containing glutamine, not the pharmacokinetics of the drug glutamine itself. |
| PGx | Podymova_2021 | not_relevant | 0 | 0 | The paper is a review of the pathogenesis and clinical management of hepatic encephalopathy and does not report any pharmacogenomic studies or gene-variant effects on the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper studies glycine metabolism in hepatocytes and does not investigate the pharmacokinetics of glutamine. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper discusses the metabolic effects of glycine on hepatocyte maturation and CYP activity but does not report a pharmacodynamic model, exposure-response relationship, or numeric PD parameters for glutamine. |
| PD | Qian_2011 | not_relevant | 1 | 1 | The paper reports an in vitro IC50 for a GFAT inhibitor and in vivo efficacy in an OGTT, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for glutamine or the drug. |
| PD | Qiao_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for a new compound (CIB-Q22) and mentions glutamine deprivation as a mechanism, but does not report a pharmacodynamic or exposure-response relationship for glutamine itself. |
| PGx | Qin_2026 | not_relevant | 0 | 0 | The paper focuses on nitrogen use efficiency in plants (sugarcane), not pharmacogenomics or drug pharmacokinetics. |
| PGx | Redis_2016 | not_relevant | 0 | 0 | The paper discusses lncRNAs and cancer metabolism, but does not report pharmacogenomic effects on PK/PD parameters of glutamine. |
| popPK | Robertson_1992 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on E. coli CTP synthetase where glutamine is used as a substrate, not a study of glutamine pharmacokinetics. |
| PD | Robertson_1992 | not_relevant | 0 | 0 | The paper describes chemical modification and inactivation kinetics of an enzyme by thiourea dioxide, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| PGx | Robinson_2026 | not_relevant | 0 | 0 | The paper focuses on genetic susceptibility to iron-induced porphyria and mentions glutamine synthetase expression only as a secondary observation, without reporting any pharmacokinetic or pharmacodynamic parameters for glutamine as a drug. |
| popPK | Sadaf_2024 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | Sadaf_2024_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of l-glutamine, including dose and food effects on exposure, but does not report any pharmacodynamic (PD) or exposure-response relationship for a clinical or biomarker endpoint. |
| PGx | Sahai_1994 | not_relevant | 0 | 0 | The paper investigates cellular mechanisms in kidney cell lines and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PGx | Salah_2018 | not_relevant | 0 | 0 | The study investigates the effect of a gene variant on the response to Albuterol (a beta-agonist), not on a pharmacokinetic or pharmacodynamic parameter of glutamine. |
| popPK | Sastrasinh_1989 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of glutamine transport in submitochondrial particles, not a pharmacokinetic study reporting disposition parameters for the drug glutamine. |
| PD | Sastrasinh_1989 | not_relevant | 3 | 2 | The paper reports kinetic parameters (Hill coefficient) for glutamine transport in isolated mitochondria, which is a mechanistic/physiological study, not a pharmacodynamic exposure-response or dose-response analysis of a drug effect in a biological system. |
| popPK | Seo_2022 | irrelevant | 2 | 4 | The study uses a radiolabeled glutamine analog ([18F]4-fluoroglutamine) as a PET tracer to assess metabolic activity via compartmental modeling, but it does not report standard disposition parameters (CL, V, t1/2) for glutamine itself as a systemic drug. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asparaginase, not glutamine. |
| PD | Sethuramalingam_2026 | not_relevant | 2 | 1 | The paper reports population PK and a therapeutic threshold (&gt;100 IU/L) but does not model or report a quantitative exposure-response relationship (e.g., Emax, EC50) for the drug's effect. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The study investigates glutamine metabolic flux and reprogramming in cells, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a drug. |
| popPK | Sharma_1982 | irrelevant | 0 | 0 | The paper investigates the functional properties of hemoglobin in opossums where glutamine is an amino acid residue, not the pharmacokinetics of the drug glutamine. |
| PD | Sharma_1982 | not_relevant | 0 | 0 | The paper discusses the structural and functional properties of opossum hemoglobin, specifically the role of a glutamine residue at position E7, and does not report any pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Shen_2013 | irrelevant | 0 | 0 | This is a review article regarding the metabolic modeling of the glutamate-glutamine neurotransmitter cycle using MRS, not a pharmacokinetic study of glutamine as a drug subject. |
| popPK | Shiraishi_2008 | irrelevant | 0 | 0 | The paper studies the delivery of PNA conjugates using glutamine-derived linkers in cell lines, not the pharmacokinetics of L-glutamine as a drug. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The study investigates the metabolomic effects of ketamine and lists glutamine only as a metabolite showing an increase, rather than performing a pharmacokinetic study of glutamine as a drug. |
| PGx | Sparreboom_2005 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of the ABCG2 genotype on topotecan PK, not glutamine; the mention of glutamine refers to a protein residue, not the drug. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | The paper is a review regarding ketamine pharmacokinetics in diabetes and does not report PK parameters for glutamine. |
| PD | Sukhram_2026 | not_relevant | 1 | 0 | The paper is a scoping review that outlines a future research agenda for PK/PD modeling but does not report any specific numeric PD parameters or exposure-response relationships for glutamine (or ketamine). |
| PGx | Tanino_2026 | not_relevant | 0 | 0 | The paper investigates the transport kinetics of the OATP1B1 transporter itself, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Tapia-Arancibia_1989 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro analysis of glutamine's effect on somatostatin release, not a pharmacokinetic study of glutamine disposition. |
| PD | Tapia-Arancibia_1989 | not_relevant | 0 | 0 | The paper explicitly states that glutamine did not modify somatostatin release, so no dose-response or PD relationship is reported for glutamine. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for isoniazid (an anti-tuberculosis drug), not glutamine. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for isoniazid, focusing on clearance and NAT2 genotype, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Thöny_1994 | not_relevant | 0 | 0 | The paper describes mutations in a metabolic enzyme (PTPS) causing a disease (BH4 deficiency) and mentions a residue substitution with 'glutamine' (R25Q), but it does not report on the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Trikha_1994 | irrelevant | 0 | 0 | The study focuses on the purification and characterization of snake venom fibrolase isoforms, not the pharmacokinetics of glutamine. |
| PD | Trikha_1994 | not_relevant | 0 | 0 | The paper reports enzymatic activity (EC50) of a snake venom protein (fibrolase), not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| PGx | Valim_2025 | not_relevant | 0 | 0 | The study analyzes metabolic associations in cattle for meat tenderness, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Viletska_2026 | not_relevant | 0 | 0 | The paper investigates the regulation of PCK2 expression by ERN1 and the sensitivity of cells to nutrient deprivation, rather than reporting pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug leritrelvir (an anti-COVID-19 protease inhibitor), not for glutamine. |
| PD | Weber_1991 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for macrocyclic renin inhibitors, which are pharmacodynamic potency metrics for a different drug class, not a pharmacokinetic/pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Wei_2001 | irrelevant | 0 | 0 | The paper describes mutagenesis studies of aldehyde dehydrogenase enzymes, mentioning glutamine only as a specific amino acid residue for substitution, not as a drug for pharmacokinetic analysis. |
| PD | Wei_2001 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax, Hill coefficient) for mutated aldehyde dehydrogenase, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Westhoff_2002 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro study on an ammonium transporter in Xenopus oocytes, where glutamine is used only as an inactive compound in the inhibitor panel, not as the subject of pharmacokinetic analysis. |
| PD | Westhoff_2002 | not_relevant | 0 | 0 | The paper reports transport kinetics (EC50, Vmax) for ammonium/methylamine uptake by Rh glycoprotein, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Wilkinson_2014 | irrelevant | 0 | 0 | The study investigates the digestibility of glutamine as an amino acid in broiler chicks, not its pharmacokinetics. |
| popPK | Wolahan_2018 | irrelevant | 0 | 0 | This study investigates lactate pharmacokinetics and metabolism in TBI patients, mentioning glutamine only as a secondary metabolite that changed by 34%, without reporting specific PK parameters (CL, V, ka) for glutamine. |
| PGx | Wraith_1992 | not_relevant | 0 | 0 | The paper investigates T-cell receptor binding and autoimmune encephalomyelitis, reporting no pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine. |
| PD | Wu_2016 | not_relevant | 0 | 0 | The paper reports an IC50 for BACE1 inhibition and qualitative brain Aβ reduction in a dose-response study, but does not provide numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for the drug's pharmacodynamic effect. |
| PD | Xu_2021 | not_relevant | 2 | 1 | The paper reports in vitro IC50 and binding affinity (Kd) for a GLS1 inhibitor, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-effect curve with numeric PD parameters (e.g., Emax, EC50) for the drug in vivo or in a PK context. |
| PGx | Yamaguchi-Iwai_1995 | not_relevant | 0 | 0 | The paper discusses yeast iron metabolism genetics, not human pharmacogenomics of glutamine. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper studies toxicology in earthworms and does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of glutamine. |
| PD | Yu_2016 | not_relevant | 0 | 0 | The paper investigates the genetic knockdown of ASNS and its effect on cisplatin sensitivity, not the pharmacodynamic or exposure-response relationship of glutamine itself. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper discusses glutamine as a structural component of viral protease inhibitors (inhibitor design), not as a subject drug for pharmacokinetic analysis. |
| PD | Zhang_2020 | not_relevant | 0 | 0 | The paper reports antiviral potency (EC50) of synthetic alpha-ketoamides against viral proteases, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates sex differences and the mechanism of corneal edema in a mouse model of CHED, where glutamine metabolism is mentioned as a source of oxidative stress, but it does not report a pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Zhang_2026_2 | not_relevant | 0 | 0 | The paper investigates natural variation in rice seed germination rate and glutamine's role as a metabolic regulator in plants, not human pharmacogenomics or drug PK/PD. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper studies nitrogen metabolism and gene expression in rice cultivars, not pharmacogenomics or human pharmacokinetics. |
| popPK | de_2004 | irrelevant | 2 | 0 | This is a metabolic turnover study measuring net protein and glutamine synthesis/breakdown rates in rat muscle, not a pharmacokinetic study reporting disposition parameters (CL, V, half-life) for glutamine dosing. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper describes drug-induced changes in gene expression and metabolite levels, not a pharmacogenomic effect of a human gene variant on the drug's PK or PD. |
| popPK | do_2011 | irrelevant | 0 | 0 | The study investigates pancreatic beta-cell function and insulin secretion in rats, using glutamine only as a stimulus/co-factor, not as a subject drug for pharmacokinetic analysis. |
| PGx | von_1994 | not_relevant | 0 | 0 | The paper studies a genetic polymorphism in a host protein (apo A-IV) and its effect on lipid metabolism, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:39 UTC</sub>
