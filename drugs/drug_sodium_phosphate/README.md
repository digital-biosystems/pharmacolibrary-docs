<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;sodium phosphate&quot;}]"></div>

# sodium phosphate

- **generic name:** sodium phosphate
- **ATC codes:** `A06AD17`, `A06AG01`, `B05XA09`, `V03AG05`
- **DrugBank:** [DB09449](https://go.drugbank.com/drugs/DB09449) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sodium phosphate is used as a laxative for constipation, given by mouth or as an enema, and also as an electrolyte additive in intravenous solutions and to treat high blood calcium. It is an approved drug used in routine medical practice, though no specific regulatory authorisation details are given.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415877](https://www.wikidata.org/wiki/Q415877) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:01 | 5:42 | 0/0/0 | 0/0/0 | 0/0/0 | 208,181/5,813 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 9/34 | 17/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_phosphate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SLC20A1 (substrate), SLC20A2 (substrate), SLC34A1 (substrate), SLC34A2 (substrate), SLC34A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 132 matched, 114 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beene_2011.pdf` | Beene LC et al., Pentavalent arsenate transport by zebra…, Zebrafish (2011) | pd | 5 | [10.1089/zeb.2011.0701](https://doi.org/10.1089/zeb.2011.0701) | [21854209](https://www.ncbi.nlm.nih.gov/pubmed/21854209) | metadata signals extractable PD data (sigmoid) |
| `Becher_2018.pdf` | Becher TB et al., Soft Nanohydrogels Based on Laponite Na…, ACS applied materials & int… (2018) | pd | 4 | [10.1021/acsami.8b06149](https://doi.org/10.1021/acsami.8b06149) | [29889487](https://www.ncbi.nlm.nih.gov/pubmed/29889487) | metadata signals extractable PD data (IC50) |
| `Bock_1988.pdf` | Bock MG et al., Renin inhibitors containing hydrophilic…, Journal of medicinal chemis… (1988) | pd | 4 | [10.1021/jm00118a009](https://doi.org/10.1021/jm00118a009) | [3050088](https://www.ncbi.nlm.nih.gov/pubmed/3050088) | metadata signals extractable PD data (IC50) |
| `Gullis_1975.pdf` | Gullis RJ et al., The stimulation by synaptic transmitter…, The Biochemical journal (1975) | pd | 4 | [10.1042/bj1480557](https://doi.org/10.1042/bj1480557) | [993](https://www.ncbi.nlm.nih.gov/pubmed/993) | metadata signals extractable PD data (Sigmoid) |
| `Kim_2026.pdf` | Kim JY et al., Buccal application of microneedles coat…, Drug delivery and translati… (2026) | pd | 4 | [10.1007/s13346-025-01870-4](https://doi.org/10.1007/s13346-025-01870-4) | [40325306](https://www.ncbi.nlm.nih.gov/pubmed/40325306) | metadata signals extractable PD data (IC50) |
| `Tan_2023.pdf` | Tan M et al., Potential of Good's buffers to inhibit…, Food research international… (2023) | pd | 4 | [10.1016/j.foodres.2023.112484](https://doi.org/10.1016/j.foodres.2023.112484) | [36869497](https://www.ncbi.nlm.nih.gov/pubmed/36869497) | metadata signals extractable PD data (concentrationeffect) |
| `Noh_2022.pdf` | Noh K et al., Significance of the Vitamin D Receptor…, The AAPS journal (2022) | pgx | 7 | [10.1208/s12248-022-00719-9](https://doi.org/10.1208/s12248-022-00719-9) | [35650371](https://www.ncbi.nlm.nih.gov/pubmed/35650371) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T16:58:12.468442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of iron oxide nanoparticles and contains no pharmacokinetic data for sodium phosphate. |
| PD | Abbas_2026 | not_relevant | 0 | 0 | The paper reports on the synthesis and characterization of iron oxide nanoparticles (FeONPs), not sodium phosphate, and does not contain any pharmacodynamic or exposure-response data for the specified drug. |
| PGx | Afshar_2006 | not_relevant | 0 | 0 | The paper describes an analytical method for propafenone and mentions sodium phosphate only as a buffer component, not as a drug subject to pharmacogenomic analysis. |
| popPK | Ahad_2021 | irrelevant | 0 | 0 | The study focuses on dexamethasone sodium phosphate (a different drug) and reports formulation/release data rather than population pharmacokinetic parameters for sodium phosphate. |
| PD | Ahad_2021 | not_relevant | 1 | 0 | The paper describes formulation development and qualitative in vivo evaluation without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Ahlqvist_2025 | irrelevant | 0 | 0 | The paper is a review of metabolite identification data generation and does not report pharmacokinetic parameters for sodium phosphate. |
| PD | Ahlqvist_2025 | not_relevant | 0 | 0 | The paper focuses on metabolite identification and chemical space analysis of 120 compounds, containing no pharmacodynamic or exposure-response data for sodium phosphate. |
| popPK | Al_2017 | irrelevant | 0 | 0 | The paper is a proteomic study on antimicrobial proteins from fennel seeds, where sodium phosphate is used only as a buffer, and no pharmacokinetic parameters are reported. |
| PD | Al_2017 | not_relevant | 0 | 0 | The paper reports the isolation and antibacterial activity (IC50) of proteins from Foeniculum vulgare, not the pharmacodynamics of sodium phosphate. |
| popPK | Algov_2026 | irrelevant | 0 | 0 | The paper describes a protease activity mapping platform for tumor detection and does not involve sodium phosphate pharmacokinetics. |
| PD | Algov_2026 | not_relevant | 0 | 0 | The paper describes a protease substrate discovery platform (PSurf) and biosensor development, containing no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sodium phosphate. |
| popPK | Alkholief_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone (DEX) in rabbits, not sodium phosphate, which is only mentioned as a salt form of the drug or a buffer component. |
| PD | Alkholief_2023 | not_relevant | 2 | 1 | The paper reports PK parameters and qualitative/semi-quantitative PD effects (cytokine levels) but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) linking exposure to response. |
| popPK | Altal_2021 | irrelevant | 0 | 0 | The study is a clinical trial comparing respiratory outcomes of antenatal corticosteroids (dexamethasone/betamethasone) and does not report pharmacokinetic parameters for sodium phosphate. |
| PD | Altal_2021 | not_relevant | 0 | 0 | The study is a retrospective clinical comparison of two antenatal corticosteroid regimens based on binary clinical outcomes (e.g., RDS, apnea) and does not report any pharmacokinetic data, drug concentrations, or quantitative pharmacodynamic parameters (such as Emax, EC50, or dose-response curves). |
| popPK | Araújo_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of plant protein fractions against nematodes, where sodium phosphate is used only as a buffer, not as the subject drug for PK analysis. |
| popPK | Azzarolo_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition in rat membranes, not a pharmacokinetic study reporting disposition parameters for sodium phosphate. |
| popPK | Becher_2018 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Becher_2018 | not_relevant | 0 | 0 | The paper focuses on the development of a Laponite-based nanohydrogel drug delivery platform and does not report any pharmacodynamic or exposure-response data for sodium phosphate. |
| popPK | Beene_2011 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | Beene_2011 | not_relevant | 0 | 0 | The paper investigates the transport mechanism of arsenate by a phosphate transporter in zebrafish, not the pharmacodynamics of sodium phosphate as a drug. |
| PGx | Bi_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a probiotic on uric acid levels and transporter expression in rats, not the pharmacogenomic effect of a gene variant on the PK/PD of sodium phosphate. |
| popPK | Bock_1988 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Bock_1988 | not_relevant | 0 | 0 | The paper discusses renin inhibitors (tetrapeptides) and their potency/solubility, not sodium phosphate pharmacodynamics. |
| popPK | Braat_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of dexamethasone (administered as dexamethasone sodium phosphate), not sodium phosphate itself. |
| popPK | Brandon_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mitoxantrone, not sodium phosphate. |
| PD | Brandon_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) for mitoxantrone, not sodium phosphate, and explicitly states that no correlation was observed between AUC and toxicity, providing no PD parameters. |
| popPK | Böttger_2001 | irrelevant | 0 | 0 | The paper is a toxicological study on sea urchin embryonic development and does not report any pharmacokinetic parameters for sodium phosphate. |
| PD | Böttger_2001 | not_relevant | 4 | 2 | The paper reports a qualitative concentration-response relationship for embryonic development but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed data points to derive them. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not sodium phosphate. |
| PD | Camargo_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of linalool (LIN), not sodium phosphate; sodium phosphate is only mentioned as a component of Tyrode's solution for in vitro assays. |
| popPK | Castro-Suárez_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nimotuzumab, not sodium phosphate. |
| PD | Castro-Suárez_2020 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PopPK) modeling of nimotuzumab using a TMDD model and does not report any pharmacodynamic (PD) data, exposure-response relationships, or numeric PD parameters. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not sodium phosphate. |
| PD | Chen_2023 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of vancomycin, not sodium phosphate, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| PGx | Chi_2016 | not_relevant | 0 | 0 | The paper focuses on ethanol pharmacokinetics and ADH isozymes; sodium phosphate is only mentioned as the buffer used in in vitro enzyme assays, not as the drug of interest. |
| PGx | Chi_2018 | not_relevant | 0 | 0 | The paper models ethanol metabolism and uses sodium phosphate only as a buffer in the experimental conditions, not as the drug of interest. |
| popPK | Cruz_2018 | irrelevant | 0 | 0 | The study investigates the enzymatic kinetics of a tick pyrophosphatase using sodium phosphate as a substrate, not the pharmacokinetics of sodium phosphate as a drug. |
| PD | Cruz_2018 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Michaelis-Menten/Hill parameters) for a recombinant pyrophosphatase, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Draveny_2025 | irrelevant | 0 | 0 | The study focuses on the intracellular quantification of a fluoroquinolone metal complex in Escherichia coli, not the pharmacokinetics of sodium phosphate. |
| PD | Draveny_2025 | not_relevant | 0 | 0 | The paper focuses on the intracellular accumulation and localization of a fluoroquinolone metal complex in bacteria using imaging techniques, not on pharmacodynamic modeling or dose-response relationships for sodium phosphate. |
| popPK | Egorin_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Pc4 (NSC 676418) in mice, not sodium phosphate. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | The study evaluates the antioxidant and antihypertensive properties of Ficus exasperata extracts using in vitro and in silico methods, with no pharmacokinetic data for sodium phosphate. |
| PD | Fajana_2026 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Ficus exasperata), not sodium phosphate, and reports in vitro IC50 values for ACE inhibition and antioxidant activity, which are not pharmacodynamic parameters for the specified drug. |
| PGx | Felber_1988 | not_relevant | 0 | 0 | The paper investigates the pharmacological effect of tin-protoporphyrin on bilirubin levels in rats and does not report any pharmacogenomic effects on the PK or PD of sodium phosphate. |
| popPK | Fujiki_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the prodrug tolvaptan sodium phosphate (OPC-61815) and its conversion to tolvaptan, not the disposition parameters of sodium phosphate itself. |
| PD | Fujiki_2022 | not_relevant | 3 | 1 | The paper describes qualitative dose-dependent effects and PK parameters but does not provide numeric PD parameters (e.g., ED50, Emax) or an explicit exposure-response model in the provided text. |
| popPK | Grippa_2000 | irrelevant | 0 | 0 | The study is an in vitro antioxidant assay where sodium phosphate is used only as a buffer component, not as the subject drug for pharmacokinetic evaluation. |
| PD | Grippa_2000 | not_relevant | 0 | 0 | The paper describes an in vitro antioxidant assay where sodium phosphate is used as a buffer component, not as the drug of interest; the reported EC50 values are for antioxidants (ascorbic acid, glutathione, melatonin), not sodium phosphate. |
| popPK | Groenendaal_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nalbuphine, butorphanol, and morphine, using sodium phosphate only as a buffer component in the HPLC mobile phase. |
| PD | Groenendaal_2005 | not_relevant | 0 | 0 | The paper describes an analytical method (HPLC) for quantifying opioids, not a pharmacodynamic study of sodium phosphate. |
| popPK | Gullis_1975 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Gullis_1975 | not_relevant | 0 | 0 | The paper discusses synaptic transmitters and oleate incorporation into phospholipids, which is unrelated to the pharmacodynamics of sodium phosphate. |
| popPK | Gökçe_2012 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme inhibition study of carbonic anhydrase, not a pharmacokinetic study, and does not report disposition parameters for sodium phosphate. |
| popPK | Hasan_2021 | irrelevant | 0 | 0 | The study investigates the nephroprotective effects of a plant extract against cisplatin toxicity, and sodium phosphate is only mentioned as a buffer for tissue homogenization, not as a subject drug for pharmacokinetic analysis. |
| PD | Hasan_2021 | not_relevant | 0 | 0 | The paper studies the nephroprotective effects of a plant extract (R. vesicarius) against cisplatin toxicity, not the pharmacodynamics of sodium phosphate. |
| popPK | Hassan_2025 | irrelevant | 0 | 0 | The paper is a biochemical study on antidiabetic proteins from a plant, using sodium phosphate only as an extraction buffer, and contains no pharmacokinetic parameters. |
| PD | Hassan_2025 | not_relevant | 0 | 0 | The paper investigates the antidiabetic properties of proteins from a plant using sodium phosphate as an extraction buffer, not the pharmacodynamics of sodium phosphate itself. |
| popPK | Haynes_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of dexamethasone sodium phosphate on corneal neovascularization, not the pharmacokinetics of sodium phosphate. |
| popPK | Hendrikx_2026 | irrelevant | 0 | 0 | The study investigates the effect of dexamethasone on leukocyte parameters in horses, not the pharmacokinetics of sodium phosphate. |
| PGx | Hureaux_2018 | not_relevant | 0 | 0 | The paper describes a genetic disease (SLC34A1 mutation) affecting physiological sodium/phosphate transport, not the pharmacokinetics or pharmacodynamics of a drug named sodium_phosphate. |
| popPK | Jusko_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexamethasone and betamethasone released from erythrocytes, where sodium phosphate is merely the prodrug salt form, not the subject drug. |
| PGx | Kasahara_2021 | not_relevant | 0 | 0 | The paper focuses on protein engineering and antibody stability, not pharmacogenomics or sodium phosphate. |
| popPK | Kata_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ganciclovir, not sodium phosphate. |
| PD | Kata_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (clearance maturation) of ganciclovir/valganciclovir, not sodium phosphate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Kawamura_2021 | irrelevant | 0 | 0 | The study investigates the crosslinking efficacy and cytotoxicity of genipin in sodium phosphate buffer, not the pharmacokinetics of sodium phosphate. |
| PD | Kawamura_2021 | not_relevant | 0 | 0 | The paper studies the crosslinking and cytotoxicity of genipin (a natural crosslinker), not the pharmacodynamics of sodium phosphate (which is used only as a buffer). |
| PGx | Kestenbaum_2010 | not_relevant | 0 | 0 | The paper reports a GWAS for serum phosphorus levels (a physiological trait) and does not investigate the pharmacokinetics or pharmacodynamics of the drug sodium phosphate. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper focuses on naproxen and dexamethasone, not sodium phosphate, and does not report PD parameters for the target drug. |
| popPK | Kirstein_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gemcitabine, and sodium phosphate is only mentioned as a component of the HPLC mobile phase buffer. |
| popPK | Knych_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone, not sodium phosphate (which is only mentioned as the salt form of the administered drug). |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper focuses on tau protein proteomics in neurodegenerative diseases and does not study the pharmacokinetics of sodium phosphate. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper is a proteomics study characterizing tau protein modifications in brain tissue and does not report any pharmacodynamic or exposure-response data for sodium phosphate. |
| popPK | Kuroda_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of betamethasone sodium phosphate, not sodium phosphate. |
| popPK | Lall_2017 | irrelevant | 0 | 0 | The paper is a study on the elastase inhibitory and anti-wrinkle activity of Myrsine africana, and sodium phosphate is only mentioned as a buffer component, not as a subject drug for pharmacokinetic analysis. |
| PD | Lall_2017 | not_relevant | 0 | 0 | The paper studies the pharmacological activity of Myrsine africana (a plant extract), not sodium phosphate; sodium phosphate is only listed as a reagent. |
| PGx | Lee_2006 | not_relevant | 0 | 0 | The paper studies ethanol metabolism and uses sodium phosphate only as a buffer in the experimental setup, not as the drug of interest. |
| PGx | Lee_2011 | not_relevant | 0 | 0 | The paper studies the metabolism of toxic alcohols (methanol, ethylene glycol, isopropanol) by ADH enzymes, not the pharmacokinetics or pharmacodynamics of the drug sodium_phosphate. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper studies the role of insulin/IGF1 receptors in renal enlargement and transporter abundance in response to a fructose diet, not the pharmacokinetics or pharmacodynamics of the drug sodium phosphate. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study investigates dexamethasone sodium phosphate, not sodium phosphate, as the subject drug. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The study focuses on dexamethasone sodium phosphate (Dsp) as the subject drug, not sodium phosphate, and does not report quantitative PK parameters for sodium phosphate. |
| PD | Liu_2020 | not_relevant | 1 | 0 | The paper reports qualitative improvements in renal function and safety markers for a nanoparticle formulation but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for sodium phosphate. |
| PGx | Lu_2010 | not_relevant | 0 | 0 | The paper reports changes in mRNA expression of the sodium phosphate cotransporter type 1 due to HNF4a deficiency, but does not report any pharmacokinetic or pharmacodynamic parameters of the drug sodium_phosphate. |
| popPK | Materson_1983 | irrelevant | 0 | 0 | The paper is a review of diuretic mechanisms and does not report pharmacokinetic parameters for sodium phosphate. |
| PD | Materson_1983 | not_relevant | 0 | 0 | The text is a qualitative review of diuretic mechanisms and sites of action; it mentions sodium phosphate reabsorption inhibition only as a secondary mechanism for thiazides without providing any numeric PD parameters, dose-response curves, or exposure-response data for sodium phosphate. |
| PGx | McMurrough_1996 | not_relevant | 0 | 0 | The paper analyzes DPD polymorphism and its effect on fluoropyrimidine toxicity, not sodium phosphate. |
| PGx | Menor_2001 | not_relevant | 0 | 0 | The paper describes an assay method for TPMT activity and mentions sodium phosphate only as a buffer component, not as a drug subject to pharmacogenomic analysis. |
| popPK | Mim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mefloquine and artesunate, not sodium phosphate. |
| PGx | Miyagawa_2014 | not_relevant | 0 | 0 | The paper studies gene expression in a mouse model of hypophosphatemia and does not report pharmacokinetic or pharmacodynamic parameters for a drug named sodium_phosphate. |
| popPK | Mousa_1983 | irrelevant | 0 | 0 | The paper describes an HPLC method for analyzing opioid peptides where sodium phosphate is used only as a mobile phase buffer, not as the subject drug for pharmacokinetic analysis. |
| PD | Mousa_1983 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for measuring opioid peptides and mentions sodium phosphate only as a buffer component, containing no pharmacodynamic or exposure-response data for sodium phosphate. |
| PGx | Mäenpää_1998 | not_relevant | 0 | 0 | The paper investigates the effect of assay conditions (including sodium phosphate buffer) on midazolam metabolism, not the pharmacokinetics or pharmacodynamics of sodium phosphate itself. |
| PGx | Nelson_2001 | not_relevant | 0 | 0 | The paper investigates the mechanism of phosphate wasting in oncogenic osteomalacia and characterizes a tumor-derived factor, but it does not report pharmacogenomic effects on the PK or PD of the drug sodium_phosphate. |
| popPK | Nguyen_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibroblast proliferation where dexamethasone sodium phosphate is a test compound, not a pharmacokinetic study of sodium phosphate. |
| PGx | Noh_2022 | not_relevant | 0 | 0 | The paper is a review of the Vitamin D Receptor's role in regulating transporters (including sodium phosphate transporters) and enzymes, but it does not report a specific pharmacogenomic effect (gene variant) on the PK/PD of the drug sodium phosphate. |
| popPK | Othman_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linagliptin and cefixime, using sodium phosphate only as a mobile phase component in the HPLC method. |
| PD | Othman_2026 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic (PK) study and analytical method validation for linagliptin and cefixime, but it does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it provide numeric PD parameters. |
| popPK | Ozdin_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone sodium phosphate, not sodium phosphate. |
| PD | Ozdin_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for dexamethasone sodium phosphate but does not include any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Palchak_2026 | irrelevant | 0 | 0 | The paper investigates the formulation of terpenes in poly(2-oxazoline) micelles and does not involve sodium phosphate or any pharmacokinetic parameters. |
| PD | Palchak_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and physicochemical characterization of terpene-loaded poly(2-oxazoline) micelles, containing no pharmacodynamic, exposure-response, or dose-response data for sodium phosphate or any other drug. |
| PGx | Pathare_2018 | not_relevant | 0 | 0 | The paper studies the physiological effect of NCC knockout on FGF23 levels, not the pharmacokinetics or pharmacodynamics of sodium phosphate. |
| popPK | Perez-Santos_2020 | irrelevant | 0 | 0 | The paper is a patent evaluation of an anti-KIR antibody where sodium phosphate is merely a formulation excipient, not the subject drug for PK analysis. |
| PD | Perez-Santos_2020 | not_relevant | 0 | 0 | The paper is a patent evaluation of an anti-KIR antibody and does not report any pharmacodynamic or exposure-response data for sodium phosphate. |
| popPK | Postma_1987 | irrelevant | 0 | 0 | The study focuses on the efficacy of dexamethasone sodium phosphate and oxymetazoline for croup in ferrets, not the pharmacokinetics of sodium phosphate. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism in cell lines, with no mention of sodium phosphate pharmacokinetics. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not report any pharmacodynamic or exposure-response relationship for sodium phosphate. |
| popPK | Premachandra_1986 | irrelevant | 0 | 0 | The study investigates the binding of hemoglobin to band 3 protein, where sodium phosphate is used only as a buffer component, not as the subject drug for pharmacokinetic analysis. |
| PD | Premachandra_1986 | not_relevant | 0 | 0 | The paper describes the biochemical binding interaction between hemoglobin and band 3 protein, not the pharmacodynamic response of a drug (sodium phosphate) in a biological system. |
| popPK | Radnovich_2021 | irrelevant | 0 | 0 | The study investigates dexamethasone sodium phosphate (SP-102), not sodium phosphate, and focuses on pharmacodynamics (HPA axis suppression) rather than pharmacokinetic parameters. |
| popPK | Rodrigues_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of betamethasone (administered as a mixture of sodium phosphate and acetate esters), not sodium phosphate as the subject drug. |
| PD | Rodrigues_2022 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, CL/F) for betamethasone and explicitly states that PK/PD studies are needed, providing no pharmacodynamic or exposure-response data. |
| PGx | Rodrigues_2022 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in twin pregnancies based on chorionicity, not gene variants or genotypes. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and binding of galectin-1 inhibitors, not the pharmacokinetics of sodium phosphate. |
| PD | Sethi_2024 | not_relevant | 0 | 0 | The paper reports in vitro binding constants (Ka) and enzyme inhibition percentages for galectin-1 inhibitors, which are physicochemical/biochemical parameters, not pharmacodynamic (exposure-response) relationships for a drug in a biological system. |
| popPK | Soares_2015 | irrelevant | 0 | 0 | The study investigates the anthelmintic activity of plant protein extracts on nematodes, using sodium phosphate only as a buffer, and contains no pharmacokinetic data. |
| PD | Soares_2015 | not_relevant | 0 | 0 | The study evaluates the anthelmintic activity of plant protein extracts, not the pharmacodynamics of sodium phosphate (which was used only as a buffer for extraction). |
| popPK | Soma_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone (administered as dexamethasone sodium phosphate), not sodium phosphate itself. |
| popPK | Sullivan_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of betamethasone in horses, not sodium phosphate. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of the EGFR inhibitor AZ14289671, not sodium phosphate. |
| popPK | Takakura_2003 | irrelevant | 0 | 0 | The study investigates the chemical deactivation of norepinephrine by peroxynitrite, using sodium phosphate only as a buffer, and does not report pharmacokinetic parameters for sodium phosphate. |
| PD | Takakura_2003 | not_relevant | 0 | 0 | The paper investigates the chemical deactivation of norepinephrine by peroxynitrite, not the pharmacodynamics of sodium phosphate. |
| popPK | Tan_2023 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Tan_2023 | not_relevant | 0 | 0 | The paper investigates the effect of Good's buffers on protein denaturation, not the pharmacodynamics of sodium phosphate. |
| popPK | Thareja_2024 | irrelevant | 0 | 0 | The study focuses on dexamethasone sodium-phosphate (a corticosteroid) as the subject drug in an ex-vivo permeability assay, not sodium phosphate as a standalone pharmacokinetic subject. |
| PD | Thareja_2024 | not_relevant | 0 | 0 | The paper reports permeability enhancement (Papp) and cytotoxicity (IC50) data, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug itself. |
| popPK | Thomas_2019 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of an Npt2a inhibitor on phosphate excretion, not the pharmacokinetic disposition parameters of sodium phosphate itself. |
| popPK | Tsai_2003 | irrelevant | 0 | 0 | The study investigates hemoglobin oxygen-binding kinetics and structure, using sodium phosphate only as a buffer, not as a pharmacokinetic subject. |
| PD | Tsai_2003 | not_relevant | 0 | 0 | The paper studies hemoglobin oxygen-binding kinetics and structure, not the pharmacodynamics of sodium phosphate. |
| PGx | Voznesensky_1994 | not_relevant | 0 | 0 | The paper studies the effect of sodium phosphate ionic strength on P450 enzyme kinetics, not the pharmacokinetics or pharmacodynamics of sodium phosphate as a drug. |
| popPK | WHO_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antenatal corticosteroids (dexamethasone phosphate and betamethasone phosphate), not sodium phosphate. |
| PD | WHO_2025 | not_relevant | 0 | 0 | The paper is a study protocol for a future trial and does not report any actual data, results, or numeric PD parameters. |
| popPK | Watteyn_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone (administered as dexamethasone sodium phosphate), not sodium phosphate itself. |
| popPK | Weidenfeld_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effect of dexamethasone on prostaglandin synthesis, and sodium phosphate is only mentioned as a comparator (dexamethasone-sodium-phosphate) with no PK parameters reported. |
| popPK | Wen_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone, not sodium phosphate. |
| PD | Wen_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for dexamethasone, not sodium phosphate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The paper describes a physiologically based liver distribution model for various drugs binding to FABP1, but does not report pharmacokinetic parameters for sodium phosphate. |
| PD | Wen_2026 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) modeling of drug distribution (Kp) and protein binding, not on pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Wyns_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone (DEX), not sodium phosphate, which is merely the salt form of the administered drug. |
| popPK | Yan_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sinomenine HCl, not sodium phosphate (which is only used as a buffer in the mobile phase). |
| popPK | Yee_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone, not sodium phosphate, and sodium phosphate is only mentioned as part of the drug formulation name. |
| PD | Yee_2022 | not_relevant | 2 | 1 | The paper reports qualitative similarity in PD effects (cortisol, glucose, WBC) between two formulations but does not provide numeric PD parameters or concentration-effect curves. |
| popPK | Yi_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibrutinib, not sodium phosphate. |
| PD | Yi_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and clinical efficacy (response rates) for ibrutinib, but does not contain any pharmacodynamic (PD) modeling, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zhang_2005 | not_relevant | 0 | 0 | The paper describes a method for measuring CYP3A4 activity using verapamil, where sodium phosphate is used only as a buffer, and does not report pharmacogenomic effects on the PK/PD of sodium phosphate. |
| PGx | Zhang_2005_2 | not_relevant | 0 | 0 | The paper studies warfarin metabolism and uses sodium phosphate only as a buffer, not as the drug of interest. |
| PGx | Zhang_2006 | not_relevant | 0 | 0 | The paper describes a capillary electrophoresis method for screening drug metabolism using CYP enzymes and does not report any pharmacogenomic effects on the PK/PD of sodium phosphate. |
| popPK | Zhao_2019 | irrelevant | 0 | 0 | The paper investigates the gene SLC46A3 (a sodium phosphate transporter) in hepatocellular carcinoma and its effect on sorafenib resistance, not the pharmacokinetics of the drug sodium phosphate. |
| PD | Zhao_2019 | not_relevant | 2 | 1 | The paper investigates the gene SLC46A3 (a sodium phosphate transporter) and its effect on sorafenib resistance, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug sodium phosphate itself, nor does it provide numeric PD parameters for sodium phosphate. |
| popPK | Zheng_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isophosphoramide mustard (IPM), not sodium phosphate, which is only mentioned as a buffer medium for stability testing. |
| popPK | Zheng_2022 | irrelevant | 0 | 0 | The study investigates dexamethasone sodium phosphate (DSP) as a therapeutic agent for rheumatoid arthritis, not sodium phosphate, and the pharmacokinetic data provided is for DSP. |
| PD | Zheng_2022 | not_relevant | 2 | 1 | The paper reports PK parameters and qualitative therapeutic efficacy (cytokine levels, joint swelling) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for sodium phosphate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
