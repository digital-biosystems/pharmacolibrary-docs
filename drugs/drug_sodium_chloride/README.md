<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium chloride&quot;}]"></div>

# sodium chloride

- **generic name:** sodium chloride
- **ATC codes:** `A12CA01`, `B05CB01`, `B05XA03`
- **DrugBank:** [DB09153](https://go.drugbank.com/drugs/DB09153) · **PubChem:** [CID 5234](https://pubchem.ncbi.nlm.nih.gov/compound/5234)
- **molar mass:** 58.443 g/mol (ClNa) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Sodium chloride, also known as salt, common salt, table salt or halite, is an ionic compound with the chemical formula NaCl, representing a 1:1 ratio of sodium and chloride ions. Sodium chloride is the primary salt in seawater and in the extracellular fluid of many multicellular organisms. It is listed on the World Health Organization Model List of Essential Medicines.

**Indication.** This intravenous solution is indicated for use in adults and pediatric patients as a source of electrolytes and water for hydration. Also, designed for use as a diluent and delivery system for intermittent intravenous administration of compatible drug additives.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 16:31 | 2:27:51 | 0/0/0 | 0/1/0 | 0/0/0 | 485,152/19,451 | ollama / qwen3.8:27b-mtp-q8_0 | 48 | 14/34 | 43/5 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Dahan_2024_PPT](drugs/drug_sodium_chloride/pd_Dahan_2024_PPT.md) | pain pressure threshold ← S-ketamine, R-ketamine, S-norketamine, R-norketamine · direct sigmoid Emax (Hill) effect | — | Dahan A et al., Nitric Oxide Donor Sodium Nitroprusside…, ACS pharmacology & translat… (2024) | [10.1021/acsptsci.4c00133](https://doi.org/10.1021/acsptsci.4c00133) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Absorption of sodium in the small intestine plays an important role in the absorption of c…”</sub> | prose |
| absorption | stomach | <sub>“…hydrochloric acid (HCl), is also an important component of gastric juice, which aids the d…”</sub> | prose |
| metabolism | kidney | <sub>“…ater is taken in to the blood. As excesses are absorbed the kidney is constantly excreting…”</sub> | prose |
| metabolism | small intestine | <sub>“…The salt that is taken in to gastro intestinal tract remains for the most part unabsorbed…”</sub> | prose |
| metabolism | stomach | <sub>“…ost part unabsorbed as the liquid contents pass through the stomach and small bowel. On re…”</sub> | prose |
| excretion | kidney | <sub>“…Substantially excreted by the kidneys.…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2783 matched, 225 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_25 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chou_1993.pdf` | Chou CC et al., Separation of pH, dilution, ionic stren…, Journal of bioluminescence… (1993) | pd | 5 | [10.1002/bio.1170080108](https://doi.org/10.1002/bio.1170080108) | [8475782](https://www.ncbi.nlm.nih.gov/pubmed/8475782) | metadata signals extractable PD data (EC50) |
| `Dailianis_2023.pdf` | Dailianis S et al., Different isoforms of parabens into mar…, The Science of the total en… (2023) | pd | 5 | [10.1016/j.scitotenv.2023.165902](https://doi.org/10.1016/j.scitotenv.2023.165902) | [37524175](https://www.ncbi.nlm.nih.gov/pubmed/37524175) | metadata signals extractable PD data (EC50) |
| `Pinder_2019.pdf` | Pinder N et al., Continuous infusion of physostigmine in…, Biomedicine & pharmacothera… (2019) | pd | 5 | [10.1016/j.biopha.2019.109318](https://doi.org/10.1016/j.biopha.2019.109318) | [31398669](https://www.ncbi.nlm.nih.gov/pubmed/31398669) | metadata signals extractable PD data (sigmoid) |
| `Utell_1983.pdf` | Utell MJ et al., Airway responses to sulfate and sulfuri…, The American review of resp… (1983) | pd | 5 | [10.1164/arrd.1983.128.3.444](https://doi.org/10.1164/arrd.1983.128.3.444) | [6614638](https://www.ncbi.nlm.nih.gov/pubmed/6614638) | metadata signals extractable PD data (exposure-response) |
| `Wang_2017.pdf` | Wang Q et al., Ion concentration effect (Na+ and Cl-)…, Colloids and surfaces. B, B… (2017) | pd | 5 | [10.1016/j.colsurfb.2017.04.030](https://doi.org/10.1016/j.colsurfb.2017.04.030) | [28437754](https://www.ncbi.nlm.nih.gov/pubmed/28437754) | metadata signals extractable PD data (concentrationeffect) |
| `Yan_2026.pdf` | Yan D et al., Critical Concentration Effect in NaCl-N…, Inorganic chemistry (2026) | pd | 5 | [10.1021/acs.inorgchem.6c00577](https://doi.org/10.1021/acs.inorgchem.6c00577) | [41874192](https://www.ncbi.nlm.nih.gov/pubmed/41874192) | metadata signals extractable PD data (ConcentrationEffect) |
| `Dongmulati_2024.pdf` | Dongmulati N et al., Comparative extraction of antioxidant p…, Analytical methods : advanc… (2024) | pd | 4 | [10.1039/d4ay01636j](https://doi.org/10.1039/d4ay01636j) | [39564664](https://www.ncbi.nlm.nih.gov/pubmed/39564664) | metadata signals extractable PD data (IC50) |
| `Ehrlich_1991.pdf` | Ehrlich HJ et al., Functional interaction of plasminogen a…, Biochemistry (1991) | pd | 4 | [10.1021/bi00218a020](https://doi.org/10.1021/bi00218a020) | [1703436](https://www.ncbi.nlm.nih.gov/pubmed/1703436) | metadata signals extractable PD data (IC50) |
| `Kamarudheen_2021.pdf` | Kamarudheen N et al., Unraveling a natural protease inhibitor…, Microbiological research (2021) | pd | 4 | [10.1016/j.micres.2021.126858](https://doi.org/10.1016/j.micres.2021.126858) | [34509708](https://www.ncbi.nlm.nih.gov/pubmed/34509708) | metadata signals extractable PD data (EC50) |
| `Kurvet_2017.pdf` | Kurvet I et al., Toxicity of Nine (Doped) Rare Earth Met…, Materials (Basel, Switzerla… (2017) | pd | 4 | [10.3390/ma10070754](https://doi.org/10.3390/ma10070754) | [28773114](https://www.ncbi.nlm.nih.gov/pubmed/28773114) | metadata signals extractable PD data (EC50) |
| `May_1985.pdf` | May JM et al., Binding of agonists and antagonists to…, Naunyn-Schmiedeberg's archi… (1985) | pd | 4 | [10.1007/BF00500814](https://doi.org/10.1007/BF00500814) | [2869414](https://www.ncbi.nlm.nih.gov/pubmed/2869414) | metadata signals extractable PD data (EC50) |
| `Mirniyam_2023.pdf` | Mirniyam G et al., Phytochemical, Morphological, and Physi…, International journal of mo… (2023) | pd | 4 | [10.3390/ijms241310438](https://doi.org/10.3390/ijms241310438) | [37445619](https://www.ncbi.nlm.nih.gov/pubmed/37445619) | metadata signals extractable PD data (IC50) |
| `Misra_1987.pdf` | Misra UK et al., Protein kinase C binding to isolated nu…, Biochemical and biophysical… (1987) | pd | 4 | [10.1016/0006-291x(87)91030-8](https://doi.org/10.1016/0006-291x(87)91030-8) | [3473990](https://www.ncbi.nlm.nih.gov/pubmed/3473990) | metadata signals extractable PD data (EC50) |
| `Palmer_2024.pdf` | Palmer RK et al., Sodium-dependent glucose co-transport p…, PloS one (2024) | pd | 4 | [10.1371/journal.pone.0313128](https://doi.org/10.1371/journal.pone.0313128) | [39556551](https://www.ncbi.nlm.nih.gov/pubmed/39556551) | metadata signals extractable PD data (EC50) |
| `Pypendop_2014.pdf` | Pypendop BH et al., Relationship between plasma dexmedetomi…, American journal of veterin… (2014) | pd | 4 | [10.2460/ajvr.75.5.446](https://doi.org/10.2460/ajvr.75.5.446) | [24762016](https://www.ncbi.nlm.nih.gov/pubmed/24762016) | metadata signals extractable PD data (concentration-effect) |
| `Rodionova_2019.pdf` | Rodionova IA et al., A Riboflavin Transporter in Bdellovibri…, Journal of molecular microb… (2019) | pd | 4 | [10.1159/000501354](https://doi.org/10.1159/000501354) | [31509826](https://www.ncbi.nlm.nih.gov/pubmed/31509826) | metadata signals extractable PD data (EC50) |
| `Su_2023.pdf` | Su Y et al., Affinity Purification and Molecular Cha…, Marine drugs (2023) | pd | 4 | [10.3390/md21100522](https://doi.org/10.3390/md21100522) | [37888457](https://www.ncbi.nlm.nih.gov/pubmed/37888457) | metadata signals extractable PD data (IC50) |
| `Venmarath_2024.pdf` | Venmarath A et al., Extraction optimization, partial purifi…, International journal of bi… (2024) | pd | 4 | [10.1016/j.ijbiomac.2024.133462](https://doi.org/10.1016/j.ijbiomac.2024.133462) | [38942403](https://www.ncbi.nlm.nih.gov/pubmed/38942403) | metadata signals extractable PD data (EC50) |
| `Watanabe_1990.pdf` | Watanabe K et al., The effect of sodium intake on ventricu…, Journal of cardiovascular p… (1990) | pd | 4 | not captured | [1706039](https://www.ncbi.nlm.nih.gov/pubmed/1706039) | metadata signals extractable PD data (Emax) |
| `Zhang_2016.pdf` | Zhang Z et al., Structural characterization, α-glucosid…, Carbohydrate polymers (2016) | pd | 4 | [10.1016/j.carbpol.2016.02.030](https://doi.org/10.1016/j.carbpol.2016.02.030) | [27083799](https://www.ncbi.nlm.nih.gov/pubmed/27083799) | metadata signals extractable PD data (EC50) |
| `Zhao_2024.pdf` | Zhao Y et al., Characterisation and skin protection ac…, Natural product research (2024) | pd | 4 | [10.1080/14786419.2023.2280791](https://doi.org/10.1080/14786419.2023.2280791) | [37971904](https://www.ncbi.nlm.nih.gov/pubmed/37971904) | metadata signals extractable PD data (IC50) |
| `Świeca_2015.pdf` | Świeca M, Elicitation with abiotic stresses impro…, Saudi journal of biological… (2015) | pd | 4 | [10.1016/j.sjbs.2014.12.007](https://doi.org/10.1016/j.sjbs.2014.12.007) | [26150746](https://www.ncbi.nlm.nih.gov/pubmed/26150746) | metadata signals extractable PD data (IC50) |
| `Brochard_2009.pdf` | Brochard K et al., Phenotype-genotype correlation in anten…, Nephrology, dialysis, trans… (2009) | pgx | 8 | [10.1093/ndt/gfn689](https://doi.org/10.1093/ndt/gfn689) | [19096086](https://www.ncbi.nlm.nih.gov/pubmed/19096086) | metadata signals extractable PGX data (SLC12A1, PK/PD-context) |
| `Otterness_1987.pdf` | Otterness DM et al., Mouse thiopurine methyltransferase phar…, The Journal of pharmacology… (1987) | pgx | 8 | not captured | [3668849](https://www.ncbi.nlm.nih.gov/pubmed/3668849) | metadata signals extractable PGX data (TPMT, PK/PD-context) |
| `Li_2021.pdf` | Li S et al., Effects of paeoniflorin on the activiti…, Xenobiotica; the fate of fo… (2021) | pgx | 7 | [10.1080/00498254.2017.1404659](https://doi.org/10.1080/00498254.2017.1404659) | [29160125](https://www.ncbi.nlm.nih.gov/pubmed/29160125) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-26T16:07:54.298626+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adam_1987 | irrelevant | 0 | 0 | The study focuses on potassium NMR spectroscopy and does not report pharmacokinetic parameters for sodium chloride. |
| popPK | Agalakova_2022 | irrelevant | 0 | 0 | The study investigates the mechanism of vasorelaxation and fibrosis in preeclampsia using canrenone and marinobufagenin, and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Agalakova_2022 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for sodium nitroprusside, not sodium chloride, and focuses on the mechanism of canrenone and marinobufagenin. |
| PGx | Aguayo-Cumplido_2026 | not_relevant | 0 | 0 | The paper describes the genome assembly and stress tolerance of a yeast strain, not the pharmacogenomics of sodium chloride in humans. |
| popPK | Akhtar_2024 | irrelevant | 0 | 0 | The paper studies synthetic rotaxanes for anion transport and antibacterial activity, not the pharmacokinetics of sodium chloride. |
| PD | Akhtar_2024 | not_relevant | 0 | 0 | The paper reports EC50 values for synthetic rotaxanes (chemical compounds) in anion transport assays, not pharmacodynamic parameters for sodium chloride (NaCl) as a drug. |
| PGx | Albdaiwi_2024 | not_relevant | 0 | 0 | The paper studies plant physiology and bacterial inoculation in wheat, not human pharmacogenomics or the pharmacokinetics of sodium chloride. |
| PGx | Aliyeva_2023 | not_relevant | 0 | 0 | The paper studies the effect of NaCl stress on enzyme activity in corn plants, not the pharmacogenomics of sodium chloride in humans. |
| popPK | Alkhatip_2026 | irrelevant | 0 | 0 | The paper is a computational study on ketamine analogues and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Alkhatip_2026 | not_relevant | 0 | 0 | The paper is a computational study (docking, MD, MM-GBSA) of ketamine analogues and does not report any experimental pharmacodynamic, exposure-response, or dose-response data for sodium chloride or any other drug. |
| popPK | Altalal_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doxorubicin and sorafenib, with sodium chloride used only as a vehicle/control. |
| popPK | Altan_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftiofur sodium, not sodium chloride, which is only used as a vehicle or control fluid. |
| PD | Ambo_1995 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any pharmacodynamic or exposure-response data for sodium chloride. |
| PD | Ambroes_1986 | not_relevant | 2 | 1 | The study reports qualitative changes in diuretic activity and PK parameters but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Ambrose_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of levofloxacin, using sodium chloride only as a medium component to modulate bacterial replication, and does not report PK parameters for sodium chloride. |
| popPK | Ambrose_2018 | irrelevant | 0 | 0 | The study is an in-vitro infection model focusing on levofloxacin and norepinephrine, where sodium chloride is only mentioned as a modulator of bacterial replication, not as the subject drug for PK analysis. |
| popPK | Andrade_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tert-butylaminoethanethiol, not sodium chloride, which is only mentioned as an eluent in the analytical method. |
| PGx | Antoniou_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and polyamine metabolism in Medicago truncatula, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| PGx | Armando_2015 | not_relevant | 0 | 0 | The paper is a review of genetics in salt-sensitive hypertension and does not report specific pharmacokinetic or pharmacodynamic parameters for sodium chloride. |
| PGx | Armando_2015_2 | not_relevant | 0 | 0 | The paper reviews genetics of salt-sensitive hypertension and response to antihypertensive therapy, but does not report pharmacogenomic effects on the PK/PD of sodium chloride itself. |
| PD | Assunção_2022 | not_relevant | 0 | 0 | The paper reports growth optimization of a dinoflagellate using NaCl as a nutrient/salt component, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Aubry_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic interaction between ceftazidime/avibactam and colistin, and sodium chloride is only mentioned as a diluent (NaCl 0.9%) for serial dilutions, not as the subject drug for PK parameter estimation. |
| popPK | Aubry_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ceftazidime/avibactam and colistin, not sodium chloride. |
| popPK | Bagastyo_2021 | irrelevant | 0 | 0 | The paper describes an environmental engineering study on wastewater treatment using electrochemical oxidation and electrodialysis, not a pharmacokinetic study of sodium chloride. |
| PGx | Bahieldin_2018 | not_relevant | 0 | 0 | The paper studies the role of the ERF109 gene in Arabidopsis plants under salt stress, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| PGx | Baum_2020 | not_relevant | 0 | 0 | The paper investigates the therapeutic mechanism of COMP-Ang-1 in diabetes, where sodium chloride is used only as a vehicle control, and no pharmacogenomic effects on PK/PD parameters are reported. |
| popPK | Beggel_2015 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on freshwater mussels and does not report pharmacokinetic parameters for sodium chloride. |
| popPK | Belhadj_2022 | irrelevant | 0 | 0 | The paper describes an electrochemical process for producing bleach from sodium chloride and contains no pharmacokinetic data or parameters. |
| PD | Bell_1973 | not_relevant | 0 | 0 | The paper investigates the effects of dinoprost (prostaglandin E2) on coagulation, not sodium chloride. |
| PGx | Bhak_2018 | not_relevant | 0 | 0 | The paper investigates the structural properties of alpha-synuclein oligomers using neutron scattering and does not involve pharmacogenomics or sodium chloride pharmacokinetics. |
| PGx | Biurrun_2021 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of carbetocin on pain, not sodium_chloride, and only mentions oxytocin receptor genotypes in an exploratory manner without reporting specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Blaustein_1991 | not_relevant | 0 | 0 | The paper discusses physiological sodium handling and hypertension pathogenesis, not the pharmacokinetics or pharmacodynamics of sodium chloride as a drug. |
| popPK | Blonde_2020 | irrelevant | 0 | 0 | The paper is a behavioral study on taste detection in rats and does not report any pharmacokinetic parameters for sodium chloride. |
| PGx | Borrelli_2018 | not_relevant | 0 | 0 | The paper studies salinity tolerance in durum wheat plants, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| PGx | Brochard_2009 | not_relevant | 0 | 0 | The paper describes a genetic disease (Bartter syndrome) affecting endogenous sodium chloride handling, not the pharmacokinetics or pharmacodynamics of sodium chloride as a drug. |
| popPK | Brown_1986 | irrelevant | 0 | 0 | The paper describes a physicochemical bench-scale model of dental caries involving ion diffusion, not a pharmacokinetic study of sodium chloride. |
| popPK | Brown_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam in dogs, with sodium chloride serving only as the diluent for the infusion, not as the subject drug. |
| PGx | Brown_2022 | not_relevant | 0 | 0 | The paper is a review of antihypertensive targets and does not report pharmacogenomic effects on sodium chloride. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not sodium chloride. |
| PD | Camargo_2025 | not_relevant | 0 | 0 | The paper studies linalool, not sodium chloride, and does not report numeric PD parameters for the queried drug. |
| PGx | Campos_2016 | not_relevant | 0 | 0 | The paper investigates the effect of propofol on CYP enzyme expression in rabbits and does not report any pharmacogenomic effects of sodium chloride. |
| PGx | Cao_2024 | not_relevant | 0 | 0 | The paper studies salt tolerance mechanisms in perennial ryegrass, not pharmacogenomics of sodium chloride in humans. |
| PGx | Castillo_2026 | not_relevant | 0 | 0 | The paper investigates the effects of Vitamin B12 deficiency and supplementation on mitochondrial function in mice, not the pharmacokinetics or pharmacodynamics of sodium chloride. |
| popPK | Chamelian_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lignocaine, with sodium chloride used only as a hydration agent to induce hyperosmolality, not as the subject drug. |
| PD | Chamelian_1994 | not_relevant | 0 | 0 | The study investigates the effect of hydration status on lignocaine PK, not the pharmacodynamic effect of sodium chloride itself; the reported Emax/ED50 parameters are for AVP's effect on hepatic blood flow, not for NaCl. |
| popPK | Chong_2026 | irrelevant | 0 | 0 | The paper is a physiological study on diet-induced hypertension and diabetes in rats, not a pharmacokinetic study, and reports no disposition parameters for sodium chloride. |
| popPK | Chou_1993 | irrelevant | 0 | 0 | The study focuses on the Microtox bioassay for nicotine and cotinine, using sodium chloride only as a component of the saline solution for ionic strength control, not as a subject drug for pharmacokinetic analysis. |
| PD | Chou_1993 | not_relevant | 0 | 0 | The paper reports Microtox EC50 values for nicotine and cotinine (environmental toxicity), not pharmacodynamic parameters for sodium chloride, which is used only as a buffer/saline component. |
| PD | Chung_1984 | not_relevant | 0 | 0 | The paper reports dose-response relationships for methacholine, not sodium chloride; NaCl is used only as a placebo control. |
| PGx | Churchill_1992 | not_relevant | 0 | 0 | The paper studies renal physiology and blood pressure in rats, not the pharmacokinetics or pharmacodynamics of sodium chloride as a drug. |
| popPK | Cohen_2017 | irrelevant | 0 | 0 | The study investigates salt taste recognition thresholds in heart failure patients and does not report any pharmacokinetic parameters for sodium chloride. |
| popPK | Coledam_2017 | irrelevant | 0 | 0 | The paper investigates the electrochemical degradation of cephalexin, not the pharmacokinetics of sodium chloride. |
| popPK | Cox_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on NaCl's effect on fibrocyte differentiation and does not report pharmacokinetic parameters. |
| popPK | Dahan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ketamine and its metabolites, with sodium chloride appearing only as the vehicle for the placebo infusion, not as the subject drug. |
| popPK | Dailianis_2023 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Dailianis_2023 | not_relevant | 0 | 0 | The paper investigates the biological effects of parabens, not sodium chloride, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| PGx | Daldoul_2022 | not_relevant | 0 | 0 | The paper investigates salt tolerance mechanisms in grapevines, not the pharmacogenomics of sodium chloride as a drug. |
| PGx | De_1990 | not_relevant | 0 | 0 | The paper investigates multidrug resistance mechanisms in leukemia cells and does not report pharmacogenomic effects on the PK or PD of sodium chloride. |
| popPK | Dias_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tobramycin, not sodium chloride. |
| PD | Dias_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of Tobramycin and probability of target attainment, not on the pharmacodynamics of sodium chloride. |
| popPK | Dias_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vildagliptin, not sodium chloride. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The paper is a review of posaconazole pharmacokinetics, not sodium_chloride. |
| PD | Ding_2022 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PopPK) models for posaconazole and does not report any pharmacodynamic (PD) or exposure-response relationships for sodium chloride or any other drug. |
| popPK | Domínguez_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rutin and Physalis peruviana extract, not sodium chloride. |
| PD | Domínguez_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of rutin and Physalis peruviana extract, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| PGx | Dong_2020 | not_relevant | 0 | 0 | The paper studies salt tolerance in cotton plants, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| PD | Dongmulati_2024 | not_relevant | 0 | 0 | The paper focuses on the extraction of antioxidant proteins from frogs and does not contain any pharmacodynamic or exposure-response analysis for sodium chloride. |
| popPK | Dubois_1984 | irrelevant | 0 | 0 | The paper is an electrophysiological study of sodium channels in frog nerve nodes, not a pharmacokinetic study of sodium chloride as a drug. |
| PD | Dultz_2024 | not_relevant | 0 | 0 | The paper investigates the physical chemistry of tannic acid particle formation under freeze-thaw cycles, not the pharmacodynamics of sodium chloride. |
| popPK | Easley_2020 | irrelevant | 0 | 0 | The study measures procalcitonin concentrations in dogs and uses sodium chloride only as a placebo vehicle, not as the subject drug for pharmacokinetic analysis. |
| popPK | Egorin_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of halomon, not sodium chloride, which is only mentioned as a component of the formulation vehicle. |
| PD | Ehrlich_1991 | not_relevant | 0 | 0 | The paper investigates the interaction between PAI-1 and heparin, not sodium chloride, and does not report any pharmacodynamic or exposure-response parameters for sodium chloride. |
| PD | El-Esawi_2018 | not_relevant | 0 | 0 | The paper investigates the effect of a bacterial inoculant (Bacillus firmus) on soybean under salt stress, not the pharmacodynamic relationship of sodium chloride as a drug. |
| PD | El-Kashef_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for azaphilone compounds, not for sodium chloride, and does not describe a pharmacodynamic or exposure-response relationship for sodium chloride. |
| popPK | El-Shanshoury_2025 | irrelevant | 0 | 0 | The paper characterizes L-asparaginase enzyme production and activity, not the pharmacokinetics of sodium chloride. |
| PD | El-Shanshoury_2025 | not_relevant | 0 | 0 | The paper characterizes the production and enzymatic kinetics of L-asparaginase, not the pharmacodynamics of sodium chloride. |
| popPK | Epstein_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study of Na-K-Cl cotransport in elasmobranch rectal glands, not a pharmacokinetic study of sodium chloride as a drug. |
| PD | Epstein_1985 | not_relevant | 3 | 2 | The paper describes kinetic analysis of ion transport (Hill coefficients) in a biological model, not a pharmacodynamic exposure-response relationship for sodium chloride as a drug. |
| popPK | Eschenhagen_1992 | irrelevant | 0 | 0 | The paper is a molecular biology study on G-protein expression in heart failure, and sodium chloride is used only as a vehicle control, not as a subject drug for pharmacokinetic analysis. |
| PD | Eschenhagen_1992 | not_relevant | 0 | 0 | The paper investigates G-protein mRNA expression and cardiac physiology in heart failure; sodium chloride is used only as a vehicle control and no pharmacodynamic or exposure-response relationship for sodium chloride is reported. |
| popPK | Follet_2025 | irrelevant | 0 | 0 | The study focuses on fentanyl pharmacokinetics, not sodium_chloride. |
| PD | Follet_2025 | not_relevant | 0 | 0 | The paper is a study protocol for fentanyl, not sodium chloride, and contains no reported data or numeric PD parameters. |
| popPK | Fujita_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics of oseltamivir and influenza viral kinetics, not the pharmacokinetics of sodium chloride. |
| PD | Fujita_2026 | not_relevant | 0 | 0 | The paper models viral dynamics for oseltamivir, not sodium chloride, and explicitly states that no dose-dependent effects were observed. |
| popPK | Fushitani_1986 | irrelevant | 0 | 0 | The paper studies the oxygenation properties of earthworm hemoglobin and the effects of salts (including NaCl) on oxygen affinity, which is a mechanistic/biochemical study, not a pharmacokinetic study of sodium chloride. |
| PD | Fushitani_1986 | not_relevant | 0 | 0 | The paper describes the oxygen-binding properties of earthworm hemoglobin in response to salts (including NaCl) and pH, which is a biochemical/physiological study, not a pharmacodynamic analysis of a drug's effect in a biological system. |
| PGx | Gao_2021 | not_relevant | 0 | 0 | The paper studies plant physiology (Arabidopsis) and salt stress, not human pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Guo_2021 | irrelevant | 0 | 0 | The paper studies the biodegradation of benzo(a)pyrene using a biosurfactant, and sodium chloride is only mentioned as a salt stability test condition, not as the subject drug for pharmacokinetic analysis. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The paper is a study on fungicide resistance in fungi and does not involve pharmacokinetics of sodium chloride. |
| PD | Han_2017 | not_relevant | 0 | 0 | The paper reports fungicide resistance (EC50) for fludioxonil in a fungus, not a pharmacodynamic relationship for sodium chloride in a human or animal subject. |
| popPK | Hanada_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin, with sodium chloride serving only as a vehicle or control agent. |
| PD | Hanada_2000 | not_relevant | 4 | 2 | The paper reports a PK/toxicodynamic analysis for cisplatin using an Emax model, but the specific query asks for PD parameters for sodium chloride, which is only used as a vehicle/control in this study. |
| popPK | Hardenberg_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol comparing sodium chloride as a drug diluent to glucose, focusing on hypernatraemia prevalence rather than pharmacokinetic parameters. |
| popPK | Harris_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 125I-iothalamate as a volume marker, with sodium chloride used only as a vehicle or infusion fluid, not as the subject drug. |
| PGx | Hayashi_2020 | not_relevant | 0 | 0 | The paper studies yeast genetics and nutrient metabolism, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride. |
| PGx | Hazzouri_2018 | not_relevant | 0 | 0 | The paper investigates plant salt tolerance mechanisms in barley, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| popPK | Helfer_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftaroline, not sodium chloride. |
| PD | Helfer_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of ceftaroline (not sodium chloride) and reports PK parameters (Qin, Qout, PTA) rather than pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Hendrikx_2026 | irrelevant | 0 | 0 | The study investigates the effect of dexamethasone on leukocyte parameters in horses, using sodium chloride only as a placebo vehicle, and does not report pharmacokinetic parameters for sodium chloride. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report quantitative pharmacokinetic parameters for sodium chloride. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and pharmacokinetics for high-alert medications in obese pediatric patients and does not report any pharmacodynamic or exposure-response relationship for sodium chloride. |
| popPK | Hernández-Lozano_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of apramycin, not sodium chloride. |
| popPK | Homilius_2023 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of 3-hydroxybutyrate, using sodium chloride only as an osmotic control/comparator, and does not report pharmacokinetic parameters for sodium chloride. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levornidazole, not sodium chloride, which is only mentioned as part of the drug formulation name. |
| popPK | Hunold_2020 | irrelevant | 0 | 0 | The paper is a materials science study on electrical conductivity for head phantoms, not a pharmacokinetic study, and sodium chloride is used only as a solvent/electrolyte. |
| popPK | Hussin_2023 | irrelevant | 0 | 0 | The paper is a plant physiology study on quinoa salt tolerance, not a pharmacokinetic study of sodium chloride as a drug. |
| popPK | Hwang_2022 | irrelevant | 0 | 0 | The paper is a taxonomic description of a bacterial strain (Halorubrum sp.) and contains no pharmacokinetic data for sodium chloride. |
| PD | Hwang_2022 | not_relevant | 0 | 0 | The paper describes the taxonomic characterization and chemical analysis of a bacterial strain (MBLA0099T), containing no pharmacodynamic or exposure-response data for sodium chloride. |
| popPK | Ide_2009 | irrelevant | 0 | 0 | The study investigates sweet-taste receptor interactions with proteins (thaumatin/lysozyme) and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Inthuwanarud_2016 | not_relevant | 0 | 0 | The paper reports IC50 values for antioxidant and cytotoxic activities of plant protein extracts, but does not report a pharmacodynamic (exposure-response) relationship for the drug sodium chloride. |
| PD | Ishigami-Yuasa_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for WNK-SPAK inhibitors, not sodium chloride, and does not describe a pharmacodynamic exposure-response relationship for sodium chloride. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper is a structural biology and mechanistic study of FUT8 inhibitors, and sodium chloride is only mentioned as a buffer component, not as a subject drug for pharmacokinetic analysis. |
| PD | Jiang_2026 | not_relevant | 0 | 0 | The paper reports dose-response relationships for FUT8 inhibitors (CAIF, NH125, etc.), not for sodium chloride. |
| PGx | Johnson_2020 | not_relevant | 0 | 0 | The paper investigates the role of the Arhgef11 gene in renal injury and hypertension in rats, not the pharmacokinetics or pharmacodynamics of sodium chloride as a drug. |
| popPK | Joly_2026 | irrelevant | 0 | 0 | The study investigates lanreotide in ADPKD, using sodium chloride only as a placebo vehicle, and reports no pharmacokinetic parameters for sodium chloride. |
| popPK | Kamarudheen_2021 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Kamarudheen_2021 | not_relevant | 0 | 0 | The paper focuses on a protease inhibitor from Streptomyces griseoincarnatus against Chikungunya virus, not sodium chloride. |
| PGx | Karimi_2025 | not_relevant | 0 | 0 | The paper studies plant physiology (salinity stress in beans) and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on tobacco plants, not the pharmacogenomics of sodium chloride in humans. |
| PGx | Khan_2016 | not_relevant | 0 | 0 | The paper studies salt sensitivity in chickpea plants, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| PGx | Kováčik_2012 | not_relevant | 0 | 0 | The paper studies plant physiology and copper uptake in Matricaria chamomilla, not human pharmacogenomics or sodium chloride PK/PD. |
| popPK | Kroemer_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of ceftazidime/avibactam and fosfomycin in an in vitro model, and sodium chloride is not the subject drug. |
| PD | Kroemer_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of ceftazidime/avibactam and fosfomycin, not sodium chloride. |
| popPK | Kurvet_2017 | irrelevant | 0 | 0 | no_text gate: only 151 chars of text extracted (&lt; 400) |
| PD | Kurvet_2017 | not_relevant | 0 | 0 | The paper investigates the toxicity of rare earth metal oxides, not sodium chloride, and does not report any pharmacodynamic or exposure-response relationships for the target drug. |
| PGx | La_1984 | not_relevant | 0 | 0 | The paper describes the polymorphism of paraoxonase/arylesterase isozymes and their activity ratios, but does not report pharmacokinetic or pharmacodynamic parameters for sodium chloride. |
| PD | Lall_2017 | not_relevant | 0 | 0 | The paper reports an IC50 for a plant extract (Myrsine africana) and its compound, not for sodium chloride, which is only mentioned as a reagent in the methods. |
| PGx | Lee_2021 | not_relevant | 0 | 0 | The paper describes bacterial genetics and salt sensitivity in Pseudomonas aeruginosa, not human pharmacogenomics or drug PK/PD. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The study investigates the effect of paeoniflorin on CYP enzyme activity, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of sodium chloride. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a study on fungal resistance to fludioxonil and does not involve sodium chloride pharmacokinetics. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper reports EC50 values for fludioxonil (a fungicide) and qualitative sensitivity to NaCl, but does not report a pharmacodynamic exposure-response relationship or numeric PD parameters for sodium chloride. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem and vaborbactam, not sodium chloride, which is only mentioned as the infusion vehicle. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper evaluates the antifungal activity of Z24 against Botrytis cinerea and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper reports the antifungal activity of compound Z24, not sodium chloride; sodium chloride is only mentioned as a stressor in a biological context, with no exposure-response or PD parameters provided for it. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of remifentanil and lidocaine, using sodium chloride only as a placebo vehicle, and reports no pharmacokinetic parameters for sodium chloride. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper investigates salt stress response in rapeseed plants, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| PD | Loew_1984 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (urine output, electrolyte excretion) and PK parameters, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Lorenz_2005 | irrelevant | 0 | 0 | The study investigates D-lactate pharmacokinetics, with sodium chloride used only as a control vehicle. |
| popPK | Lovison_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxic activity of ruthenium complexes, not the pharmacokinetics of sodium chloride. |
| popPK | Lovison_2022 | irrelevant | 0 | 0 | The paper studies the cytotoxicity of ruthenium complexes and uses sodium chloride only as a solvent component (0.9% NaCl), not as the subject drug for pharmacokinetic analysis. |
| PD | Lovison_2022 | not_relevant | 0 | 0 | The paper reports cytotoxicity (EC50) for chiral Ruthenium complexes, not for sodium chloride, which is only mentioned as a component of the stability test solution. |
| popPK | Maese_2025 | irrelevant | 0 | 0 | The study focuses on recombinant Erwinia asparaginase (JZP458) for leukemia, not sodium chloride. |
| PD | Maese_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of recombinant Erwinia asparaginase (JZP458) and its ability to maintain serum asparaginase activity, not on sodium chloride; no PD parameters for sodium chloride are reported. |
| popPK | Manus_2022 | irrelevant | 0 | 0 | The study is a microbiome research paper using sodium chloride as a swab solution, not a pharmacokinetic study of sodium chloride. |
| popPK | Mao_2018 | irrelevant | 0 | 0 | The paper is a study on fungicide resistance in a fungus and does not involve sodium chloride pharmacokinetics. |
| PD | Mao_2018 | not_relevant | 0 | 0 | The paper reports fungicide resistance (EC50/MIC) for fluazinam in a fungal pathogen, not a pharmacodynamic or exposure-response relationship for sodium chloride in a biological system. |
| popPK | Marianski_2026 | irrelevant | 0 | 0 | The study focuses on vancomycin pharmacokinetics and nephrotoxicity, with sodium chloride serving only as a vehicle/saline comparator rather than the subject drug. |
| PD | Mascioli_1991 | not_relevant | 3 | 2 | The paper reports a single-dose effect (mean BP difference) but does not provide a dose-response curve, concentration-effect relationship, or numeric PD parameters like Emax or EC50. |
| popPK | May_1985 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | May_1985 | not_relevant | 0 | 0 | The paper focuses on beta-adrenoceptor binding and functional responses in rat vas deferens, not sodium chloride pharmacodynamics. |
| PGx | Melmed_1983 | not_relevant | 0 | 0 | The paper studies lipoprotein lipase activity in macrophage cell lines and does not involve sodium_chloride as a drug or report pharmacogenomic effects on its PK/PD. |
| PGx | Melo_2017 | not_relevant | 0 | 0 | The study evaluates bone turnover markers after bariatric surgery and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium chloride. |
| popPK | Mills_1985 | irrelevant | 0 | 0 | The paper studies ion fluxes and compartmentation in plant roots, not pharmacokinetics of sodium chloride in humans or animals. |
| PD | Mirniyam_2023 | not_relevant | 0 | 0 | The paper investigates the effects of salt stress on Ajowan plants (phytochemical, morphological, physiological) and does not report pharmacodynamic or exposure-response relationships for sodium chloride as a drug. |
| popPK | Misra_1987 | irrelevant | 0 | 0 | The paper is a mechanistic study on protein kinase C binding to nuclei and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Misra_1987 | not_relevant | 0 | 0 | The paper studies protein kinase C binding to nuclei and does not report a pharmacodynamic or exposure-response relationship for sodium chloride. |
| PGx | Morawski_2001 | not_relevant | 0 | 0 | The paper describes directed evolution of horseradish peroxidase in yeast and does not involve human pharmacogenomics or sodium chloride pharmacokinetics. |
| PD | Mrózek_2020 | not_relevant | 0 | 0 | The paper reports IC50 values for graphene oxide (GO) cytotoxicity, not for sodium chloride (NaCl), which is used only as a purification reagent. |
| PGx | Munsif_2021 | not_relevant | 0 | 0 | The paper studies plant salt stress tolerance in kenaf, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Murphy_1990 | irrelevant | 0 | 0 | The study investigates Na+-H+ exchange mechanisms in choroid plexus using sodium as a tracer/substrate, not the pharmacokinetics of sodium chloride as a drug. |
| PGx | Mészáros_2014 | not_relevant | 0 | 0 | The paper studies plant chitinase responses to metal and salt stress in soybean, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| popPK | Naicker_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiology experiment using sodium chloride as a medium component, not a pharmacokinetic study of sodium chloride. |
| popPK | Nauck_2002 | irrelevant | 0 | 0 | The study investigates the physiological effects of GLP-1 on hypoglycemia counterregulation, using sodium chloride only as a placebo vehicle, and does not report any pharmacokinetic parameters for sodium chloride. |
| popPK | Nuruzzaman_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on plant physiology (seaweed extracts and salinity tolerance in crops) and does not involve pharmacokinetics or sodium chloride as a drug subject. |
| PGx | Otterness_1987 | not_relevant | 0 | 0 | The paper studies the pharmacogenetics of thiopurine methyltransferase (TPMT) and its effect on thiopurine metabolism, not sodium_chloride. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefepime, not sodium chloride. |
| popPK | Palmer_2024 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Palmer_2024 | not_relevant | 0 | 0 | The paper investigates the role of SGLTs in glucose taste detection and does not report any pharmacodynamic or exposure-response relationship for sodium chloride. |
| popPK | Parker_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol, with sodium chloride serving only as the placebo vehicle. |
| PD | Paswan_2022 | not_relevant | 0 | 0 | The paper focuses on the synthesis and optimization of hydrogel materials using response surface methodology, not on pharmacodynamics or drug exposure-response relationships. |
| PGx | Pathare_2012 | not_relevant | 0 | 0 | The paper investigates the physiological role of the SPAK gene in calcium-phosphate homeostasis and bone density, not the pharmacokinetics or pharmacodynamics of sodium chloride as a drug. |
| PGx | Pawłowicz_2018 | not_relevant | 0 | 0 | The paper studies plant physiology and chloroplast proteome remodeling in grasses under salt stress, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Peng_2014 | not_relevant | 0 | 0 | The paper investigates cytochrome b5 mutations affecting CYP3A4 activity on steroids and nifedipine, not sodium_chloride. |
| PD | Perez-Santos_2020 | not_relevant | 0 | 0 | The paper is a patent evaluation of an anti-KIR antibody and does not report any pharmacodynamic or exposure-response data for sodium chloride. |
| popPK | Pinder_2019 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Pinder_2019 | not_relevant | 0 | 0 | The paper focuses on physostigmine, not sodium chloride. |
| popPK | Pinguet_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of melphalan, with sodium chloride serving only as the diluent/vehicle. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism, with no mention of sodium chloride pharmacokinetics. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not report any pharmacodynamic or exposure-response relationship for sodium chloride. |
| PGx | Prinsi_2020 | not_relevant | 0 | 0 | The paper analyzes proteomic responses to salt stress in grapevines, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| PGx | Rajabi_2024 | not_relevant | 0 | 0 | The paper studies plant physiology and bacterial inoculation in sorghum, not human pharmacogenomics or drug PK/PD. |
| PGx | Rana_2019 | not_relevant | 0 | 0 | The paper reports on plant breeding for salt tolerance in rice, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| popPK | Renfro_1985 | irrelevant | 0 | 0 | The study investigates magnesium transport in flounder renal tubules and does not report pharmacokinetic parameters for sodium chloride. |
| popPK | Ribeiro_2019 | irrelevant | 0 | 0 | The study investigates the physiological effects of hypertonic saline on heart transplant function in pigs and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for sodium chloride. |
| PD | Ribeiro_2019 | not_relevant | 2 | 1 | The study compares a single fixed dose of hypertonic saline against a control group (binary treatment effect) and does not report concentration-effect curves, dose-response relationships, or numeric PD parameters like Emax or EC50. |
| popPK | Rimboud_2021 | irrelevant | 0 | 0 | The paper describes a microbial fuel cell study using sodium chloride as a medium component, not a pharmacokinetic study of sodium chloride as a drug. |
| popPK | Rodionova_2019 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Rodionova_2019 | not_relevant | 0 | 0 | The paper describes a riboflavin transporter in a bacterium and does not report any pharmacodynamic or exposure-response relationship for sodium chloride. |
| popPK | Roubaud-Baudron_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ceftriaxone, not sodium chloride. |
| PD | Roubaud-Baudron_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of ceftriaxone and uses PK simulations for probability of target attainment (PTA), but does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for sodium chloride or any other drug. |
| popPK | Ruan_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin aspart, not sodium chloride, which is only used as a diluent. |
| PGx | Ruiz_2016 | not_relevant | 0 | 0 | The paper studies the physiological response of plant genotypes (ploidy) to salt stress, not the pharmacokinetics or pharmacodynamics of a drug in humans or animals. |
| PGx | Saha_2022 | not_relevant | 0 | 0 | The paper studies plant physiology and salt stress in rice, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| popPK | Sarosiek_1984 | irrelevant | 0 | 0 | The study investigates hydrogen ion diffusion in gastric mucus glycoprotein in an in-vitro setting, with sodium chloride serving only as a control solution rather than the subject drug for pharmacokinetic analysis. |
| PD | Saska_2023 | not_relevant | 0 | 0 | The paper investigates the effect of electrolyte concentration on enzyme stability and electrocatalytic activity, which is a physicochemical/bioelectrochemical study, not a pharmacodynamic (drug exposure-response) analysis. |
| popPK | Sato_1979 | irrelevant | 0 | 0 | The paper describes a physiological compartment model for body fluid regulation and sodium balance estimation, not a pharmacokinetic study of sodium chloride as a drug (no CL, Vd, or ka parameters reported). |
| popPK | Saud_2026 | irrelevant | 0 | 0 | The study investigates the physiological effects of ivermectin on electrolytes (including sodium) in rabbits, not the pharmacokinetics of sodium chloride. |
| PD | Saud_2026 | not_relevant | 0 | 0 | The paper studies the effects of ivermectin, not sodium chloride, and reports only qualitative changes in electrolyte levels without any exposure-response modeling or numeric PD parameters. |
| popPK | Seale_2000 | irrelevant | 0 | 0 | The study models osmotic water exchange in the lung using NaCl as a diagnostic agent, not the pharmacokinetics of sodium chloride itself. |
| PGx | Shaban_2025 | not_relevant | 0 | 0 | The paper studies the effect of selenium nanoparticles on salt stress tolerance in rice plants, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | The study uses sodium chloride as a contrast agent for electrical impedance tomography imaging, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Srinivasan_1995 | not_relevant | 0 | 0 | The paper studies proteoglycan variants and lipid metabolism, not the pharmacokinetics or pharmacodynamics of sodium chloride. |
| PGx | Srivastava_2022 | not_relevant | 0 | 0 | The paper discusses plant genetics and stress tolerance in Arabidopsis, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride. |
| PD | Su_2023 | not_relevant | 0 | 0 | The paper focuses on the identification and characterization of ACE-inhibitory peptides from pufferfish, not on the pharmacodynamics of sodium chloride. |
| PGx | Subhani_2023 | not_relevant | 0 | 0 | The paper studies plant physiology (tomato response to nickel and salt stress) and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| popPK | Supavilai_1982 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study where sodium chloride is used as a salt/modulator, not as a subject drug for pharmacokinetic analysis. |
| PD | Supavilai_1982 | not_relevant | 0 | 0 | The paper investigates the modulation of GABA binding sites by CNS depressants and convulsants, not the pharmacodynamic or exposure-response relationship of sodium chloride as a therapeutic drug. |
| PD | Tariq_2022 | not_relevant | 0 | 0 | The paper describes a radiation dosimeter (PMMA-NaCl composite) and its response to X-ray dose, not a pharmacodynamic or exposure-response relationship for sodium chloride as a drug. |
| popPK | Teixeira_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, not sodium chloride. |
| PD | Teixeira_2026 | not_relevant | 0 | 0 | The study focuses exclusively on the population pharmacokinetics (PopPK) of meloxicam and does not report any pharmacodynamic (PD) or exposure-response data. |
| PGx | Theerawitaya_2020 | not_relevant | 0 | 0 | The paper studies plant physiology and salt tolerance in rice, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| PGx | Titov_2010 | not_relevant | 0 | 0 | The paper discusses pathophysiological mechanisms of arterial hypertension and the role of NaCl intake, but does not report pharmacogenomic effects on the PK or PD of sodium chloride as a drug. |
| popPK | Tucker_2025 | irrelevant | 0 | 0 | The paper studies fosfomycin delivery for osteomyelitis and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Tucker_2025 | not_relevant | 0 | 0 | The paper investigates a drug delivery system for fosfomycin and does not report any pharmacodynamic or exposure-response analysis for sodium chloride. |
| PGx | Tye-Din_2023 | not_relevant | 0 | 0 | The paper reports on the efficacy of an immunotherapy for coeliac disease and does not investigate pharmacogenomic effects on the PK/PD of sodium chloride. |
| popPK | Tóth_2009 | irrelevant | 0 | 0 | The study investigates the behavioral effects of acylated-ghrelin on learning in rats, and sodium chloride is only mentioned as a vehicle solvent, not as a subject drug for pharmacokinetic analysis. |
| popPK | Utell_1983 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Utell_1983 | not_relevant | 0 | 0 | The paper investigates exposure-response relationships for sulfate and sulfuric acid aerosols, not sodium chloride. |
| popPK | Venmarath_2024 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Venmarath_2024 | not_relevant | 0 | 0 | The paper focuses on the extraction and characterization of sialoglycoproteins from fish and does not contain any pharmacodynamic or exposure-response data for sodium chloride. |
| popPK | Vihodceva_2021 | irrelevant | 0 | 0 | The paper studies the antibacterial activity of hematite nanoparticles and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Vihodceva_2021 | not_relevant | 0 | 0 | The paper investigates the antibacterial activity of hematite nanoparticles, not the pharmacodynamics of sodium chloride (which is only mentioned as a component of the exposure medium). |
| popPK | Vishnoi_2026 | irrelevant | 0 | 0 | The paper is a computational study on peptide drug design for GPCRs and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Vishnoi_2026 | not_relevant | 0 | 0 | The paper is a computational study on peptide design and binding enthalpies, containing no pharmacodynamic or exposure-response data for sodium chloride. |
| PGx | Vormfelde_2006 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of hydrochlorothiazide, not sodium_chloride. |
| PGx | Wang_2007 | not_relevant | 0 | 0 | The paper studies NAD biosynthesis in Arabidopsis and does not report pharmacogenomic effects on the PK/PD of sodium chloride. |
| PD | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the biophysical effect of ion concentration on lipid vesicle formation, not the pharmacodynamic response of a biological system to sodium chloride as a drug. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The paper reports acute toxicity (EC50) data for mussels, not pharmacokinetic parameters for sodium chloride. |
| popPK | Watanabe_1990 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Watanabe_1990 | not_relevant | 0 | 0 | The paper investigates the physiological effect of sodium intake on ventricular performance, which is a dietary/physiological study, not a pharmacodynamic analysis of sodium chloride as a drug with exposure-response modeling. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper studies fungicide resistance in a fungus and does not report pharmacokinetic parameters for sodium chloride. |
| PD | Wei_2024 | not_relevant | 0 | 0 | The paper reports fungicide resistance mechanisms and EC50 values for fludioxonil, not a pharmacodynamic or exposure-response relationship for sodium chloride. |
| PGx | Wijeweera_2026 | not_relevant | 0 | 0 | The paper investigates plant physiology and salt tolerance in wheat, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium chloride as a drug. |
| popPK | Winzeler_2021 | irrelevant | 0 | 0 | The study investigates the effect of dulaglutide on fluid intake in primary polydipsia, using sodium chloride only as a placebo vehicle, and reports no pharmacokinetic parameters for sodium chloride. |
| popPK | Wolie_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amoxicillin, with sodium chloride (saline) serving only as a vehicle for stability testing rather than the subject drug. |
| PD | Wolie_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (stability and exposure) of amoxicillin and uses Monte Carlo simulations to predict the probability of target attainment (PTA) based on MICs, but it does not report a pharmacodynamic model (e.g., Emax, EC50) or an exposure-response relationship for sodium chloride. |
| PGx | Xin_2017 | not_relevant | 0 | 0 | The paper studies cadmium absorption in radish plants, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper studies fungicide resistance in fungi and does not involve sodium chloride pharmacokinetics. |
| PD | Xu_2022 | not_relevant | 0 | 0 | The paper focuses on boscalid resistance in fungi and mentions NaCl only as a stress agent for sensitivity testing, without reporting any exposure-response or dose-response relationship for sodium chloride. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The paper studies plant salt tolerance and germination, not human pharmacogenomics or drug PK/PD. |
| popPK | Yamaguchi_1980 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ion binding to Na+,K+-ATPase, not a pharmacokinetic study of sodium chloride disposition. |
| PD | Yamaguchi_1980 | not_relevant | 0 | 0 | The paper describes the binding kinetics of sodium and potassium ions to the Na+,K+-ATPase enzyme (biochemical affinity), not a pharmacodynamic exposure-response relationship for sodium chloride as a drug in a biological system. |
| PGx | Yan_2024 | not_relevant | 0 | 0 | The paper studies plant physiology and salt tolerance in rapeseed, not human pharmacogenomics or the pharmacokinetics of sodium chloride as a drug. |
| PD | Yan_2026 | not_relevant | 0 | 0 | The paper is a computational physics study of molten salt transport properties, not a pharmacodynamic or exposure-response analysis of a drug. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper studies plant transcriptomics in response to salt stress, not human pharmacogenomics or drug PK/PD. |
| popPK | Zatroch_2019 | irrelevant | 0 | 0 | The study evaluates the cardiovascular effects of atipamezole and dexmedetomidine in cats, using saline (0.9% NaCl) only as a vehicle/comparator, and does not report pharmacokinetic parameters for sodium chloride. |
| PGx | Zeng_2019 | not_relevant | 0 | 0 | The paper describes a biosensor for detecting KRAS mutations and does not report pharmacokinetic or pharmacodynamic effects of sodium chloride. |
| PGx | Zhang_2014 | not_relevant | 0 | 0 | The paper studies plant physiology (tobacco) and cadmium toxicity, not human pharmacogenomics or the PK/PD of sodium chloride as a drug. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper investigates the structural characterization and enzymatic inhibitory activities of polysaccharides from guava, not the pharmacodynamics of sodium chloride. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper studies fungicide resistance in fungi and mentions NaCl only as a tolerance test, not as a subject drug for pharmacokinetic analysis. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The paper studies the fungicide pyrimethanil, not sodium chloride; NaCl is only mentioned as a negative control for tolerance testing. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on enzyme engineering for natural product biosynthesis and does not study the pharmacokinetics of sodium chloride. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on protein engineering and enzyme kinetics (Michaelis-Menten) for glycosyltransferases, not pharmacodynamics or exposure-response relationships for sodium chloride. |
| PD | Zhao_2024 | not_relevant | 0 | 0 | The paper reports IC50 values for polysaccharides, not sodium chloride, and NaCl is only mentioned as a reagent for chromatography. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper studies the physiological response of cotton plants to salt stress, not the pharmacokinetics or pharmacodynamics of sodium chloride in humans. |
| PGx | Zhou_2017 | not_relevant | 0 | 0 | The paper studies experimental evolution and salt tolerance in bacteria, not the pharmacogenomics of sodium chloride as a drug. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper studies fungicide resistance in a fungus and does not involve sodium chloride pharmacokinetics. |
| PD | Zhou_2022 | not_relevant | 0 | 0 | The paper studies fungicide resistance in a fungus and does not report a pharmacodynamic or exposure-response relationship for sodium chloride in a biological system. |
| PGx | de_2021 | not_relevant | 0 | 0 | The paper studies plant physiology (Arabidopsis) and suberin's role in salt tolerance, not human pharmacogenomics or the pharmacokinetics of sodium chloride as a drug. |
| popPK | de_2024 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on potassium channels in kidney tubules, not a pharmacokinetic study of sodium chloride. |
| PD | de_2024 | not_relevant | 0 | 0 | The paper reports biophysical activation parameters (EC50 for Na+ and Cl-) for a potassium channel, which is a molecular ion channel property, not a pharmacodynamic drug exposure-response relationship for sodium chloride. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is an analytical chemistry study on the characterization of cetuximab charge and glycosylation variants using LC-MS, and does not report pharmacokinetic parameters for sodium chloride. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper describes an analytical method (IEC-HILIC-MS) for characterizing charge and glycosylation variants of cetuximab and contains no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Świeca_2015 | not_relevant | 0 | 0 | The paper focuses on the nutritional quality and antioxidant potential of lentil sprouts under abiotic stress, not on the pharmacodynamics or exposure-response relationship of sodium chloride. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
