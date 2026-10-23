<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;dextran&quot;}]"></div>

# dextran

- **generic name:** dextran
- **ATC codes:** `B05AA05`
- **DrugBank:** [DB09255](https://go.drugbank.com/drugs/DB09255) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Dextran, a glucose polymer, is used as a plasma substitute and as an anticoagulant. It is an approved medicine, also approved for veterinary use, and some forms remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423123](https://www.wikidata.org/wiki/Q423123) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Schwarz_1981_reference](drugs/drug_dextran/Dextran_Schwarz1981_reference.md) | — | 1-compartment (no model) | 4 | Schwarz JA et al., Pharmacokinetics of low molecular (mono…, International journal of cl… (1981) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dextran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 21:55 | 8:14 | 0/1/0 | 0/0/0 | 0/0/0 | 151,961/18,663 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 1/17 | 18/0 | 0 |

## Coverage

- **PubMed hits:** 240 matched, 60 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schwarz_1981.pdf` | Schwarz JA et al., Pharmacokinetics of low molecular (mono…, International journal of cl… (1981) | popPK | 10 | not captured | [6171533](https://pubmed.ncbi.nlm.nih.gov/6171533) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, renal clearance, total clearance) for dextran 1 in human volunteers. |
| `Futaki_2023.pdf` | Futaki M et al., Effects of Intradermal Administration V…, Pharmaceutical research (2023) | popPK | 8 | [10.1007/s11095-023-03529-6](https://doi.org/10.1007/s11095-023-03529-6) | [37165148](https://pubmed.ncbi.nlm.nih.gov/37165148) | The study reports pharmacokinetic parameters (absorption rates, clearance, etc.) for dextran (FD-4) in a compartmental model, but the specific numeric values are not present in the provided abstract text. |
| `Gerstin_1992.pdf` | Gerstin EH et al., Heparin, dextran and trypan blue allost…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1281880](https://www.ncbi.nlm.nih.gov/pubmed/1281880) | metadata signals extractable PD data (EC50) |
| `Wehl_2026.pdf` | Wehl I et al., Characterization of human intestinal or…, Drug metabolism and disposi… (2026) | pgx | 7 | [10.1016/j.dmd.2026.100308](https://doi.org/10.1016/j.dmd.2026.100308) | [42190309](https://www.ncbi.nlm.nih.gov/pubmed/42190309) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yang_2024.pdf` | Yang Y et al., Circadian time-dependent effects of exp…, British journal of pharmaco… (2024) | pgx | 7 | [10.1111/bph.16440](https://doi.org/10.1111/bph.16440) | [38862812](https://www.ncbi.nlm.nih.gov/pubmed/38862812) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-05T21:48:11.942483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brambillasca_2024 | irrelevant | 0 | 0 | Dextran is used only as a fluorescent tracer (FITC-dextran) to measure macropinocytosis in an in-vitro screening, not as a subject drug for pharmacokinetic analysis. |
| PD | Brambillasca_2024 | not_relevant | 0 | 0 | The paper uses dextran as a fluorescent tracer to quantify macropinocytosis, not as a drug, and reports EC50 values for other small molecule inhibitors, not for dextran. |
| popPK | Brooks_2021 | irrelevant | 0 | 0 | Dextran is used as a diagnostic tracer to measure vascular permeability (Ktrans) in a murine leukemia model, not as the subject drug for pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Carpentier_2024 | not_relevant | 0 | 0 | The paper discusses dextran as a component of a hydrogel matrix for organoid culture, not as a drug subject to pharmacogenomic analysis. |
| PGx | Chen_2011 | not_relevant | 0 | 0 | The paper investigates the effect of a methyl-deficient diet on DSS-induced colitis severity and inflammatory markers, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper describes the construction of artificial protocells using dextran derivatives as structural polyelectrolytes, not the pharmacokinetics of dextran as a drug. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for cancer therapy and does not report pharmacokinetic parameters for dextran. |
| PD | Eljack_2022 | not_relevant | 0 | 0 | The paper is a review on nanoparticle design for chemoresistance reversal and does not report specific pharmacodynamic or exposure-response data for dextran. |
| popPK | Engel_2014 | irrelevant | 0 | 0 | The study investigates the mechanism of Factor XII autoactivation using dextran sulfate as a surface activator, not the pharmacokinetics of dextran as a drug. |
| PGx | Foerster_2022 | not_relevant | 0 | 0 | The paper is a review on autophagy and intestinal barrier function; it does not report pharmacogenomic effects on the PK/PD of dextran. |
| popPK | Futaki_2023 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (absorption rates, clearance, etc.) for dextran (FD-4) in a compartmental model, but the specific numeric values are not present in the provided abstract text. |
| PGx | Gadaleta_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of an FGF19 analogue on intestinal inflammation and microbiota, not the pharmacokinetics or pharmacodynamics of dextran. |
| PGx | Gao_2017 | not_relevant | 0 | 0 | The paper investigates the effect of gut microbiota on CYP3A and P-gp expression in a colitis model, not the effect of a host gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| PGx | Gao_2018 | not_relevant | 0 | 0 | The paper investigates the regulation of UGT1A1 expression by gut microbiota in a colitis model, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Gerstin_1992 | irrelevant | 0 | 0 | The study investigates the allosteric modulation of muscarinic receptors by dextran in rat heart homogenates, which is a mechanistic/pharmacodynamic study, not a pharmacokinetic study of dextran disposition. |
| PGx | Gu_2018 | not_relevant | 0 | 0 | The paper studies the therapeutic effect of a GLP-2 analog in a DSS-induced colitis model, not the pharmacokinetics or pharmacodynamics of dextran itself, nor any pharmacogenomic interaction. |
| PGx | Hirano_2026 | not_relevant | 0 | 0 | The paper studies the effect of osteopontin gene knockout on dextran sulfate sodium (DSS)-induced colitis, where DSS is a chemical irritant used to model disease, not a therapeutic drug subject to pharmacokinetic/pharmacodynamic analysis. |
| PGx | Hu_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of omeprazole in a disease model (ulcerative colitis induced by dextran sulfate sodium), not the pharmacogenomics of dextran itself. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of paeonol, using dextran sulfate sodium (DSS) only as an agent to induce colitis, not as the subject drug for PK analysis. |
| PD | Jin_2016 | not_relevant | 0 | 0 | The paper studies paeonol and its metabolites, not dextran; dextran sulfate sodium (DSS) is only mentioned as an agent to induce colitis in the animal model, and no PD parameters for dextran are reported. |
| PGx | Kaczmarek_2024 | not_relevant | 0 | 0 | The paper studies the immunosuppressive properties of a cyclic tetrapeptide and uses dextran sulfate only as an irritant to induce colitis in a mouse model; it does not report pharmacogenomic effects on the PK or PD of dextran. |
| PGx | Kang_2020 | not_relevant | 0 | 0 | The paper investigates the role of the LACC1 gene in immune response and bacterial clearance, using dextran sodium sulfate only as a chemical inducer of colitis, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Kim_2023 | not_relevant | 0 | 0 | The paper investigates the use of indocyanine green (ICG) for imaging colon cancer and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Kincaid_1996 | irrelevant | 0 | 0 | The study uses dextran amine as a tracer for anatomical labeling in rat brains, not as a drug for pharmacokinetic analysis. |
| popPK | Kobuchi_2023 | irrelevant | 0 | 0 | Dextran sulfate sodium is used only as a chemical inducer of colitis in the rat model, not as the subject drug for pharmacokinetic analysis. |
| PD | Kobuchi_2023 | not_relevant | 4 | 2 | The paper describes a PK/PD model for uracil-tegafur (5-FU), not dextran; dextran sulfate sodium is only used as a vehicle/inducer for the cancer model. |
| PGx | Kong_2025 | not_relevant | 0 | 0 | The paper studies the therapeutic effect of a polysaccharide on dextran sulfate sodium-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper investigates the role of COMMD1 in colitis pathogenesis using dextran sodium sulfate as a disease inducer, not as a therapeutic drug, and does not report pharmacokinetic or pharmacodynamic parameters of dextran. |
| PGx | Liao_2025 | not_relevant | 0 | 0 | The paper studies the effect of tanshinone IIA on intestinal permeability using dextran as a tracer, not the pharmacokinetics or pharmacodynamics of dextran itself, and contains no pharmacogenomic analysis. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of imperatorin in a dextran sulphate sodium-induced colitis model, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Lloyd_2022 | not_relevant | 0 | 0 | The paper studies the effect of dextran on dopamine diffusion in a DAT knockout model, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Mao_2021 | not_relevant | 0 | 0 | The paper investigates the role of decorin deficiency in colon cancer metastasis using dextran sodium sulfate as a chemical inducer of colitis, not as a therapeutic drug subject to pharmacogenomic analysis. |
| popPK | McLaren_1993 | irrelevant | 0 | 0 | The study focuses on fluorescein kinetics, and dextran is used only as a reference molecule to determine bulk outflow, not as the subject of PK parameter estimation. |
| PGx | Mittapalli_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of dasatinib, and dextran is only used as a passive tracer to assess blood-brain barrier permeability, not as the drug of interest. |
| PGx | Morrison_2021 | not_relevant | 0 | 0 | The paper studies the effects of a plant extract on cancer models and CYP enzymes, but does not report pharmacogenomic effects on the PK/PD of dextran. |
| popPK | Naguib_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meperidine, using dextran 70 only as a vehicle/comparator, and does not report PK parameters for dextran itself. |
| popPK | Nomura_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitomycin C-dextran conjugates (a prodrug), not dextran itself as the subject drug. |
| PGx | Nopwinyoowong_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a natural product on CYP enzyme expression in a disease model, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Onishi_2018 | irrelevant | 0 | 0 | The study focuses on the control theory and anticancer activity of a dextran-paclitaxel conjugate in cells, not on the pharmacokinetic parameters of dextran itself. |
| PGx | Park_2022 | not_relevant | 0 | 0 | The paper investigates the role of the IPMK gene in dextran sulfate sodium (DSS)-induced colitis, where dextran is a chemical irritant, not a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| popPK | Rajadhyaksha_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a protein therapeutic (scFv) delivered via hydrogels, where dextran is merely a polymer component of the delivery system, not the subject drug. |
| popPK | Ranta_2006 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic modeling for transscleral drug delivery using FITC-dextran as a tracer/probe, not a study of dextran's systemic disposition parameters. |
| PGx | Runwal_2025 | not_relevant | 0 | 0 | The paper investigates the effect of iron overload on blood-brain barrier proteins and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Rüdiger_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in podocytes, not a pharmacokinetic study of dextran disposition. |
| PGx | Schäfer_2023 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on inflammation models (DSS colitis, paw edema) and eicosanoid levels, not on the pharmacokinetic or pharmacodynamic parameters of the drug dextran. |
| PGx | Shimizu_2025 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of eggshell membrane and its effects on DSS-induced colitis, but does not report any pharmacogenomic effects on the PK or PD of dextran. |
| PGx | Sliva_2012 | not_relevant | 0 | 0 | The paper studies the chemopreventive effects of a mushroom extract on colitis-associated carcinogenesis and does not report pharmacogenomic effects on the PK/PD of dextran. |
| PGx | Tschurtschenthaler_2017 | not_relevant | 0 | 0 | The paper investigates the role of ATG16L1 and IRE1α in Crohn's disease-like ileitis and does not report any pharmacokinetic or pharmacodynamic effects of dextran. |
| popPK | Tuvaanjav_2016 | irrelevant | 0 | 0 | The study focuses on the isolation and antiviral activity of polysaccharides from Cynomorium songaricum, using dextran sulfate only as a standard comparator for antiviral potency, not as a subject of pharmacokinetic analysis. |
| PD | Tuvaanjav_2016 | not_relevant | 3 | 2 | The paper reports a single EC50 value for dextran sulfate as a reference standard in an antiviral assay, but does not provide a dose-response curve, multiple data points, or a PK/PD model for dextran itself. |
| PGx | Vagnerová_2024 | not_relevant | 0 | 0 | The paper investigates the effect of butyrate on gene expression in mice and does not involve dextran or pharmacogenomic effects on PK/PD parameters. |
| PGx | Vázquez-Arreguín_2019 | not_relevant | 0 | 0 | The paper investigates the role of the transcription factor Oct1 in colon regeneration and cancer, using dextran sodium sulfate (DSS) only as a chemical inducer of colitis, not as a drug subject to pharmacogenomic analysis. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of a Chinese medicine on a dextran sodium sulfate-induced disease model, not the pharmacokinetics or pharmacodynamics of dextran itself, and contains no pharmacogenomic data. |
| PGx | Wehl_2026 | not_relevant | 0 | 0 | The paper describes an in vitro cell culture model for drug metabolism and does not report any pharmacogenomic effects on dextran pharmacokinetics or pharmacodynamics. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | The paper studies the effect of isoliquiritigenin on gut microbiota and cancer incidence in a mouse model, not the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Yamamoto_1991 | irrelevant | 0 | 0 | Dextran is used only as an inflammatory agent (edema inducer) in a pharmacological screening study, not as the subject drug for PK analysis. |
| PD | Yamamoto_1991 | not_relevant | 0 | 0 | The paper studies a plant extract (Ageratum conyzoides), not the drug dextran; dextran is only mentioned as an irritant agent in an inflammation model. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The study investigates the effect of dextran sodium sulfate-induced colitis on theophylline pharmacokinetics, not the pharmacogenomics of dextran itself. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper investigates the anti-inflammatory mechanism of patchouli alcohol in DSS-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper discusses the structural modification of the enzyme dextransucrase to improve its stability, not the pharmacogenomics of dextran as a drug. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper investigates butyrate metabolism in ulcerative colitis and uses dextran sulfate sodium (DSS) as a chemical inducer of colitis in mice, not as a therapeutic drug subject to pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 21:48 UTC</sub>
