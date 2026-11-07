<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;lomefloxacin&quot;}]"></div>

# lomefloxacin

- **generic name:** lomefloxacin
- **ATC codes:** `J01MA07`, `J04AM09`, `J04AM10`, `S01AE04`
- **DrugBank:** [DB00978](https://go.drugbank.com/drugs/DB00978) · **PubChem:** [CID 3948](https://pubchem.ncbi.nlm.nih.gov/compound/3948)
- **molar mass:** 351.3479 g/mol (C17H19F2N3O3) — DrugBank
- **groups:** approved

## About

Lomefloxacin is a fluoroquinolone antibiotic used against bacterial infections such as urinary tract infections, bronchitis, and eye infections including conjunctivitis. It is an approved medicine, available as tablets for systemic use and as eye drops, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q203618](https://www.wikidata.org/wiki/Q203618) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Beberok_2020_cell_viability](drugs/drug_lomefloxacin/pd_Beberok_2020_cell_viability.md) | cell viability ← lomefloxacin · direct Emax (saturable) effect | — | Beberok A et al., UVA Radiation Enhances Lomefloxacin-Med…, International journal of mo… (2020) | [10.3390/ijms21238937](https://doi.org/10.3390/ijms21238937) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lomefloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCC2` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:02 | 11:07 | 0/0/0 | 1/0/0 | 0/0/0 | 242,036/7,216 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 62 matched, 42 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arakawa_2016.pdf` | Arakawa H et al., Possible interaction of quinolone antib…, Biopharmaceutics & drug dis… (2016) | pd | 5 | [10.1002/bdd.1999](https://doi.org/10.1002/bdd.1999) | [26590007](https://www.ncbi.nlm.nih.gov/pubmed/26590007) | metadata signals extractable PD data (IC50) |
| `Wang_2024.pdf` | Wang A et al., Quantum dot-based fluorescence-linked i…, Food additives & contaminan… (2024) | pd | 5 | [10.1080/19440049.2023.2267144](https://doi.org/10.1080/19440049.2023.2267144) | [38502862](https://www.ncbi.nlm.nih.gov/pubmed/38502862) | metadata signals extractable PD data (IC50) |
| `Beberok_2017.pdf` | Beberok A et al., Lomefloxacin Induces Oxidative Stress a…, International journal of mo… (2017) | pd | 4 | [10.3390/ijms18102194](https://doi.org/10.3390/ijms18102194) | [29053584](https://www.ncbi.nlm.nih.gov/pubmed/29053584) | metadata signals extractable PD data (IC50) |
| `Lei_2023.pdf` | Lei X et al., Fluorescent strip sensor for rapid and…, The Analyst (2023) | pd | 4 | [10.1039/d2an01757a](https://doi.org/10.1039/d2an01757a) | [36537261](https://www.ncbi.nlm.nih.gov/pubmed/36537261) | metadata signals extractable PD data (IC50) |
| `Luo_2020.pdf` | Luo M et al., Sensitive immunoassays based on a monoc…, Journal of dairy science (2020) | pd | 4 | [10.3168/jds.2019-18108](https://doi.org/10.3168/jds.2019-18108) | [32684479](https://www.ncbi.nlm.nih.gov/pubmed/32684479) | metadata signals extractable PD data (IC50) |
| `Robinson_2005.pdf` | Robinson AA et al., Toxicity of fluoroquinolone antibiotics…, Environmental toxicology an… (2005) | pd | 4 | [10.1897/04-210r.1](https://doi.org/10.1897/04-210r.1) | [15720004](https://www.ncbi.nlm.nih.gov/pubmed/15720004) | metadata signals extractable PD data (EC50) |
| `Sikri_2004.pdf` | Sikri V et al., Cotransport of macrolide and fluoroquin…, American journal of therape… (2004) | pd | 4 | [10.1097/01.mjt.0000132643.69143.64](https://doi.org/10.1097/01.mjt.0000132643.69143.64) | [15543082](https://www.ncbi.nlm.nih.gov/pubmed/15543082) | metadata signals extractable PD data (IC50) |
| `Zhou_2022.pdf` | Zhou X et al., Development of a colloidal gold immunoc…, Journal of environmental sc… (2022) | pd | 4 | [10.1080/03601234.2022.2068908](https://doi.org/10.1080/03601234.2022.2068908) | [35477387](https://www.ncbi.nlm.nih.gov/pubmed/35477387) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-13 12:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adly_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro anticancer activity of lomefloxacin derivatives, containing no pharmacokinetic data. |
| popPK | Arakawa_2016 | irrelevant | 0 | 0 | The study investigates lomefloxacin as an inhibitor of PEPT1 transport in vitro and in vivo, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for lomefloxacin itself. |
| popPK | Beberok_2017 | irrelevant | 0 | 0 | The study is an in vitro investigation of the effect of fluoroquinolones on melanogenesis and cell viability, containing no pharmacokinetic parameters. |
| popPK | Beberok_2017_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lomefloxacin's cytotoxic and apoptotic effects on melanoma cells, reporting no pharmacokinetic parameters. |
| popPK | Beberok_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lomefloxacin's cytotoxic and pro-apoptotic effects in melanoma cells, reporting no pharmacokinetic parameters. |
| popPK | Brain_2004 | irrelevant | 0 | 0 | This is an aquatic toxicology/phytotoxicity study measuring EC50 values in plants, not a pharmacokinetic study of drug disposition. |
| popPK | Chain_2013 | irrelevant | 0 | 0 | The study focuses on cisapride, sotalol, and moxifloxacin, not lomefloxacin. |
| popPK | Draveny_2025 | irrelevant | 0 | 0 | The study focuses on the intracellular accumulation of ciprofloxacin in E. coli, and lomefloxacin is only mentioned as a future comparison, with no PK parameters reported. |
| popPK | Fedorowicz_2019 | irrelevant | 0 | 0 | The study is an in-vitro synthesis and biological evaluation of hybrid compounds, reporting antimicrobial activity and molecular docking, but contains no pharmacokinetic parameters for lomefloxacin. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacodynamic evaluation of anaphylactoid reactions (histamine release) and does not report pharmacokinetic parameters for lomefloxacin. |
| popPK | Helfer_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftaroline in rats, not lomefloxacin. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis patients and does not report any pharmacokinetic parameters for lomefloxacin. |
| popPK | Kim_2009 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay and pharmacodynamic modeling, not a pharmacokinetic study reporting disposition parameters for lomefloxacin. |
| popPK | Lei_2023 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting drug residues in food, not a pharmacokinetic study. |
| popPK | Luo_2020 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Maeda_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of insulin release in rat pancreatic islets (in vitro) and does not report pharmacokinetic parameters for lomefloxacin. |
| popPK | Morrissey_2000 | irrelevant | 0 | 0 | The study investigates the bactericidal activity of gemifloxacin in vitro, with lomefloxacin serving only as a comparator agent, and contains no pharmacokinetic data. |
| popPK | Pessina_1994 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Pranger_2011 | irrelevant | 1 | 0 | This is a review article discussing lomefloxacin as a novel fluoroquinolone for TB, but it does not report original quantitative PK parameter values for lomefloxacin in the provided evidence. |
| popPK | Robinson_2005 | irrelevant | 0 | 0 | The paper reports ecotoxicity values (EC50s) for aquatic organisms, not pharmacokinetic disposition parameters. |
| popPK | Rothlin_1999 | irrelevant | 0 | 0 | The paper is a historic review of quinolones that mentions lomefloxacin only as a second-generation example without providing any specific quantitative pharmacokinetic parameters. |
| popPK | Rustige_1990 | irrelevant | 1 | 1 | The paper is an in vitro antibacterial activity study using a pharmacokinetic model to simulate drug concentrations, not a primary study reporting measured disposition parameters for the drug in a subject. |
| PGx | Rustige_1990 | not_relevant | 0 | 0 | The paper describes an in vitro pharmacokinetic model to study antibacterial activity and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Scelzi_2001 | irrelevant | 2 | 0 | The study reports tissue-to-serum ratios and qualitative PK properties but does not provide quantitative compartmental parameters (CL, V, ka) or a population PK model. |
| popPK | Schentag_1992 | irrelevant | 2 | 0 | The text is a review discussing qualitative trends in lomefloxacin pharmacokinetics in the elderly without providing specific quantitative parameter values. |
| popPK | Sikri_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein inhibition and transport kinetics, not a pharmacokinetic study reporting disposition parameters for lomefloxacin. |
| popPK | Stahlmann_1999 | irrelevant | 0 | 0 | The paper is a review of the toxicity of quinolones and does not report any pharmacokinetic parameters for lomefloxacin. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and explicitly states that lomefloxacin was not found to influence theophylline disposition; it does not report pharmacogenomic effects on lomefloxacin. |
| popPK | Wagai_1991 | irrelevant | 0 | 0 | The study investigates phototoxicity (ear swelling) in mice and does not report pharmacokinetic parameters such as clearance, volume, or half-life for lomefloxacin. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper describes an analytical method (FLISA) for detecting lomefloxacin residues in food, not a pharmacokinetic study. |
| popPK | Wolfson_1991 | irrelevant | 2 | 0 | The paper is a review of quinolone pharmacokinetics that discusses lomefloxacin generally but does not provide specific quantitative disposition parameters (CL, V, etc.) for lomefloxacin in the provided text. |
| popPK | Yi_2012 | irrelevant | 0 | 0 | The study focuses on the development of an immunoassay for gatifloxacin, with lomefloxacin serving only as a cross-reactivity comparator, and no pharmacokinetic parameters are reported. |
| popPK | Yonezawa_2017 | relevant | 4 | 8 | The study reports basic non-compartmental PK parameters (Cmax, Tmax, AUC, T1/2) for lomefloxacin in rats, but lacks a compartmental model or clearance/volume estimates. |
| popPK | Young_1996 | irrelevant | 0 | 0 | The study investigates the wavelength dependence of lomefloxacin photosensitization in human skin and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper describes an immunoassay (ELISA) method for detecting drug residues, not a pharmacokinetic study, and contains no PK parameters like clearance or volume. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study focuses on the development of an immunochromatographic assay for pefloxacin, with lomefloxacin mentioned only as a cross-reactivity control, and contains no pharmacokinetic parameters. |
| popPK | Zou_2019 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assessment of antibiotic sensitivity in denitrifying bacteria, not a pharmacokinetic study of lomefloxacin. |
| popPK | Zou_2026 | irrelevant | 0 | 0 | The study investigates the environmental impact of lomefloxacin on groundwater denitrification, not its pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blomefloxacin%5D&body=Drug%3A%20lomefloxacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lomefloxacin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
