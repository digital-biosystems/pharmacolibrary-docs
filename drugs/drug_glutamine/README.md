<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;glutamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glutamine_Sadaf2024v2_reference&quot;,&quot;label&quot;:&quot;Sadaf_2024_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# glutamine

- **generic name:** glutamine
- **ATC codes:** `A16AA03`
- **DrugBank:** [DB00130](https://go.drugbank.com/drugs/DB00130) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

**Description.** A non-essential amino acid present abundantly throughout the body and is involved in many metabolic processes. It is synthesized from glutamic acid and ammonia. It is the principal carrier of nitrogen in the body and is an important energy source for many cells. An oral formulation of L-glutamine was approved by the FDA in July 2017 for use in sickle cell disease [L892]. This oral formulation is marketed under the tradename Endari by Emmaus Medical.

**Indication.** Used for nutritional supplementation, also for treating dietary shortage or imbalance.

Used to reduce the acute complications of sickle cell disease in adult and pediatric patients 5 years of age and older [FDA Label].

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glutamine (l-glutamine) | parent | 146.14 | — | PubChem | [5961](https://pubchem.ncbi.nlm.nih.gov/compound/5961) | Sadaf_2024_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 10:16 | 1:44:50 | 1/0/0 | 0/1/0 | 0/0/0 | 582,319/56,422 | ollama / qwen3.8:27b-mtp-q8_0 | 27 | 8/19 | 20/7 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Sadaf_2024_2_reference](drugs/drug_glutamine/Glutamine_Sadaf2024v2_reference.md) | 1-compartment, oral | 3 | Sadaf (2024) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed</span> | [Hoeben_2026](drugs/drug_glutamine/pd_Hoeben_2026_TV.md) | Hoeben E et al., PKPD-Based Translational Modeling of Ca…, European journal of drug me… (2026) | [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glutamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…filtered though the glomerulus, nearly all is reabsorbed by renal tubules.…”</sub> | prose |

<sub>Actors without a tissue in the table: ASNS (substrate), CAD (substrate), CTPS1 (substrate), CTPS1 (target), F13A1 (substrate), GATB (substrate), GFPT2 (substrate), GLS (substrate), GLS2 (substrate), GLUL (product), GMPS (substrate), KYAT1 (substrate), NADSYN1 (substrate), PFAS (substrate), PPAT (substrate), QARS1 (substrate), SLC16A10 (inhibitor), SLC1A5 (substrate), SLC38A1 (substrate), SLC38A2 (substrate), SLC38A3 (substrate), SLC6A14 (substrate), SLC7A5 (substrate), SLC7A6 (substrate), SLC7A7 (substrate), SLC7A8 (substrate), SLC7A9 (substrate), TGM1 (substrate), TGM2 (substrate), TGM3 (substrate), TGM4 (substrate), TGM5 (substrate), TGM6 (substrate), TGM7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1985 matched, 173 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
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

<sub>queue written 2026-09-27T09:38:38.208374+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achanta_2024 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Achanta_2024 | not_relevant | 0 | 0 | The paper discusses AMPK activators and brain metabolism, not glutamine, and does not report a pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Ahn_2010 | irrelevant | 0 | 0 | The paper investigates the structural role of amino acid residues (including glutamine) in the cannabinoid receptor 1, not the pharmacokinetics of the drug glutamine. |
| PD | Ahn_2010 | not_relevant | 0 | 0 | The paper investigates the structural role of helix 8 residues in the cannabinoid receptor 1 (CB1) using mutagenesis and binding assays, and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Albers_2001 | irrelevant | 0 | 0 | The paper investigates the mechanism of the glutamine transporter ATA1 in oocytes (in-vitro/mechanistic) and does not report pharmacokinetic disposition parameters for glutamine. |
| PD | Albers_2001 | not_relevant | 0 | 0 | The paper describes the electrophysiology and transport stoichiometry of the ATA1 transporter in oocytes, not a pharmacodynamic exposure-response relationship for glutamine as a drug. |
| PD | Andrews_1995 | not_relevant | 0 | 0 | The paper describes a structural biology study identifying a specific amino acid sequence (Gln-628 to Val-646) in von Willebrand factor that mediates binding to sulfatides, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Avramis_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of asparaginase and the pharmacodynamics of glutamine deamination, not the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine itself. |
| popPK | Avramis_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Erwinia asparaginase (erwinase), with glutamine serving only as a pharmacodynamic marker for enzyme activity rather than the subject drug for PK parameter estimation. |
| popPK | Bae_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MIT-001, not glutamine. |
| PD | Bae_2026 | not_relevant | 0 | 0 | The paper reports a population PK model and dose optimization based on preclinical efficacy and safety, but it does not present a pharmacodynamic (PD) model or numeric exposure-response/dose-response parameters (e.g., Emax, EC50) for the drug. |
| popPK | Balázs_1988 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Balázs_1988 | not_relevant | 0 | 0 | The paper investigates the effect of NMDA on cell survival and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| PGx | Barr_2025 | not_relevant | 0 | 0 | The study investigates dietary interventions (ammonium hydroxide enhancement) on liver metabolism in mice, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on PD-L1 siRNA for cancer immunotherapy and does not involve glutamine pharmacokinetics. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper describes the efficacy of a PD-L1 siRNA in vitro but does not report a pharmacokinetic/pharmacodynamic model, exposure-response relationship, or numeric PD parameters (e.g., EC50, Emax) for glutamine or the siRNA itself. |
| popPK | Birnir_1997 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on GABAA receptor subunits, not a pharmacokinetic study of glutamine. |
| PD | Birnir_1997 | not_relevant | 0 | 0 | The paper describes electrophysiological properties of a mutated GABAA receptor (GABA response, pentobarbitone modulation) and does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug glutamine. |
| PD | Bobzin_2000 | not_relevant | 3 | 2 | The paper reports a single IC50 value for aaptamine (not glutamine) against an enzyme, which is a pharmacological potency metric, not a pharmacodynamic exposure-response or dose-response relationship for the drug glutamine. |
| PGx | Bruhn_1992 | not_relevant | 0 | 0 | The paper reports metabolic changes in infants with peroxisomal disorders using MRS, not a pharmacogenomic effect on the PK/PD of glutamine as a drug. |
| popPK | Calvetti_2013 | irrelevant | 0 | 0 | The paper is an in silico metabolic flux balance analysis of neurotransmitter cycling, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for glutamine. |
| PGx | Cassago_2012 | not_relevant | 0 | 0 | The paper describes the structural biology and metabolic role of the Glutaminase C enzyme in cancer, not the pharmacokinetics or pharmacodynamics of glutamine as a drug influenced by genetic variants. |
| popPK | Charney_2020 | irrelevant | 0 | 0 | The study is a neuroimaging (MRS) analysis of neurochemical concentrations in concussion, not a pharmacokinetic study of glutamine disposition. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | The paper describes a site-specific mutagenesis study of porcine fructose-1,6-bisphosphatase where glutamine is a substituted amino acid residue, not a pharmacokinetic study of glutamine as a drug. |
| PD | Chen_1994 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and the effect of a mutation on AMP cooperativity, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | The paper is a translational hypothesis framework that explicitly reports no original clinical or laboratory data and does not provide any quantitative pharmacokinetic parameters for glutamine. |
| PD | Cheung_2026 | not_relevant | 0 | 0 | The paper is a conceptual framework and evidence synthesis that explicitly reports no original clinical or laboratory data, and glutamine is only mentioned as an optional exploratory component without any PD analysis. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The paper is a conceptual framework for treatment-resistant depression and does not report original data on pharmacogenomic effects on glutamine pharmacokinetics or pharmacodynamics. |
| popPK | Cheung_2026_2 | irrelevant | 0 | 0 | The paper is a clinical case series on dextromethorphan for PTSD and does not report pharmacokinetic parameters for glutamine. |
| PD | Cheung_2026_2 | not_relevant | 0 | 0 | The paper is a case series reporting clinical outcomes without any pharmacokinetic data, concentration measurements, or quantitative dose-response modeling. |
| PGx | Cheung_2026_3 | not_relevant | 0 | 0 | The paper is a clinical case report on OCD treatment outcomes and does not report pharmacogenomic effects on the PK or PD parameters of glutamine. |
| PGx | Cheung_2026_4 | not_relevant | 0 | 0 | The paper is a case report on a clinical regimen and does not report pharmacogenomic effects on the PK or PD of glutamine. |
| PGx | Chiarelli_2006 | not_relevant | 0 | 0 | The paper describes mutations in the P5'N-1 gene causing a hemolytic anemia enzyme disorder, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PD | Cho_2009 | not_relevant | 0 | 0 | The paper describes a cell-based assay for 11beta-HSD1 inhibitors and reports an IC50 for carbenoxolone, but does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| popPK | Cremer_1974 | irrelevant | 0 | 0 | The study focuses on brain metabolism of glucose and ketone bodies in rats, measuring rates of formation for glutamine rather than its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Dehghani_2016 | irrelevant | 0 | 0 | The study is a 13C-MRS metabolic flux analysis in rats where glutamine is a metabolic intermediate, not a drug subject to pharmacokinetic characterization (no CL, Vd, or ka reported). |
| popPK | Deutz_2025 | irrelevant | 2 | 0 | The study reports relative percentage changes in amino acid clearance and pool sizes in a pig sepsis model rather than absolute quantitative PK parameters (CL, V, ka) for glutamine as a subject drug. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The paper is a review of posaconazole pharmacokinetics, not glutamine. |
| PD | Ding_2022 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PopPK) models for posaconazole and does not report any pharmacodynamic (PD) or exposure-response relationships for glutamine. |
| popPK | Douglas_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of pain and white cell counts in mucositis, with no pharmacokinetic parameters reported for glutamine. |
| PGx | Duldulao_2013 | not_relevant | 0 | 0 | The paper reports associations between gene polymorphisms and clinical toxicity (adverse events) to chemotherapy, not pharmacokinetic or pharmacodynamic parameters of glutamine. |
| popPK | Dumitrescu_2026 | irrelevant | 0 | 0 | The study is a neuroimaging (MRS) analysis of neurometabolite concentrations in the brain, not a pharmacokinetic study of glutamine disposition. |
| popPK | Earhart_1983 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acivicin (an L-glutamine antagonist), not for glutamine itself. |
| popPK | Errey_2005 | irrelevant | 0 | 0 | The paper describes in-vitro enzyme kinetics of ArgA in Mycobacterium tuberculosis, not pharmacokinetic disposition parameters for glutamine. |
| PD | Errey_2005 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, kcat, Ki) for a bacterial enzyme, not a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| PGx | Evans_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of oxylipins (9-HODE/9-HOTrE) on HepG2 cells and does not report pharmacogenomic effects on the PK/PD of glutamine. |
| PGx | Evers_2013 | not_relevant | 0 | 0 | The paper discusses a gene therapy strategy for a genetic disease (SCA3) involving polyglutamine expansion, not the pharmacogenomics of the drug glutamine. |
| popPK | Fentem_1983 | irrelevant | 0 | 0 | The paper is a plant physiology study on nitrogen assimilation in barley roots, not a pharmacokinetic study of glutamine as a drug. |
| PGx | Furlong_1993 | not_relevant | 0 | 0 | The paper discusses paraoxonase polymorphisms affecting organophosphate detoxification, not the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Garfinkel_1975 | irrelevant | 0 | 0 | The paper describes a metabolic model for brain slices involving glutamine as a metabolite, not a pharmacokinetic study of glutamine as a drug with disposition parameters. |
| PGx | Gilchrist_2025 | not_relevant | 0 | 0 | The paper investigates the causal effects of plasma metabolites (including glutamine) on psychiatric and neurodegenerative disease risk using Mendelian randomization, rather than the pharmacokinetic or pharmacodynamic effects of a drug. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The paper describes a computational drug discovery pipeline for hypocretin receptor ligands and does not report pharmacokinetic parameters for glutamine. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on BATF2 and glutamine metabolism in cancer, containing no pharmacokinetic parameters for glutamine. |
| popPK | Grkovski_2020 | irrelevant | 2 | 3 | The study reports pharmacokinetic parameters for the radiotracer 18F-FGln (a diagnostic imaging agent), not for glutamine as a therapeutic drug. |
| popPK | Guido_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on tumor metabolism and mitochondrial fission, not a pharmacokinetic study, and glutamine is mentioned only as a metabolic substrate. |
| popPK | Gurgul-Convey_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study of a beta-cell line where glutamine is only mentioned as a potentiating agent for insulin secretion, with no pharmacokinetic parameters reported. |
| PD | Gurgul-Convey_2015 | not_relevant | 1 | 0 | The paper characterizes a cell line and reports glucose EC50, but only qualitatively mentions glutamine's potentiating effect without providing numeric dose-response parameters or curves for glutamine. |
| PGx | Gómez-Vicente_2013 | not_relevant | 0 | 0 | The paper characterizes a murine retinal cell line and its markers (including glutamine synthetase) but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Haser_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Haser_1985 | not_relevant | 0 | 0 | The paper compares the biochemical properties of phosphate-dependent glutaminase enzymes from rat tissues, not the pharmacodynamic or exposure-response relationship of glutamine as a drug. |
| popPK | Hassanein_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of glutamine for oral mucositis and does not report any pharmacokinetic parameters. |
| popPK | He_2022 | irrelevant | 0 | 0 | The study investigates the mechanism of sevoflurane sensitivity and the glutamate-glutamine cycle, not the pharmacokinetic disposition parameters of glutamine. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper reports the EC50 of sevoflurane (an anesthetic), not glutamine; glutamine is a metabolic intermediate in the mechanism, not the drug being modeled for a dose-response relationship. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper describes the enzymatic synthesis and antioxidant activity of glutamyl peptides, not the pharmacokinetics of glutamine. |
| PD | He_2023 | not_relevant | 0 | 0 | The paper reports the synthesis of peptides and their antioxidant activity (EC50 values for scavenging assays), which is a biochemical/food science analysis, not a pharmacodynamic (drug exposure-response) relationship for glutamine. |
| popPK | He_2026 | irrelevant | 0 | 0 | The study is a metabolomics analysis of T-DM1 therapy where glutamine is only mentioned as a metabolite pathway, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Hensley_2025 | irrelevant | 2 | 0 | The study focuses on PET imaging kinetics and metabolic fate of a radiotracer ([11C]glutamine) rather than reporting standard quantitative pharmacokinetic parameters (CL, V, ka) for the drug glutamine itself. |
| PGx | Herzfeld_1976 | not_relevant | 0 | 0 | The paper describes baseline enzyme activities in rat tissues and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine. |
| PGx | Higaki_2007 | not_relevant | 0 | 0 | The paper investigates the cytoprotective effects of L-glutamine on sodium laurate-induced mucosal toxicity and absorption enhancement, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Calaspargase Pegol (an enzyme), not glutamine, and does not report PK parameters for glutamine. |
| PGx | Hoekstra_2011 | not_relevant | 0 | 0 | The paper investigates the suitability of HepaRG cells for bioartificial liver applications and the effects of DMSO and carbamoyl-glutamate on cell function, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of glutamine. |
| popPK | Holz_2020 | irrelevant | 0 | 0 | The study is a metabolic biomarker analysis in COPD patients, not a pharmacokinetic study, and reports no disposition parameters for glutamine. |
| popPK | Huang_2023 | irrelevant | 2 | 0 | The study focuses on the PET imaging and biodistribution of a radiolabeled glutamine tracer ((2S,4S)-4-[18F]FEBGln) rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for the drug glutamine itself. |
| PD | Jain_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of SARS 3CLpro by glutamine analogues, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug glutamine in a biological system. |
| popPK | Jiang_2011 | irrelevant | 0 | 0 | The study is a metabolic flux analysis using NMR spectroscopy to measure substrate oxidation rates, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for glutamine. |
| popPK | Johansen-Leete_2022 | irrelevant | 0 | 0 | The paper describes antiviral cyclic peptides targeting SARS-CoV-2 main protease and does not report pharmacokinetic parameters for glutamine. |
| PD | Johansen-Leete_2022 | not_relevant | 0 | 0 | The paper reports antiviral activity (EC50) for cyclic peptides, not for glutamine, and does not provide a pharmacodynamic model or exposure-response relationship for glutamine. |
| PGx | Kaler_1995 | not_relevant | 0 | 0 | The paper discusses a genetic mutation in Menkes disease and its response to copper therapy, not the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Kawano_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on potassium channels and does not report pharmacokinetic parameters for glutamine. |
| PD | Kawano_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of propofol and thiamylal, not glutamine. |
| PGx | Kong_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nutritional supplements in cardiac surgery and explicitly states that the current evidence base does not support genotype-guided precision supplementation, reporting no pharmacogenomic effects on PK/PD parameters. |
| PGx | Korein_1994 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of Maple Syrup Urine Disease and neurotoxicity, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Kose_2026 | not_relevant | 0 | 0 | The paper investigates mitochondrial dysfunction in Cockayne syndrome and screens for therapeutic compounds, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glutamine. |
| PD | Laganà_2026 | not_relevant | 0 | 0 | The paper studies the toxicological effects of nanoceria (CeO2) on cells, not the pharmacodynamics of glutamine; glutamine is only mentioned as a metabolite that accumulates. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | The study focuses on cerebral metabolic flux and TCA cycle rates using 13C MRS, not on the pharmacokinetic disposition parameters (CL, V, ka) of glutamine as a drug. |
| popPK | Lanfermeijer_1992 | irrelevant | 0 | 0 | The study investigates amino acid release from pea seed coats (plant physiology) and does not report pharmacokinetic parameters for glutamine in humans or animals. |
| PGx | Lant_2021 | not_relevant | 0 | 0 | The paper investigates the effect of tRNA variants on polyglutamine aggregate formation in neurodegenerative disease models, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Lanz_2014 | irrelevant | 0 | 0 | The study focuses on neuro-metabolic fluxes and pool sizes using MRS, not pharmacokinetic disposition parameters (CL, V, ka) for glutamine as a drug. |
| popPK | Laue_2026 | irrelevant | 0 | 0 | The paper is a histological image analysis study of liver zonation and does not report pharmacokinetic parameters for glutamine. |
| PD | Laue_2026 | not_relevant | 0 | 0 | The paper describes an image analysis workflow for quantifying spatial zonation of liver markers (steatosis, CYPs) in mice and does not report any pharmacodynamic or exposure-response relationship for glutamine. |
| PGx | Lei_1994 | not_relevant | 0 | 0 | The paper describes mutations in the G6Pase gene causing Glycogen Storage Disease type 1a and their effect on enzyme activity, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Lhospice_2015 | irrelevant | 0 | 0 | The study focuses on antibody-drug conjugates (ADCs) where glutamine is merely a conjugation site on the antibody, not the subject drug for PK analysis. |
| PGx | Li_1993 | not_relevant | 0 | 0 | The paper discusses the role of the paraoxonase enzyme in metabolizing organophosphates, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PGx | Li_2008 | not_relevant | 0 | 0 | The paper investigates the pathogenic role of CAG repeat RNA in polyglutamine diseases, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper describes the structural biology and enzymatic mechanism of glutaminase (GAC) in cancer cells, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Liang_2023 | not_relevant | 0 | 0 | The paper investigates the biological role of glutaminase in sperm function in C. elegans, not the pharmacokinetics or pharmacodynamics of glutamine as a drug in humans. |
| popPK | Liao_2020 | irrelevant | 0 | 0 | The study focuses on the cytotoxicity and metabolomics of PCB95 in chicken cells, with glutamine mentioned only as a metabolic pathway affected by the pollutant, not as a subject drug for PK analysis. |
| PD | Liao_2020 | not_relevant | 0 | 0 | The paper studies the cytotoxicity of PCB95 and its metabolites, not the pharmacodynamics of glutamine; glutamine is only mentioned as a metabolite affected by MeO-PCB95. |
| PGx | Liu_2010 | not_relevant | 0 | 0 | The paper studies the GFAT1 gene in pigs and its association with carcass traits, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of a TRPV1 pentapeptide inhibitor for allergic skin disorders and does not involve glutamine or pharmacokinetic parameter estimation. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper reports on a TRPV1 pentapeptide inhibitor (P5), not glutamine, and does not provide specific numeric PD parameters (e.g., IC50 values or dose-response curves) in the provided text. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study investigates the biotransformation of obefazimod, not glutamine, and reports no pharmacokinetic parameters for glutamine. |
| PD | Lochman_2026 | not_relevant | 0 | 0 | The paper focuses on the biotransformation and metabolic pathways of obefazimod, not on pharmacodynamic or exposure-response relationships for glutamine. |
| popPK | Lowe_2022 | irrelevant | 0 | 0 | The study is a biomarker investigation using magnetic resonance spectroscopy to measure metabolite concentrations in brain tissue, not a pharmacokinetic study reporting disposition parameters for glutamine. |
| popPK | Maese_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of recombinant Erwinia asparaginase (JZP458), not glutamine. |
| PD | Maese_2025 | not_relevant | 3 | 2 | The paper reports population pharmacokinetic (PK) modeling and clinical efficacy/safety outcomes (NSAA levels) but does not describe a pharmacodynamic (PD) model or provide numeric PD parameters (e.g., Emax, EC50) linking drug exposure to a pharmacological effect. |
| popPK | Maharem_2020 | irrelevant | 0 | 0 | The paper describes the purification and enzymatic characterization of l-glutaminase, not the pharmacokinetics of glutamine. |
| popPK | Maqsood_2020 | irrelevant | 0 | 0 | The paper characterizes an enzyme (L-asparaginase) and its kinetic properties, not the pharmacokinetics of glutamine. |
| PD | Maqsood_2020 | not_relevant | 0 | 0 | The paper characterizes the enzyme kinetics (K0.5, Hill coefficient) of L-asparaginase, not the pharmacodynamic exposure-response relationship of glutamine in a biological system. |
| PGx | Mercer_2026 | not_relevant | 0 | 0 | The paper reports metabolic changes in a mouse model of neurodegeneration, not a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Miller_1990 | not_relevant | 0 | 0 | The paper studies yeast nitrogen metabolism and gene function, not human pharmacogenomics or drug PK/PD. |
| popPK | Mishra_2020 | irrelevant | 0 | 0 | The study focuses on neurometabolic rates and neurotransmitter cycling in a depression model, not on the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a drug. |
| PGx | Mitchell_1985 | not_relevant | 0 | 0 | The paper describes the genetic basis of glutamine synthetase in yeast, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Miyashi_2026 | irrelevant | 0 | 0 | The study is an in-vitro cell culture experiment measuring metabolic requirements (EC50) and does not report pharmacokinetic parameters for glutamine. |
| PGx | Mohammadi_2013 | not_relevant | 0 | 0 | The paper reports genetic mutations in UGT1A1 associated with Crigler-Najjar syndrome (bilirubin metabolism) and does not investigate the pharmacokinetics or pharmacodynamics of glutamine. |
| popPK | Molina_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial glutamine transport kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Montani_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of benzothiazole derivatives for skin diseases and does not involve glutamine or pharmacokinetic parameters. |
| PD | Montani_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzothiazole derivatives, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Nakamura_1995 | irrelevant | 0 | 0 | The paper is a biochemical study of GMP synthetase enzyme kinetics, not a pharmacokinetic study of glutamine disposition. |
| PD | Nakamura_1995 | not_relevant | 0 | 0 | The paper reports in vitro biochemical kinetics of GMP synthetase (enzyme activity vs. substrate/inhibitor concentration), not a pharmacodynamic (drug effect) relationship in a biological system or patient. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of lonidamine, not the pharmacokinetics of glutamine, and contains no PK parameters for glutamine. |
| PD | Nath_2016 | not_relevant | 1 | 2 | The paper is a mechanistic review of lonidamine that reports in vitro enzyme inhibition constants (Ki, IC50) for mitochondrial targets, but does not provide a pharmacodynamic exposure-response or dose-response model for glutamine or the drug in a biological system. |
| PGx | Nong_2005 | not_relevant | 0 | 0 | The paper reports a genetic mutation in UGT1A1 affecting bilirubin metabolism, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Occhipinti_2010 | irrelevant | 0 | 0 | The paper is a computational model of metabolic energetics in neurons and astrocytes, not a pharmacokinetic study reporting quantitative disposition parameters for glutamine. |
| PD | Odell_2009 | not_relevant | 3 | 2 | The paper reports a single IC50 value for an enzyme inhibitor, which is a pharmacodynamic parameter, but it lacks the exposure-response or dose-response curve data, multiple concentration points, or PK/PD modeling required to define a PD relationship or derive parameters like Emax or slope. |
| popPK | Ohashi_1995 | irrelevant | 0 | 0 | The paper is a biochemical study on the purification and characterization of rat brain transglutaminase, not a pharmacokinetic study of glutamine. |
| PD | Ohashi_1995 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, EC50 for Ca2+) for purified transglutaminase, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Oku_2004 | irrelevant | 0 | 0 | The paper describes the isolation and structure of a new HIV-inhibitory depsipeptide (neamphamide A) and does not report pharmacokinetic parameters for glutamine. |
| PGx | Owens_1992 | not_relevant | 0 | 0 | The paper discusses mutations in the deoxycytidine kinase gene affecting resistance to ara-C and ddC, not the pharmacokinetics or pharmacodynamics of glutamine. |
| PGx | Ozarchevici_2025 | not_relevant | 0 | 0 | The paper studies plant metabolism and growth traits in Camassia cultivars, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Pan_2012 | not_relevant | 0 | 0 | The paper describes the establishment of a cell line and mentions glutamine synthetase expression, but does not report pharmacogenomic effects on glutamine PK/PD parameters. |
| PD | Parkash_2002 | not_relevant | 0 | 0 | The paper reports the IC50 of a peptide (charantin) in a cell-free system, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Perkins_2012 | irrelevant | 0 | 0 | The paper investigates glycine receptor mutations and ethanol sensitivity, not the pharmacokinetics of the drug glutamine. |
| PGx | Pesti_1994 | not_relevant | 0 | 0 | The paper studies amino acid metabolism in chickens, not the pharmacokinetics or pharmacodynamics of glutamine as a drug in humans. |
| popPK | Plaindoux_2025 | irrelevant | 0 | 0 | The study is a neuroimaging (MRS) investigation of GABA and Glx concentrations in epilepsy, not a pharmacokinetic study of glutamine disposition. |
| popPK | Pliska_1976 | irrelevant | 0 | 0 | The study focuses on the inactivation of neurohypophysial hormone analogues (oxytocin/deaminooxytocin) where glutamine is merely a structural component, not the subject drug for PK analysis. |
| PGx | Podymova_2021 | not_relevant | 0 | 0 | The paper is a review of the pathogenesis and clinical management of hepatic encephalopathy and does not report pharmacogenomic effects on the PK/PD of glutamine. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The study focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism, not on the pharmacokinetics of glutamine. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper discusses the metabolic effects of glycine on hepatocyte maturation and CYP activity but does not report a pharmacodynamic model, exposure-response relationship, or numeric PD parameters for glutamine. |
| PD | Qian_2011 | not_relevant | 1 | 1 | The paper reports an in vitro IC50 for a GFAT inhibitor and in vivo efficacy in an OGTT, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for glutamine or the drug. |
| PD | Qiao_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for a new compound (CIB-Q22) and mentions glutamine deprivation as a mechanism, but does not report a pharmacodynamic or exposure-response relationship for glutamine itself. |
| PGx | Qin_2026 | not_relevant | 0 | 0 | The paper discusses nitrogen metabolism in sugarcane plants, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of glutamine as a drug. |
| PGx | Redis_2016 | not_relevant | 0 | 0 | The paper discusses lncRNA interactions with protein complexes in cancer metabolism, not pharmacogenomic effects on glutamine PK/PD. |
| popPK | Robertson_1992 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on CTP synthetase where glutamine is used only as a substrate, not as a subject drug for pharmacokinetic analysis. |
| PD | Robertson_1992 | not_relevant | 0 | 0 | The paper describes chemical modification and inactivation kinetics of an enzyme by thiourea dioxide, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| PGx | Robinson_2026 | not_relevant | 0 | 0 | The paper discusses genetic susceptibility to porphyria and mentions glutamine synthetase expression, but does not report pharmacogenomic effects on the PK or PD of glutamine as a drug. |
| popPK | Sadaf_2024 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | Sadaf_2024_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of l-glutamine, including dose and food effects on exposure, but does not report any pharmacodynamic (PD) or exposure-response relationship for a clinical or biomarker endpoint. |
| PGx | Sahai_1994 | not_relevant | 0 | 0 | The paper investigates renal ammoniagenesis and cell physiology in LLC-PK1 cells, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| PGx | Salah_2018 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on the response to Albuterol, not on the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Sastrasinh_1989 | irrelevant | 0 | 0 | The study investigates in-vitro mitochondrial transport mechanisms and kinetics, not pharmacokinetic disposition parameters (CL, V, etc.) in a biological system. |
| PD | Sastrasinh_1989 | not_relevant | 3 | 2 | The paper reports kinetic parameters (Hill coefficient) for glutamine transport in isolated mitochondria, which is a mechanistic/physiological study, not a pharmacodynamic exposure-response or dose-response analysis of a drug effect in a biological system. |
| popPK | Seo_2022 | irrelevant | 2 | 2 | The study reports PET kinetic parameters (K1) for a radiolabeled glutamine analog ([18F]4-FGln) in mice, not standard pharmacokinetic disposition parameters (CL, V, ka) for the drug glutamine itself. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for asparaginase (N-Asp and P-Asp), not glutamine. |
| PD | Sethuramalingam_2026 | not_relevant | 2 | 1 | The paper reports population PK and a therapeutic threshold (&gt;100 IU/L) but does not model or report a quantitative exposure-response relationship (e.g., Emax, EC50) for the drug's effect. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The study focuses on glutamine metabolic flux and reprogramming in pulmonary fibrosis, not on the pharmacokinetic disposition parameters (CL, V, etc.) of glutamine as a drug. |
| popPK | Sharma_1982 | irrelevant | 0 | 0 | The paper studies hemoglobin structure and function in opossums, where glutamine is an amino acid residue, not a pharmacokinetic drug subject. |
| PD | Sharma_1982 | not_relevant | 0 | 0 | The paper discusses the structural and functional properties of opossum hemoglobin, specifically the role of a glutamine residue at position E7, and does not report any pharmacodynamic or exposure-response relationship for the drug glutamine. |
| popPK | Shen_2013 | irrelevant | 0 | 0 | The paper is a review of metabolic modeling for the glutamate-glutamine neurotransmitter cycle using MRS, not a pharmacokinetic study of glutamine as a drug, and contains no PK parameter values. |
| popPK | Shiraishi_2008 | irrelevant | 0 | 0 | The paper focuses on the antisense activity of PNA conjugates in cell culture, and glutamine is mentioned only as a chemical linker component, not as a subject drug for pharmacokinetic analysis. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The study focuses on ketamine pharmacometabolomics where glutamine is only a measured metabolite, not the subject drug for PK parameter estimation. |
| PGx | Sparreboom_2005 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on topotecan, not glutamine. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | The paper is a scoping review on ketamine in diabetes and does not report pharmacokinetic parameters for glutamine. |
| PD | Sukhram_2026 | not_relevant | 1 | 0 | The paper is a scoping review that outlines a future research agenda for PK/PD modeling but does not report any specific numeric PD parameters or exposure-response relationships for glutamine (or ketamine). |
| PGx | Tanino_2026 | not_relevant | 0 | 0 | The paper investigates the effect of N-glycosylation mutations on OATP1B1 transporter kinetics, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |
| popPK | Tapia-Arancibia_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of somatostatin release where glutamine is only mentioned as a non-modifying comparator, with no pharmacokinetic parameters reported. |
| PD | Tapia-Arancibia_1989 | not_relevant | 0 | 0 | The paper explicitly states that glutamine did not modify somatostatin release, so no dose-response or PD relationship is reported for glutamine. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for isoniazid, not glutamine. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for isoniazid, focusing on clearance and NAT2 genotype, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Thöny_1994 | not_relevant | 0 | 0 | The paper describes mutations in the PTPS gene causing a metabolic disorder (BH4 deficiency) and does not report pharmacogenomic effects on the PK/PD of the drug glutamine. |
| popPK | Trikha_1994 | irrelevant | 0 | 0 | The paper describes the purification and characterization of snake venom enzymes (fibrolase) and does not involve the drug glutamine or pharmacokinetic parameters. |
| PD | Trikha_1994 | not_relevant | 0 | 0 | The paper reports enzymatic activity (EC50) of a snake venom protein (fibrolase), not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| PGx | Valim_2025 | not_relevant | 0 | 0 | The paper investigates metabolite quantitative trait loci (mQTLs) for meat tenderness in cattle, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Viletska_2026 | not_relevant | 0 | 0 | The paper investigates the regulation of PCK2 gene expression by ERN1 inhibition and nutrient deprivation in glioblastoma cells, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for leritrelvir, not glutamine. |
| PD | Weber_1991 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for macrocyclic renin inhibitors, which are pharmacodynamic potency metrics for a different drug class, not a pharmacokinetic/pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Wei_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on aldehyde dehydrogenase enzyme kinetics and mutations, not a pharmacokinetic study of the drug glutamine. |
| PD | Wei_2001 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax, Hill coefficient) for mutated aldehyde dehydrogenase, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Westhoff_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on ammonium transport in Xenopus oocytes where glutamine is used only as an insensitive inhibitor, not as the subject drug for PK analysis. |
| PD | Westhoff_2002 | not_relevant | 0 | 0 | The paper reports transport kinetics (EC50, Vmax) for ammonium/methylamine uptake by Rh glycoprotein, not a pharmacodynamic exposure-response relationship for the drug glutamine. |
| popPK | Wilkinson_2014 | irrelevant | 0 | 0 | The study investigates the digestibility of nutrients in broiler chicks, where glutamine is an amino acid being measured for digestibility, not a drug subject to pharmacokinetic analysis. |
| popPK | Wolahan_2018 | irrelevant | 0 | 0 | The study focuses on lactate supplementation and cerebral metabolism, mentioning glutamine only as a systemic metabolite with observed percentage changes, not as the subject of a pharmacokinetic analysis. |
| PGx | Wraith_1992 | not_relevant | 0 | 0 | The paper discusses T cell receptor recognition of a peptide containing glutamine in the context of autoimmunity, not the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PD | Wu_2016 | not_relevant | 0 | 0 | The paper reports an IC50 for BACE1 inhibition and qualitative brain Aβ reduction in a dose-response study, but does not provide numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for the drug's pharmacodynamic effect. |
| PD | Xu_2021 | not_relevant | 2 | 1 | The paper reports in vitro IC50 and binding affinity (Kd) for a GLS1 inhibitor, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-effect curve with numeric PD parameters (e.g., Emax, EC50) for the drug in vivo or in a PK context. |
| PGx | Yamaguchi-Iwai_1995 | not_relevant | 0 | 0 | The paper describes iron metabolism in yeast and does not involve the drug glutamine or pharmacogenomics. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper studies toxicology in earthworms and does not report pharmacogenomic effects on the PK/PD of glutamine in humans. |
| PD | Yu_2016 | not_relevant | 0 | 0 | The paper investigates the genetic knockdown of ASNS and its effect on cisplatin sensitivity, not the pharmacodynamic or exposure-response relationship of glutamine itself. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper describes the design of antiviral inhibitors targeting viral proteases that require glutamine in the substrate, but it does not study the pharmacokinetics of glutamine itself. |
| PD | Zhang_2020 | not_relevant | 0 | 0 | The paper reports antiviral potency (EC50) of synthetic alpha-ketoamides against viral proteases, not a pharmacodynamic or exposure-response relationship for the drug glutamine. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates sex differences in a corneal dystrophy (CHED) and mentions glutamine metabolism in the context of mitochondrial superoxide production, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glutamine as a drug. |
| PGx | Zhang_2026_2 | not_relevant | 0 | 0 | The paper studies natural variation in rice seed germination and the role of glutamine as a metabolite, not the pharmacokinetics or pharmacodynamics of glutamine as a drug in humans. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper studies nitrogen metabolism in rice plants, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | de_2004 | irrelevant | 2 | 0 | The study measures in vivo glutamine turnover and efflux rates in muscle tissue rather than reporting systemic pharmacokinetic disposition parameters (CL, V, ka) for glutamine as a drug. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of rifaximin on glutamine metabolism in intestinal organoids, not the effect of a gene variant on the PK/PD of glutamine. |
| popPK | do_2011 | irrelevant | 0 | 0 | The study investigates insulin secretion mechanisms in rat islets and uses glutamine only as a secretagogue stimulus, not as a subject drug for pharmacokinetic analysis. |
| PGx | von_1994 | not_relevant | 0 | 0 | The paper studies a genetic polymorphism in apolipoprotein A-IV and its effect on lipid metabolism, not the pharmacokinetics or pharmacodynamics of the drug glutamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 09:38 UTC</sub>
