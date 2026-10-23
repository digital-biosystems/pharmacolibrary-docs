<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;senna glycosides&quot;}]"></div>

# senna glycosides

- **generic name:** senna glycosides
- **ATC codes:** `A06AB06`
- **DrugBank:** [DB11365](https://go.drugbank.com/drugs/DB11365) · **PubChem:** none
- **groups:** approved, investigational

## About

Senna glycosides are stimulant laxatives used to treat constipation. They are widely used and are included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q502327](https://www.wikidata.org/wiki/Q502327) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Jiang_2025_Mpro](drugs/drug_senna_glycosides/pd_Jiang_2025_Mpro.md) | FCoV Mpro enzymatic activity ← sennoside C · direct Emax (saturable) effect | — | Jiang Z et al., Identifying Natural Products as Feline…, ACS omega (2025) | [10.1021/acsomega.4c08601](https://doi.org/10.1021/acsomega.4c08601) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span> | [Lindström_2019_5_AD_activity](drugs/drug_senna_glycosides/pd_Lindstr_m_2019_5_AD_activity.md) | Enzymatic activity with Δ5-AD biomarker turnover ← Sennoside A | — | Lindström H et al., Potent inhibitors of equine steroid iso…, PloS one (2019) | [10.1371/journal.pone.0214160](https://doi.org/10.1371/journal.pone.0214160) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span> | [Lindström_2019_CDNB_activity](drugs/drug_senna_glycosides/pd_Lindstr_m_2019_CDNB_activity.md) | Enzymatic activity with CDNB biomarker turnover ← Sennoside A | — | Lindström H et al., Potent inhibitors of equine steroid iso…, PloS one (2019) | [10.1371/journal.pone.0214160](https://doi.org/10.1371/journal.pone.0214160) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | [Satoh_2001_H_K_ATPase](drugs/drug_senna_glycosides/pd_Satoh_2001_H_K_ATPase.md) | H,K-ATPase activity ← sennoside A · direct Emax (saturable) effect | — | Satoh K et al., [The effects of kampo-formulation and t…, Yakugaku zasshi : Journal o… (2001) | [10.1248/yakushi.121.173](https://doi.org/10.1248/yakushi.121.173) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | [Satoh_2001_H_K_ATPase_2](drugs/drug_senna_glycosides/pd_Satoh_2001_H_K_ATPase_2.md) | H,K-ATPase activity ← sennoside B · direct Emax (saturable) effect | — | Satoh K et al., [The effects of kampo-formulation and t…, Yakugaku zasshi : Journal o… (2001) | [10.1248/yakushi.121.173](https://doi.org/10.1248/yakushi.121.173) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=senna_glycosides).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AQP3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:54 | 4:44 | 0/0/0 | 2/1/0 | 0/0/0 | 169,377/5,527 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 5/26 | 17/1 | 0 |

## Coverage

- **PubMed hits:** 58 matched, 73 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Takizawa_2003.pdf` | Takizawa Y et al., Pharmacokinetics of rhein from Onpi-to,…, Biological & pharmaceutical… (2003) | popPK | 8 | [10.1248/bpb.26.613](https://doi.org/10.1248/bpb.26.613) | [12736499](https://pubmed.ncbi.nlm.nih.gov/12736499) | The study reports quantitative pharmacokinetic parameters (AUC, Cmax, Tmax, excretion) for rhein, the primary active metabolite of senna glycosides, in rats. |
| `Chhabria_2025.pdf` | Chhabria S et al., Sennoside A from Cassia angustifolia as…, Biochemical and biophysical… (2025) | pd | 4 | [10.1016/j.bbrc.2025.152463](https://doi.org/10.1016/j.bbrc.2025.152463) | [40865285](https://www.ncbi.nlm.nih.gov/pubmed/40865285) | metadata signals extractable PD data (IC50) |
| `Gao_2021.pdf` | Gao W et al., Inhibition behavior of Sennoside A and…, International journal of bi… (2021) | pd | 4 | [10.1016/j.ijbiomac.2021.02.213](https://doi.org/10.1016/j.ijbiomac.2021.02.213) | [33662415](https://www.ncbi.nlm.nih.gov/pubmed/33662415) | metadata signals extractable PD data (IC50) |
| `Xia_2025.pdf` | Xia W et al., Sennoside A represses the malignant phe…, Naunyn-Schmiedeberg's archi… (2025) | pd | 4 | [10.1007/s00210-024-03612-8](https://doi.org/10.1007/s00210-024-03612-8) | [39549059](https://www.ncbi.nlm.nih.gov/pubmed/39549059) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04 16:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abid_2016 | irrelevant | 0 | 0 | The study investigates the hypolipidemic and antioxidant effects of Cassia fistula fruit extract in mice, reporting lipid profiles and enzyme activities, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Alam_2021 | irrelevant | 0 | 0 | The study is an in-silico/in-vitro analysis of phytochemicals for anti-viral activity and does not report quantitative pharmacokinetic parameters for senna glycosides. |
| popPK | Alam_2022 | irrelevant | 0 | 0 | The paper is an extraction optimization study (RSM/HPLC) and does not report any pharmacokinetic parameters for senna glycosides. |
| PD | Alam_2022 | not_relevant | 0 | 0 | The paper focuses on optimizing extraction conditions using Response Surface Methodology and reports antioxidant activity (IC50), but does not contain any pharmacodynamic, exposure-response, or dose-response analysis for the drug in a biological system. |
| popPK | Alonso-Castro_2019 | irrelevant | 0 | 0 | The study evaluates the pharmacological effects (diuretic, neuropharmacological) of a Senna extract in mice but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Alzate-Ricaurte_2026 | irrelevant | 0 | 0 | The study is a retrospective clinical analysis of dosing changes over time and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Auxtero_2021 | irrelevant | 0 | 0 | The paper is a literature review of herb-drug interactions and does not report original quantitative pharmacokinetic parameters for senna glycosides. |
| PD | Auxtero_2021 | not_relevant | 0 | 0 | The paper is a literature review on herb-drug interactions based on shared molecular targets (enzymes/transporters) and does not report any pharmacokinetic or pharmacodynamic data, concentration-effect curves, or numeric PD parameters for senna glycosides. |
| popPK | Ballotin_2021 | irrelevant | 0 | 0 | The paper is a systematic review of herb-induced liver injury cases and does not report any pharmacokinetic parameters for senna glycosides. |
| popPK | Byler_2020 | irrelevant | 0 | 0 | The paper is an in-silico virtual screening study for SARS-CoV-2 inhibitors and does not report pharmacokinetic parameters for senna glycosides. |
| PD | Byler_2020 | not_relevant | 0 | 0 | The paper describes in silico virtual screening of natural products against SARS-CoV-2 proteins and does not report any pharmacodynamic or exposure-response data for senna glycosides. |
| popPK | Chen_2019 | irrelevant | 2 | 0 | The study reports PK parameters (Cmax, AUC, MRT) for a complex herbal mixture (Dahuang-Gancao decoction) in mice, not for senna glycosides as a single subject drug, and no specific numeric values are provided in the text. |
| PD | Chen_2019 | not_relevant | 2 | 1 | The paper reports qualitative changes in pharmacodynamic effects (fecal excretion, time) and PK parameters (Cmax, AUC) between two groups, but does not provide a quantitative exposure-response model or numeric PD parameters (e.g., EC50, Emax) for senna glycosides. |
| popPK | Chhabria_2025 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| popPK | Chimi_2024 | irrelevant | 0 | 0 | The study focuses on the in vitro antibacterial activity and molecular docking of triterpenoid derivatives from Senna alata, not the pharmacokinetics of senna glycosides. |
| popPK | Colin_2024 | irrelevant | 0 | 0 | The paper is a narrative review of Cassia alata bioactive compounds (flavonoids like emodin) and does not report quantitative pharmacokinetic parameters for senna glycosides. |
| PD | Colin_2024 | not_relevant | 1 | 0 | The paper is a narrative review of pharmacological activities and mechanisms, lacking specific PK/PD modeling or numeric exposure-response parameters for senna glycosides. |
| popPK | Cuenca-León_2022 | irrelevant | 0 | 0 | The paper is a review of phytotherapy for antifungal resistance in dentistry and does not contain pharmacokinetic data for senna glycosides. |
| PD | Cuenca-León_2022 | not_relevant | 0 | 0 | The paper is a bibliographic review of phytotherapy for antifungal resistance and does not report any specific pharmacodynamic or exposure-response data for senna glycosides. |
| popPK | Dobbs_1975 | irrelevant | 2 | 0 | The study focuses on the mode of action and transport in pigs, concluding that sennosides are virtually non-absorbed, and does not report quantitative pharmacokinetic parameters like clearance or volume. |
| PD | Dobbs_1975 | not_relevant | 1 | 0 | The paper describes a qualitative mode of action and transport mechanism but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Emeriau_1983 | irrelevant | 0 | 0 | The study measures intestinal protein loss and potassium pools as safety markers, not the pharmacokinetic disposition parameters (CL, V, ka) of senna glycosides. |
| PD | Emeriau_1983 | not_relevant | 1 | 0 | The study reports safety/tolerance outcomes (protein loss, potassium) at a single fixed dose over time, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Faber_1988 | irrelevant | 2 | 1 | The study reports only the concentration of the metabolite rhein in breast milk, not quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for senna glycosides or a compartmental model. |
| popPK | Fioramonti_1988 | irrelevant | 0 | 0 | no_text gate: only 329 chars of text extracted (&lt; 400) |
| popPK | Fugh-Berman_2000 | irrelevant | 0 | 0 | The paper is a review of herb-drug interactions that mentions senna only qualitatively regarding decreased drug absorption, without reporting any quantitative pharmacokinetic parameters for senna glycosides. |
| popPK | Gaikwad_2023 | irrelevant | 0 | 0 | The study focuses on the formulation of Atenolol floating systems using Cassia fistula mucilage and does not report pharmacokinetic parameters for senna glycosides. |
| popPK | Gao_2021 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is a cost analysis of drugs for cancer symptoms and does not report any pharmacokinetic parameters for senna glycosides. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper is a financial analysis of drug costs for cancer symptoms and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Hauta-Aho_2020 | irrelevant | 0 | 0 | The study is an observational analysis of drug interactions with warfarin and does not report any pharmacokinetic parameters for senna glycosides. |
| popPK | Hietala_1988 | irrelevant | 2 | 0 | The study reports qualitative metabolic recovery percentages in the GI tract and faeces rather than quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Huo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study on the anti-tumor effects of sennoside A, containing no pharmacokinetic parameters or disposition data. |
| popPK | Jach_2026 | irrelevant | 0 | 0 | The paper is a narrative review on probiotic-plant bioactive synergy and does not report quantitative pharmacokinetic parameters for senna glycosides. |
| PD | Jach_2026 | not_relevant | 0 | 0 | The paper is a narrative review on probiotic-plant bioactive synergy and does not report specific pharmacodynamic or exposure-response data for senna glycosides. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The paper is a study on enzyme inhibition (Mpro inhibitors) and molecular docking, not a pharmacokinetic study, and reports no disposition parameters for senna glycosides. |
| popPK | Katsaliaki_2011 | irrelevant | 0 | 0 | The paper is a review of healthcare simulation techniques and does not contain any pharmacokinetic data for senna_glycosides. |
| PD | Katsaliaki_2011 | not_relevant | 0 | 0 | The paper is a review of simulation techniques in healthcare and does not contain any pharmacodynamic or exposure-response data for senna glycosides. |
| popPK | Kesavelu_2020 | irrelevant | 0 | 0 | The study evaluates the efficacy and safety of a bowel preparation regimen using the Boston Bowel Preparation Scale, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Krumbiegel_1993 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| popPK | Le_2019 | irrelevant | 0 | 0 | The study investigates the metabolic and mechanistic effects of sennoside A on obesity and insulin sensitivity in mice, but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| PD | Le_2019 | not_relevant | 2 | 1 | The study reports effects at a single fixed dose (30 mg/kg/day) and single cell concentration (100 µmol/L) without measuring drug concentrations or fitting a dose-response curve, so no PD parameters (Emax, EC50, etc.) are derivable. |
| popPK | Le_2021 | irrelevant | 0 | 0 | The paper is a review of the pharmacology, toxicology, and metabolism of Sennoside A, but it does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Lemli_1988 | irrelevant | 0 | 0 | no_text gate: only 337 chars of text extracted (&lt; 400) |
| popPK | Leng-Peschlow_1989 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of laxative effects (fecal output, transit time, fluid absorption) in rats and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Leung_2026 | irrelevant | 0 | 0 | The paper is a clinical case series regarding the management of clozapine-induced constipation and does not report any pharmacokinetic parameters for senna glycosides. |
| PD | Leung_2026 | not_relevant | 0 | 0 | The paper is a case series regarding adherence to laxatives and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for senna glycosides. |
| popPK | Lewis_2007 | irrelevant | 0 | 0 | The study investigates colonic bacterial metabolism and sulfate/hydrogen disposal in response to senna-induced transit changes, not the pharmacokinetic disposition parameters (CL, V, ka) of senna glycosides. |
| popPK | Li_2017 | irrelevant | 2 | 0 | The study focuses on a rhubarb extract where sennoside A is one of several components, and no specific quantitative PK parameters (CL, V, etc.) for senna glycosides are reported in the provided text. |
| PD | Li_2017 | not_relevant | 3 | 0 | The study reports qualitative dose-response effects (decreased SCr/BUN/UP) and PK parameters, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Lindström_2019 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic inhibition study of sennoside A on equine glutathione transferase, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is a pathological and metabolic analysis of a diabetic ulcer animal model where senna is used to induce the syndrome, not a pharmacokinetic study of senna glycosides. |
| popPK | López-Abán_2025 | irrelevant | 0 | 0 | The paper is a review of anthelmintic activity against Strongyloides and does not report pharmacokinetic parameters for senna glycosides. |
| PD | López-Abán_2025 | not_relevant | 0 | 0 | The paper is a review of natural products against Strongyloides and does not report specific pharmacodynamic or exposure-response data for senna glycosides. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of GLP-1 secretion and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Marcus_1986 | irrelevant | 0 | 0 | The study investigates the effects of wheat fiber on bile composition and transit time, using senna only as a historical comparator for mechanism, and does not report pharmacokinetic parameters for senna glycosides. |
| popPK | Mehta_2017 | irrelevant | 0 | 0 | The paper is a transcriptomic study of the plant *Cassia angustifolia* (senna) and contains no pharmacokinetic data for senna glycosides. |
| popPK | Mei_2015 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of anthraquinones from Cassia obtusifolia on NAFLD in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Mnisi_2025 | irrelevant | 0 | 0 | The paper is a review of ethnomedicinal uses and pharmacological activities of Senna petersiana, containing no quantitative pharmacokinetic parameters for senna glycosides. |
| PD | Mnisi_2025 | not_relevant | 1 | 0 | The paper is a general review of phytochemistry and pharmacological activities without specific quantitative exposure-response or dose-response modeling for senna glycosides. |
| popPK | Moreau_1985 | relevant | 4 | 3 | The study reports quantitative urinary and biliary excretion percentages for sennosides A and B in rats, which are disposition parameters, but does not provide standard compartmental PK parameters like CL or V. |
| popPK | Nate-Anong_2025 | irrelevant | 0 | 0 | The paper is a dosage guideline table for pediatric laxatives and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Nezi_2025 | irrelevant | 0 | 0 | The study is an in-vitro untargeted metabolomic profiling of plant extracts and does not report any pharmacokinetic parameters. |
| popPK | Pasion_2025 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials for scabies treatment using herbal plants (including Senna alata) and reports efficacy outcomes (clearance of lesions), not pharmacokinetic parameters for senna glycosides. |
| popPK | Peng_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on sennoside B as a TNF-α inhibitor and does not report any pharmacokinetic parameters. |
| popPK | Qiao_2023 | irrelevant | 0 | 0 | The study is an in-vitro and in-vivo mechanistic investigation of sennoside A's anti-tumor effects and does not report any pharmacokinetic parameters. |
| popPK | Rahman_2023 | irrelevant | 0 | 0 | The study focuses on in vitro phytochemical screening and in silico ADME predictions for individual compounds, not quantitative pharmacokinetic parameters for senna glycosides. |
| popPK | Satoh_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of H,K-ATPase inhibition by sennosides, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Seo_2026 | irrelevant | 0 | 0 | The paper is a chemical profiling study of herbal preparations and does not report any pharmacokinetic parameters for senna glycosides. |
| PD | Seo_2026 | not_relevant | 0 | 0 | The paper is a chemical profiling study comparing marker compound levels in different formulations using LC-MS/MS and does not report any pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The study focuses on in-vitro physicochemical properties and release kinetics of a traditional Chinese medicine decoction, not on in-vivo pharmacokinetic parameters (CL, V, ka) for senna glycosides. |
| popPK | Sonohata_2025 | irrelevant | 0 | 0 | The paper is a retrospective claims database study on prescription patterns of laxatives (including sennoside) for opioid-induced constipation and does not report any pharmacokinetic parameters. |
| PD | Sonohata_2025 | not_relevant | 0 | 0 | The paper is a retrospective claims database study analyzing prescription patterns and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for senna glycosides. |
| PD | Takizawa_2003 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC, excretion) for rhein and does not measure or model any pharmacodynamic effect or exposure-response relationship. |
| popPK | Ukil_2022 | irrelevant | 0 | 0 | The study investigates the in vitro effect of Senna extracts on parasite mitochondrial activity, not the pharmacokinetics of senna glycosides. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacological effects (anti-diabetic/renoprotective) of Cassiae Semen extract in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | Wang_2021 | irrelevant | 2 | 1 | The paper is a review of anthraquinones generally and does not report original quantitative PK parameters (CL, V, ka) for senna glycosides specifically, only citing general trends or other compounds. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Xia_2025 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| popPK | Yin_2017 | irrelevant | 2 | 1 | The study focuses on the radiolabeled compound 131I-Sennoside A for imaging/toxicity, reporting only a half-life without volume or compartmental parameters, and does not characterize the pharmacokinetics of native senna glycosides. |
| popPK | Yu_2021 | irrelevant | 0 | 0 | The study investigates the effect of senna (Folium Sennae) on the pharmacokinetics of methotrexate (MTX), using MTX as the subject drug, rather than reporting PK parameters for senna glycosides themselves. |
| popPK | Zhang_2015 | irrelevant | 2 | 1 | The study focuses on the biodistribution and necrosis-avidity of a radioiodinated derivative (131I-SB) for imaging, reporting only a single elimination half-life without a compartmental model or other quantitative PK parameters (CL, V) for the parent drug. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is a metabolomics investigation of a syndrome model in rats where senna is used only to induce the model, not to characterize its pharmacokinetic parameters. |
| popPK | de_1990 | irrelevant | 0 | 0 | The paper is a qualitative review of the metabolism of anthranoid laxatives and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for senna glycosides. |
| popPK | de_1993 | irrelevant | 2 | 0 | The paper is a review discussing the general metabolism of anthranoids and sennosides without reporting specific quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for senna_glycosides. |
| popPK | el-Saadany_1991 | irrelevant | 0 | 0 | The study investigates the biochemical and hypocholesterolaemic effects of Cassia fistula in rats, not the pharmacokinetics of senna glycosides. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsenna_glycosides%5D&body=Drug%3A%20senna_glycosides%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_senna_glycosides/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
