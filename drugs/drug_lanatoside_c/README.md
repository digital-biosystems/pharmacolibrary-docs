<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;lanatoside C&quot;}]"></div>

# lanatoside C

- **generic name:** lanatoside C
- **ATC codes:** `C01AA06`
- **DrugBank:** [DB13467](https://go.drugbank.com/drugs/DB13467) · **PubChem:** not captured
- **molar mass:** 985.127 g/mol (C49H76O20) — DrugBank
- **groups:** investigational

## About

Lanatoside C is a cardiac glycoside, a class of drugs used for heart conditions such as heart failure and certain rhythm disturbances. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6482953](https://www.wikidata.org/wiki/Q6482953) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 03:10 | 4:12 | 0/0/0 | 0/0/0 | 0/0/0 | 141,547/3,572 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 5/12 | 13/1 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 75 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Urtizberea_1990.pdf` | Urtizberea M et al., Toxicokinetic-toxicodynamic models desc…, Toxicology in vitro : an in… (1990) | pd | 4 | [10.1016/0887-2333(90)90112-7](https://doi.org/10.1016/0887-2333(90)90112-7) | [20702226](https://www.ncbi.nlm.nih.gov/pubmed/20702226) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T03:10:28.678304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aldous_1977 | irrelevant | 2 | 0 | The study focuses on the qualitative conversion of lanatoside C to digoxin in the gut and reports percentage composition of radioactivity rather than quantitative pharmacokinetic parameters (CL, V, ka) for lanatoside C itself. |
| popPK | Aronson_1976 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not lanatoside_c. |
| popPK | Awni_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not lanatoside_c. |
| popPK | Barminas_1999 | irrelevant | 0 | 0 | The paper analyzes the chemical composition of plant seeds and oil, containing no pharmacokinetic data for lanatoside_c. |
| popPK | Beighle_1994 | irrelevant | 0 | 0 | The paper reports mineral content in cattle bones and does not involve lanatoside_c or pharmacokinetics. |
| popPK | Beveridge_1973 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| popPK | Bizjak_1997 | irrelevant | 0 | 0 | The paper discusses digoxin, not lanatoside_c, and contains no pharmacokinetic parameters for the target drug. |
| popPK | Broni_2023 | irrelevant | 0 | 0 | The paper is an in-silico study on Ebola VP40 inhibitors where lanatoside C is only mentioned as a repurposed drug candidate, with no pharmacokinetic data reported. |
| PD | Broni_2023 | not_relevant | 0 | 0 | The paper is an in silico study identifying potential Ebola VP40 inhibitors via molecular docking and MD simulations; it does not report any pharmacodynamic, exposure-response, or dose-response data for lanatoside C or any other compound. |
| popPK | Butler_1982 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dihydrodigoxin (a digoxin metabolite), not lanatoside_c. |
| popPK | Carlson_2026 | irrelevant | 0 | 0 | The paper is a theoretical population genetics study on mutualisms and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Chaney_1966 | irrelevant | 0 | 0 | The study is a comparative behavioral analysis of emesis in birds using lanatoside C as an emetic agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cheung_2014 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (IC50) of lanatoside C, not pharmacokinetic disposition parameters. |
| popPK | Chinedu_2014 | irrelevant | 0 | 0 | The paper analyzes the chemical composition of a plant (Thaumatococcus daniellii) and does not involve lanatoside_c or pharmacokinetics. |
| popPK | Clayton_2026 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening assay for Nipah virus, not a pharmacokinetic study, and reports no disposition parameters for lanatoside C. |
| popPK | Drinnan_1991 | irrelevant | 0 | 0 | The paper describes G-protein signaling in rat basal ganglia and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Ferrari_1981 | irrelevant | 0 | 0 | The study investigates baroreceptor reflexes and cardiovascular effects, not pharmacokinetic disposition parameters. |
| popPK | Fukami_2011 | irrelevant | 0 | 0 | The study focuses on the biliary excretion of penicillin G and other compounds in rats, with no mention of lanatoside_c. |
| popPK | Ganie_2024 | irrelevant | 0 | 0 | The paper is a mathematical study on spectral graph theory (distance energies of graphs) and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Gillingham_1988 | irrelevant | 0 | 0 | The paper describes high-G training for fighter aircrew and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Gong_2019 | irrelevant | 0 | 0 | The paper is a review of chemical components in Ganoderma fungi and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Greeff_1974 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | Greeff_1977 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | Hammarström_1978 | irrelevant | 0 | 0 | The paper describes the immunological functional characterization of lanatoside-C-responsive cells (B-cell activation) and contains no pharmacokinetic data. |
| popPK | Hammarström_1979 | irrelevant | 0 | 0 | The study investigates the immunological mechanism of lymphocyte activation (mitogenicity) by lanatoside C, not its pharmacokinetic disposition parameters. |
| PD | Hammarström_1979 | not_relevant | 2 | 0 | The paper discusses dose-response profiles qualitatively to argue against a specific mechanism but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Hansson_2023 | irrelevant | 0 | 0 | The paper is a taxonomic review of a genus of wasps and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Haustein_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digitoxin and digoxin, not lanatoside_c. |
| popPK | Haustein_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 16-acetyl-gitoxin and pengitoxin, not lanatoside_c. |
| popPK | Holt_1978 | irrelevant | 0 | 0 | no_text gate: only 23 chars of text extracted (&lt; 400) |
| popPK | Ikeda_2022 | irrelevant | 0 | 0 | The paper describes the mechanism of glycogen debranching enzyme and does not involve lanatoside_c or any pharmacokinetic parameters. |
| popPK | Johansson_2001 | irrelevant | 0 | 0 | The study evaluates cytotoxicity (IC50) in tumor cells, not pharmacokinetic disposition parameters. |
| popPK | Johnson_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin and sparfloxacin, not lanatoside_c. |
| popPK | Jounela_1973 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| popPK | Kharouf_2023 | irrelevant | 0 | 0 | The paper is a dental biomechanics study on fiber posts and fracture resistance, unrelated to lanatoside_c pharmacokinetics. |
| popPK | Kramer_1977 | irrelevant | 0 | 0 | The study investigates the clearance of cardiac glycosides (strophanthin, digoxin, digitoxin) via hemofiltration and does not report pharmacokinetic parameters for lanatoside_c. |
| popPK | Kuroshli_2014 | irrelevant | 0 | 0 | The paper reports HLA-G allele frequencies in a healthy Iranian population and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Lennernäs_2003 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of atorvastatin, not lanatoside_c. |
| popPK | Lin_1992 | irrelevant | 0 | 0 | The paper analyzes hemoglobin gamma chain levels in patients with Cooley's anemia and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study investigates the molecular mechanism of lanatoside C in cancer cells (protein stability and interaction with ZDHHC21) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study of Lanatoside C's anti-tumor effects in T-cell lymphoma models and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Luxford_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not lanatoside_c. |
| popPK | Mao_2005 | irrelevant | 0 | 0 | The paper is an NMR study of a DNA aptamer's folding mechanism and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Martin-Suarez_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not lanatoside_c. |
| popPK | Miyazawa_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin and digitoxin, not lanatoside_c. |
| popPK | Nagao_2023 | irrelevant | 0 | 0 | The study is an in-vitro and in-vivo mechanistic/therapeutic study of lanatoside C as an antitumor agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ngernsaengsaruay_2023 | irrelevant | 0 | 0 | The paper is a taxonomic revision of plant species and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Ngernsaengsaruay_2025 | irrelevant | 0 | 0 | The paper is a taxonomic revision of the plant genus Garcinia and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Ochs_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digitoxin, not lanatoside_c. |
| popPK | Osthoff_2025 | irrelevant | 0 | 0 | The paper analyzes the composition of white rhinoceros milk and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Pedersen_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not lanatoside_c. |
| popPK | Petersen_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not lanatoside_c. |
| popPK | Salcedo-Mingoarranz_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not lanatoside_c. |
| popPK | Sansom_1995 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tiludronate, not lanatoside_c. |
| popPK | Shavrin_2022 | irrelevant | 0 | 0 | The paper is a taxonomic study of beetles (Coleoptera) and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Shi_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of atherosclerosis and foam cell formation in mice, reporting only a single plasma concentration measurement without any pharmacokinetic parameters (CL, V, t1/2) or compartmental modeling. |
| popPK | Smer-Barreto_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of senolytics (ginkgetin, periplocin, oleandrin) and does not involve lanatoside_c or any pharmacokinetic analysis. |
| PD | Smer-Barreto_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of senolytics (ginkgetin, periplocin, oleandrin) and does not report any pharmacodynamic or exposure-response data for lanatoside C. |
| popPK | Sumner_1976 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not lanatoside_c. |
| popPK | Sundararajan_2008 | irrelevant | 0 | 0 | The paper is a physical chemistry study on the conformations of dimethylhydrogen phosphonate (DMHP) and contains no data regarding lanatoside_c or pharmacokinetics. |
| popPK | Tilser_1980 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| popPK | Urtizberea_1990 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| popPK | Vince_1973 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| popPK | Vitti_1971 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| popPK | WILLCOX_1962 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | Wei_2022 | irrelevant | 0 | 0 | The paper is a genetic association study on metallothionein genes and hypertensive disorders of pregnancy, containing no pharmacokinetic data for lanatoside_c. |
| popPK | Weissman_2019 | irrelevant | 0 | 0 | The paper is a taxonomic review of cricket species and contains no pharmacokinetic data for lanatoside_c. |
| popPK | Widyawati_2025 | irrelevant | 0 | 0 | The study investigates the antioxidant effects of vitamin C on corneal endothelium and does not involve lanatoside_c or its pharmacokinetics. |
| PD | Widyawati_2025 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial on Vitamin C and does not mention lanatoside C or report any pharmacodynamic data. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The study is a mechanistic investigation of the Otub1/c-Maf axis in multiple myeloma, using lanatoside C as a therapeutic agent, and does not report any pharmacokinetic parameters. |
| popPK | Yukawa_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not lanatoside_c. |
| popPK | Zhao_2020 | irrelevant | 0 | 0 | The paper characterizes the chemical composition of highland barley bran oil and does not involve lanatoside_c or pharmacokinetics. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on the immunological effects of lanatoside C (binding to STUB1, degrading RUNX1) and does not report pharmacokinetic parameters like clearance or volume. |
| PGx | Zhu_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study identifying molecular targets for ulcerative colitis and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | unknown_1969 | irrelevant | 0 | 0 | no_text gate: only 14 chars of text extracted (&lt; 400) |
| popPK | van_1974 | irrelevant | 0 | 0 | The paper studies glycosyltransferase genetics in plants (Melandrium) and contains no data for lanatoside_c. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
