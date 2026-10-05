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
| glutamine (l-glutamine) | parent | 146.146 | C5H10N2O3 | PubChem | [5961](https://pubchem.ncbi.nlm.nih.gov/compound/5961) | Sadaf_2024_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:04 | 21:40 | 0/0/1 | 0/0/0 | 0/0/0 | 516,037/41,007 | ollama / qwen3.8:27b-mtp-q8_0 | 22 | 8/19 | 18/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Sadaf_2024_2_reference](drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference.md) | — | 1-compartment (no model) | 4 | Sadaf A et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01349-4](https://doi.org/10.1007/s40262-024-01349-4) |

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
- **screened:** 14  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deutz_2025.pdf` | Deutz NEP et al., The acute changes in intracellular amin…, Clinical nutrition (Edinbur… (2025) | popPK | 8 | [10.1016/j.clnu.2025.07.026](https://doi.org/10.1016/j.clnu.2025.07.026) | [40784157](https://pubmed.ncbi.nlm.nih.gov/40784157) | The study reports quantitative kinetic parameters (clearance, pool sizes, production rates) for glutamine in a pig sepsis model, with specific percentage changes provided in the abstract. |
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

<sub>queue written 2026-10-05T10:48:34.096847+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achanta_2024 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Achanta_2024 | not_relevant | 0 | 0 | The paper discusses AMPK activators and brain metabolism, not glutamine, and does not report a pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Ahn_2010 | irrelevant | 0 | 0 | The paper investigates the structural role of helix 8 in the cannabinoid receptor 1 (CB1) and mentions glutamine only as an amino acid substitution in a mutant, not as a drug subject to pharmacokinetic analysis. |
| PD | Ahn_2010 | not_relevant | 0 | 0 | The paper investigates the structural role of helix 8 residues in the cannabinoid receptor 1 (CB1) using mutagenesis and binding assays, and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Albers_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of a glutamine transporter in Xenopus oocytes (in vitro) and does not report pharmacokinetic disposition parameters for glutamine. |
| PD | Albers_2001 | not_relevant | 0 | 0 | The paper describes the electrophysiology and transport stoichiometry of the ATA1 transporter in oocytes, not a pharmacodynamic exposure-response relationship for glutamine as a drug. |
| PD | Andrews_1995 | not_relevant | 0 | 0 | The paper describes a structural biology study identifying a specific amino acid sequence (Gln-628 to Val-646) in von Willebrand factor that mediates binding to sulfatides, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Avramis_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of asparaginase and the pharmacodynamics of glutamine deamination, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a subject drug. |
| popPK | Avramis_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the drug Erwinia asparaginase (Erwinase), not glutamine; glutamine is only mentioned as a substrate for deamination in the pharmacodynamic response. |
| popPK | Bae_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of MIT-001, not glutamine. |
| PD | Bae_2026 | not_relevant | 0 | 0 | The paper reports a population PK model and dose optimization based on preclinical efficacy and safety, but it does not present a pharmacodynamic (PD) model or numeric exposure-response/dose-response parameters (e.g., Emax, EC50) for the drug. |
| popPK | Balázs_1988 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Balázs_1988 | not_relevant | 0 | 0 | The paper investigates the effect of NMDA on cell survival and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| PGx | Barr_2025 | not_relevant | 0 | 0 | The study investigates dietary interventions (ammonium hydroxide enhancement) on liver metabolism in mice, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper describes an in-vitro immunotherapy study using siRNA against PD-L1 in lung cancer cells and contains no pharmacokinetic data for glutamine. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper describes the efficacy of a PD-L1 siRNA in vitro but does not report a pharmacokinetic/pharmacodynamic model, exposure-response relationship, or numeric PD parameters (e.g., EC50, Emax) for glutamine or the siRNA itself. |
| popPK | Birnir_1997 | irrelevant | 0 | 0 | The study investigates the structural and functional properties of the GABAA receptor using glutamine as an amino acid substitution in a mutation, not as a pharmacokinetic subject drug. |
| PD | Birnir_1997 | not_relevant | 0 | 0 | The paper describes electrophysiological properties of a mutated GABAA receptor (GABA response, pentobarbitone modulation) and does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug glutamine. |
| PD | Bobzin_2000 | not_relevant | 3 | 2 | The paper reports a single IC50 value for aaptamine (not glutamine) against an enzyme, which is a pharmacological potency metric, not a pharmacodynamic exposure-response or dose-response relationship for the drug glutamine. |
| PGx | Bruhn_1992 | not_relevant | 0 | 0 | The paper reports metabolic changes in infants with peroxisomal disorders using MRS, not a pharmacogenomic effect on the PK/PD of glutamine as a drug. |
| popPK | Calvetti_2013 | irrelevant | 0 | 0 | The paper is an in silico metabolic flux balance analysis of neurotransmitter cycling, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for glutamine as a drug. |
| PGx | Cassago_2012 | not_relevant | 0 | 0 | The paper describes the structural biology and metabolic role of the Glutaminase C enzyme in cancer, not the pharmacokinetics or pharmacodynamics of glutamine as a drug influenced by genetic variants. |
| popPK | Charney_2020 | irrelevant | 0 | 0 | The study measures glutamine concentrations in brain tissue via MRS as a neurochemical marker, not pharmacokinetic parameters (CL, V, etc.) following drug administration. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | The paper describes in vitro enzymatic kinetics of a mutated porcine enzyme, not the pharmacokinetics of glutamine as a drug. |
| PD | Chen_1994 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and the effect of a mutation on AMP cooperativity, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | The paper is a translational hypothesis/framework that reports no original data, and glutamine is only mentioned as an optional exploratory component without any pharmacokinetic parameters. |
| PD | Cheung_2026 | not_relevant | 0 | 0 | The paper is a conceptual framework and evidence synthesis that explicitly reports no original clinical or laboratory data, and glutamine is only mentioned as an optional exploratory component without any PD analysis. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The paper is a translational framework/hypothesis with no original data, and glutamine is only an optional exploratory component, not the subject of a pharmacogenomic PK/PD analysis. |
| popPK | Cheung_2026_2 | irrelevant | 0 | 0 | The paper is a clinical case series on dextromethorphan for PTSD and does not report pharmacokinetic parameters for glutamine. |
| PD | Cheung_2026_2 | not_relevant | 0 | 0 | The paper is a case series reporting clinical outcomes without any pharmacokinetic data, concentration measurements, or quantitative dose-response modeling. |
| PGx | Cheung_2026_3 | not_relevant | 0 | 0 | The paper is a clinical case report on OCD treatment outcomes and does not report pharmacogenomic effects on the PK or PD parameters of glutamine. |
| PGx | Cheung_2026_4 | not_relevant | 0 | 0 | The paper is a case report on a pharmacodynamic interaction (CYP2D6 inhibition) affecting dextromethorphan, not a pharmacogenomic study of glutamine. |
| PGx | Chiarelli_2006 | not_relevant | 0 | 0 | The paper describes mutations in the P5'N-1 gene causing a hemolytic anemia enzyme disorder, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PD | Cho_2009 | not_relevant | 0 | 0 | The paper describes a cell-based assay for 11beta-HSD1 inhibitors and reports an IC50 for carbenoxolone, but does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Cremer_1974 | irrelevant | 0 | 0 | The study measures metabolic rates of glucose and ketone bodies in rat brain, with glutamine only mentioned as a measured metabolite, not as the subject drug for PK parameter estimation. |
| popPK | Dehghani_2016 | irrelevant | 0 | 0 | The study is a 13C-MRS metabolic flux analysis in rats, not a pharmacokinetic study of glutamine as a drug, and reports metabolic rates (fluxes) rather than PK parameters like clearance or volume of distribution. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for posaconazole, not glutamine. |
| PD | Ding_2022 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PopPK) models for posaconazole and does not report any pharmacodynamic (PD) or exposure-response relationships for glutamine. |
| popPK | Douglas_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of pain and white cell counts in children with mucositis, not the pharmacokinetics of glutamine. |
| PGx | Duldulao_2013 | not_relevant | 0 | 0 | The paper reports associations between gene polymorphisms and clinical toxicity (adverse events) to chemotherapy, not pharmacokinetic or pharmacodynamic parameters of glutamine. |
| popPK | Dumitrescu_2026 | irrelevant | 0 | 0 | The study measures glutamine concentrations via MRS as a neurometabolite biomarker, not pharmacokinetic disposition parameters. |
| popPK | Earhart_1983 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acivicin (an L-glutamine antagonist), not for glutamine itself. |
| popPK | Errey_2005 | irrelevant | 0 | 0 | The paper describes in vitro enzymatic kinetics of a Mycobacterium tuberculosis enzyme using glutamine as a substrate, not the pharmacokinetics of glutamine as a drug. |
| PD | Errey_2005 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, kcat, Ki) for a bacterial enzyme, not a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| PGx | Evans_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of oxylipins (9-HODE/9-HOTrE) on HepG2 cells and does not report pharmacogenomic effects on the PK/PD of glutamine. |
| PGx | Evers_2013 | not_relevant | 0 | 0 | The paper discusses a gene therapy strategy for a genetic disease (SCA3) involving polyglutamine expansion, not the pharmacogenomics of the drug glutamine. |
| popPK | Fentem_1983 | irrelevant | 0 | 0 | The study investigates nitrogen assimilation kinetics in barley roots, not the pharmacokinetics of glutamine as a drug in a biological system. |
| PGx | Furlong_1993 | not_relevant | 0 | 0 | The paper discusses paraoxonase polymorphisms affecting organophosphate detoxification, not the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Garfinkel_1975 | irrelevant | 0 | 0 | The study is an in-vitro metabolic simulation of brain slices, not a pharmacokinetic study of glutamine disposition in a whole organism. |
| PGx | Gilchrist_2025 | not_relevant | 0 | 0 | The paper investigates the causal effects of plasma metabolites (including glutamine) on psychiatric and neurodegenerative disease risk using Mendelian randomization, rather than the pharmacokinetic or pharmacodynamic effects of a drug. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The paper describes a computational drug discovery pipeline for hypocretin receptor ligands using zebrafish and does not report pharmacokinetic parameters for glutamine. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The paper investigates the role of the transcription factor BATF2 in tumor immunity and how glutamine levels affect gene expression, but it does not report pharmacokinetic parameters (CL, V, etc.) for glutamine. |
| popPK | Grkovski_2020 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters for the PET radiotracer 18F-fluoroglutamine (18F-FGln), not the drug glutamine itself, and the specific numeric values are largely in tables not fully provided in the evidence. |
| popPK | Guido_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on cancer metabolism and mitochondrial fission, not a pharmacokinetic study of glutamine as a drug. |
| popPK | Gurgul-Convey_2015 | irrelevant | 0 | 0 | The study characterizes a beta-cell line and mentions glutamine only as a secretagogue potentiator, not as a subject drug for pharmacokinetic analysis. |
| PD | Gurgul-Convey_2015 | not_relevant | 1 | 0 | The paper characterizes a cell line and reports glucose EC50, but only qualitatively mentions glutamine's potentiating effect without providing numeric dose-response parameters or curves for glutamine. |
| PGx | Gómez-Vicente_2013 | not_relevant | 0 | 0 | The paper characterizes a murine retinal cell line and its markers (including glutamine synthetase) but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Haser_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Haser_1985 | not_relevant | 0 | 0 | The paper compares the biochemical properties of phosphate-dependent glutaminase enzymes from rat tissues, not the pharmacodynamic or exposure-response relationship of glutamine as a drug. |
| popPK | Hassanein_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of glutamine supplementation for oral mucositis, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | He_2022 | irrelevant | 0 | 0 | The study investigates the metabolic role of glutamine in the glutamate-glutamine cycle and its effect on anaesthetic sensitivity, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a drug. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper reports the EC50 of sevoflurane (an anesthetic), not glutamine; glutamine is a metabolic intermediate in the mechanism, not the drug being modeled for a dose-response relationship. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper describes the enzymatic synthesis and antioxidant activity of glutamyl peptides, not the pharmacokinetics of glutamine. |
| PD | He_2023 | not_relevant | 0 | 0 | The paper reports the synthesis of peptides and their antioxidant activity (EC50 values for scavenging assays), which is a biochemical/food science analysis, not a pharmacodynamic (drug exposure-response) relationship for glutamine. |
| popPK | He_2026 | irrelevant | 0 | 0 | The study is a metabolomics analysis of metabolic changes induced by T-DM1 therapy, not a pharmacokinetic study of glutamine as a subject drug. |
| popPK | Hensley_2025 | irrelevant | 2 | 0 | The study focuses on PET imaging kinetics and metabolite fractions of a radiotracer in mice, not on quantitative pharmacokinetic parameters (CL, V, ka) for glutamine as a therapeutic drug. |
| PGx | Herzfeld_1976 | not_relevant | 0 | 0 | The paper describes baseline enzyme activities in rat tissues and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine. |
| PGx | Higaki_2007 | not_relevant | 0 | 0 | The paper investigates the use of glutamine as a cytoprotective adjuvant to improve drug absorption, not the pharmacokinetics or pharmacodynamics of glutamine itself influenced by genetic variants. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calaspargase pegol (an enzyme), not glutamine. |
| PGx | Hoekstra_2011 | not_relevant | 0 | 0 | The paper investigates the suitability of HepaRG cells for bioartificial liver applications and the effects of DMSO and carbamoyl-glutamate on cell function, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of glutamine. |
| popPK | Holz_2020 | irrelevant | 0 | 0 | The study measures serum glutamine levels as a metabolic biomarker in COPD patients but does not report pharmacokinetic parameters (CL, V, ka) for glutamine as a dosed drug. |
| popPK | Huang_2023 | irrelevant | 2 | 0 | The study investigates the pharmacokinetics of a radiolabeled glutamine tracer ((2S,4S)-4-[18F]FEBGln) for PET imaging, not the disposition parameters of glutamine itself, and no numeric PK values are provided in the evidence. |
| PD | Jain_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of SARS 3CLpro by glutamine analogues, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug glutamine in a biological system. |
| popPK | Jiang_2011 | irrelevant | 0 | 0 | The study measures cerebral metabolic rates of ketone bodies and glucose using NMR, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine. |
| popPK | Johansen-Leete_2022 | irrelevant | 0 | 0 | The paper describes antiviral peptides targeting SARS-CoV-2 protease and mentions glutamine only as an amino acid residue in the protein structure, not as a drug subject to pharmacokinetic analysis. |
| PD | Johansen-Leete_2022 | not_relevant | 0 | 0 | The paper reports antiviral activity (EC50) for cyclic peptides, not for glutamine, and does not provide a pharmacodynamic model or exposure-response relationship for glutamine. |
| PGx | Kaler_1995 | not_relevant | 0 | 0 | The paper discusses a genetic mutation in Menkes disease and its response to copper therapy, not the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Kawano_2004 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of anesthetic effects on potassium channels in vitro and does not report pharmacokinetic parameters for glutamine. |
| PD | Kawano_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of propofol and thiamylal, not glutamine. |
| PGx | Kong_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nutritional supplements in cardiac surgery and explicitly states that the evidence does not support genotype-guided precision supplementation, containing no pharmacogenomic data. |
| PGx | Korein_1994 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of Maple Syrup Urine Disease and neurotoxicity, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Kose_2026 | not_relevant | 0 | 0 | The paper investigates mitochondrial dysfunction and pharmacological rescue in Cockayne Syndrome, not the pharmacokinetics or pharmacodynamics of glutamine. |
| PD | Laganà_2026 | not_relevant | 0 | 0 | The paper studies the toxicological effects of nanoceria (CeO2) on cells, not the pharmacodynamics of glutamine; glutamine is only mentioned as a metabolite that accumulates. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | The study investigates cerebral metabolic flux and TCA cycle rates in mouse brain using 13C MRS, not the pharmacokinetic disposition parameters (CL, V, ka) of glutamine as a drug. |
| popPK | Lanfermeijer_1992 | irrelevant | 0 | 0 | The study analyzes amino acid release from pea seed coats (botanical physiology), not the pharmacokinetics of glutamine as a drug in human or animal subjects. |
| PGx | Lant_2021 | not_relevant | 0 | 0 | The paper investigates the effect of tRNA variants on polyglutamine aggregate formation in neurodegenerative disease models, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Lanz_2014 | irrelevant | 0 | 0 | The study measures metabolic fluxes and pool sizes of glutamine in rat brain using MRS, not pharmacokinetic disposition parameters (CL, V, ka) for glutamine as a drug. |
| popPK | Laue_2026 | irrelevant | 0 | 0 | The paper describes an image analysis workflow for hepatic zonation in mouse livers and does not report pharmacokinetic parameters for glutamine. |
| PD | Laue_2026 | not_relevant | 0 | 0 | The paper describes an image analysis workflow for quantifying spatial zonation of liver markers (steatosis, CYPs) in mice and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| PGx | Lei_1994 | not_relevant | 0 | 0 | The paper describes mutations in the G6Pase gene causing Glycogen Storage Disease Type 1A and their effect on enzyme activity, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Lhospice_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antibody-drug conjugates (ADCs) where glutamine is merely a conjugation site on the antibody, not the subject drug. |
| PGx | Li_1993 | not_relevant | 0 | 0 | The paper discusses the role of the paraoxonase enzyme in metabolizing organophosphates, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PGx | Li_2008 | not_relevant | 0 | 0 | The paper investigates RNA toxicity in Drosophila models of Spinocerebellar Ataxia Type 3 and does not involve glutamine pharmacokinetics or pharmacodynamics. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper describes the structural biology and enzymatic mechanism of glutaminase (GAC) in cancer cells, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Liang_2023 | not_relevant | 0 | 0 | The paper investigates the biological role of glutaminase in sperm function in C. elegans, not the pharmacokinetics or pharmacodynamics of glutamine as a drug in humans. |
| popPK | Liao_2020 | irrelevant | 0 | 0 | The study investigates the cytotoxicity and metabolic effects of PCB95 in chicken cells, where glutamine is only mentioned as part of a metabolic pathway affected by the pollutant, not as the subject drug for PK analysis. |
| PD | Liao_2020 | not_relevant | 0 | 0 | The paper studies the cytotoxicity of PCB95 and its metabolites, not the pharmacodynamics of glutamine; glutamine is only mentioned as a metabolite affected by MeO-PCB95. |
| PGx | Liu_2010 | not_relevant | 0 | 0 | The paper studies the GFAT1 gene in pigs and its association with carcass traits, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a TRPV1 pentapeptide inhibitor for allergic skin disorders and contains no pharmacokinetic data for glutamine. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper reports on a TRPV1 pentapeptide inhibitor (P5), not glutamine, and does not provide specific numeric PD parameters (e.g., IC50 values or dose-response curves) in the provided text. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study focuses on the biotransformation of obefazimod in sheep and nematodes, not the pharmacokinetics of glutamine. |
| PD | Lochman_2026 | not_relevant | 0 | 0 | The paper focuses on the biotransformation and metabolic pathways of obefazimod, not on pharmacodynamic or exposure-response relationships for glutamine. |
| popPK | Lowe_2022 | irrelevant | 0 | 0 | The study uses proton magnetic resonance spectroscopy to measure brain metabolite concentrations (including glutamine) as biomarkers in Huntington's disease, but it does not report pharmacokinetic parameters (CL, V, ka, etc.) for glutamine as a dosed drug. |
| popPK | Maese_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant Erwinia asparaginase (JZP458), not glutamine. |
| PD | Maese_2025 | not_relevant | 3 | 2 | The paper reports population pharmacokinetic (PK) modeling and clinical efficacy/safety outcomes (NSAA levels) but does not describe a pharmacodynamic (PD) model or provide numeric PD parameters (e.g., Emax, EC50) linking drug exposure to a pharmacological effect. |
| popPK | Maharem_2020 | irrelevant | 0 | 0 | The study characterizes the enzyme l-glutaminase (which depletes glutamine) and its anticancer properties, rather than reporting pharmacokinetic parameters for glutamine itself. |
| popPK | Maqsood_2020 | irrelevant | 0 | 0 | The paper characterizes the enzymatic properties of L-asparaginase and notes a lack of activity towards glutamine, but does not report pharmacokinetic parameters for glutamine. |
| PD | Maqsood_2020 | not_relevant | 0 | 0 | The paper characterizes the enzyme kinetics (K0.5, Hill coefficient) of L-asparaginase, not the pharmacodynamic exposure-response relationship of glutamine in a biological system. |
| PGx | Mercer_2026 | not_relevant | 0 | 0 | The paper reports metabolic changes in a mouse model of neurodegeneration, not a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Miller_1990 | not_relevant | 0 | 0 | The paper studies yeast nitrogen metabolism and gene function, not human pharmacogenomics or drug PK/PD. |
| popPK | Mishra_2020 | irrelevant | 0 | 0 | The study investigates glutamine metabolism rates in a depression model using MR spectroscopy, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a drug. |
| PGx | Mitchell_1985 | not_relevant | 0 | 0 | The paper describes the genetic basis of glutamine synthetase in yeast, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Miyashi_2026 | irrelevant | 0 | 0 | The study is an in-vitro cell culture experiment measuring nutrient requirements (EC50) for cell viability, not a pharmacokinetic study reporting disposition parameters like clearance or volume for glutamine. |
| PGx | Mohammadi_2013 | not_relevant | 0 | 0 | The paper reports genetic mutations in UGT1A1 associated with Crigler-Najjar syndrome (bilirubin metabolism) and does not investigate the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Molina_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glutamine transport in isolated mitochondrial vesicles, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Montani_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of benzothiazole derivatives for skin diseases and contains no pharmacokinetic data for glutamine. |
| PD | Montani_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzothiazole derivatives, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Nakamura_1995 | irrelevant | 0 | 0 | The paper describes the biochemical characterization of the enzyme GMP synthetase, not the pharmacokinetics of the drug glutamine. |
| PD | Nakamura_1995 | not_relevant | 0 | 0 | The paper reports in vitro biochemical kinetics of GMP synthetase (enzyme activity vs. substrate/inhibitor concentration), not a pharmacodynamic (drug effect) relationship in a biological system or patient. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | The paper describes the mechanism of action of lonidamine on metabolic pathways, not the pharmacokinetics of glutamine. |
| PD | Nath_2016 | not_relevant | 1 | 2 | The paper is a mechanistic review of lonidamine that reports in vitro enzyme inhibition constants (Ki, IC50) for mitochondrial targets, but does not provide a pharmacodynamic exposure-response or dose-response model for glutamine or the drug in a biological system. |
| PGx | Nong_2005 | not_relevant | 0 | 0 | The paper reports a genetic mutation in UGT1A1 affecting bilirubin metabolism, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Occhipinti_2010 | irrelevant | 0 | 0 | The paper is a computational model of metabolic energetics in neurons and astrocytes, not a pharmacokinetic study of glutamine disposition. |
| PD | Odell_2009 | not_relevant | 3 | 2 | The paper reports a single IC50 value for an enzyme inhibitor, which is a pharmacodynamic parameter, but it lacks the exposure-response or dose-response curve data, multiple concentration points, or PK/PD modeling required to define a PD relationship or derive parameters like Emax or slope. |
| popPK | Ohashi_1995 | irrelevant | 0 | 0 | The paper describes the purification and enzymatic characterization of transglutaminase in rat brain, not the pharmacokinetics of glutamine. |
| PD | Ohashi_1995 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, EC50 for Ca2+) for purified transglutaminase, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Oku_2004 | irrelevant | 0 | 0 | The paper describes the isolation and structure of a new HIV-inhibitory depsipeptide (neamphamide A) and does not report pharmacokinetic parameters for glutamine. |
| PGx | Owens_1992 | not_relevant | 0 | 0 | The paper discusses mutations in the deoxycytidine kinase gene affecting resistance to ara-C and ddC, not the pharmacokinetics or pharmacodynamics of glutamine. |
| PGx | Ozarchevici_2025 | not_relevant | 0 | 0 | The paper studies plant metabolism and growth traits in Camassia cultivars, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Pan_2012 | not_relevant | 0 | 0 | The paper describes the establishment of a cell line and mentions glutamine synthetase expression, but does not report pharmacogenomic effects on glutamine PK/PD parameters. |
| PD | Parkash_2002 | not_relevant | 0 | 0 | The paper reports the IC50 of a peptide (charantin) in a cell-free system, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Perkins_2012 | irrelevant | 0 | 0 | The paper investigates glycine receptor mutations and ethanol sensitivity, not the pharmacokinetics of the drug glutamine. |
| PGx | Pesti_1994 | not_relevant | 0 | 0 | The paper studies amino acid metabolism in chickens, not the pharmacokinetics or pharmacodynamics of glutamine as a drug in humans. |
| popPK | Plaindoux_2025 | irrelevant | 0 | 0 | The study focuses on neuroimaging (MRSI) of GABA and Glx (glutamate + glutamine) in epilepsy models, not on the pharmacokinetic disposition of glutamine as a drug. |
| popPK | Pliska_1976 | irrelevant | 0 | 0 | The study focuses on the inactivation of neurohypophysial hormone analogues (oxytocin/deaminooxytocin) where glutamine is merely a structural component, not the subject drug for PK analysis. |
| PGx | Podymova_2021 | not_relevant | 0 | 0 | The paper is a review of the pathogenesis and clinical management of hepatic encephalopathy and does not report pharmacogenomic effects on the PK/PD of glutamine. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The study focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism, not the pharmacokinetics of glutamine. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper discusses the metabolic effects of glycine on hepatocyte maturation and CYP activity but does not report a pharmacodynamic model, exposure-response relationship, or numeric PD parameters for glutamine. |
| PD | Qian_2011 | not_relevant | 1 | 1 | The paper reports an in vitro IC50 for a GFAT inhibitor and in vivo efficacy in an OGTT, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for glutamine or the drug. |
| PD | Qiao_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for a new compound (CIB-Q22) and mentions glutamine deprivation as a mechanism, but does not report a pharmacodynamic or exposure-response relationship for glutamine itself. |
| PGx | Qin_2026 | not_relevant | 0 | 0 | The paper discusses nitrogen metabolism in sugarcane plants, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of glutamine as a drug. |
| PGx | Redis_2016 | not_relevant | 0 | 0 | The paper discusses lncRNA interactions with protein complexes in cancer metabolism, not pharmacogenomic effects on glutamine PK/PD. |
| popPK | Robertson_1992 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic mechanism study of CTP synthetase where glutamine is used only as a substrate, not as a drug for pharmacokinetic analysis. |
| PD | Robertson_1992 | not_relevant | 0 | 0 | The paper describes chemical modification and inactivation kinetics of an enzyme by thiourea dioxide, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| PGx | Robinson_2026 | not_relevant | 0 | 0 | The paper discusses genetic susceptibility to porphyria and mentions glutamine synthetase expression, but does not report pharmacogenomic effects on the PK or PD of glutamine as a drug. |
| popPK | Sadaf_2024 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | Sadaf_2024_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of l-glutamine, including dose and food effects on exposure, but does not report any pharmacodynamic (PD) or exposure-response relationship for a clinical or biomarker endpoint. |
| PGx | Sahai_1994 | not_relevant | 0 | 0 | The paper investigates renal ammoniagenesis and cell physiology in LLC-PK1 cells, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PGx | Salah_2018 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on the response to Albuterol, not on the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Sastrasinh_1989 | irrelevant | 0 | 0 | The study investigates in-vitro mitochondrial transport mechanisms and kinetics, not systemic pharmacokinetic disposition parameters (CL, V, t1/2) in a biological subject. |
| PD | Sastrasinh_1989 | not_relevant | 3 | 2 | The paper reports kinetic parameters (Hill coefficient) for glutamine transport in isolated mitochondria, which is a mechanistic/physiological study, not a pharmacodynamic exposure-response or dose-response analysis of a drug effect in a biological system. |
| popPK | Seo_2022 | irrelevant | 2 | 5 | The study reports PET influx rate constants (K1) for a glutamine analog ([18F]4-FGln) in mice, which is a metabolic imaging biomarker rather than a pharmacokinetic model of the drug glutamine itself (no CL, V, or ka for glutamine). |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asparaginase, not glutamine. |
| PD | Sethuramalingam_2026 | not_relevant | 2 | 1 | The paper reports population PK and a therapeutic threshold (&gt;100 IU/L) but does not model or report a quantitative exposure-response relationship (e.g., Emax, EC50) for the drug's effect. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The study is a mechanistic investigation of glutamine metabolic flux in cells, not a pharmacokinetic study of glutamine disposition. |
| popPK | Sharma_1982 | irrelevant | 0 | 0 | The paper studies the functional properties of hemoglobin in opossums, specifically focusing on amino acid substitutions (glutamine at position E7), and does not report pharmacokinetic parameters for the drug glutamine. |
| PD | Sharma_1982 | not_relevant | 0 | 0 | The paper discusses the structural and functional properties of opossum hemoglobin, specifically the role of a glutamine residue at position E7, and does not report any pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Shen_2013 | irrelevant | 0 | 0 | The paper is a review of metabolic modeling of the glutamate-glutamine cycle using MRS, not a pharmacokinetic study of glutamine as a drug. |
| popPK | Shiraishi_2008 | irrelevant | 0 | 0 | The paper describes the synthesis and cellular activity of PNA conjugates using glutamine as a chemical linker, not the pharmacokinetics of the drug glutamine. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The study investigates ketamine pharmacometabolomics where glutamine is only a measured metabolite, not the subject drug for PK parameter estimation. |
| PGx | Sparreboom_2005 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on topotecan, not glutamine. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | The paper is a scoping review of ketamine in diabetes and does not report pharmacokinetic parameters for glutamine. |
| PD | Sukhram_2026 | not_relevant | 1 | 0 | The paper is a scoping review that outlines a future research agenda for PK/PD modeling but does not report any specific numeric PD parameters or exposure-response relationships for glutamine (or ketamine). |
| PGx | Tanino_2026 | not_relevant | 0 | 0 | The paper investigates the effect of N-glycosylation mutations on OATP1B1 transporter kinetics, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Tapia-Arancibia_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of somatostatin release, and glutamine is only mentioned as a comparator that did not modify release, with no pharmacokinetic parameters reported. |
| PD | Tapia-Arancibia_1989 | not_relevant | 0 | 0 | The paper explicitly states that glutamine did not modify somatostatin release, so no dose-response or PD relationship is reported for glutamine. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for isoniazid, not glutamine. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for isoniazid, focusing on clearance and NAT2 genotype, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Thöny_1994 | not_relevant | 0 | 0 | The paper describes mutations in the PTPS gene causing a metabolic disorder (BH4 deficiency) and does not report pharmacogenomic effects on the PK/PD of the drug glutamine. |
| popPK | Trikha_1994 | irrelevant | 0 | 0 | The paper describes the purification and characterization of snake venom enzymes (fibrolase) and does not involve the drug glutamine or pharmacokinetic studies. |
| PD | Trikha_1994 | not_relevant | 0 | 0 | The paper reports enzymatic activity (EC50) of a snake venom protein (fibrolase), not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| PGx | Valim_2025 | not_relevant | 0 | 0 | The paper investigates metabolite quantitative trait loci (mQTLs) for meat tenderness in cattle, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Viletska_2026 | not_relevant | 0 | 0 | The paper investigates the effect of ERN1 inhibition on PCK2 expression and cell sensitivity to nutrient deprivation, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug leritrelvir (a SARS-CoV-2 protease inhibitor), not glutamine. |
| PD | Weber_1991 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for macrocyclic renin inhibitors, which are pharmacodynamic potency metrics for a different drug class, not a pharmacokinetic/pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Wei_2001 | irrelevant | 0 | 0 | The paper describes in vitro mutagenesis studies of yeast aldehyde dehydrogenase enzymes and does not report pharmacokinetic parameters for the drug glutamine. |
| PD | Wei_2001 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax, Hill coefficient) for mutated aldehyde dehydrogenase, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Westhoff_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ammonium transport in Xenopus oocytes, where glutamine is used only as an insensitive inhibitor, not as the subject drug for PK analysis. |
| PD | Westhoff_2002 | not_relevant | 0 | 0 | The paper reports transport kinetics (EC50, Vmax) for ammonium/methylamine uptake by Rh glycoprotein, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Wilkinson_2014 | irrelevant | 0 | 0 | The study investigates the digestibility of dietary nutrients (including glutamine) in broiler chicks, not the pharmacokinetics of glutamine as a drug. |
| popPK | Wolahan_2018 | irrelevant | 0 | 0 | The study investigates lactate supplementation and reports changes in glutamine levels as a secondary metabolite, but does not report pharmacokinetic parameters (CL, V, etc.) for glutamine as the subject drug. |
| PGx | Wraith_1992 | not_relevant | 0 | 0 | The paper discusses T cell receptor recognition of a peptide containing glutamine in the context of autoimmunity, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PD | Wu_2016 | not_relevant | 0 | 0 | The paper reports an IC50 for BACE1 inhibition and qualitative brain Aβ reduction in a dose-response study, but does not provide numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for the drug's pharmacodynamic effect. |
| PD | Xu_2021 | not_relevant | 2 | 1 | The paper reports in vitro IC50 and binding affinity (Kd) for a GLS1 inhibitor, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-effect curve with numeric PD parameters (e.g., Emax, EC50) for the drug in vivo or in a PK context. |
| PGx | Yamaguchi-Iwai_1995 | not_relevant | 0 | 0 | The paper describes iron metabolism in yeast and does not involve the drug glutamine or pharmacogenomics. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper studies toxicology in earthworms and does not report pharmacogenomic effects on the PK/PD of glutamine in humans. |
| PD | Yu_2016 | not_relevant | 0 | 0 | The paper investigates the genetic knockdown of ASNS and its effect on cisplatin sensitivity, not the pharmacodynamic or exposure-response relationship of glutamine itself. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper describes the design and antiviral activity of alpha-ketoamides targeting viral proteases, with no pharmacokinetic data for the drug glutamine. |
| PD | Zhang_2020 | not_relevant | 0 | 0 | The paper reports antiviral potency (EC50) of synthetic alpha-ketoamides against viral proteases, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates a genetic disease model (CHED) and metabolic pathways, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Zhang_2026_2 | not_relevant | 0 | 0 | The paper studies natural variation in rice seed germination and the role of glutamine as a metabolite, not the pharmacokinetics or pharmacodynamics of glutamine as a drug in humans. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper studies nitrogen metabolism in rice plants, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | de_2004 | irrelevant | 2 | 0 | The study measures glutamine turnover and synthesis rates in muscle tissue using tracers, not systemic pharmacokinetic parameters (CL, V, ka) for glutamine as a drug. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper studies the effect of the drug rifaximin on glutamine metabolism and does not report how a gene variant affects the PK/PD of glutamine. |
| popPK | do_2011 | irrelevant | 0 | 0 | The study investigates insulin secretion and protein expression in rat islets, using glutamine only as a secretagogue, and does not report pharmacokinetic parameters for glutamine. |
| PGx | von_1994 | not_relevant | 0 | 0 | The paper studies a genetic polymorphism in apolipoprotein A-IV and its effect on lipid metabolism, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 10:48 UTC</sub>
