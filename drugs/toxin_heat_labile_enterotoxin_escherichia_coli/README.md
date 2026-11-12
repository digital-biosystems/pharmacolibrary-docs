<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Heat-labile enterotoxin (Escherichia coli)&quot;}]"></div>

# Heat-labile enterotoxin (Escherichia coli)

- **generic name:** Heat-labile enterotoxin (Escherichia coli)
- **T3DB:** [T3D2600](http://www.t3db.ca/toxins/T3D2600) · **PubChem:** none

## About

Heat-labile enterotoxin is a type of labile toxin found in Escherichia coli. This toxin is responsible for many cases of a mild type of food poisoning.

- **Category:** Protein, Bacterial Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Heat-labile enterotoxin is a type of labile toxin found in Escherichia coli.
- **Mechanism of toxicity:** Through ADP-ribosylation of a G-protein, heat-labile enterotoxin stimulates adenylate cyclase leading to increased cAMP in epithelial cells. Elevated cAMP levels stimulate secretion of Chlorine ions and water from the enterocyte into the gut lumen, thus causing watery diarrhea.
- **Health effects:** Heat-labile enterotoxin is responsible for many cases of a mild type of food poisoning. However, certain virulent strains of E. coli can cause gastroenteritis, urinary tract infections, and neonatal meningitis. …
- **Acute toxicity:** LD50: 250 ug/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2600">T3DB T3D2600</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lazorová_1993_reference](drugs/toxin_heat_labile_enterotoxin_escherichia_coli/HeatLabileEnterotoxinEscherichiaColi_Lazorov1993_reference.md) | — | 1-compartment (no model) | 0 | Lazorová L et al., Intestinal tissue distribution and epit…, Journal of drug targeting (1993) | [10.3109/10611869308996092](https://doi.org/10.3109/10611869308996092) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 05:38 | 38:37 | 0/1/0 | 0/0/0 | 0/0/0 | 994,753/27,794 | ollama / glm-5.3-flash | 49 | 7/36 | 49/0 | 0 |

## Coverage

- **PubMed hits:** 475 matched, 142 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lazorová_1993.pdf` | Lazorová L et al., Intestinal tissue distribution and epit…, Journal of drug targeting (1993) | popPK | 5 | [10.3109/10611869308996092](https://doi.org/10.3109/10611869308996092) | [8069576](https://pubmed.ncbi.nlm.nih.gov/8069576) | Reports numeric uptake/transport percentages for radiolabelled LTB (Caco-2 transport and intestinal uptake in mice), a partial absorption parameter, but no half-life, clearance or ADME rate constants in vivo. |

<sub>queue written 2026-11-11 05:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiszak_2025 | irrelevant | 0 | 0 | The paper reports kinetic parameters (CL, V, popPK model) for fluconazole, not for heat-labile enterotoxin of E. coli, which appears nowhere in the paper. |
| popPK | Alexandre_2025 | irrelevant | 0 | 0 | The substance of interest (heat-labile enterotoxin of E. coli) does not appear at all; the paper studies delafloxacin/ciprofloxacin activity against E. coli strains, with PK parameters only in supplementary material, and no toxicokinetic data for the toxin. |
| popPK | Arevalo-Villalobos_2020 | irrelevant | 0 | 0 | No toxicokinetic parameters for LTB are reported; the paper is a vaccine-antigen expression and immunogenicity study. |
| popPK | Aubry_2025 | irrelevant | 0 | 0 | The paper models PD/potency (Emax, EC50) of ceftazidime/avibactam and colistin against K. pneumoniae in vitro; heat-labile enterotoxin of E. coli is never mentioned and no toxicokinetic parameters for it are reported. |
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper is about the MAGE-A4-TCB bispecific antibody, with no toxicokinetic data for heat-labile enterotoxin of E. coli. |
| popPK | Balamayooran_2011 | irrelevant | 0 | 0 | The paper studies E. coli pulmonary infection and MCP-1 in mice; heat-labile enterotoxin is not the subject and no toxicokinetic parameters for it are reported. |
| popPK | Bhattacharya_2024 | irrelevant | 0 | 0 | The paper is about Staphylococcus aureus collagen-binding adhesin in mouse skin infection, with no toxicokinetic parameters for heat_labile_enterotoxin_escherichia_coli and no numeric dispositions. |
| popPK | Bodart_2009 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of AMD3465, not heat-labile enterotoxin of E. coli. |
| popPK | Braz-de-Melo_2021 | irrelevant | 0 | 0 | Review of heparin/dexamethasone for COVID-19 with no toxicokinetic parameters for heat-labile enterotoxin; the substance does not appear at all. |
| popPK | Byrd_2013 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/protection study in mice with no kinetic parameters (half-life, clearance, partition coefficients, etc.) for the heat-labile enterotoxin. |
| popPK | Carreño-Campos_2023 | irrelevant | 0 | 0 | LTB is used only as an adjuvant/carrier in a vaccine production study; no toxicokinetic parameters for heat-labile enterotoxin are reported anywhere. |
| popPK | Cha_2025 | irrelevant | 0 | 0 | This is a PKPD model of bacteriophage therapy for Pseudomonas aeruginosa; heat-labile enterotoxin of E. coli is not the subject substance, though kinetic parameters for the phages exist (some in supplementary tables not provided). |
| popPK | Chai_2026 | irrelevant | 0 | 0 | The paper reports metoprolol population pharmacokinetic parameters, not those of heat-labile enterotoxin of E. coli, so the substance of interest appears nowhere. |
| popPK | Chanruang_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL/F, V/F, Ka) for dolutegravir in Thai HIV patients, not for heat-labile enterotoxin, so the subject substance does not appear at all. |
| popPK | Checa_2024 | irrelevant | 0 | 0 | The paper studies TNFRSF1B knockdown/etanercept protection of airway epithelial cells from oxidative stress; heat-labile enterotoxin of E. coli appears nowhere and no toxicokinetic parameters are reported. |
| popPK | Das_2020 | irrelevant | 0 | 0 | This is a P. aeruginosa vaccine immunogenicity/protection study in mice and rats; the heat-labile enterotoxin (dmLT/LTA1) appears only as a fused adjuvant, with no kinetic parameters for the toxin, and no quantitative values are present in the evidence. |
| popPK | Duong_2025 | irrelevant | 0 | 0 | The paper concerns vancomycin PK in humans; heat-labile enterotoxin of E. coli is not the subject substance, and no kinetic parameters for it appear. |
| popPK | Elzagallaai_2024 | irrelevant | 0 | 0 | The subject substance is carbamazepine, not Escherichia coli heat-labile enterotoxin, and no kinetic parameters for it appear. |
| popPK | Ericsson_2018 | irrelevant | 0 | 0 | The paper reports kinetic parameters (half-life, CL/F, AUC) for the drug AZD5718 in humans, not for heat-labile enterotoxin of E. coli, which appears nowhere as a study substance. |
| popPK | Franchi_2022 | irrelevant | 0 | 0 | The paper reports PK of ticagrelor and its metabolite in diabetic CKD patients; heat-labile enterotoxin Escherichia coli does not appear as subject substance at all. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | The paper concerns antibiotic concentrations and penetration in Klebsiella pneumoniae liver abscess; heat-labile enterotoxin of E. coli is never mentioned and no kinetic parameters for it exist. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | This paper reports PK/PD model parameters for colistin and imipenem against P. aeruginosa, with no toxicokinetic data for heat-labile enterotoxin of E. coli (substance does not appear). |
| popPK | Gurbel_2024 | irrelevant | 0 | 0 | The paper reports PK/PD data for acetylsalicylic acid (ASA) in humans; heat-labile enterotoxin of E. coli is not the studied substance, nor does it appear at all. |
| popPK | Halder_2026 | irrelevant | 0 | 0 | This is a mouse vaccine immunogenicity/protection study; heat-labile enterotoxin (LTA1) appears only as a vaccine component, and no toxicokinetic parameters (half-life, clearance, Vd, etc.) for it are reported. |
| popPK | Hansen_2026 | irrelevant | 0 | 0 | The paper is a mouse pneumonia model standardization study for K. pneumoniae and P. aeruginosa; heat-labile enterotoxin of E. coli never appears and no kinetic parameters for it are reported. |
| popPK | Hao_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study of MSC extracellular vesicles in E. coli pneumonia with no toxicokinetic parameters for heat-labile enterotoxin reported. |
| popPK | Harwood_2025 | irrelevant | 0 | 0 | All kinetic parameters (CL, V, AUC) belong to tobramycin, not heat-labile enterotoxin of E. coli, which does not appear in the paper at all. |
| popPK | Hilliard_2019 | irrelevant | 0 | 0 | The paper is about Borrelia burgdorferi arthritis in mice; no toxicokinetic parameters for heat-labile enterotoxin of E. coli are reported anywhere in the evidence. |
| popPK | Huang_2006 | irrelevant | 0 | 0 | Paper is about PDE4 inhibitors for asthma/COPD; heat-labile enterotoxin of E. coli is not the subject and no toxicokinetic parameters for it are present. |
| popPK | Hummell_1986 | irrelevant | 0 | 0 | The paper studies pneumococcal lipoteichoic acid (LTA) clearance in rats, not E. coli heat-labile enterotoxin, so no kinetic parameters for the target substance exist. |
| popPK | Jeong_2024 | irrelevant | 0 | 0 | All kinetic parameters (t1/2 4.04 h, CL/F 289.64 L/h, V/F 1412.77 L) belong to morni umate/niumic acid, a completely different substance; heat_labile_enterotoxin_escherichia_coli does not appear anywhere. |
| popPK | Kauv_2025 | irrelevant | 0 | 2 | The paper reports quantitative population PK parameters (CL/F, V1, ka, tlag, Q) for mycophenolic acid, not for heat-labile enterotoxin of E. coli; the substance of interest does not appear at all. |
| popPK | Khoury_1995 | irrelevant | 0 | 0 | The paper reports vaccine efficacy and antibody responses in chickens, with no toxicokinetic parameters (half-life, clearance, rate constants, etc.) for heat-labile enterotoxin. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, V1, V2, Q) for bevacizumab/CT-P16, not for heat-labile enterotoxin of E. coli, which does not appear at all. |
| popPK | Knych_2019 | irrelevant | 0 | 0 | The paper reports kinetic parameters for flumetasone in horses, not for heat-labile enterotoxin of E. coli. |
| popPK | Knych_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of ketoprofen, not heat-labile enterotoxin of E. coli, which never appears as the subject substance. |
| popPK | Koh_2003 | irrelevant | 0 | 0 | The paper studies neutrophil chemotaxis in primary ciliary dyskinesia patients; heat-labile enterotoxin of E. coli is never mentioned and no toxicokinetic parameters exist. |
| popPK | Kroemer_2024 | irrelevant | 0 | 0 | The paper is an in vitro PKPD study of ceftazidime/avibactam and fosfomycin against E. coli; heat_labile_enterotoxin_escherichia_coli never appears as a subject substance and no kinetic parameters for it are present. |
| popPK | Lemere_2003 | irrelevant | 0 | 0 | E. coli heat-labile enterotoxin appears solely as a mucosal adjuvant; no kinetic parameters for it are reported (the measured analytes are Abeta and antibodies in mice). |
| popPK | Lemere_2009 | irrelevant | 0 | 0 | heat-labile enterotoxin appears only as a mucosal adjuvant in a vaccine study with no kinetic parameters and no numeric values provided. |
| popPK | Levens_2026 | irrelevant | 0 | 0 | All kinetic parameters (Cmax, AUC, C0/dose, population PK models) belong to tacrolimus in kidney transplant recipients; heat-labile enterotoxin from E. coli appears nowhere as the subject substance. |
| popPK | Lima_2022 | irrelevant | 0 | 0 | The paper concerns Streptococcus gordonii adhesin signaling to mucin surfaces and contains no toxicokinetic parameters for heat-labile enterotoxin of E. coli. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper concerns shrimp antimicrobial peptides; no toxicokinetic parameters for heat-labile enterotoxin of E. coli are reported anywhere. |
| popPK | Lv_2017 | irrelevant | 0 | 0 | Oyster immune-recognition study of PEPCK with no toxicokinetic parameters for heat-labile enterotoxin; E. coli appears only as a bacterium bound/cleared. |
| popPK | Mancuso_2010 | irrelevant | 0 | 0 | The paper concerns leukotriene B4 in pneumococcal pneumonia in mice, with no toxicokinetic parameters for heat-labile enterotoxin of E. coli. |
| popPK | Markey_2010 | irrelevant | 0 | 0 | Paper on lymphotoxin/TNF in GVHD contains no toxicokinetic parameters for E. coli heat-labile enterotoxin. |
| popPK | Mauro_2025 | irrelevant | 0 | 0 | The paper reports rich PK parameters (AUC, Cmax, clearance, PopPK model), but entirely for nilotinib, a different substance; the target substance does not appear at all. |
| popPK | Medeiros_2008 | irrelevant | 0 | 0 | The paper concerns leukotrienes in murine histoplasmosis immunology with no quantitative toxicokinetic parameters for E. coli heat-labile enterotoxin. |
| popPK | Morato-Marques_2011 | irrelevant | 0 | 0 | The paper is about leukotriene signaling in alveolar macrophages against Candida albicans; heat-labile enterotoxin of E. coli appears nowhere and no toxicokinetic parameters are reported. |
| popPK | Nankar_2013 | irrelevant | 0 | 0 | The paper studies apolipoprotein-derived peptides binding to LPS and LTA, not heat-labile enterotoxin, and reports no toxicokinetic parameters for it. |
| popPK | Nonogaki_1995 | irrelevant | 0 | 0 | The substance is lipoteichoic acid/endotoxin, not heat-labile enterotoxin; no kinetic parameters for the subject substance are reported. |
| popPK | Oh_2011 | irrelevant | 0 | 0 | The paper concerns chiral lipidomics of E-series resolvins from omega-3 fatty acids; heat-labile enterotoxin of E. coli is not the subject and no kinetic parameters for it appear. |
| popPK | Olaru_2010 | irrelevant | 0 | 0 | The paper concerns Staphylococcus aureus and keratinocyte chemokine signaling, with no toxicokinetic parameters for heat-labile enterotoxin E. coli. |
| popPK | Owen_2023 | irrelevant | 0 | 0 | The paper reports population PK of bevacizumab biosimilar MYL-1402O, not heat-labile enterotoxin of E. coli, and no numeric parameters appear in the evidence. |
| popPK | Palaniyar_2002 | irrelevant | 0 | 0 | Review of pulmonary innate immune proteins binding gram-positive bacterial ligands; no toxicokinetic parameters for heat-labile enterotoxin of E. coli reported. |
| popPK | Pereira-Dutra_2026 | irrelevant | 0 | 0 | The paper studies lipid droplets in E. coli-infected macrophages; no kinetic parameters for heat-labile enterotoxin appear anywhere. |
| popPK | Pirillo_2015 | irrelevant | 0 | 0 | Review on HDL and LPS clearance with no kinetic parameters for heat-labile enterotoxin; substance not even the subject. |
| popPK | Praparatana_2022 | irrelevant | 0 | 0 | The paper is about a shrimp galectin and immune defense; heat-labile enterotoxin of E. coli is not the subject and no kinetic parameters for it appear. |
| popPK | Pérez-Rubio_2021 | irrelevant | 0 | 0 | This is a review of host genetic susceptibility to influenza A H1N1; no toxicokinetic parameters of heat-labile enterotoxin are reported at all. |
| popPK | Pétermann_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for encorafenib and binimetinib, not for heat-labile enterotoxin of E. coli, which does not appear at all. |
| popPK | Rodríguez-Ochoa_2025 | irrelevant | 0 | 0 | The paper studies temocillin PK/PD in an in vitro hollow-fiber model; heat-labile enterotoxin of E. coli never appears, and the only numeric value (t1/2 of 5 h) belongs to temocillin. |
| popPK | Rollwagen_1993 | irrelevant | 1 | 1 | ETEC HLT is used only as an oral adjuvant dose (25 µg) in mice; no kinetic parameters for HLT are reported. |
| popPK | Saporta_2026 | irrelevant | 0 | 0 | The paper reports PK/PD parameters (clearance, volumes, ka) for meropenem in mice, not for heat-labile enterotoxin of E. coli, which does not appear as a subject substance. |
| popPK | Seo_2026 | irrelevant | 0 | 0 | A methodological paper on repeated time-to-event modeling in NONMEM with no toxicokinetic parameters for heat_labile_enterotoxin_escherichia_coli (or any substance) reported. |
| popPK | Sharman_2020 | irrelevant | 0 | 0 | The paper concerns rituximab/PF-05280586 pharmacokinetics in lymphoma patients; heat-labile enterotoxin of E. coli is not the studied substance and no kinetic parameters for it appear. |
| popPK | Sheikh_2024 | irrelevant | 1 | 0 | This is a mechanistic host-defense study of CEACAM-laden extracellular vesicles and ETEC/LT; it reports no toxicokinetic parameters (half-life, clearance, partitioning, rate constants) for heat-labile toxin, and any quantitative data (e.g., Fig. 4/5, Dataset S1) live in figures/supplements not provided. |
| popPK | Sheikh_2024_2 | irrelevant | 2 | 1 | This is a mechanism/pathogenesis study of EV decoy effects on ETEC clearance with no toxicokinetic parameters for heat-labile enterotoxin; values referenced live in supplemental figures not provided. |
| popPK | Soderholm_2018 | irrelevant | 0 | 0 | The paper is an immunology review of Group A Streptococcus pharyngitis with no kinetic parameters for heat-labile enterotoxin of E. coli. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper models meropenem/colistin killing of A. baumannii; heat-labile enterotoxin of E. coli never appears as the study substance and no kinetic parameters for it are reported. |
| popPK | Sorensen_2009 | irrelevant | 0 | 0 | The paper studies surfactant protein-D structure and ligand binding, with no toxicokinetic parameters for E. coli heat-labile enterotoxin. |
| popPK | Souza_2020 | irrelevant | 0 | 0 | The paper studies GPR40 agonist GW9508 and neutrophil clearance of E. coli infection; heat-labile enterotoxin is never studied and no toxicokinetic parameters (half-life, clearance, partitioning) are reported. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The paper concerns keratin-derived antimicrobial peptides (KAMPs) and TLR immunomodulation, with no toxicokinetic parameters for heat-labile enterotoxin of E. coli. |
| popPK | T_2026 | irrelevant | 0 | 0 | The paper is an in silico docking/MD study of a Staphylococcus aureus FtsZ inhibitor with no toxicokinetic parameters for heat-labile enterotoxin of E. coli anywhere in the evidence. |
| popPK | Tajuddin_2016 | irrelevant | 0 | 0 | Genetic association study of WBC traits with no toxicokinetic parameters for heat-labile enterotoxin; substance not even mentioned. |
| popPK | Tanaka_2004 | irrelevant | 0 | 0 | The study is about MRSA enteritis in mice with macrophage depletion; no toxicokinetic parameters for E. coli heat-labile enterotoxin are reported at all. |
| popPK | Thakre_2026 | irrelevant | 0 | 0 | The paper reports popPK parameters for the drugs glecaprevir and pibrentasvir, not for heat-labile enterotoxin of E. coli; the subject substance appears nowhere. |
| popPK | Tumpey_2001 | irrelevant | 0 | 0 | LT(R192G) is used only as a vaccine adjuvant with no toxicokinetic parameters for heat-labile enterotoxin reported. |
| popPK | Van_2024 | irrelevant | 0 | 0 | The paper studies Staphylococcus aureus craniotomy infection in mice; heat-labile enterotoxin of E. coli is never mentioned and no toxicokinetic parameters for it appear. |
| popPK | Vargason_2020 | irrelevant | 2 | 1 | Substance is E. coli heat-labile enterotoxin; the paper concerns surface-modified therapeutic bacteria with PK values not presented in evidence. |
| popPK | Vonk_2008 | irrelevant | 0 | 0 | An in vitro study of an antimicrobial peptide modulating LPS/LTA effects on epithelial cells, with no toxicokinetic parameters for E. coli heat-labile enterotoxin. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper is about TLR7 gene characterization in turbot with no toxicokinetic parameters for heat-labile enterotoxin of E. coli. |
| popPK | Weiner_2022 | irrelevant | 0 | 0 | The paper concerns rivaroxaban population PK, not heat-labile enterotoxin of E. coli, which appears nowhere as the subject substance. |
| popPK | Weisman_2009 | irrelevant | 0 | 0 | The paper reports PK of pagibaximab (anti-LTA antibody), not of heat-labile enterotoxin of E. coli; the substance appears nowhere as subject. |
| popPK | Wenzel_2003 | irrelevant | 0 | 0 | Asthma leukotriene review with no kinetic parameters for heat-labile enterotoxin of E. coli. |
| popPK | Werz_2017 | irrelevant | 0 | 0 | Review of leukotriene biosynthesis inhibitors; heat-labile enterotoxin of E. coli is not the subject and no toxicokinetic parameters for it are present. |
| popPK | Williams_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of bepotastine besilate, not heat-labile enterotoxin of E. coli; no kinetic parameters for the subject substance appear. |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | The paper is a systematic review of antileishmanial plant extracts (Azadirachta indica, Cnidoscolus spp.); heat-labile enterotoxin of E. coli appears nowhere, and no toxicokinetic parameters for it are present. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | Paper studies leukotriene B4 signaling and Rhizoma Coptidis in lung cancer immunotherapy; heat-labile enterotoxin of E. coli is not the subject and no kinetic parameters for it appear. |
| popPK | Yang_2005 | irrelevant | 0 | 0 | This is a molecular biology study of transcriptional repression of the enterotoxin gene in E. coli, with no toxicokinetic parameters (no half-life, clearance, partition coefficients, etc.) for the substance in humans or animals. |
| popPK | Yue_2021 | irrelevant | 0 | 0 | Genetic association study of HCV infection; no heat-labile enterotoxin or toxicokinetic parameters of any kind. |
| popPK | Zhai_2026 | irrelevant | 0 | 0 | Paper is a general Km prediction model for enzymes/substances generally; heat-labile enterotoxin of E. coli is not mentioned as a subject substance anywhere. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The paper concerns coral C-type lectin recognition of zooxanthellae; no toxicokinetic parameters for heat-labile enterotoxin of E. coli appear anywhere in the evidence. |
| popPK | Zhou_2020 | irrelevant | 0 | 0 | The paper reports ocular pharmacokinetics of latanoprost, not of heat-labile enterotoxin from E. coli, which appears nowhere as the subject substance. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | This is an innate-immunity study in zebrafish; heat-labile enterotoxin is not the subject and no toxicokinetic parameters are reported. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Paper concerns the antimicrobial protein Ism1 in zebrafish; heat-labile enterotoxin of E. coli never appears as subject and no toxicokinetic parameters for it are reported. |
| popPK | de_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for piperacillin, not for heat-labile enterotoxin of E. coli, which never appears as the subject substance. |
| popPK | van_2003 | irrelevant | 0 | 0 | The kinetic parameters (half-lives, biodistribution) belong to an (111)In-labeled LTB(4) antagonist, not to heat-labile enterotoxin of E. coli, which appears only as the infection agent. |
| popPK | Špirić_2026 | irrelevant | 0 | 0 | All kinetic parameters (clearance, half-life, volumes) belong to amikacin, not heat-labile enterotoxin of E. coli; the substance appears nowhere in the paper. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bheat_labile_enterotoxin_escherichia_coli%5D&body=Drug%3A%20heat_labile_enterotoxin_escherichia_coli%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_heat_labile_enterotoxin_escherichia_coli/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 05:37 UTC</sub>
