<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Arsenic triiodide&quot;}]"></div>

# Arsenic triiodide

- **generic name:** Arsenic triiodide
- **DrugBank:** none · **PubChem:** [CID 24575](https://pubchem.ncbi.nlm.nih.gov/compound/24575)
- **groups:** not captured

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
| 2026-11-09 06:45 | 14:23 | 0/0/0 | 0/0/0 | 0/0/0 | 937,925/14,887 | einfracz / qwen3.8-27b | 48 | 27/19 | 19/29 | 0 |

## Coverage

- **PubMed hits:** 1 matched, 68 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azanza_2023 | irrelevant | 0 | 0 | The paper is a review of drug interactions for azole antifungals and only mentions arsenic trioxide (not triiodide) in passing as a co-administered drug without providing any quantitative toxicokinetic parameters for arsenic compounds. |
| popPK | Binks_2005 | irrelevant | 0 | 0 | The paper is an epidemiological mortality study of tin smelter workers and does not report any quantitative toxicokinetic parameters for arsenic triiodide. |
| popPK | Burska_2022 | irrelevant | 0 | 0 | The paper is a narrative review on cancer treatment strategies (vitamin C and arsenic trioxide) and does not report quantitative toxicokinetic parameters for arsenic triiodide. |
| popPK | Castillo-Aleman_2025 | irrelevant | 0 | 0 | The study measures the redistribution ratio for elemental arsenic in patients, not arsenic triiodide, which is the target substance. |
| popPK | Christensen_1995 | irrelevant | 0 | 0 | The paper discusses arsenic species in general (specifically arsenic trioxide) and provides kinetic parameters for other metals, but does not report quantitative toxicokinetic data for arsenic triiodide. |
| popPK | De_2015 | irrelevant | 0 | 0 | The paper is a review on molecular monitoring (MRD) in acute promyelocytic leukemia and mentions arsenic trioxide (ATO) as a therapeutic agent, but it does not contain any toxicokinetic parameters (half-life, clearance, etc.) for arsenic trioxide or arsenic triiodide. |
| popPK | Diacomanolis_2014 | irrelevant | 2 | 2 | The study investigates the pharmacokinetics of sodium arsenate (arsenic V), not arsenic triiodide, which is the specific subject substance required. |
| popPK | Dos_2013 | irrelevant | 0 | 0 | The paper is a review of the mechanisms of action of arsenic trioxide (As2O3) in leukemia and does not report toxicokinetic parameters for arsenic triiodide. |
| popPK | El-Ghiaty_2023 | irrelevant | 0 | 0 | The study investigates arsenic trioxide (As2O3), not arsenic triiodide (AsI3), and reports gene expression changes rather than toxicokinetic parameters. |
| popPK | El_2021 | irrelevant | 0 | 0 | The paper investigates the immunological mechanisms of arsenic trioxide (not arsenic triiodide) in leukemia models and does not report any toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Fei_2020 | irrelevant | 0 | 0 | The paper is a review of arsenic trioxide (As2O3) and arsenic-metal complexes for cancer therapy, not arsenic triiodide, and contains no quantitative toxicokinetic parameters for the subject substance. |
| popPK | Freeman_1979 | irrelevant | 0 | 0 | The study investigates the toxicokinetics of naturally occurring arseno-organic compounds in fish, not arsenic triiodide, which is the required subject substance. |
| popPK | Fu_2020 | irrelevant | 0 | 0 | The paper is a review discussing the therapeutic efficacy and general pharmacokinetic challenges (e.g., rapid renal elimination) of arsenic trioxide in cancer treatment, but it does not report specific quantitative toxicokinetic parameters (half-life, clearance, etc.) for arsenic trioxide itself in this context. |
| popPK | Ghiuzeli_2022 | irrelevant | 2 | 0 | The paper studies arsenic trioxide (ATO), not arsenic triiodide, and contains no quantitative kinetic parameters in the provided text. |
| popPK | Golub_1998 | irrelevant | 0 | 0 | The paper is a review of reproductive and developmental toxicity of inorganic arsenic (specifically arsenate and arsenite) and does not contain kinetic parameters for arsenic triiodide. |
| popPK | Gupta_2013 | irrelevant | 0 | 0 | The paper is a review of curcumin pharmacokinetics and clinical efficacy, with no quantitative toxicokinetic parameters reported for arsenic triiodide. |
| popPK | Hays_2010 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for inorganic arsenic (arsenite/arsenate), not for the specific subject substance arsenic triiodide. |
| popPK | Henderson_2017 | irrelevant | 0 | 0 | The study focuses on the immunological and barrier effects of sodium arsenite on bacterial clearance, providing no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for the substance. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The paper studies arsenic trioxide (As2O3), not arsenic triiodide (AsI3), and reports qualitative subcellular imaging rather than quantitative toxicokinetic parameters. |
| popPK | Jiang_2023 | irrelevant | 0 | 0 | The paper investigates arsenic trioxide (As2O3), not arsenic triiodide (AsI3), and reports therapeutic efficacy rather than specific toxicokinetic parameters for the target substance. |
| popPK | Kitchin_2010 | irrelevant | 1 | 1 | The paper is a review of biologically based dose-response models for inorganic arsenic (iAs) and does not report quantitative toxicokinetic parameters for the specific substance arsenic triiodide. |
| popPK | Lallemand-Breitenbach_2005 | irrelevant | 0 | 0 | The paper discusses arsenic trioxide (As2O3) in the context of APL treatment mechanisms, but contains no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for arsenic triiodide. |
| popPK | Leffler_1984 | irrelevant | 0 | 0 | The study measures kinetics for arsenic trioxide (As2O3) and industrial dust, not arsenic triiodide. |
| popPK | Lew_1999 | irrelevant | 0 | 0 | The paper studies arsenic trioxide, not arsenic triiodide, and focuses on tumor perfusion rather than systemic toxicokinetic parameters of the target substance. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper focuses on the mechanism of arsenic trioxide-induced ETosis in leukemia cells and does not report toxicokinetic parameters for arsenic triiodide. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanisms of SUMO-dependent ubiquitin ligase activity (TOPORS/RNF4) in cells, and mentions arsenic only in the context of PML body degradation pathways, providing no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for arsenic triiodide. |
| popPK | Long_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study measuring blood concentrations of metals (including arsenic) and POPs, with no toxicokinetic parameters reported for arsenic triiodide. |
| popPK | Mann_1991 | irrelevant | 0 | 0 | The paper is a review of succimer's pharmacology for lead poisoning and does not report any quantitative toxicokinetic parameters for arsenic triiodide. |
| popPK | Marafante_1982 | irrelevant | 2 | 2 | The study measures the toxicokinetics of sodium arsenite (arsenite), not the specific subject substance arsenic triiodide. |
| popPK | Marvin-Peek_2026 | irrelevant | 0 | 0 | The paper is a review of arsenic trioxide (ATO) formulations, not arsenic triiodide, and contains no specific numeric kinetic parameters in the provided text. |
| popPK | Mathieu_1992 | irrelevant | 0 | 0 | The study investigates sodium arsenate poisoning, not arsenic triiodide. |
| popPK | Moosavi_2019 | irrelevant | 0 | 0 | The paper is a review on autophagy and acute promyelocytic leukemia, discussing arsenic trioxide (not triiodide) as a therapeutic agent without providing any toxicokinetic parameters for arsenic triiodide. |
| popPK | Mukherjee_2024 | irrelevant | 0 | 0 | The paper studies arsenobetaine (a different arsenic species), not arsenic triiodide. |
| popPK | Najafi_2021 | irrelevant | 0 | 0 | The paper describes a radiopharmaceutical complex of radioarsenic (77As) with a peptide, not the chemical substance arsenic triiodide (AsI3). |
| popPK | Nasr_2008 | irrelevant | 0 | 0 | The paper discusses arsenic trioxide (As2O3) as a therapeutic agent for leukemia, not arsenic triiodide, and does not report toxicokinetic parameters for arsenic triiodide. |
| popPK | Nañagas_2014 | irrelevant | 0 | 0 | The paper is a case report concerning dietary arsenobetaine (organic arsenic) in a human, not arsenic triiodide, and contains no kinetic parameters for arsenic triiodide. |
| popPK | Nicolis_2009 | irrelevant | 0 | 0 | The paper focuses on arsenic trioxide (As2O3) for treating leukemia, not arsenic triiodide, and is a review/analysis of hair content rather than a kinetic study of the specific target substance. |
| popPK | Novick_2000 | irrelevant | 1 | 0 | The paper discusses arsenic trioxide (a different chemical species than arsenic triiodide) in a review context and mentions that pharmacokinetic studies exist but does not provide specific quantitative kinetic parameters for arsenic triiodide. |
| popPK | Obrenovich_2011 | irrelevant | 0 | 0 | The paper is an epidemiological study of autism that reports arsenic concentrations in hair samples but does not contain any quantitative toxicokinetic parameters (half-lives, rate constants, clearance, etc.) for arsenic triiodide or arsenic. |
| popPK | Ornillo_2020 | irrelevant | 0 | 0 | The paper is a general review of poisoning management strategies and does not contain quantitative toxicokinetic parameters for arsenic triiodide. |
| popPK | Pan_2024 | irrelevant | 0 | 0 | The paper studies the toxic mechanism of arsenic trioxide (ATO) in chicken hepatocytes, not arsenic triiodide, and does not report quantitative toxicokinetic parameters. |
| popPK | Park_2016 | irrelevant | 0 | 0 | The paper is an epidemiological study on general arsenic exposure and diabetes risk, reporting no toxicokinetic parameters (half-life, clearance, partition coefficients) for the specific substance arsenic triiodide. |
| popPK | Park_2023 | irrelevant | 0 | 0 | The paper investigates the pulmonary toxicity of cement production particles (CPM) in mice, where arsenic is listed as a minor component, but it reports no toxicokinetic parameters for arsenic triiodide or any other specific arsenic compound. |
| popPK | Powała_2024 | irrelevant | 0 | 0 | The paper is a structural biology review of retinoic acid receptors (RARγ) and ligands, and does not contain toxicokinetic parameters for arsenic triiodide, which is only mentioned as a therapeutic co-agent for leukemia. |
| popPK | Ravandi_2025 | irrelevant | 0 | 10 | The paper reports pharmacokinetic parameters for arsenic trioxide (As2O3), not arsenic triiodide (AsI3). |
| popPK | Sanders_2021 | irrelevant | 0 | 0 | The paper discusses the production of radioactive arsenic isotopes (As-72, As-74, As-77) for nuclear medicine and does not report any toxicokinetic parameters for the chemical substance arsenic triiodide. |
| popPK | Sharma_2021 | irrelevant | 0 | 0 | The paper studies sodium arsenite (not arsenic triiodide) and reports toxicity markers (creatinine, oxidative stress) rather than toxicokinetic parameters for the target substance. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a review of mechanistic pathways and epidemiological outcomes regarding arsenic exposure and Alzheimer's disease, containing no quantitative toxicokinetic parameters (half-lives, rate constants, clearance) for arsenic triiodide or any other arsenic species. |
| popPK | Skalny_2020 | irrelevant | 0 | 0 | The paper is a review on the association of heavy metal exposure (including arsenic) with respiratory dysfunction and viral disease severity, but it does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for arsenic triiodide or any other specific arsenic compound. |
| popPK | Snider_1990 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for Lewisite (and its metabolite arsenic), not for arsenic triiodide. |
| popPK | Stevens_1977 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for cacodylic acid (dimethylarsinic acid), which is a different substance from the target arsenic triiodide. |
| popPK | Straub_2008 | irrelevant | 0 | 0 | The paper studies the mechanistic effects of arsenite on liver endothelial cells in mice and does not report toxicokinetic parameters (such as half-life, clearance of the substance itself, or partition coefficients) for arsenic triiodide. |
| popPK | Stýblo_2021 | irrelevant | 0 | 0 | The paper is a review focusing on methylated arsenic metabolites and does not report quantitative toxicokinetic parameters for arsenic triiodide. |
| popPK | Thomas_2021 | irrelevant | 0 | 0 | The paper is a review discussing arsenic biomethylation and toxicokinetics for inorganic arsenic (iAs) and its metabolites, but it does not report any kinetic parameters for arsenic triiodide (AsI3). |
| popPK | Tian_2014 | irrelevant | 0 | 0 | The study investigates the toxicokinetics of realgar (As2S2), not the target substance arsenic triiodide (AsI3). |
| popPK | Tinajero_2022 | irrelevant | 1 | 1 | The subject substance is arsenic trioxide (not arsenic triiodide), and the paper is a case report without quantitative kinetic parameters (no half-lives, clearance rates, or partition coefficients) for the specific substance of interest. |
| popPK | Turakhiya_2018 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanism of ZFAND1-mediated clearance of stress granules in cells treated with sodium arsenite, not on the toxicokinetics (absorption, distribution, metabolism, excretion) of arsenic triiodide. |
| popPK | Vahter_1995 | irrelevant | 0 | 0 | The paper studies arsenic arsenate, not arsenic triiodide, which is a different chemical species. |
| popPK | Vitaliano-Prunier_2014 | irrelevant | 0 | 0 | The paper discusses the molecular mechanism of arsenic-induced differentiation in APL (involving arsenic trioxide/trivalent arsenic) and does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for arsenic triiodide. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action (pyroptosis/immunotherapy) of an arsenic(III) drug, with no reporting of quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Webb_1987 | irrelevant | 0 | 0 | The paper studies gallium arsenide, not arsenic triiodide, and is the wrong chemical substance. |
| popPK | Wu_2022 | irrelevant | 1 | 8 | The paper reports kinetic parameters for arsenic derived from realgar (As2S2) and AnGongNiuHuang Pill, not the subject substance arsenic triiodide. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper concerns arsenic trioxide (ATO), not arsenic triiodide, and is a review lacking specific quantitative kinetic parameters for the target substance. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tetra-arsenic tetra-sulfide (AS4S4), a different substance than the target arsenic triiodide. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper studies microplastic adsorption of various arsenic compounds (likely including arsenic triiodide as a sorbate) in environmental/fluid contexts, not toxicokinetic parameters in biological organisms. |
| popPK | Zheng_2018 | irrelevant | 0 | 0 | The paper studies arsenic trioxide (sodium arsenite) in mouse cells and focuses on mRNA biology (3'UTR shortening), providing no kinetic parameters for arsenic triiodide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barsenic_triiodide%5D&body=Drug%3A%20arsenic_triiodide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_arsenic_triiodide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
