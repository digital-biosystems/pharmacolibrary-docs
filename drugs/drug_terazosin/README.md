<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04C&quot;,&quot;href&quot;:&quot;atc/G04C.md&quot;},{&quot;label&quot;:&quot;terazosin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Terazosin_Sonders1986_reference&quot;,&quot;label&quot;:&quot;Sonders_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_terazosin/Terazosin_Sonders1986_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# terazosin

- **generic name:** terazosin
- **ATC codes:** `G04CA03`
- **DrugBank:** [DB01162](https://go.drugbank.com/drugs/DB01162) · **PubChem:** [CID 5401](https://pubchem.ncbi.nlm.nih.gov/compound/5401)
- **molar mass:** 387.4329 g/mol (C19H25N5O4) — DrugBank
- **groups:** approved, investigational

## About

Terazosin is an alpha-blocker used to treat high blood pressure and urinary problems caused by an enlarged prostate, such as difficulty passing urine. It is an approved medicine and is used fairly widely, mainly for benign prostatic enlargement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q280786](https://www.wikidata.org/wiki/Q280786) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| terazosin | parent | 387.433 | C19H25N5O4 | DrugBank | [5401](https://pubchem.ncbi.nlm.nih.gov/compound/5401) | Sonders_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:36 | 9:13 | 1/1/0 | 3/0/3 | 0/0/0 | 428,894/12,884 | einfracz / qwen3.8-27b | 16 | 0/11 | 16/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sonders_1986_reference](drugs/drug_terazosin/Terazosin_Sonders1986_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Sonders RC, Pharmacokinetics of terazosin, The American journal of med… (1986) | [10.1016/0002-9343(86)90847-8](https://doi.org/10.1016/0002-9343(86)90847-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Patterson_1985_reference](drugs/drug_terazosin/Terazosin_Patterson1985_reference.md) | — | 1-compartment (no model) | 0 | Patterson SE, Terazosin kinetics after oral and intra…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.198](https://doi.org/10.1038/clpt.1985.198) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Caprino_2000_urinary_flow](drugs/drug_terazosin/pd_Caprino_2000_urinary_flow.md) | urinary flow ← Terazosin · stimulation effect | — | Caprino L, [Drugs for the treatment of benign pros…, Minerva urologica e nefrolo… (2000) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leier_1986_hemodynamic_responses](drugs/drug_terazosin/pd_Leier_1986_hemodynamic_responses.md) | hemodynamic responses ← terazosin · inhibition effect | — | Leier CV et al., The hemodynamic and clinical responses…, The American journal of the… (1986) | [10.1097/00000441-198609000-00002](https://doi.org/10.1097/00000441-198609000-00002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Witte_2002_IUP](drugs/drug_terazosin/pd_Witte_2002_IUP.md) | blockade of phenylephrine-induced intraurethral pressure response ← terazosin · direct sigmoid Emax (Hill) effect | — | Witte DG et al., Modeling of relationships between pharm…, The Journal of pharmacology… (2002) | [10.1124/jpet.300.2.495](https://doi.org/10.1124/jpet.300.2.495) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Witte_2002_MAP](drugs/drug_terazosin/pd_Witte_2002_MAP.md) | blockade of phenylephrine-induced mean arterial pressure response ← terazosin · direct sigmoid Emax (Hill) effect | — | Witte DG et al., Modeling of relationships between pharm…, The Journal of pharmacology… (2002) | [10.1124/jpet.300.2.495](https://doi.org/10.1124/jpet.300.2.495) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Achari_2000_diastolic_blood_pressure](drugs/drug_terazosin/pd_Achari_2000_diastolic_blood_pressure.md) | diastolic blood pressure ← terazosin · direct Emax (saturable) effect | model (no simulator) | Achari R et al., The relationship between terazosin dose…, Journal of clinical pharmac… (2000) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Achari_2000_systolic_blood_pressure](drugs/drug_terazosin/pd_Achari_2000_systolic_blood_pressure.md) | systolic blood pressure ← terazosin · direct Emax (saturable) effect | model (no simulator) | Achari R et al., The relationship between terazosin dose…, Journal of clinical pharmac… (2000) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Campanero_2008_DBP](drugs/drug_terazosin/pd_Campanero_2008_DBP.md) | diastolic blood pressure ← terazosin · delayed effect through an effect compartment | model (no simulator) | Campanero MA et al., Pharmacokinetic and pharmacodynamic mod…, Clinical drug investigation (2008) | [10.2165/00044011-200828030-00001](https://doi.org/10.2165/00044011-200828030-00001) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Campanero_2008_SBP](drugs/drug_terazosin/pd_Campanero_2008_SBP.md) | systolic blood pressure ← terazosin · delayed effect through an effect compartment | model (no simulator) | Campanero MA et al., Pharmacokinetic and pharmacodynamic mod…, Clinical drug investigation (2008) | [10.2165/00044011-200828030-00001](https://doi.org/10.2165/00044011-200828030-00001) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Simmering_2021_PD](drugs/drug_terazosin/pd_Simmering_2021_PD.md) | Risk of Developing Parkinson Disease ← terazosin · time-to-event model | — | Simmering JE et al., Association of Glycolysis-Enhancing α-1…, JAMA neurology (2021) | [10.1001/jamaneurol.2020.5157](https://doi.org/10.1001/jamaneurol.2020.5157) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=terazosin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), KCNH2 (inhibitor), KCNH6 (inhibitor), KCNH7 (inhibitor), TGFB1 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 57 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patterson_1985.pdf` | Patterson SE, Terazosin kinetics after oral and intra…, Clinical pharmacology and t… (1985) | popPK | 10 | [10.1038/clpt.1985.198](https://doi.org/10.1038/clpt.1985.198) | [4042526](https://pubmed.ncbi.nlm.nih.gov/4042526) | The abstract reports key pharmacokinetic metrics (half-life, peak concentrations, urinary recovery) for terazosin in humans, but explicit values for clearance and volume of distribution are not provided in the text. |
| `Sonders_1986.pdf` | Sonders RC, Pharmacokinetics of terazosin, The American journal of med… (1986) | popPK | 10 | [10.1016/0002-9343(86)90847-8](https://doi.org/10.1016/0002-9343(86)90847-8) | [2872802](https://pubmed.ncbi.nlm.nih.gov/2872802) | The text explicitly provides quantitative pharmacokinetic parameters for terazosin in humans, including volume of distribution (25-30 L), clearances (80/10 ml/min), and half-life (12 h). |
| `Campanero_2008.pdf` | Campanero MA et al., Pharmacokinetic and pharmacodynamic mod…, Clinical drug investigation (2008) | popPK | 8 | [10.2165/00044011-200828030-00001](https://doi.org/10.2165/00044011-200828030-00001) | [18266399](https://pubmed.ncbi.nlm.nih.gov/18266399) | The study describes a one-compartment PK model for terazosin but the provided text only lists pharmacodynamic parameters (Emax, EC50, kpe); specific PK values (CL, V, t1/2) are not explicitly listed in the abstract, though the model was fitted. |
| `Samara_1996.pdf` | Samara EE et al., Assessment of the pharmacokinetic-pharm…, Journal of clinical pharmac… (1996) | popPK | 5 | [10.1002/j.1552-4604.1996.tb04172.x](https://doi.org/10.1002/j.1552-4604.1996.tb04172.x) | [9013375](https://pubmed.ncbi.nlm.nih.gov/9013375) | The paper describes a relevant human PK study, but the evidence text contains no quantitative numeric values for clearance, volume, or half-life, only qualitative descriptions of non-significant changes. |

<sub>queue written 2026-10-07T09:33:19.109605+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achari_2000 | irrelevant | 0 | 0 | The study reports dose-response pharmacodynamic parameters (Emax, ED50) for blood pressure, not pharmacokinetic parameters (CL, V, ka, etc.) for terazosin. |
| popPK | Aledavood_2025 | irrelevant | 0 | 0 | The paper is an in silico study on CHI3L1 inhibitors and mentions terazosin only as one of many FDA-approved drugs screened for similarity, without reporting any pharmacokinetic parameters for it. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on drug-drug interaction signal detection in the FAERS database and does not report pharmacokinetic parameters for terazosin. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper is an in vitro machine learning study on drug synergy in cancer cells and does not report pharmacokinetic parameters for terazosin. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any pharmacokinetic parameters for terazosin. |
| popPK | Donnelly_1989 | irrelevant | 2 | 0 | The text is a qualitative review/discussion of PK-PD relationships without reporting any specific quantitative numerical values (CL, V, ka, etc.) for terazosin. |
| popPK | Gretler_1992 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacology study on fenoldopam in canine tracheal smooth muscle, where terazosin is only used as a weak antagonist/comparator, and no PK parameters are reported. |
| popPK | Hein_2001 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing receptor binding and signaling, not a pharmacokinetic study of terazosin. |
| popPK | Ito_2007 | irrelevant | 1 | 0 | The study focuses on receptor occupancy and pharmacological effects (Qmax) for therapeutic assessment, not on quantitative pharmacokinetic disposition parameters (CL, V, ka) for terazosin. |
| popPK | Kester_2003 | irrelevant | 0 | 0 | The paper reports in vitro pharmacological receptor binding (IC50) data, not pharmacokinetic disposition parameters (CL, V, etc.) for terazosin. |
| popPK | Korstanje_2011 | irrelevant | 0 | 0 | The paper studies tamsulosin, not terazosin. |
| popPK | Langenstroer_1993 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on endothelin-1 in prostate tissue where terazosin is used only as a preincubation inhibitor, not a PK subject. |
| PGx | Lewandrowski_2024 | not_relevant | 0 | 0 | The paper discusses opioid pharmacogenomics and mentions terazosin only as a chemical with protein interactions in a network, without reporting any effect of gene variants on terazosin PK/PD. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and mentions terazosin only as an example of an alpha-blocker class, without reporting any pharmacokinetic parameters for it. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | The paper is a review of ivermectin for COVID-19 and does not contain pharmacokinetic data for terazosin. |
| popPK | Preston_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of alpha-1 adrenoceptor effects in cultured cells using terazosin as a pharmacological antagonist, not a pharmacokinetic study. |
| popPK | Pruimboom-Brees_2023 | irrelevant | 0 | 0 | The paper is a review on intravitreal drug development and does not report pharmacokinetic parameters for terazosin. |
| popPK | Samara_1996 | relevant | 5 | 0 | The paper describes a relevant human PK study, but the evidence text contains no quantitative numeric values for clearance, volume, or half-life, only qualitative descriptions of non-significant changes. |
| popPK | Simpson_1985 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on rat heart cells where terazosin is used only as a pharmacological antagonist, not as a subject of pharmacokinetic analysis. |
| popPK | Staudacher_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glioblastoma cells where terazosin is used as a non-apoptotic hERG ligand to antagonize doxazosin, with no pharmacokinetic parameters reported. |
| popPK | Subhan_2025 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study examining the vasorelaxant mechanism of Schiff bases (SB1/SB2), using terazosin only as a standard alpha-1 receptor blocker comparator rather than analyzing its pharmacokinetic profile. |
| popPK | Sun_2015 | irrelevant | 0 | 0 | The paper is a computational study on predicting drug synergy in cancer and does not contain any pharmacokinetic data or parameters for terazosin. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study examines the pharmacodynamic effect of terazosin as a receptor antagonist in isolated sheep arteries, not its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:33 UTC</sub>
