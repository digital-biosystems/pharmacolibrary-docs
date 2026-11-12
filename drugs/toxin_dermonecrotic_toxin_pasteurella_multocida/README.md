<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Dermonecrotic toxin (Pasteurella multocida)&quot;}]"></div>

# Dermonecrotic toxin (Pasteurella multocida)

- **generic name:** Dermonecrotic toxin (Pasteurella multocida)
- **T3DB:** [T3D2606](http://www.t3db.ca/toxins/T3D2606) · **PubChem:** none

## About

Pasteurella multocida toxin (PMT) is the major pathogenic deteriment of Pasteurella multocida. Pasteurella multocida can cause a zoonotic infection in humans, which typically is a result of bites or scratches from domestic pets.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Pasteurella multocida toxin (PMT) is the major pathogenic deteriment of Pasteurella multocida.
- **Mechanism of toxicity:** Stimulation of several signalling pathways is induced by PMT. Most remarkable is a potent mitogenic effect. …
- **Health effects:** Pasteurella multocida toxin (PMT) is the major pathogenic deteriment of Pasteurella multocida. Pasteurella multocida can cause a zoonotic infection in humans, which typically is a result of bites or scratches from domestic pets. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2606">T3DB T3D2606</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

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
| 2026-11-11 08:07 | 56:00 | 0/0/0 | 0/0/0 | 0/0/0 | 1,361,298/29,480 | einfracz / qwen3.8-27b | 42 | 5/37 | 41/1 | 0 |

## Coverage

- **PubMed hits:** 166 matched, 144 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stayner_1993.pdf` | Stayner LT et al., Excess hepatobiliary cancer mortality a…, Journal of occupational med… (1993) | pd | 5 |  | [8384257](https://www.ncbi.nlm.nih.gov/pubmed/8384257) | metadata signals extractable PD data (exposure-response) |
| `Dent_1982.pdf` | Dent JG et al., Effect of hepatocarcinogens on epoxide…, Carcinogenesis (1982) | pd | 4 | [10.1093/carcin/3.7.733](https://doi.org/10.1093/carcin/3.7.733) | [7116569](https://www.ncbi.nlm.nih.gov/pubmed/7116569) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-11-11 08:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Algharably_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for chlorpyrifos, not dermonecrotic toxin. |
| popPK | Alkazmi_2023 | irrelevant | 0 | 0 | The paper discusses dantrolene and its mechanism in COVID-19, containing no data on dermonecrotic toxin from Pasteurella multocida. |
| popPK | Alonso-Calvete_2022 | irrelevant | 0 | 0 | The paper studies the effect of percussive massage on human lifeguard recovery (lactate/fatigue) and does not mention or measure dermonecrotic toxin pasteurella multocida. |
| popPK | Araujo_2003 | irrelevant | 0 | 0 | The paper describes immunization and neutralization assays for Loxosceles spider venom, not the toxicokinetics of dermonecrotic toxin from Pasteurella multocida. |
| popPK | Arumugam_2024 | irrelevant | 0 | 0 | The paper investigates the toxicology and pharmacokinetics of gene-corrected macrophages (cell therapy) for pulmonary alveolar proteinosis, and does not contain any data on dermonecrotic toxin from Pasteurella multocida. |
| popPK | Baumann_2016 | irrelevant | 0 | 0 | The paper focuses on neurodevelopmental toxicity of nine chemicals using neurospheres and does not report toxicokinetic parameters for dermonecrotic toxin. |
| popPK | Bayiz_2015 | irrelevant | 0 | 0 | The paper reports clinical outcomes for pulmonary embolism treatment and does not contain any toxicokinetic data for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Beronius_2013 | irrelevant | 0 | 0 | The paper investigates the developmental neurotoxicity of bisphenol A (BPA), not dermonecrotic toxin of Pasteurella multocida. |
| popPK | Bloch_2024 | irrelevant | 0 | 0 | The paper reports kinetic parameters for BDE-47, not dermonecrotic toxin pasteurella multocida. |
| popPK | Bounda_2015 | irrelevant | 0 | 0 | The paper is a review of clinical studies on Polygonum multiflorum and its compounds, and does not contain data for dermonecrotic toxin. |
| popPK | Buddy_2022 | irrelevant | 0 | 0 | The paper concerns a Bordetella pertussis vaccine where dermonecrotic toxin is explicitly removed or inactivated, and it reports no kinetic parameters for dermonecrotic_toxin_pasteurella_multocida. |
| popPK | Campbell_2024 | irrelevant | 0 | 0 | The paper concerns the toxicokinetics of domoic acid, not dermonecrotic toxin. |
| popPK | Caporalini_2021 | irrelevant | 0 | 0 | The paper discusses immunohistochemistry in neuroepithelial tumors and is unrelated to dermonecrotic toxin toxicokinetics. |
| popPK | Cervetto_2023 | irrelevant | 0 | 0 | The paper investigates an assay for neurotoxicity using BDE47 and lead, with no mention or data for dermonecrotic toxin pasteurella multocida. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of berberine and palmatine (alkaloids from Rhizoma Coptidis), not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a clinical study on iliac vein stenting for deep vein thrombosis and does not mention dermonecrotic toxin or any toxicokinetic parameters. |
| popPK | Colaianna_2017 | irrelevant | 0 | 0 | The paper does not mention dermonecrotic_toxin_pasteurella_multocida or any Pasteurella multocida toxins, focusing instead on neurotoxicity screening with unrelated compounds like abiraterone and geldanamycin. |
| popPK | Collett_2026 | irrelevant | 0 | 0 | The paper concerns Dinitrotoluene (DNT) exposure modeling, not dermonecrotic toxin, and contains no toxicokinetic parameters for the target substance. |
| popPK | Cong_2025 | irrelevant | 0 | 0 | The paper focuses on clinical outcomes of thrombectomy in humans and does not mention the subject substance. |
| popPK | Crofton_2004 | irrelevant | 0 | 0 | The paper is a qualitative retrospective analysis of positive control data in developmental neurotoxicity studies and does not report any quantitative toxicokinetic parameters for dermonecrotic toxin pasteurella multocida. |
| popPK | Deepika_2023 | irrelevant | 0 | 0 | The paper is a general review of PBPK modeling methodologies and does not contain specific kinetic data for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Dent_1982 | irrelevant | 0 | 0 | The paper studies the effects of various hepatocarcinogens (e.g., AFB, AAF) on enzyme activity in rats and does not mention or measure kinetic parameters for dermonecrotic toxin. |
| popPK | Dobreniecki_2022 | irrelevant | 0 | 0 | The paper focuses on glufosinate (a herbicide) and does not report kinetic parameters for dermonecrotic toxin pasteurella multocida. |
| popPK | Du_2022 | irrelevant | 0 | 0 | The paper focuses on T-cell responses to Hepatitis C virus and contains no data regarding dermonecrotic toxin from Pasteurella multocida. |
| popPK | Dumantepe_2015 | irrelevant | 0 | 0 | The paper is a clinical study on pulmonary embolism thrombectomy and does not contain any toxicokinetic parameters for dermonecrotic toxin. |
| popPK | Faulhammer_2024 | irrelevant | 0 | 0 | The paper focuses on xylene, a completely different substance, and does not contain any data for dermonecrotic toxin. |
| popPK | Fava_2003 | irrelevant | 0 | 0 | The paper discusses the treatment of pulmonary embolism with mechanical thrombectomy and contains no data or parameters related to dermonecrotic toxin. |
| popPK | Frymus_1989 | irrelevant | 0 | 0 | The paper is an efficacy/immunochemistry study reporting neutralization indices and clinical outcomes, with no quantitative toxicokinetic parameters (half-life, clearance, etc.) for the toxin. |
| popPK | Fujioka_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for fb-PMT (a PEG-conjugated thyroid hormone analog), not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Fukui_1991 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (clearance, uptake rates) for the radiopharmaceutical Tc-99m-GSA, not for dermonecrotic toxin. |
| popPK | Golius_2016 | irrelevant | 0 | 0 | The paper studies energetic compounds (TNT, DNT, etc.) and does not mention dermonecrotic toxin or Pasteurella multocida. |
| popPK | Gon_1991 | irrelevant | 0 | 0 | The paper studies hepatic blood flow dynamics using a radiotracer (99mTc-PMT) and does not contain any toxicokinetic parameters for dermonecrotic toxin pasteurella multocida. |
| popPK | Guan_2023 | irrelevant | 0 | 0 | The paper is a clinical study on acute pulmonary embolism treatment and biomarkers, containing no data for dermonecrotic toxin. |
| popPK | Hamori_2016 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of acetaminophen, not dermonecrotic toxin of Pasteurella multocida. |
| popPK | Hernandez-Jerez_2024 | irrelevant | 0 | 0 | The paper is an EFSA assessment of the pesticide acetamiprid and its metabolites, containing no data or kinetic parameters for dermonecrotic toxin pasteurella multocida. |
| popPK | Hetzel_2017 | irrelevant | 0 | 0 | The paper focuses on lentivirus-mediated gene transfer for hereditary pulmonary alveolar proteinosis and does not mention dermonecrotic toxin from Pasteurella multocida. |
| popPK | Ishiguro_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for docetaxel, not for dermonecrotic toxin. |
| popPK | Jackson_2026 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of the pesticide acibenzolar-S-methyl and its metabolite, not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Jategaonkar_2026 | irrelevant | 0 | 0 | The paper discusses nanotubular networks in neurodegeneration and contains no data, parameters, or mention of dermonecrotic toxin from Pasteurella multocida. |
| PGx | Jodynis-Liebert_1999 | not_relevant | 0 | 0 | The paper studies environmental chemical effects on caffeine metabolism in rats, unrelated to dermatonecrotic toxin P. multocida or pharmacogenomics. |
| popPK | Johansson_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for acrylamide, not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Kalmykova_1991 | irrelevant | 0 | 0 | The paper reports toxin isolation, purification, and biological potency (LD50/dermonecrotic dose) but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, absorption rate). |
| popPK | Kebieche_2026 | irrelevant | 0 | 0 | The paper studies chlorpyrifos and PFAS mixtures, not dermonecrotic toxin pasteurella multocida. |
| popPK | Kobayashi_2014 | irrelevant | 0 | 0 | The paper studies the transport mechanisms of the radiotracer 99mTc-N-pyridoxyl-5-methyltryptophan (99mTc-PMT), not dermonecrotic_toxin_pasteurella_multocida. |
| popPK | Kopylev_2025 | irrelevant | 0 | 0 | The paper is an epidemiological review of methylmercury (MeHg) biomarkers for developmental neurotoxicity and does not study dermonecrotic toxin from Pasteurella multocida. |
| popPK | Kopylev_2025_2 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding methylmercury exposure and neurodevelopmental outcomes, containing no kinetic parameters for dermonecrotic toxin. |
| popPK | Kougias_2025 | irrelevant | 0 | 0 | The paper focuses on the developmental neurotoxicity of acetaminophen, not the toxicokinetics of dermonecrotic toxin. |
| popPK | Kreutz_2024 | irrelevant | 0 | 0 | The paper focuses on organophosphorus flame retardants (OPFRs) and developmental neurotoxicity, with no mention or data for dermonecrotic toxin pasteurella multocida. |
| popPK | Kreutz_2026 | irrelevant | 0 | 0 | The paper describes a PBPK modeling methodology for 91 specific chemicals (e.g., abamectin, colchicine) and does not report kinetic parameters for dermonecrotic toxin. |
| popPK | Kühne_2026 | irrelevant | 0 | 0 | The paper evaluates the developmental neurotoxicity of plasticizers (DEHP, etc.) and does not mention or provide any kinetic parameters for dermonecrotic toxin pasteurella multocida. |
| popPK | Ladics_2005 | irrelevant | 0 | 0 | The paper is a review of methodological issues in developmental toxicology protocols and does not report any quantitative kinetic parameters for dermonecrotic toxin. |
| popPK | Lee_2020 | irrelevant | 0 | 0 | The paper reports on the treatment of deep vein thrombosis using urokinase and mechanical thrombectomy, and contains no data on the toxicokinetics of dermonecrotic toxin from Pasteurella multocida. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is a clinical study comparing treatments for deep vein thrombosis and does not mention or report any kinetic parameters for Pasteurella multocida dermonecrotic toxin. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a clinical study on deep vein thrombosis outcomes and contains no kinetic data for dermonecrotic toxin. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of zeta-cypermethrin, not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper reports clinical outcomes for thrombectomy procedures in humans and does not contain any toxicokinetic parameters for dermonecrotic toxin. |
| popPK | Maass_2023 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of deltamethrin (a pyrethroid insecticide) and does not mention dermonecrotic toxin Pasteurella multocida. |
| popPK | Makris_2015 | irrelevant | 0 | 0 | The paper is a review on neurobehavioral testing methods and does not report kinetic parameters for dermonecrotic toxin. |
| popPK | Marty_2013 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of 2,4-dichlorophenoxyacetic acid (2,4-D), not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Marty_2022 | irrelevant | 0 | 0 | The paper is a review of thyroid-disrupting chemicals in rats and does not mention or report kinetic parameters for dermonecrotic toxin Pasteurella multocida. |
| popPK | Matsuoka_2001 | irrelevant | 0 | 0 | The paper describes hepatobiliary scintigraphy for patients with hepatic failure and contains no kinetic data for dermonecrotic toxin. |
| popPK | McFarland_2011 | irrelevant | 0 | 0 | The study evaluates 2-amino-4,6-dinitrotoluene (2A-DNT), not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Mirzaee_2010 | irrelevant | 0 | 0 | The paper studies the kinetics of nucleoside analogs and their enzymes in rats and mice, and does not contain any data for dermonecrotic toxin (pasteurella_multocida). |
| popPK | Miyashita_2013 | irrelevant | 0 | 0 | The paper studies Helicobacter pylori infection clearance in humans, not the toxicokinetics of dermonecrotic toxin from Pasteurella multocida. |
| popPK | Moadel_2011 | irrelevant | 0 | 0 | The paper discusses breast cancer imaging devices and has no content related to dermonecrotic toxin Pasteurella multocida or its toxicokinetics. |
| popPK | Mooi_1988 | irrelevant | 0 | 0 | The paper discusses virulence factors of Bordetella pertussis (including a different dermonecrotic toxin) and contains no kinetic parameters for Pasteurella multocida dermonecrotic toxin. |
| popPK | Moreau_2025 | irrelevant | 0 | 0 | The paper investigates nine specific chemicals (e.g., BPA, caffeine) and does not mention or provide kinetic parameters for dermonecrotic toxin Pasteurella multocida. |
| popPK | Narabayashi_1987 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the substance 99mTc-PMT, not dermonecrotic toxin Pasteurella multocida. |
| popPK | Ni_2021 | irrelevant | 0 | 0 | The paper is a clinical study on thrombectomy techniques for deep vein thrombosis and does not report any toxicokinetic parameters for dermonecrotic toxin. |
| popPK | Ni_2022 | irrelevant | 0 | 0 | The paper is a clinical study on mechanical thrombectomy for deep vein thrombosis and contains no data regarding dermonecrotic toxin. |
| popPK | Ni_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for treating deep vein thrombosis with rheolytic thrombectomy and does not report any toxicokinetic parameters for dermonecrotic toxin (Pasteurella multocida). |
| popPK | Ni_2026 | irrelevant | 0 | 0 | The paper describes clinical outcomes of mechanical thrombectomy for deep vein thrombosis and contains no data for dermonecrotic toxin. |
| popPK | Ni_2026_2 | irrelevant | 0 | 0 | The paper reports on a clinical procedure for deep vein thrombosis and contains no data regarding the toxicokinetics of dermonecrotic toxin. |
| popPK | Nie_2023 | irrelevant | 0 | 0 | The paper describes a clinical procedure for deep venous thrombosis and subarachnoid hemorrhage and contains no toxicokinetic data for dermonecrotic toxin. |
| popPK | Nishiyama_2024 | irrelevant | 0 | 0 | The paper studies the clinical efficacy of mini-tracheostomy and antibiotics for pneumonia prevention in humans and contains no toxicokinetic data for dermonecrotic toxin from Pasteurella multocida. |
| popPK | OSullivan_2007 | irrelevant | 0 | 0 | The paper concerns pharmacomechanical thrombectomy for deep vein thrombosis and does not mention dermonecrotic toxin from Pasteurella multocida or any toxicokinetic parameters for this substance. |
| popPK | Peruzynska_2026 | irrelevant | 0 | 0 | The paper reports the synthesis and antiproliferative activity of novel heterocyclic compounds, with no mention of dermonecrotic toxin or Pasteurella multocida. |
| popPK | Powers_2013 | irrelevant | 0 | 0 | The paper is a review on developmental neurotoxicity of engineered nanomaterials and does not contain any data or parameters for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Quinn_2007 | irrelevant | 0 | 0 | The paper studies 2,6-dinitrotoluene, not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Raffaele_2010 | irrelevant | 0 | 0 | The paper is a review of developmental neurotoxicity studies for various pesticides and does not contain any kinetic data or parameters for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Rahman_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for pyrimethamine, not dermonecrotic toxin *Pasteurella multocida*. |
| popPK | Raju_2014 | irrelevant | 0 | 0 | The paper reports on venous thrombosis treatment outcomes and residual clot burden, containing no kinetic parameters or data for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Rashkivska_2025 | irrelevant | 0 | 0 | The paper studies the pesticide Acetamiprid in rats, not dermonecrotic toxin of Pasteurella multocida. |
| popPK | Sabbioni_2006 | irrelevant | 0 | 0 | The paper investigates biomarkers for nitrotoluenes in humans and does not contain any data for dermonecrotic toxin. |
| PGx | Sabbioni_2006 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of nitrotoluenes, not dermonecrotic_toxin_pasteurella_multocida. |
| popPK | Sakuma_1989 | irrelevant | 0 | 0 | The provided evidence contains only metadata and no content regarding dermonecrotic toxin or any kinetic parameters. |
| popPK | Sass_2024 | irrelevant | 0 | 0 | The paper focuses on neonicotinoid pesticides and their neurotoxicity, with no mention of dermonecrotic toxin or Pasteurella multocida. |
| popPK | Schmidt_2016 | irrelevant | 0 | 0 | The paper studies the mixture toxicity of carbendazim, 2,4-DNT, and AαC in zebrafish, with no mention of dermonecrotic toxin. |
| popPK | Segal_2025 | irrelevant | 0 | 0 | The paper focuses on methodological approaches for identifying susceptibility factors for methylmercury neurotoxicity and does not contain any data for dermonecrotic toxin. |
| popPK | Seo_2009 | irrelevant | 0 | 0 | The paper focuses on immunogenicity and vaccine efficacy of toxin fragments, reporting no quantitative toxicokinetic parameters for dermonecrotic toxin. |
| popPK | Shima_2022 | irrelevant | 0 | 0 | The paper describes a murine model of pulmonary alveolar proteinosis and does not report any kinetic parameters for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Shuke_1992 | irrelevant | 0 | 0 | The paper investigates the kinetics of radiotracers (99mTc-GSA, 99mTc-PMT, 99mTc-Sn colloid) for liver imaging and does not mention dermonecrotic toxin. |
| popPK | Silva_2026 | irrelevant | 0 | 0 | The paper focuses on hallucinogens (psilocybin/psilocin, DMT) and pesticides (chlorpyrifos, endosulfan), with no mention of dermonecrotic toxin or Pasteurella multocida. |
| PGx | Silva_2026 | not_relevant | 0 | 0 | The paper discusses hallucinogens and pesticides using in-silico and in-vitro methods, and is completely unrelated to pharmacogenomics of dermonecrotic toxin P. multocida. |
| popPK | Spînu_2022 | irrelevant | 0 | 0 | The paper focuses on probabilistic modeling of developmental neurotoxicity using a dataset of 88 compounds (pharmaceuticals, pesticides, etc.) and does not mention or test dermonecrotic toxin from Pasteurella multocida. |
| popPK | Srivastava_2017 | irrelevant | 0 | 0 | The paper is a review on autophagy and neurotoxicity and does not report any toxicokinetic parameters for dermonecrotic toxin (Pasteurella multocida). |
| popPK | Stayner_1993 | irrelevant | 0 | 0 | The paper is an epidemiological mortality study on dinitrotoluene (DNT), not a toxicokinetic study on dermonecrotic toxin Pasteurella multocida. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The paper focuses on the clinical management of deep vein thrombosis and does not contain any toxicokinetic data for dermonecrotic toxin. |
| popPK | Suski_2008 | irrelevant | 0 | 0 | The study investigates the toxicity of 2,4-dinitrotoluene in lizards, not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Talukdar_2022 | irrelevant | 0 | 0 | The paper discusses the design of protein methyltransferase inhibitors and contains no data for dermonecrotic toxin. |
| popPK | Tanooka_2001 | irrelevant | 0 | 0 | The paper discusses radiation carcinogenesis in mice and does not contain any data or kinetic parameters for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Tchounwou_2001 | irrelevant | 0 | 0 | The paper studies 2,4,6-trinitrotoluene and dinitrotoluene, not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Tsuzaka_2026 | irrelevant | 0 | 0 | The paper discusses hepatobiliary scintigraphy in infants with biliary atresia and does not involve dermonecrotic toxin. |
| popPK | Vorhees_2021 | irrelevant | 0 | 0 | The paper is a review of study design for developmental neurotoxicity and does not contain any kinetic parameters for dermonecrotic toxin or Pasteurella multocida. |
| popPK | Wagenaar_2006 | irrelevant | 0 | 0 | The paper discusses nuclear medicine and magnetic resonance imaging technologies for small animal research and does not contain any toxicokinetic data or parameters for dermonecrotic toxin from Pasteurella multocida. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics and toxicity of emodin and TSG, not dermonecrotic toxin pasteurella multocida. |
| PGx | Wei_2026 | not_relevant | 0 | 0 | The paper studies hypertension and immune characteristics, not the pharmacogenomics of dermonecrotic toxin Pasteurella multocida. |
| PGx | Wilson_2026 | not_relevant | 0 | 0 | The paper investigates PCB neurotoxicity and CYP metabolism, not a pharmacogenomic effect on PK/PD parameters of dermonecrotic toxin Pasteurella multocida. |
| popPK | Wortmann_2023 | irrelevant | 0 | 0 | The paper studies catheter-directed thrombolysis and thrombectomy for deep vein thrombosis in humans and contains no kinetic parameters for dermonecrotic toxin. |
| popPK | Xiong_2019 | irrelevant | 0 | 0 | The paper studies 2,4-dinitrotoluene (2,4-DNT), a completely different substance, and does not contain any data for dermonecrotic toxin. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of double-negative T cells and cytokines, not the toxicokinetics of dermonecrotic toxin *Pasteurella multocida*. |
| popPK | Xu_2021_2 | irrelevant | 0 | 0 | The paper is a clinical trial on mechanical thrombectomy for deep venous thrombosis and contains no toxicokinetic data for dermonecrotic toxin pasteurella multocida. |
| popPK | Xue_2024 | irrelevant | 0 | 0 | The paper is a clinical study on the treatment of deep vein thrombosis and does not contain any toxicokinetic data for dermonecrotic toxin. |
| popPK | Xue_2026 | irrelevant | 0 | 0 | The paper investigates the clinical efficacy of treating deep vein thrombosis in humans and does not contain any data related to dermonecrotic toxin from Pasteurella multocida. |
| popPK | Yaghoobi_2022 | irrelevant | 0 | 0 | The paper studies polychlorinated biphenyls (PCBs) in zebrafish and does not mention or test dermonecrotic toxin. |
| popPK | Yamaguchi_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the insecticide leptophos (an organophosphate), not dermonecrotic toxin (a bacterial toxin from Pasteurella multocida). |
| popPK | Yamazaki_1998 | irrelevant | 0 | 0 | The paper studies 99mTc-GSA and 99mTc-PMT, not dermonecrotic toxin Pasteurella multocida. |
| popPK | Yin_2018 | irrelevant | 0 | 0 | The paper is a clinical study comparing treatments for venous thrombosis and contains no toxicokinetic data for dermonecrotic toxin. |
| popPK | Yorgin_2001 | irrelevant | 0 | 0 | The paper reports on pulse methylprednisolone treatment for nephrotic syndrome and contains no data regarding dermonecrotic toxin. |
| popPK | Yu_2018 | irrelevant | 0 | 0 | The paper reports clinical outcomes for a thrombectomy procedure in humans and contains no information regarding the toxicokinetics of dermonecrotic toxin from Pasteurella multocida. |
| popPK | Zeng_2024 | irrelevant | 0 | 0 | The paper studies PD-L1 degraders (berberine/palmatine derivatives) for cancer immunotherapy and does not contain any data for dermonecrotic toxin. |
| popPK | Zhai_2026 | irrelevant | 0 | 0 | The paper describes a clinical procedure for deep vein thrombosis in humans and contains no toxicokinetic parameters for dermonecrotic toxin Pasteurella multocida. |
| popPK | Zhen_2016 | irrelevant | 0 | 0 | The paper reports binding constants for 2,4,6-trinitrotoluene (TNT), not dermonecrotic toxin from Pasteurella multocida. |
| popPK | Zhou_1987 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for 99mTc-5-PMT, which is a completely different substance from dermonecrotic toxin pasteurella multocida. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper studies immune cell dynamics in COVID-19 recovery, not pharmacogenomics or a specific drug. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on neonicotinoid insecticides and does not mention dermonecrotic toxin Pasteurella multocida. |
| popPK | van_2006 | irrelevant | 0 | 0 | The paper studies pemetrexed (a chemotherapy drug) in humans and contains no data regarding dermonecrotic toxin from Pasteurella multocida. |
| popPK | Škopová_2025 | irrelevant | 0 | 0 | The paper is a vaccine immunology study where dermonecrotic toxin appears only as a genetically deleted antigen (Δdnt) to reduce reactogenicity, with no toxicokinetic parameters reported for the toxin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdermonecrotic_toxin_pasteurella_multocida%5D&body=Drug%3A%20dermonecrotic_toxin_pasteurella_multocida%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dermonecrotic_toxin_pasteurella_multocida/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
