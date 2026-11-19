<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Antimony monosulfide&quot;}]"></div>

# Antimony monosulfide

- **generic name:** Antimony monosulfide
- **T3DB:** [T3D1859](http://www.t3db.ca/toxins/T3D1859) · **PubChem:** [CID 139227](https://pubchem.ncbi.nlm.nih.gov/compound/139227)

## About

Antimony monosulfide is a sulfide of antimony. Antimony is a metallic element with the chemical symbol Sb and atomic number 51. Small amounts of antimony are found in the earth's crust.

- **Category:** Pollutant, Airborne Pollutant, Food Toxin, Synthetic Toxin
- **Route of exposure:** inhalation, oral, dermal
- **Sources and uses:** Breathing air, drinking water, and eating foods that contain antimony. Exposure can also occur through dermal or skin contact.
- **Mechanism of toxicity:** The inhalation data suggest that the myocardium is a target of antimony toxicity. It is possible that antimony affects circulating glucose by interfering with enzymes of the glycogenolysis and gluconeogenesis pathways. …
- **Health effects:** Dermal exposure to antimony can cause antimony spots (papules and pustules around sweat and sebaceous glands). Antimony poisoning can also lead to pneumoconiosis. …
- **Carcinogenicity:** No indication of carcinogenicity (not listed by IARC).
- **Treatment:** Following oral exposure to antimony, administer charcoal as a slurry (240 mL water/30 g charcoal). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1859">T3DB T3D1859</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 12067-17-3</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-17 13:49 | 53:12 | 0/0/0 | 0/0/0 | 0/0/0 | 1,677,988/35,688 | einfracz / qwen3.8-flash-next | 71 | 14/57 | 71/0 | 0 |

## Coverage

- **PubMed hits:** 276 matched, 194 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pile-Spellman_1984.pdf` | Pile-Spellman JM et al., Experimental in vivo imaging of the cra…, AJNR. American journal of n… (1984) | popPK | 7 |  | [6435420](https://pubmed.ncbi.nlm.nih.gov/6435420) | The paper reports whole-body retention/biodistribution data (percentage of injected dose in lymph nodes at specific time points) which constitutes kinetic data, though detailed kinetic parameters like rate constants are not explicitly provided in the text. |
| `Chen_2016.pdf` | Chen W et al., Absolute cross-sections for DNA strand…, Physical chemistry chemical… (2016) | pd | 5 | [10.1039/c6cp05201k](https://doi.org/10.1039/c6cp05201k) | [27878170](https://www.ncbi.nlm.nih.gov/pubmed/27878170) | metadata signals extractable PD data (exposure-response) |
| `Ivancsits_2002.pdf` | Ivancsits S et al., Induction of DNA strand breaks by inter…, Mutation research (2002) | pd | 5 | [10.1016/s1383-5718(02)00109-2](https://doi.org/10.1016/s1383-5718(02)00109-2) | [12160887](https://www.ncbi.nlm.nih.gov/pubmed/12160887) | metadata signals extractable PD data (exposure-response) |
| `Kang_2008.pdf` | Kang HJ et al., TotalPlex gene amplification using bulg…, Molecular and cellular prob… (2008) | pgx | 5 | [10.1016/j.mcp.2008.02.001](https://doi.org/10.1016/j.mcp.2008.02.001) | [18385010](https://www.ncbi.nlm.nih.gov/pubmed/18385010) | metadata signals extractable PGX data (CYP3A4*1B) |

<sub>queue written 2026-11-17 13:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agersnap_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of glepaglutide, a GLP-2 analog, and does not mention antimony_monosulfide at all. |
| popPK | Ahn-Jarvis_2015 | irrelevant | 0 | 0 | The paper studies isoflavone pharmacokinetics and does not mention antimony_monosulfide or report any kinetic parameters for it. |
| popPK | Ahsan_2025 | irrelevant | 0 | 0 | The paper is a nutritional epidemiology study on sugar-sweetened beverages and diabetes, with no mention of antimony_monosulfide or toxicokinetic parameters. |
| PGx | Arraiano_1988 | not_relevant | 0 | 0 | The paper discusses bacterial mRNA degradation mechanisms and has no relation to antimony monosulfide or human pharmacogenomics. |
| popPK | Baltazar_2025 | irrelevant | 0 | 0 | The paper is a clinical case report regarding porphyria cutanea tarda and Sjögren syndrome; it contains no data on antimony_monosulfide. |
| popPK | Barba_2023 | irrelevant | 0 | 0 | The paper discusses NAMPT and interferon gamma signaling in melanoma, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Bechthold_2019 | irrelevant | 0 | 0 | The paper is a meta-analysis on dietary food groups and cardiovascular disease, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Benítez-Bribiesca_1999 | irrelevant | 0 | 0 | The paper discusses DNA damage from bleomycin, H2O2, and radiation, with no mention of antimony_monosulfide or toxicokinetic parameters. |
| popPK | Bernabé_2014 | irrelevant | 0 | 0 | The paper is an epidemiological study on sugar-sweetened beverages and dental caries, containing no data on antimony_monosulfide. |
| popPK | Biswas_2021 | irrelevant | 0 | 0 | The paper focuses entirely on gold (Suvarna Bhasma) pharmacokinetics in rats and zebrafish, with no mention of antimony_monosulfide as the subject substance. |
| popPK | Bolognani_2023 | irrelevant | 0 | 0 | The paper discusses apraglutide (a GLP-2 analog) and citrulline, with no mention of antimony_monosulfide or antimony kinetics. |
| PGx | Bonde_2023 | not_relevant | 0 | 0 | The paper describes molecular biology and structural biology experiments on E. coli DNA binding proteins (SSB and RecG), containing no information about antimony monosulfide, pharmacokinetics, or pharmacodynamics in humans or animals. |
| popPK | Bronskill_1983 | irrelevant | 0 | 0 | The paper reports radiation absorbed doses from a radiopharmaceutical (99mTc-antimony sulfide colloid) rather than quantitative toxicokinetic parameters for antimony monosulfide itself. |
| popPK | Brunborg_1996 | irrelevant | 0 | 0 | The paper concerns the toxicokinetics and genotoxicity of 1,2-dibromo-3-chloropropane (DBCP) in rats, with no mention of antimony_monosulfide. |
| popPK | Buso_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on sweet beverages and body weight in humans and contains no data on antimony_monosulfide or its toxicokinetics. |
| popPK | Buyon_2003 | irrelevant | 0 | 0 | The paper is a review of neonatal lupus syndromes and discusses anti-SSA/Ro antibodies, cardiac conduction abnormalities, and clinical outcomes, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Buyon_2004 | irrelevant | 0 | 0 | The paper discusses neonatal lupus syndromes and autoantibodies, containing no toxicokinetic data or numeric parameters for antimony monosulfide. |
| popPK | Buyon_2005 | irrelevant | 0 | 0 | The paper discusses autoimmune congenital heart block and TGFbeta signaling, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Campbell_1988 | irrelevant | 0 | 0 | The paper is about plant pathology and the effect of simulated rain acidity on plant disease, with no mention of antimony, antimony monosulfide, or toxicokinetics. |
| popPK | Capranico_1989 | irrelevant | 0 | 0 | The paper studies 4-demethoxydaunorubicin (an anthracycline) and its effects on DNA breaks, not antimony monosulfide. |
| PGx | Capranico_1989 | not_relevant | 0 | 0 | The paper studies 4-demethoxydaunorubicin, not antimony_monosulfide, and focuses on DNA damage mechanisms rather than pharmacogenomic effects on PK/PD parameters. |
| popPK | Castellani_2023 | irrelevant | 0 | 0 | The paper is a clinical study on bilateral ureteroscopy for kidney stones and contains no data on antimony_monosulfide toxicokinetics. |
| popPK | Ceppi_2023 | irrelevant | 0 | 0 | The paper is an occupational biomonitoring study focusing on glass fibers and PAHs; antimony_monosulfide is not the subject substance and no toxicokinetic parameters for it are reported. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | The paper discusses DNA damage induced by low-energy electrons in plasmid films, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on sugar-sweetened beverages and pancreatic cancer, containing no data or mention of antimony monosulfide. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis on artificial sweetened beverages and mortality, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| PGx | Chen_2024_2 | not_relevant | 0 | 0 | The study investigates the association between fructose intake/variants in KHK (ketohexokinase) and sex hormone levels (SHBG, testosterone) for hyperandrogenism risk, involving neither antimony monosulfide nor its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Cheung_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for dabigatran etexilate and rivaroxaban, not antimony monosulfide. |
| popPK | Christensen_2013 | irrelevant | 0 | 0 | The paper focuses on short interfering RNAs (siRNAs) in mice, with no mention of antimony monosulfide or any quantitative kinetic parameters for it. |
| popPK | Christensen_2014 | irrelevant | 0 | 0 | The paper describes the toxicokinetics of siRNA and lipid nanoparticles in mice, with no mention or data regarding antimony_monosulfide. |
| popPK | Clancy_2003 | irrelevant | 0 | 0 | The paper discusses TGF-beta and cardiac injury, containing no data on antimony_monosulfide or any toxicokinetic parameters for it. |
| popPK | Clancy_2004 | irrelevant | 0 | 0 | The paper discusses apoptosis and congenital heart block in SSA/Ro-SSB/La autoimmune disease, with no mention of antimony_monosulfide or its toxicokinetics. |
| popPK | Clancy_2006 | irrelevant | 0 | 0 | The paper investigates congenital heart block and apoptosis clearance involving SSA/Ro and SSB/La antibodies, with no mention of antimony_monosulfide or any related kinetic data. |
| popPK | Costa_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between sugar-sweetened beverage consumption and eating behaviors in children, containing no data on antimony_monosulfide. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The paper is about electrical engineering (DC circuit breakers) and contains no toxicological or biological data. |
| popPK | Czene_1995 | irrelevant | 0 | 0 | The paper concerns DNA damage assays in human fibroblasts and does not mention antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Das_2025 | irrelevant | 0 | 0 | The paper focuses entirely on the impact of sugar-sweetened beverages on salivary parameters and contains no mention or kinetic data for antimony_monosulfide. |
| popPK | De_2006 | irrelevant | 0 | 0 | The paper discusses Glomerular Filtration Rate measurement in children using 51Cr-EDTA and does not mention antimony_monosulfide or its toxicokinetics. |
| popPK | De_2007 | irrelevant | 0 | 0 | The paper concerns GFR estimation using 51Cr-EDTA in children and does not involve antimony monosulfide or its kinetic parameters. |
| popPK | Delis_2010 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of amoxicillin in sheep, with no mention of antimony monosulfide. |
| popPK | Della_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of dietary sugar intake and type 2 diabetes risk in humans, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Delvaeye_1993 | irrelevant | 0 | 0 | The paper studies adriamycin (doxorubicin) and verapamil in human ovarian tumor cell lines; antimony_monosulfide is not mentioned. |
| popPK | Demkowicz-Dobrzanski_1991 | irrelevant | 0 | 0 | The paper studies the genotoxicity of NNK and OPB in rat hepatocytes and does not mention antimony_monosulfide at all. |
| popPK | Derdulska_2021 | irrelevant | 0 | 0 | The paper is a clinical guideline on neonatal lupus erythematosus and contains no data on antimony_monosulfide. |
| PGx | Dusinska_2012 | not_relevant | 0 | 0 | The paper investigates GST polymorphisms and their association with DNA damage and repair in healthy volunteers and asbestos-exposed workers, but does not involve the drug antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Dutton_1985 | irrelevant | 0 | 0 | The paper studies tumor promoters like TPA in mouse epidermal cells and contains no mention or data regarding antimony_monosulfide. |
| popPK | Essman_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on sugar-sweetened beverage tax policy and dietary intake, containing no toxicokinetic data for antimony_monosulfide or any other substance. |
| popPK | Fligor_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of SEFA-6179, a medium-chain fatty acid analogue, and does not mention or provide data for antimony_monosulfide. |
| popPK | Fu_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for Saikosaponin a in rats, with no mention of antimony_monosulfide. |
| PGx | Fugmann_2025 | not_relevant | 0 | 0 | The paper discusses polygenic risk scores for Sjögren’s disease susceptibility and antibody status, with no mention of the drug antimony monosulfide or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Gadgaard_2023 | not_relevant | 0 | 0 | The paper discusses GLP-2 receptor agonists and their structural modifications, not antimony monosulfide, nor does it involve pharmacogenomics. |
| popPK | Garcia-Contreras_2023 | irrelevant | 0 | 0 | The paper investigates the effects of Epigallocatechin-gallate (EGCG) on dental stem cells and bacteria, with no mention of antimony_monosulfide or its kinetic parameters. |
| PGx | Garte_2008 | not_relevant | 0 | 0 | The paper discusses benzene toxicity and genetic susceptibility, not antimony monosulfide or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Gelova_2022 | not_relevant | 0 | 0 | The paper discusses general mutational signatures and metabolic processes in evolution but does not mention the drug antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Gelova_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of intrinsic mutagenesis (SBS5 signature) in yeast related to pH and glucose metabolism, and does not study the drug antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters of it. |
| PGx | Georgeson_2021 | not_relevant | 0 | 0 | The paper focuses on tumour mutational signatures for diagnosing hereditary colorectal cancer genes (MMR, MUTYH) and does not mention the drug antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Ghosh_2019 | not_relevant | 0 | 0 | The paper discusses genetics of cardiorespiratory fitness and does not involve the drug antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Gill_2009 | irrelevant | 0 | 0 | Antimony sulfide is used as a diagnostic imaging agent for sentinel node localization in a surgical trial, with no toxicokinetic parameters reported. |
| popPK | Greig_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Apraglutide, a glucagon-like peptide-2 analog, and does not mention or provide data for antimony_monosulfide. |
| popPK | Greig_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for apraglutide, a GLP-2 analog, and does not contain any data for antimony_monosulfide. |
| popPK | Grocholski_2024 | irrelevant | 0 | 0 | The paper investigates oxalate levels and kidney disease in patients with short bowel syndrome and does not mention antimony or antimony monosulfide. |
| PGx | Guleva_2024 | not_relevant | 0 | 0 | The paper focuses on immunological correlation in lupus erythematosus and does not mention antimony_monosulfide, pharmacogenomics, or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Hajishafiee_2023 | irrelevant | 0 | 0 | The paper is an umbrella review on sugar-sweetened beverage taxation and dental caries, containing no data on antimony_monosulfide toxicokinetics. |
| popPK | Hara_1992 | irrelevant | 0 | 0 | The paper is a clinical case report on systemic sclerosis and glomerulonephritis with no mention of antimony_monosulfide or toxicokinetic parameters. |
| popPK | Hargrove_2020 | irrelevant | 0 | 0 | The paper is about GLP-2 analogs (apraglutide, teduglutide, etc.) and contains no data or mention of antimony_monosulfide. |
| PGx | Haslam_2017 | not_relevant | 0 | 0 | The paper reviews gene-diet interactions regarding sugar-sweetened beverages and metabolic health, and does not mention antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters of this drug. |
| popPK | Herrera-Esparza_1996 | irrelevant | 0 | 0 | The paper concerns the fate of human IgG/antinuclear antibodies in mice and contains no data on antimony monosulfide. |
| popPK | Holz_1995 | irrelevant | 0 | 0 | The paper concerns DNA strand breaks in human leukocytes using H2O2 and does not contain any data regarding antimony_monosulfide or its toxicokinetics. |
| popPK | Hooker_2009 | irrelevant | 0 | 0 | The paper discusses Salvinorin A and its derivatives in baboons and rodents, with no mention of antimony_monosulfide or any kinetic parameters for it. |
| PGx | Hosni-Ahmed_2011 | not_relevant | 0 | 0 | The paper investigates the effect of TPMT genotypes on thioguanine toxicity in astrocytes; it does not mention antimony monosulfide. |
| popPK | Hronová_2025 | irrelevant | 0 | 0 | The paper focuses on apixaban pharmacokinetics in humans and does not mention antimony_monosulfide. |
| popPK | Hronová_2026 | irrelevant | 0 | 0 | The paper is a clinical pharmacology review concerning rivaroxaban and apixaban in short bowel syndrome, with no mention of or data for antimony_monosulfide. |
| popPK | Högberg_2018 | irrelevant | 0 | 0 | The paper is an epidemiological study on infant abuse diagnosis and contains no information regarding antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Imlay_1987 | irrelevant | 0 | 0 | The paper studies hydrogen peroxide toxicity in Escherichia coli and does not mention antimony_monosulfide at all. |
| popPK | Irukuvajjula_2026 | irrelevant | 0 | 0 | The paper describes the mechanism of bacterial protein SSB displacement by RecO in E. coli and contains no data on antimony_monosulfide or toxicokinetics. |
| popPK | Ivancsits_2002 | irrelevant | 0 | 0 | The paper reports on genotoxic effects of electromagnetic fields in human fibroblasts and contains no data or mention of antimony monosulfide toxicokinetics. |
| popPK | Jang_2014 | irrelevant | 0 | 0 | The paper reports kinetic parameters for vancomycin and gentamicin in an in vitro dialysis system, with no mention of antimony_monosulfide. |
| PGx | Jawahar_2026 | not_relevant | 0 | 0 | The paper discusses environmental mutational signatures and their association with sensitivity to BRAF inhibitors and p38 MAPK inhibitors, but does not mention antimony monosulfide at all. |
| popPK | Jeppesen_2009 | irrelevant | 0 | 0 | The paper discusses Glucagon-like peptide 2 (GLP-2) treatment in patients with short bowel syndrome and contains no data on antimony_monosulfide. |
| popPK | Jouni_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on sweetened beverages and Alzheimer's disease with no mention or data regarding antimony_monosulfide. |
| popPK | Kaneko_1989 | irrelevant | 0 | 0 | The paper discusses DNA lesions and cell death from radiation in cell lines, with no mention of antimony_monosulfide or toxicokinetic parameters. |
| PGx | Kang_2008 | not_relevant | 0 | 0 | The paper discusses pharmacogenetic analysis methods for antileukemic drugs (ALL therapy), not antimony_monosulfide. |
| popPK | Kiguba_2022 | irrelevant | 0 | 0 | The paper is a protocol for a clinical trial on adverse drug reaction reporting in HIV patients and contains no data on antimony monosulfide or any toxicokinetic parameters. |
| PGx | Kim_2015 | not_relevant | 0 | 0 | The paper focuses on bacterial RecA protein evolution and DNA recombination mechanisms, not on antimony monosulfide or human pharmacogenomics. |
| popPK | Klemans_1995 | irrelevant | 0 | 0 | The paper reports on cytogenetic biomarkers (SCE, HFC, SSB, MN) in children exposed to environmental pollutants but does not provide any quantitative toxicokinetic parameters for antimony_monosulfide. |
| popPK | Kong_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of Radix Paeoniae Alba and its sulfur-containing derivatives (paeoniflorin sulfonate), not antimony monosulfide. |
| popPK | Korzilius_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for antimicrobial agents (ciprofloxacin, clindamycin, flucloxacillin, fluconazole) and does not mention antimony_monosulfide. |
| PGx | Kovács_2025 | not_relevant | 0 | 0 | The paper discusses biophysics of E. coli SSB protein condensation and is unrelated to the pharmacokinetics or pharmacodynamics of antimony_monosulfide in humans. |
| popPK | Krisch_1991 | irrelevant | 0 | 0 | The paper discusses DNA radiation chemistry and contains no data on antimony monosulfide or any toxicokinetic parameters. |
| popPK | Kuwabara_1991 | irrelevant | 0 | 0 | The paper investigates 2-chlorodeoxyadenosine in Chinese hamster V79 cells and does not mention antimony_monosulfide or any toxicokinetic parameters for it. |
| popPK | Kwon_2024 | irrelevant | 0 | 0 | The paper is a computational physics study on DNA nanodosimetry using Geant4-DNA for radiopharmaceuticals and does not mention antimony_monosulfide or any toxicokinetic parameters for it. |
| popPK | Lei_2017 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of saikosaponins from Bupleuri Radix in rats, with no mention of antimony_monosulfide. |
| popPK | Leroy_1995 | irrelevant | 0 | 0 | The paper concerns DNA repair kinetics in human cells exposed to unrelated genotoxins and does not mention antimony_monosulfide or report any toxicokinetic parameters. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper is about fungal mutagenesis in Ganoderma resinaceum and does not discuss the drug antimony monosulfide or pharmacogenomic effects in humans/animals. |
| popPK | Liapis_2025 | irrelevant | 0 | 0 | The paper discusses APOMAB and Zirconium-89 for tumor imaging and contains no data, parameters, or mention of antimony_monosulfide. |
| popPK | Lim_2021 | irrelevant | 0 | 0 | The paper focuses entirely on fentanyl pharmacokinetics in humans and does not mention antimony monosulfide. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on proton radiation biology and DNA damage modeling, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Lu_2015 | irrelevant | 0 | 0 | The paper focuses on DNA single-strand break rejoining kinetics in human blood cells using bleomycin and contains no data on antimony_monosulfide. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper discusses neonatal lupus erythematosus and autoantibodies, containing no data regarding antimony monosulfide or its toxicokinetics. |
| popPK | Maleknia_2020 | irrelevant | 0 | 0 | The paper is about systemic lupus erythematosus pathogenesis and gene expression analysis, with no mention of antimony_monosulfide or toxicokinetic parameters. |
| popPK | Manley_2004 | irrelevant | 0 | 0 | The paper studies iron sucrose and iron dextran, not antimony monosulfide. |
| popPK | Manley_2006 | irrelevant | 0 | 0 | The paper studies an intravenous iron formulation (VIT 45), not antimony_monosulfide. |
| popPK | Marier_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for teduglutide, a glucagon-like peptide-2 analog, and does not contain any data for antimony monosulfide. |
| PGx | Mason_2013 | not_relevant | 0 | 0 | The paper discusses E. coli SSB protein structure and dynamics, unrelated to antimony_monosulfide or human pharmacogenomics. |
| popPK | McAfee_1982 | irrelevant | 1 | 0 | The paper discusses Tc-99m radiopharmaceuticals where antimony sulfide is used as a labeling agent/stabilizer, not as the toxicologically studied substance, and no quantitative kinetic parameters for antimony itself are provided. |
| PGx | McKeown_2018 | not_relevant | 0 | 0 | The paper studies sugar-sweetened beverages and glycaemic traits, not the pharmacokinetics or pharmacodynamics of antimony_monosulfide. |
| PGx | Menchaca-Tapia_2023 | not_relevant | 0 | 0 | The paper discusses PTPN22 polymorphisms in Primary Sjögren’s syndrome and does not involve the drug antimony_monosulfide or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Meng_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis on sugar- and artificially sweetened beverages and health outcomes, with no mention of antimony, its sulfides, or any toxicokinetic parameters. |
| popPK | Merlo_2003 | irrelevant | 0 | 0 | The paper focuses exclusively on benzene exposure and its biomarkers, with no mention of antimony_monosulfide or any toxicokinetic parameters for it. |
| PGx | Misund_2022 | not_relevant | 0 | 0 | The paper discusses clonal evolution in multiple myeloma and mutagenic effects of melphalan, but contains no data on antimony_monosulfide. |
| popPK | Mitchelmore_1998 | irrelevant | 0 | 0 | The paper discusses genotoxicity of various contaminants in mussels but contains no data on antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Mouksassi_2009 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of teduglutide, a glucagon-like peptide-2 analog, with no mention of antimony_monosulfide. |
| popPK | Mukherjee_2020 | irrelevant | 0 | 0 | The paper focuses on the efficacy and toxicity of imipramine liposomes for treating visceral leishmaniasis; antimony is only mentioned in the context of parasite resistance (antimony-resistant vs sensitive strains) and no toxicokinetic parameters for antimony_monosulfide are reported. |
| popPK | Nagashima_2009 | irrelevant | 0 | 0 | The paper is a clinical case report on Sjögren's syndrome and protein-losing gastroenteropathy and contains no mention of antimony_monosulfide or any toxicokinetic data. |
| PGx | Nagashima_2009 | not_relevant | 0 | 0 | The paper discusses protein-losing gastroenteropathy in Sjögren's syndrome and mentions no antimony compounds or pharmacogenomic PK/PD data. |
| popPK | Nakamura_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for teduglutide in patients with short bowel syndrome; antimony monosulfide is not mentioned in the text. |
| popPK | Naomi_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on sweetened beverage consumption and all-cause mortality, containing no data or mention of antimony_monosulfide or its toxicokinetics. |
| popPK | Nguyen_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis on sugar-sweetened beverages and weight gain, containing no data on antimony_monosulfide. |
| popPK | Nishi_1993 | irrelevant | 0 | 0 | The paper reports on mucociliary transport in humans treated with erythromycin and does not contain any data on antimony_monosulfide. |
| popPK | Noronha_1986 | irrelevant | 0 | 0 | The substance is Technetium-99m labeled antimony sulfide (99mTc-Sb2S3), a radiopharmaceutical tracer, not the chemical substance antimony_monosulfide, and no numeric kinetic parameters are provided. |
| popPK | OConnor_1990 | irrelevant | 0 | 0 | The paper reports kinetics of DNA lesion formation and removal for nitrogen mustards in mouse cells, with no mention of antimony monosulfide or its kinetic parameters. |
| popPK | Pan_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of beverage consumption and mortality, containing no toxicokinetic data for antimony_monosulfide. |
| popPK | Paraje_2022 | irrelevant | 0 | 0 | The paper is an economic study on sugar-sweetened beverages and household budget allocation in Jamaica, with no mention of antimony_monosulfide or toxicokinetic parameters. |
| popPK | Pile-Spellman_1984 | relevant | 7 | 4 | The paper reports whole-body retention/biodistribution data (percentage of injected dose in lymph nodes at specific time points) which constitutes kinetic data, though detailed kinetic parameters like rate constants are not explicitly provided in the text. |
| PGx | Pipalović_2024 | not_relevant | 0 | 0 | The paper studies biophysical properties of DNA-binding proteins in Streptomyces coelicolor and does not involve antimony_monosulfide, pharmacokinetics, or pharmacodynamics. |
| popPK | Plappert_1995 | irrelevant | 0 | 0 | The paper focuses on DNA damage and repair kinetics in humans after ionizing radiation exposure, with no mention of antimony_monosulfide or its toxicokinetic parameters. |
| popPK | Pool_1990 | irrelevant | 0 | 0 | The paper discusses nitrosamines and does not mention antimony_monosulfide or report any kinetic parameters for it. |
| popPK | Pryce_2011 | irrelevant | 0 | 0 | The paper discusses CRF and astressin pharmacology in mice and contains no data or mention of antimony_monosulfide. |
| popPK | Qin_2020 | irrelevant | 0 | 0 | The paper is a meta-analysis on sugar-sweetened and artificially sweetened beverages regarding obesity and diabetes, containing no data on antimony_monosulfide. |
| PGx | Ragone_2021 | not_relevant | 0 | 0 | The paper investigates HLA genotypes and antibody response to SARS-CoV-2 vaccines, not pharmacogenomics of antimony_monosulfide. |
| popPK | Ribeiro_2025 | irrelevant | 0 | 0 | The paper describes a computational toolkit for G-protein coupled receptor (GPCR) signal transduction kinetics and does not mention antimony_monosulfide or any toxicokinetic data for it. |
| popPK | Roepcke_2014 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of teduglutide, not antimony_monosulfide. |
| popPK | Rumble_2018 | irrelevant | 0 | 0 | The paper is about human gait biomechanics and foot trajectory variability, containing no data on antimony, its metabolites, or toxicokinetics. |
| popPK | Sadeghian_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and computational evaluation of quinazolin-12-one derivatives as PDK1 inhibitors and does not mention antimony_monosulfide or any related toxicokinetic parameters. |
| PGx | Sajjan_2024 | not_relevant | 0 | 0 | The paper discusses fungal pathogenicity and genetic diversity in coconut trees, unrelated to pharmacogenomics or antimony_monosulfide. |
| PGx | Sandler_2024 | not_relevant | 0 | 0 | The paper focuses on bacterial DNA replication and recombination pathways in E. coli and does not mention the drug antimony monosulfide or human pharmacogenomics. |
| popPK | Santoro_2016 | irrelevant | 0 | 0 | The evidence contains a blank book proposal form template and no scientific data, toxicokinetic parameters, or mention of antimony monosulfide. |
| popPK | Santos_2023 | irrelevant | 0 | 0 | The paper is a clinical study on abdominal injury prediction and contains no data regarding antimony_monosulfide or its toxicokinetics. |
| popPK | Schiano_2025 | irrelevant | 0 | 0 | The paper discusses tritiated thymidine in zebrafish, with no mention of antimony_monosulfide or its kinetic parameters. |
| popPK | Schrieber_1984 | irrelevant | 0 | 0 | The paper discusses the autoantigen protein SS-B (La), not the chemical substance antimony monosulfide. |
| popPK | Schrieber_1984_2 | irrelevant | 0 | 0 | The paper studies the antigen SS-B (La), not antimony_monosulfide. |
| popPK | Schwingshackl_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis on food groups and type 2 diabetes risk, containing no data on antimony_monosulfide or its toxicokinetics. |
| popPK | Schwingshackl_2017_2 | irrelevant | 0 | 0 | The paper is a meta-analysis of dietary food groups and hypertension risk, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Schwingshackl_2018 | irrelevant | 0 | 0 | The paper is a methodological review on meta-analysis of dietary variables and contains no data on antimony_monosulfide. |
| PGx | Simone_2013 | not_relevant | 0 | 0 | The text discusses the ITPA gene and its role in drug response generally or with thiopurines, but does not mention antimony monosulfide or provide specific PK/PD parameter changes for this drug. |
| popPK | Singh_2014 | irrelevant | 0 | 0 | The paper investigates amitraz resistance in ticks (R. microplus) and contains no data, parameters, or even mentions of antimony_monosulfide. |
| popPK | Singhal_2019 | irrelevant | 0 | 0 | The paper discusses the synthesis and antimicrobial evaluation of organic Schiff bases, with no mention of antimony_monosulfide or toxicokinetic parameters for it. |
| popPK | Sokoloski_2016 | irrelevant | 0 | 0 | The paper describes DNA-protein interactions in Escherichia coli and yeast and contains no data or mention of antimony_monosulfide or its toxicokinetics. |
| popPK | Somorovská_1999 | irrelevant | 0 | 0 | The paper focuses exclusively on styrene exposure and does not mention antimony_monosulfide or report any kinetic parameters for it. |
| popPK | Song_2020 | irrelevant | 0 | 0 | The paper is a review on Scutellaria baicalensis (a plant) and contains no information on antimony_monosulfide. |
| popPK | Speit_2004 | irrelevant | 0 | 0 | The paper is about the comet assay and DNA damage using aphidicolin and other mutagens; it contains no mention of antimony_monosulfide or any kinetic parameters for it. |
| popPK | Speit_2004_2 | irrelevant | 0 | 0 | The paper discusses the FPG protein in the comet assay using human blood and V79 cells, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Sukhotnik_2003 | irrelevant | 0 | 0 | The paper is about lipid absorption and short bowel syndrome in rats, with no mention of antimony_monosulfide or any related toxicokinetic parameters. |
| popPK | Sukhotnik_2004 | irrelevant | 0 | 0 | The paper discusses fat absorption and lipid composition in rats with short bowel syndrome, containing no data or mention of antimony_monosulfide. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of dietary fructose and cardiovascular outcomes, containing no data on antimony_monosulfide or toxicokinetics. |
| popPK | Sánchez-Suárez_2008 | irrelevant | 0 | 0 | The paper investigates DNA damage from FEC chemotherapy and does not mention antimony_monosulfide, its metabolites, or any toxicokinetic parameters. |
| popPK | Takeda_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for cyclosporine and tacrolimus in a human patient, with no mention of antimony_monosulfide. |
| popPK | Tamaoki_2000 | irrelevant | 0 | 0 | The paper concerns sinobronchial syndrome and nitric oxide, with no mention of antimony_monosulfide or its toxicokinetics. |
| popPK | Thacker_1990 | irrelevant | 0 | 0 | The paper concerns DNA repair and radiation sensitivity in hamster and human cells, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| PGx | Tostivint_2016 | not_relevant | 0 | 0 | The paper discusses somatostatin genes in lampreys and is unrelated to antimony_monosulfide or pharmacogenomic effects on PK/PD parameters. |
| popPK | Tran_2002 | irrelevant | 0 | 0 | The paper discusses autoantibodies and neonatal lupus in mice and does not involve antimony_monosulfide or any toxicokinetic parameters for it. |
| popPK | Tsai_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between sugar-sweetened beverage consumption and pubertal timing, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Tököli_2023 | irrelevant | 0 | 0 | The paper focuses on bacterial protein-protein interactions and antimicrobial drug design, containing no data on antimony_monosulfide toxicokinetics. |
| popPK | Valenzuela_2021 | irrelevant | 0 | 0 | The paper is a systematic review of epidemiological associations between sugar-sweetened beverages and dental health, with no data on antimony_monosulfide. |
| popPK | Vandermeulen_2008 | irrelevant | 0 | 0 | The paper concerns Chromium-EDTA clearance in cats and contains no data on antimony_monosulfide. |
| PGx | Vodicka_2004 | not_relevant | 0 | 0 | The paper focuses on genotoxicity markers in tire plant workers exposed to industrial xenobiotics like 1,3-butadiene, not on the pharmacokinetics or pharmacodynamics of the drug antimony_monosulfide. |
| PGx | Vordenbäumen_2018 | not_relevant | 0 | 0 | The paper discusses diagnostic autoantibodies for Systemic Lupus Erythematosus (SLE) and does not mention antimony_monosulfide, pharmacokinetics, pharmacodynamics, or pharmacogenomic interactions. |
| popPK | Vosters_2009 | irrelevant | 0 | 0 | The paper discusses Sjögren's syndrome and interleukin-12 in mice, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | The paper is about cyclophosphamide, not antimony_monosulfide. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper focuses on sulfobetaine surfactants and gold nanoparticles, with no mention of antimony_monosulfide or its toxicokinetics. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper discusses saikosaponins and bile acids in mice, with no mention of antimony_monosulfide. |
| PGx | Watanuki_2002 | not_relevant | 0 | 0 | The paper discusses the role of inducible nitric oxide synthase (iNOS) genotype in bone mechanical adaptation, not the pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of antimony monosulfide. |
| popPK | Webber_2021 | irrelevant | 0 | 0 | The paper is a case-control study on health-related behaviors and COVID-19 hospitalization, containing no data on antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Wilhelm_2014 | irrelevant | 0 | 0 | The paper is a review of teduglutide for short bowel syndrome and does not mention antimony_monosulfide. |
| PGx | Wolak_2020 | not_relevant | 0 | 0 | The paper discusses bacterial DNA replication mechanisms (RNase HI and SSB interaction in E. coli) and has no connection to antimony_monosulfide, pharmacokinetics, pharmacodynamics, or human pharmacogenomics. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | The paper is about autoantigen proteolysis during secondary necrosis and contains no data on antimony_monosulfide. |
| popPK | Xi_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis on sugar-sweetened beverages and cardiovascular risk, with no mention of antimony_monosulfide or its toxicokinetics. |
| popPK | Xie_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on sugar-sweetened beverages and asthma in children, with no mention of antimony monosulfide or any toxicokinetic parameters. |
| popPK | Yan_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on sugar-sweetened beverages and cognitive function, with no mention of antimony_monosulfide or any toxicokinetic parameters. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper discusses a quercetin-loaded nanofibrous patch for acne healing and does not mention antimony_monosulfide or provide any toxicokinetic parameters. |
| popPK | Yasuda_2009 | irrelevant | 0 | 0 | The paper discusses bosentan pharmacokinetics and clinical outcomes in a dialysis patient, with no mention of antimony_monosulfide or its kinetic parameters. |
| popPK | Yin_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis on sugar-sweetened and low-calorie sweetened beverages and cardiovascular disease, containing no mention or data regarding antimony_monosulfide. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The paper studies the association between sugar-sweetened beverage consumption and ADHD in children; it does not mention antimony monosulfide or report any toxicokinetic parameters for it. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis on sweetened beverages and metabolic syndrome with no mention of antimony_monosulfide or toxicokinetic parameters. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper investigates IKBKE and BANK1 polymorphisms in relation to Systemic Lupus Erythematosus susceptibility and antibody status, with no mention of antimony monosulfide or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Zhou_2014 | irrelevant | 0 | 0 | The paper investigates gene expression in SLE patients and contains no data, mention, or toxicokinetic parameters for antimony_monosulfide. |
| popPK | el-Said_2003 | irrelevant | 0 | 0 | The paper is a biomonitoring study on rubber industry workers focusing on genotoxicity and haematology, with no mention of antimony_monosulfide or any quantitative toxicokinetic parameters. |
| popPK | van_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sodium fluoride (Na18F) in the context of fibrous dysplasia imaging and does not mention antimony_monosulfide. |
| popPK | Švajlenka_2018 | irrelevant | 0 | 0 | The paper is a review about agricultural hygiene, building biology, and mycotoxins, with no mention of antimony_monosulfide or any kinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bantimony_monosulfide%5D&body=Drug%3A%20antimony_monosulfide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_antimony_monosulfide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
