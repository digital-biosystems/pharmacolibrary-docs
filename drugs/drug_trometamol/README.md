<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;trometamol&quot;}]"></div>

# trometamol

- **generic name:** trometamol
- **ATC codes:** `B05BB03`, `B05XX02`
- **DrugBank:** [DB03754](https://go.drugbank.com/drugs/DB03754) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Trometamol is an organic buffer used in intravenous solutions to correct disturbances of the body's acid–base balance, such as metabolic acidosis. It is an approved drug, given by infusion as an intravenous solution or additive, and is used mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413961](https://www.wikidata.org/wiki/Q413961) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 23:34 | 11:20 | 0/0/0 | 0/0/0 | 0/0/0 | 386,048/13,576 | ollama / qwen3.8:27b-mtp-q8_0 | 36 | 5/56 | 36/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trometamol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: AMD1 (inhibitor), APP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1318 matched, 210 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_27 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brasch_1982.pdf` | Brasch H et al., Pharmacokinetics of TRIS (hydroxymethyl…, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00545225](https://doi.org/10.1007/BF00545225) | [7106159](https://pubmed.ncbi.nlm.nih.gov/7106159) | The study reports quantitative PK parameters (half-lives, volume of distribution, clearance correlations) for trometamol (TRIS) in humans, though specific numeric values for CL and V are not explicitly listed in the abstract text provided. |
| `Konishi_2018.pdf` | Konishi K et al., Identification of Uridine 5'-Diphosphat…, European journal of drug me… (2018) | pd | 5 | [10.1007/s13318-017-0450-x](https://doi.org/10.1007/s13318-017-0450-x) | [29164523](https://www.ncbi.nlm.nih.gov/pubmed/29164523) | metadata signals extractable PD data (IC50) |
| `Liu_2020.pdf` | Liu D et al., The toxicity effects and mechanisms of…, Environmental pollution (Ba… (2020) | pd | 5 | [10.1016/j.envpol.2020.114788](https://doi.org/10.1016/j.envpol.2020.114788) | [32559856](https://www.ncbi.nlm.nih.gov/pubmed/32559856) | metadata signals extractable PD data (EC50) |
| `Biden_1986.pdf` | Biden TJ et al., Ca2+ regulates the inositol tris/tetrak…, The Journal of biological c… (1986) | pd | 4 | not captured | [3017952](https://www.ncbi.nlm.nih.gov/pubmed/3017952) | metadata signals extractable PD data (EC50) |
| `Bolger_1986.pdf` | Bolger GT et al., Novel interactions of cations with dihy…, British journal of pharmaco… (1986) | pd | 4 | [10.1111/j.1476-5381.1986.tb16259.x](https://doi.org/10.1111/j.1476-5381.1986.tb16259.x) | [3017494](https://www.ncbi.nlm.nih.gov/pubmed/3017494) | metadata signals extractable PD data (EC50) |
| `Bostock_1984.pdf` | Bostock E et al., Mu opioid receptors participate in the…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6094789](https://www.ncbi.nlm.nih.gov/pubmed/6094789) | metadata signals extractable PD data (EC50) |
| `Ji_2021.pdf` | Ji F et al., A cyclic peptide antenna ligand for enh…, The Analyst (2021) | pd | 4 | [10.1039/d1an00530h](https://doi.org/10.1039/d1an00530h) | [33913937](https://www.ncbi.nlm.nih.gov/pubmed/33913937) | metadata signals extractable PD data (EC50) |
| `Jowett_2018.pdf` | Jowett LA et al., New Insights into the Anion Transport S…, Chemistry (Weinheim an der… (2018) | pd | 4 | [10.1002/chem.201801463](https://doi.org/10.1002/chem.201801463) | [29786913](https://www.ncbi.nlm.nih.gov/pubmed/29786913) | metadata signals extractable PD data (EC50) |
| `Kardos_1984.pdf` | Kardos J et al., Inhibition of [3H]GABA binding to rat b…, Biochemical pharmacology (1984) | pd | 4 | [10.1016/0006-2952(84)90134-5](https://doi.org/10.1016/0006-2952(84)90134-5) | [6095852](https://www.ncbi.nlm.nih.gov/pubmed/6095852) | metadata signals extractable PD data (IC50) |
| `McGarry_1994.pdf` | McGarry SJ et al., Adenosine discriminates between the caf…, The Journal of membrane bio… (1994) | pd | 4 | [10.1007/BF00233486](https://doi.org/10.1007/BF00233486) | [7516436](https://www.ncbi.nlm.nih.gov/pubmed/7516436) | metadata signals extractable PD data (EC50) |
| `Nakazawa_1991.pdf` | Nakazawa K et al., Comparison of adenosine triphosphate- a…, The Journal of physiology (1991) | pd | 4 | [10.1113/jphysiol.1991.sp018491](https://doi.org/10.1113/jphysiol.1991.sp018491) | [2023135](https://www.ncbi.nlm.nih.gov/pubmed/2023135) | metadata signals extractable PD data (EC50) |
| `Ozawa_1985.pdf` | Ozawa K, Purification and kinetic properties of…, Archives of oral biology (1985) | pd | 4 | [10.1016/0003-9969(85)90060-3](https://doi.org/10.1016/0003-9969(85)90060-3) | [2933017](https://www.ncbi.nlm.nih.gov/pubmed/2933017) | metadata signals extractable PD data (sigmoid) |
| `Parker_2021.pdf` | Parker N et al., Screening ecological risk of pesticides…, Environmental pollution (Ba… (2021) | pd | 4 | [10.1016/j.envpol.2021.117662](https://doi.org/10.1016/j.envpol.2021.117662) | [34246998](https://www.ncbi.nlm.nih.gov/pubmed/34246998) | metadata signals extractable PD data (EC50) |
| `Sager_1989.pdf` | Sager G et al., The effect of the plasticizers TBEP (tr…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90101-9](https://doi.org/10.1016/0006-2952(89)90101-9) | [2547384](https://www.ncbi.nlm.nih.gov/pubmed/2547384) | metadata signals extractable PD data (IC50) |
| `Sharma_2025.pdf` | Sharma D et al., Fullerene (C60 & C70)-Meso-Tris-4-Carbo…, Journal of medical virology (2025) | pd | 4 | [10.1002/jmv.70181](https://doi.org/10.1002/jmv.70181) | [39868857](https://www.ncbi.nlm.nih.gov/pubmed/39868857) | metadata signals extractable PD data (EC50) |
| `Smith_1989.pdf` | Smith JD et al., Selective inhibition of [3H]nitrendipin…, Canadian journal of physiol… (1989) | pd | 4 | [10.1139/y89-255](https://doi.org/10.1139/y89-255) | [2560678](https://www.ncbi.nlm.nih.gov/pubmed/2560678) | metadata signals extractable PD data (IC50) |
| `Solomon_2020.pdf` | Solomon VR et al., Nimotuzumab Site-Specifically Labeled w…, Cancers (2020) | pd | 4 | [10.3390/cancers12113449](https://doi.org/10.3390/cancers12113449) | [33233524](https://www.ncbi.nlm.nih.gov/pubmed/33233524) | metadata signals extractable PD data (EC50) |
| `Yu_2023.pdf` | Yu Q et al., Disulfide Click Reaction for Stapling o…, Angewandte Chemie (Internat… (2023) | pd | 4 | [10.1002/anie.202314379](https://doi.org/10.1002/anie.202314379) | [37950389](https://www.ncbi.nlm.nih.gov/pubmed/37950389) | metadata signals extractable PD data (IC50) |
| `Zhang_2024.pdf` | Zhang P et al., Deriving seawater quality criteria of t…, Journal of environmental ma… (2024) | pd | 4 | [10.1016/j.jenvman.2023.119482](https://doi.org/10.1016/j.jenvman.2023.119482) | [37939474](https://www.ncbi.nlm.nih.gov/pubmed/37939474) | metadata signals extractable PD data (EC50) |
| `Zhang_2025.pdf` | Zhang Q et al., A fluorescence biosensor with a dual-fu…, Environmental research (2025) | pd | 4 | [10.1016/j.envres.2025.121163](https://doi.org/10.1016/j.envres.2025.121163) | [40015432](https://www.ncbi.nlm.nih.gov/pubmed/40015432) | metadata signals extractable PD data (EC50) |
| `Zhu_2019.pdf` | Zhu J et al., A bioactivity and biochemical analysis…, Pesticide biochemistry and… (2019) | pd | 4 | [10.1016/j.pestbp.2019.04.016](https://doi.org/10.1016/j.pestbp.2019.04.016) | [31378347](https://www.ncbi.nlm.nih.gov/pubmed/31378347) | metadata signals extractable PD data (EC50) |
| `Yuan_2023.pdf` | Yuan LJ et al., Enzymatic activity of 38 CYP2C9 genotyp…, Food and chemical toxicolog… (2023) | pgx | 8 | [10.1016/j.fct.2023.113926](https://doi.org/10.1016/j.fct.2023.113926) | [37406757](https://www.ncbi.nlm.nih.gov/pubmed/37406757) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Bocato_2016.pdf` | Bocato MZ et al., In vitro enantioselective human liver m…, Journal of pharmaceutical a… (2016) | pgx | 7 | [10.1016/j.jpba.2016.06.028](https://doi.org/10.1016/j.jpba.2016.06.028) | [27381871](https://www.ncbi.nlm.nih.gov/pubmed/27381871) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Chen_2022.pdf` | Chen MH et al., In vitro biotransformation of tris(1,3-…, Chemosphere (2022) | pgx | 7 | [10.1016/j.chemosphere.2021.132504](https://doi.org/10.1016/j.chemosphere.2021.132504) | [34627810](https://www.ncbi.nlm.nih.gov/pubmed/34627810) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Kudo_2016.pdf` | Kudo T et al., Effect of buffer conditions on CYP2C8-m…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2015.1071502](https://doi.org/10.3109/00498254.2015.1071502) | [26290405](https://www.ncbi.nlm.nih.gov/pubmed/26290405) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Suzuki_2020.pdf` | Suzuki K et al., A Reversed-Phase Mode LC-MS/MS Method U…, Therapeutic drug monitoring (2020) | pgx | 7 | [10.1097/FTD.0000000000000707](https://doi.org/10.1097/FTD.0000000000000707) | [31613803](https://www.ncbi.nlm.nih.gov/pubmed/31613803) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yan_2017.pdf` | Yan S et al., Halogen-free organophosphorus flame ret…, Environmental pollution (Ba… (2017) | pgx | 7 | [10.1016/j.envpol.2017.02.071](https://doi.org/10.1016/j.envpol.2017.02.071) | [28318792](https://www.ncbi.nlm.nih.gov/pubmed/28318792) | metadata signals extractable PGX data (cyp4, PK/PD-context) |

<sub>queue written 2026-10-05T23:27:42.016892+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahlgren_2008 | not_relevant | 0 | 0 | The paper describes the chemical labeling of Affibody molecules for radionuclide imaging and does not involve the drug trometamol or any pharmacogenomic analysis. |
| PGx | Ahrens_2024 | not_relevant | 0 | 0 | The paper discusses synthetic Ru(II)-Ir(III) complexes as CYP3A4 inhibitors and does not mention trometamol or any pharmacogenomic effects on its PK/PD parameters. |
| PD | Al_2020 | not_relevant | 0 | 0 | The paper studies a recombinant maize defensin peptide (MzDef), not the drug trometamol, and contains no pharmacodynamic data for trometamol. |
| PD | Altharawi_2024 | not_relevant | 0 | 0 | The paper reports IC50 and MIC values for a metal-organic framework (Ti/BTB-MOF), not for the drug trometamol, and does not contain any pharmacodynamic modeling or exposure-response analysis for trometamol. |
| popPK | Amaral_2026 | irrelevant | 0 | 0 | The study investigates the effect of dinoprost-tromethamine on boar semen quality, not the pharmacokinetics of trometamol. |
| popPK | Antonides_2019 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacology of synthetic cannabinoid receptor agonists, not the pharmacokinetics of trometamol. |
| PD | Arslan_2019 | not_relevant | 0 | 0 | The paper studies the effect of catalase on bull sperm quality, not the pharmacodynamics of trometamol (TRIS). |
| popPK | Ayyar_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fitusiran (an siRNA), not trometamol. |
| PD | Ayyar_2021 | not_relevant | 0 | 0 | The paper discusses a PD model for fitusiran (an siRNA), not trometamol. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper describes an in-vitro immunotherapy study using siRNA for lung cancer and does not involve the drug trometamol or any pharmacokinetic analysis. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper studies PD-L1 siRNA efficacy in cancer cells and does not report any pharmacodynamic or exposure-response relationship for the drug trometamol. |
| PD | Bell_1973 | not_relevant | 0 | 0 | The paper investigates the effect of dinoprost (a prostaglandin) on coagulation, not the pharmacodynamics of trometamol (the buffer/salt form), and does not report exposure-response or dose-response parameters for trometamol. |
| popPK | Bertin_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levosimendan and its metabolites, not trometamol. |
| PD | Bertin_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for levosimendan and its metabolites, but it does not include any pharmacodynamic (PD) modeling, exposure-response analysis, or dose-effect relationship data. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review of model-informed drug development (MIDD) and does not report specific pharmacokinetic parameters for trometamol. |
| PD | Bhat_2025 | not_relevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not contain any data, analysis, or parameters for trometamol. |
| PGx | Bi_2013 | not_relevant | 0 | 0 | The paper investigates the metabolism of mesaconitine, not trometamol, and does not report pharmacogenomic effects. |
| popPK | Biden_1986 | irrelevant | 0 | 0 | The paper studies calcium regulation of inositol phosphate pathways in RINm5F cells and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Biden_1986 | not_relevant | 0 | 0 | The paper studies the effect of calcium on inositol phosphate metabolism in RINm5F cells and does not involve the drug trometamol. |
| PGx | Bocato_2016 | not_relevant | 0 | 0 | The paper studies tetrabenazine, not trometamol. |
| popPK | Bolger_1986 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Bolger_1986 | not_relevant | 0 | 0 | The paper discusses cation interactions with calcium antagonist binding sites and does not report any pharmacodynamic or exposure-response data for trometamol. |
| popPK | Bolger_1987 | irrelevant | 0 | 0 | The paper studies opioid receptor binding in rat brain and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Bolger_1987 | not_relevant | 0 | 0 | The paper studies the effect of cations on opioid receptor binding in vitro and does not involve the drug trometamol or any pharmacodynamic exposure-response relationship for it. |
| popPK | Bostock_1984 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Bostock_1984 | not_relevant | 0 | 0 | The paper discusses mu opioid receptors and opiates in hippocampal slices, but does not mention trometamol or report any pharmacodynamic parameters for it. |
| popPK | Briki_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil, not trometamol. |
| PD | Briki_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships for trometamol or any other drug. |
| PD | Buckley_1990 | not_relevant | 1 | 0 | The text is a qualitative review summary of ketorolac's clinical efficacy and does not provide numeric PD parameters or exposure-response data. |
| popPK | Caamaño_2023 | irrelevant | 0 | 0 | The study investigates the effect of the flavonoid taxifolin on goat sperm cryopreservation and does not involve the drug trometamol or any pharmacokinetic analysis. |
| PGx | Cao_2013 | not_relevant | 0 | 0 | The paper studies BMP8B gene variants in cattle growth traits and does not involve the drug trometamol or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper describes a photoelectrochemical biosensor for myoglobin detection and does not involve the drug trometamol or any pharmacokinetic parameters. |
| popPK | Cattrall_2019 | irrelevant | 0 | 0 | The paper is a PK/PD simulation study for antibiotics (including fosfomycin trometamol, not the drug trometamol) and does not report disposition parameters for trometamol. |
| PD | Cattrall_2019 | not_relevant | 4 | 3 | The paper performs PK/PD simulations using pre-existing PK models and MIC data to calculate Probability of Target Attainment (PTA) and Cumulative Fraction of Response (CFR), but it does not report or derive specific numeric PD parameters (such as Emax, EC50, or slope) for trometamol (fosfomycin) itself; it relies on static PK/PD indices (e.g., AUC/MIC) rather than fitting a dynamic PD model. |
| popPK | Cerqueira_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of resveratrol in rats, not trometamol. |
| PD | Cerqueira_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics and tissue distribution of resveratrol, not trometamol, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Cha_2025 | irrelevant | 0 | 0 | The study focuses on bacteriophage therapy against Pseudomonas aeruginosa in mice and does not involve the drug trometamol. |
| PD | Cha_2025 | not_relevant | 0 | 0 | The paper focuses on bacteriophage therapy and Pseudomonas aeruginosa, not the drug trometamol. |
| PGx | Chai_2021 | not_relevant | 0 | 0 | The paper studies the metabolism of an environmental pollutant (TDCIPP), not the drug trometamol. |
| PGx | Chang_2011 | not_relevant | 0 | 0 | The paper describes a method for assaying P450 activity using herbicides and does not mention trometamol or pharmacogenomic effects on its PK/PD. |
| PGx | Chen_2022 | not_relevant | 0 | 0 | The paper studies the metabolism of organophosphate flame retardants (TDCPP and TPhP), not the drug trometamol. |
| PD | Chow_2017 | not_relevant | 0 | 0 | The paper discusses a tris(phthalocyanine) photosensitiser, not the drug trometamol, and reports no exposure-response or dose-response relationship for trometamol. |
| popPK | Cojutti_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fosfomycin (administered as fosfomycin trometamol), not for the drug trometamol itself. |
| PGx | Cui_2013 | not_relevant | 0 | 0 | The paper investigates the effects of hypoxia on doxorubicin resistance in leukemia cells and does not mention trometamol or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | De_2015 | not_relevant | 0 | 0 | The paper describes an analytical method for caffeine and paraxanthine in hair, not a pharmacogenomic study of trometamol. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper describes capillary electrophoresis methods for biomolecular interactions and does not involve the drug trometamol or its pharmacokinetics. |
| PD | De_2025 | not_relevant | 0 | 0 | The paper describes a capillary electrophoresis method for measuring biomolecular binding constants (Kd) and does not involve the drug trometamol or any pharmacodynamic exposure-response analysis. |
| popPK | Delles_1995 | irrelevant | 0 | 0 | The paper is an electrophysiology study on calcium currents in MDCK cells and does not involve the drug trometamol or pharmacokinetic parameters. |
| PD | Delles_1995 | not_relevant | 0 | 0 | The paper investigates ion channel physiology in MDCK cells and does not mention trometamol or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Deng_2013 | irrelevant | 0 | 0 | The paper describes a novel ERK5 inhibitor (ERK5-IN-1) and its biochemical/cellular activity, not the pharmacokinetics of trometamol. |
| PD | Deng_2013 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic and cellular potency (IC50/EC50) for an ERK5 inhibitor, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response relationship for the drug in vivo. |
| PD | Dhar_1994 | not_relevant | 0 | 0 | The paper reports in vitro binding/inhibition data (IC50) for GABA transporters, not pharmacodynamic exposure-response or dose-response relationships for the drug trometamol. |
| PD | Diaba_2024 | not_relevant | 0 | 0 | The paper reports the synthesis of lactams and their cytotoxicity (IC50), but does not contain any data, analysis, or mention of the drug trometamol. |
| popPK | Diack_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of faricimab, not trometamol. |
| popPK | Diez-Iriepa_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and neuroprotective properties of nitrone compounds, not the pharmacokinetics of trometamol. |
| PD | Diez-Iriepa_2020 | not_relevant | 0 | 0 | The paper reports dose-response data (EC50, Emax) for nitrones (HTNs, PBN), not for trometamol. |
| popPK | Drover_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac, not trometamol (which is the salt form of ketorolac, but the subject drug is ketorolac). |
| popPK | Dsida_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac, not trometamol (which is the counter-ion/salt form, not the subject drug). |
| PD | Duffin_2020 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for antimony complexes, not pharmacodynamic or exposure-response data for the drug trometamol. |
| PD | Fan_2018 | not_relevant | 1 | 0 | The study reports qualitative therapeutic effects and PK parameters but does not provide numeric PD parameters or an exposure-response relationship. |
| popPK | Farshad_2026 | irrelevant | 0 | 0 | The study investigates the effects of mitoquinone on canine sperm cryopreservation and does not report pharmacokinetic parameters for trometamol. |
| PGx | Feng_2019 | not_relevant | 0 | 0 | The paper describes the cloning and expression of l-asparaginase for food processing, not the pharmacogenomics of trometamol. |
| PGx | Fuqua_2018 | not_relevant | 0 | 0 | The paper studies iron metabolism in mice and does not mention trometamol or any pharmacokinetic/pharmacodynamic parameters of the drug. |
| popPK | Gbahou_2006 | irrelevant | 0 | 0 | The paper investigates histamine receptor pharmacology and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Gbahou_2006 | not_relevant | 0 | 0 | The paper investigates histamine receptor pharmacology and does not mention trometamol or report any exposure-response relationship for it. |
| popPK | Gibadullin_2026 | irrelevant | 0 | 0 | The paper describes the design of heterochiral agonists for GPCRs (glucagon and PTH receptors) and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Gibadullin_2026 | not_relevant | 0 | 0 | The paper studies glucagon and PTH analogues, not trometamol. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The paper describes a virtual screening and zebrafish behavioral profiling pipeline for hypocretin receptor ligands and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Ginsparg_2026 | not_relevant | 0 | 0 | The paper focuses on virtual screening and functional profiling of hypocretin receptor antagonists (e.g., suvorexant, novel compounds) and does not mention or analyze the drug trometamol. |
| popPK | Grindy_2023 | irrelevant | 0 | 0 | The study focuses on bupivacaine and ketorolac tromethamine, not trometamol, and is primarily an in-vitro/in-vivo device study. |
| popPK | Gurunathan_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac, not trometamol (which is only the salt form of the drug). |
| PD | Gülçin_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for synthesized heterocyclic compounds, not pharmacodynamic or exposure-response data for the drug trometamol. |
| PD | Hamid_2019 | not_relevant | 0 | 0 | The paper reports IC50 values for plant extracts and isolated compounds, not for the drug trometamol. |
| popPK | Harper_2025 | irrelevant | 0 | 0 | The paper studies calpain-1 and calpain-2 in breast cancer metastasis and does not involve the drug trometamol. |
| popPK | He_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of N-acetylcysteine amide (NACA) and NAC in mice, not trometamol. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by compounds in a traditional Chinese medicine capsule (Xian-Ling-Gu-Bao) and does not mention or analyze the drug trometamol. |
| PGx | He_2022 | not_relevant | 0 | 0 | The paper investigates the inhibition of estrogen glucuronidation by compounds in a traditional Chinese medicine capsule, not the pharmacogenomics of trometamol. |
| popPK | Henley_1988 | irrelevant | 0 | 0 | The paper investigates kainate receptor binding in goldfish brain and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Henley_1988 | not_relevant | 0 | 0 | The paper describes the solubilization and biochemical characterization of kainate receptors in goldfish brain, not the pharmacodynamics of the drug trometamol. |
| PGx | Heo_2024 | not_relevant | 0 | 0 | The paper investigates the role of the TRIM22 gene in autophagy and neurodegenerative diseases, with no mention of the drug trometamol or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Hou_2018 | not_relevant | 0 | 0 | The paper studies the metabolism of environmental pollutants (alkyl organophosphate esters) in fish, not the pharmacogenomics of the drug trometamol. |
| PGx | Hu_2002 | not_relevant | 0 | 0 | The paper studies the metabolism of the pesticide methoxychlor, not the drug trometamol. |
| PGx | Hu_2002_2 | not_relevant | 0 | 0 | The paper investigates the metabolism of the pesticide methoxychlor, not the drug trometamol. |
| PGx | Hu_2015 | not_relevant | 0 | 0 | The paper studies plant stress responses in tall fescue and does not involve the drug trometamol or human pharmacogenomics. |
| popPK | Huynh_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the HIV broadly neutralizing antibody VRC07-523LS, not for the drug trometamol. |
| popPK | Itoh_1976 | irrelevant | 0 | 0 | The paper studies the enzyme amidophosphoribosyltransferase in pigeon liver and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Itoh_1976 | not_relevant | 0 | 0 | The paper describes the biochemical kinetics and structural changes of an enzyme (amidophosphoribosyltransferase) in vitro, not the pharmacodynamics of the drug trometamol. |
| popPK | Jeon_2022 | irrelevant | 0 | 0 | The paper is a minireview of siRNA therapeutics and does not contain any data or parameters for trometamol. |
| PD | Jeon_2022 | not_relevant | 0 | 0 | The paper is a minireview of siRNA therapeutics and does not contain any data, analysis, or mention of trometamol. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PD | Ji_2021 | not_relevant | 0 | 0 | The paper discusses a cyclic peptide ligand for enhancing terbium luminescence and does not mention trometamol or any pharmacodynamic/exposure-response relationship. |
| PGx | Jia_2022 | not_relevant | 0 | 0 | The paper studies the biotransformation of organophosphorus flame retardants, not the pharmacokinetics or pharmacodynamics of the drug trometamol. |
| popPK | Jowett_2018 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Jowett_2018 | not_relevant | 0 | 0 | The paper discusses the mechanism of anion transport for Tren-based tris-(thio)ureas, which is unrelated to the pharmacodynamics of the drug trometamol. |
| PGx | Kamugisha_2012 | not_relevant | 0 | 0 | The paper studies malaria parasite drug resistance markers, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of trometamol. |
| PD | Kardos_1984 | not_relevant | 0 | 0 | The paper studies the binding of bicuculline-related alkaloids to GABA receptors and does not mention trometamol or report any pharmacodynamic parameters for it. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological activity of novel amidoxime compounds and does not involve the drug trometamol or any pharmacokinetic studies. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports in vitro MIC and enzyme inhibition percentages for novel synthetic compounds, not a pharmacodynamic exposure-response or dose-response relationship for the drug trometamol. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The paper studies plant physiology (tobacco) and heavy metal toxicity, not human pharmacogenomics or the drug trometamol. |
| PD | Killilea_2017 | not_relevant | 0 | 0 | The paper investigates the toxicity of TDCPP and the protective effects of NAC, but does not report any pharmacodynamic or exposure-response relationship for trometamol. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bevacizumab (CT-P16), not trometamol. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (CT-P16) and compares PK parameters, but it does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50) for the drug itself; the mention of an exposure-response benchmark is only for contextualizing PK exposure levels against a published efficacy threshold, not for deriving PD parameters in this study. |
| popPK | Kirsch_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ancitabine and cytarabine, not trometamol. |
| popPK | Koele_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the antituberculosis drug BTZ-043, not trometamol. |
| PD | Konishi_2018 | not_relevant | 0 | 0 | The paper focuses on the identification of UGT enzymes responsible for the metabolism of mirabegron, not on the pharmacodynamic (exposure-response) relationship of trometamol. |
| popPK | Kudo_2016 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| PD | Kudo_2016 | not_relevant | 0 | 0 | The paper investigates the effect of buffer conditions on CYP-mediated metabolism of paclitaxel and triazolam, and does not report any pharmacodynamic or exposure-response relationship for trometamol. |
| PGx | Kudo_2016 | not_relevant | 0 | 0 | The paper investigates paclitaxel and triazolam metabolism, not trometamol. |
| popPK | Kueh_2017 | irrelevant | 0 | 0 | The paper describes carbon monoxide-releasing prodrugs and does not involve the drug trometamol. |
| PD | Kueh_2017 | not_relevant | 0 | 0 | The paper describes the synthesis and biological activity of carbon monoxide-releasing prodrugs (CORMs) and does not contain any pharmacokinetic or pharmacodynamic modeling or data for trometamol. |
| popPK | Kurup_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DZIF-10c (an antibody), not trometamol. |
| PD | Kurup_2024 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for DZIF-10c, not trometamol, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| PGx | Lash_1999 | not_relevant | 0 | 0 | The paper studies trichloroethylene, not trometamol. |
| PD | Leonardi_2000 | not_relevant | 2 | 1 | The study reports qualitative and statistical comparisons of clinical and biomarker effects between ketorolac and placebo, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect/dose-response curve for the drug. |
| popPK | Li_2005 | irrelevant | 0 | 0 | The paper describes the isolation and characterization of an allelochemical from a plant and its effects on algae, with no mention of trometamol or pharmacokinetics. |
| PD | Li_2005 | not_relevant | 0 | 0 | The paper reports EC50 values for an allelochemical (ethyl 2-methylacetoacetate) on algae, not for the drug trometamol. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper studies the toxicity of TDCIPP in bivalves, not the pharmacogenomics of trometamol. |
| PD | Li_2020_2 | not_relevant | 0 | 0 | The paper reports IC50 values for a Ru(II) complex in photodynamic therapy, not for the drug trometamol. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem and vaborbactam, not trometamol. |
| popPK | Lifshits_2020 | irrelevant | 0 | 0 | The paper studies Ru(ii) complexes for photodynamic therapy in melanoma and does not involve the drug trometamol. |
| PD | Lifshits_2020 | not_relevant | 0 | 0 | The paper investigates Ru(II) complexes for photodynamic therapy and does not mention or analyze the drug trometamol. |
| popPK | Lin_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the herbicide atrazine in mice, not the drug trometamol. |
| PGx | Liu_2001 | not_relevant | 0 | 0 | The paper investigates CYP1A induction by benzo[k]fluoranthene and warfarin metabolism, with no mention of trometamol or pharmacogenomic effects on its PK/PD. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper studies the toxicity of TDCPP on marine algae, not the pharmacokinetics of trometamol. |
| PD | Liu_2020 | not_relevant | 0 | 0 | The paper studies the toxicity of TDCPP on algae, not the pharmacodynamics of the drug trometamol. |
| popPK | Liu_2020_2 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Liu_2020_2 | not_relevant | 0 | 0 | The paper discusses the toxicity of TDCPP, not the drug trometamol. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper studies the toxicity of flame retardants to microalgae and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper investigates the toxicity of flame retardants (TBBPA, TDCPP, TBP) on microalgae and does not mention or study the drug trometamol. |
| PGx | Loo_2003 | not_relevant | 0 | 0 | The paper studies P-glycoprotein binding mechanisms with verapamil and TMEA, not the pharmacokinetics or pharmacodynamics of trometamol. |
| PGx | Luo_2024 | not_relevant | 0 | 0 | The paper studies the mutagenicity of a flame retardant (TBOEP) and its metabolism by CYPs, not the pharmacokinetics or pharmacodynamics of the drug trometamol. |
| popPK | Lynn_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ketorolac, not trometamol (which is the counter-ion/salt form, not the subject drug). |
| popPK | Lynn_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac, not trometamol (which is the counter-ion/salt form, not the active drug subject). |
| popPK | Ma_2015 | irrelevant | 0 | 0 | The paper studies Zr-89 chelators for PET imaging and does not involve the drug trometamol. |
| PD | Ma_2015 | not_relevant | 0 | 0 | The paper focuses on the synthesis and characterization of chelators for PET imaging (89Zr) and does not report any pharmacodynamic or exposure-response data for trometamol. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of pitavastatin in OATP1B2 knockout rats, not trometamol. |
| popPK | Malama_2017 | irrelevant | 0 | 0 | The study investigates bovine semen quality and does not involve the drug trometamol or any pharmacokinetic parameters. |
| popPK | Mao_2025 | irrelevant | 0 | 0 | The paper focuses on the colloidal stabilizing effects of amino acids on proteins and nanoparticles, not the pharmacokinetics of trometamol. |
| PD | Mao_2025 | not_relevant | 0 | 0 | The paper investigates the colloidal stabilizing effects of amino acids (specifically proline and glutamine) on proteins and nanoparticles, not the pharmacodynamics of trometamol. |
| popPK | McGarry_1993 | irrelevant | 0 | 0 | The paper investigates the mechanism of digoxin on sarcoplasmic reticulum channels and does not involve trometamol or pharmacokinetic parameters. |
| popPK | McGarry_1994 | irrelevant | 0 | 0 | The paper investigates the pharmacology of adenosine on sheep cardiac sarcoplasmic reticulum calcium-release channels and does not involve the drug trometamol or any pharmacokinetic analysis. |
| PD | McGarry_1994 | not_relevant | 0 | 0 | The paper investigates the pharmacology of adenosine on cardiac sarcoplasmic reticulum channels, not the drug trometamol. |
| PGx | Mendelson_1974 | not_relevant | 0 | 0 | The paper studies Bacillus subtilis minicells and does not involve the drug trometamol or human pharmacogenomics. |
| popPK | Mibu_2016 | irrelevant | 0 | 0 | The paper describes the antiviral activity and molecular geometry of tris(aminoalkyl)amine derivatives, not the pharmacokinetics of trometamol. |
| PD | Mibu_2016 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for new chemical derivatives, not a pharmacodynamic or exposure-response relationship for the drug trometamol. |
| PD | Mo_2017 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of natural products from Taraxacum coreanum and their antioxidant activity (IC50), but does not contain any pharmacokinetic or pharmacodynamic data for the drug trometamol. |
| PGx | Monaghan_2014 | not_relevant | 0 | 0 | The paper discusses anisomycin and its analogues, not trometamol, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Morineau_2026 | irrelevant | 0 | 0 | The study investigates gut microbiome dynamics in patients treated with ibrutinib and does not involve trometamol or report any pharmacokinetic parameters. |
| PD | Morineau_2026 | not_relevant | 0 | 0 | The paper analyzes gut microbiome dynamics associated with ibrutinib therapy and does not report any pharmacokinetic or pharmacodynamic data for trometamol. |
| popPK | Mouawad_2004 | irrelevant | 0 | 0 | The paper investigates signaling pathways in vascular smooth muscle cells and does not involve the drug trometamol or any pharmacokinetic parameters. |
| PD | Mouawad_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacology of C-ANP(4-23) on vascular smooth muscle cells and does not mention or analyze the drug trometamol. |
| popPK | Muth_2014 | irrelevant | 0 | 0 | The paper focuses on polyamine transport inhibitors and cancer cell biology, with no mention of trometamol or its pharmacokinetics. |
| PD | Muth_2014 | not_relevant | 0 | 0 | The paper reports an EC50 for a polyamine transport inhibitor (compound 6b), not for trometamol. |
| PGx | Mäenpää_1998 | not_relevant | 0 | 0 | The paper studies midazolam metabolism and does not mention trometamol. |
| popPK | Na_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for HOSU-53 (JBZ-001), not trometamol. |
| popPK | Nakazawa_1991 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Nakazawa_1991 | not_relevant | 0 | 0 | The paper investigates electrophysiological currents in rat cells and does not mention trometamol or report any pharmacodynamic or exposure-response relationships for it. |
| PD | Narwane_2021 | not_relevant | 0 | 0 | The paper studies zinc(II) complexes, not trometamol, and reports no pharmacodynamic or exposure-response data for the target drug. |
| popPK | Ngara_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTZ-043, bedaquiline, pretomanid, and linezolid in mice; trometamol is not mentioned or studied. |
| PD | Niu_2020 | not_relevant | 2 | 1 | The paper reports PK parameters (AUC, t1/2) and qualitative/semi-quantitative pain scores (thresholds/latency) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) for trometamol or the prodrugs. |
| popPK | Ortiz_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fosfomycin, not trometamol (which is only mentioned as the salt form of the oral fosfomycin formulation). |
| popPK | Ozawa_1985 | irrelevant | 0 | 0 | The paper describes the purification and kinetic properties of phosphofructokinase in rat dental pulps and does not involve the drug trometamol or pharmacokinetics. |
| PD | Ozawa_1985 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of phosphofructokinase, not the pharmacodynamics of the drug trometamol. |
| popPK | Pallapies_1994 | irrelevant | 0 | 0 | The study focuses on azapropazone and ketorolac tromethamine, not trometamol (the base of the salt), and does not report PK parameters for trometamol. |
| popPK | Panel_2026 | irrelevant | 0 | 0 | The paper focuses on the identification of small-molecule agonists for neurotensin receptors and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Panel_2026 | not_relevant | 0 | 0 | The paper focuses on neurotensin receptor agonists and does not mention or analyze the drug trometamol. |
| PGx | Park_2016 | not_relevant | 0 | 0 | The paper studies the regulation of drug-metabolizing enzymes in mice by the CAR receptor and does not mention trometamol or any specific pharmacokinetic/pharmacodynamic parameters for that drug. |
| popPK | Parker_2021 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Parker_2021 | not_relevant | 0 | 0 | The paper focuses on ecological risk modeling of pesticides using the OrganoFate software and does not contain any pharmacodynamic or exposure-response data for trometamol. |
| PGx | Polyak_2023 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of magnetic nanoporous silica nanoparticles in mice, not the pharmacogenomics of trometamol. |
| popPK | Pribisko_2016 | irrelevant | 0 | 0 | The paper studies gallium corroles, not trometamol, and contains no pharmacokinetic data for the target drug. |
| PD | Pribisko_2016 | not_relevant | 0 | 0 | The paper studies gallium corroles, not trometamol, and reports IC50 values for unrelated compounds. |
| popPK | Priyanka_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Azadirachta indica (Neem) and its antimicrobial properties, with no mention of trometamol or pharmacokinetic parameters. |
| PD | Priyanka_2026 | not_relevant | 0 | 0 | The paper is a review of the plant Azadirachta indica (Neem) and its antimicrobial properties; it does not mention trometamol or report any pharmacodynamic or exposure-response data for it. |
| popPK | Przejczowska-Pomierny_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibuprofen in mice, not trometamol. |
| PGx | Qian_2016 | not_relevant | 0 | 0 | The paper investigates the anticancer effects of Sijunzi Decoction on gastric cancer cells and does not mention trometamol or any pharmacogenomic effects. |
| PD | Rakshit_2025 | not_relevant | 0 | 0 | The paper describes the synthesis and redox properties of copper complexes, not the pharmacodynamics of trometamol. |
| PD | Sager_1989 | not_relevant | 0 | 0 | The paper studies the interaction of plasticizers (TBEP, DEHP) with beta-adrenergic binding sites and does not mention or analyze the drug trometamol. |
| popPK | Sardari_2012 | irrelevant | 0 | 0 | The study investigates the biodistribution of a Samarium-153 complex, not the pharmacokinetics of trometamol. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, not trometamol. |
| PD | Sato_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of midazolam and CYP3A activity, not on the pharmacodynamics or exposure-response relationship of trometamol. |
| PD | Scaglione_1994 | not_relevant | 1 | 0 | The paper reports pharmacokinetic concentrations and compares them to MICs (qualitative PD), but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters like Emax or EC50. |
| popPK | Schluep_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the nanoparticle IT-101 (containing camptothecin) in mice, not the drug trometamol. |
| popPK | Schultz_2026 | irrelevant | 0 | 0 | The study investigates the intracellular localization of a different drug (BRP-685) using Raman spectroscopy and does not involve trometamol or pharmacokinetic parameters. |
| PD | Schultz_2026 | not_relevant | 0 | 0 | The paper focuses on the intracellular localization of a FLAP antagonist (BRP-685) using Raman spectroscopy and does not report any pharmacodynamic or exposure-response relationship for trometamol. |
| popPK | Schäfer_2012 | irrelevant | 0 | 0 | The paper studies the estrogenic properties of synthetic pyrrole compounds and does not involve the drug trometamol or any pharmacokinetic analysis. |
| PD | Schäfer_2012 | not_relevant | 0 | 0 | The paper studies the estrogenic properties of pyrrole derivatives, not the pharmacodynamics of trometamol. |
| popPK | Segre_1987 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fosfomycin (the active drug), not trometamol (the counter-ion/salt form), which is not the subject drug for PK analysis in this context. |
| popPK | Sekar_1991 | irrelevant | 0 | 0 | The paper studies bombesin and related peptides in rat pancreatic tissue and does not involve trometamol pharmacokinetics. |
| PD | Sekar_1991 | not_relevant | 0 | 0 | The paper studies bombesin, neuromedin B, and neuromedin C, not trometamol. |
| popPK | Selvaraju_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a radiolabeled exendin-4 PET tracer, not the drug trometamol. |
| PGx | Sharin_2025 | not_relevant | 0 | 0 | The paper focuses on the development of a cormorant cell line for toxicology screening and does not mention trometamol or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Sharma_2025 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Sharma_2025 | not_relevant | 0 | 0 | The paper discusses HIV-1 inhibitors (Fullerene-Porphyrin Dyads) and does not mention trometamol or report any pharmacodynamic parameters for it. |
| PGx | Shi_2026 | not_relevant | 0 | 0 | The paper investigates the toxicological mechanisms of the environmental pollutant TDCPP in ovarian cancer and does not report pharmacogenomic effects on the PK/PD of trometamol. |
| popPK | Shippy_2017 | irrelevant | 0 | 0 | The paper studies phosphinophosphonates and their prodrugs for butyrophilin activation, not the pharmacokinetics of trometamol. |
| popPK | Smith_1989 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Smith_1989 | not_relevant | 0 | 0 | The paper discusses bacitracin and nitrendipine binding, not trometamol, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Solomon_2020 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PD | Solomon_2020 | not_relevant | 0 | 0 | The paper focuses on the radiolabeling of Nimotuzumab for imaging and therapy, and does not contain any pharmacodynamic or exposure-response analysis for trometamol. |
| PD | Songserm_2024 | not_relevant | 0 | 0 | The paper studies the effect of light intensity on microalgae growth and pigment synthesis, not the pharmacodynamics of the drug trometamol. |
| PGx | Stiedl_2017 | not_relevant | 0 | 0 | The paper describes a genotyping method for the MDR1 gene in dogs and does not report pharmacokinetic or pharmacodynamic data for trometamol. |
| popPK | Sturaro_2026 | irrelevant | 0 | 0 | The paper describes the design of NOP receptor agonists (peptides) and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Sturaro_2026 | not_relevant | 0 | 0 | The paper describes the design of NOP receptor agonists and reports qualitative in vivo effects (loss of righting reflex) but does not provide numeric PD parameters or exposure-response data for trometamol. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a bacterial enzyme inhibitor and does not involve the drug trometamol or any pharmacokinetic studies. |
| PD | Su_2026 | not_relevant | 0 | 0 | The paper reports in vitro biochemical inhibition (IC50) and binding affinity (SPR) for novel MetRS inhibitors, not pharmacodynamic exposure-response relationships for the drug trometamol. |
| PGx | Suzuki_2020 | not_relevant | 0 | 0 | The paper studies tramadol, not trometamol. |
| PGx | Szychowski_2021 | not_relevant | 0 | 0 | The paper studies the toxicity of a flame retardant (TDBP-TAZTO) on neuroblastoma cells, not the pharmacokinetics or pharmacodynamics of the drug trometamol. |
| PGx | Szychowski_2025 | not_relevant | 0 | 0 | The paper studies the effects of a flame retardant (TCPP) on CYP enzymes in cell lines and does not involve the drug trometamol or any pharmacogenomic analysis. |
| PGx | Sánchez_2018 | not_relevant | 0 | 0 | The paper investigates lipid metabolism in Parkinson's disease models and does not mention trometamol or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Tanigawa_2026 | irrelevant | 0 | 0 | The paper is a computational study on coronavirus genome structure and contains no pharmacokinetic data for trometamol. |
| PD | Tanigawa_2026 | not_relevant | 0 | 0 | The paper analyzes G-quadruplex distribution in coronavirus genomes and does not contain any pharmacodynamic or exposure-response data for trometamol. |
| popPK | Tung_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ampicillin and ceftriaxone, not trometamol. |
| popPK | VanScoy_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fosfomycin (an antibiotic), not trometamol (which is mentioned only as the salt form of the drug). |
| popPK | Verma_2026 | irrelevant | 0 | 0 | The paper is a mathematical model of ocular surface ion and water transport in mice and does not involve the drug trometamol or its pharmacokinetics. |
| PD | Verma_2026 | not_relevant | 0 | 0 | The paper presents a mechanistic mathematical model of ocular surface physiology and does not report any pharmacodynamic or exposure-response data for trometamol. |
| popPK | Villa_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac, not trometamol (which is the salt form of ketorolac, but the subject drug is ketorolac, and trometamol itself is not the subject of PK analysis here). |
| popPK | Välitalo_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac, not trometamol (which is only mentioned as the salt form of the drug). |
| popPK | Wang_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diniconazole, not trometamol. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper investigates the effect of apigenin on losartan metabolism and CYP2C9 activity, not the pharmacogenomics of trometamol. |
| PD | Wang_2019 | not_relevant | 0 | 0 | The paper reports in vitro biological activities (antioxidant/antidiabetic) of coordination polymers, not pharmacodynamic or exposure-response relationships for the drug trometamol. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on organophosphate esters (OPEs) and does not involve the drug trometamol. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper studies the environmental fate of organophosphorus flame retardants (specifically TCPP) in marine ecosystems, not the pharmacokinetics of the drug trometamol. |
| popPK | Wehrfritz_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dipyrone (metamizole) and its metabolites, not trometamol. |
| PD | Wehrfritz_2026 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) parameters (Vmax, KM) for dipyrone metabolites but does not report any pharmacodynamic (PD) or exposure-response relationship, as the patient remained asymptomatic with no quantified effect data. |
| popPK | Wenner_2011 | irrelevant | 0 | 0 | The study focuses on cutaneous adrenergic dose-response modeling using norepinephrine, with ketorolac tromethamine serving only as a co-infused blocking agent, and no pharmacokinetic parameters for trometamol are reported. |
| PGx | Wenzler_2020 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamics of fosfomycin in healthy subjects and does not investigate the impact of human gene variants or genotypes on PK or PD parameters. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The study focuses on the toxicological and multi-omic effects of cytarabine in mouse testes, not the pharmacokinetics of trometamol. |
| PD | Xia_2026 | not_relevant | 0 | 0 | The paper focuses on cytarabine (Ara-C) toxicity in mouse testes and does not mention trometamol or report any pharmacodynamic parameters for it. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac tromethamine, not trometamol (which is the excipient/tris buffer). |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The paper studies the ADME of MT-8 (a procyanidin derivative) in rats, not the pharmacogenomics of trometamol. |
| PGx | Yan_2017 | not_relevant | 0 | 0 | The paper studies the toxicological effects of flame retardants on freshwater clams and does not involve the drug trometamol or human pharmacogenomics. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The paper investigates the metabolism of diosbulbin B, not trometamol. |
| PD | Yu_2023 | not_relevant | 0 | 0 | The paper describes a chemical stapling method for peptides and reports an IC50 for a specific stapled peptide, but it does not report a pharmacodynamic or exposure-response relationship for the drug trometamol. |
| PGx | Yuan_2023 | not_relevant | 0 | 0 | The paper investigates the metabolism of ibuprofen, not trometamol. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on ecological risk assessment and species sensitivity distributions for tris(2-chloroethyl) phosphate, not pharmacodynamics or exposure-response relationships for trometamol. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper describes a biosensor for estrogenic activity and does not mention trometamol or report any pharmacodynamic or exposure-response data. |
| PD | Zheng_2024 | not_relevant | 0 | 0 | The paper studies Ru(II) complexes for photodynamic therapy, not the drug trometamol. |
| popPK | Zhu_2019 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Zhu_2019 | not_relevant | 0 | 0 | The paper analyzes the fungicide iminoctadine tris (albesilate), not the drug trometamol. |
| PD | de_1995 | not_relevant | 0 | 0 | The paper studies the mutagenicity of triethylenemelamine (TEM) in Neurospora crassa, not the pharmacodynamics of trometamol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
