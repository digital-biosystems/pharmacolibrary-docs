<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;nicotinamide&quot;}]"></div>

# nicotinamide

- **generic name:** nicotinamide
- **ATC codes:** `A11HA01`
- **DrugBank:** [DB02701](https://go.drugbank.com/drugs/DB02701) · **PubChem:** [CID 936](https://pubchem.ncbi.nlm.nih.gov/compound/936)
- **molar mass:** 122.1246 g/mol (C6H6N2O) — DrugBank
- **groups:** approved, investigational

## About

Nicotinamide, the amide form of vitamin B3, is used to treat and prevent pellagra. It is an approved vitamin preparation, listed among WHO essential medicines, and is widely available as a supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q192423](https://www.wikidata.org/wiki/Q192423) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:54 | 4:47 | 0/0/0 | 0/0/0 | 0/0/0 | 498,073/11,232 | einfracz / qwen3.8-27b | 50 | 8/69 | 46/4 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicotinamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP2E1` inhibitor/substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BST1 (product), LDHA (unknown), PARP1 (binder), SIRT5 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1326 matched, 208 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dragovich_2013.pdf` | Dragovich PS et al., Identification of 2,3-dihydro-1H-pyrrol…, Bioorganic & medicinal chem… (2013) | pd | 5 | [10.1016/j.bmcl.2013.06.090](https://doi.org/10.1016/j.bmcl.2013.06.090) | [23899614](https://www.ncbi.nlm.nih.gov/pubmed/23899614) | metadata signals extractable PD data (IC50) |
| `Yu_2016.pdf` | Yu Z et al., Time- and anion-dependent stimulation o…, Chemosphere (2016) | pd | 5 | [10.1016/j.chemosphere.2016.08.061](https://doi.org/10.1016/j.chemosphere.2016.08.061) | [27565313](https://www.ncbi.nlm.nih.gov/pubmed/27565313) | metadata signals extractable PD data (EC50) |
| `Aksoy_1994.pdf` | Aksoy S et al., Human liver nicotinamide N-methyltransf…, The Journal of biological c… (1994) | pd | 4 | not captured | [8182091](https://www.ncbi.nlm.nih.gov/pubmed/8182091) | metadata signals extractable PD data (IC50) |
| `Li_2024.pdf` | Li K et al., Fungicidal Activity of Novel 6-Isothiaz…, Journal of agricultural and… (2024) | pd | 4 | [10.1021/acs.jafc.4c07259](https://doi.org/10.1021/acs.jafc.4c07259) | [39322984](https://www.ncbi.nlm.nih.gov/pubmed/39322984) | metadata signals extractable PD data (EC50) |
| `Liu_2022.pdf` | Liu T et al., Inhibition of biological acidification…, Journal of environmental ma… (2022) | pd | 4 | [10.1016/j.jenvman.2021.114090](https://doi.org/10.1016/j.jenvman.2021.114090) | [34810021](https://www.ncbi.nlm.nih.gov/pubmed/34810021) | metadata signals extractable PD data (EC50) |
| `Roitelman_1984.pdf` | Roitelman J et al., Allosteric activation of rat liver micr…, The Journal of biological c… (1984) | pd | 4 | not captured | [6501287](https://www.ncbi.nlm.nih.gov/pubmed/6501287) | metadata signals extractable PD data (sigmoid) |
| `Van_2024.pdf` | Van Hove JLK et al., ACAD9 treatment with bezafibrate and ni…, Mitochondrion (2024) | pd | 4 | [10.1016/j.mito.2024.101905](https://doi.org/10.1016/j.mito.2024.101905) | [38797357](https://www.ncbi.nlm.nih.gov/pubmed/38797357) | metadata signals extractable PD data (EC50) |
| `Isobe_2016.pdf` | Isobe T et al., Species differences in metabolism of ri…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2015.1096981](https://doi.org/10.3109/00498254.2015.1096981) | [26678038](https://www.ncbi.nlm.nih.gov/pubmed/26678038) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Liederer_2019.pdf` | Liederer BM et al., Preclinical assessment of the ADME, eff…, Xenobiotica; the fate of fo… (2019) | pgx | 7 | [10.1080/00498254.2018.1528407](https://doi.org/10.1080/00498254.2018.1528407) | [30257601](https://www.ncbi.nlm.nih.gov/pubmed/30257601) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nemoto_1994.pdf` | Nemoto N et al., Elevated expression of the Cyp1a2 gene…, Archives of biochemistry an… (1994) | pgx | 7 | [10.1006/abbi.1994.1041](https://doi.org/10.1006/abbi.1994.1041) | [7508708](https://www.ncbi.nlm.nih.gov/pubmed/7508708) | metadata signals extractable PGX data (Cyp1a2, PK/PD-context) |
| `Nemoto_1995.pdf` | Nemoto N et al., Maintenance of phenobarbital-inducible…, Archives of biochemistry an… (1995) | pgx | 7 | [10.1006/abbi.1995.1048](https://doi.org/10.1006/abbi.1995.1048) | [7840637](https://www.ncbi.nlm.nih.gov/pubmed/7840637) | metadata signals extractable PGX data (Cyp2b, PK/PD-context) |
| `Noble_2017.pdf` | Noble C et al., In vitro studies on flubromazolam metab…, Drug testing and analysis (2017) | pgx | 7 | [10.1002/dta.2146](https://doi.org/10.1002/dta.2146) | [27935260](https://www.ncbi.nlm.nih.gov/pubmed/27935260) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sheriffdeen_2019.pdf` | Sheriffdeen MM et al., Caffeine/Angelica dahurica and caffeine…, Complementary therapies in… (2019) | pgx | 7 | [10.1016/j.ctim.2019.07.024](https://doi.org/10.1016/j.ctim.2019.07.024) | [31519293](https://www.ncbi.nlm.nih.gov/pubmed/31519293) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Wei_2015.pdf` | Wei KK et al., Interactions between CYP3A5*3 and POR*2…, Clinical drug investigation (2015) | pgx | 5 | [10.1007/s40261-015-0317-3](https://doi.org/10.1007/s40261-015-0317-3) | [26293521](https://www.ncbi.nlm.nih.gov/pubmed/26293521) | metadata signals extractable PGX data (CYP3A5*3) |

<sub>queue written 2026-10-07T16:51:16.397647+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2025 | not_relevant | 0 | 0 | The study evaluates the molluscicidal efficacy of nicotinamide on snails and measures genotoxicity via RAPD-PCR, but it does not report pharmacokinetic or pharmacodynamic parameters in humans or investigate pharmacogenomic effects. |
| popPK | Ahlqvist_2025 | irrelevant | 0 | 0 | The paper is a review on metabolite identification in drug discovery using a set of 120 compounds and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Ahlqvist_2025 | not_relevant | 0 | 0 | The paper focuses on metabolite identification and chemical space analysis of 120 compounds; it does not report pharmacodynamic or exposure-response data for nicotinamide. |
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial for meibomian gland dysfunction using intense pulsed light therapy and contains no pharmacokinetic data for nicotinamide. |
| popPK | Aksoy_1994 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Aksoy_1994 | not_relevant | 0 | 0 | The paper focuses on the cloning and biochemical characterization of the enzyme N-methyltransferase, not on pharmacodynamic exposure-response relationships or dose-effect modeling for nicotinamide. |
| PGx | Aksoy_1994 | not_relevant | 0 | 0 | The paper focuses on the cloning and biochemical characterization of the enzyme NMT, not on pharmacogenomic variation (genotypes) affecting drug PK/PD parameters. |
| popPK | Alaviuhkola_2025 | irrelevant | 0 | 0 | The paper focuses on the structural optimization of PARP inhibitors and mentions nicotinamide only as a structural feature of the binding pocket, not as a subject drug for pharmacokinetic analysis. |
| PD | Alaviuhkola_2025 | not_relevant | 0 | 0 | The paper focuses on the structural optimization of a PARP10 inhibitor (OUL312) and reports in vitro IC50 values and cellular rescue data, but does not report any pharmacodynamic or exposure-response relationship for nicotinamide. |
| popPK | Ali_2019 | irrelevant | 0 | 0 | The paper describes in-vitro SIRT2 inhibitors and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Ali_2019 | not_relevant | 3 | 3 | The paper reports in vitro IC50 values for SIRT2 inhibition and cell viability, which are pharmacological potency metrics, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with parameters like Emax or EC50 in the context of drug disposition. |
| popPK | Anderson_1981 | irrelevant | 0 | 0 | This is an in-vitro enzymology study of beef heart lactate dehydrogenase binding NADH, not a pharmacokinetic study of the drug nicotinamide. |
| PD | Anderson_1981 | not_relevant | 0 | 0 | The paper studies the biochemical interaction of halides with lactate dehydrogenase and NADH binding, not the pharmacodynamics of the drug nicotinamide. |
| popPK | Apraj_2016 | irrelevant | 0 | 0 | The study evaluates the in-vitro anti-aging potential of Citrus reticulata peel extracts and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Apraj_2016 | not_relevant | 0 | 0 | The paper evaluates the pharmacological activity of Citrus reticulata peel extracts, not the drug nicotinamide. |
| PGx | Arc-Chagnaud_2021 | not_relevant | 0 | 0 | The paper discusses G6PD overexpression and frailty in mice, involving NADPH metabolism, but does not report pharmacokinetic or pharmacodynamic parameters for the drug nicotinamide. |
| PGx | Baelde_2026 | not_relevant | 0 | 0 | The study investigates mitochondrial dysfunction in a NEM6 mouse model and the therapeutic effects of nicotinamide riboside, but it does not report on the pharmacokinetics or pharmacodynamics of nicotinamide itself. |
| popPK | Başkan_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study on anti-VEGF treatments for diabetic macular edema and does not involve nicotinamide or pharmacokinetics. |
| popPK | Beaudoin_1983 | irrelevant | 0 | 0 | The study investigates the biochemical effects of aminothiadiazole on rat liver enzymes, with nicotinamide used only as a protective agent, and contains no pharmacokinetic parameters. |
| PD | Beaudoin_1983 | not_relevant | 2 | 1 | The paper reports qualitative dose-response effects (teratogenic vs non-teratogenic) and enzyme activity percentages for aminothiadiazole, but does not provide a concentration-effect curve or numeric PD parameters (like EC50/Emax) for nicotinamide. |
| popPK | Benziman_1978 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study of oxaloacetate decarboxylase where nicotinamide (NAD) acts as a co-regulator, not a subject of pharmacokinetic analysis. |
| PD | Benziman_1978 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of oxaloacetate decarboxylase in bacteria, not a pharmacodynamic or exposure-response relationship for the drug nicotinamide in a biological system. |
| PGx | Bouzon_2021 | not_relevant | 0 | 0 | The paper describes adaptive evolution of E. coli strains and changes in enzyme cofactor specificity (NAD+ to NADP+), not a pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of the drug nicotinamide. |
| popPK | Buslov_2025 | irrelevant | 0 | 0 | The paper describes biocatalytic synthesis of amino acids and contains no pharmacokinetic data for nicotinamide. |
| PD | Buslov_2025 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme (phenylalanine ammonia lyase) for the synthesis of amino acids and reports enzyme kinetics (Km, kcat), which is unrelated to the pharmacodynamics of nicotinamide. |
| PGx | Chattopadhyay_2025 | not_relevant | 0 | 0 | The study investigates the immunological and transcriptomic effects of nicotinamide metabolism in macrophages (specifically IFN-gamma and NO responses) and mentions polymorphisms in related enzymes, but it does not report a pharmacogenomic effect on the pharmacokinetics (e.g., clearance, bioavailability) or pharmacodynamics (e.g., drug efficacy/ADME) of nicotinamide as a therapeutic agent. |
| popPK | Chebbac_2023 | irrelevant | 0 | 0 | This is an in vitro and in silico study of essential oil activities; nicotinamide is only mentioned as part of NADPH (a target) or generic ADME predictions, not as the subject drug for PK parameter extraction. |
| PD | Chebbac_2023 | not_relevant | 0 | 0 | The paper studies the essential oil of Artemisia flahaultii, not the drug nicotinamide; the mention of NADPH is in the context of in silico docking of oil constituents, not a pharmacodynamic analysis of nicotinamide. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | The paper is a biochemical study of poly(ADP-ribose) polymerase in plants where nicotinamide is used only as an enzyme inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Chen_1994 | not_relevant | 3 | 2 | The paper reports a single IC50 value for nicotinamide in a biochemical enzyme assay, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) relationship or curve. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of exenatide in rats, where nicotinamide is only used as a chemical agent to induce the diabetic model (STZ/NA), not as the subject drug for PK analysis. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacology and mechanism of action of gliocidin (a nicotinamide mimetic), not the pharmacokinetic parameters (CL, V, ka) of nicotinamide itself. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study concerns the clinical outcomes of dexamethasone implants for diabetic macular edema and does not involve nicotinamide pharmacokinetics. |
| popPK | Cheng_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of novel pyrazole derivatives that contain a nicotinamide structural fragment, but does not report pharmacokinetic parameters for nicotinamide itself. |
| PGx | Cheng_2024 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (pharmacodynamic inhibition of CYP2D6 by phellopterin) affecting metoprolol, not a pharmacogenomic effect on nicotinamide. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | The paper is a translational hypothesis/framework discussing nicotinamide mononucleotide (a different compound) and dextromethorphan, with no original pharmacokinetic data or numeric parameters for nicotinamide. |
| PD | Cheung_2026 | not_relevant | 0 | 0 | The paper is a conceptual framework and evidence synthesis that explicitly reports no original clinical or laboratory data, containing no numeric PD parameters or exposure-response analysis for nicotinamide. |
| PGx | Cho_2018 | not_relevant | 0 | 0 | The paper investigates the enzymatic metabolism of osthenol, not the pharmacokinetics of nicotinamide, and nicotinamide (NADPH) is only used as a cofactor in the experimental setup. |
| popPK | Chougoni_2025 | irrelevant | 0 | 0 | The paper is a mechanistic cancer biology study on CtBP inhibitors and NAD depletion, not a pharmacokinetic study of nicotinamide. |
| popPK | Cooke_1988 | irrelevant | 0 | 0 | The study investigates muscle mechanics and energetics in vitro, where nicotinamide (NADH) is only used as a co-factor for enzymatic measurement, not as a drug subject to pharmacokinetic analysis. |
| PD | Cooke_1988 | not_relevant | 0 | 0 | The paper investigates the effects of phosphate and protons on muscle mechanics, not the pharmacodynamics of nicotinamide (NADH is used only as a monitoring tool). |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving napabucasin, not the pharmacokinetics or pharmacodynamics of nicotinamide itself. |
| popPK | Dandona_2001 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of hydrocortisone on NADPH oxidase subunits, not the pharmacokinetics of nicotinamide. |
| PD | Dandona_2001 | not_relevant | 1 | 0 | The paper describes the temporal pharmacodynamic effects of hydrocortisone on NADPH oxidase components but does not report any numeric PD parameters, concentration-effect curves, or dose-response relationships for nicotinamide. |
| popPK | Dawson_1991 | irrelevant | 0 | 0 | The paper describes in vitro neurotoxicity mechanisms involving nitric oxide and mentions NADPH diaphorase (which uses nicotinamide) but contains no pharmacokinetic data for nicotinamide. |
| PD | Dawson_1991 | not_relevant | 0 | 0 | The paper reports EC50 values for nitric oxide synthase inhibitors (L-NAME and L-NMMA), not for nicotinamide, and does not provide a concentration-effect relationship or PD parameters for nicotinamide. |
| PGx | Deng_2025 | not_relevant | 0 | 0 | The paper does not report on pharmacogenomic variation in nicotinamide; it investigates the anti-inflammatory mechanism of its metabolite 1-MNA affecting voriconazole metabolism in an LPS-induced inflammation model. |
| popPK | Dragovich_2013 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Dragovich_2013 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic inhibition (IC50) of NAMPT, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship for the drug nicotinamide in a biological system. |
| PGx | Eastman_2022 | not_relevant | 0 | 0 | The paper investigates a bacterial effector protein (HopAM1) that hydrolyzes NAD+ to promote virulence in plants, which is unrelated to human pharmacogenomics or the pharmacokinetics/pharmacodynamics of nicotinamide as a drug. |
| popPK | Edwards_1999 | irrelevant | 0 | 0 | The paper concerns a technetium-99m labeled radiotracer containing a nicotinamide derivatized peptide, not the pharmacokinetics of nicotinamide itself. |
| PGx | Elgammal_2025 | not_relevant | 0 | 0 | The paper reports in vitro anti-cancer activity and computational ADMET predictions for new nicotinamide hybrids, but does not investigate the effect of genetic variants on PK or PD parameters. |
| popPK | Farhan_2024 | irrelevant | 0 | 0 | The paper is a theoretical in-silico study of acyclovir derivatives for COVID-19, with no data for nicotinamide. |
| PD | Farhan_2024 | not_relevant | 0 | 0 | The paper is a molecular docking study of acyclovir derivatives and does not contain any pharmacodynamic, exposure-response, or dose-response data for nicotinamide or any other drug. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The study focuses on the anticancer properties of neomenthol, not the pharmacokinetics of nicotinamide. |
| PGx | Feng_2022 | not_relevant | 0 | 0 | The paper focuses on developing fluorescent probes for CYP enzymes and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Fischer_1983 | irrelevant | 2 | 0 | The study focuses on the protective efficacy of nicotinamide against alloxan-induced diabetes in mice and reports serum levels/dose-response data, but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or compartmental model estimates. |
| popPK | Friedrich_1976 | irrelevant | 0 | 0 | This is a study on the regulation of bacterial enzymes (chorismate mutase, etc.) where nicotinamide adenine dinucleotide (NAD) is a substrate/cofactor, not a pharmacokinetic study of the drug nicotinamide. |
| PD | Friedrich_1976 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Ki) for bacterial enzymes, not pharmacodynamic exposure-response relationships for the drug nicotinamide. |
| popPK | Garzan_2024 | irrelevant | 0 | 0 | The study focuses on antiviral activity of thiazole amides containing a nicotinamide moiety, not the pharmacokinetics of nicotinamide itself. |
| PGx | Gasser_2024 | not_relevant | 0 | 0 | The paper investigates the effect of MCT1 polymorphism on exercise metabolism markers (e.g., NADH, lactate) in healthy subjects, not on the pharmacokinetics or pharmacodynamics of nicotinamide as a drug. |
| popPK | Gerich_2009 | irrelevant | 0 | 0 | The study investigates hydrogen peroxide signaling in rat hippocampus and is unrelated to the pharmacokinetics of nicotinamide. |
| PD | Gerich_2009 | not_relevant | 0 | 0 | The paper investigates the effects of hydrogen peroxide (H2O2) on neuronal signaling and does not report any pharmacodynamic or exposure-response data for nicotinamide. |
| popPK | Go_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic data for nicotinamide. |
| PD | Go_2026 | not_relevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic or pharmacodynamic modeling or data for nicotinamide. |
| PGx | Grolla_2020 | not_relevant | 0 | 0 | The paper describes the biological mechanism of the NAD+ salvage pathway and protein interactions (NAMPT/GAPDH) in response to stress, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of nicotinamide as a drug. |
| PGx | Gunzner-Toste_2013 | not_relevant | 0 | 0 | The paper reports the discovery and characterization of NAMPT inhibitors, not pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and antibacterial activity of novel mesoionic derivatives against bacteria, with no mention of nicotinamide pharmacokinetics or disposition parameters. |
| PD | Guo_2022 | not_relevant | 0 | 0 | The paper reports EC50 values for a novel mesoionic derivative (A32), not for nicotinamide, and focuses on antibacterial activity and mechanism rather than pharmacodynamic modeling of nicotinamide. |
| PGx | Guo_2024 | not_relevant | 0 | 0 | The study investigates the metabolism of chlortoluron (an herbicide), not the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study focuses on a novel AKR1C3 inhibitor (SG-55) for lung cancer, and nicotinamide is only mentioned as part of the NADPH/NADP+ ratio, not as the subject drug for PK analysis. |
| PD | Guo_2026 | not_relevant | 0 | 0 | The paper reports an IC50 for an AKR1C3 inhibitor (SG-55), not for nicotinamide, and does not provide a pharmacodynamic exposure-response or dose-response model for nicotinamide. |
| popPK | Götz_1975 | irrelevant | 0 | 0 | The paper is an enzymology study on lactate dehydrogenase from Staphylococcus epidermidis, not a pharmacokinetic study of nicotinamide. |
| PD | Götz_1975 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of L-lactate dehydrogenase, not the pharmacodynamics of nicotinamide as a drug. |
| PGx | Hao_2011 | not_relevant | 0 | 0 | The study focuses on the metabolism and toxicity of PAP-1 in rats, not on the pharmacogenomics of nicotinamide. |
| popPK | Haubrich_2020 | irrelevant | 0 | 0 | The paper describes an in-vitro enzymatic assay for NMNAT and reports IC50 values for inhibitors, not pharmacokinetic parameters for nicotinamide. |
| PD | Haubrich_2020 | not_relevant | 0 | 0 | The paper describes an in vitro enzyme assay for NMNAT and reports IC50 values for a specific inhibitor (2,3-Dibromo-1,4-naphthoquinone), but does not report any pharmacodynamic or exposure-response relationship for nicotinamide. |
| popPK | Heger_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of SIRT6 inhibitors where nicotinamide is only mentioned as a moiety of NAD+ or a reagent, not as a subject drug for pharmacokinetic analysis. |
| PD | Heger_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for quercetin derivatives against sirtuins, not a pharmacodynamic or exposure-response relationship for nicotinamide. |
| popPK | Heide_2025 | irrelevant | 0 | 0 | The paper investigates NNMT inhibition and immunology in cancer models; it does not report pharmacokinetic parameters for nicotinamide. |
| PD | Heide_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of NNMT inhibition in cancer-associated fibroblasts using genetic knockout and a novel inhibitor, but it does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for nicotinamide. |
| popPK | Heiner_2017 | irrelevant | 0 | 0 | The paper describes the photophysical energy transfer kinetics of NADH (a coenzyme) in solution, not the pharmacokinetics of the drug nicotinamide. |
| popPK | Hofmann_1985 | irrelevant | 0 | 0 | The paper is an electrophysiological study of cardiac muscle in guinea pigs and ferrets, focusing on electrical coupling under hypoxia, and does not report pharmacokinetic parameters for nicotinamide as a drug (nicotinamide adenine dinucleotide is mentioned only as a cellular cofactor). |
| PGx | Hughes_1983 | not_relevant | 0 | 0 | The paper describes bacterial genetic mutants and their metabolic resistance to an analog, which is not a pharmacogenomic study of human drug PK/PD. |
| popPK | Inan_2026 | irrelevant | 0 | 0 | The study is an in-silico optimization of Sorafenib derivatives and does not involve the drug nicotinamide. |
| PD | Inan_2026 | not_relevant | 0 | 0 | The paper is an in-silico study on Sorafenib derivatives and does not involve nicotinamide or report any pharmacodynamic or exposure-response data. |
| PGx | Isobe_2016 | not_relevant | 0 | 0 | The paper focuses on species differences in ripasudil metabolism mediated by aldehyde oxidase, not pharmacogenomic variants affecting nicotinamide PK/PD. |
| popPK | Iweibo_1975 | irrelevant | 0 | 0 | The study investigates the in-vitro binding of NADH to horse liver alcohol dehydrogenase, not the pharmacokinetics of nicotinamide. |
| PD | Iweibo_1975 | not_relevant | 0 | 0 | The paper studies the binding thermodynamics of NADH/NAD+ to horse liver alcohol dehydrogenase, not the pharmacodynamic exposure-response relationship of nicotinamide in a biological system. |
| popPK | Iyamu_2023 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on NNMT inhibitors, not a pharmacokinetic study of nicotinamide, and contains no PK parameters. |
| PD | Iyamu_2023 | not_relevant | 3 | 2 | The paper reports in vitro enzyme and cellular potency (Ki, IC50, GI50) for NNMT inhibitors, which are pharmacological potency metrics, but does not report a pharmacodynamic exposure-response or dose-response relationship for nicotinamide itself, nor does it provide a PK/PD model or concentration-effect curve for the drug of interest. |
| PGx | Jeon_2024 | not_relevant | 0 | 0 | The study investigates the microsomal metabolism of bromfenac, not the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Jiang_2008 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of 3',4'-dihydroxyflavonol on NADPH oxidase and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Jiang_2008 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (EC50) for 3',4'-dihydroxyflavonol (DiOHF), not nicotinamide. |
| PGx | Jin_2022 | not_relevant | 0 | 0 | The paper investigates G6PD and NAMPT interactions in NAD+ metabolism, not the pharmacokinetics or pharmacodynamics of nicotinamide as a drug. |
| popPK | Kaiser_2026 | irrelevant | 0 | 0 | The study investigates NAD+ dynamics in human brain tissue using MRS and does not report pharmacokinetic parameters (CL, V, t1/2) for nicotinamide. |
| PGx | Kang_2026 | not_relevant | 0 | 0 | The study investigates the therapeutic effect of a metabolic intervention (LbNOX overexpression to alter NAD+/NADH ratios) on retinal ganglion cell survival in a disease model, rather than reporting how a gene variant changes the PK/PD of nicotinamide as a drug. |
| popPK | Kang_2026_2 | irrelevant | 0 | 0 | The paper is a computational study on drug-food interaction prediction using knowledge graphs and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Kang_2026_2 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for nicotinamide. |
| PGx | Kasprzyk-Pawelec_2025 | not_relevant | 0 | 0 | The paper focuses on the pathogenic role of SLC25A1 loss in embryonic senescence and metabolic rewiring (NAD+ depletion), not on the pharmacokinetics or pharmacodynamics of nicotinamide as a drug. |
| PGx | Kawatani_2024 | not_relevant | 0 | 0 | The paper investigates ABCA7 deficiency effects on mitochondrial function using nicotinamide mononucleotide (NMN) as a rescue agent, but does not report pharmacokinetic or pharmacodynamic parameters of nicotinamide (NA) itself. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The study investigates plant physiology and heavy metal toxicity, not human pharmacogenomics or nicotinamide drug parameters. |
| popPK | Khatri_2023 | irrelevant | 0 | 0 | The paper focuses on the development of novel RET kinase inhibitors (alkynyl nicotinamide-based compounds) and reports IC50 values and tumor regression data, not the pharmacokinetic parameters of nicotinamide itself. |
| popPK | Kilinc_2011 | irrelevant | 0 | 0 | The paper describes an in-vitro microfluidic model for neuronal axotomy where nicotinamide adenine dinucleotide (NAD) is used as a biochemical treatment, not as a subject drug for pharmacokinetic analysis. |
| popPK | Kita_1995 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of nitric oxide-releasing agents (FK409/FR144420) and does not involve nicotinamide or its pharmacokinetics. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | Nicotinamide is used only as a co-administered agent to induce diabetes in rats, and the study focuses on the pharmacological effects of a plant extract rather than the pharmacokinetics of nicotinamide. |
| PD | Kumar_2022 | not_relevant | 0 | 0 | The paper studies the antidiabetic effects of an Artemisia roxburghiana extract, not nicotinamide; nicotinamide is only used as a chemical agent to induce diabetes in the animal model. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper is a proteomics study on tau pathology in neurodegenerative diseases and contains no pharmacokinetic data for nicotinamide. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper focuses on proteomic characterization of tau protein in neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for nicotinamide. |
| popPK | Lagache_2026 | irrelevant | 0 | 0 | The study focuses on spatial proteomics and therapy guidance in luminal breast cancer and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Lagache_2026 | not_relevant | 0 | 0 | The paper focuses on spatial proteomics and breast cancer therapy guidance; it does not involve nicotinamide or report any pharmacodynamic parameters for it. |
| PGx | Lawal_2025 | not_relevant | 1 | 0 | The paper investigates NAD+ dyshomeostasis in RYR1-related myopathies and the effect of Nicotinamide Riboside (a precursor, not the drug nicotinamide itself) on cellular levels, but does not report pharmacogenomic effects on the PK/PD of nicotinamide. |
| popPK | Lebang_2026 | irrelevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome and does not contain pharmacokinetic data for nicotinamide. |
| PD | Lebang_2026 | not_relevant | 0 | 0 | The paper is a review of Clerodendrum plants for metabolic syndrome and does not report any pharmacodynamic or exposure-response data for nicotinamide. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper describes in vitro CYP inhibition assays and does not report any pharmacogenomic effects on the PK or PD of nicotinamide. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The paper describes the design and fungicidal activity of chiral nicotinamide analogues, not the pharmacokinetics of the drug nicotinamide. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper reports in vitro pharmacological activity of chemical derivatives of nicotinamide, not pharmacokinetic parameters. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the design and antifungal activity of chemical compounds containing nicotinamide as a structural fragment, not on the pharmacokinetics of nicotinamide. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper reports in vitro EC50 values for a novel antifungal compound (Z23) containing a nicotinamide moiety, but it does not report a pharmacodynamic or exposure-response relationship for nicotinamide itself. |
| popPK | Li_2024_2 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Li_2024_2 | not_relevant | 0 | 0 | The paper reports in vitro fungicidal activity (MICs) of novel compounds targeting NADH oxidoreductase, not a pharmacodynamic exposure-response or dose-response relationship for the drug nicotinamide itself. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The study examines the therapeutic effects of traditional medicine (AR+DGN) in a rat model of hyperuricemia and does not report pharmacogenomic effects on the PK or PD of nicotinamide. |
| PGx | Liederer_2019 | not_relevant | 0 | 0 | The paper reports preclinical ADME properties of a NAMPT inhibitor and does not assess pharmacogenomic effects on nicotinamide. |
| PGx | Lin_2021 | not_relevant | 0 | 0 | The paper discusses NADSYN1 variants causing congenital vertebral malformations and NAD deficiency, not the pharmacokinetics or pharmacodynamics of nicotinamide administration. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antifungal SDH inhibitors containing a nicotinamide structural moiety, and it reports no pharmacokinetic parameters for nicotinamide itself. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper discusses the inhibition of biological acidification by crotonaldehyde and glucose cometabolism, with no mention of nicotinamide or any pharmacodynamic/exposure-response analysis. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of graveoline, not the pharmacokinetics or pharmacodynamics of nicotinamide, nor does it report pharmacogenomic effects on nicotinamide parameters. |
| popPK | Liu_2023_2 | irrelevant | 0 | 0 | The paper describes a ruthenium-based cancer theranostic agent and mentions NADH (nicotinamide adenine dinucleotide) depletion as a mechanism of action, but does not study the pharmacokinetics of nicotinamide. |
| PD | Liu_2023_2 | not_relevant | 0 | 0 | The paper reports on a ruthenium-based prodrug (RuAzNM) and its mechanism of action; nicotinamide is only mentioned as part of NADH (a metabolic cofactor) depletion, not as the drug being studied for a pharmacodynamic relationship. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism of pectolinarigenin, not nicotinamide, and does not report pharmacogenomic effects on nicotinamide PK or PD parameters. |
| popPK | Lobo-Rojas_2026 | irrelevant | 0 | 0 | The paper focuses on T. cruzi IMPDH inhibition and Chagas disease therapeutics, containing no pharmacokinetic data for nicotinamide. |
| PD | Lobo-Rojas_2026 | not_relevant | 0 | 0 | The paper focuses on the drug AVN-944 and other IMPDH inhibitors, not nicotinamide; while NAD+ is mentioned as a substrate for enzyme kinetics, no pharmacodynamic relationship for nicotinamide is reported. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study investigates the biotransformation of obefazimod in sheep and nematodes, not the pharmacokinetics of nicotinamide. |
| PD | Lochman_2026 | not_relevant | 0 | 0 | The paper focuses on the biotransformation and metabolic pathways of obefazimod, not on pharmacodynamic or exposure-response relationships for nicotinamide. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study of SIRT6 allosteric activation using molecular dynamics and in vitro enzyme kinetics; nicotinamide appears only as a reaction byproduct or stop buffer component, not as a drug subject for pharmacokinetic analysis. |
| popPK | Luo_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of nicotinamide derivatives against fungi, containing no pharmacokinetic data for nicotinamide. |
| popPK | Lv_2017 | irrelevant | 0 | 0 | The study reports in vitro biological activity and docking simulations of synthetic nicotinamide derivatives as antifungal agents, containing no pharmacokinetic data for the drug nicotinamide. |
| PD | Lv_2017 | not_relevant | 3 | 2 | The paper reports in vitro EC50 values for a novel derivative, not a pharmacokinetic/pharmacodynamic exposure-response relationship for nicotinamide itself. |
| popPK | Lv_2025 | irrelevant | 0 | 0 | The study focuses on a novel dual inhibitor (T8) targeting NAMPT and PD-L1, not the pharmacokinetics of nicotinamide itself. |
| PD | Lv_2025 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values and in vivo tumor growth inhibition percentages, but does not provide an exposure-response or dose-response analysis linking plasma concentrations or doses to the pharmacodynamic effect with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Maloney_2026 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of NNMT inhibitors on cancer cell viability and metabolism, not a pharmacokinetic study reporting disposition parameters for nicotinamide. |
| popPK | Marzoog_2026 | irrelevant | 0 | 0 | The paper is a review on statins and Nrf2 signaling in atherosclerosis, unrelated to the pharmacokinetics of nicotinamide. |
| PD | Marzoog_2026 | not_relevant | 0 | 0 | The paper is a mechanistic review of statins and Nrf2 signaling; it does not report any pharmacodynamic or exposure-response data for nicotinamide. |
| PGx | Meier_1983 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of debrisoquine (CYP2D6 polymorphism) and mentions nicotinamide only as a probe substrate or unrelated activity, not as the primary drug for which a PK/PD effect of the variant is reported. |
| popPK | Mena_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of escitalopram, not nicotinamide. |
| PD | Mena_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of escitalopram (an SSRI), not nicotinamide; nicotinamide is only mentioned as a co-factor (NADPH) in the model variables. |
| PGx | Mierzejewska_2024 | not_relevant | 0 | 0 | The paper investigates the interaction between 4-pyridone-3-carboxamide-1-β-D-ribonucleoside (4PYR) and cyclophosphamide in mice, with no human pharmacogenomic data or specific analysis of nicotinamide PK/PD based on gene variants. |
| popPK | Mockeliunas_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for linezolid, not nicotinamide. |
| PD | Mockeliunas_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of linezolid and precision dosing, not nicotinamide, and does not report any PD parameters for nicotinamide. |
| popPK | Mulyukov_2018 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model of ranibizumab in age-related macular degeneration and does not study nicotinamide pharmacokinetics. |
| popPK | Murthy_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PARP inhibitors that use nicotinamide as a structural mimic or substrate, not a pharmacokinetic study of nicotinamide itself. |
| PGx | Mutz_2017 | not_relevant | 0 | 0 | The paper investigates the sensitivity of cell lines to the NAMPT inhibitor FK866, which is not a pharmacokinetic or pharmacodynamic parameter of nicotinamide. |
| PGx | NISSELBAUM_1964 | not_relevant | 0 | 0 | The paper investigates lactic dehydrogenase variants and their action on nucleotide/substrate analogues, with no mention of nicotinamide or its pharmacokinetics/pharmacodynamics. |
| PGx | Najera_2025 | not_relevant | 0 | 0 | The study investigates the anticancer efficacy of a NAMPT inhibitor in tumor models, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Neelakantan_2017 | irrelevant | 0 | 0 | The paper focuses on the structure-activity relationship of NNMT inhibitors and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Neelakantan_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for NNMT inhibitors, not a pharmacodynamic exposure-response or dose-response relationship for nicotinamide itself. |
| PGx | Nemoto_1994 | not_relevant | 1 | 2 | The paper examines the effect of the drug nicotinamide on gene expression (CYP1A2) in mouse cells, which is the inverse of the requested pharmacogenomic effect on the drug's PK/PD parameters in humans. |
| PGx | Nemoto_1995 | not_relevant | 0 | 0 | The paper investigates the maintenance of Cyp2b gene expression in mouse hepatocytes and mentions nicotinamide only as an additive that enhances CYP2B mRNA/protein levels, but it does not report pharmacokinetic or pharmacodynamic parameters of nicotinamide itself. |
| popPK | Nicola_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing the neuroprotective efficacy of niacinamide in glaucoma using functional and structural endpoints (VF, OCT, VEP) and does not report any pharmacokinetic parameters (e.g., CL, V, ka) for nicotinamide. |
| popPK | Nielsen_1993 | irrelevant | 0 | 0 | The study investigates the effect of 5-aminosalicylic acid and analogs on neutrophil superoxide generation, with no pharmacokinetic data for nicotinamide. |
| PD | Nielsen_1993 | not_relevant | 0 | 0 | The paper investigates 5-ASA and its analogs, not nicotinamide; the mention of NADPH is mechanistic context, not a PD analysis of nicotinamide. |
| popPK | Nizi_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PARP inhibitors where nicotinamide is only mentioned as a structural mimic, with no pharmacokinetic data reported. |
| PD | Nizi_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for enzyme inhibition (PARP10/PARP15) and cellular apoptosis rescue, but does not report a pharmacodynamic (exposure-response) relationship for nicotinamide or any drug in a physiological context. |
| PGx | Noble_2017 | not_relevant | 0 | 0 | The paper investigates the metabolism of flubromazolam and does not report pharmacogenomic effects on the PK or PD of nicotinamide. |
| popPK | Odunsi_2022 | irrelevant | 0 | 0 | The study focuses on metabolic pathways and immune mechanisms in ovarian cancer, not the pharmacokinetics of nicotinamide. |
| PD | Odunsi_2022 | not_relevant | 0 | 0 | The paper investigates the metabolic consequences of IDO1 inhibition (epacadostat) and the role of NAD+ in T-cell suppression, but it does not report a pharmacodynamic exposure-response or dose-response relationship for nicotinamide itself, nor does it provide numeric PD parameters for nicotinamide. |
| popPK | Olejniczak_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and antibacterial/anti-inflammatory properties of nicotinamide derivatives, containing no pharmacokinetic data. |
| PD | Olejniczak_2024 | not_relevant | 3 | 2 | The paper reports IC50 values for anti-inflammatory activity and EC50 for environmental toxicity, but these are in vitro pharmacological or ecotoxicological endpoints, not pharmacodynamic (exposure-response) relationships for the drug in a biological system. |
| popPK | Ozyazgan_2005 | irrelevant | 0 | 0 | The study investigates vascular reactivity in diabetic rats, using nicotinamide only as a co-administered agent to induce diabetes, not as a subject drug for pharmacokinetic analysis. |
| PD | Ozyazgan_2005 | not_relevant | 0 | 0 | The paper investigates the vascular effects of GLP-1 and Exendin-4 in diabetic rats; nicotinamide is used only as a co-agent to induce the diabetic model, and no pharmacodynamic or exposure-response relationship for nicotinamide itself is reported. |
| popPK | Pankiewicz_1993 | irrelevant | 0 | 0 | The paper describes the chemical synthesis and in-vitro enzymatic inhibition of NAD analogues, containing no pharmacokinetic data for nicotinamide. |
| PD | Pankiewicz_1993 | not_relevant | 3 | 5 | The paper reports in vitro enzyme inhibition constants (Ki, IC50, ID50) for synthetic NAD analogues, which are pharmacological potency metrics but do not constitute a pharmacodynamic exposure-response or dose-response relationship for the drug nicotinamide itself. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR genotype on verteporfin photodynamic therapy response, not nicotinamide. |
| popPK | Placidi_1993 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of zidovudine, and nicotinamide is only mentioned as part of the cofactor NADPH, not as the subject drug for PK analysis. |
| PD | Placidi_1993 | not_relevant | 0 | 0 | The paper reports in vitro metabolic kinetics (Km/Vmax) for zidovudine reduction, not a pharmacodynamic exposure-response or dose-response relationship for nicotinamide. |
| popPK | Plisson_2009 | irrelevant | 0 | 0 | The study investigates the PET radioligand GSK189254 in pigs, not nicotinamide. |
| PGx | Polsky-Fisher_2006 | not_relevant | 0 | 0 | The paper investigates the effect of P450 inhibitors on esterase activity using fluorescein diacetate, and does not report on nicotinamide pharmacokinetics or pharmacodynamics or any genetic variants. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine and hepatocyte differentiation and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not report any pharmacodynamic or exposure-response relationship for nicotinamide. |
| popPK | Puszkiel_2023 | irrelevant | 0 | 0 | The study focuses on the PK-PD of everolimus and sorafenib, not nicotinamide. |
| PD | Puszkiel_2023 | not_relevant | 0 | 0 | The paper reports a PK-PD model for everolimus and sorafenib, not nicotinamide. |
| popPK | Qin_2023 | irrelevant | 0 | 0 | The paper describes the discovery of NaV1.8 inhibitors based on a nicotinamide scaffold, not the pharmacokinetics of nicotinamide itself. |
| PD | Qin_2023 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 value for a specific compound, which is a single-point potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with derivable PD parameters like Emax or EC50 curves. |
| popPK | Qiu_2017 | irrelevant | 0 | 0 | The paper describes nicotinamide derivatives as P-gp inhibitors for multidrug resistance and contains no pharmacokinetic data for nicotinamide. |
| PGx | Ramsden_2020 | not_relevant | 2 | 0 | The paper is a review of genomic associations of the NNMT gene with diseases and discusses potential but unproven mechanisms, but it does not report any quantitative pharmacokinetic or pharmacodynamic parameters. |
| PGx | Rao_2024 | not_relevant | 0 | 0 | The paper investigates the inactivation of CYP2D6 by the metabolite berberrubine, not the impact of gene variants on the PK/PD of nicotinamide. |
| PGx | Rasheed_2020 | not_relevant | 0 | 0 | The study investigates the protective effects of resveratrol on pesticides-induced Parkinsonism, focusing on CYP2D6 activity and Nrf2 signaling, and does not involve nicotinamide as the drug of interest or a specific pharmacogenomic effect on its PK/PD. |
| PGx | Redler_2025 | not_relevant | 0 | 0 | The paper reviews resistance mechanisms to NAMPT inhibitors, not the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Rezek_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of an antisense oligonucleotide for a genetic retinal disease in an in vitro cell model and does not involve nicotinamide pharmacokinetics. |
| PD | Rezek_2026 | not_relevant | 0 | 0 | The paper investigates an antisense oligonucleotide (ASO) therapy for EFEMP1, not nicotinamide, and does not report any pharmacodynamic parameters for nicotinamide. |
| popPK | Riedl_2022 | irrelevant | 0 | 0 | The paper analyzes retinal fluid volumes and vision in nAMD patients treated with ranibizumab, containing no data or pharmacokinetic parameters for nicotinamide. |
| popPK | Roitelman_1984 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Roitelman_1984 | not_relevant | 0 | 0 | The paper investigates the allosteric activation of an enzyme (HMG-CoA reductase) by NADH/NADPH, not the pharmacodynamic exposure-response relationship of nicotinamide in a biological system. |
| popPK | Rozi_2025 | irrelevant | 0 | 0 | The paper is a vaccine immunogenicity and efficacy study in mice involving Aeromonas hydrophila and does not contain pharmacokinetic data for nicotinamide. |
| popPK | Rubio-Aurioles_2012 | irrelevant | 0 | 0 | The paper is a clinical trial of tadalafil and sildenafil for erectile dysfunction and does not report pharmacokinetic parameters for nicotinamide. |
| PGx | Ryu_2016 | not_relevant | 0 | 0 | The study investigates propolis-induced CYP inhibition and mentions NADPH only as a cofactor, containing no pharmacogenomic data regarding nicotinamide. |
| popPK | Sakai_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and metabolism of a different drug, N-(2-hydroxyethyl) nicotinamide nitrate (SG-75), rather than nicotinamide itself. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam in rats, not nicotinamide. |
| PD | Sato_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of midazolam and CYP3A activity in an ECMO rat model, with no analysis of nicotinamide or any pharmacodynamic/exposure-response relationship. |
| PGx | Sazci_2016 | not_relevant | 0 | 0 | The study reports a genetic association with migraine risk, not a pharmacokinetic or pharmacodynamic effect of nicotinamide. |
| popPK | Seifert_1991 | irrelevant | 0 | 0 | The paper investigates neutrophil NADPH oxidase regulation in hypertension, not the pharmacokinetics of nicotinamide. |
| PD | Seifert_1991 | not_relevant | 0 | 0 | The paper studies the pharmacology of NADPH oxidase activation by stimuli (e.g., fMet-Leu-Phe) and does not report a pharmacodynamic or exposure-response relationship for the drug nicotinamide. |
| popPK | Seomun_2026 | irrelevant | 0 | 0 | The paper is an in silico machine learning study for predicting liver microsomal stability and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for nicotinamide. |
| PD | Seomun_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting liver microsomal metabolic stability (t1/2) and does not report pharmacodynamic (PD) or exposure-response relationships for nicotinamide. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The paper focuses on the anti-diabetic efficacy of a plant extract in rats and does not contain pharmacokinetic data for nicotinamide. |
| PD | Shahzadi_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Fraxinus xanthoxyloides), not nicotinamide, and does not report any pharmacodynamic parameters for nicotinamide. |
| PGx | Shankar_2018 | not_relevant | 3 | 2 | The paper reports genotype-specific toxicity (PD) of a NAMPT inhibitor (GMX-1778), not nicotinamide, and does not report pharmacokinetic parameters for nicotinamide. |
| popPK | She_2021 | irrelevant | 0 | 0 | The paper is a review of NAD+ precursors and does not report original quantitative pharmacokinetic parameters for nicotinamide. |
| PD | She_2021 | not_relevant | 1 | 0 | The text is a review article discussing the general pharmacology of NAD+ precursors and does not present specific numeric PD parameters or exposure-response data for nicotinamide. |
| PGx | Sheriffdeen_2019 | not_relevant | 0 | 0 | The paper investigates herbal-caffeine interactions, not pharmacogenomic effects on nicotinamide. |
| popPK | Shivavedi_2019 | irrelevant | 0 | 0 | Nicotinamide is used solely as a diabetogenic agent to induce a disease model, and the study focuses on the pharmacological effects of ascorbic acid, not the pharmacokinetics of nicotinamide. |
| popPK | Stahmer_1985 | irrelevant | 0 | 0 | The paper is a review of benzodiazepine pharmacodynamics and mentions nicotinamide only as a potential endogenous ligand, providing no pharmacokinetic data. |
| PD | Stahmer_1985 | not_relevant | 0 | 0 | The text is a general review of benzodiazepines and only mentions nicotinamide as a potential endogenous ligand without providing any pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PGx | Söderlund_2022 | not_relevant | 0 | 0 | The paper describes the biocatalyzed synthesis of 2-hydroxyacetophenone using engineered enzymes in E. coli, and does not report pharmacogenomic effects on the PK/PD of nicotinamide. |
| popPK | Tamura_1990 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding nicotinamide pharmacokinetics. |
| PD | Tamura_1990 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, pharmacodynamic data, or information regarding nicotinamide. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study of breath and blood in healthy volunteers and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Tang_2025 | not_relevant | 0 | 0 | The paper is a comparative metabolomics study of breath and blood in healthy volunteers and does not involve nicotinamide administration or any pharmacodynamic/exposure-response analysis. |
| popPK | Tashkandi_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of panaxynol, and nicotinamide is only mentioned as a co-factor (NADPH) for in vitro enzyme reactions, not as the subject drug. |
| PGx | Thikekar_2022 | not_relevant | 0 | 0 | The paper investigates a herb-drug interaction (glimepiride + Diabecon) in diabetic rats; nicotinamide is used only as a chemical inducer for diabetes, and no pharmacogenomic effects are studied. |
| PGx | Tostes_2022 | not_relevant | 0 | 0 | The paper discusses mitochondrial DNA segregation and autophagy in mice, with no mention of nicotinamide or any pharmacokinetic/pharmacodynamic drug effects. |
| popPK | Travelli_2019 | irrelevant | 0 | 0 | The study focuses on the development of NAMPT enzyme inhibitors and their potency (IC50/EC50), not the pharmacokinetic disposition parameters (CL, V, ka) of the drug nicotinamide itself. |
| PD | Travelli_2019 | not_relevant | 3 | 2 | The paper reports in vitro enzyme inhibition constants (EC50/IC50) for NAMPT inhibitors, which are pharmacological potency metrics, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug in a biological system (e.g., PK/PD fit, concentration-effect curve in cells/animals). |
| popPK | Trujillo_2024 | irrelevant | 0 | 0 | The paper is a study on kidney fMRI biomarkers and inflammation where nicotinamide is only a co-administered intervention in the context of a broader trial, with no pharmacokinetic parameters for nicotinamide reported. |
| PGx | Tsurho_2025 | not_relevant | 0 | 0 | The paper reports on a zebrafish developmental model where nicotinamide is used as a rescue agent for teratogenic defects, not on pharmacogenomic influences on its PK/PD parameters in humans. |
| PGx | Tsurho_2026 | not_relevant | 0 | 0 | The paper describes a zebrafish model for NAD+ deficiency disorders, not a pharmacogenomic study of nicotinamide PK/PD parameters. |
| PGx | Tulbah_2020 | not_relevant | 0 | 0 | The paper discusses atorvastatin, not nicotinamide. |
| popPK | Tyurenkov_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the GPR119 agonist ZB-16, with nicotinamide used only as a reagent to induce diabetes in the animal model. |
| PD | Tyurenkov_2018 | not_relevant | 0 | 0 | The paper reports PD for the drug ZB-16, not for nicotinamide, which is only used as a reagent to induce the disease model. |
| popPK | Van_2024 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Van_2024 | not_relevant | 0 | 0 | The paper focuses on the effects of ACAD9 treatment with bezafibrate and nicotinamide riboside on cardiomyopathy and lactic acidosis, but does not report a pharmacodynamic (exposure- or dose-response) relationship for nicotinamide itself, nor does it provide numeric PD parameters for nicotinamide. |
| PGx | Walvekar_2025 | not_relevant | 0 | 0 | The paper studies the metabolism of NAD precursors (like nicotinamide riboside) and genetic variants in repair enzymes (NAXD), but it does not report on the pharmacokinetics or pharmacodynamics of nicotinamide as a drug treatment. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper describes the synthetic chemistry and antifungal activity of nicotinamide derivatives, not the pharmacokinetics of the drug nicotinamide. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and antifungal activity of nicotinamide derivatives, containing no pharmacokinetic data for nicotinamide itself. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper studies the CYBB gene variant's impact on tuberculosis resistance via the NADPH pathway in cattle, not the PK/PD of nicotinamide. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study investigates water exchange across the blood-brain barrier using TGN-020 as an inhibitor of aquaporin-4, not the pharmacokinetics of nicotinamide. |
| PGx | Wei_2015 | not_relevant | 0 | 0 | The study investigates atorvastatin, not nicotinamide, despite mentioning the enzyme's substrate in the background. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not study nicotinamide pharmacokinetics or contain any PK parameters. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for nicotinamide. |
| PGx | Winkler_2025 | not_relevant | 0 | 0 | The paper studies a histone variant deletion and its effect on endogenous NAD+ metabolism and kidney pathology, not the pharmacokinetics or pharmacodynamics of the drug nicotinamide. |
| PGx | Witmer_2026 | not_relevant | 0 | 0 | The paper investigates SCN5A gene variants and cardiac mitochondrial metabolism, not the pharmacokinetics or pharmacodynamics of the drug nicotinamide. |
| PGx | Wrona_2019 | not_relevant | 0 | 0 | The paper focuses on a genetic diagnostic tool for Chronic Granulomatous Disease and does not report pharmacokinetic or pharmacodynamic data for nicotinamide. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on fungicidal activity of nicotinamide derivatives, containing no pharmacokinetic data for the drug nicotinamide. |
| popPK | Wurm_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis of nicotinamide analogs as Kv7 channel openers and contains no pharmacokinetic data for the drug nicotinamide. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The paper evaluates biomarkers (VEGF, IL-6) and efficacy of conbercept in diabetic macular edema, containing no pharmacokinetic data for nicotinamide. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of nicotinamide derivatives as ALKBH2 inhibitors, not a pharmacokinetic study of nicotinamide. |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for novel ALKBH2 inhibitors (AH2-15c and AH2-14c), not for nicotinamide, and does not provide a pharmacodynamic exposure-response model for nicotinamide. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of warfarin and vitamin K levels, with no data reported for nicotinamide. |
| PD | Xue_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of warfarin (INR response) and the influence of vitamin K and gut microbiota, but does not report a pharmacodynamic or exposure-response relationship for nicotinamide. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological evaluation of nicotinamide derivatives as fungicides, containing no pharmacokinetic data for nicotinamide. |
| PD | Yang_2020 | not_relevant | 3 | 5 | The paper reports in vitro enzymatic IC50 values for novel nicotinamide derivatives, which is a biochemical potency metric, not a pharmacodynamic (exposure-response) relationship for the drug nicotinamide itself in a biological system. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper is a systematic review of Nicotinamide Mononucleotide (NMN) safety and metabolic outcomes, not a pharmacokinetic study of Nicotinamide reporting disposition parameters. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of safety and metabolic outcomes, reporting no pharmacokinetic data, concentration-effect relationships, or numeric PD parameters for nicotinamide or NMN. |
| popPK | Yap_2017 | irrelevant | 0 | 0 | The study investigates the antitumor mechanism of annonacin in cancer cells and does not involve pharmacokinetic analysis of nicotinamide. |
| PD | Yap_2017 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Annonacin, not Nicotinamide. |
| popPK | Yousef_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on nicotinamide derivatives as VEGFR-2 inhibitors, reporting in-vitro and in-silico data only, with no pharmacokinetic parameters for nicotinamide. |
| popPK | Yousef_2022_2 | irrelevant | 0 | 0 | The paper describes a novel pyridine derivative containing a nicotinamide moiety for anticancer studies, not the pharmacokinetics of nicotinamide itself. |
| PD | Yousef_2022_2 | not_relevant | 3 | 3 | The paper reports single-point IC50 values for enzyme inhibition and cytotoxicity, but does not provide a full concentration-effect curve, dose-response model, or PK/PD analysis required to derive standard PD parameters like Emax or slope. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PD | Yu_2016 | not_relevant | 0 | 0 | The paper studies the effect of ionic liquids on Vibrio fischeri bioluminescence and does not involve nicotinamide or pharmacodynamic modeling. |
| PGx | Yuan_2013 | not_relevant | 0 | 0 | The paper investigates the metabolism of T-2 toxin by chicken CYP3A37 and is unrelated to nicotinamide or human pharmacogenomics. |
| popPK | Yue_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on HDAC/NAMPT dual inhibitors in leukemia cells and does not report pharmacokinetic parameters for nicotinamide. |
| PGx | Zak_2016 | not_relevant | 0 | 0 | The paper reports drug discovery for NAMPT inhibitors and CYP2C9 inhibition, but does not report a pharmacogenomic effect (gene variant) on the PK or PD of nicotinamide. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The paper discusses mitochondrial NAD kinase (MNADK) and NAD metabolism, not the pharmacokinetics of the drug nicotinamide. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on xanthine oxidase inhibitors and does not report pharmacokinetic parameters for nicotinamide. |
| PD | Zhang_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel derivatives, not a pharmacodynamic or exposure-response relationship for the drug nicotinamide in a biological system. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper reviews ALDH2's role in tumorigenesis and cancer treatment but does not report pharmacogenomic effects on the PK or PD of nicotinamide. |
| PGx | Zhang_2021_2 | not_relevant | 0 | 0 | The paper reviews SIRT1/2 modulators for depression, not the pharmacogenomics of nicotinamide. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study is a metabolomic and genetic analysis of kidney disease involving uric acid, not a pharmacokinetic study of nicotinamide. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper is a metabolomics and transcriptomics study of kidney injury models and does not report any pharmacodynamic or exposure-response analysis for nicotinamide. |
| PGx | Zhao_2019 | not_relevant | 0 | 0 | The study focuses on single-cell transcriptomics in oocytes and is not related to the pharmacokinetics or pharmacodynamics of nicotinamide. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry resource for drug screening and metabolomics in an HIV cohort, with no pharmacokinetic modeling or quantitative disposition parameters for nicotinamide. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics resource for detecting drug exposure and does not report any pharmacodynamic or exposure-response analysis for nicotinamide. |
| PGx | Zielinska_2017 | not_relevant | 0 | 0 | The paper studies the genetic regulation of metabolic enzymes (H6PDH/11β-HSD1) in skeletal muscle and does not investigate nicotinamide pharmacokinetics or pharmacodynamics. |
| popPK | van_2021 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | van_2021 | not_relevant | 0 | 0 | The paper focuses on the structural characterization and inhibition of NNMT by macrocyclic peptides, not on the pharmacodynamics or exposure-response relationship of nicotinamide itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
