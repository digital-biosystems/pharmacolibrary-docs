<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;alpha-Conotoxin (Conus geographus)&quot;}]"></div>

# alpha-Conotoxin (Conus geographus)

- **generic name:** alpha-Conotoxin (Conus geographus)
- **T3DB:** [T3D2657](http://www.t3db.ca/toxins/T3D2657) · **PubChem:** none

## About

Conotoxins are neurotoxic peptides from the venom of the marine cone snail (genus Conus). alpha-Conotoxins inhibit nicotinic acetylcholine receptors at nerves and muscles.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Conotoxins are neurotoxic peptides from the venom of the marine cone snail (genus Conus).
- **Mechanism of toxicity:** alpha-Conotoxins act on postsynaptic membranes, where they inhibit nicotinic acetylcholine receptors in nerves and muscles.
- **Health effects:** Conotoxins are neurotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2657">T3DB T3D2657</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 15:45 | 1:15:03 | 0/0/0 | 0/0/0 | 0/0/0 | 1,705,334/43,132 | einfracz / qwen3.8-27b | 66 | 7/59 | 65/1 | 0 |

## Coverage

- **PubMed hits:** 51 matched, 207 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hone_2017.pdf` | Hone AJ et al., Therapeutic concentrations of varenicli…, Journal of neurochemistry (2017) | pd | 5 | [10.1111/jnc.13883](https://doi.org/10.1111/jnc.13883) | [27805736](https://www.ncbi.nlm.nih.gov/pubmed/27805736) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-09 15:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Hafez_2025 | irrelevant | 0 | 0 | The paper focuses on synthetic CDK4/6 and VEGFR-2 inhibitors and does not contain any data regarding alpha_conotoxin_conus_geographus. |
| popPK | Abedi_2024 | irrelevant | 0 | 0 | The paper is a review on conservative treatments for chronic kidney disease and does not mention or report any toxicokinetic data for alpha_conotoxin_conus_geographus. |
| popPK | Abston_2019 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of ambrisentan, a different substance, and does not mention alpha-conotoxin_conus_geographus. |
| popPK | Acharya_2020 | irrelevant | 0 | 0 | The paper is a clinical case report regarding IgA vasculitis and Wilson disease, containing no data or parameters for alpha_conotoxin_conus_geographus. |
| popPK | Ahmed_2024 | irrelevant | 0 | 0 | The paper investigates cisplatin-induced kidney disease in mice and does not mention or measure alpha_conotoxin_conus_geographus. |
| popPK | Al-Mohammed_2009 | irrelevant | 0 | 0 | The paper investigates the immunosuppressive effects of Leishmania infection in rodents and contains no data regarding alpha_conotoxin_conus_geographus. |
| popPK | Ali_2012 | irrelevant | 0 | 0 | The paper is a review of metformin pharmacokinetics and contains no data for alpha-conotoxin_conus_geographus. |
| popPK | Almond_1992 | irrelevant | 0 | 0 | The paper studies hepatic perfusion using laser Doppler flowmetry and contains no data for alpha_conotoxin_conus_geographus. |
| popPK | An_2026 | irrelevant | 0 | 0 | The paper reports pharmacodynamic binding and selectivity parameters (IC50) for a different conotoxin ([D1G, ΔQ14]LvIC), not toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Angerson_1988 | irrelevant | 0 | 0 | The paper studies gastric mucosal blood flow in rats using antipyrine and does not mention alpha-conotoxin-conus-geographus or any toxicokinetic parameters for it. |
| popPK | Ardies_2003 | irrelevant | 0 | 0 | The paper discusses the mechanism of inflammation-induced lung cancer and contains no information or kinetic parameters for alpha-conotoxin-conus-geographus. |
| popPK | Armishaw_2006 | irrelevant | 0 | 0 | The paper describes the synthesis and structural characterization of selenoconotoxin analogues of ImI, not the toxicokinetics of alpha_conotoxin_conus_geographus (Geographus), and contains no kinetic parameters. |
| popPK | Armishaw_2009 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Armstrong_1988 | irrelevant | 0 | 0 | The paper discusses muscle blood flow in conscious animals and humans but contains no data or kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Azran_2020 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of various drugs (e.g., azithromycin, hydroxychloroquine) in post-bariatric surgery patients and does not mention alpha_conotoxin_conus_geographus. |
| popPK | Bakshi_2017 | irrelevant | 0 | 0 | The paper investigates immunoglobulin responses to Chlamydia trachomatis in humans and does not mention or report any kinetic parameters for alpha-conotoxin. |
| popPK | Balaji_2000 | irrelevant | 0 | 0 | The paper reports on lambda-conotoxins from Conus marmoreus, not alpha-conotoxin_conus_geographus, and contains no toxicokinetic parameters. |
| popPK | Balamurgan_2007 | irrelevant | 0 | 0 | The paper investigates Conus parvatus, not Conus geographus, and reports no kinetic parameters (half-life, clearance, etc.), only pharmacodynamic effects and an LD50. |
| popPK | Banfield_2020 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of PF-06480605 (an anti-TL1A antibody), which is a completely different substance from alpha-conotoxin Conus geographus. |
| popPK | Baudry_1997 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of mefloquine in rats, not alpha-conotoxin-conus-geographus. |
| popPK | Benalcazar-Parra_2018 | irrelevant | 0 | 0 | The paper investigates the electrophysiological response of the uterus to labor induction drugs (Misoprostol and Dinoprostone) and does not contain any toxicokinetic data for alpha_conotoxin_conus_geographus. |
| popPK | Blanchfield_2003 | irrelevant | 0 | 0 | The paper studies alpha-conotoxin MII from Conus magus, not alpha-conotoxin Conus geographus. |
| popPK | Bleloch_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the palladacycle complex AJ-5, not for alpha_conotoxin_conus_geographus. |
| popPK | Bondebjerg_2003 | irrelevant | 0 | 0 | The paper reports synthetic methods and in vitro IC50 values (potency) for a conotoxin analogue, but contains no quantitative toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Botta_2003 | irrelevant | 0 | 0 | The paper studies guanidine derivatives from *Verbesina caracasana* in mice and rats, and does not mention or test alpha_conotoxin_conus_geographus. |
| popPK | Bourdo_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for colistin in geese, not for alpha_conotoxin_conus_geographus. |
| popPK | Braida_2014 | irrelevant | 0 | 0 | The paper studies the effects of nicotine and other nAChR ligands on learning, using alpha-conotoxin MII only as a receptor antagonist tool, and contains no toxicokinetic parameters for alpha-conotoxin conus geographus. |
| popPK | Brecchia_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of glucose in rabbits administered Goji berries, and does not contain any data on alpha_conotoxin_conus_geographus. |
| popPK | Brillatz_2025 | irrelevant | 0 | 0 | The paper studies peanut allergy and the allergen Ara h 2, with no data on alpha_conotoxin_conus_geographus. |
| popPK | Brune_1987 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of non-steroidal anti-inflammatory drugs (ibuprofen, diclofenac, etc.) and contains no data on alpha-conotoxin-conus-geographus. |
| popPK | Brændholt_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for petrelintide (an amylin analogue), not alpha-conotoxin-conus-geographus. |
| popPK | Burdeyron_2024 | irrelevant | 0 | 0 | The paper reports on porcine kidney preservation using extracellular vesicles and does not mention or measure alpha_conotoxin_conus_geographus. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of sulfasalazine and 5-ASA, not alpha_conotoxin_conus_geographus. |
| popPK | Cameron_2001 | irrelevant | 0 | 0 | The paper studies blood flow in rats and does not involve alpha_conotoxin_conus_geographus or its toxicokinetics. |
| popPK | Carrié_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for piperacillin and tazobactam, not alpha_conotoxin_conus_geographus. |
| popPK | Carstens_2016 | irrelevant | 0 | 0 | The paper focuses on alpha-conotoxin Vc1.1 and its analogues, not alpha_conotoxin_conus_geographus (PnIA). |
| popPK | Catarci_2020 | irrelevant | 0 | 0 | The paper is a case report on a gastrointestinal stromal tumor (GIST) and contains no data on alpha_conotoxin_conus_geographus or its toxicokinetics. |
| popPK | Chaffee_1991 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of ondansetron, not alpha_conotoxin_conus_geographus. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The paper studies cell cycle regulation and ER stress mechanisms in a cellular context, containing no toxicokinetic data for alpha_conotoxin_conus_geographus. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of gabapentin, not alpha-conotoxin-conus-geographus. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper investigates gait initiation kinematics in healthy humans and contains no data on the toxicokinetics of alpha-conotoxin-conus-geographus. |
| popPK | Chityala_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for irinotecan and its metabolite SN-38, not for the substance alpha_conotoxin_conus_geographus. |
| popPK | Choi_2016 | irrelevant | 0 | 0 | The paper studies the persistence of human norovirus in oysters and contains no data regarding alpha_conotoxin_conus_geographus. |
| popPK | Cook_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for probenecid, not for the target substance alpha_conotoxin_conus_geographus. |
| popPK | Covell_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for monoclonal antibody MOPC-21 (IgG1) and its fragments in mice, not alpha-conotoxin-conus-geographus. |
| popPK | Dahiya_2020 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal implications in COVID-19 and does not report any toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Dahiya_2024 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of Remimazolam and does not contain any data for alpha_conotoxin_conus_geographus. |
| popPK | Daly_2011 | irrelevant | 0 | 0 | The paper focuses on the structure and pharmacological activity (receptor binding) of alpha-conotoxin PeIA, not the toxicokinetic parameters of alpha_conotoxin_conus_geographus. |
| popPK | Das_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for cefepime and enmetazobactam, not alpha_conotoxin_conus_geographus. |
| popPK | Dean_2024 | irrelevant | 0 | 0 | The paper investigates the toxicological effects of PCB52 on the gut microbiome in rats and contains no data for alpha_conotoxin_conus_geographus. |
| popPK | Debatis_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of camelid nanobodies (VHHs), not alpha-conotoxin-conus-geographus. |
| popPK | Deng_2015 | irrelevant | 0 | 0 | The paper investigates TLR4 signaling in sheep and does not mention or study alpha_conotoxin_conus_geographus. |
| popPK | Devaiah_2016 | irrelevant | 0 | 0 | The paper is a review on the protein BRD4 and contains no data for alpha-conotoxin conus geographus. |
| popPK | Dias_2017 | irrelevant | 0 | 0 | The paper discusses postprandial lipemia and triglyceride clearance in humans and does not mention alpha-conotoxin conus geographus. |
| popPK | Dieperink_1986 | irrelevant | 0 | 0 | The paper studies cyclosporin A in rats and contains no data for alpha_conotoxin_conus_geographus. |
| popPK | Dolat_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of 5-fluorouracil (5-FU), not alpha_conotoxin_conus_geographus. |
| popPK | Draper_2010 | irrelevant | 0 | 0 | The paper studies host defense in mice and does not involve alpha-conotoxin-conus-geographus or report any kinetic parameters for it. |
| popPK | Dutton_2002 | irrelevant | 0 | 0 | The paper focuses on the structure-activity relationship and NMR characterization of alpha-Conotoxin AuIB, reporting no quantitative toxicokinetic parameters such as half-life, clearance, or distribution for the substance. |
| popPK | El-Ashmawy_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of gliclazide, not alpha_conotoxin_conus_geographus. |
| popPK | Espinoza_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for anti-botulinum neurotoxin antibodies, not for the subject substance alpha-conotoxin conus geographus. |
| popPK | Falck_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for therapeutic monoclonal antibodies in minipigs, not for alpha_conotoxin_conus_geographus. |
| popPK | Favreau_1999 | irrelevant | 0 | 0 | The paper characterizes alpha-conotoxins from Conus consors, not alpha_conotoxin_conus_geographus, and reports no toxicokinetic parameters. |
| popPK | Fernandes_2025 | irrelevant | 0 | 0 | The paper presents a mathematical model of gastric motility and the gut-brain axis and does not contain any toxicokinetic data for alpha_conotoxin_conus_geographus. |
| popPK | Fernandez-Petty_2019 | irrelevant | 0 | 0 | The paper focuses on PAAG as a mucolytic agent for cystic fibrosis and does not report toxicokinetic parameters for alpha-conotoxin-conus-geographus. |
| popPK | Fobelo_2019 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics and therapeutic monitoring of infliximab, not alpha_conotoxin_conus_geographus. |
| popPK | Ge_2020 | irrelevant | 0 | 0 | The paper is a clinical study on biliary atresia and liver transplantation, containing no data or parameters for alpha-conotoxin-conus-geographus. |
| popPK | Ge_2026 | irrelevant | 0 | 0 | The paper describes a deep learning framework for designing conotoxin peptides (focusing on ImI, Vc1.1, etc.) and reports binding affinities/IC50, but provides no toxicokinetic parameters (half-life, clearance, partition coefficients) for alpha_conotoxin_conus_geographus. |
| popPK | Giglio_2025 | irrelevant | 0 | 0 | The paper characterizes a novel conotoxin (RoIA) from *Conus rolani*, not alpha-conotoxin-conus-geographus, and reports no toxicokinetic parameters. |
| popPK | Gilbert_1987 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of zinc and triclosan, not alpha-conotoxin-conus-geographus. |
| popPK | Giribaldi_2018 | irrelevant | 0 | 0 | The paper focuses on alpha-conotoxins CIA and CIB from Conus catus, not alpha_conotoxin_conus_geographus, and reports pharmacodynamics (IC50, ED50) rather than toxicokinetic parameters. |
| popPK | Giribaldi_2021 | irrelevant | 0 | 0 | The paper reports the synthesis and pharmacological characterization (IC50) of a different conotoxin, CIC from Conus catus, and does not provide toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Gjedde_1980 | irrelevant | 0 | 0 | The paper reports kinetic parameters for glucose transfer in rats, not for alpha-conotoxin-conus-geographus. |
| popPK | Gouda_1997 | irrelevant | 0 | 0 | The paper describes the structural determination of alpha-conotoxin MI, which is a different substance from the target alpha-conotoxin conus geographus, and contains no toxicokinetic data. |
| popPK | Grady_2001 | irrelevant | 0 | 0 | The paper describes pharmacological characterization of acetylcholine release in mouse synaptosomes and does not report any toxicokinetic parameters (e.g., half-life, clearance, distribution) for alpha_conotoxin_conus_geographus. |
| popPK | Grady_2002 | irrelevant | 0 | 0 | The paper studies dopamine release kinetics in mouse brain synaptosomes using nicotinic agonists and conotoxin MII as tools, but reports no toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Guay_1985 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of aztreonam, not alpha_conotoxin_conus_geographus. |
| popPK | Gui_2026 | irrelevant | 0 | 0 | The paper investigates the adsorption of creatinine on metal-organic frameworks and does not mention or study alpha_conotoxin_conus_geographus. |
| popPK | Guinn_2024 | irrelevant | 0 | 0 | The paper is a review of placental and lactational transfer of IgG-based therapeutic proteins and does not mention or provide data for alpha_conotoxin_conus_geographus. |
| popPK | Guntur_2025 | irrelevant | 0 | 0 | The paper investigates 2,4-diaminopyrimidine antimalarial compounds and contains no data, parameters, or mention of alpha_conotoxin_conus_geographus. |
| popPK | He_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of a radiopharmaceutical construct (DOTA-mTz-sALB) for pretargeting radiotherapy, and does not report any data for alpha_conotoxin_conus_geographus. |
| popPK | Hone_2017 | irrelevant | 0 | 0 | The paper focuses on the electrophysiological effects of varenicline and nicotine on human adrenal chromaffin cells and does not mention alpha_conotoxin_conus_geographus. |
| popPK | Hsyu_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for bosutinib, not alpha-conotoxin-conus-geographus. |
| popPK | Hu_1996 | irrelevant | 0 | 0 | The paper reports the crystal structure of alpha-conotoxin PnIA from Conus pennaceus, not kinetic parameters for alpha-conotoxin Conus geographus. |
| popPK | Huynh_2019 | irrelevant | 0 | 0 | The paper studies α-conotoxin RgIA (from Conus regius) and its analog RgIA4, not α-conotoxin Conus geographus (the subject substance), and reports efficacy data rather than toxicokinetic parameters. |
| popPK | Imlimthan_2025 | irrelevant | 0 | 0 | The paper is a general methodological guide for biodistribution studies of radiotracers and does not contain any data for alpha_conotoxin_conus_geographus. |
| popPK | Ingram_2020 | irrelevant | 0 | 0 | The paper discusses Yosprala (aspirin and omeprazole) and does not contain data for alpha_conotoxin_conus_geographus. |
| popPK | Kabukcu_2016 | irrelevant | 0 | 0 | The paper describes anesthesia monitoring in cardiac surgery and does not study alpha-conotoxin-conus-geographus or its kinetic parameters. |
| popPK | Kaiser_1998 | irrelevant | 0 | 0 | The paper studies the pharmacological action of alpha-conotoxin-MII (a different conotoxin) on dopamine release, not the toxicokinetic parameters of alpha_conotoxin_conus_geographus. |
| popPK | Kandadi_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for aducanumab, not alpha_conotoxin_conus_geographus. |
| popPK | Kapono_2013 | irrelevant | 0 | 0 | The paper focuses on Conus magus conotoxins (MI and MIC) and provides binding affinity (Ki) and toxicity (LD50) data, but contains no toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for alpha-conotoxin-conus-geographus (CI) or any other conotoxin. |
| popPK | Katz_1989 | irrelevant | 0 | 0 | The paper reviews octreotide, a different substance, and does not contain data for alpha_conotoxin_conus_geographus. |
| popPK | Kenneally_2023 | irrelevant | 0 | 0 | The paper is a clinical case series on joint arthroplasty outcomes in patients with ostomies and contains no data on the toxicokinetics of alpha-conotoxin-conus-geographus. |
| popPK | Khalil_2020 | irrelevant | 0 | 0 | The paper describes meloxicam, a completely different substance, and contains no data for alpha_conotoxin_conus_geographus. |
| popPK | Khan_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen and rabeprazole, not alpha_conotoxin_conus_geographus. |
| popPK | Khan_2025 | irrelevant | 0 | 0 | The paper is a review on pharmacokinetics in cachexia and does not report specific kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Kim_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Daratumumab, not alpha_conotoxin_conus_geographus. |
| popPK | Knippler_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for alexidine analogs (AX-4, AX-7), not for alpha_conotoxin_conus_geographus. |
| popPK | Kotredes_2017 | irrelevant | 0 | 0 | The paper is a review on the role of Type I interferons in gastrointestinal immunity and contains no mention of alpha-conotoxin-conus-geographus or its toxicokinetic parameters. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The paper studies nicotine-induced ion transport in mouse tracheal epithelium and uses other conotoxins (MII, PnIA, IMI, ACV1) as pharmacological tools, but does not investigate alpha-conotoxin-conus-geographus or its kinetic parameters. |
| popPK | Lee_1999 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for azosemide in rats, not for alpha_conotoxin_conus_geographus. |
| popPK | Lenzi_2023 | irrelevant | 0 | 0 | The paper studies autophagy and mitochondrial status in glioblastoma cells using rapamycin and does not mention alpha-conotoxin-conus-geographus or report any kinetic parameters for it. |
| popPK | Leta_2023 | irrelevant | 0 | 0 | The paper focuses on levodopa pharmacokinetics in Parkinson's disease and contains no data for alpha_conotoxin_conus_geographus. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper is a review on phytochemicals and transporters and does not mention alpha-conotoxin-gi or provide any kinetic parameters for it. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper studies the metabolism of bavachinin, not alpha-conotoxin-conus-geographus. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of cefoperazone and sulbactam, not alpha_conotoxin_conus_geographus. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the drug FLZ in cynomolgus monkeys, not the subject substance alpha_conotoxin_conus_geographus. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for meropenem and vaborbactam, not for alpha-conotoxin-conus-geographus. |
| popPK | Liang_2022 | irrelevant | 0 | 0 | The paper focuses on a different conotoxin (Mr1.1) and reports pharmacodynamic (IC50) and pain model data rather than toxicokinetic parameters for alpha-conotoxin conus geographus. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The paper studies ethanol pharmacology using alpha-conotoxin MII (not *conus_geographus*) as a tool compound, and contains no kinetic parameters for alpha-conotoxin_conus_geographus. |
| popPK | Lobet_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cetuximab, a monoclonal antibody, not alpha_conotoxin_conus_geographus. |
| popPK | Lupo_1990 | irrelevant | 0 | 0 | The paper studies the kinetics of lactate transport, not alpha_conotoxin_conus_geographus. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The paper studies a different conotoxin analogue (LvIC from Conus lividus) for receptor mapping, not the toxicokinetics of alpha_conotoxin_conus_geographus. |
| popPK | Martin_2021 | irrelevant | 0 | 0 | The paper discusses nasal delivery of migraine medications (sumatriptan, dihydroergotamine, etc.) and contains no data or mention of alpha-conotoxin conus geographus. |
| popPK | Martin_2022 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of contulakin-G, not alpha_conotoxin_conus_geographus, and reports no toxicokinetic parameters for the target substance. |
| popPK | McCollum_1985 | irrelevant | 0 | 0 | The paper measures skin blood flow in human patients using iodoantipyrine clearance and does not contain any data for alpha_conotoxin_conus_geographus. |
| popPK | Mehkri_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lutein and zeaxanthin in rats, not for alpha_conotoxin_conus_geographus. |
| popPK | Mejia_2010 | irrelevant | 0 | 0 | The paper reports functional neurophysiological data in Drosophila and does not provide any quantitative toxicokinetic parameters (e.g., clearance, half-life, volume of distribution) for alpha-conotoxin-conus-geographus. |
| popPK | Michalopoulos_1993 | irrelevant | 0 | 0 | The paper studies the metabolism and clearance of HGF-SF, not alpha_conotoxin_conus_geographus. |
| popPK | Mikiewicz_2025 | irrelevant | 0 | 0 | The paper focuses on the recombinant expression, purification, and cosmetic efficacy of conotoxin TIIIA, which is not the target substance (alpha-conotoxin), and it reports no toxicokinetic parameters such as half-life, clearance, or bioaccumulation. |
| popPK | Mishra_2025 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and colonization of Candida albicans and the effects of short-chain fatty acids, with no mention of alpha_conotoxin_conus_geographus. |
| popPK | Mittelheisser_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding antibody-nanoparticle conjugates for tumor targeting and does not report any kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Mobaraki_2024 | irrelevant | 0 | 0 | The paper concerns pharmacokinetics of TKIs (cabozantinib, pazopanib, axitinib) and bilirubin metabolism, with no mention of alpha_conotoxin_conus_geographus. |
| popPK | Morales_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem, not alpha_conotoxin_conus_geographus. |
| popPK | Morfini_2018 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of clotting factor concentrates for hemophilia and does not mention alpha_conotoxin_conus_geographus. |
| popPK | Mortimer_1997 | irrelevant | 0 | 0 | The paper studies the placental transfer of methimazole and propylthiouracil, which is unrelated to the target substance alpha_conotoxin_conus_geographus. |
| popPK | Mullins_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for donanemab (an anti-amyloid antibody), not alpha-conotoxin-conus-geographus. |
| popPK | Myren_1989 | irrelevant | 0 | 0 | The paper reports physiological parameters of Göttingen mini pigs but does not mention alpha_conotoxin_conus_geographus or any toxicokinetic parameters for this substance. |
| popPK | Nader_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for adalimumab, not alpha_conotoxin_conus_geographus. |
| popPK | Nayak_2021 | irrelevant | 0 | 0 | The paper is a review regarding SARS-CoV-2 and liver/gastrointestinal diseases, containing no data on alpha-conotoxin-conus-geographus. |
| popPK | Nebert_2013 | irrelevant | 0 | 0 | The paper focuses on benzo[a]pyrene kinetics in mice and does not mention or provide data for alpha_conotoxin_conus_geographus. |
| popPK | Noorani_2022 | irrelevant | 0 | 0 | The paper studies the kinetics of sucrose and mannitol, not alpha_conotoxin_conus_geographus. |
| popPK | Oswald_2015 | irrelevant | 0 | 0 | The paper is a review of canine gastrointestinal physiology and drug absorption variability by breed, with no mention or data for alpha_conotoxin_conus_geographus. |
| popPK | Pang_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for risankizumab, not alpha_conotoxin_conus_geographus. |
| popPK | Pei_2026 | irrelevant | 0 | 0 | The paper focuses on molecular glue degraders of CDK2 (B10/B12) and does not report any toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Peng_2006 | irrelevant | 0 | 0 | The paper studies the conotoxin lt14a from Conus litteratus, not alpha_conotoxin_conus_geographus, and reports no toxicokinetic parameters. |
| popPK | Perniss_2020 | irrelevant | 0 | 0 | The paper studies nicotine kinetics in mice and mentions alpha_conotoxin_conus_geographus (specifically AulB) only as a receptor antagonist/comparator, not as the subject of toxicokinetic analysis. |
| popPK | Perrino_2011 | irrelevant | 0 | 0 | The paper discusses gastrointestinal motility regulation by CaMKII and does not mention alpha_conotoxin_conus_geographus or provide any toxicokinetic parameters for it. |
| popPK | Poster_1981 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for acivicin, not for the target substance alpha_conotoxin_conus_geographus. |
| popPK | Putcha_1991 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of spaceflight medications in general and does not contain any data for alpha_conotoxin_conus_geographus. |
| popPK | Quinton_2013 | irrelevant | 0 | 0 | The paper focuses on the structural identification and receptor binding affinity of a novel conotoxin from Conus ermineus, not the toxicokinetics of alpha_conotoxin_conus_geographus. |
| popPK | Ren_2019 | relevant | 4 | 8 | The paper reports serum degradation half-lives for RgIA (an alpha-conotoxin) and its analogs, but these are in vitro stability parameters rather than systemic toxicokinetic parameters in animals or humans. |
| popPK | Ren_2021 | irrelevant | 0 | 0 | The paper focuses on ALK degraders (PROTACs) for cancer treatment and contains no data regarding alpha_conotoxin_conus_geographus. |
| popPK | Rosario_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for REGN17092 (a SARS-CoV-2 antibody), not for alpha_conotoxin_conus_geographus. |
| popPK | Samukawa_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for luseogliflozin, not alpha-conotoxin-conus-geographus. |
| popPK | Sandhu_2022 | irrelevant | 0 | 0 | The paper is a clinical study on the necessity of EGD prior to TEE and contains no data regarding alpha_conotoxin_conus_geographus. |
| popPK | Sanjakdar_2015 | irrelevant | 0 | 0 | The paper investigates nicotine and cocaine reward using alpha-conotoxin MII as a pharmacological tool, not the toxicokinetics of alpha_conotoxin_conus_geographus. |
| popPK | Satapathy_2025 | irrelevant | 0 | 0 | The paper is a general review of gastrointestinal cancer therapies and does not mention or report any kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Schoenike_1990 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of ifosfamide and mesna, not alpha_conotoxin_conus_geographus. |
| popPK | Segregur_2019 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal physiology and dissolution testing methods, containing no data for alpha_conotoxin_conus_geographus. |
| popPK | Senekowitsch_2022 | irrelevant | 0 | 0 | The paper is a review on in vivo imaging techniques for oral drug delivery and does not contain any toxicokinetic data or parameters for alpha-conotoxin conus geographus. |
| popPK | Sershen_1997 | irrelevant | 0 | 0 | The paper reports pharmacological parameters (potency, efficacy) for nicotinic agonists and antagonists, but contains no toxicokinetic parameters (half-life, clearance, etc.) for alpha-conotoxin-Conus geographus. |
| popPK | Shaker_1995 | irrelevant | 0 | 0 | The paper discusses airway protective mechanisms against aspiration in general and does not mention alpha_conotoxin_conus_geographus or report any kinetic parameters for it. |
| popPK | Shan_2024 | irrelevant | 1 | 8 | The paper characterizes fluorescent analogs of a different conotoxin ([Q1G, ΔR14]LvIB) for receptor imaging, providing potency (IC50) and stability data rather than toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Shelby_2003 | irrelevant | 0 | 0 | The paper studies the tissue distribution of rat UDP-glucuronosyltransferase (UGT) mRNA expression and does not report any kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The paper focuses on a nanoplatform for atherosclerosis treatment and does not mention alpha_conotoxin_conus_geographus or report any kinetic parameters for it. |
| popPK | Sherley_1988 | irrelevant | 0 | 0 | The paper discusses the regulation of thymidine kinase in HeLa cells and contains no kinetic parameters for alpha-conotoxin-conus-geographus. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | Souf_2023 | irrelevant | 0 | 0 | The paper reports synthesis and receptor binding potency (IC50) for alpha-conotoxins GaIA and AdIA, not toxicokinetic parameters for alpha-conotoxin Conus geographus. |
| popPK | Spigarelli_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for beta-Caryophyllene (BCA) and Eugenol, not alpha-conotoxin-conus-geographus. |
| popPK | Srinageshwar_2024 | irrelevant | 0 | 0 | The paper studies PAMAM dendrimers in mice and does not report kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Stroh_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for atezolizumab, not alpha-conotoxin-conus-geographus. |
| popPK | Suzuki_2023 | irrelevant | 0 | 0 | The paper focuses on gastrointestinal water dynamics and does not mention or report kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Swedberg_2015 | irrelevant | 0 | 0 | The paper reports physicochemical properties (vLogP) and receptor binding (cAMP signaling) for alpha-conotoxin-based GLP-1 agonists, not toxicokinetic parameters for the native substance. |
| popPK | Sánchez-Bayo_2017 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of imidacloprid in honey bees, not alpha_conotoxin_conus_geographus. |
| popPK | Tallec_2021 | irrelevant | 0 | 0 | The paper studies the toxicokinetics and toxicity of nanopolystyrene beads in Pacific oysters, not alpha-conotoxin-conus-geographus. |
| popPK | Tanabe_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of dotinurad in human patients and does not mention alpha_conotoxin_conus_geographus. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The paper focuses on radiolabeling quantum dots for imaging and does not report any toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Thomas_1989 | irrelevant | 0 | 0 | The paper measures cerebral blood flow in humans and does not study alpha_conotoxin_conus_geographus or its toxicokinetics. |
| popPK | Thomas_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the compound VNPP433-3β, not alpha_conotoxin_conus_geographus. |
| popPK | Thuluvath_2021 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal and hepatic manifestations of SARS-CoV-2 in humans and contains no data regarding alpha-conotoxin-conus-geographus. |
| popPK | Tielemans_2019 | irrelevant | 0 | 0 | The paper is a review of immunosuppressive drugs in renal transplant patients and does not mention alpha_conotoxin_conus_geographus or any of its kinetic parameters. |
| popPK | Timóteo_2003 | irrelevant | 0 | 0 | The paper studies alpha-conotoxin MII as a pharmacological tool in rat neuromuscular preparations and does not report toxicokinetic parameters for alpha-conotoxin conus geographus. |
| popPK | Tokola_1988 | irrelevant | 0 | 0 | The paper investigates the kinetics of antipyrine in porphyria patients, not alpha_conotoxin_conus_geographus. |
| popPK | Trenque_1994 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for zolpidem, not alpha-conotoxin-conus-geographus. |
| popPK | Ugurlar_2018 | irrelevant | 0 | 0 | The paper investigates the structural biology of the C1-IgG1 complex and complement activation, and does not contain any toxicokinetic data for alpha-conotoxin-conus-geographus. |
| popPK | Urben_2014 | irrelevant | 0 | 0 | The paper discusses probiotics in critically ill patients and does not mention or report any kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Utkin_1999 | irrelevant | 0 | 0 | The paper reports on the chemical synthesis and biological activity (receptor binding) of a conotoxin analogue, with no toxicokinetic parameters such as half-life, clearance, or distribution provided. |
| popPK | Valentijn_2018 | irrelevant | 0 | 0 | The paper is a review on cellular senescence in the kidney and contains no data, parameters, or mention of alpha_conotoxin_conus_geographus. |
| popPK | Vasquez_2000 | irrelevant | 0 | 0 | The paper is a review of sirolimus pharmacokinetics and clinical trials, with no mention of alpha_conotoxin_conus_geographus. |
| popPK | Vieira-Brock_2015 | irrelevant | 0 | 0 | The paper studies the effects of nicotine on methamphetamine-induced deficits and uses alpha-conotoxin MII as an analytical tool, but provides no toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Volpi_2016 | irrelevant | 0 | 0 | The paper studies ADX88178, an mGluR4 modulator, and contains no data on alpha_conotoxin_conus_geographus. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of a CDH17-targeted antibody-drug conjugate (7MW4911), not the peptide toxin alpha-conotoxin conus geographus. |
| popPK | Welling_1984 | irrelevant | 0 | 0 | The paper is a general review of drug absorption factors and does not contain any data for alpha_conotoxin_conus_geographus. |
| popPK | Wells_2025 | irrelevant | 0 | 0 | The paper studies the brain delivery of transferrin receptor and CD98hc dual-targeting antibody vectors, not the toxicokinetics of alpha_conotoxin_conus_geographus. |
| popPK | Whinnery_1979 | irrelevant | 0 | 0 | The paper studies renal physiology in rats using potassium deficiency and does not mention or test alpha_conotoxin_conus_geographus. |
| popPK | Wiegard_2021 | irrelevant | 0 | 0 | The paper discusses Topoisomerase 1 activity in mitotic transcription and does not contain any toxicokinetic data for alpha_conotoxin_conus_geographus. |
| popPK | Wiere_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery and characterization of alpha-conotoxin OI from Conus obscurus, not alpha-conotoxin conus geographus, and reports pharmacological potency (LD50/IC50) rather than toxicokinetic parameters. |
| popPK | Wilhelm_2022 | irrelevant | 0 | 0 | The paper reports in vitro pharmacological potency (IC50) of conotoxin SII (not geographus) and does not provide any quantitative toxicokinetic parameters. |
| popPK | Wintermeyer_1995 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of rimantadine, not alpha_conotoxin_conus_geographus. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The paper studies alpha-conotoxin AuIB, not alpha_conotoxin_conus_geographus, and focuses on receptor binding mechanisms rather than toxicokinetic parameters. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper studies honokiol, not alpha_conotoxin_conus_geographus. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 6-gingerol, not alpha_conotoxin_conus_geographus. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper studies a different peptide ([D11A]LvIA) as an imaging tool, not the toxicokinetics of alpha_conotoxin_conus_geographus. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for donanemab, not alpha_conotoxin_conus_geographus. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The paper reports pharmacodynamic potency (IC50) for a different conotoxin (LtIA) and does not contain toxicokinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper is a review on oral nanomedicine delivery principles and does not report kinetic parameters for alpha_conotoxin_conus_geographus. |
| popPK | Yao_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for guselkumab, not alpha_conotoxin_conus_geographus. |
| popPK | Zelepukin_2022 | irrelevant | 0 | 0 | The paper focuses on BiOCl nanosheets for X-ray imaging and contains no data or parameters for alpha_conotoxin_conus_geographus. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The paper reports the NMR solution structure of a different conotoxin (Pu14a) and contains no toxicokinetic parameters for alpha-conotoxin-conus-geographus. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper focuses on antiviral mutagenesis in medaka fish stem cells and contains no data regarding alpha_conotoxin_conus_geographus. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper focuses on immunogenicity and neutralization efficacy of antiserum against alpha-conotoxin MI, not toxicokinetic parameters (half-life, clearance, etc.) of the toxin itself. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper focuses on nanoparticle diffusion in mucus and does not mention alpha_conotoxin_conus_geographus or report any of its toxicokinetic parameters. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper is a computational study on generating conotoxin sequences using a language model and does not report any toxicokinetic parameters (half-life, clearance, etc.) for the specific substance alpha_conotoxin_conus_geographus. |
| popPK | Zielińska_2015 | irrelevant | 0 | 0 | The paper discusses tenapanor hydrochloride, a different substance, and does not mention alpha_conotoxin_conus_geographus. |
| popPK | dOrchymont_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of a radiolabelled monoclonal antibody conjugate ([89Zr]ZrFe-2), not the peptide alpha-conotoxin geographus. |
| popPK | van_2013 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding/functional activity of analogues to alpha-conotoxin Vc1.1, not on the toxicokinetic parameters of alpha_conotoxin_conus_geographus. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balpha_conotoxin_conus_geographus%5D&body=Drug%3A%20alpha_conotoxin_conus_geographus%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alpha_conotoxin_conus_geographus/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
